import {
  AlertCircle,
  Stethoscope,
  Sparkles,
  ShieldAlert,
  Construction,
} from "lucide-react";

export default function Disclaimer() {
  return (
    <div
      className="mb-4 p-4 rounded-lg border"
      style={{
        borderColor:
          "color-mix(in srgb, var(--amber-lighter) 80%, transparent)",
        backgroundColor:
          "color-mix(in srgb, var(--amber-lightest) 20%, transparent)",
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <AlertCircle
          strokeWidth={1.5}
          className="w-5 h-5"
          style={{ color: "var(--tangerine-main)" }}
        />

        <p className="font-semibold text-lg">Important</p>
      </div>
      <ul className="space-y-3">
        <li className="flex gap-3">
          <Construction
            strokeWidth={1.5}
            className="w-5 h-5 mt-0.5 flex-shrink-0 text-charcoal-light"
          />

          <span>
            Anfold is in beta and for personal tracking only. It is not a
            medical device and does not diagnose, treat, cure, or prevent
            disease, nor does it replace guidance from a doctor, dietitian,
            physiotherapist, or other qualified professional.
          </span>
        </li>
        <li className="flex gap-3">
          <Stethoscope
            strokeWidth={1.5}
            className="w-5 h-5 mt-0.5 flex-shrink-0 text-charcoal-light"
          />
          <span>
            If you have a medical condition, are pregnant, have injuries, or
            experience concerning symptoms, seek professional advice before
            relying on app insights.
          </span>
        </li>
        <li className="flex gap-3">
          <Sparkles
            strokeWidth={1.5}
            className="w-5 h-5 mt-0.5 flex-shrink-0 text-charcoal-light"
          />
          <span>
            Results are estimates and may vary with data quality and individual
            differences. AI may be used to interpret and fill in gaps based on
            your inputs and available data, which can be inaccurate or
            incomplete.
          </span>
        </li>
        <li className="flex gap-3">
          <ShieldAlert
            strokeWidth={1.5}
            className="w-5 h-5 mt-0.5 flex-shrink-0 text-charcoal-light"
          />
          <span>
            Review results, use your judgment, and do not use the app for
            clinical decisions.
          </span>
        </li>
      </ul>
    </div>
  );
}
