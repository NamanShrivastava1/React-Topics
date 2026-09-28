import type { FindingKind } from "../../../shared/types";

interface KindBadgeProps {
  kind: FindingKind;
}

const KIND_STYLES: Record<
  FindingKind,
  { bg: string; text: string; label: string }
> = {
  fact: { bg: "bg-emerald-50", text: "text-emerald-700", label: "Fact" },
  comparison: { bg: "bg-neutral-100", text: "text-neutral-600", label: "Comparison" },
  discrepancy: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    label: "Discrepancy",
  },
  missing: { bg: "bg-red-50", text: "text-red-600", label: "Missing" },
  interpretation: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    label: "AI Interpretation",
  },
};

const KindBadge = ({ kind }: KindBadgeProps) => {
  const style = KIND_STYLES[kind] ?? KIND_STYLES.fact;

  return (
    <span
      className={`inline-block text-[0.6875rem] font-medium px-2 py-0.5 rounded ${style.bg} ${style.text}`}
    >
      {style.label}
    </span>
  );
};

export default KindBadge;
