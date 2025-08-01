import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer text-sm">
      <span>© 2025 Avocado Technologies UG (haftungsbeschränkt)</span>

      <a
        href="https://discord.gg/mrk8HQmJ"
        target="_blank"
        title="Help shape the product on Discord"
        className="ml-md-auto"
      >
        <Image
          src="/assets/images/discord.svg"
          alt="Discord"
          className="icon"
          width={40}
          height={40}
        />
      </a>
      <Link href="/terms-of-service" className="with-underline">
        Terms of Service
      </Link>
      <Link href="/privacy-policy" className="with-underline">
        Privacy Policy
      </Link>
      <Link href="/imprint" className="with-underline">
        Imprint
      </Link>
    </footer>
  );
}
