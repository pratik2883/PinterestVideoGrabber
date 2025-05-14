export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-[#767676] max-w-2xl mx-auto">Download Pinterest videos in three simple steps. No registration required.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-[#F5F5F5] p-6 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-[#E60023] text-white flex items-center justify-center font-bold text-xl mb-4">1</div>
            <h3 className="text-xl font-semibold mb-3">Copy Video URL</h3>
            <p className="text-[#767676] mb-4">Find a video on Pinterest and copy its URL from the address bar or share button.</p>
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <div className="rounded-lg overflow-hidden">
                <svg viewBox="0 0 600 400" className="w-full h-auto">
                  <rect x="0" y="0" width="600" height="400" fill="#f0f0f0" />
                  <rect x="50" y="50" width="500" height="40" rx="5" fill="#e9e9e9" />
                  <rect x="60" y="60" width="400" height="20" rx="3" fill="#d0d0d0" />
                  <rect x="480" y="60" width="60" height="20" rx="3" fill="#E60023" />
                  <rect x="50" y="120" width="500" height="230" rx="5" fill="#ffffff" />
                  <circle cx="300" cy="220" r="65" fill="#E60023" opacity="0.7" />
                  <polygon points="280,190 330,220 280,250" fill="white" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="bg-[#F5F5F5] p-6 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-[#E60023] text-white flex items-center justify-center font-bold text-xl mb-4">2</div>
            <h3 className="text-xl font-semibold mb-3">Paste URL</h3>
            <p className="text-[#767676] mb-4">Paste the copied URL into the input field above and click the Download button.</p>
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <div className="relative rounded-lg overflow-hidden border border-gray-300 p-2">
                <div className="flex items-center">
                  <div className="flex-grow bg-gray-100 rounded p-2 text-sm truncate">https://pinterest.com/pin/12345678</div>
                  <div className="ml-2 px-3 py-1 bg-[#0076D3] text-white rounded text-sm">Paste</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="bg-[#F5F5F5] p-6 rounded-xl">
            <div className="w-12 h-12 rounded-full bg-[#E60023] text-white flex items-center justify-center font-bold text-xl mb-4">3</div>
            <h3 className="text-xl font-semibold mb-3">Download Video</h3>
            <p className="text-[#767676] mb-4">Preview the video and click the download button to save it to your device.</p>
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <div className="bg-gray-800 rounded-lg p-3 text-center">
                <i className="fas fa-play-circle text-white text-4xl mb-2"></i>
                <div className="bg-[#0076D3] text-white py-2 rounded text-sm font-medium">
                  <i className="fas fa-download mr-1"></i> Download
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
