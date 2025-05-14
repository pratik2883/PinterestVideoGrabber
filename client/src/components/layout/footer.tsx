export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <i className="fab fa-pinterest text-[#E60023] text-2xl"></i>
            <h2 className="text-xl font-bold">Pinterest Video Downloader</h2>
          </div>
          
          <div>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-[#E60023] transition-colors"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" className="hover:text-[#E60023] transition-colors"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#" className="hover:text-[#E60023] transition-colors"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400 text-sm">Pinterest Video Downloader is a free tool that allows you to download Pinterest videos easily. No registration required.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400 text-sm mb-2">Have questions or suggestions? Contact us.</p>
              <a href="mailto:contact@pintrestvideodownloader.com" className="text-[#E60023] hover:underline">contact@pintrestvideodownloader.com</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Pinterest Video Downloader. All rights reserved.</p>
          <p className="mt-2">This service is not affiliated with Pinterest.</p>
        </div>
      </div>
    </footer>
  );
}
