import styles from "../styles/styles.module.css";
import Webcam from "react-webcam";
import { useAuthenticationMethods } from '../hooks/useAuthenticationMethos';
import { useEffect } from "react";
import React from "react";
const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user"
};
export const PingFacial = () => {
  const { discardSelectedMethod } = useAuthenticationMethods({});
    useEffect(() => {
      const timer = setTimeout(() => {
       discardSelectedMethod((crypto as any).randomUUID());
      }, 5000);
    
      return () => {
        clearTimeout(timer);
      }
    }, [])
    

  return (
    <div className={styles.flexCenter}>
     <h3 className={`${styles.textSlate} ${styles.bold}`}>Acerca tu rostro a la cámara de tu computadora.</h3>
      <Webcam width={400} height={400} videoConstraints={videoConstraints} />
    </div>
  )
}


