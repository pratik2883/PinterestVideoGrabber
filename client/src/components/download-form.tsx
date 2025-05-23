import { useState, FormEvent, useRef, useEffect } from "react";
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
  const [isProcessing, setIsProcessing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus the input field when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const validateUrl = (value: string) => {
    const trimmedUrl = value.trim();
    
    if (!trimmedUrl) {
      setUrlError('');
      return false;
    }
    
    // More flexible URL validation - accept different Pinterest domains and URL formats
    const pinterestRegex = /(?:https?:\/\/)?(?:www\.)?(?:pinterest\.(?:com|ca|co\.uk|fr|de|jp|at|ch|ie|nz))?.*\/pin\/(\d+)/i;
    const isPinterestUrl = pinterestRegex.test(trimmedUrl);
    
    if (!isPinterestUrl) {
      setUrlError('Please enter a valid Pinterest video URL (e.g., https://pinterest.com/pin/123456789)');
      return false;
    }
    
    setUrlError('');
    return true;
  };

  const cleanUrl = (inputUrl: string) => {
    // Find the pin ID in the URL
    const pinIdMatch = inputUrl.match(/\/pin\/(\d+)/);
    if (!pinIdMatch) return inputUrl;
    
    // Construct a clean URL with just the pin ID
    const pinId = pinIdMatch[1];
    return `https://pinterest.com/pin/${pinId}`;
  };

  const clearUrl = () => {
    setUrl('');
    setUrlError('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    if (newUrl) {
      validateUrl(newUrl);
    } else {
      setUrlError('');
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text');
    setUrl(pastedText);
    validateUrl(pastedText);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateUrl(url) || !url || isProcessing) {
      return;
    }
    
    setIsProcessing(true);
    showStatus('loading', 'Processing video, please wait...');
    
    try {
      // Clean the URL before processing
      const cleanedUrl = cleanUrl(url.trim());
      const videoData = await extractPinterestVideo(cleanedUrl);
      onVideoData(videoData);
      showStatus('success', 'Video processed successfully!');
    } catch (error) {
      console.error('Error processing video:', error);
      showStatus('error', error instanceof Error ? error.message : 'Error processing video. Please check the URL and try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-grow">
            <div className="flex items-center h-full border-2 border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#0076D3] focus-within:border-[#0076D3] transition-all bg-white">
              <div className="px-3 py-3 bg-gray-100 border-r border-gray-300 text-gray-500 h-full flex items-center">
                <i className="fab fa-pinterest text-[#E60023] text-lg"></i>
              </div>
              <Input
                ref={inputRef}
                type="text"
                placeholder="Paste Pinterest video URL here"
                className={`flex-grow px-4 py-4 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none text-base text-gray-900 font-medium bg-white hover:bg-gray-50 focus:bg-white ${urlError ? 'text-[#F44336]' : ''}`}
                value={url}
                onChange={handleUrlChange}
                onPaste={handlePaste}
                required
                aria-invalid={urlError ? 'true' : 'false'}
                aria-describedby={urlError ? "url-error" : undefined}
              />
              {url && (
                <button
                  type="button"
                  className="px-3 text-gray-500 hover:text-gray-700 bg-white"
                  onClick={clearUrl}
                  aria-label="Clear input"
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>
          </div>
          
          <Button
            type="submit"
            className="bg-[#0076D3] hover:bg-[#0076D3]/90 text-white py-4 px-6 rounded-lg font-medium transition-colors flex items-center justify-center h-auto min-w-[140px]"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <i className="fas fa-spinner fa-spin mr-2"></i>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <i className="fas fa-download mr-2"></i>
                <span>Download</span>
              </>
            )}
          </Button>
        </div>
        
        {urlError && (
          <div id="url-error" className="text-[#F44336] text-sm flex items-center mt-2">
            <i className="fas fa-exclamation-circle mr-1"></i>
            {urlError}
          </div>
        )}
        
        <div className="mt-3">
          <p className="text-sm text-gray-600">
            Example URL: <span className="font-mono bg-blue-50 px-2 py-1 rounded text-blue-700 border border-blue-100">https://pinterest.com/pin/123456789</span>
          </p>
        </div>
      </form>
    </div>
  );
}
