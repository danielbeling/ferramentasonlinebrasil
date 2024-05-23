import React, { useEffect } from 'react';

function Anuncio() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8763949752410877";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    // Initialize the ad after the script is loaded
    script.onload = () => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="Anuncio-container">
      <ins className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8763949752410877"
        data-ad-slot="9893532151"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    </div>
  );
}

export default Anuncio;
