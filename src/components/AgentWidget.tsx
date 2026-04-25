import { useEffect } from "react";

declare global {
  interface Window {
    embeddedservice_bootstrap: any;
  }
}

export default function AgentWidget() {
  useEffect(() => {
    function initEmbeddedMessaging() {
      try {
        window.embeddedservice_bootstrap.settings.language = "en_US";

        window.embeddedservice_bootstrap.init(
          "00DgL00000OLNLZ",
          "Portfolio_Web_Chat",
          "https://orgfarm-ec702c7fe6-dev-ed.develop.my.site.com/ESWPortfolioWebChat1777093773265",
          {
            scrt2URL:
              "https://orgfarm-ec702c7fe6-dev-ed.my.salesforce-scrt.com"
          }
        );
      } catch (err) {
        console.error("Error loading Embedded Messaging:", err);
      }
    }

    const existing = document.querySelector(
      'script[data-salesforce="true"]'
    );

    if (!existing) {
      const script = document.createElement("script");

      script.src =
        "https://orgfarm-ec702c7fe6-dev-ed.develop.my.site.com/ESWPortfolioWebChat1777093773265/assets/js/bootstrap.min.js";

      script.async = true;
      script.setAttribute("data-salesforce", "true");

      script.onload = initEmbeddedMessaging;

      document.body.appendChild(script);
    } else {
      initEmbeddedMessaging();
    }
  }, []);

  return null;
}