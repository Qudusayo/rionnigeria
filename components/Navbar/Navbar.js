import styles from "./Navbar.module.scss";

export default function Navbar({ className }) {
  return (
    <nav className={[styles.Navbar, className].join(" ")}>
      <img src="/logo.svg" alt="logo" />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Activities</li>
        <li>Publications</li>
        <li>Monthly Message</li>
        <li>Posers</li>
        <li>Analysis</li>
        <li>Q &amp; A</li>
        <li>Rebutals</li>
        <li>Travails of revertees</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
