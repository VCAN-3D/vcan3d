import { Printer, Droplets, Layers, FlaskConical, Factory, Rocket, Hammer, Boxes, Car, Plane, HeartPulse, Cog, ShoppingBag, Search, Cpu, Gauge, ShieldCheck, Wallet, Timer, Target } from "lucide-react";
import type { ReactNode } from "react";

export const SITE = {
  name: "VCAN 3D",
  tagline: "Design. Print. Inspire.",
  phone: "+91 9342553090",
  phoneHref: "tel:+919342553090",
  emails: ["sales@vcan3d.com", "support@vcan3d.com", "rahim@vcan3d.com"],
  address: "No.458/9, Krishna Nagar, Manimagalam Main Road, Nandambakkam, Kundrathur, Chennai - 600069",
  maps: "https://maps.app.goo.gl/ciQJdEVXdg3W59JE9",
  mapEmbed: "https://www.google.com/maps?q=VCAN3D,%20Manimangalam%20Rd,%20Malayambakkam,%20Nandambakkam,%20Tamil%20Nadu%20600069&z=15&output=embed",
  whatsapp: "https://wa.me/919342553090",
  instagram: "https://www.instagram.com/vcan3d",
};
export const QUOTE_URL = "https://mail.google.com/mail/?view=cm&fs=1&to=sales@vcan3d.com";

export type Service = { slug: string; title: string; desc: string; image: string; icon: ReactNode; wide?: boolean };
const ic = "h-6 w-6";
export const SERVICES: Service[] = [
  { slug: "fdm", title: "FDM 3D Printing", desc: "Cost-effective thermoplastic filament printing for functional prototypes and production parts.", image: "FDM.png", icon: <Printer className={ic} />, wide: true },
  { slug: "sla", title: "SLA 3D Printing", desc: "High-detail resin-based UV laser curing for smooth, precision parts and prototypes.", image: "SLA.png", icon: <Droplets className={ic} /> },
  { slug: "sls-mjf-dlp", title: "SLS / MJF / DLP", desc: "Advanced industrial SLS, MJF, and DLP 3D printing for strong, complex parts.", image: "SLS.png", icon: <Layers className={ic} /> },
  { slug: "vacuum-casting", title: "Vacuum Casting", desc: "Low-volume plastic part production using silicone molds (10–100+ pieces).", image: "Vacuum-Casting.png", icon: <FlaskConical className={ic} /> },
  { slug: "injection-molding", title: "Injection Molding", desc: "High-volume precision plastic part manufacturing with repeatable quality.", image: "Injection-Molding.png", icon: <Factory className={ic} /> },
  { slug: "rapid-prototyping", title: "Rapid Prototyping", desc: "Fast track from CAD design to physical prototype using multiple technologies.", image: "Rapid-Prototyping.png", icon: <Rocket className={ic} />, wide: true },
  { slug: "mould-making", title: "Mould Making", desc: "Custom silicone & metal tool creation for precision plastic part manufacturing.", image: "Mould-Making.png", icon: <Hammer className={ic} />, wide: true },
  { slug: "low-volume-production", title: "Low Volume Production", desc: "Small batch manufacturing from 10 to 1000 pieces with flexible options.", image: "Vacuum-Casting-2.png", icon: <Boxes className={ic} />, wide: true },
];

export const INDUSTRIES = [
  { name: "Automotive", icon: <Car className="h-6 w-6" /> },
  { name: "Aerospace", icon: <Plane className="h-6 w-6" /> },
  { name: "Medical", icon: <HeartPulse className="h-6 w-6" /> },
  { name: "Industrial Equipment", icon: <Cog className="h-6 w-6" /> },
  { name: "Consumer Products", icon: <ShoppingBag className="h-6 w-6" /> },
];

export const STEPS = [
  { n: "01", title: "CAD Review", text: "Thorough analysis of your design for manufacturability.", icon: <Search className="h-5 w-5" /> },
  { n: "02", title: "Technology Selection", text: "Choosing the best 3D printing or casting method for your needs.", icon: <Cpu className="h-5 w-5" /> },
  { n: "03", title: "Fast Production", text: "Speedy manufacturing without compromising on quality.", icon: <Gauge className="h-5 w-5" /> },
  { n: "04", title: "Quality Inspection", text: "Final testing and finishing to ensure the part meets specifications.", icon: <ShieldCheck className="h-5 w-5" /> },
];

export const WHY = [
  { title: "Material Variety", text: "Supports ABS, PP (Polypropylene), Nylon (PA), Rubber, Transparent, Translucent, Food Grade, FR Grade (Flame Retardant), High Temperature Grade.", icon: <FlaskConical className="h-6 w-6" /> },
  { title: "Cost Effective", text: "Ideal for small batch manufacturing with competitive pricing and fast turnaround times.", icon: <Wallet className="h-6 w-6" /> },
  { title: "High Precision", text: "Captures fine details with excellent surface finish across all printing technologies.", icon: <Target className="h-6 w-6" /> },
  { title: "Fast Turnaround", text: "From prototype to production in minimal time. Quick quotes, faster delivery.", icon: <Timer className="h-6 w-6" /> },
];

export const STATS = [
  { to: 15, suffix: "+", label: "Years of Expertise" },
  { to: 8, suffix: "", label: "Manufacturing Services" },
  { to: 5, suffix: "", label: "Industries We Serve" },
  { to: 9, suffix: "", label: "Material Grades" },
];
