import Image from "next/image";
import {
  BookHeart,
  Target,
  Feather,
  FileChartColumn,
  Lightbulb,
} from "lucide-react";
import HeroDoodles from "./HeroDoodles";
import HomePageUsp from "./HomePageUsp";
import { appConfig } from "@/app.config";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-wrapper h-auto lg:h-full relative mx-auto max-w-7xl px-8 py-8">
          <div className="flex items-center gap-2 justify-center lg:justify-start mb-8 lg:mb-0">
            <Image
              src="/assets/images/logo-dark.svg"
              alt="Anfold"
              className="logo"
              width={40}
              height={40}
            />
            <h3 className="font-medium mb-0 text-2xl">Anfold</h3>
          </div>

          <div className="flex flex-1 flex-col justify-end mb-8 lg:mb-0">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-7xl leading-[1.1] hero-title mb-0">
              Your AI companion for
              <br />
              <span className="text-gradient">healthier living.</span>
            </h1>
          </div>

          <div className="hero-content-box">
            <div className="hero-content-inner">
              <p className="text-xl md:text-2xl mb-6">
                <span className="font-bold">Anfold</span> is your personal guide
                to nutrition and exercise, designed to adapt to your lifestyle
                and help you connect the dots between your daily choices and
                your overall wellbeing.
              </p>

              <div className="flex justify-center lg:justify-start">
                <a href={appConfig.appStoreUrl} className="app-store-badge">
                  <Image
                    src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1721692800"
                    alt="Download on the App Store"
                    width={197}
                    height={65}
                    style={{
                      verticalAlign: "middle",
                      objectFit: "contain",
                    }}
                  />
                </a>
              </div>
            </div>

            <HeroDoodles />
          </div>

          <div className="hero-phone-container">
            <Image
              src="/assets/images/phone-ss@2x.png"
              alt="Anfold App"
              className="hero-phone-image"
              width={350}
              height={700}
            />
          </div>
        </div>
      </section>

      <section className="usp-section py-20">
        <div className="container mx-auto px-8 max-w-7xl flex flex-col gap-24 md:gap-30 lg:gap-40">
          <HomePageUsp
            titlePart1="Log Your Day, "
            titlePart2="Effortlessly"
            description="Track meals, workouts, and notes in your own words. No tedious forms or rigid categories, just describe what you did and move on."
            icon={BookHeart}
            illustrationPlacement="left"
            backgroundImage="backdrop"
          />

          <HomePageUsp
            titlePart1="See "
            titlePart2="What Matters"
            description="See more than just calories: track patterns, breakdowns, and how your nutrition and activity connect to your wellbeing."
            icon={FileChartColumn}
            illustrationPlacement="right"
            backgroundImage="nutrition"
          />

          <HomePageUsp
            titlePart1="Fits "
            titlePart2="Your Life"
            description="Adapts to your goals, preferences, and health factors. Ask questions, get explanations, or receive advice that actually makes sense for you."
            icon={Target}
            illustrationPlacement="left"
            backgroundImage="exercise"
          />

          <HomePageUsp
            titlePart1="Go Beyond "
            titlePart2="Tracking"
            description="Need a meal plan? A workout outline? Or just a quick analysis? Anfold helps you plan and decide, not just record."
            icon={Lightbulb}
            illustrationPlacement="right"
            backgroundImage="nutrition"
          />

          <HomePageUsp
            titlePart1="Built for "
            titlePart2="Real Life"
            description="No rigid meal plans or calorie counting anxiety. Anfold works with your reality, messy or not, whether you're eating out, traveling, or just having an off week."
            icon={Feather}
            illustrationPlacement="left"
            backgroundImage="backdrop"
          />
        </div>
      </section>
    </>
  );
}
