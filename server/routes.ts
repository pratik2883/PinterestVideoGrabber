import type { Express } from "express";
import { createServer, type Server } from "http";
import axios from "axios";
import { z } from "zod";

// Schema for URL validation
const urlSchema = z.object({
  url: z.string().url().refine(
    (url) => url.includes('pinterest.com') && url.includes('/pin/'),
    { message: "Invalid Pinterest URL. It must contain 'pinterest.com' and '/pin/'" }
  )
});

// Regular expressions for extracting data from Pinterest pages
const VIDEO_REGEX = /"url":"([^"]+\.mp4[^"]*)"/g;
const TITLE_REGEX = /<title>([^<]+)<\/title>/;
const AUTHOR_REGEX = /"username":"([^"]+)"/;
const PIN_ID_REGEX = /\/pin\/(\d+)/;

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to extract Pinterest video
  app.get('/api/extract', async (req, res) => {
    try {
      // Validate URL
      const validation = urlSchema.safeParse({ url: req.query.url });
      
      if (!validation.success) {
        return res.status(400).json({ 
          message: validation.error.errors[0]?.message || "Invalid Pinterest URL" 
        });
      }
      
      const url = validation.data.url;
      
      // Fetch the Pinterest page
      const response = await axios.get(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      
      const html = response.data;
      
      // Extract video URLs
      const videoMatches = [...html.matchAll(VIDEO_REGEX)];
      
      if (videoMatches.length === 0) {
        return res.status(404).json({ message: "No video found in this Pinterest pin" });
      }
      
      // Extract title
      const titleMatch = html.match(TITLE_REGEX);
      const title = titleMatch ? titleMatch[1].trim() : "Pinterest Video";
      
      // Extract author
      const authorMatch = html.match(AUTHOR_REGEX);
      const author = authorMatch ? `@${authorMatch[1]}` : "Pinterest User";
      
      // Extract pin ID
      const idMatch = url.match(PIN_ID_REGEX);
      const id = idMatch ? idMatch[1] : Date.now().toString();
      
      // Get video URLs (take up to 2 - typically HD and SD)
      const videoUrls = videoMatches.slice(0, 2).map(match => 
        match[1].replace(/\\u002F/g, '/').replace(/\\/g, '')
      );
      
      // Prepare response
      const videoData = {
        id,
        title,
        author,
        preview: videoUrls[0] || '',
        hdUrl: videoUrls[0] || '',
        sdUrl: videoUrls[1] || videoUrls[0] || '',
      };
      
      res.json(videoData);
    } catch (error) {
      console.error('Pinterest extraction error:', error);
      res.status(500).json({ 
        message: error instanceof Error 
          ? error.message 
          : "Failed to extract Pinterest video. Please try again."
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
