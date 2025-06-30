import React, { useEffect, useMemo } from "react";
import styles from "../styles/styles.module.css";
import { useAuthenticationMethods } from "../hooks/useAuthenticationMethos";
import { AuthMethod, onChangeArgs } from "../interfaces/AuthMethod.interface";
import { PingAuthMethod } from "./PingAuthMethod";
import { PingQr, PingFacial, PingForm } from "./";
interface Props {
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
}

export const PingAuthorization = ({ className, style, onChange }: Props) => {
  const { methods, selected, userMethods, setSelectedMethod, code, senCode } =
    useAuthenticationMethods({ onChange });
  const flexClass: string = useMemo(
    () => `${className} ${styles.contenedor} ${styles.flex} ${styles.flexCol}`,
    [className]
  );

  useEffect(() => {
    userMethods();
  }, []);

  useEffect(() => {
    if(code){
       senCode(code);
    }
  }, [code]);

  return (
    <div style={style} className={flexClass}>
      {!selected && (
        <>
          {methods.map((method: AuthMethod) => (
            <PingAuthMethod
              key={method.id}
              method={method}
              handleMethod={setSelectedMethod}
            />
          ))}
        </>
      )}
      {
        selected && (selected.id === '1') && (
            <PingQr />
        )
      }
      {
        selected && (selected.id === '2') && (
            <PingFacial />
        )
      }
      {
        selected && (selected.id !== '1') && (selected.id !== '2') && (
            <PingForm id={selected.id} />
        )
      }
    </div>
  );
};
