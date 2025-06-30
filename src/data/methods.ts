import { AuthMethod } from "../interfaces/AuthMethod.interface";

export const userMethodsDb: AuthMethod[] = [
    {
        id: '1',
        icon: 'fa-solid fa-qrcode',
        title: 'Código QR',
        description: 'Escanearás un código QR con la cámara de tu teléfono.'
    },
    {
        id: '2',
        icon: 'fa-solid fa-fingerprint',
        title: 'Reconocimiento Facial',
        description: 'Usaremos la cámara de tu computadora para reconocer tu rostro.'
    },
    {
        id: '3',
        icon: 'fa-solid fa-comment-sms',
        title: 'SMS',
        description: 'Te enviarémos un código al teléfono terminado en 4565.'
    },
    {
        id: '4',
        icon: 'fa-brands fa-whatsapp',
        title: 'WhatsApp',
        description: 'Te enviarémos un código al teléfono terminado en 4565.'
    },
    {
        id: '5',
        icon: 'fa-solid fa-envelope',
        title: 'E-mail',
        description: 'Te enviarémos un código a lachiracesar@gmail.com .'
    }

]