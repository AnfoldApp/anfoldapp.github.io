import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer text-sm flex flex-col lg:flex-row items-center justify-between gap-4">
      <span>© 2025 Avocado Technologies UG (haftungsbeschränkt)</span>

      <div className="flex flex-col lg:flex-row items-center gap-4">
        <Link
          href="https://discord.gg/mrk8HQmJ"
          target="_blank"
          title="Help shape the product on Discord"
        >
          <Image
            src="/assets/images/discord.svg"
            alt="Discord"
            className="icon"
            width={40}
            height={40}
          />
        </Link>
        <Link href="/approach" className="with-underline">
          Approach
        </Link>
        <Link href="/terms-of-service" className="with-underline">
          Terms of Service
        </Link>
        <Link href="/privacy-policy" className="with-underline">
          Privacy Policy
        </Link>
        <Link href="/imprint" className="with-underline">
          Imprint
        </Link>
      </div>
    </footer>
  );
}
