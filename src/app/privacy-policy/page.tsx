import Layout from "@/components/Layout";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <section className="content-section flex flex-col text-base p-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-1">Privacy Policy</h3>
        <p className="text-base opacity-75 mb-3">
          Effective Date: July 31st, 2025
        </p>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">1. Introduction</h5>
          <p>
            Welcome to Anfold, an AI-powered nutrition and exercise journal
            designed to help you track meals, workouts, and wellbeing notes.
            Your privacy is important to us, and we are committed to protecting
            your personal data. This Privacy Policy explains what data we
            collect, how we use it, and how we keep it secure when you use our
            app.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">2. Data Controller</h5>
          <p>
            Anfold is operated by Avocado Technologies UG (haftungsbeschränkt),
            a company based in Berlin, Germany.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">
            3. Types of Personal Data Collected
          </h5>
          <p className="mb-1">
            When you use Anfold, we may collect the following types of personal
            data:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Profile Information:</strong> Age, weight, height, gender,
              health goals, and dietary preferences.
            </li>
            <li>
              <strong>Contact Information:</strong> Email address (for account
              creation, support, and subscription management).
            </li>
            <li>
              <strong>Health & Nutrition Data:</strong> Meals logged,
              ingredients, exercise activities, wellbeing notes, and other
              health-related entries you provide.
            </li>
            <li>
              <strong>Device Information:</strong> Device type, operating
              system, unique device identifiers, and mobile network details.
            </li>
            <li>
              <strong>Usage Data:</strong> How you interact with the app,
              including feature usage, time spent, and user preferences.
            </li>
            <li>
              <strong>Payment & Subscription Data:</strong> Details related to
              your subscription status and credit purchases (processed securely
              via our payment partners).
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> Used to
              improve app performance, remember preferences, and enhance your
              experience.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">
            4. Purposes of Data Collection
          </h5>
          <p className="mb-1">
            We collect and use your data for the following purposes:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>To Provide and Improve Anfold:</strong> Deliver core
              functionality, maintain service quality, and enhance features.
            </li>
            <li>
              <strong>To Personalize Your Experience:</strong> Generate tailored
              nutrition analyses, exercise insights, and recommendations.
            </li>
            <li>
              <strong>To Communicate with You:</strong> Send relevant updates,
              account notifications, and optional marketing messages (only with
              your consent).
            </li>
            <li>
              <strong>To Ensure Security:</strong> Protect accounts, prevent
              misuse, and detect fraudulent activities.
            </li>
            <li>
              <strong>To Comply with Legal Obligations:</strong> Meet regulatory
              requirements and respond to lawful requests.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">
            5. Data Storage and Retention
          </h5>
          <p>
            Your data is stored securely on servers located in the European
            Union. We retain your data only as long as needed to provide
            Anfold&apos;s services and fulfill the purposes outlined in this
            policy, unless longer retention is required by law. You can request
            deletion or anonymization of your data at any time, subject to legal
            obligations.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">6. User Rights</h5>
          <p className="mb-1">
            Under the General Data Protection Regulation (GDPR), you have the
            right to:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Access your personal data.</li>
            <li>Request corrections to inaccurate or incomplete data.</li>
            <li>Request deletion of your data (under certain conditions).</li>
            <li>
              Restrict or object to data processing (under certain conditions).
            </li>
            <li>
              Request transfer of your data to another service provider (data
              portability).
            </li>
            <li>
              Withdraw consent for data processing at any time (where
              applicable).
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">7. Data Security</h5>
          <p>
            We implement strict technical and organizational measures to
            safeguard your data against unauthorized access, alteration,
            disclosure, or destruction. However, no online service can guarantee
            100% security.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">
            8. Data Processing with Third Parties
          </h5>
          <p>
            To deliver and improve Anfold&apos;s features, we work with trusted
            third parties. Effective February 10, 2025, Avocado Technologies UG
            (haftungsbeschränkt) has entered into a Data Processing Addendum
            with OpenAI Ireland Ltd. to process certain app data securely and in
            compliance with GDPR for AI-powered analyses and recommendations.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">
            9. Changes to This Privacy Policy
          </h5>
          <p>
            We may update this Privacy Policy periodically. Any updates will be
            posted here with a revised effective date. We encourage you to check
            this page regularly to stay informed about how we handle your data.
          </p>
        </div>

        <div className="mb-4">
          <p>
            By using Anfold, you acknowledge that you have read and understood
            this Privacy Policy and agree to the collection and use of your
            personal data as described.
          </p>
        </div>

        <hr className="my-2 border-border-color" />
        <p className="text-base opacity-75">
          Avocado Technologies UG (haftungsbeschränkt)
          <br />
          Berlin, Germany
        </p>
      </section>
    </Layout>
  );
}
