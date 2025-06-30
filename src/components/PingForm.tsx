import { useState, useRef, useCallback, useEffect } from "react";
import { useAuthenticationMethods } from "../hooks/useAuthenticationMethos";
import styles from "../styles/styles.module.css";
import React from "react";
const initialValue = {
  n1: "",
  n2: "",
  n3: "",
  n4: "",
  n5: "",
  n6: "",
};
export const PingForm = ({ id }: { id: string }) => {
  const [formValue, setFormValue] = useState(initialValue);
  const inputRefn1 = useRef<HTMLInputElement>(null);
  const inputRefn2 = useRef<HTMLInputElement>(null);
  const inputRefn3 = useRef<HTMLInputElement>(null);
  const inputRefn4 = useRef<HTMLInputElement>(null);
  const inputRefn5 = useRef<HTMLInputElement>(null);
  const inputRefn6 = useRef<HTMLInputElement>(null);
  const { discardSelectedMethod } = useAuthenticationMethods({});

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const { target } = e;
    setFormValue((v) => ({
      ...v,
      [target.name]: target.value,
    }));

    switch (target.name) {
      case "n1":
        inputRefn2.current?.focus();
        break;
      case "n2":
        inputRefn3.current?.focus();
        break;
      case "n3":
        inputRefn4.current?.focus();
        break;
      case "n4":
        inputRefn5.current?.focus();
        break;
      case "n5":
        inputRefn6.current?.focus();
        break;
      case "n6":
        inputRefn1.current?.focus();
        break;
      default:
        inputRefn1.current?.focus();
        break;
    }
  };

  const text = useCallback(() => {
    switch (id) {
      case "3":
        return " Ingresa el código que te enviamos a tu teléfono terminado en 4565.";
      case "4":
        return " Ingresa el código que te enviamos a tu teléfono terminado en 4565.";

      case "5":
        return " Ingresa el código que te enviamos a tu correo lachiracesar@gmail.com .";
      default:
        return '';
    }
  }, [id]);

  useEffect(() => {
    inputRefn1.current?.focus();
  }, []);

  const goBack = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    discardSelectedMethod(null);
  };

  const sendConfirm = () => discardSelectedMethod((crypto as any).randomUUID());

  return (
    <div className={styles.flexCenter}>
      <h3 className={`${styles.textSlate} ${styles.bold}`}>{text()}</h3>
      <form className={styles.form}>
        <input
          ref={inputRefn1}
          name="n1"
          value={formValue.n1}
          onChange={onChange}
          className={styles.formInput}
          type="text"
        />
        <input
          ref={inputRefn2}
          name="n2"
          value={formValue.n2}
          onChange={onChange}
          className={styles.formInput}
          type="text"
        />
        <input
          ref={inputRefn3}
          name="n3"
          value={formValue.n3}
          onChange={onChange}
          className={styles.formInput}
          type="text"
        />
        <input
          ref={inputRefn4}
          name="n4"
          value={formValue.n4}
          onChange={onChange}
          className={styles.formInput}
          type="text"
        />
        <input
          ref={inputRefn5}
          name="n5"
          value={formValue.n5}
          onChange={onChange}
          className={styles.formInput}
          type="text"
        />
        <input
          ref={inputRefn6}
          name="n6"
          value={formValue.n6}
          onChange={onChange}
          className={styles.formInput}
          type="text"
        />
      </form>
      <div className={styles.containerButtons}>
        <button onClick={sendConfirm} className={styles.btnConfirm}>
          Confirmar código
        </button>
        <a onClick={goBack} className={styles.btnBack} href="#">
          Elegir otro método
        </a>
      </div>
    </div>
  );
};
