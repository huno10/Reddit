import { hot } from "react-hot-loader/root";
import * as React from "react";
import styles from "./layout.css";

interface ILayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}