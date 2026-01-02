const CookiePolicy = () => {
  return (
    <div className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2, 2026</p>
          
          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">1. What Are Cookies</h2>
              <p className="text-muted-foreground">
                Cookies are small text files that are placed on your computer or mobile device 
                when you visit our website. They are widely used to make websites work more 
                efficiently and provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
              <p className="text-muted-foreground mb-4">We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong className="text-foreground">Authentication:</strong> To keep you logged in during your session</li>
                <li><strong className="text-foreground">Preferences:</strong> To remember your settings (e.g., dark mode)</li>
                <li><strong className="text-foreground">Analytics:</strong> To understand how visitors interact with our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Strictly Necessary Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    These cookies are essential for you to browse the website and use its features. 
                    Without these cookies, services like user authentication cannot be provided.
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Functional Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    These cookies allow the website to remember choices you make (such as your 
                    preferred language or theme) and provide enhanced, personalized features.
                  </p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h3 className="font-semibold mb-2">Performance Cookies</h3>
                  <p className="text-sm text-muted-foreground">
                    These cookies collect information about how visitors use our website, such as 
                    which pages are visited most often. This data helps us improve site performance.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">4. Managing Cookies</h2>
              <p className="text-muted-foreground">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>View what cookies are stored on your device</li>
                <li>Delete cookies individually or all at once</li>
                <li>Block third-party cookies</li>
                <li>Block cookies from particular websites</li>
                <li>Block all cookies</li>
                <li>Delete all cookies when you close your browser</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">5. Third-Party Cookies</h2>
              <p className="text-muted-foreground">
                We may use third-party services that place cookies on your device. These services 
                help us analyze website traffic and understand user behavior. Third-party cookies 
                are subject to the respective third party's privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">6. Cookie Duration</h2>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Session Cookies:</strong> Temporary cookies that expire when you close your browser.
                <br /><br />
                <strong className="text-foreground">Persistent Cookies:</strong> Cookies that remain on your device for a set period 
                or until you delete them. We use persistent cookies to remember your preferences 
                for future visits.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">7. Updates to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time. Any changes will be posted 
                on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about our use of cookies, please contact us at:
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

export default CookiePolicy;
