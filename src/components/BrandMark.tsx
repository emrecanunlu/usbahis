import Image from "next/image";

type Props = {
  className?: string;
  size?: "sm" | "md" | "lg";
  priority?: boolean;
};

const HEIGHT_MAP = {
  sm: 24,
  md: 30,
  lg: 38,
};

const LOGO_NATURAL = { w: 4022, h: 927 };

export function BrandMark({ className, size = "md", priority }: Props) {
  const h = HEIGHT_MAP[size];
  const w = Math.round((LOGO_NATURAL.w / LOGO_NATURAL.h) * h);

  return (
    <Image
      src="/images/usbahis.png"
      alt="UsBahis"
      width={w}
      height={h}
      priority={priority}
      className={`h-auto w-auto select-none ${className ?? ""}`}
      style={{ height: h }}
    />
  );
}
