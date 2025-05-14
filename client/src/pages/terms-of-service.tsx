import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-10">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Terms of Service</h1>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Introduction</h2>
              <p className="mb-3">
                Welcome to Pinterest Video Downloader. These Terms of Service ("Terms") govern your use of our website located at pintrestvideodownloader.com 
                (the "Service") and form a binding contractual agreement between you, the user of the Service and us, the owners of the Service.
              </p>
              <p>
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, 
                you may not access the Service.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Service Description</h2>
              <p className="mb-3">
                Pinterest Video Downloader is a free online service that allows users to download videos from Pinterest by providing the URL of the video. 
                Our Service processes the provided URL and extracts the video content, allowing you to download it directly to your device.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Intellectual Property Rights</h2>
              <p className="mb-3">
                You acknowledge that:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  All videos that you download using our Service are the intellectual property of their respective owners.
                </li>
                <li>
                  Our Service does not claim ownership of any content that is accessed or downloaded through the Service.
                </li>
                <li>
                  The Pinterest name, logo, and related marks are trademarks of Pinterest, Inc. Our Service is not affiliated with, 
                  endorsed by, or sponsored by Pinterest.
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Fair Use and Compliance</h2>
              <p className="mb-3">
                By using the Service, you agree that:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  You will only download videos for personal, non-commercial use.
                </li>
                <li>
                  You will respect the intellectual property rights of others.
                </li>
                <li>
                  You will comply with all applicable laws and regulations regarding the use of downloaded content.
                </li>
                <li>
                  You will not use the downloaded content in any way that infringes on any third-party rights.
                </li>
                <li>
                  You understand that downloading content for personal use may be allowed under fair use or similar provisions in your jurisdiction, 
                  but redistributing or using the content for commercial purposes may require permission from the copyright holder.
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Limitations of Service</h2>
              <p className="mb-3">
                You acknowledge that:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Our Service only works with publicly available Pinterest videos.
                </li>
                <li>
                  The quality of the downloaded video depends on the quality of the original source on Pinterest.
                </li>
                <li>
                  We do not guarantee that the Service will be available at all times, or that it will work for all Pinterest videos.
                </li>
                <li>
                  We reserve the right to modify, suspend, or discontinue the Service at any time without notice.
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Disclaimer of Warranties</h2>
              <p className="mb-3">
                The Service is provided "as is" and "as available" without any warranties of any kind, either express or implied, 
                including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>
              <p>
                We do not warrant that the Service will be uninterrupted or error-free, that defects will be corrected, 
                or that the Service or the server that makes it available are free of viruses or other harmful components.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Limitation of Liability</h2>
              <p className="mb-3">
                In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses, 
                resulting from your access to or use of or inability to access or use the Service.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Indemnification</h2>
              <p className="mb-3">
                You agree to defend, indemnify, and hold us harmless from and against any claims, liabilities, damages, losses, and expenses, 
                including, without limitation, reasonable attorney's fees and costs, arising out of or in any way connected with your access to or use of the Service 
                or your violation of these Terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Changes to These Terms</h2>
              <p className="mb-3">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              <p>
                By continuing to access or use our Service after those revisions become effective, 
                you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the country of operation, 
                without regard to its conflict of law provisions.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at: <a href="mailto:contact@pintrestvideodownloader.com" className="text-blue-600 hover:underline">contact@pintrestvideodownloader.com</a>
              </p>
            </section>
            
            <div className="text-sm text-gray-500 pt-8 border-t border-gray-200">
              <p>Last updated: May 14, 2023</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}