'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

 export default function NavLink({ label, href }) {
    const pathName = usePathname();

  return (
    <Link href={href} className={`nav-link ${pathName === href ? "nav-link-active":""}`}>
    {label}
  </Link>
  );
 }