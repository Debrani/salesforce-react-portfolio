import { useEffect } from "react";

declare global {
  interface Window {
    embeddedservice_bootstrap?: any;
  }
}

export default function AgentWidget() {
  useEffect(() => {
    if (window.embeddedservice_bootstrap) return;

    const script = document.createElement("script");

    script.src =
      "https://orgfarm-ec702c7fe6-dev-ed.develop.my.site.com/ESWAgentWeb1777102142723/assets/js/bootstrap.min.js";

    script.async = true;

    script.onload = () => {
      try {
        window.embeddedservice_bootstrap.settings.language = "en_US";

        window.embeddedservice_bootstrap.init(
          "00DgL00000OLNLZ",
          "Agent_Web",
          "https://orgfarm-ec702c7fe6-dev-ed.develop.my.site.com/ESWAgentWeb1777102142723",
          {
            scrt2URL:
              "https://orgfarm-ec702c7fe6-dev-ed.develop.my.salesforce-scrt.com",
          }
        );

        console.log("✅ Chat Initialized");
      } catch (e) {
        console.error(e);
      }
    };

    document.body.appendChild(script);
  }, []);

  return null;
}