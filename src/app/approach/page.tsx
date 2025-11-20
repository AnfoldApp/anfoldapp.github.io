import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Link from "next/link";
import { Dumbbell, Salad } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Approach | Anfold",
  description:
    "Learn about Anfold's science-based approach to exercise tracking and nutrition analysis. Discover our transparent methodologies for calculating training load and analyzing food composition.",
};

export default function Approach() {
  return (
    <Layout showHeader={false}>
      <Header theme="dark" />

      <section className="content-section flex flex-col text-base p-6 max-w-6xl mx-auto">
        <div className="text-center mb-12 mt-8">
          <h1 className="text-5xl font-bold mb-4">Our Approach</h1>
          <p className="text-xl opacity-75 max-w-3xl mx-auto">
            Learn how Anfold analyzes your exercise and nutrition to help you
            understand your training and food intake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/approach/nutrition"
            className="approach-card approach-card-nutrition group rounded-4xl"
          >
            <div className="approach-card-content">
              <Salad strokeWidth={1.5} className="w-16 h-16 mb-4 text-white" />
              <h2 className="text-3xl font-bold text-white mb-3">
                Nutrition Overview
              </h2>
              <p className="text-white opacity-90 text-lg">
                Discover how we analyze your food entries to provide nutrition
                information.
              </p>
            </div>
          </Link>

          <Link
            href="/approach/exercise"
            className="approach-card approach-card-exercise group rounded-4xl"
          >
            <div className="approach-card-content">
              <Dumbbell
                strokeWidth={1.5}
                className="w-16 h-16 mb-4 text-white"
              />
              <h2 className="text-3xl font-bold text-white mb-3">
                Exercise Overview
              </h2>
              <p className="text-white opacity-90 text-lg">
                Learn how we approach your physical analyzing activities to
                provide calorie and training impact.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
