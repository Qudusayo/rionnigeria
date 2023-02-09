import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar({
  className,
  type,
}: {
  type?: string;
  className?: string;
}) {
  const [visibility, setVisibility] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setVisibility(false);
  }, []);

  return (
    <nav
      className={[
        styles.Navbar,
        className,
        type === "solid" && styles.NavbarSolid,
      ].join(" ")}
    >
      <div className={styles.NavbarContent}>
        <div className={styles.NavbarContentHeader}>
          <Image
            src="/logo.svg"
            alt="logo"
            width={40}
            height={40}
            objectFit="contain"
          />
          <div className={styles.hamburger}>
            <input
              id="checkbox"
              type="checkbox"
              className={styles.hamburger_check}
              defaultChecked={visibility}
              onChange={() => setVisibility((visibility) => !visibility)}
            />
            <label htmlFor="checkbox">
              <span className={styles.hamburger_bars}></span>
              <span className={styles.hamburger_bars}></span>
              <span className={styles.hamburger_bars}></span>
            </label>
          </div>
        </div>
        <ul className={visibility ? styles.visibleNav : styles.inVisibleNav}>
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
