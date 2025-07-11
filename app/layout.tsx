import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/public/scss/styles.scss";
import ColorSwitcher from "@/components/ColorSwitcher";
import Bootstrap from "@/components/Bootstrap";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Demos from "@/components/Demos";

export const metadata: Metadata = {
  title: "Ayoub Smatti - Bi Consultant",
  description: "Power BI Consultant",
};
type LayoutType = {
  children: React.ReactNode;
};
const poppins = Poppins({ weight: ["400", "500", "600", "700", "800"], subsets: ["latin"] });
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export default function RootLayout({ children }: Readonly<LayoutType>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Bootstrap>
          <ColorSwitcher />
          <Demos />
          {children}
        </Bootstrap>
      </body>
    </html>
  );
}
