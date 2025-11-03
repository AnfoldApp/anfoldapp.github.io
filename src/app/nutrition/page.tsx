import Disclaimer from "@/components/Disclaimer";
import Layout from "@/components/Layout";
import { Metadata } from "next";
import {
  Database,
  Sparkles,
  Layers,
  Cog,
  Pizza,
  Eye,
  AlertTriangle,
  TrendingUp,
  BookOpen,
  CheckCircle2,
  XCircle,
  Wrench,
  Bot,
  Salad,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nutrition System Overview | Anfold",
  description:
    "Learn how Anfold's nutrition system works, from USDA database integration to AI-powered ingredient analysis. Understand our three-tier information system and cooking transformations.",
};

export default function Nutrition() {
  return (
    <Layout>
      <section className="content-section flex flex-col text-base p-6 max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <Salad
            strokeWidth={1.5}
            className="w-20 h-20 mb-4"
            style={{ color: "var(--green-main)" }}
          />
          <h3 className="text-3xl font-bold">Nutrition Overview</h3>
        </div>
        <Disclaimer className="mb-8" />

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">Introduction</h5>
          <p className="mb-2">
            Anfold combines verified nutrition databases with AI assistance to
            help you understand what is in your food. This page explains, at a
            high level, how entries are processed, the kinds of data sources we
            rely on, and the tiers of information you&apos;ll see in the app.
          </p>
          <p>
            Our core approach is ingredient-first: we deconstruct meals into
            their constituent ingredients and compute nutrition for each
            ingredient. Whole-dish estimates can vary widely based on
            preparation, portioning, and added ingredients. Focusing on
            ingredients helps reduce that variability and gives a clearer view
            of what you consumed.
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Database strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">Data Sources</h5>
          </div>

          <h6 className="text-lg font-semibold mb-1">
            USDA FoodData Central (FDC)
          </h6>
          <p className="mb-2">
            Our primary nutrition data source is the{" "}
            <strong>USDA FoodData Central database</strong>, maintained by the
            United States Department of Agriculture. This is a comprehensive,
            scientifically grounded source containing detailed nutritional
            information for a wide range of foods.
          </p>

          <p className="mb-1">
            The USDA FDC includes several data types, prioritized by quality:
          </p>
          <ol className="list-decimal list-inside space-y-1 mb-2">
            <li>
              <strong>Foundation Foods</strong>: Foods with the most complete
              nutrient profiles, laboratory-analyzed
            </li>
            <li>
              <strong>SR Legacy Foods</strong>: Standard Reference legacy
              database with comprehensive nutrient data
            </li>
            <li>
              <strong>Survey Foods</strong>: Foods from the USDA&apos;s national
              dietary surveys (FNDDS)
            </li>
          </ol>

          <p className="mb-2">
            Our system prioritizes Foundation Foods whenever possible to ensure
            the highest data quality.
          </p>

          <p className="mb-2">
            Note: We do not use branded/manufacturer-provided nutrition entries.
            Branded data can vary by region, reformulation, and labeling
            practices; using standardized sources improves consistency and
            comparability across entries.
          </p>

          <div className="flex items-center gap-2 mb-1">
            <Sparkles strokeWidth={1.5} className="w-5 h-5 text-green-main" />
            <h6 className="text-lg font-semibold">AI Assistance</h6>
          </div>
          <p className="mb-1">We use AI to:</p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>Extract ingredients from food descriptions and images</li>
            <li>Identify cooking methods and preparation details</li>
            <li>Match user-described foods to database entries</li>
            <li>
              Generate nutritional analysis when database matches aren&apos;t
              available or values are missing (to fill in gaps)
            </li>
          </ul>

          <p>
            Planned: We intend to integrate additional nutrition databases over
            time (e.g., CIQUAL) to broaden coverage.
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Layers strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">
              Three Tiers of Nutritional Information
            </h5>
          </div>
          <p className="mb-2">
            Our system provides nutritional information at three different
            tiers, clearly marked in the app so you understand the nature of
            each entry.
          </p>

          <h6 className="text-lg font-semibold mb-1">
            Tier 1: Verified Database
          </h6>
          <p className="mb-1">
            <strong>What it is</strong>: Nutritional values taken directly from
            the USDA FoodData Central database without any modifications.
          </p>
          <p className="mb-1">
            <strong>When it&apos;s used</strong>: When you log a food that
            matches a database entry in the same preparation state (e.g.,
            &quot;raw broccoli&quot; matching &quot;Broccoli, raw&quot;).
          </p>
          <p className="mb-2">
            <strong>Example</strong>: You log &quot;1 cup of raw spinach&quot;
            and we find an exact match for raw spinach in the USDA database.
          </p>

          <h6 className="text-lg font-semibold mb-1">
            Tier 2: Verified Database, Transformed
          </h6>
          <p className="mb-1">
            <strong>What it is</strong>: Nutritional values from the USDA
            database that have been transformed to account for cooking methods
            and preparation.
          </p>
          <p className="mb-1">
            <strong>When it&apos;s used</strong>: When you log a food in a
            different preparation state than what&apos;s in the database (e.g.,
            you ate &quot;steamed broccoli&quot; but the database has &quot;raw
            broccoli&quot;).
          </p>
          <p className="mb-1">
            <strong>How it works</strong>: We apply science-based transformation
            factors based on:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-1">
            <li>
              <strong>Cooking method</strong> (steaming, boiling, grilling,
              frying, etc.)
            </li>
            <li>
              <strong>Nutrient retention rates</strong> from USDA research
            </li>
            <li>
              <strong>Mass changes</strong> (water loss/gain, oil absorption)
            </li>
            <li>
              <strong>Preparation details</strong> (drained vs. undrained, oil
              levels, etc.)
            </li>
          </ul>
          <p className="mb-2">
            <strong>Example</strong>: You log &quot;steamed broccoli&quot; and
            we transform raw broccoli data using factors that account for
            moisture changes and nutrient retention.
          </p>

          <h6 className="text-lg font-semibold mb-1">Tier 3: AI deduced</h6>
          <p className="mb-1">
            <strong>What it is</strong>: Nutritional values estimated by AI when
            suitable database data cannot be used directly.
          </p>
          <p className="mb-1">
            <strong>When it&apos;s used</strong>:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-1">
            <li>
              No suitable match is found in trusted databases after matching and
              transformations
            </li>
            <li>
              A database match exists but required nutrient fields are missing;
              AI fills the gaps
            </li>
            <li>
              Ingredient proportions are unclear and need estimation to complete
              an entry
            </li>
          </ul>
          <p className="mb-1">
            <strong>Example</strong>: You upload a photo of your homemade
            lasagna. The AI identifies the likely ingredients (pasta, cheese,
            meat sauce, vegetables), estimates proportions, and calculates
            nutrition based on those estimates.
          </p>
          <p>
            <strong>Transparency</strong>: Entries using AI deduction are
            clearly marked so you understand the estimated nature of the data.
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Cog strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">How Entries Are Processed</h5>
          </div>
          <p className="mb-1">
            When you log a food (via text, voice, or image), the system:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              Interprets your entry to understand ingredients and preparation at
              a high level
            </li>
            <li>
              Looks for matches in trusted databases, beginning with the
              highest-fidelity sources
            </li>
            <li>
              Applies cooking state transformations when the database entry is
              in a different preparation state
            </li>
            <li>
              Combines results into a single entry and assigns an information
              tier (Verified, Transformed, or AI deduced)
            </li>
          </ul>
          <p>You&apos;ll receive a notification when processing completes.</p>

          <h6 className="text-lg font-semibold mb-1">
            Cooking Transformations (When Needed)
          </h6>
          <p className="mb-2">
            If the database entry is in a different state than what you
            consumed, the system applies science-based transformation factors.
          </p>

          <h6 className="text-lg font-semibold mb-1">
            Understanding the Transformation Process
          </h6>
          <p className="mb-1">
            <strong>Key Principle</strong>: Cooking affects food in two ways:
          </p>
          <ol className="list-decimal list-inside space-y-1 mb-2">
            <li>
              <strong>Mass changes</strong>: Water loss/gain, oil absorption
            </li>
            <li>
              <strong>Nutrient retention</strong>: Some nutrients degrade or
              leach during cooking
            </li>
          </ol>

          <p className="mb-2">
            <strong>Example: Raw Broccoli → Steamed Broccoli</strong>
          </p>
          <p className="mb-2">
            The transformation accounts for moisture changes and nutrient
            retention typical of steaming. Per-100g values can appear higher or
            lower depending on water loss/gain and nutrient sensitivity to heat
            and liquid contact.
          </p>

          <h6 className="text-lg font-semibold mb-1">
            What Transformations Account For
          </h6>

          <p className="mb-1">
            <strong>Macronutrients</strong> (proteins, carbohydrates, fats):
          </p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>Generally stable during cooking</li>
            <li>Values change primarily due to mass changes</li>
            <li>
              Fat can be added (frying) or removed (draining rendered fat)
            </li>
            <li>
              Simple sugars can leach during boiled-drained preparations; when
              the liquid is kept, losses are minimal
            </li>
            <li>
              Alcohol is modeled (7 kcal/g) with method-based retention;
              wet/steam methods typically retain more than dry/fat-heat
            </li>
          </ul>

          <p className="mb-1">
            <strong>Water-soluble vitamins</strong> (B-complex, vitamin C):
          </p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>Heat-sensitive</li>
            <li>Leach into cooking water</li>
            <li>Retention varies by method and whether liquid is consumed</li>
          </ul>

          <p className="mb-1">
            <strong>Fat-soluble vitamins</strong> (A, D, E, K):
          </p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>More stable than water-soluble vitamins</li>
            <li>Don&apos;t leach into water</li>
            <li>Retention depends on method and exposure to heat/oxidation</li>
          </ul>

          <p className="mb-1">
            <strong>Minerals</strong> (iron, calcium, zinc, etc.):
          </p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>Stable to heat</li>
            <li>Can leach into water if drained</li>
            <li>
              Retention is high when the cooking liquid is consumed and lower
              when it is drained
            </li>
          </ul>

          <p className="mb-1">
            <strong>Mass changes</strong>:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>Dry-heat methods often reduce weight due to water loss</li>
            <li>Steaming typically causes smaller changes in weight</li>
            <li>
              Starches (rice, pasta) gain water and dilute per-100g nutrients
            </li>
            <li>Frying can add fat and change weight due to oil uptake</li>
          </ul>

          <p className="mb-1">Additional transformation behaviors:</p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              Oil use can change both mass and fat; breading/coatings can
              increase oil uptake; high-fat meats may not need added oil
            </li>
            <li>
              &quot;Drained&quot; vs. &quot;undrained&quot; preparations are
              handled differently because liquids may contain leached nutrients
            </li>
            <li>
              Certain categories (like starches) absorb water during wet
              cooking, which dilutes per-100g values
            </li>
            <li>
              We recompute energy from final macronutrients after transformation
            </li>
          </ul>

          <h6 className="text-lg font-semibold mb-1">
            Rationale and sources for transformer logic
          </h6>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Method classes and cooked→cooked short-circuit: aligns with USDA
              recipe analysis practice to avoid applying cooking adjustments
              multiple times to already-cooked items (see FNDDS methodology and
              USDA recipe documentation)
            </li>
            <li>
              Retention by method (wet/steam/dry/fat-heat) and drained vs.
              undrained: USDA Table of Nutrient Retention Factors, Release 6
            </li>
            <li>
              Per-100g normalization for comparability: FAO/INFOODS guidance on
              denominators and common labeling conventions
            </li>
            <li>
              Category adjustments for starches (e.g., rice/pasta water
              absorption): Bognár yield/retention tables; USDA cooking yield
              resources
            </li>
            <li>
              Oil uptake during frying and breading effects: Bouchon (oil
              absorption in deep-fat frying); Dana & Saguy (mechanisms and
              mitigation of oil uptake)
            </li>
            <li>
              Fat drainage after cooking (discarded drippings): USDA meat
              cookery/cooking yield resources and consumer guidance on draining
              fat
            </li>
            <li>
              Energy recomputation from macros (4-4-9-7 factors): US FDA
              nutrition labeling regulations
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">Nutritional Analysis</h5>
          <p className="mb-1">
            Once the matching and transformation are complete, the system:
          </p>
          <ol className="list-decimal list-inside space-y-1 mb-2">
            <li>
              <strong>Calculates total nutrition</strong>: Sums nutrients from
              all ingredients (for multi-ingredient entries)
            </li>
            <li>
              <strong>Scales to your serving</strong>: Adjusts values based on
              the amount you consumed
            </li>
            <li>
              <strong>Generates insights</strong>: Provides context relative to
              your daily goals and dietary patterns
            </li>
            <li>
              <strong>Assigns information tier</strong>: Marks the entry as
              Verified, Transformed, or AI deduced
            </li>
          </ol>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Pizza strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">
              Composite Foods and Recipe Analysis
            </h5>
          </div>
          <p className="mb-2">
            For complex meals (pizza, casseroles, stews), the system uses the{" "}
            <strong>ingredient decomposition approach</strong>, which is the
            same methodology used by:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>USDA Recipe Calculator</li>
            <li>Professional nutrition software (ESHA, Genesis R&D)</li>
            <li>FDA guidance for recipe analysis</li>
          </ul>

          <h6 className="text-lg font-semibold mb-1">How It Works</h6>
          <ol className="list-decimal list-inside space-y-1 mb-2">
            <li>
              <strong>Decompose</strong>: Break down the dish into individual
              ingredients
            </li>
            <li>
              <strong>Match</strong>: Find database entries for each ingredient
            </li>
            <li>
              <strong>Transform</strong>: Apply cooking transformations to each
              ingredient individually
            </li>
            <li>
              <strong>Aggregate</strong>: Sum the nutrients from all ingredients
            </li>
          </ol>

          <p className="mb-1">
            <strong>Example: Homemade Pizza</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>Dough (raw → baked)</li>
            <li>Tomato sauce (cooked)</li>
            <li>Mozzarella cheese (raw → melted)</li>
            <li>Pepperoni (cooked)</li>
            <li>Vegetables (raw → baked)</li>
          </ul>

          <p>
            Each ingredient is matched, transformed, and summed to get total
            pizza nutrition. This ingredient-first approach aligns with
            professional recipe analysis standards and helps reduce variability
            that can occur when estimating whole dishes.
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Eye strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">
              Transparency and User Control
            </h5>
          </div>

          <h6 className="text-lg font-semibold mb-1">Information Tiers</h6>
          <p className="mb-1">
            Every entry clearly shows its information tier:
          </p>
          <ul className="space-y-2 mb-2">
            <li className="flex items-center gap-2">
              <Database
                strokeWidth={1.5}
                className="w-5 h-5 flex-shrink-0"
                style={{ color: "var(--mint-main)" }}
              />
              <span>
                <strong>Verified Database</strong>: Direct USDA data
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Wrench
                strokeWidth={1.5}
                className="w-5 h-5 flex-shrink-0"
                style={{ color: "var(--tangerine-light)" }}
              />
              <span>
                <strong>Verified Database, Transformed</strong>: USDA data with
                scientific transformations
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Bot
                strokeWidth={1.5}
                className="w-5 h-5 flex-shrink-0"
                style={{ color: "var(--cobalt-main)" }}
              />
              <span>
                <strong>AI deduced</strong>: AI-estimated values
              </span>
            </li>
          </ul>

          <h6 className="text-lg font-semibold mb-1">Detailed Information</h6>
          <p className="mb-1">For each entry, you can view:</p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>Data source (USDA FDC, AI estimation)</li>
            <li>Transformation details (if applicable)</li>
            <li>Individual ingredient breakdowns</li>
            <li>Processing metadata</li>
          </ul>

          <h6 className="text-lg font-semibold mb-1">
            Manual Editing (Planned)
          </h6>
          <p className="mb-1">Planned capabilities:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Edit ingredient quantities</li>
            <li>Adjust cooking methods</li>
            <li>Add or remove ingredients</li>
            <li>Override AI estimations with known values</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle
              strokeWidth={1.5}
              className="w-6 h-6 text-green-main"
            />
            <h5 className="text-xl font-semibold">
              Limitations and Considerations
            </h5>
          </div>

          <h6 className="text-lg font-semibold mb-1">What We Account For</h6>
          <ul className="space-y-1 mb-2">
            <li className="flex items-center gap-2">
              <CheckCircle2
                strokeWidth={1.5}
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "var(--green-main)" }}
              />
              <span>Cooking method effects on nutrients</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2
                strokeWidth={1.5}
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "var(--green-main)" }}
              />
              <span>Water loss/gain during preparation</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2
                strokeWidth={1.5}
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "var(--green-main)" }}
              />
              <span>Oil absorption during frying</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2
                strokeWidth={1.5}
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "var(--green-main)" }}
              />
              <span>Vitamin and mineral retention rates</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2
                strokeWidth={1.5}
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "var(--green-main)" }}
              />
              <span>Mass changes from cooking</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2
                strokeWidth={1.5}
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "var(--green-main)" }}
              />
              <span>Drained vs. undrained preparations</span>
            </li>
          </ul>

          <h6 className="text-lg font-semibold mb-1">
            What We Don&apos;t Model
          </h6>
          <ul className="space-y-1 mb-2">
            <li className="flex items-center gap-2">
              <XCircle
                strokeWidth={1.5}
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "var(--red-main)" }}
              />
              <span>Exact cooking time and temperature</span>
            </li>
            <li className="flex items-center gap-2">
              <XCircle
                strokeWidth={1.5}
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "var(--red-main)" }}
              />
              <span>
                Individual equipment variations (oven calibration, pan types)
              </span>
            </li>
            <li className="flex items-center gap-2">
              <XCircle
                strokeWidth={1.5}
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "var(--red-main)" }}
              />
              <span>Added seasonings and spices (unless you specify them)</span>
            </li>
            <li className="flex items-center gap-2">
              <XCircle
                strokeWidth={1.5}
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "var(--red-main)" }}
              />
              <span>Protein digestibility changes</span>
            </li>
            <li className="flex items-center gap-2">
              <XCircle
                strokeWidth={1.5}
                className="w-4 h-4 flex-shrink-0"
                style={{ color: "var(--red-main)" }}
              />
              <span>Nutrient redistribution in shared cooking liquids</span>
            </li>
          </ul>

          <h6 className="text-lg font-semibold mb-1">Conservative Approach</h6>
          <p>
            When uncertain, our system uses{" "}
            <strong>conservative estimates</strong> that slightly underestimate
            nutrient content rather than overestimate. This prevents
            overpromising nutritional value.
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">Continuous Improvement</h5>
          </div>
          <p className="mb-1">Our system improves over time through:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Database updates</strong>: Regular syncing with USDA
              FoodData Central updates
            </li>
            <li>
              <strong>AI refinement</strong>: Ongoing improvements in ingredient
              extraction and matching
            </li>
            <li>
              <strong>User feedback</strong>: Learning from user-submitted
              corrections and feedback
            </li>
            <li>
              <strong>Quality monitoring</strong>: Tracking quality metrics and
              addressing outliers
            </li>
            <li>
              <strong>Additional databases</strong>: Planned integrations with
              other national databases (e.g., CIQUAL) to broaden coverage
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">Further Reading</h5>
          </div>
          <p className="mb-2">
            Our nutrition transformation system is grounded in peer-reviewed
            research and authoritative databases. Below are key sources
            organized by topic for those interested in going deeper into the
            topic.
          </p>

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
              - Primary source for vitamin and mineral retention factors during
              cooking
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
              <em>Journal of Food Science.</em> PMC6049644 - Comprehensive study
              on vitamin retention across cooking methods
            </li>
            <li>
              <strong>Yuan G, et al. (2009).</strong> &quot;Effects of different
              cooking methods on health-promoting compounds of broccoli.&quot;
              PMC2722699 - Research on sugar and vitamin leaching during boiling
            </li>
            <li>
              <strong>Kimura M, Itokawa Y (1990).</strong> &quot;Cooking losses
              of minerals in foods and its nutritional significance.&quot;{" "}
              <em>Journal of Nutritional Science and Vitaminology</em> - Key
              study on mineral leaching in boiled-drained preparations
            </li>
            <li>
              <strong>Liu Y, et al. (2025).</strong> &quot;Investigating the
              effects of protein thermal denaturation on water-holding capacity
              of beef.&quot;{" "}
              <em>International Journal of Food Science and Technology</em> -
              Protein stability during cooking
            </li>
          </ul>

          <h6 className="text-lg font-semibold mb-1">
            Cooking Yields and Mass Changes
          </h6>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              <strong>Bognár, A. (1999).</strong> Tables on weight yield of food
              and retention factors of food constituents for the calculation of
              nutrient composition of cooked foods. Federal Research Centre for
              Nutrition (BFE), Karlsruhe - Comprehensive European reference on
              cooking yields
            </li>
            <li>
              <strong>Lisciani S, et al. (2022).</strong> &quot;Weight change of
              food after cooking: focus on the Italian scenario.&quot; -
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
              <strong>Saguy, I. S., & Dana, D. (2003).</strong> Deep-fat frying
              fundamentals.{" "}
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
              <strong>EuroFIR Recipe Calculation Procedures</strong> - Standard
              methodology used in European nutrition databases
            </li>
          </ul>

          <h6 className="text-lg font-semibold mb-1">
            Essential Food Science Books
          </h6>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>McGee, H.</strong>{" "}
              <em>On Food and Cooking: The Science and Lore of the Kitchen.</em>{" "}
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
