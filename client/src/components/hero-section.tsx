import { useState } from "react";
import DownloadForm from "./download-form";
import { VideoData } from "@/types";

interface HeroSectionProps {
  onVideoData: (data: VideoData) => void;
  showStatus: (type: 'success' | 'error' | 'loading', message: string) => void;
}

export default function HeroSection({ onVideoData, showStatus }: HeroSectionProps) {
  return (
    <section className="pinterest-gradient text-white py-12 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Download Pinterest Videos Easily</h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">Save high-quality Pinterest videos directly to your device in seconds. No registration, no watermarks.</p>
          
          <DownloadForm 
            onVideoData={onVideoData} 
            showStatus={showStatus}
          />
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white"></div>
        <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-white"></div>
        <div className="absolute bottom-10 left-1/3 w-30 h-30 rounded-full bg-white"></div>
      </div>
    </section>
  );
}
