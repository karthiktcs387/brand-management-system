const API = "http://localhost:3000/api/brands";

// 🔹 Load all brands
async function loadBrands() {
  try {
    const res = await fetch(API);
    const data = await res.json();

    const container = document.getElementById("brands");
    container.innerHTML = "Loading...";

    container.innerHTML = "";

    data.forEach(brand => {

      const statusColor = brand.status === "APPROVED" ? "green" : "red";

      const div = document.createElement("div");
      div.style.border = "1px solid #ccc";
      div.style.padding = "10px";
      div.style.margin = "10px";
      div.style.borderRadius = "8px";
      div.style.background = "#fff";
      div.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";

      div.innerHTML = `
        <h3>${brand.brand_name}</h3>
        <p><b>Founder:</b> ${brand.founder_name}</p>
        <p><b>Category:</b> ${brand.category || "-"}</p>
        <p><b>Revenue:</b> ₹${brand.monthly_revenue || "-"}</p>
        <p><b>Website:</b> <a href="${brand.website || "#"}" target="_blank">Visit</a></p>
        <span style="padding:5px 10px;border-radius:5px;color:white;background:${brand.status === 'APPROVED' ? 'green' : 'red'};
">
  ${brand.status}
</span>
        <button style="margin-right:10px;" onclick="updateStatus('${brand._id}', 'APPROVED')">Approve</button>
<button onclick="updateStatus('${brand._id}', 'REJECTED')">Reject</button>
      `;

      container.appendChild(div);
    });

  } catch (err) {
    console.error("Error loading brands:", err);
  }
}

// 🔹 Add new brand
async function addBrand() {
  const name = document.getElementById("brand").value;
  const founder = document.getElementById("founder").value;

  if (!name || !founder) {
    alert("Please enter all fields");
    return;
  }

  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      brand_name: name,
      founder_name: founder
    })
  });

  document.getElementById("brandName").value = "";
  document.getElementById("founderName").value = "";

  loadBrands(); // refresh list
}

// 🔹 Update status
async function updateStatus(id, status) {
  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ status })
  });

  loadBrands(); // refresh list
}

// 🔹 Initial load
loadBrands();