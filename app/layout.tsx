import type { Metadata } from "next";
import { business } from "../config/business";
import "./globals.css";
export const metadata: Metadata = {
  title: `${business.name} — Good Things Rise`,
  description: `Handcrafted donuts, flaky croissants, artisan bread, and custom cakes from ${business.name} in ${business.city}.`,
  openGraph: { title: `${business.name} — Good Things Rise`, description: `A little something for everyone. Baked with care in ${business.city}.`, type: "website", images: ["/donut-cutout.png"] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body suppressHydrationWarning>{children}</body></html>; }

