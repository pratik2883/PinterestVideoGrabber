import { useState } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/hero-section";
import VideoPreview from "@/components/video-preview";
import HowItWorks from "@/components/how-it-works";
import FaqSection from "@/components/faq-section";
import FeaturesSection from "@/components/features-section";
import StatusMessage from "@/components/status-message";
import { VideoData } from "@/types";

export default function Home() {
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [statusMessage, setStatusMessage] = useState({
    type: 'success' as const,
    message: '',
    visible: false
  });

  const showStatus = (type: 'success' | 'error' | 'loading', message: string) => {
    setStatusMessage({
      type,
      message,
      visible: true
    });

    // Auto-hide success and error messages after 5 seconds
    if (type !== 'loading') {
      setTimeout(() => {
        setStatusMessage(prev => ({ ...prev, visible: false }));
      }, 5000);
    }
  };

  const hideStatus = () => {
    setStatusMessage(prev => ({ ...prev, visible: false }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Header />
      
      <main className="flex-grow">
        <HeroSection 
          onVideoData={setVideoData}
          showStatus={showStatus}
        />

        {videoData && (
          <VideoPreview
            videoData={videoData}
            showStatus={showStatus}
          />
        )}

        <HowItWorks />
        <FaqSection />
        <FeaturesSection />
      </main>

      <StatusMessage
        type={statusMessage.type}
        message={statusMessage.message}
        visible={statusMessage.visible}
        onClose={hideStatus}
      />

      <Footer />
    </div>
  );
}
