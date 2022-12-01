import Header from "../components/layout/Header";
import { Poppins } from "@next/font/google";
import "../styles/globals.css";
import Footer from "../components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ID-id">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
