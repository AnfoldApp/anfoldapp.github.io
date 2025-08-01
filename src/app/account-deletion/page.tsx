import Layout from "@/components/Layout";
import Link from "next/link";

export default function AccountDeletionPage() {
  return (
    <Layout>
      <section className="flex flex-col text-base py-8 px-4 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6">Delete Your Account</h3>
        <p className="mb-4">
          You can delete your account directly from the Anfold app by following
          these steps:
        </p>
        <ol className="mb-4 pl-6 space-y-2">
          <li>Open the Anfold app.</li>
          <li>
            Go to Account &gt; Scroll to the bottom of the screen &gt; Delete
            Account.
          </li>
          <li>Follow the on-screen instructions to confirm the deletion.</li>
        </ol>
        <p className="mb-4">
          Once deleted, all associated data will be removed as per our privacy
          policy. This action is irreversible.
        </p>
        <p>
          For more details, please refer to our{" "}
          <Link href="/privacy-policy" className="with-underline">
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </Layout>
  );
}
