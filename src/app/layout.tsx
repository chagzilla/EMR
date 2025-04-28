import SideNav from "./components/Sidenav";
import SearchBar from "./components/SearchBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WaziWazi Systems",
  description: "Electronic Medical Record (EMR) System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="flex flex-row border-y-8 border-teal-700 max-h-screen overflow-scroll">
          <div className="rounded-full">
            <SideNav />
          </div>
          <div className="w-full max-h-screen overflow-scroll">
            <SearchBar />
            {children}
          </div>
        </section>
      </body>
    </html>
  );
}
