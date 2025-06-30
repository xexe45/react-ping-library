import React, { useEffect } from 'react'
import styles from "../styles/styles.module.css";
import { useAuthenticationMethods } from '../hooks/useAuthenticationMethos';

export const PingQr = () => {
    const { discardSelectedMethod } = useAuthenticationMethods({});
    useEffect(() => {
      const timer = setTimeout(() => {
       discardSelectedMethod((crypto as any).randomUUID());
      }, 2000);
    
      return () => {
        clearTimeout(timer);
      }
    }, [])
    

  return (
    <div className={styles.flexCenter}>
     <h3 className={`${styles.textSlate} ${styles.bold}`}>Escanea el siguiente código QR para autorizar</h3>
      <img  width="200" src="https://w7.pngwing.com/pngs/1006/79/png-transparent-qr-code-qr-code-qr-code-thumbnail.png" alt="qr" />
    </div>
  )
}

