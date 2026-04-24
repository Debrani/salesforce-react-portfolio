import React, { useState } from "react";

export default function DownloadResume() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleDownload = () => {
    if (!firstName || !lastName || !email) {
      alert("Please enter all fields");
      return;
    }

    // ✅ 1. OPEN RESUME FIRST (DO NOT TOUCH THIS FLOW)
    window.open(
      "https://orgfarm-ec702c7fe6-dev-ed.develop.my.salesforce.com/sfc/p/gL00000OLNLZ/a/gL0000006XpJ/lljdGbc7IH7UYtWRtIuNBE7wijxiBhmvxNZD0tGKpqo",
      "_blank"
    );

    // ✅ 2. SEND DATA TO BACKEND (NON-BLOCKING)
    fetch("http://localhost:5000/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ firstName, lastName, email })
    }).catch(err => {
      console.error("Lead error:", err);
    });
  };

  return (
    <section
      id="download-resume"
      className="w-full max-w-6xl mx-auto px-6 py-28 text-center"
    >
      <h2 className="text-4xl font-bold mb-6 text-white">
        Download Resume
      </h2>

      <input
        type="text"
        placeholder="First Name"
        className="border p-2 mr-2"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Last Name"
        className="border p-2 mr-2"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter your email"
        className="border p-2 mr-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={handleDownload}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Submit & Download
      </button>
    </section>
  );
}