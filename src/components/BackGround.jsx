import React from 'react';

const backgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: -1,
    backgroundImage: 'url("https://dasavenasite.domcloud.dev/images/background-pattern.png")',
    backgroundRepeat: 'repeat',
    backgroundSize: 'auto',
};

const BackGround = () => (
    <div style={backgroundStyle}>
        <img
            src="https://dasavenasite.domcloud.dev/images/dasavena-logo.png"
            alt="Dasavena Logo"
            style={{
                position: 'fixed',
                bottom: 20,
                right: 20,
                width: 120,
                opacity: 0.15,
                pointerEvents: 'none',
                zIndex: 0,
                userSelect: 'none',
            }}
        />
    </div>
);

export default BackGround;