"use client";

import Link from "next/link";

import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";

export default function NavLink() {
  const path = usePathname();

  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link
            href="/meals"
            className={path.startsWith("/meals") ? classes.active : undefined}
          >
            Meals
          </Link>
        </li>
        <li>
          <Link
            href="/community"
            className={
              path.startsWith("/community") ? classes.active : undefined
            }
          >
            Foodies Community
          </Link>
        </li>
      </ul>
    </nav>
  );
}
