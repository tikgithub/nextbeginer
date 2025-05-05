'use client';
import Link from "next/link";
import "./globals.css";
import {Noto_Sans_Lao} from "next/font/google";
import { usePathname } from "next/navigation";

const notoSansLao = Noto_Sans_Lao({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
});
// import localFont from "next/font/local";

// const myFont = localFont({
//   src: [
//     {path: "../fonts/NotoSansLao-Bold.ttf", weight: "600", style: "bold"},
//     {path: "../fonts/NotoSansLao-Regular.ttf", weight: "200", style: "light"},
//   ],
// });

export default function RootLayout({ children }) {

  const pathName = usePathname();

  return (
    <html lang="en">
      <body className={notoSansLao.className}>
        <header>
          <nav>
            <Link href="/" className={`nav-link ${pathName === "/" ? "nav-link-active":""}`}>
              Home
            </Link>
            <div>
              <Link href="/dashboard" className={`nav-link ${pathName ==="/dashboard" ? "nav-link-active":""}`}>
                Dashboard
              </Link>
              <Link href="/register" className={`nav-link ${pathName ==="/register" ? "nav-link-active":""}`}>
                Register
              </Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer>footer</footer>
      </body>
    </html>
  );
}
