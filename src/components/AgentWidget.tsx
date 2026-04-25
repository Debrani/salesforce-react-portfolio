import { useEffect } from "react";

declare global {
  interface Window {
    embeddedservice_bootstrap?: any;
  }
}

export default function AgentWidget() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://orgfarm-ec702c7fe6-dev-ed.develop.my.site.com/ESWPortfolioWebsiteChat1777095730674/assets/js/bootstrap.min.js";

    script.async = true;

    script.onload = () => {
      try {
        window.embeddedservice_bootstrap.settings.language = "en_US";

        window.embeddedservice_bootstrap.init(
          "00DgL00000OLNLZ",
          "Portfolio_Website_Chat",
          "https://orgfarm-ec702c7fe6-dev-ed.develop.my.site.com/ESWPortfolioWebsiteChat1777095730674",
          {
            scrt2URL:
              "https://orgfarm-ec702c7fe6-dev-ed.my.salesforce-scrt.com"
          }
        );
      } catch (err) {
        console.error("Embedded Messaging error:", err);
      }
    };

    document.body.appendChild(script);
  }, []);

  return null;
}