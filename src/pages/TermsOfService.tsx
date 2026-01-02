const TermsOfService = () => {
  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2, 2026</p>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using MaritimeTracks services, you accept and agree to be bound 
                by the terms and provisions of this agreement. If you do not agree to these terms, 
                please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">2. Description of Services</h2>
              <p className="text-muted-foreground">
                MaritimeTracks provides shipment tracking, logistics management, and freight 
                forwarding services. Our services include real-time tracking, documentation 
                support, and customer communication tools.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">3. User Accounts</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>To access certain features, you must create an account. You agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">4. Shipping Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>When using our shipping services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You warrant that all shipment information provided is accurate</li>
                  <li>You agree to comply with all applicable laws and regulations</li>
                  <li>Prohibited items are not permitted and may result in account termination</li>
                  <li>Insurance coverage is subject to separate terms and conditions</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                MaritimeTracks shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages resulting from your use of or inability 
                to use our services. Our total liability shall not exceed the amount paid 
                by you for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">6. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content, features, and functionality on our website are owned by 
                MaritimeTracks and are protected by international copyright, trademark, 
                and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">7. Termination</h2>
              <p className="text-muted-foreground">
                We may terminate or suspend your account and access to our services immediately, 
                without prior notice, for any reason, including breach of these Terms. Upon 
                termination, your right to use the services will cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms shall be governed by and construed in accordance with the laws 
                of the State of Delaware, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms, please contact us at:
                <br />
                Email: legal@maritimetracks.com
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

export default TermsOfService;
