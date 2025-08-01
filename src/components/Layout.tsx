import Link from "next/link";
import Image from "next/image";

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
}

export default function Layout({ children, showHeader = true }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showHeader && <Header />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Image
          src="/assets/images/logo-dark.svg"
          alt="Anfold"
          className="logo"
          width={40}
          height={40}
        />
        <h3 className="font-semibold mb-0">Anfold</h3>
      </div>

      <a
        href="https://apps.apple.com/de/app/golem-app/id6476163056?itscg=30200&itsct=apps_box_badge&mttnsubad=6476163056"
        className="ml-auto"
      >
        <Image
          src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1721692800"
          alt="Download on the App Store"
          width={172}
          height={57}
          style={{
            verticalAlign: "middle",
            objectFit: "contain",
          }}
        />
      </a>
    </header>
  );
}

function Footer() {
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
