type BadgeProps = {
  label: string;
  tone: "success" | "info" | "warning";
};

export function Badge({ label, tone }: BadgeProps) {
  return (
    <span>
      {label} ({tone})
    </span>
  );
}