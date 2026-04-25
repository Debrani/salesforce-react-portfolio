import { useEffect } from "react";

declare global {
  interface Window {
    embeddedservice_bootstrap?: any;
  }
}

let isInitialized = false;

export default function AgentWidget() {
  useEffect(() => {
    const scriptId = "salesforce-embedded-messaging";

    // Prevent duplicate script injection
    if (document.getElementById(scriptId)) {
      initChat();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;

    script.src =
      "https://orgfarm-ec702c7fe6-dev-ed.develop.my.site.com/ESWPortfolioWebsiteChat1777095730674/assets/js/bootstrap.min.js";

    script.async = true;

    script.onload = () => {
      console.log("Salesforce script loaded");
      initChat();
    };

    script.onerror = (err) => {
      console.error("Failed to load Salesforce script:", err);
    };

    document.body.appendChild(script);

    function initChat() {
      if (isInitialized) return;

      const waitForBootstrap = setInterval(() => {
        if (window.embeddedservice_bootstrap) {
          clearInterval(waitForBootstrap);

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

            isInitialized = true;
            console.log("Salesforce Chat Initialized Successfully");
          } catch (err) {
            console.error("Salesforce init error:", err);
          }
        }
      }, 100);
    }
  }, []);

  return null;
}