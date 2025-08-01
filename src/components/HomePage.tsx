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
        <div className="hero-wrapper h-full relative">
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

      {/* Features Section */}
      <section className="features-section py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Feature 1: Lifestyle Journal */}
          <div className="flex flex-col lg:flex-row items-center py-20">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <div className="feature-icon-wrapper mb-4">
                <BookOpen className="feature-icon" />
              </div>
              <h2 className="font-bold text-2xl mb-3">Lifestyle Journal</h2>
              <p className="text-lg opacity-75">
                AI-powered tracking and personalized insights on meals, workouts
                and more.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="feature-placeholder bg-gray-100 rounded p-20 text-center">
                <BookOpen className="feature-placeholder-icon" />
              </div>
            </div>
          </div>

          {/* Feature 2: About You */}
          <div className="flex flex-col lg:flex-row items-center py-20">
            <div className="w-full lg:w-1/2 lg:order-2 mb-4 lg:mb-0">
              <div className="feature-icon-wrapper mb-4">
                <UserCheck className="feature-icon" />
              </div>
              <h2 className="font-bold text-2xl mb-3">About You</h2>
              <p className="text-lg opacity-75">
                Your lifestyle needs are unique to you. Anfold considers your
                personal factors.
              </p>
            </div>
            <div className="w-full lg:w-1/2 lg:order-1">
              <div className="feature-placeholder bg-gray-100 rounded p-20 text-center">
                <UserCheck className="feature-placeholder-icon" />
              </div>
            </div>
          </div>

          {/* Feature 3: Easy Logging */}
          <div className="flex flex-col lg:flex-row items-center py-20">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <div className="feature-icon-wrapper mb-4">
                <Edit3 className="feature-icon" />
              </div>
              <h2 className="font-bold text-2xl mb-3">Easy Logging</h2>
              <p className="text-lg opacity-75">
                Log your meals or activities in your own words, get nutritional
                and other insights.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="feature-placeholder bg-gray-100 rounded p-20 text-center">
                <Edit3 className="feature-placeholder-icon" />
              </div>
            </div>
          </div>

          {/* Feature 4: Detailed Tracking */}
          <div className="flex flex-col lg:flex-row items-center py-20">
            <div className="w-full lg:w-1/2 lg:order-2 mb-4 lg:mb-0">
              <div className="feature-icon-wrapper mb-4">
                <BarChart3 className="feature-icon" />
              </div>
              <h2 className="font-bold text-2xl mb-3">Detailed Tracking</h2>
              <p className="text-lg opacity-75">
                Detailed macro and micronutrient breakdown, calories and more.
              </p>
            </div>
            <div className="w-full lg:w-1/2 lg:order-1">
              <div className="feature-placeholder bg-gray-100 rounded p-20 text-center">
                <BarChart3 className="feature-placeholder-icon" />
              </div>
            </div>
          </div>

          {/* Feature 5: Contextual Chat */}
          <div className="flex flex-col lg:flex-row items-center py-20">
            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <div className="feature-icon-wrapper mb-4">
                <MessageCircle className="feature-icon" />
              </div>
              <h2 className="font-bold text-2xl mb-3">Contextual Chat</h2>
              <p className="text-lg opacity-75">
                Chat with your entries to get advice, insights, or just vent.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="feature-placeholder bg-gray-100 rounded p-20 text-center">
                <MessageCircle className="feature-placeholder-icon" />
              </div>
            </div>
          </div>

          {/* Feature 6: Lifestyle Tools */}
          <div className="flex flex-col lg:flex-row items-center py-20">
            <div className="w-full lg:w-1/2 lg:order-2 mb-4 lg:mb-0">
              <div className="feature-icon-wrapper mb-4">
                <Settings className="feature-icon" />
              </div>
              <h2 className="font-bold text-2xl mb-3">Lifestyle Tools</h2>
              <p className="text-lg opacity-75">
                Generate personalized meal and exercise plans, or just analyze a
                meal.
              </p>
            </div>
            <div className="w-full lg:w-1/2 lg:order-1">
              <div className="feature-placeholder bg-gray-100 rounded p-20 text-center">
                <Settings className="feature-placeholder-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
