import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.scss";

export default function Navbar({ className, type }) {
  const router = useRouter();

  return (
    <nav
      className={[
        styles.Navbar,
        className,
        type === "solid" && styles.NavbarSolid,
      ].join(" ")}
    >
      <div className={styles.NavbarContent}>
        <img src="/logo.svg" alt="logo" />
        <ul>
          <li className={router.pathname === "/" ? styles.activeNav : ""}>
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/about") ? styles.activeNav : ""
            }
          >
            <Link href="/about">About Us</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/activities") ? styles.activeNav : ""
            }
          >
            <Link href="/activities">Activities</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/publications")
                ? styles.activeNav
                : ""
            }
          >
            <Link href="/publications">Publications</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/monthly-message")
                ? styles.activeNav
                : ""
            }
          >
            <Link href="/monthly-messages">Monthly Message</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/posers") ? styles.activeNav : ""
            }
          >
            <Link href="/posers">Posers</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/analysis") ? styles.activeNav : ""
            }
          >
            <Link href="/analysis">Analysis</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/q-&-a") ? styles.activeNav : ""
            }
          >
            <Link href="/q-&-a">Q &amp; A</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/rebuttals") ? styles.activeNav : ""
            }
          >
            <Link href="/rebuttals">Rebuttals</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/travails") ? styles.activeNav : ""
            }
          >
            <Link href="/travails">Travails of revertees</Link>
          </li>
          <li
            className={
              router.pathname.startsWith("/contact") ? styles.activeNav : ""
            }
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
