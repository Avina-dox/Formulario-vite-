import React from 'react';

const Aviso = () => (
    <div style={{ padding: '2rem', maxWidth: 700, margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
        <h2>Aviso de Privacidad</h2>
        <p>
            En cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, 
            informamos que los datos personales recabados serán utilizados únicamente para los fines relacionados 
            con la prestación de nuestros servicios. Sus datos no serán compartidos con terceros sin su consentimiento.
        </p>
        <p>
            Usted tiene derecho a acceder, rectificar y cancelar sus datos personales, así como a oponerse al 
            tratamiento de los mismos o revocar el consentimiento que para tal fin nos haya otorgado, a través 
            de los procedimientos que hemos implementado.
        </p>
        <p>
            Para conocer más sobre nuestro aviso de privacidad, puede contactarnos en el correo electrónico: 
            <a href="mailto:privacidad@ejemplo.com">privacidad@ejemplo.com</a>
        </p>
    </div>
);

export default Aviso;