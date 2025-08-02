import Layout from "@/components/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | Anfold",
  description:
    "Legal information and contact details for Avocado Technologies UG (haftungsbeschränkt), the company behind Anfold AI nutrition and exercise journal app.",
};

export default function Imprint() {
  return (
    <Layout>
      <section className="content-section flex flex-col text-base p-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-1">Imprint</h3>
        <p className="text-base opacity-75 mb-3">
          Effective Date: July 31st, 2025
        </p>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">
            Avocado Technologies UG (haftungsbeschränkt)
          </h5>
          <p>
            Caroline-Michaelis-Str. 15
            <br />
            10115 Berlin
            <br />
            Germany
          </p>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">Register Entry</h5>
          <p>
            Amtsgericht Berlin-Charlottenburg
            <br />
            HRB 212104 B
          </p>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">Contact</h5>
          <p>contact[at]anfold[dot]app</p>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">Managing Director/s</h5>
          <p>Vlad Cazacu</p>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">Disclaimer</h5>

          <h6 className="text-lg font-semibold mb-1">Liability for Contents</h6>
          <p className="mb-2">
            As service providers, we are liable for own contents of these
            websites according to Sec. 7, Para. 1 German Telemedia Act (TMG).
            However, according to Sec. 8 to 10 German Telemedia Act (TMG),
            service providers are not under obligation to permanently monitor
            submitted or stored information or to search for evidences that
            indicate illegal activities.
          </p>

          <p className="mb-2">
            Legal obligations to removing information or to blocking the use of
            information remain unchallenged. In this case, liability is only
            possible at the time of knowledge about a specific violation of law.
            Illegal contents will be removed immediately at the time we get
            knowledge of them.
          </p>

          <h6 className="text-lg font-semibold mb-1">Liability for Links</h6>
          <p className="mb-2">
            Our offer includes links to external third party websites. We have
            no influence on the contents of those websites, therefore we cannot
            guarantee for those contents. Providers or administrators of linked
            websites are always responsible for their own contents.
          </p>

          <p className="mb-2">
            The linked websites had been checked for possible violations of law
            at the time of the establishment of the link. Illegal contents were
            not detected at the time of the linking. A permanent monitoring of
            the contents of linked websites cannot be imposed without reasonable
            indications that there has been a violation of law. Illegal links
            will be removed immediately at the time we get knowledge of them.
          </p>

          <h6 className="text-lg font-semibold mb-1">Copyright</h6>
          <p className="mb-2">
            Contents and compilations published on these websites by the
            providers are subject to German copyright laws. Reproduction,
            editing, distribution as well as the use of any kind outside the
            scope of the copyright law require a written permission of the
            author or originator. Downloads and copies of these websites are
            permitted for private use only.
          </p>

          <p className="mb-2">
            The commercial use of our contents without permission of the
            originator is prohibited.
          </p>

          <p>
            Copyright laws of third parties are respected as long as the
            contents on these websites do not originate from the provider.
            Contributions of third parties on this site are indicated as such.
            However, if you notice any violations of copyright law, please
            inform us. Such contents will be removed immediately.
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
