export default function SalesforceDashboard() {
  return (
    <section
      className="w-full max-w-6xl mx-auto px-6 py-20"
      style={{ backgroundColor: "#000" }}
    >
      {/* Always centered heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
        Live Analytics
      </h2>

      {/* Chart container */}
      <div
        className="mx-auto md:mx-0"
        style={{
          width: "100%",
          maxWidth: "420px",
          height: "260px",
          overflow: "hidden",
          borderRadius: "16px",
          backgroundColor: "#000"
        }}
      >
        <iframe
          src="https://orgfarm-ec702c7fe6-dev-ed.develop.my.site.com/ResumeDownload/s"
          width="1200"
          height="900"
          style={{
            border: "none",
            marginTop: "-180px",
            marginLeft: "-5px",
            backgroundColor: "#000"
          }}
        />
      </div>
    </section>
  );
}