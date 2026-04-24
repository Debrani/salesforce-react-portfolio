export default function AgentWidget() {

  const startChat = async () => {

    const salesforceConfig = {
      organizationId: "00DgL00000OLNLZ",
      developerName: "Portfolio_Custom_Client_Deployment",
      url: "https://orgfarm-ec702c7fe6-dev-ed.develop.my.salesforce-scrt.com"
    };

    console.log("Connecting to Agentforce...", salesforceConfig);

    // This is where the Salesforce Custom Client SDK init goes.
    // Replace this with the SDK init from Salesforce docs.
  };

  return (
    <button
      onClick={startChat}
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 999999,
        background: "#fff",
        color: "#111",
        borderRadius: "14px",
        padding: "14px 20px"
      }}
    >
      Chat With My AI Agent
    </button>
  );
}