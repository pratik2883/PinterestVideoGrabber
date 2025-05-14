import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-10">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Privacy Policy</h1>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Introduction</h2>
              <p className="mb-3">
                Welcome to Pinterest Video Downloader. At pintrestvideodownloader.com, we respect your privacy and are committed to protecting your personal data. 
                This Privacy Policy will inform you about how we treat your personal data when you visit our website and tell you about your privacy rights.
              </p>
              <p>
                Please read this Privacy Policy carefully. By using our service, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Information We Collect</h2>
              <p className="mb-3">
                Our service is designed to allow you to download Pinterest videos without requiring you to create an account or provide personal information. 
                When you use our service, we collect minimal information:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Technical Data:</strong> Includes Internet Protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website. This is collected automatically through cookies and similar technologies.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use our website and services, such as which features you use and how often.
                </li>
                <li>
                  <strong>Pinterest URLs:</strong> The Pinterest video URLs you submit to our service for processing. We do not store these URLs or the content of the videos.
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">How We Use Your Information</h2>
              <p className="mb-3">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To improve our service and user experience</li>
                <li>To monitor the usage of our service</li>
                <li>To generate anonymous, aggregate statistics about the use of our service</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Data Storage</h2>
              <p className="mb-2">
                We do not store any of the following:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Pinterest videos that you download</li>
                <li>Pinterest URLs that you submit</li>
                <li>Personal account information (since no accounts are required)</li>
              </ul>
              <p className="mt-3">
                Our service processes Pinterest URLs on-the-fly to extract video content for immediate download to your device. 
                No content is stored on our servers, and all processing is temporary.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Cookies and Tracking</h2>
              <p className="mb-3">
                We use cookies and similar tracking technologies to track activity on our service and hold certain information. 
                Cookies are files with a small amount of data that may include an anonymous unique identifier.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, 
                you may not be able to use some portions of our service.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Third-Party Services</h2>
              <p className="mb-3">
                We may employ third-party companies and individuals to facilitate our service, to provide the service on our behalf, 
                to perform service-related tasks, or to assist us in analyzing how our service is used.
              </p>
              <p>
                These third parties may have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Security</h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. 
                While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Children's Privacy</h2>
              <p>
                Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. 
                If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Changes to This Privacy Policy</h2>
              <p className="mb-3">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-gray-800">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:contact@pintrestvideodownloader.com" className="text-blue-600 hover:underline">contact@pintrestvideodownloader.com</a>
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