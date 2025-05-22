import React from 'react';
import { Helmet } from 'react-helmet';

const OG = ({
    title = "Dasavena TI",
    description = "Creada para facilitar los formularios de recepción y entrega de equipos.",
    url = typeof window !== "undefined" ? window.location.href : "https://dasavenasite.domcloud.dev",
    image = "https://dasavenasite.domcloud.dev/images/logo.png",
    type = "website",
    siteName = "Dasavena TI"
}) => (
    <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content={siteName} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
    </Helmet>
);

export default OG;
