import { LucideIcon } from "lucide-react";

export interface HomePageUspProps {
  titlePart1: string;
  titlePart2: string;
  description: string;
  icon: LucideIcon;
  illustrationPlacement: "left" | "right";
}

export default function HomePageUsp({
  titlePart1,
  titlePart2,
  description,
  icon: Icon,
  illustrationPlacement = "left",
}: HomePageUspProps) {
  return (
    <div className="usp-container flex flex-col lg:flex-row gap-16 items-center flex-1">
      <div className="w-full lg:w-1/2 lg:order-2 mb-4 lg:mb-0">
        <p className="text-2xl">{description}</p>
      </div>
      <div
        className={`w-full lg:w-1/2 ${
          illustrationPlacement === "left" ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="usp-placeholder rounded-2xl p-12 text-left relative overflow-hidden flex flex-col justify-end min-h-[30vh] md:min-h-[40vh] lg:min-h-[50vh]">
          <div className="z-10 flex flex-col items-start">
            <div className="relative mb-8">
              {/* <Icon
                className="usp-placeholder-icon-shadow usp-placeholder-icon-shadow-1"
                strokeWidth={2}
                color="var(--mint-main)"
                width={120}
                height={120}
              />
              <Icon
                className="usp-placeholder-icon-shadow usp-placeholder-icon-shadow-2"
                strokeWidth={2}
                color="var(--mint-lighter)"
                width={120}
                height={120}
              /> */}

              <Icon
                className="usp-placeholder-icon-shadow usp-placeholder-icon-shadow-1-medium opacity-30"
                strokeWidth={2}
                color="var(--white)"
                width={120}
                height={120}
              />
              <Icon
                className="usp-placeholder-icon-shadow usp-placeholder-icon-shadow-2-medium opacity-15"
                strokeWidth={2}
                color="var(--white)"
                width={120}
                height={120}
              />
              <Icon
                className="usp-placeholder-icon"
                strokeWidth={2}
                color="var(--white)"
                width={120}
                height={120}
              />
            </div>

            <h1 className="font-bold text-4xl text-white">
              {titlePart1}
              <span className="text-[var(--mint-main)]">{titlePart2}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
