import { RiFacebookCircleFill, RiTwitterFill } from "react-icons/ri";
import Link from "next/link";
import styles from "./Footer.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterData}>
        <div>
          <Image src="/footer-logo.svg" alt="logo" width={250} height={80} objectFit="contain" />
          <p>
            Our mission is to establish and provide for humanity, Muslims and non-Muslims alike, the veracity of Islam
            as the only faith by which man can lead a true upright and pure life, attain genuine peace and salvation and
            be assured of Blissfull Janat as promised by Allah.
          </p>
        </div>
        <div>
          <h2>About</h2>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/activities">Activities</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/publications">Publications</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Links</h2>
          <ul>
            <li>
              <Link href="/monthly-messages">Monthly Messages</Link>
            </li>
            <li>
              <Link href="/posers">Posers</Link>
            </li>
            <li>
              <Link href="/analysis">Analysis</Link>
            </li>
            <li>
              <Link href="/q-&-a">Q &amp; A</Link>
            </li>
            <li>
              <Link href="/rebuttals">Rebuttals</Link>
            </li>
            <li>
              <Link href="/travails">Travails of revertees</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Legals</h2>
          <ul>
            <li>
              <span>Privacy Policy</span>
            </li>
            <li>
              <span>Terms and Condition</span>
            </li>
          </ul>
        </div>
        <div>
          <h2>Socials</h2>
          <a
            href="https://twitter.com/rionnigeria"
            aria-label="RION Nigeria twitter Page"
            target="_blank"
            rel="noreferrer"
          >
            <RiTwitterFill size={30} fill="#98A2B3" className={styles.FooterIcon} />
          </a>
          <a
            href="https://web.facebook.com/rionnigeriahq"
            aria-label="RION Nigeria Facebook Page"
            target="_blank"
            rel="noreferrer"
          >
            <RiFacebookCircleFill size={30} fill="#98A2B3" className={styles.FooterIcon} />
          </a>
        </div>
      </div>
      <span className={styles.FooterCopyRight}>
        Copyright &copy; {new Date().getFullYear()} RION Nigeria. All Rights Reserved
      </span>
    </div>
  );
}
