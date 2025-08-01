import Image from "next/image";
import {
  BookOpen,
  UserCheck,
  Edit3,
  BarChart3,
  MessageCircle,
  Settings,
} from "lucide-react";
import HeroDoodles from "./HeroDoodles";

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
              <p className="text-xl mb-4">
                <span className="font-bold">Anfold</span> is a personal guide to
                wellness, designed to embrace the nuances of your lifestyle.
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
          <div className="flex flex-col lg:flex-row gap-12 items-center py-20">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <h2 className="font-bold text-2xl mb-3">
                Your Whole Health,{" "}
                <span className="text-gradient">One Journal</span>
              </h2>
              <p className="text-lg opacity-75">
                Track meals, workouts, and wellbeing notes all in one place, AI
                turns your entries into meaningful insights.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="usp-placeholder bg-gray-100 rounded-[40px] p-20 text-center">
                <BookOpen className="usp-placeholder-icon" />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center py-20">
            <div className="w-full lg:w-1/2 lg:order-2 mb-4 lg:mb-0">
              <h2 className="font-bold text-2xl mb-3">
                Made for Your Life,{" "}
                <span className="text-gradient">Not Someone Else&apos;s</span>
              </h2>
              <p className="text-lg opacity-75">
                Anfold adapts to your goals, preferences, and health factors for
                advice that actually fits you.
              </p>
            </div>
            <div className="w-full lg:w-1/2 lg:order-1">
              <div className="usp-placeholder bg-gray-100 rounded-[40px] p-20 text-center">
                <UserCheck className="usp-placeholder-icon" />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center py-20">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <h2 className="font-bold text-2xl mb-3">
                No More <span className="text-gradient">Clunky Logging</span>
              </h2>
              <p className="text-lg opacity-75">
                Just describe your meal or workout in your own words, Anfold
                handles the nutrition facts, calories, and data crunching.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="usp-placeholder bg-gray-100 rounded-[40px] p-20 text-center">
                <Edit3 className="usp-placeholder-icon" />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center py-20">
            <div className="w-full lg:w-1/2 lg:order-2 mb-4 lg:mb-0">
              <h2 className="font-bold text-2xl mb-3">
                Beyond <span className="text-gradient">Calories</span>
              </h2>
              <p className="text-lg opacity-75">
                See full macro and micronutrient breakdowns, activity impact,
                and how everything ties into your bigger health picture.
              </p>
            </div>
            <div className="w-full lg:w-1/2 lg:order-1">
              <div className="usp-placeholder bg-gray-100 rounded-[40px] p-20 text-center">
                <BarChart3 className="usp-placeholder-icon" />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center py-20">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <h2 className="font-bold text-2xl mb-3">
                Talk to <span className="text-gradient">Your Data</span>
              </h2>
              <p className="text-lg opacity-75">
                Ask questions, get explanations, or even vent, Anfold&apos;s
                contextual chat understands your entries and responds with
                useful advice.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="usp-placeholder bg-gray-100 rounded-[40px] p-20 text-center">
                <MessageCircle className="usp-placeholder-icon" />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center py-20">
            <div className="w-full lg:w-1/2 lg:order-2 mb-4 lg:mb-0">
              <h2 className="font-bold text-2xl mb-3">
                More Than <span className="text-gradient">Tracking</span>
              </h2>
              <p className="text-lg opacity-75">
                Need a meal plan? A workout outline? Or just a quick analysis of
                dinner? Anfold goes beyond logging to help you take action.
              </p>
            </div>
            <div className="w-full lg:w-1/2 lg:order-1">
              <div className="usp-placeholder bg-gray-100 rounded-[40px] p-20 text-center">
                <Settings className="usp-placeholder-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
