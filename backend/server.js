const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔑 Salesforce credentials
const CLIENT_ID = "3MVG9dAEux2v1sLskz_PCafA4VArTKZGX1JkMZ37aHh5fS2pk04XYxQs_rg_AIyOmXAY5OTLLUd5VxwGxs7YP";
const CLIENT_SECRET = "2CAF263FBDDA8D806EE7469C7544A70B1F3006334FEF07134DC6FCAF24D50F5B";

// 🔐 Get access token
async function getToken() {
  const res = await axios.post(
    "https://orgfarm-ec702c7fe6-dev-ed.develop.my.salesforce.com/services/oauth2/token",
    null,
    {
      params: {
        grant_type: "client_credentials",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
      }
    }
  );

  return res.data;
}

// 🧾 Create Lead
async function createLead(auth, firstName, lastName, email) {
  return axios.post(
    `${auth.instance_url}/services/data/v59.0/sobjects/Lead/`,
    {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Company: "Portfolio",
      Status: "Open - Not Contacted"
    },
    {
      headers: {
        Authorization: `Bearer ${auth.access_token}`,
        "Content-Type": "application/json"
      }
    }
  );
}

// 🌐 API endpoint
app.post("/lead", async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;

    console.log("Incoming:", firstName, lastName, email);

    if (!firstName || !lastName || !email) {
      return res.status(400).json({ error: "All fields required" });
    }

    const auth = await getToken();
    await createLead(auth, firstName, lastName, email);

    console.log("Lead created successfully");

    res.json({ success: true });
  } catch (err) {
    console.error("ERROR:", err.response?.data || err.message);

    res.status(500).json({
      error: err.response?.data || err.message
    });
  }
});

// 🚀 Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});