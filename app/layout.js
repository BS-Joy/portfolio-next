import localFont from "next/font/local";
import "@/app/globals.css";
import SidebarNavbar from "./components/layout/SidebarNavbar";

const courierPrime = localFont({
  src: "./fonts/CourierPrime-Regular.ttf",
  variable: "--font-courier-prime-regular",
  weight: "400",
});
const shipporiAntique = localFont({
  src: "./fonts/ShipporiAntiqueB1-Regular.ttf",
  variable: "--font-shippori-antique-b1-regular",
  weight: "400",
});

export const metadata = {
  title: "Badhan Samadder Joy",
  description: "Protfolio of Badhan Samadder Joy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="./favicon.ico" sizes="any" />
      <body
        className={`${courierPrime.variable} ${shipporiAntique.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
