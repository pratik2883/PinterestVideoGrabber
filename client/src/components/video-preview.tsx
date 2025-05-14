import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { VideoData } from "@/types";
import { saveAs } from "file-saver";

interface VideoPreviewProps {
  videoData: VideoData;
  showStatus: (type: 'success' | 'error' | 'loading', message: string) => void;
}

export default function VideoPreview({ videoData, showStatus }: VideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Reset video state when new video data is received
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [videoData]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleDownload = async (quality: 'hd' | 'sd') => {
    showStatus('loading', 'Preparing download...');
    
    try {
      const url = quality === 'hd' ? videoData.hdUrl : videoData.sdUrl;
      const filename = `pinterest-${videoData.id}-${quality}.mp4`;
      
      // Use file-saver to download the video
      saveAs(url, filename);
      
      showStatus('success', 'Download started!');
    } catch (error) {
      console.error('Download error:', error);
      showStatus('error', 'Failed to download video. Please try again.');
    }
  };

  return (
    <section id="videoPreview" className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-semibold flex items-center">
                <i className="fas fa-video text-[#E60023] mr-2"></i>
                Video Preview
              </h3>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Video Title */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <i className="fas fa-thumbtack text-[#E60023] text-xl"></i>
                </div>
                <div>
                  <h4 className="font-medium text-lg">{videoData.title}</h4>
                  <p className="text-[#767676] text-sm">by {videoData.author}</p>
                </div>
              </div>
              
              {/* Video Preview Container */}
              <div className="relative bg-black aspect-video rounded-lg overflow-hidden">
                <video 
                  ref={videoRef}
                  src={videoData.preview} 
                  className="w-full h-full object-contain"
                  playsInline
                  onClick={togglePlayPause}
                  onEnded={() => setIsPlaying(false)}
                />
                
                {!isPlaying && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black bg-opacity-30"
                    onClick={togglePlayPause}
                  >
                    <div className="w-16 h-16 rounded-full bg-black bg-opacity-60 flex items-center justify-center">
                      <i className="fas fa-play text-white text-xl"></i>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Download Options */}
              <div className="space-y-3">
                <h4 className="font-medium">Download Options</h4>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    onClick={() => handleDownload('hd')}
                    className="flex-1 bg-[#0076D3] hover:bg-[#0076D3]/90 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 h-auto"
                  >
                    <i className="fas fa-download mr-2"></i>
                    <span>Download HD</span>
                  </Button>
                  
                  <Button 
                    onClick={() => handleDownload('sd')}
                    className="flex-1 bg-gray-700 hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 h-auto"
                  >
                    <i className="fas fa-download mr-2"></i>
                    <span>Download SD</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
