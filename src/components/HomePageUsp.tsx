import {
  Dumbbell,
  GlassWater,
  Sparkles,
  Salad,
  Leaf,
  Carrot,
  Beef,
  Hamburger,
  LucideIcon,
} from "lucide-react";

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
    <div className="flex flex-col lg:flex-row gap-12 items-center py-20">
      <div className="w-full lg:w-1/2 lg:order-2 mb-4 lg:mb-0">
        <h2 className="font-bold text-2xl mb-3">
          {titlePart1}
          <span className="text-gradient">{titlePart2}</span>
        </h2>
        <p className="text-lg opacity-75">{description}</p>
      </div>
      <div
        className={`w-full lg:w-1/2 ${
          illustrationPlacement === "left" ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div className="usp-placeholder bg-gray-100 rounded-[40px] p-20 text-center relative overflow-hidden">
          <div className="usp-doodles">
            <Dumbbell className="doodle usp-doodle-1" />
            <GlassWater className="doodle usp-doodle-2" />
            <Sparkles className="doodle usp-doodle-3" />
            <Salad className="doodle usp-doodle-4" />
            <Leaf className="doodle usp-doodle-5" />
            <Carrot className="doodle usp-doodle-6" />
            <Hamburger className="doodle usp-doodle-7" />
            <Beef className="doodle usp-doodle-8" />

            {/* Repeat icons for more coverage */}
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
          </div>

          <div className="relative z-10">
            <div className="relative inline-block">
              {/* <Icon
                className="usp-placeholder-icon usp-placeholder-icon-1 absolute top-3 left-3"
                strokeWidth={1.5}
                color="var(--mint-darker)"
              /> */}
              <Icon
                className="usp-placeholder-icon usp-placeholder-icon-1 absolute top-2 left-2"
                strokeWidth={1.5}
                color="var(--mint-dark)"
              />
              <Icon
                className="usp-placeholder-icon usp-placeholder-icon-2 absolute top-1 left-1"
                strokeWidth={1.5}
                color="var(--mint-main)"
              />

              <Icon
                className="usp-placeholder-icon relative"
                strokeWidth={2}
                color="var(--charcoal-darkest)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
