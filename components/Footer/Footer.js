import { RiFacebookCircleFill, RiTwitterFill } from "react-icons/ri";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterData}>
        <div>
          <img src="/footer-logo.svg" alt="logo" />
          <p>
            Our mission is to establish and provide for humanity, Muslims and
            non-Muslims alike, the veracity of Islam as the only faith by which
            man can lead a true upright and pure life, attain genuine peace and
            salvation and be assured of Blissfull Janat as promised by Allah.
          </p>
        </div>
        <div>
          <h2>About</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Activities</li>
            <li>Contact</li>
            <li>Publications</li>
          </ul>
        </div>
        <div>
          <h2>Links</h2>
          <ul>
            <li>Monthly Messages</li>
            <li>Posers</li>
            <li>Analysis</li>
            <li>Q &amp; A</li>
            <li>Rebutals</li>
            <li>Travails of revertees</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h2>Legals</h2>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms and Condition</li>
          </ul>
        </div>
        <div>
          <h2>Socials</h2>
          <RiTwitterFill
            size={30}
            fill="#98A2B3"
            className={styles.FooterIcon}
          />
          <RiFacebookCircleFill
            size={30}
            fill="#98A2B3"
            className={styles.FooterIcon}
          />
        </div>
      </div>
      <span className={styles.FooterCopyRight}>
        Copyright &copy; {new Date().getFullYear()} RION Nigeria. All Rights
        Reserved
      </span>
    </div>
  );
}
