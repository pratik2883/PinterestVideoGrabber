import { useState } from "react";
import DownloadForm from "./download-form";
import { VideoData } from "@/types";

interface HeroSectionProps {
  onVideoData: (data: VideoData) => void;
  showStatus: (type: 'success' | 'error' | 'loading', message: string) => void;
}

export default function HeroSection({ onVideoData, showStatus }: HeroSectionProps) {
  return (
    <section className="pinterest-gradient text-white py-14 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Download Pinterest Videos <span className="block mt-2">In Just One Click</span>
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Save high-quality Pinterest videos directly to your device in seconds. 
            No registration, no watermarks, completely free.
          </p>
          
          <DownloadForm 
            onVideoData={onVideoData} 
            showStatus={showStatus}
          />
          
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <i className="fas fa-check-circle"></i>
              <span>High-quality videos</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-check-circle"></i>
              <span>No registration required</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-check-circle"></i>
              <span>Unlimited downloads</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-check-circle"></i>
              <span>No watermarks</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-white"></div>
        <div className="absolute bottom-10 left-1/3 w-30 h-30 rounded-full bg-white"></div>
        <div className="absolute bottom-40 right-1/4 w-24 h-24 rounded-full bg-white"></div>
      </div>
    </section>
  );
}
