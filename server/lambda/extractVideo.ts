import { APIGatewayProxyHandler } from 'aws-lambda';
import axios from 'axios';
import { z } from 'zod';

// Improved schema for Pinterest URL validation
const urlSchema = z.object({
  url: z.string().refine(
    (url) => {
      // More flexible Pinterest URL validation
      const pinterestRegex = /(?:https?:\/\/)?(?:www\.)?(?:pinterest\.(?:com|ca|co\.uk|fr|de|jp|at|ch|ie|nz|es|it|ru|com\.au))?.*\/pin\/(\d+)/i;
      return pinterestRegex.test(url);
    },
    { message: "Invalid Pinterest URL. It must contain a pin ID (e.g., pinterest.com/pin/123456789)" }
  )
});

// Regular expressions for extracting data from Pinterest pages
const VIDEO_REGEX = /"url":"([^"]+\.mp4[^"]*)"/g;
const HIGH_RES_VIDEO_REGEX = /"highResVideoUrl":"([^"]+\.mp4[^"]*)"/g;
const TITLE_REGEX = /<title>([^<]+)<\/title>/;
const AUTHOR_REGEX = /"username":"([^"]+)"/;
const PIN_ID_REGEX = /\/pin\/(\d+)/;
const META_DESCRIPTION_REGEX = /<meta name="description" content="([^"]+)"/;

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    // Get and clean the URL
    const rawUrl = event.queryStringParameters?.url;
    
    if (!rawUrl) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "URL parameter is required" })
      };
    }

    // Validate URL
    const validation = urlSchema.safeParse({ url: rawUrl });
    
    if (!validation.success) {
      return {
        statusCode: 400,
        body: JSON.stringify({ 
          message: validation.error.errors[0]?.message || "Invalid Pinterest URL" 
        })
      };
    }
    
    // Extract pin ID and create a clean URL
    const pinIdMatch = rawUrl.match(PIN_ID_REGEX);
    if (!pinIdMatch) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Could not extract pin ID from URL" })
      };
    }
    
    const pinId = pinIdMatch[1];
    const cleanUrl = `https://pinterest.com/pin/${pinId}`;
    
    // Fetch the Pinterest page with better user agent and headers
    const response = await axios.get(cleanUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://www.pinterest.com/'
      },
      timeout: 15000 // 15 second timeout
    });
    
    const html = response.data;
    
    // Try to find high resolution videos first
    let videoMatches = [...html.matchAll(HIGH_RES_VIDEO_REGEX)];
    
    // If no high-res videos found, use standard video regex
    if (videoMatches.length === 0) {
      videoMatches = [...html.matchAll(VIDEO_REGEX)];
    }
    
    if (videoMatches.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ 
          message: "No video found in this Pinterest pin. This might be an image pin or the content is not publicly accessible."
        })
      };
    }
    
    // Extract title (try multiple methods)
    let title = "Pinterest Video";
    const titleMatch = html.match(TITLE_REGEX);
    if (titleMatch) {
      title = titleMatch[1].trim();
      // Clean up the title (remove "Pinterest" suffix if present)
      title = title.replace(/\s*-\s*Pinterest$/, '').trim();
    }
    
    // Try to get a better description from meta tags
    const metaDescMatch = html.match(META_DESCRIPTION_REGEX);
    if (metaDescMatch && title === "Pinterest Video") {
      title = metaDescMatch[1].trim();
    }
    
    // Extract author
    const authorMatch = html.match(AUTHOR_REGEX);
    const author = authorMatch ? `@${authorMatch[1]}` : "Pinterest User";
    
    // Clean video URLs
    const videoUrls = videoMatches.map(match => 
      match[1].replace(/\\u002F/g, '/').replace(/\\/g, '')
    );
    
    // Deduplicate and get the best quality videos (up to 2 different URLs)
    const uniqueVideoUrls = Array.from(new Set(videoUrls)).slice(0, 2);
    
    // Prepare response
    const videoData = {
      id: pinId,
      title,
      author,
      preview: uniqueVideoUrls[0] || '',
      hdUrl: uniqueVideoUrls[0] || '',
      sdUrl: uniqueVideoUrls[1] || uniqueVideoUrls[0] || '',
    };
    
    return {
      statusCode: 200,
      body: JSON.stringify(videoData)
    };
  } catch (error) {
    console.error('Pinterest extraction error:', error);
    
    // Provide more specific error messages based on the error type
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        return {
          statusCode: 504,
          body: JSON.stringify({ message: "Connection timeout. Pinterest might be slow or blocking our request." })
        };
      }
      
      if (error.response) {
        const status = error.response.status;
        if (status === 404) {
          return {
            statusCode: 404,
            body: JSON.stringify({ message: "Pinterest pin not found. The pin might have been deleted or is private." })
          };
        }
        return {
          statusCode: status,
          body: JSON.stringify({ 
            message: `Pinterest returned an error: ${status} ${error.response.statusText}`
          })
        };
      }
    }
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        message: error instanceof Error 
          ? `Error: ${error.message}` 
          : "Failed to extract Pinterest video. Please try again."
      })
    };
  }
};