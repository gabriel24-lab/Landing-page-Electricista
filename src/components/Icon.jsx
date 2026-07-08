import {
  ArrowRight,
  Zap,
  Check,
  Clock,
  X,
  Factory,
  Home,
  Mail,
  Menu,
  MapPin,
  Phone,
  Snowflake,
  Star,
  Wrench,
} from "lucide-react";

const icons = {
  arrowRight: ArrowRight,
  bolt: Zap,
  check: Check,
  clock: Clock,
  close: X,
  factory: Factory,
  home: Home,
  mail: Mail,
  menu: Menu,
  pin: MapPin,
  phone: Phone,
  snowflake: Snowflake,
  star: Star,
  tool: Wrench,
};

export default function Icon({
  name,
  size = 22,
  strokeWidth = 2,
  className = "",
  ...props
}) {
  const LucideIcon = icons[name] || Zap;

  return (
    <LucideIcon
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}
