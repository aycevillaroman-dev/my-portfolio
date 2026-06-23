"use client";
import { cn } from "@/lib/utils";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string; onClick?: () => void }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

// ── Mobile: fixed bottom center ──
const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string; onClick?: () => void }[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex md:hidden items-center px-4 py-2.5 rounded-full shadow-2xl border backdrop-blur-lg",
        className
      )}
    >
      {items.map((item, index) => (
        <div key={item.title} className="flex items-center">
          {index !== 0 && <span className="h-4 w-px bg-gray-400/40 mx-2" />}
          <Link
            href={item.href}
            onClick={item.onClick}
            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 active:scale-95 transition-colors"
          >
            <span className="w-5 h-5 flex items-center justify-center">{item.icon}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

// ── Desktop: top center, subtle magnification only on icon, container stays same size ──
const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string; onClick?: () => void }[];
  className?: string;
}) => {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex items-center px-4 py-2.5 rounded-full shadow-2xl border backdrop-blur-lg",
        className
      )}
    >
      {items.map((item, index) => (
        <div key={item.title} className="flex items-center">
          {index !== 0 && <span className="h-4 w-px bg-gray-400/40 mx-2" />}
          <IconContainer mouseX={mouseX} {...item} />
        </div>
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  icon,
  href,
  onClick,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Only scale the icon inside — container stays fixed size so dividers don't move
  const scaleTransform = useTransform(distance, [-100, 0, 100], [1, 1.5, 1]);
  const scale = useSpring(scaleTransform, { mass: 0.1, stiffness: 200, damping: 15 });

  return (
    <Link href={href} onClick={onClick}>
      <div
        ref={ref}
        className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
      >
        <motion.div
          style={{ scale }}
          className="w-5 h-5 flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </div>
    </Link>
  );
}