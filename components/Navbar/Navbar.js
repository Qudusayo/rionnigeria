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
          <li className={router.pathname === "/about" ? styles.activeNav : ""}>
            <Link href="/about">About Us</Link>
          </li>
          <li
            className={
              router.pathname === "/activities" ? styles.activeNav : ""
            }
          >
            <Link href="/activities">Activities</Link>
          </li>
          <li
            className={
              router.pathname === "/publications" ? styles.activeNav : ""
            }
          >
            <Link href="/publications">Publications</Link>
          </li>
          <li
            className={
              router.pathname === "/monthly-message" ? styles.activeNav : ""
            }
          >
            <Link href="/monthly-messages">Monthly Message</Link>
          </li>
          <li className={router.pathname === "/posers" ? styles.activeNav : ""}>
            <Link href="/posers">Posers</Link>
          </li>
          <li
            className={router.pathname === "/analysis" ? styles.activeNav : ""}
          >
            <Link href="/analysis">Analysis</Link>
          </li>
          <li className={router.pathname === "/q-&-a" ? styles.activeNav : ""}>
            <Link href="/q-&-a">Q &amp; A</Link>
          </li>
          <li
            className={router.pathname === "/rebutals" ? styles.activeNav : ""}
          >
            <Link href="/rebutals">Rebutals</Link>
          </li>
          <li
            className={router.pathname === "/travails" ? styles.activeNav : ""}
          >
            <Link href="/travails">Travails of revertees</Link>
          </li>
          <li
            className={router.pathname === "/contact" ? styles.activeNav : ""}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
