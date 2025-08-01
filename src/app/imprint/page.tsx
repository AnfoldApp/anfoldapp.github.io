import Layout from "@/components/Layout";

export default function Imprint() {
  return (
    <Layout>
      <section className="content-section flex flex-col text-base p-6">
        <h3>Imprint</h3>

        <h5>Information according to § 5 TMG</h5>
        <p>
          Avocado Technologies UG (haftungsbeschränkt)
          <br />
          Berlin, Germany
        </p>

        <h5>Represented by</h5>
        <p>Managing Director</p>

        <h5>Contact</h5>
        <p>
          E-Mail: contact@anfold.com
          <br />
          Website: https://anfold.com
        </p>

        <h5>Register Entry</h5>
        <p>
          Entry in Handelsregister
          <br />
          Register Number: [Register Number]
          <br />
          Register Court: [Register Court]
        </p>

        <h5>VAT ID</h5>
        <p>
          VAT identification number according to § 27 a Umsatzsteuergesetz:
          <br />
          [VAT ID Number]
        </p>

        <h5>Responsible for Content</h5>
        <p>
          Responsible for content according to § 55 Abs. 2 RStV:
          <br />
          [Name]
          <br />
          [Address]
          <br />
          Berlin, Germany
        </p>

        <h5>Disclaimer</h5>
        <h6>Liability for Contents</h6>
        <p>
          As service providers, we are liable for own contents of these websites
          according to Sec. 7, Para. 1 German Telemedia Act (TMG). However,
          according to Sec. 8 to 10 German Telemedia Act (TMG), service
          providers are not under obligation to permanently monitor submitted or
          stored information or to search for evidences that indicate illegal
          activities.
        </p>

        <p>
          Legal obligations to removing information or to blocking the use of
          information remain unchallenged. In this case, liability is only
          possible at the time of knowledge about a specific violation of law.
          Illegal contents will be removed immediately at the time we get
          knowledge of them.
        </p>

        <h6>Liability for Links</h6>
        <p>
          Our offer includes links to external third party websites. We have no
          influence on the contents of those websites, therefore we cannot
          guarantee for those contents. Providers or administrators of linked
          websites are always responsible for their own contents.
        </p>

        <p>
          The linked websites had been checked for possible violations of law at
          the time of the establishment of the link. Illegal contents were not
          detected at the time of the linking. A permanent monitoring of the
          contents of linked websites cannot be imposed without reasonable
          indications that there has been a violation of law. Illegal links will
          be removed immediately at the time we get knowledge of them.
        </p>

        <h6>Copyright</h6>
        <p>
          Contents and compilations published on these websites by the providers
          are subject to German copyright laws. Reproduction, editing,
          distribution as well as the use of any kind outside the scope of the
          copyright law require a written permission of the author or
          originator. Downloads and copies of these websites are permitted for
          private use only.
        </p>

        <p>
          The commercial use of our contents without permission of the
          originator is prohibited.
        </p>

        <p>
          Copyright laws of third parties are respected as long as the contents
          on these websites do not originate from the provider. Contributions of
          third parties on this site are indicated as such. However, if you
          notice any violations of copyright law, please inform us. Such
          contents will be removed immediately.
        </p>

        <hr />
        <p className="text-base opacity-75">
          Avocado Technologies UG (haftungsbeschränkt)
          <br />
          Berlin, Germany
        </p>
      </section>
    </Layout>
  );
}
