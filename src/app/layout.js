import { Inter } from "next/font/google";
import "./globals.css";
import { Appcontextprovider } from "./context/appcontext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Appcontextprovider>
        <body className={inter.className}>{children}</body>
      </Appcontextprovider>
    </html>
  );
}
