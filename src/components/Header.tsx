import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/" className="logo-container">
        <Image
          src="/assets/images/logo-dark.svg"
          alt="Anfold"
          className="logo"
          width={40}
          height={40}
        />
        <h3 className="font-medium mb-0 text-2xl">Anfold</h3>
      </Link>

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
