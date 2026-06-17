import { profile } from "../data";

type Props = {
  text?: string;
  className?: string;
};

export default function CalendlyButton({
  text = "Book a 30-min call",
  className = "rounded-full bg-gradient-to-r from-accent to-accent-violet px-7 py-3 font-semibold text-bg shadow-glow transition-transform hover:scale-105",
}: Props) {
  return (
    <a
      href={profile.calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {text}
    </a>
  );
}
