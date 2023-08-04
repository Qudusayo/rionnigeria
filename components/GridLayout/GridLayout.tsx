import styles from "./GridLayout.module.scss";

export default function GridLayout({
  children,
  lgGrid,
  mdGrid,
}: {
  children: React.ReactNode;
  lgGrid?: number;
  mdGrid?: number;
}) {
  return (
    <div className={[styles.GridLayout, styles["GridLayoutLg" + lgGrid], styles["GridLayoutMd" + mdGrid]].join(" ")}>
      {children}
    </div>
  );
}
