import {
  AlertCircle,
  Stethoscope,
  Sparkles,
  ShieldAlert,
  Construction,
  Bot,
} from "lucide-react";

export default function Disclaimer({ className = "" }: { className?: string }) {
  return (
    <div
      className={`p-4 rounded-2xl border ${className}`}
      style={{
        borderColor: "var(--charcoal-lightest)",
        // "color-mix(in srgb, var(--amber-lighter) 80%, transparent)",
      }}
    >
      <div className="flex items-center gap-3 mb-3">
        <AlertCircle
          strokeWidth={1.5}
          className="w-5 h-5"
          style={{ color: "var(--tangerine-main)" }}
        />

        <p className="font-semibold text-lg">Please Note</p>
      </div>
      <ul className="space-y-3">
        <li className="flex gap-3">
          <Construction
            strokeWidth={1.5}
            color="var(--tangerine-main)"
            className="w-5 h-5 mt-0.5 flex-shrink-0 text-charcoal-light"
          />

          <span>
            Anfold is in beta and for personal tracking. It is not a medical
            device or a substitute for professional advice.
          </span>
        </li>
        <li className="flex gap-3">
          <Stethoscope
            strokeWidth={1.5}
            color="var(--tangerine-main)"
            className="w-5 h-5 mt-0.5 flex-shrink-0 text-charcoal-light"
          />
          <span>
            If you have a health condition or notice worrying symptoms, talk to
            a professional before relying on the app.
          </span>
        </li>
        <li className="flex gap-3">
          <Sparkles
            strokeWidth={1.5}
            color="var(--tangerine-main)"
            className="w-5 h-5 mt-0.5 flex-shrink-0 text-charcoal-light"
          />
          <span>
            Results are only estimates and can vary according to your data and
            particular circumstances.
          </span>
        </li>
        <li className="flex gap-3">
          <Bot
            strokeWidth={1.5}
            color="var(--tangerine-main)"
            className="w-5 h-5 mt-0.5 flex-shrink-0 text-charcoal-light"
          />
          <span>
            Artificial Intelligence (AI) is used to interpret or fill gaps,
            which may be inaccurate or incomplete.
          </span>
        </li>
        <li className="flex gap-3">
          <ShieldAlert
            strokeWidth={1.5}
            color="var(--tangerine-main)"
            className="w-5 h-5 mt-0.5 flex-shrink-0 text-charcoal-light"
          />
          <span>
            Use your judgment. Don&#39;t use the app for clinical decisions
            without consulting a professional.
          </span>
        </li>
      </ul>
    </div>
  );
}
