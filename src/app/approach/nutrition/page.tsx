import Disclaimer from "@/components/Disclaimer";
import Layout from "@/components/Layout";
import AdvancedCollapsible from "@/components/AdvancedCollapsible";
import Header from "@/components/Header";
import { Metadata } from "next";
import {
  Database,
  Layers,
  Pizza,
  AlertTriangle,
  TrendingUp,
  BookOpen,
  Wrench,
  Bot,
  Salad,
  Search,
  Shuffle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nutrition Overview | Anfold",
  description:
    "Complete guide to Anfold's nutrition system. Learn how we match ingredients to USDA databases, transform cooking states, and provide three-tier nutrition information. Includes matching strategies, transformation methods, and scientific references.",
};

export default function Nutrition() {
  return (
    <Layout showHeader={false}>
      <div className="flex flex-col mb-6 detail-page-nutrition-hero">
        <Header theme="light" />

        <div className="flex flex-col items-center flex-1 justify-center">
          <Salad
            strokeWidth={1.5}
            className="w-20 h-20 mb-4"
            style={{ color: "var(--white)" }}
          />

          <h3 className="text-4xl font-bold text-white">Nutrition Overview</h3>
        </div>
      </div>

      <section className="content-section flex flex-col text-base p-6 max-w-4xl mx-auto">
        <Disclaimer className="mb-8" />

        <div className="mb-8">
          <h5 className="text-xl font-semibold mb-1">Introduction</h5>
          <p className="mb-2">
            Anfold combines verified nutrition databases with AI assistance to
            help you understand what is in your food. We match ingredients to
            high-quality USDA data, transform them for cooking methods, and
            provide clear transparency about data quality.
          </p>
          <p className="mb-4">
            Our core approach is ingredient-first: we deconstruct meals into
            their constituent ingredients and compute nutrition for each one.
            This reduces variability from preparation and portioning, giving you
            a clearer view of what you consumed.
          </p>

          <AdvancedCollapsible>
            <p>
              The system uses a three-layer architecture: matching ingredients
              to database entries, transforming for cooking state, and assigning
              information tiers (Verified, Transformed, or AI deduced) for full
              transparency.
            </p>
            <p>
              When possible, we prioritize Foundation Foods from USDA for the
              highest data quality. Cooking transformations use science-based
              retention and yield factors to model nutrient changes and mass
              adjustments.
            </p>
          </AdvancedCollapsible>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Database strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">Data Sources</h5>
          </div>

          <p className="mb-2">
            Our primary nutrition data source is the{" "}
            <strong>USDA FoodData Central database</strong>, maintained by the
            United States Department of Agriculture. This comprehensive,
            scientifically grounded source contains detailed nutritional
            information for a wide range of foods.
          </p>

          <p className="mb-2">
            The USDA FDC includes several data types, prioritized by quality:
            Foundation Foods (laboratory-analyzed, most complete), SR Legacy
            Foods (comprehensive standard reference), and Survey Foods (national
            dietary surveys). Our system prioritizes Foundation Foods for the
            highest data quality.
          </p>

          <p className="mb-4">
            <strong>AI Assistance</strong>: We use AI to extract ingredients
            from descriptions and images, identify cooking methods, match
            user-described foods to database entries, and fill gaps when
            database values are missing.
          </p>

          <AdvancedCollapsible>
            <p className="mb-2">
              <strong>No branded data</strong>: We don&apos;t use
              manufacturer-provided nutrition entries. Branded data varies by
              region, reformulation, and labeling practices. Using standardized
              sources improves consistency and comparability.
            </p>
            <p>
              <strong>Future expansion</strong>: We plan to integrate additional
              national databases (e.g., CIQUAL) to broaden coverage while
              maintaining quality standards.
            </p>
          </AdvancedCollapsible>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Layers strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">
              Three Tiers of Nutritional Information
            </h5>
          </div>
          <p className="mb-4">
            Every entry is clearly marked with one of three information tiers so
            you understand the data quality:
          </p>

          <ul className="space-y-3 mb-4">
            <li className="flex items-start gap-2">
              <Database
                strokeWidth={1.5}
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                style={{ color: "var(--mint-main)" }}
              />
              <div>
                <strong>Tier 1: Verified Database</strong> - Direct USDA data
                without modifications. Used when your food matches a database
                entry in the same state.
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Wrench
                strokeWidth={1.5}
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                style={{ color: "var(--tangerine-light)" }}
              />
              <div>
                <strong>Tier 2: Verified Database, Transformed</strong> - USDA
                data transformed for cooking method. Used when your food is in a
                different state than the database (e.g., steamed vs. raw).
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Bot
                strokeWidth={1.5}
                className="w-5 h-5 flex-shrink-0 mt-0.5"
                style={{ color: "var(--cobalt-main)" }}
              />
              <div>
                <strong>Tier 3: AI Deduced</strong> - AI-estimated values when
                database matches aren&apos;t available or nutrient fields are
                missing.
              </div>
            </li>
          </ul>

          <AdvancedCollapsible>
            <h6 className="font-semibold mb-1">Transformation Details</h6>
            <p className="mb-2">
              Tier 2 transformations apply science-based factors for cooking
              method, nutrient retention rates from USDA research, mass changes
              (water loss/gain, oil absorption), and preparation details
              (drained vs. undrained, oil levels).
            </p>
            <h6 className="font-semibold mb-1">AI Deduction Use Cases</h6>
            <p>
              Tier 3 is used when no suitable database match exists after
              matching and transformations, when database entries have missing
              nutrient fields, or when ingredient proportions need estimation
              (e.g., homemade composite dishes).
            </p>
          </AdvancedCollapsible>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Search strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">Ingredient Matching</h5>
          </div>
          <p className="mb-2">
            When you log a food, we extract ingredients and match them to our
            nutrition database using a keyword-based search strategy. The system
            prioritizes Foundation Foods (highest quality USDA data) and falls
            back intelligently when exact matches aren&apos;t available.
          </p>
          <p className="mb-4">
            Our matching uses a progressive fallback chain: first looking for
            matches in the target cooking state, then falling back to raw
            ingredients that can be transformed. This helps provide useful data
            even when the database doesn&apos;t have your exact preparation.
          </p>

          <AdvancedCollapsible>
            <h6 className="font-semibold mb-1">How Matching Works</h6>
            <p className="mb-2">
              The system searches for ingredients by name (e.g.,
              &quot;rice&quot;, &quot;chicken&quot;, &quot;broccoli&quot;) and
              prioritizes the highest quality USDA data available. It looks for
              matches in your cooking state first, then finds raw ingredients
              that can be transformed if needed.
            </p>
            <p>
              Each match is evaluated for quality. If a good match is found,
              it&apos;s used immediately. Otherwise, the system tries
              alternative sources to ensure you get useful nutrition
              information.
            </p>
          </AdvancedCollapsible>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Shuffle strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">
              Cooking State Transformation
            </h5>
          </div>
          <p className="mb-2">
            When the database has an ingredient in a different cooking state
            than what you consumed (e.g., raw broccoli vs. steamed broccoli), we
            transform the nutrition data using science-based factors that
            account for both nutrient retention and mass changes.
          </p>
          <p className="mb-4">
            Cooking affects food in two ways: nutrients can degrade or leach
            (retention), and mass can change through water loss/gain or oil
            absorption (yield). Our transformations model both effects
            separately.
          </p>

          <AdvancedCollapsible>
            <h6 className="font-semibold mb-1">The Core Algorithm</h6>
            <p className="mb-2">
              The service always works with a 100g reference sample: convert
              source per-100g to absolute amounts, apply retention factors
              (nutrient loss), compute final mass (yield + category
              adjustments), add oil if applicable, then convert back to per-100g
              in the target state.
            </p>
            <h6 className="font-semibold mb-1">Retention Factors</h6>
            <p className="mb-2">
              Different nutrients behave differently during cooking. Macros are
              generally stable. Water-soluble vitamins (B, C) are heat-sensitive
              and leach into water. Fat-soluble vitamins (A, D, E, K) are more
              stable. Minerals don&apos;t degrade but can leach if drained.
            </p>
            <h6 className="font-semibold mb-1">Mass Changes</h6>
            <p className="mb-2">
              Dry-heat methods cause water loss (meat shrinks to ~75%,
              vegetables to ~95%). Starches absorb massive amounts of water
              (rice expands to ~240%). Oil absorption during frying adds both
              mass and fat.
            </p>
            <h6 className="font-semibold mb-1">Drained vs Undrained</h6>
            <p>
              Keeping cooking liquid dramatically improves nutrient retention.
              Boiled-drained loses ~45% of water-soluble vitamins and ~25% of
              minerals. Boiled-undrained retains ~85% of vitamins and ~95% of
              minerals.
            </p>
          </AdvancedCollapsible>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Pizza strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">
              Composite Foods and Recipe Analysis
            </h5>
          </div>
          <p className="mb-2">
            For complex meals (pizza, casseroles, stews), we use the{" "}
            <strong>ingredient decomposition approach</strong>—the same
            methodology used by USDA Recipe Calculator, professional nutrition
            software, and FDA guidance.
          </p>
          <p className="mb-4">
            We break down the dish into individual ingredients, match and
            transform each one separately, then sum the nutrients. This approach
            provides practical accuracy and aligns with industry standards.
          </p>

          <AdvancedCollapsible>
            <h6 className="font-semibold mb-1">Why Decomposition Works</h6>
            <p className="mb-2">
              Research shows this method provides reliable accuracy for most
              cooking methods, with dry-cooked foods (pizza, casseroles, roasted
              dishes) being more predictable than wet-cooked foods (soups,
              stews, braises). It&apos;s the gold standard for recipe nutrition
              analysis.
            </p>
            <h6 className="font-semibold mb-1">Known Limitations</h6>
            <p>
              The approach doesn&apos;t model shared cooking liquids (nutrient
              redistribution in soups/stews), fat migration between ingredients
              (bacon fat absorbed by vegetables), or moisture migration. Despite
              these limitations, it provides useful estimates for tracking
              applications.
            </p>
          </AdvancedCollapsible>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Wrench strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">Manual Editing (Planned)</h5>
          </div>

          <p>
            Future capabilities will include editing ingredient quantities,
            adjusting cooking methods, adding or removing ingredients, and
            overriding AI estimations with known values.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle
              strokeWidth={1.5}
              className="w-6 h-6 text-green-main"
            />
            <h5 className="text-xl font-semibold">
              Limitations and Considerations
            </h5>
          </div>

          <p className="mb-4">
            Our system accounts for cooking method effects, water loss/gain, oil
            absorption, vitamin and mineral retention, mass changes, and drained
            vs. undrained preparations. When uncertain, we use conservative
            estimates that slightly underestimate nutrient content.
          </p>

          <h6 className="font-semibold mb-1">What We Don&apos;t Model</h6>
          <p>
            We don&apos;t model exact cooking time/temperature, individual
            equipment variations, added seasonings (unless specified), protein
            digestibility changes, or nutrient redistribution in shared cooking
            liquids. These factors have minimal impact for practical tracking
            purposes.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">Continuous Improvement</h5>
          </div>
          <p>
            Our system improves over time through regular database updates,
            ongoing AI refinement, user feedback integration, quality
            monitoring, and planned integrations with additional national
            databases.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">Further Reading</h5>
          </div>
          <p className="mb-4">
            Our nutrition system is grounded in peer-reviewed research and
            authoritative databases. Methods are based on USDA retention
            factors, cooking yields, and validated recipe analysis procedures.
          </p>

          <AdvancedCollapsible label="See references and citations">
            <h6 className="text-lg font-semibold mb-1">
              Official USDA Resources
            </h6>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>
                <a
                  href="https://www.ars.usda.gov/ARSUserFiles/80400525/Data/retn/retn06.pdf"
                  className="with-underline"
                >
                  USDA Table of Nutrient Retention Factors (Release 6)
                </a>{" "}
                - Primary source for vitamin and mineral retention factors
                during cooking
              </li>
              <li>
                <a href="https://fdc.nal.usda.gov/" className="with-underline">
                  USDA FoodData Central
                </a>{" "}
                - Our primary nutrition database with comprehensive food
                composition data
              </li>
              <li>
                <a
                  href="https://www.ars.usda.gov/ARSUserFiles/80400525/Data/retn/USDA_CookingYields_MeatPoultry.pdf"
                  className="with-underline"
                >
                  USDA Cooking Yields for Meat and Poultry
                </a>{" "}
                - Authoritative data on weight changes during cooking
              </li>
              <li>
                <a
                  href="https://www.ars.usda.gov/northeast-area/beltsville-md-bhnrc/food-surveys-research-group/docs/fndds/"
                  className="with-underline"
                >
                  USDA Recipe Calculator and Analysis
                </a>{" "}
                - Official methodology for recipe nutrition analysis (FNDDS)
              </li>
              <li>
                <a
                  href="https://www.ecfr.gov/current/title-21/part-101/section-101.9"
                  className="with-underline"
                >
                  US FDA Nutrition Labeling (21 CFR 101.9)
                </a>{" "}
                - Energy conversion factors (4-4-9-7 system)
              </li>
            </ul>

            <h6 className="text-lg font-semibold mb-1">
              Nutrient Retention Research
            </h6>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>
                <strong>Lee S, et al. (2017).</strong> &quot;Effect of different
                cooking methods on the content of vitamins in vegetables.&quot;{" "}
                <em>Journal of Food Science.</em> PMC6049644 - Comprehensive
                study on vitamin retention across cooking methods
              </li>
              <li>
                <strong>Yuan G, et al. (2009).</strong> &quot;Effects of
                different cooking methods on health-promoting compounds of
                broccoli.&quot; PMC2722699 - Research on sugar and vitamin
                leaching during boiling
              </li>
              <li>
                <strong>Kimura M, Itokawa Y (1990).</strong> &quot;Cooking
                losses of minerals in foods and its nutritional
                significance.&quot;{" "}
                <em>Journal of Nutritional Science and Vitaminology</em> - Key
                study on mineral leaching in boiled-drained preparations
              </li>
              <li>
                <strong>Liu Y, et al. (2025).</strong> &quot;Investigating the
                effects of protein thermal denaturation on water-holding
                capacity of beef.&quot;{" "}
                <em>International Journal of Food Science and Technology</em> -
                Protein stability during cooking
              </li>
            </ul>

            <h6 className="text-lg font-semibold mb-1">
              Cooking Yields and Mass Changes
            </h6>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>
                <strong>Bognár, A. (1999).</strong> Tables on weight yield of
                food and retention factors of food constituents for the
                calculation of nutrient composition of cooked foods. Federal
                Research Centre for Nutrition (BFE), Karlsruhe - Comprehensive
                European reference on cooking yields
              </li>
              <li>
                <strong>Lisciani S, et al. (2022).</strong> &quot;Weight change
                of food after cooking: focus on the Italian scenario.&quot; -
                Peer-reviewed yield measurements across cooking methods
              </li>
            </ul>

            <h6 className="text-lg font-semibold mb-1">
              Oil Absorption During Frying
            </h6>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>
                <strong>Bouchon, P.</strong> Understanding oil absorption during
                deep-fat frying.{" "}
                <em>Advances in Food and Nutrition Research, 57.</em>{" "}
                <a
                  href="https://www.sciencedirect.com/science/article/pii/S1043452609570052"
                  className="with-underline"
                >
                  ScienceDirect
                </a>{" "}
                - Mechanisms of oil uptake and the vacuum effect during cooling
              </li>
              <li>
                <strong>Saguy, I. S., & Dana, D. (2003).</strong> Deep-fat
                frying fundamentals.{" "}
                <em>Comprehensive Reviews in Food Science and Food Safety.</em>{" "}
                <a
                  href="https://doi.org/10.1111/j.1541-4337.2003.tb00027.x"
                  className="with-underline"
                >
                  DOI
                </a>
              </li>
              <li>
                <strong>Manjunatha SS, et al. (2012).</strong> &quot;Kinetics of
                moisture loss and oil uptake during deep fat frying.&quot;
                PMC4571237
              </li>
            </ul>

            <h6 className="text-lg font-semibold mb-1">
              Alcohol Retention in Cooking
            </h6>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>
                <strong>USDA Studies on Alcohol Retention</strong> - Research
                showing time-dependent alcohol retention: 15 min (40%), 1 hour
                (25%), 2.5 hours (5%)
              </li>
              <li>
                References available through &quot;What Actually Happens to
                Alcohol When You Cook with It?&quot; (2023) and related food
                science literature
              </li>
            </ul>

            <h6 className="text-lg font-semibold mb-1">
              International Standards
            </h6>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li>
                <a
                  href="https://www.fao.org/infoods/infoods/standards-guidelines/en/"
                  className="with-underline"
                >
                  FAO/INFOODS Standards and Guidelines
                </a>{" "}
                - International standards for food composition data
              </li>
              <li>
                <strong>EuroFIR Recipe Calculation Procedures</strong> -
                Standard methodology used in European nutrition databases
              </li>
            </ul>

            <h6 className="text-lg font-semibold mb-1">
              Essential Food Science Books
            </h6>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>McGee, H.</strong>{" "}
                <em>
                  On Food and Cooking: The Science and Lore of the Kitchen.
                </em>{" "}
                Scribner - Comprehensive food science reference covering cooking
                transformations
              </li>
              <li>
                <strong>Barham, P.</strong> <em>The Science of Cooking.</em>{" "}
                Springer - Physical and chemical principles underlying cooking
                processes
              </li>
              <li>
                <strong>Souci, S. W., Fachmann, W., & Kraut, H.</strong>{" "}
                <em>Food Composition and Nutrition Tables.</em> MedPharm
                Scientific Publishers - International food composition reference
              </li>
            </ul>
          </AdvancedCollapsible>
        </div>

        <hr className="my-2 border-border-color" />
        <p className="text-base opacity-75">
          Avocado Technologies UG (haftungsbeschränkt)
          <br />
          Berlin, Germany
        </p>
      </section>
    </Layout>
  );
}
