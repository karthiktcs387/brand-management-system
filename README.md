#  Brand Management System

A full-stack web application to manage brands with approval workflow.  
Built using **Node.js, Express.js, MongoDB, and Vanilla JavaScript**.

---

## 📌 Features

- ➕ Add new brands  
- 📋 View all brands  
- ✅ Approve brand  
- ❌ Reject brand  
- 🔄 Real-time status updates  
- 🌐 REST API integration  
- 🎨 Clean UI  

---

## 🛠 Tech Stack

**Backend:**
- Node.js  
- Express.js  
- MongoDB (Mongoose)  

**Frontend:**
- HTML  
- CSS  
- JavaScript  

**Tools:**
- Git & GitHub  
- VS Code  
- Postman  

---

## 📂 Project Structure

```bash
brand-management-system/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── src/
│   ├── app.js
│   ├── controllers/
│   │   └── brandControllers.js
│   ├── models/
│   │   ├── Brand.js
│   │   └── Note.js
│   ├── routes/
│   │   └── brandRoutes.js
│
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone repository

```bash
git clone https://github.com/karthikcs387/brand-management-system.git
cd brand-management-system
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Create `.env` file

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

---

### 4. Run server

```bash
npm run dev
```

👉 Server runs at:  
http://localhost:3000

---

### 5. Run frontend

Open:

```
frontend/index.html
```

Or use Live Server:
http://127.0.0.1:5500

---

## 🔌 API Endpoints

### Get all brands
```
GET /api/brands
```

### Add brand
```
POST /api/brands
```

### Update status
```
PUT /api/brands/:id
```

---

## 🧪 Sample Data

```json
{
  "brand_name": "GlowSkin",
  "founder_name": "Karthik",
  "category": "Skincare",
  "monthly_revenue": 500000,
  "website": "https://example.com",
  "status": "APPROVED"
}
```

---

## 🎯 Future Improvements

- 🔍 Search brands  
- ✏️ Edit brand  
- 🗑 Delete brand  
- 📊 Dashboard stats  
- 🔐 Authentication  

---

## 👨‍💻 Author

Karthik  
GitHub: https://github.com/karthikcs387

---

## ⭐ Note

This project was developed as part of a technical assignment.
