import React, { useEffect, useRef } from "react";

const AdBanner = () => {
  const adRef = useRef(null);

  useEffect(() => {
    if (adRef.current) {
      try {
        // Inicializa apenas se ainda não estiver carregado
        if (!adRef.current.getAttribute("data-adsbygoogle-status")) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        console.error("Erro ao carregar o anúncio:", e);
      }
    }
  }, []);

  return (
    <div>
      {/* Bloco de anúncio do Google AdSense */}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8763949752410877"
        data-ad-slot="6465452566"
        data-ad-format="auto"
        data-full-width-responsive="true"
        ref={adRef}
      ></ins>
    </div>
  );
};

export default AdBanner;
