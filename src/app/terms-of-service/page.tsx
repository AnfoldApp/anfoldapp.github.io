import Layout from "@/components/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Anfold",
  description:
    "Read Anfold's terms of service covering user accounts, subscriptions, content policies, and legal terms for using our AI-powered nutrition and exercise journal app.",
};

export default function TermsOfService() {
  return (
    <Layout>
      <section className="content-section flex flex-col text-base p-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-1">Terms of Service</h3>
        <p className="text-base opacity-75 mb-3">
          Effective Date: July 31st, 2025
        </p>

        <div className="mb-4">
          <p className="mb-4">
            Welcome to Anfold! These Terms of Service (&quot;Terms&quot;) govern
            your use of the Anfold application and services, herein referred to
            as &quot;Anfold&quot;, &quot;Service&quot; or &quot;Services&quot;.
            By accessing or using Anfold, you agree to be bound by these Terms.
            If you do not agree with any part of these Terms, please do not use
            the Service.
          </p>
          <p>
            Anfold is created by Avocado Technologies UG (haftungsbeschränkt), a
            company based in Berlin, Germany, herein referred to as
            &quot;Avocado&quot;, &quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">1. Acceptance of Terms</h5>
          <p>
            By downloading, accessing, or using Anfold, you acknowledge that you
            have read, understood, and agree to be bound by these Terms, as well
            as our Privacy Policy, which is incorporated herein by reference.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">2. Changes to Terms</h5>
          <p>
            We reserve the right to modify these Terms at any time. Any changes
            will be effective immediately upon posting the revised Terms in the
            Service. Your continued use of the Service following the posting of
            changes constitutes your acceptance of such changes.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">3. Using Our Services</h5>
          <p className="mb-2">
            You may access and use our Services as long as you comply with these
            Terms and all applicable laws.
          </p>

          <h6 className="text-lg font-semibold mb-1">3.1. Eligibility</h6>
          <p className="mb-2">
            You must be at least 13 years old to use Anfold. By using the
            Service, you represent and warrant that you meet this age
            requirement.
          </p>

          <h6 className="text-lg font-semibold mb-1">3.2. User Conduct</h6>
          <p className="mb-1">
            You are prohibited from using our Services for illegal, harmful, or
            abusive activities. Examples of prohibited activities include:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              Infringing, misappropriating, or violating anyone&apos;s rights.
            </li>
            <li>
              Modifying, copying, leasing, selling, or distributing any part of
              our Services.
            </li>
            <li>
              Attempting to reverse engineer, decompile, or discover the source
              code of our Services, including models, algorithms, or systems.
            </li>
            <li>Automatically extracting data or Output without permission.</li>
            <li>Misrepresenting Output as human-generated when it is not.</li>
            <li>
              Interfering with or disrupting our Services, including bypassing
              protective measures or rate limits.
            </li>
            <li>Using Output to develop competing services with Anfold.</li>
          </ul>
          <p className="mb-2">
            In this context, we are using the term &quot;Output&quot; as defined
            in the &quot;Content&quot; section of these Terms.
          </p>

          <h6 className="text-lg font-semibold mb-1">
            3.3. Account Registration
          </h6>
          <p className="mb-2">
            To access certain features of Anfold, you may be required to create
            an account. You agree to provide accurate, current, and complete
            information during the registration process and to update such
            information to keep it accurate, current, and complete. You are
            responsible for safeguarding your account information and for any
            activities or actions under your account.
          </p>

          <h6 className="text-lg font-semibold mb-1">3.4. Software</h6>
          <p>
            Our Services may allow you to download software, such as mobile
            applications, which may update automatically to ensure you&apos;re
            using the latest version. Our software may include open source
            software that is governed by its own licences that we&apos;ve made
            available to you.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">
            4. Subscriptions and Purchases
          </h5>
          <p className="mb-2">
            Anfold is a paid service, and users can access premium features by
            purchasing a monthly subscription (&quot;Subscription&quot; or
            &quot;Subscriptions&quot;) or by buying credits (&quot;Credit&quot;
            or &quot;Credits&quot;). This section outlines the terms and
            conditions related to Subscriptions and Credits.
          </p>

          <h6 className="text-lg font-semibold mb-1">4.1. Payment Terms</h6>
          <p className="mb-2">
            By purchasing a Subscription or Credits, you agree to pay the
            applicable fees and taxes associated with the purchase. You also
            agree to the terms of sale presented to you at the time of purchase.
            All fees are non-refundable except as required by law.
          </p>

          <h6 className="text-lg font-semibold mb-1">4.2. Subscriptions</h6>
          <p className="mb-1">
            Subscriptions allow access to Anfold&apos;s features on a recurring
            basis, billed periodically as agreed upon at the time of purchase.
            It is important to note the following regarding Subscriptions:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              By purchasing a Subscription, you authorize us to automatically
              charge your payment method on each renewal date until you cancel
              the Subscription.
            </li>
            <li>
              The renewal date is typically the same date of each month (or
              another agreed-upon period) corresponding to the date of your
              initial Subscription purchase.
            </li>
            <li>
              If your payment cannot be processed on the renewal date, we may
              suspend your Subscription and restrict access to paid features
              until payment is successfully processed.
            </li>
          </ul>

          <h6 className="text-lg font-semibold mb-1">4.3. Credits</h6>
          <p className="mb-1">
            Credits are a form of digital currency used within the Anfold
            platform to access specific features or services. It is important to
            note the following regarding Credits:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              Credits are not legal tender or currency, and they are not
              redeemable, refundable, or exchangeable for any sum of money or
              monetary value.
            </li>
            <li>
              Credits have no equivalent value in fiat currency and do not act
              as a substitute for fiat currency.
            </li>
            <li>
              Credits do not confer upon you any personal property rights, and
              they are non-transferable.
            </li>
            <li>
              Credits may only be used in connection with the applicable Service
              and for the specific purposes they are designated for within the
              Anfold platform.
            </li>
            <li>
              Your available Credits balance may be reviewed in your Anfold
              account. You are solely responsible for verifying that the correct
              amount of Credits has been added to or deducted from your balance.
              Please note that your Credit balance is not a bank account,
              digital wallet, stored value account, or other payment device.
            </li>
            <li>
              We prohibit and do not recognize any purported transfers, sales,
              gifts, or trades of Credits. Any attempt to use, sell, or transfer
              Credits in any manner is a violation of these Terms and may result
              in the revocation, termination, or cancellation of the Credits
              and/or your use of the Services without refund, as well as the
              immediate suspension or termination of your account.
            </li>
          </ul>

          <h6 className="text-lg font-semibold mb-1">
            4.4. Changes to Pricing
          </h6>
          <p className="mb-2">
            We reserve the right to change the pricing for Subscriptions or
            Credits at any time. Any changes to the pricing will take effect at
            the end of your current billing cycle. Your continued use of the
            Service after the price change takes effect constitutes your
            agreement to the new pricing.
          </p>

          <h6 className="text-lg font-semibold mb-1">
            4.5. Refunds and Cancellations
          </h6>
          <p className="mb-2">
            All fees paid for Subscriptions or Credits are non-refundable,
            except where required by law. You may cancel your Subscription at
            any time, but your cancellation will take effect at the end of the
            current billing cycle, and you will not receive a refund for any
            unused portion of the Subscription period. If you cancel, you will
            continue to have access to the Subscription benefits until the end
            of the current billing period.
          </p>

          <h6 className="text-lg font-semibold mb-1">
            4.6. Account Downgrades and Suspension
          </h6>
          <p>
            If your payment cannot be completed, we may downgrade your account
            to a free tier or suspend your access to paid features until payment
            is successfully received.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">5. Content</h5>
          <p className="mb-2">
            You may provide input to the Services (&quot;Input&quot;), and
            receive output from the Services based on the Input
            (&quot;Output&quot;). Input and Output are collectively
            &quot;Content&quot;.
          </p>

          <h6 className="text-lg font-semibold mb-1">5.1. Ownership</h6>
          <p className="mb-1">
            You are responsible for Content, including ensuring that it does not
            violate any applicable law or these Terms. You represent and warrant
            that you have all rights, licences, and permissions needed to
            provide Input to our Services.
          </p>
          <p className="mb-2">
            To the extent permitted by applicable law, you retain your ownership
            rights in Input and own the Output. We hereby assign to you all our
            right, title, and interest, if any, in and to Output.
          </p>

          <h6 className="text-lg font-semibold mb-1">
            5.2. Similarity of content
          </h6>
          <p className="mb-2">
            Due to the nature of our Services and artificial intelligence
            generally, Output may not be unique and other users may receive
            similar output from our Services. Our assignment above does not
            extend to other users&apos; output or any Third Party Output.
          </p>

          <h6 className="text-lg font-semibold mb-1">
            5.3. Our use of content
          </h6>
          <p className="mb-2">
            We can use your Content worldwide to provide, maintain, develop, and
            improve our Services, comply with applicable law, enforce our terms
            and policies and keep our Services safe.
          </p>

          <h6 className="text-lg font-semibold mb-1">5.4. Accuracy</h6>
          <p className="mb-2">
            Artificial intelligence and machine learning are rapidly evolving
            fields of study. We are constantly working to improve our Services
            to make them more accurate, reliable, safe, and beneficial. Given
            the probabilistic nature of machine learning, use of our Services
            may in some situations result in Output that does not accurately
            reflect real people, places, or facts.
          </p>

          <p className="mb-1">
            When you use our Services you understand and agree:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              Output may not always be accurate. You should not rely on Output
              from our Services as a sole source of truth or factual
              information, or as a substitute for professional advice (including
              medical, nutritional, or fitness advice).
            </li>
            <li>
              You must evaluate Output for accuracy and appropriateness for your
              use case, including using human review as appropriate, before
              using or sharing Output from the Services.
            </li>
            <li>
              You must not use any Output relating to a person for any purpose
              that could have a legal or material impact on that person, such as
              making credit, educational, employment, housing, insurance, legal,
              medical, or other important decisions about them.
            </li>
            <li>
              Our Services may provide incomplete, incorrect, or offensive
              Output that does not represent Avocado&apos;s views.
            </li>
            <li>
              If Output references any third party products or services, it
              doesn&apos;t mean the third party endorses or is affiliated with
              Avocado.
            </li>
          </ul>

          <h6 className="text-lg font-semibold mb-1">
            5.5. Intellectual Property
          </h6>
          <p className="mb-2">
            All content and assets available on the Service, including text,
            graphics, logos, icons, images, and software, herein referred to as
            &quot;Service Content&quot;, is the property of Avocado Technologies
            UG (haftungsbeschränkt) or its licensors and is protected by
            intellectual property laws. You are granted a limited,
            non-exclusive, non-transferable license to access and use the
            Service and its Service Content for your personal, non-commercial
            use.
          </p>

          <h6 className="text-lg font-semibold mb-1">
            5.6. User-Generated Content
          </h6>
          <p>
            You may be able to submit, post, or share content, such as photos,
            text, or other materials, through the Service (&quot;User
            Content&quot;). By submitting User Content, you grant Avocado
            Technologies UG (haftungsbeschränkt) a worldwide, non-exclusive,
            royalty-free, transferable license to use, reproduce, distribute,
            prepare derivative works of, and display the User Content in
            connection with the Service and Avocado Technologies UG
            (haftungsbeschränkt)&apos;s business.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">6. Disclaimers</h5>
          <p>
            The Service is provided &quot;as is&quot; and &quot;as
            available&quot; without warranties of any kind, either express or
            implied, including, but not limited to, implied warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement. We do not warrant that the Service will be
            uninterrupted or error-free. Any health, nutrition, or exercise
            guidance provided by Anfold is for informational purposes only and
            should not be considered medical advice. Always consult a qualified
            health professional before making major dietary or exercise changes.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">
            6.1. Health &amp; Nutrition Disclaimer
          </h5>
          <p className="mb-1">
            Anfold is an AI-powered nutrition and exercise journal designed to
            help you track meals, workouts, and wellbeing notes. While we strive
            to provide helpful insights, analyses, and recommendations, the
            information provided by Anfold is not intended to:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              Replace professional medical, nutritional, or fitness advice;
            </li>
            <li>
              Diagnose, treat, cure, or prevent any disease or health condition;
            </li>
            <li>
              Serve as a substitute for guidance from qualified healthcare
              providers.
            </li>
          </ul>
          <p>
            Always consult your doctor, dietitian, or other qualified health
            professional before making decisions about diet, exercise,
            medications, or health-related actions based on information provided
            by Anfold. If you experience any adverse symptoms, health changes,
            or emergencies, discontinue use of the Service and seek professional
            medical assistance immediately.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">7. Privacy</h5>
          <p>
            Please review our Privacy Policy to understand how we collect, use,
            and share information about you.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">8. Termination</h5>
          <p className="mb-1">
            We reserve the right to suspend or terminate your access to part or
            all of the Service, including suspending or terminating your Credit
            balance, at any time and without notice or liability, for any
            reason, including if we believe you have violated these Terms. Upon
            termination, your right to use the Service will immediately cease.
          </p>
          <p>
            Any such action will be taken in compliance with applicable law.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">
            9. Limitation of Liability
          </h5>
          <p className="mb-1">
            In no event shall Avocado Technologies UG (haftungsbeschränkt), its
            affiliates, directors, employees, or agents be liable for any
            indirect, incidental, special, consequential, or punitive damages,
            including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses, resulting from:
          </p>
          <ol className="list-decimal list-inside space-y-1">
            <li>Your use of or inability to use the Service;</li>
            <li>
              Any unauthorized access to or use of our servers and/or any
              personal information stored therein;
            </li>
            <li>
              Any interruption or cessation of transmission to or from the
              Service;
            </li>
            <li>
              Any bugs, viruses, trojan horses, or the like that may be
              transmitted to or through the Service by any third party; or
            </li>
            <li>
              Any errors or omissions in any content or for any loss or damage
              incurred as a result of your use of any content posted, emailed,
              transmitted, or otherwise made available through the Service.
            </li>
          </ol>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">10. Governing Law</h5>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the European Union and, where applicable, the laws of
            the country in which you reside, without regard to its conflict of
            law principles. For users outside the EU, local consumer protection
            laws may also apply.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">11. Dispute Resolution</h5>
          <p className="mb-1">
            Any disputes, claims, or controversies arising out of or relating to
            these Terms or the Service shall be governed by German law and
            resolved exclusively in the courts of Berlin, Germany.
          </p>
          <p>
            By using Anfold, you consent to the exclusive jurisdiction and venue
            of the courts located in Berlin, Germany for the resolution of any
            disputes, and you agree that these courts are a convenient forum for
            you, will have exclusive jurisdiction over any dispute, and you
            waive any objection to such jurisdiction or venue, including on the
            grounds of inconvenient forum.
          </p>
        </div>

        <div className="mb-4">
          <p>
            By using Anfold, you acknowledge that you have read, understood, and
            agree to these Terms of Service.
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
