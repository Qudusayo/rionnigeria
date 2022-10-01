import Navbar from "../Navbar/Navbar";
import styles from "./CommonHero.module.scss";

export default function CommonHero({ title, info, bg }) {
  return (
    <div
      className={styles.CommonHero}
      style={{
        backgroundImage: `linear-gradient(45deg, transparent, rgba(0, 0, 0, 0.65), transparent), url(${bg})`,
      }}
    >
      <Navbar className={styles.NavbarLight} />
      <div className={styles.CommonHeroInfo}>
        <h1>{title}</h1>
        <span>{info}</span>
      </div>
    </div>
  );
}
