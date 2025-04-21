import Link from "next/link";

import classes from "./main-header.module.css";

import logo from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          {/* In next js we can display image using another way, i.e using built in Image */}
          {/* <img src={logo.src} alt="logo" /> */}
          <Image src={logo} alt="logo" priority />
          NextLevel Food
        </Link>
        <NavLink />
      </header>
    </>
  );
}
