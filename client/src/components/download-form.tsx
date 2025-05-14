import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { extractPinterestVideo } from "@/lib/pinterest";
import { VideoData } from "@/types";

interface DownloadFormProps {
  onVideoData: (data: VideoData) => void;
  showStatus: (type: 'success' | 'error' | 'loading', message: string) => void;
}

export default function DownloadForm({ onVideoData, showStatus }: DownloadFormProps) {
  const [url, setUrl] = useState('');
  const [urlError, setUrlError] = useState('');

  const validateUrl = (value: string) => {
    const trimmedUrl = value.trim();
    
    if (!trimmedUrl) {
      setUrlError('');
      return false;
    }
    
    const isPinterestUrl = trimmedUrl.includes('pinterest.com') && trimmedUrl.includes('/pin/');
    
    if (!isPinterestUrl) {
      setUrlError('Please enter a valid Pinterest video URL');
      return false;
    }
    
    setUrlError('');
    return true;
  };

  const clearUrl = () => {
    setUrl('');
    setUrlError('');
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    validateUrl(newUrl);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateUrl(url) || !url) {
      return;
    }
    
    showStatus('loading', 'Processing video, please wait...');
    
    try {
      const videoData = await extractPinterestVideo(url);
      onVideoData(videoData);
      showStatus('success', 'Video processed successfully!');
    } catch (error) {
      console.error('Error processing video:', error);
      showStatus('error', error instanceof Error ? error.message : 'Error processing video. Please check the URL and try again.');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Input
            type="url"
            placeholder="Paste Pinterest video URL here"
            className={`w-full px-4 py-6 pr-12 rounded-lg ${urlError ? 'border-[#F44336]' : 'border-gray-300'}`}
            value={url}
            onChange={handleUrlChange}
            required
          />
          {url && (
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={clearUrl}
            >
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>
        
        {urlError && (
          <div className="text-[#F44336] text-sm">
            {urlError}
          </div>
        )}
        
        <Button
          type="submit"
          className="w-full bg-[#0076D3] hover:bg-[#0076D3]/90 text-white py-6 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 h-auto"
        >
          <i className="fas fa-download mr-2"></i>
          <span>Download Video</span>
        </Button>
      </form>
    </div>
  );
}
