import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const RouteChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  // Sadece canlı (production) ortamında ve ilk render'da GA'yı başlat
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA.initialize("G-NRCHSQEMTF"); // Kendi ID'niz
      setInitialized(true);
    }
  }, []);

  // GA başlatıldıktan sonra, her sayfa (location) değişiminde 'pageview' gönder
  useEffect(() => {
    if (initialized) {
      const pagePath = location.pathname + location.search;
      ReactGA.send({ hitType: "pageview", page: pagePath });

      // Tarayıcı konsolunda kontrol etmek için bir log ekleyebilirsiniz.
      // console.log(`GA Pageview Sent: ${pagePath}`);
    }
  }, [initialized, location]);

  // Bu bileşen ekranda hiçbir şey göstermez
  return null;
};

export default RouteChangeTracker;
