// SVG keeps arrows from being rendered as colored emoji on iOS.
export default function ArrowIcon({ direction = "up-right" }: { direction?: "up-right" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "inline-block", flexShrink: 0, verticalAlign: "-0.125em" }}
    >
      <path d={direction === "right" ? "M4 12h16m-7-7 7 7-7 7" : "M5 19 19 5M5 5h14v14"} />
    </svg>
  );
}
