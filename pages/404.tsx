import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import styles from "./../styles/notfound.module.scss";
import PageSeo from "../layout/PageSeo";

export default function _404() {
  return (
    <PageSeo title="Page Not Found">
      <div className={styles.NotFound}>
        <Navbar type={"solid"} />
        <div className={styles.NotFoundContent}>
          <h1>Opps an Error Occur</h1>
          <span>it looks like you are lost</span>
          <div className={styles.Image}></div>
          <Link href={"/"}>Go Home</Link>
        </div>
      </div>
    </PageSeo>
  );
}
