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
  Pencil,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Exercise System Overview | Anfold",
  description:
    "Understand Anfold's exercise metrics: Cardio Load, Muscle Load, and Total Load. Learn how duration, intensity, activity type and heart rate inform practical training load points.",
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
            We convert your exercise entries into three simple metrics that
            summarize whole-body effort, muscle-specific stress, and overall
            recovery demand using established methods from exercise science,
            adapted for everyday logging.
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
              The Three Metrics You&apos;ll See
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
            <li>
              <strong>Total Load</strong>: Combined recovery demand estimate of
              overall training stress
            </li>
          </ul>
          <p>
            These metrics are designed for daily understanding and
            week-over-week comparisons. They are unitless points derived from
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
              Returns Cardio, Muscle, and Total Load and aggregates over time
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Calculator strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">Calculation Methods</h5>
          </div>

          <h6 className="text-lg font-semibold mb-1">
            Strength and Calisthenics (Enhanced INOL-based)
          </h6>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              Uses an INOL-style approach (Intensity Number of Lifts) to reflect
              mechanical demand
            </li>
            <li>
              Accepts two paths for intensity:
              <ul className="list-disc list-inside ml-6 space-y-1 mt-1">
                <li>With load: estimates %1RM from load x reps</li>
                <li>Without load/bodyweight: estimates %1RM from reps alone</li>
              </ul>
            </li>
            <li>
              Automatically adjusts for workout style: moderate-weight, higher
              reps (hypertrophy) credit metabolic stress appropriately
            </li>
            <li>
              Slower tempos increase load to reflect longer time under tension
            </li>
            <li>
              Accounts for eccentric (lowering) phase contributing extra stress
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
            What this captures: heavier sets, more volume, and slower tempos all
            increase load appropriately; involved muscle groups are credited for
            their share of the work.
          </p>

          <h6 className="text-lg font-semibold mb-1">
            Cardio, Sports, Circuits, HIIT (Enhanced sRPE/HRR-guided)
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
              Uses a scientifically-informed intensity curve that captures how
              effort compounds at higher intensities
            </li>
            <li>
              Accounts for activity-specific stress: e.g., running can accrue
              higher muscle load than cycling at the same cardio effort
            </li>
            <li>
              High-impact sports (basketball, soccer) are weighted vs. lower-
              impact activities (swimming, cycling)
            </li>
            <li>
              Per-muscle loads use muscle groups to apportion mechanical demand
              from the session
            </li>
          </ul>
          <p className="mb-2">
            What this captures: longer and/or harder sessions raise systemic
            demand; different activities stress muscles differently even at
            similar intensities; HR data refines accuracy when available.
          </p>

          <h6 className="text-lg font-semibold mb-1">
            Mobility, Flexibility, Balance (Enhanced Gentle Model)
          </h6>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>Uses a lighter intensity band suitable for gentle work</li>
            <li>
              Distinguishes passive vs. active work: restorative stretching gets
              minimal load; active mobility earns credit for muscular control
            </li>
            <li>
              Computes muscle and systemic loads using conservative scaling
            </li>
          </ul>
          <p>
            What this captures: meaningful but lighter stimulus appropriate for
            low-intensity movement, with proper distinction between restorative
            and active mobility work.
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
              Subjective intensity (sRPE 1-10) and/or heart rate fields
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
            <Gauge strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">Recommended Targets</h5>
          </div>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              <strong>Cardio Load</strong>: Daily and weekly ranges are based on
              time x effort points (sRPExminutes or HR-based TRIMP). Targets are
              set to encourage steady, sustainable progress from “maintain” to
              “build” weeks without defaulting to elite volumes.
            </li>
            <li>
              <strong>Muscle Load</strong>: Weekly per-muscle ranges map to a
              practical number of hard sets using an INOL-style score (accounts
              for both weight and reps). Daily guidance leaves room for recovery
              between muscle groups.
            </li>
            <li>
              <strong>Total Load</strong>: Your daily Total Load goal blends
              ~60% Cardio + ~40% average Muscle Load to reflect that systemic
              strain often dominates short-term recovery needs while still
              accounting for local muscle stress.
            </li>
            <li>
              These are conservative defaults. If you have specific goals (e.g.,
              race build, hypertrophy block), aim higher or lower accordingly.
            </li>
          </ul>

          <h6 className="text-lg font-semibold mb-1">Target Examples</h6>

          <p className="mb-1">
            <strong>Cardio (daily target example)</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>If your daily cardio target shows ~350 points:</li>
            <li className="ml-6">40 min easy jog at RPE 6 ≈ 240 points</li>
            <li className="ml-6">+ 20 min brisk walk at RPE 4 ≈ 80 points</li>
            <li className="ml-6">
              Total ≈ 320/350 — different mixes can hit the same target
            </li>
          </ul>

          <p className="mb-1">
            <strong>Cardio (weekly target example)</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              “Maintain” 1,500-2,500 points ≈ 5 days x 30-45 min at RPE 5-6
            </li>
            <li>
              “Build” 2,500-3,500 points ≈ 5-6 days x 45-60 min at RPE 6-7
            </li>
          </ul>

          <p className="mb-1">
            <strong>Muscle (per-muscle daily/weekly example)</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              Daily guidance (~0.4-0.9 INOL per muscle) typically looks like 3-4
              sets of 6-10 reps at moderate weight for that muscle.
            </li>
            <li>
              Weekly “build” (≈3.5-5.0 INOL) is roughly 2-3 focused sessions for
              the same muscle with recovery days in between.
            </li>
            <li>
              Multi-joint lifts split the score across involved muscles (e.g.,
              bench → chest, triceps, delts).
            </li>
          </ul>

          <p className="mb-1">
            <strong>Total Load (combined daily example)</strong>
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              If your daily Total Load target is ~65 points: a run giving Cardio
              Load 50 + a short lift with average Muscle Load 25 → 0.6x50 +
              0.4x25 = 50. You&apos;re at 50/65 (~77% of target). Add easy work
              or stop there on a light day.
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Pencil strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">Manual Editing (Planned)</h5>
          </div>
          <ul className="list-disc list-inside space-y-1">
            <li>Edit sets, reps, load, and tempo for strength sessions</li>
            <li>Adjust subjective intensity (sRPE) or add heart-rate fields</li>
            <li>
              Select and adjust muscle groups and their contribution shares
            </li>
            <li>
              Refine activity type/modality to better reflect session stress
            </li>
            <li>Override estimates when you have known values</li>
          </ul>
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
              For each entry: Cardio Load, Muscle Load, Total Load, and the
              engaged muscle groups
            </li>
            <li>
              For daily/weekly views: totals and trends to help you balance
              training and manage recovery
            </li>
            <li>
              Total Load provides a single number to track overall training
              stress and recovery needs
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
            <li>We continuously refine algorithms based on current research</li>
            <li>
              Better distinction across cardio activities (e.g., running vs.
              cycling muscle impact)
            </li>
            <li>
              Smarter handling of strength styles (heavy low-rep vs. moderate
              high-rep; tempo awareness)
            </li>
            <li>
              Active vs. passive mobility differentiation and more accurate
              intensity scaling
            </li>
            <li>Future: auto-suggested muscle groups and smarter defaults</li>
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
              Hristov, P. (2005). Intensity Number of Lifts (INOL) concept for
              quantifying strength training stress.
            </li>
            <li>
              Foster, C. (2001). A new approach to monitoring exercise training.{" "}
              <em>Journal of Strength and Conditioning Research</em>, 15(1),
              109-115.{" "}
              <a
                href="https://doi.org/10.1519/00124278-200102000-00019"
                className="with-underline"
              >
                DOI
              </a>
            </li>
            <li>
              Banister, E. W. (1975). TRIMP (Training Impulse) model with
              exponential intensity weighting.
            </li>
            <li>
              Impellizzeri, F. M., et al. (2004). Use of RPE-based training load
              in soccer. <em>Medicine & Science in Sports & Exercise</em>,
              36(6), 1042-1047.{" "}
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
              35, 307-315. (HRR concept)
            </li>
            <li>
              Epley, B. (1985). Poundage chart. In <em>Boyd Epley Workout</em>.
            </li>
            <li>
              Lander, J. (1985). Maximums and repetitions. University of Kansas.
            </li>
            <li>
              Hornsby, W., et al. (2018). Modelling the dose-response
              relationship in resistance training. <em>Sports Medicine</em>.
            </li>
            <li>
              Schoenfeld, B. J., et al. Volume load and per-muscle set counting
              for hypertrophy.
            </li>
            <li>
              Paszek, A. Comparative muscle damage: running vs. cycling at
              equivalent cardiovascular intensities.
            </li>
            <li>
              Frontiers in Physiology (2021). Integrating external and internal
              load for monitoring fitness and fatigue status.
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
