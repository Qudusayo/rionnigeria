import Navbar from "../../components/Navbar/Navbar";
import styles from "./Component.module.scss";

export default function Component({ children }) {
  return (
    <div className={styles.Component}>
      <div>
        <Navbar type="solid" />
      </div>
      <div className={styles.ComponentChildren}>{children}</div>
    </div>
  );
}
