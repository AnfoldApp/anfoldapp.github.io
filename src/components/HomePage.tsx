import Image from "next/image";
import {
  BookHeart,
  Target,
  Feather,
  FileChartColumn,
  BotMessageSquare,
  Lightbulb,
} from "lucide-react";
import HeroDoodles from "./HeroDoodles";
import HomePageUsp from "./HomePageUsp";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-wrapper h-full relative max-w-7xl mx-auto">
          <div className="logo-container">
            <Image
              src="/assets/images/logo-dark.svg"
              alt="Anfold"
              className="logo"
              width={40}
              height={40}
            />
            <h3 className="font-medium mb-0 text-2xl">Anfold</h3>
          </div>

          <div className="hero-top-content">
            <h1 className="font-bold text-display-3 hero-title mb-0">
              Your AI companion for
              <br />
              <span className="text-gradient">healthier living.</span>
            </h1>
          </div>

          <div className="hero-content-box">
            <div className="hero-content-inner">
              <p className="text-2xl mb-4">
                <span className="font-bold">Anfold</span> is your personal guide
                to nutrition and exercise, designed to adapt to your lifestyle
                and help you connect the dots between your daily choices and
                your overall wellbeing.
              </p>

              <div className="flex justify-start">
                <a
                  href="https://apps.apple.com/de/app/golem-app/id6476163056?itscg=30200&itsct=apps_box_badge&mttnsubad=6476163056"
                  className="app-store-badge"
                >
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
        <div className="container mx-auto px-4 max-w-6xl">
          <HomePageUsp
            titlePart1="Your Lifestyle, "
            titlePart2="One Journal"
            description="Track meals, workouts, and wellbeing notes all in one place, AI turns your entries into meaningful insights."
            icon={BookHeart}
            illustrationPlacement="right"
          />

          <HomePageUsp
            titlePart1="Wellbeing, "
            titlePart2="Adapted to You"
            description="Anfold adapts to your goals, preferences, and health factors for insights and advice that actually fits you."
            icon={Target}
            illustrationPlacement="left"
          />

          <HomePageUsp
            titlePart1="Detailed Tracking, "
            titlePart2="In Your Own Words"
            description="Just describe your meal or workout in your own words, Anfold handles the nutrition facts, calories, and data crunching."
            icon={Feather}
            illustrationPlacement="right"
          />

          <HomePageUsp
            titlePart1="Full Context, "
            titlePart2="Beyond Calories"
            description="See full macro and micronutrient breakdowns, activity impact, and how everything ties into your bigger health picture."
            icon={FileChartColumn}
            illustrationPlacement="left"
          />

          <HomePageUsp
            titlePart1="Chat with "
            titlePart2="Your Data"
            description="Ask questions, get explanations, or even vent, Anfold's contextual chat understands your entries and responds with useful advice."
            icon={BotMessageSquare}
            illustrationPlacement="right"
          />

          <HomePageUsp
            titlePart1="Take Action with "
            titlePart2="Practical Tools"
            description="Need a meal plan? A workout outline? Or just a quick analysis of dinner? Anfold goes beyond logging to help you take action."
            icon={Lightbulb}
            illustrationPlacement="left"
          />
        </div>
      </section>
    </>
  );
}
