export default function FeaturesSection() {
  const features = [
    {
      icon: "fas fa-bolt",
      title: "Fast Downloads",
      description: "Download videos in seconds with our optimized processing system."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Secure & Private",
      description: "No registration required. We don't store your data or downloaded videos."
    },
    {
      icon: "fas fa-check-circle",
      title: "High Quality",
      description: "Download videos in the highest quality available from the source."
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile Friendly",
      description: "Works perfectly on all devices, from desktops to smartphones."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Pinterest Video Downloader</h2>
          <p className="text-[#767676] max-w-2xl mx-auto">The simplest way to download and save Pinterest videos directly to your device.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 bg-[#F5F5F5] rounded-full flex items-center justify-center text-[#E60023] text-2xl mx-auto mb-4">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-[#767676]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
