import React from "react";
import styles from "../styles/styles.module.css";
import { AuthMethod } from "../interfaces/AuthMethod.interface";
interface Props {
  method: AuthMethod;
  handleMethod: (method: AuthMethod) => void;
}
export const PingAuthMethod = ({ method, handleMethod }: Props) => {
  return (
    <div onClick={() => handleMethod(method)} className={styles.method}>
      <div className={styles.contenedorIcon}>
        <i className={`${styles.icon} ${method.icon}`}></i>
      </div>
      <div className={styles.contenedorD}>
        <h3 className={`${styles.noMargin} ${styles.textSlate} ${styles.bold}`}>
          {method.title}
        </h3>
        <p
          className={`${styles.noMargin} ${styles.textSlate} ${styles.subTitle}`}
        >
          {method.description}
        </p>
      </div>
      <svg
        width="15"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  );
};
