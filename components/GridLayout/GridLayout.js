import styles from "./GridLayout.module.scss";

export default function GridLayout({ children, lgGrid, mdGrid }) {
  return (
    <div
      className={[
        styles.GridLayout,
        styles["GridLayoutLg" + lgGrid],
        styles["GridLayoutMd" + mdGrid],
      ].join(" ")}
    >
      {children}
    </div>
  );
}
