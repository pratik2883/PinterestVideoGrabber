import { VideoData } from '@/types';

// Function to extract Pinterest video from URL
export async function extractPinterestVideo(url: string): Promise<VideoData> {
  try {
    // Call the Pinterest video API endpoint
    const response = await fetch(`/api/extract?url=${encodeURIComponent(url)}`);
    
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || `Failed to extract video: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error extracting Pinterest video:', error);
    throw error;
  }
}
