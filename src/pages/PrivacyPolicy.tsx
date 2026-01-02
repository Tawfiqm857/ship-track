const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2, 2026</p>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                MaritimeTracks ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you use our shipment tracking services and website.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <div className="space-y-4 text-muted-foreground">
                <p><strong className="text-foreground">Personal Information:</strong> Name, email address, phone number, shipping addresses, and payment information when you create an account or use our services.</p>
                <p><strong className="text-foreground">Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.</p>
                <p><strong className="text-foreground">Shipment Data:</strong> Details about your shipments, including tracking numbers, origin/destination, cargo descriptions, and delivery status.</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To provide and maintain our shipment tracking services</li>
                <li>To process transactions and send related information</li>
                <li>To send you updates about your shipments</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">4. Information Sharing</h2>
              <p className="text-muted-foreground">
                We may share your information with third-party service providers who assist us in 
                operating our website, conducting our business, or servicing you. These parties 
                are obligated to keep your information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or 
                destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at:
                <br />
                Email: privacy@maritimetracks.com
                <br />
                Address: 123 Maritime Plaza, Port City, PC 12345
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
