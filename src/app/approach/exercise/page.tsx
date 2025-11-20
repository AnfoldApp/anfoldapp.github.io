import Disclaimer from "@/components/Disclaimer";
import Layout from "@/components/Layout";
import AdvancedCollapsible from "@/components/AdvancedCollapsible";
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
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Exercise Overview | Anfold",
  description:
    "Complete guide to Anfold's exercise tracking system. Learn how we calculate Cardio Load, Muscle Load Units (MLU), and Total Load using physics-accurate methods for strength, endurance, and mobility training. Includes calculation methods, inputs, targets, and scientific references.",
};

export default function Exercise() {
  return (
    <Layout showHeader={false}>
      <div className="flex flex-col mb-6 detail-page-exercise-hero">
        <Header theme="light" />

        <div className="flex flex-col items-center flex-1 justify-center">
          <Dumbbell
            strokeWidth={1.5}
            className="w-20 h-20 mb-4"
            style={{ color: "var(--white)" }}
          />

          <h3 className="text-4xl font-bold text-white">Exercise Overview</h3>
        </div>
      </div>

      <section className="content-section flex flex-col text-base p-6 max-w-4xl mx-auto">
        <Disclaimer className="mb-8" />

        <div className="mb-8">
          <h5 className="text-xl font-semibold mb-1">Introduction</h5>
          <p className="mb-2">
            Anfold helps you understand the training impact of your activities.
            We convert your entries into three clear metrics that summarize
            whole-body effort, per-muscle stress, and overall recovery demand.
            Under the hood, the system uses established, physics-accurate
            methods from exercise science, designed for everyday logging.
          </p>
          <p className="mb-4">
            Our approach is input-aware: when objective data (like heart rate)
            is available, we prioritize it; when it is not, we fall back to
            reasonable estimates based on the information you provide.
          </p>

          <AdvancedCollapsible>
            <p>
              The system separates physics-accurate calculations from
              user-facing metrics. Per-modality math (strength, endurance,
              mobility) is unified into a single per-muscle unit (MLU) so mixed
              training stacks sensibly over time.
            </p>
            <p>
              Total Load blends whole-body cardio stress with average per-muscle
              stress to better reflect day-to-day recovery needs, without
              exposing device-specific assumptions.
            </p>
          </AdvancedCollapsible>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Gauge strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">
              The Three Metrics You&apos;ll See
            </h5>
          </div>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              <strong>Cardio Load</strong>: Whole-body aerobic/systemic demand
            </li>
            <li>
              <strong>Muscle Load Units (MLU)</strong>: Unified per-muscle
              mechanical stress that stacks correctly across all training types
            </li>
            <li>
              <strong>Total Load</strong>: Blended recovery demand that weights
              systemic and muscular stress (leaning more on cardio for
              short-term recovery)
            </li>
          </ul>
          <p>
            These metrics are designed for daily understanding and
            week-over-week comparisons. They are unitless points derived from
            duration, intensity, modality and, when available, heart rate.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Cog strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">Three-Layer Architecture</h5>
          </div>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>
              <strong>Layer 1 — Modality Calculations</strong>: Physics-accurate
              formulas for strength, endurance and mobility that respect how
              each modality actually stresses your body.
            </li>
            <li>
              <strong>Layer 2 — MLU Unification</strong>: All raw loads convert
              into a single per-muscle unit (MLU) using modality-aware
              translation factors, so mixed training stacks sensibly.
            </li>
            <li>
              <strong>Layer 3 — Targets &amp; Interpretation</strong>: Clear
              weekly guidance per muscle (e.g., maintain/build/aggressive) plus
              an overall Total Load to help you manage recovery.
            </li>
          </ul>

          <AdvancedCollapsible>
            <p>
              Separate scales avoid forcing endurance, strength, and mobility
              into one formula. Each uses a physiology-appropriate method and
              then converts to MLU so cross-modality training adds up cleanly.
            </p>
            <p>
              Targets are deliberately broad and conservative. They adapt to
              phase goals (maintain vs build) without prescribing elite-level
              volumes by default.
            </p>
          </AdvancedCollapsible>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Cog strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">How Entries Are Processed</h5>
          </div>
          <p className="mb-1">
            When you log an exercise (text or structured entry), the system:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>
              Interprets the activity type, duration and intensity (subjective
              or heart-rate-based)
            </li>
            <li>
              Applies a modality-specific method to compute loads (strength,
              endurance/sports, or mobility)
            </li>
            <li>
              Allocates per-muscle load using the activity context and muscle
              activation patterns
            </li>
            <li>
              Returns Cardio Load, MLU, and Total Load and aggregates them over
              time
            </li>
          </ul>

          <AdvancedCollapsible>
            <p>
              AI-generated muscle activations are normalized and validated
              against expected patterns; physiologically implausible outputs are
              flagged while still allowing user overrides.
            </p>
            <p>
              Fallback activation profiles cover common modalities when AI
              context is insufficient, ensuring consistent per-muscle allocation
              across entries.
            </p>
          </AdvancedCollapsible>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Calculator strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">Calculation Methods</h5>
          </div>

          <h6 className="text-lg font-semibold mb-1">
            Strength and Calisthenics (INOL-based, enhanced)
          </h6>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              Uses an INOL-style approach (Intensity Number of Lifts) to model
              mechanical demand
            </li>
            <li>
              Intensity is estimated from weight x reps or, for bodyweight work,
              from reps alone
              <ul className="list-disc list-inside ml-6 space-y-1 mt-1">
                <li>Handles barbell, machine, and bodyweight movements</li>
                <li>Supports accessories and compounds</li>
              </ul>
            </li>
            <li>
              Accounts for hypertrophy-style volume, rep tempo (time under
              tension), and eccentric emphasis
            </li>
            <li>
              Systemic (cardio) component credits active work but not rest
            </li>
            <li>
              Per-muscle load is split using muscle activation shares for the
              exercise
            </li>
          </ul>

          <p className="mb-4">
            What this captures: heavier sets, more volume, slower tempos, and
            movements with pronounced lowering phases increase load
            appropriately; involved muscle groups receive their share.
          </p>

          <AdvancedCollapsible className="mb-4">
            <p>
              Intensity estimation supports both loadxreps and reps-only cases
              for bodyweight. Rep tempo affects time-under-tension; eccentric
              emphasis increases mechanical stress. Systemic load considers
              active work only, excluding rest intervals.
            </p>
            <p>
              Per-muscle distribution uses activation shares (AI or fallback)
              before conversion to unified MLU for cross-modality stacking.
            </p>
          </AdvancedCollapsible>

          <h6 className="text-lg font-semibold mb-1">
            Endurance, Sports, Circuits, HIIT (HRR-guided, terrain-aware)
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
              Uses a bounded intensity curve that captures how effort compounds
              at higher intensities without numerical blow-ups
            </li>
            <li>
              Terrain- and modality-aware mechanics (e.g., uphill vs. flat,
              impact/eccentric differences) affect muscle stress
            </li>
            <li>
              Longer sessions add diminishing returns within the same workout
            </li>
            <li>
              Per-muscle loads use muscle groups to apportion mechanical demand
              from the session
            </li>
          </ul>
          <p className="mb-4">
            What this captures: longer and/or harder sessions raise systemic
            demand; different activities and terrains stress muscles
            differently; HR data refines accuracy when available.
          </p>
          <AdvancedCollapsible className="mb-4">
            <p>
              Intensity is guided by Heart Rate Reserve when available, with a
              bounded intensity curve to prevent blow-ups at maximal effort.
            </p>
            <p>
              Terrain mechanics and impact/eccentric differences (e.g., uphill
              vs flat, trail vs road) shift per-muscle stress; longer single
              sessions accrue diminishing returns to reflect fatigue within a
              workout.
            </p>
            <p>
              Muscle-specific adjustments capture that, for example, uphill
              running stresses hip extensors more than flat terrain.
            </p>
          </AdvancedCollapsible>

          <h6 className="text-lg font-semibold mb-1">
            Mobility, Flexibility, Balance (gentle, active vs. passive)
          </h6>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>Uses a lighter, stability-focused intensity profile</li>
            <li>
              Distinguishes passive vs. active work; restorative stretching is
              credited lightly, active mobility earns more for muscular control
            </li>
            <li>
              Computes muscle and systemic loads using conservative scaling
            </li>
          </ul>
          <p className="mb-4">
            What this captures: meaningful but lighter stimulus appropriate for
            low-intensity movement, with proper distinction between restorative
            and active mobility work.
          </p>
          <AdvancedCollapsible>
            <p>
              Active vs passive work uses a stability-oriented intensity model
              suited to gentle exercise. Mobility accrues conservative
              per-muscle and systemic loads and converts to MLU at lower rates,
              reflecting recovery-compatible loading.
            </p>
          </AdvancedCollapsible>
        </div>

        <div className="mb-8">
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
          <p className="mb-4">
            When heart-rate fields are present and valid, we use Heart Rate
            Reserve (HRR) to set intensity. Otherwise, sRPE maps to a sensible
            intensity range. Weight is required only when it materially affects
            a calculation (e.g., bodyweight strength).
          </p>
          <AdvancedCollapsible>
            <p>
              HRR uses resting, mean, and max heart rate to estimate intensity
              and is clamped to a physiologically reasonable range. When HR is
              missing, sRPE is mapped to an intensity fraction with similar
              guardrails.
            </p>
            <p>
              User weight is used for bodyweight strength estimates when it
              materially changes the result; if missing, those estimates are
              limited rather than guessed.
            </p>
          </AdvancedCollapsible>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Gauge strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">
              Targets &amp; Interpretation
            </h5>
          </div>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              <strong>Cardio Load</strong>: Daily and weekly guidance reflects
              time x effort (HR- or sRPE-informed). Targets encourage steady,
              sustainable progress, not elite-only volumes.
            </li>
            <li>
              <strong>Muscle Load Units (MLU)</strong>: Weekly per-muscle
              guidance maps to a practical number of hard sets, considering both
              weight and reps. Daily guidance leaves room for recovery between
              muscle groups.
            </li>
            <li>
              <strong>Total Load</strong>: A weighted blend of cardio and
              average per-muscle load that leans toward cardio to reflect
              short-term recovery needs while still accounting for local muscle
              stress.
            </li>
            <li>
              These are conservative defaults. If you have specific goals (e.g.,
              race build, hypertrophy block), aim higher or lower accordingly.
            </li>
          </ul>

          <h6 className="text-lg font-semibold mb-1">Practical Examples</h6>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>
              A moderate run plus a short strength circuit can satisfy a typical
              daily Total Load without feeling overcooked.
            </li>
            <li>
              Two focused strength days for a muscle group, paired with a few
              quality cardio sessions, generally lands in a progressive “build”
              week for most people.
            </li>
            <li>
              Endurance-focused weeks still contribute meaningful MLU to the
              primary muscles involved, so mixed training stacks sensibly over
              time.
            </li>
          </ul>
          <AdvancedCollapsible>
            <p>
              Weekly guidance is expressed per muscle using broad bands
              (maintain/build/aggressive). A single-day cap prevents outliers
              from skewing trends and encourages distribution over “hero”
              sessions.
            </p>
            <p>
              Total Load blends systemic and muscular stress to approximate
              overall recovery demand; it leans toward cardio for near-term
              fatigue while still accounting for muscle-level stress.
            </p>
          </AdvancedCollapsible>
        </div>

        <div className="mb-8">
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

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Users strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">Muscle Load Distribution</h5>
          </div>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>
              AI provides context-aware muscle activations for each entry; the
              system normalizes and validates them.
            </li>
            <li>
              Fallback patterns cover common activities when AI activations are
              not available.
            </li>
            <li>
              For endurance, terrain and modality influence which muscles carry
              more stress. For strength, activation splits credit across the
              muscles involved.
            </li>
            <li>
              The result is a clear weekly map of which muscles appear to have
              been trained the most.
            </li>
          </ul>
          <AdvancedCollapsible>
            <p>
              Endurance distribution accounts for impact and eccentric
              differences across terrains (e.g., uphill vs downhill) so that
              local muscle stress reflects real-world mechanics.
            </p>
            <p>
              Strength distribution uses activation shares to split per-set dose
              across muscles before unifying into MLU. Single-day caps catch
              outliers and keep weekly tallies realistic.
            </p>
          </AdvancedCollapsible>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Eye strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">
              Transparency and What You&apos;ll See
            </h5>
          </div>
          <ul className="list-disc list-inside space-y-1">
            <li>
              For each entry: Cardio Load, MLU (per-muscle), Total Load, and the
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

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Calculator strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">Calorie Estimation</h5>
          </div>
          <p className="mb-2">
            Anfold provides conservative calorie estimates for your activities.
            When heart rate data is available, we use scientifically-validated
            formulas that account for your physiology. Without heart rate, we
            apply activity-specific energy models that adjust for intensity,
            terrain, and exercise type.
          </p>
          <p className="mb-4">
            Strength training uses a specialized approach that separates active
            work from rest periods, preventing the overestimation common in
            traditional methods. Different exercise types (compounds vs.
            accessories) and intensities are weighted appropriately.
          </p>

          <AdvancedCollapsible>
            <p className="mb-2">
              <strong>Heart rate priority</strong>: When HR data is complete and
              valid, we use the Keytel formula, a validated approach that
              accounts for individual physiology. This is prioritized over
              generic MET tables.
            </p>
            <p className="mb-2">
              <strong>MET-based fallback</strong>: Without HR, activity-specific
              MET values are adjusted by your RPE, terrain (uphill/downhill),
              and elevation gain for outdoor activities.
            </p>
            <p className="mb-2">
              <strong>Strength blended approach</strong>: Active work (time
              under tension) uses a higher MET; rest periods use a lower MET.
              Compounds and accessories are weighted differently. Session
              averages are capped at realistic values to prevent inflated
              estimates.
            </p>
            <p>All estimates lean conservative, accuracy over flattery.</p>
          </AdvancedCollapsible>
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
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>
              These are practical training load points for personal tracking,
              not medical measurements
            </li>
            <li>Load depends on the quality and completeness of your inputs</li>
            <li>
              Heart-rate calculations work best when resting/mean/max values are
              provided and physiologically plausible
            </li>
            <li>
              Bodyweight strength estimates need user weight; without it,
              strength load is limited
            </li>
          </ul>
        </div>

        <div className="mb-8">
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

        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen strokeWidth={1.5} className="w-6 h-6 text-green-main" />
            <h5 className="text-xl font-semibold">Further Reading</h5>
          </div>
          <p className="mb-4">
            Methods are based on well-known approaches in exercise science and
            professional practice. Selected background materials:
          </p>

          <AdvancedCollapsible label="See references and citations">
            <ul className="list-disc list-inside space-y-1">
              <li>
                Hristov, P. (2005). Intensity Number of Lifts (INOL) concept for
                quantifying strength training stress.
              </li>
              <li>
                Foster, C. (2001). A new approach to monitoring exercise
                training. <em>Journal of Strength and Conditioning Research</em>
                , 15(1), 109-115.{" "}
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
                Impellizzeri, F. M., et al. (2004). Use of RPE-based training
                load in soccer. <em>Medicine & Science in Sports & Exercise</em>
                , 36(6), 1042-1047.{" "}
                <a
                  href="https://doi.org/10.1249/01.MSS.0000128199.23901.2F"
                  className="with-underline"
                >
                  DOI
                </a>
              </li>
              <li>
                Karvonen, M. J., Kentala, E., & Mustala, O. (1957). The effects
                of training on heart rate.{" "}
                <em>Annales Medicinae Experimentalis et Biologiae Fenniae</em>,
                35, 307-315. (HRR concept)
              </li>
              <li>
                Gottschall, J. S., & Kram, R. (2005). Ground reaction forces on
                uphill and downhill running. <em>Journal of Biomechanics</em>.
              </li>
              <li>
                Mizrahi, J., et al. (2000). Shock absorption during running.
                <em>Clinical Biomechanics</em>.
              </li>
              <li>
                Epley, B. (1985). Poundage chart. In <em>Boyd Epley Workout</em>
                .
              </li>
              <li>
                Lander, J. (1985). Maximums and repetitions. University of
                Kansas.
              </li>
              <li>
                Hornsby, W., et al. (2018). Modelling the dose-response
                relationship in resistance training. <em>Sports Medicine</em>.
              </li>
              <li>
                Schoenfeld, B. J., et al. Volume load and per-muscle set
                counting for hypertrophy.
              </li>
              <li>
                Paszek, A. Comparative muscle damage: running vs. cycling at
                equivalent cardiovascular intensities.
              </li>
              <li>
                Frontiers in Physiology (2021). Integrating external and
                internal load for monitoring fitness and fatigue status.
              </li>
              <li>
                de Vries, A. (2015). Intensity recommendations for flexibility
                and mobility training. <em>Sports Medicine</em>.
              </li>
              <li>
                Ainsworth, B. E., et al. (2011). Compendium of Physical
                Activities (MET values).
              </li>
              <li>
                Keytel, L. R., et al. (2005). Prediction of energy expenditure
                from heart rate monitoring.{" "}
                <em>European Journal of Applied Physiology</em>.
              </li>
              <li>
                Minetti, A. E., et al. (2002). Energy cost of walking/running on
                gradients. <em>Journal of Applied Physiology</em>.
              </li>
              <li>
                Scott, C. B. (2006). Energy expenditure during resistance
                training.
              </li>
              <li>
                Bloomer, R. J. (2005). Postexercise oxygen consumption following
                resistance exercise.
              </li>
              <li>
                Ratamess, N. A., et al. (2007). Rest interval length and
                metabolic responses during resistance exercise.
              </li>
              <li>
                Boutcher, S. H. (2011). High-intensity intermittent exercise.
              </li>
              <li>
                Chen, M. J., et al. (2002). RPE validity across exercise modes.
              </li>
              <li>
                Coggan, A. R., & Allen, H. Training Stress Score and power-based
                load monitoring.
              </li>
            </ul>
            <p className="mt-3 o-75">
              Note: We avoid brand-specific devices or vendor dependencies;
              calculations rely on common fields you can enter manually.
            </p>
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
