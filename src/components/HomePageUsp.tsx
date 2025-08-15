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
        <h1 className="font-bold text-4xl lg:text-4xl mb-3">
          {titlePart1}
          <span className="text-gradient">{titlePart2}</span>
        </h1>
        <p className="text-2xl opacity-75">{description}</p>
      </div>
      <div
        className={`w-full lg:w-1/2 ${
          illustrationPlacement === "left" ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="usp-placeholder bg-gray-100 rounded-[40px] p-20 text-center relative overflow-hidden flex items-center justify-center min-h-[30vh] md:min-h-[40vh] lg:min-h-[50vh]">
          {/* <div className="usp-doodles">
            <Dumbbell className="doodle usp-doodle-1" />
            <GlassWater className="doodle usp-doodle-2" />
            <Sparkles className="doodle usp-doodle-3" />
            <Salad className="doodle usp-doodle-4" />
            <Leaf className="doodle usp-doodle-5" />
            <Carrot className="doodle usp-doodle-6" />
            <Hamburger className="doodle usp-doodle-7" />
            <Beef className="doodle usp-doodle-8" />

            <Sparkles className="doodle usp-doodle-9" />
            <Dumbbell className="doodle usp-doodle-10" />
            <Leaf className="doodle usp-doodle-11" />
            <GlassWater className="doodle usp-doodle-12" />
            <Carrot className="doodle usp-doodle-13" />
            <Salad className="doodle usp-doodle-14" />
            <Hamburger className="doodle usp-doodle-15" />
            <Beef className="doodle usp-doodle-16" />
            <Sparkles className="doodle usp-doodle-17" />
            <Leaf className="doodle usp-doodle-18" />
          </div> */}

          <div className="z-10">
            <div className="relative">
              <Icon
                className="usp-placeholder-icon-shadow usp-placeholder-icon-1 z-1"
                strokeWidth={2}
                color="var(--mint-main)"
                width={160}
                height={160}
              />
              <Icon
                className="usp-placeholder-icon-shadow usp-placeholder-icon-2 z-2"
                strokeWidth={2}
                color="var(--mint-lighter)"
                width={160}
                height={160}
              />

              <Icon
                className="usp-placeholder-icon z-10"
                strokeWidth={2}
                color="var(--white)"
                width={160}
                height={160}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
