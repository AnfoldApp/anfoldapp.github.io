import Disclaimer from "@/components/Disclaimer";
import Layout from "@/components/Layout";
import { Metadata } from "next";
import {
  Gauge,
  Cog,
  Calculator,
  Target,
  Users,
  Eye,
  AlertTriangle,
  TrendingUp,
  BookOpen,
  Dumbbell,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Exercise System Overview | Anfold",
  description:
    "Understand Anfold's exercise load metrics: Cardio Load and Muscle Load. Learn how inputs like duration, intensity, and heart rate are used to compute practical training load points.",
};

export default function Exercise() {
  return (
    <Layout>
      <section className="content-section flex flex-col text-base p-6 max-w-4xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <Dumbbell
            strokeWidth={1.5}
            className="w-20 h-20 mb-4"
            style={{ color: "var(--cobalt-main)" }}
          />
          <h3 className="text-3xl font-bold">Exercise Overview</h3>
        </div>

        <Disclaimer className="mb-8" />

        <div className="mb-4">
          <h5 className="text-xl font-semibold mb-1">Introduction</h5>
          <p className="mb-2">
            Anfold helps you understand the training impact of your activities.
            We convert your exercise entries into two simple metrics that
            summarize whole-body and muscle-specific effort using established
            methods from exercise science, adapted for everyday logging.
          </p>
          <p>
            Our approach is input-aware: when objective data (like heart rate)
            is available, we prioritize it; when it is not, we fall back to
            reasonable estimates based on the information you provide.
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Gauge strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">
              The Two Metrics You&apos;ll See
            </h5>
          </div>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              <strong>Cardio Load</strong>: Whole-body aerobic/systemic effort
              points
            </li>
            <li>
              <strong>Muscle Load</strong>: Per-muscle mechanical effort points
            </li>
          </ul>
          <p>
            These metrics are designed for daily understanding and
            week-over-week comparisons. They are unitless “points” derived from
            duration, intensity, modality and, when available, heart rate.
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Cog strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">How Entries Are Processed</h5>
          </div>
          <p className="mb-1">
            When you log an exercise (text or structured entry), the system:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              Interprets the activity type, duration and intensity (subjective
              or heart-rate-based)
            </li>
            <li>
              Applies a category-specific method to compute loads (strength,
              cardio/sports, or mobility)
            </li>
            <li>
              Allocates muscle load to muscle groups based on the entry context
            </li>
            <li>
              Returns Cardio Load and Muscle Load for the entry and aggregates
              them over time
            </li>
          </ul>
          <p>You’ll see results immediately after saving your entry.</p>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Calculator strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">
              Calculation Methods (At a Glance)
            </h5>
          </div>

          <h6 className="text-lg font-semibold mb-1">
            Strength and Calisthenics (INOL-based)
          </h6>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              Uses an INOL-style approach (Intensity Number of Lifts) to reflect
              mechanical demand
            </li>
            <li>
              Accepts two paths for intensity:
              <ul className="list-disc list-inside ml-6 space-y-1 mt-1">
                <li>With load: estimates %1RM from load × reps</li>
                <li>Without load/bodyweight: estimates %1RM from reps alone</li>
              </ul>
            </li>
            <li>
              Systemic (cardio) component includes only active
              time-under-tension, not rest
            </li>
            <li>
              Per-muscle load is split by muscle activation shares for the
              exercise
            </li>
          </ul>
          <p className="mb-2">
            What this captures: heavier sets and more total work increase load;
            selecting target muscles allocates that work appropriately.
          </p>

          <h6 className="text-lg font-semibold mb-1">
            Cardio, Sports, Circuits, HIIT (sRPE/HRR-guided)
          </h6>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              Prioritizes heart rate reserve (HRR) to set intensity when
              heart-rate data is present
            </li>
            <li>
              Falls back to a mapped subjective intensity (sRPE) when HR is not
              available
            </li>
            <li>
              Uses an intensity curve that grows with both time and effort to
              reflect session difficulty
            </li>
            <li>
              Per-muscle loads use muscle groups to apportion mechanical demand
              from the session
            </li>
          </ul>
          <p className="mb-2">
            What this captures: longer and/or harder sessions create higher
            systemic demand; HR data refines intensity when available.
          </p>

          <h6 className="text-lg font-semibold mb-1">
            Mobility, Flexibility, Balance (Gentle Intensity Model)
          </h6>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>Uses a lighter intensity band suitable for gentle work</li>
            <li>
              Computes muscle and systemic loads using conservative scaling
            </li>
          </ul>
          <p>
            What this captures: meaningful but lighter stimulus appropriate for
            low-intensity movement.
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Target strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">Inputs We Use</h5>
          </div>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              Activity type and category (e.g., running, strength training)
            </li>
            <li>Duration (minutes)</li>
            <li>
              Subjective intensity (sRPE 1–10) and/or heart rate fields
              (resting, mean, max)
            </li>
            <li>
              Strength-specific fields when relevant (sets, reps, load,
              bodyweight)
            </li>
            <li>
              Muscle groups engaged and their approximate contribution to the
              exercise
            </li>
          </ul>
          <p>
            When heart-rate fields are all present and valid, HRR is used to
            determine intensity. Otherwise, sRPE is mapped to an intensity
            fraction.
          </p>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Users strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">Muscle Load Distribution</h5>
          </div>
          <ul className="list-disc list-inside space-y-1">
            <li>The system infers one or more muscle groups for an entry</li>
            <li>
              Each group’s share determines how much of the total muscle load is
              allocated
            </li>
            <li>
              This produces a useful weekly map of which muscles appear to have
              been worked the most
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Eye strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">
              Transparency and What You&apos;ll See
            </h5>
          </div>
          <ul className="list-disc list-inside space-y-1">
            <li>
              For each entry: Cardio Load, Muscle Load and the list of muscle
              groups engaged
            </li>
            <li>
              For daily/weekly views: totals and trends to help you balance
              training
            </li>
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
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              These are practical training load points for personal tracking,
              not medical measurements
            </li>
            <li>Load depends on the quality and completeness of your inputs</li>
            <li>
              Heart-rate calculations require resting/mean/max values to be
              useful
            </li>
            <li>
              Bodyweight strength estimates need user weight; without it,
              strength load is limited
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">Continuous Improvement</h5>
          </div>
          <ul className="list-disc list-inside space-y-1">
            <li>
              We review feedback to refine intensity curves and per-modality
              factors
            </li>
            <li>
              Future updates may include auto-suggested muscle groups and
              smarter defaults
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">Further Reading</h5>
          </div>
          <p className="mb-2">
            Methods are based on well-known approaches in exercise science and
            professional practice. Selected background materials:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Foster, C. (2001). A new approach to monitoring exercise training.{" "}
              <em>Journal of Strength and Conditioning Research</em>, 15(1),
              109–115.{" "}
              <a
                href="https://doi.org/10.1519/00124278-200102000-00019"
                className="with-underline"
              >
                DOI
              </a>
            </li>
            <li>
              Impellizzeri, F. M., et al. (2004). Use of RPE-based training load
              in soccer. <em>Medicine & Science in Sports & Exercise</em>,
              36(6), 1042–1047.{" "}
              <a
                href="https://doi.org/10.1249/01.MSS.0000128199.23901.2F"
                className="with-underline"
              >
                DOI
              </a>
            </li>
            <li>
              Karvonen, M. J., Kentala, E., & Mustala, O. (1957). The effects of
              training on heart rate.{" "}
              <em>Annales Medicinae Experimentalis et Biologiae Fenniae</em>,
              35, 307–315. (HRR concept)
            </li>
            <li>
              Epley, B. (1985). Poundage chart. In <em>Boyd Epley Workout</em>.
            </li>
            <li>
              Lander, J. (1985). Maximums and repetitions. University of Kansas.
            </li>
            <li>
              Hornsby, W., et al. (2018). Modelling the dose–response
              relationship in resistance training. <em>Sports Medicine</em>.
            </li>
          </ul>
          <p className="mt-3 o-75">
            Note: We avoid brand-specific devices or vendor dependencies;
            calculations rely on common fields you can enter manually.
          </p>
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
