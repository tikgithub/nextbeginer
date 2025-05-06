
import "./globals.css";
import {Noto_Sans_Lao} from "next/font/google";
import NavLink from "./components/NavLink";
import Navigator from "./components/Navigator";

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

  return (
    <html lang="en">
      <body className={notoSansLao.className}>
        <header>
         <Navigator/>
        </header>

        <main>{children}</main>

        <footer>footer</footer>
      </body>
    </html>
  );
}
