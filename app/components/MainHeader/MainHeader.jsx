import Image from "next/image";
import logoImg from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import HeaderBackground from "./HeaderBackground";
import Link from "next/link";
import NavLink from "./NavLink";
export default function MainHeader() {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image priority src={logoImg} alt="A plate with food on it." />
          Next level food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community"> Foodies community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
