const express = require('express');
const app = express();
const PORT = 3000;

// Serve Static HTML
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>DevOps CI/CD Pipeline</title>
        <style>
          body {
            background-color: #0f172a;
            color: #f8fafc;
            font-family: 'Arial', sans-serif;
            text-align: center;
            padding-top: 100px;
          }
          h1 {
            font-size: 48px;
            color: #38bdf8;
          }
          p {
            font-size: 24px;
            color: #94a3b8;
          }
          .btn {
            margin-top: 30px;
            padding: 15px 30px;
            background-color: #38bdf8;
            color: #0f172a;
            border: none;
            border-radius: 10px;
            font-size: 18px;
            cursor: pointer;
            transition: 0.3s;
          }
          .btn:hover {
            background-color: #0ea5e9;
            color: #ffffff;
          }
        </style>
      </head>
      <body>
        <h1>🚀 Welcome to My DevOps Project 🚀</h1>
        <p>CI/CD Pipeline Successfully Deployed using GitHub Actions & Docker!</p>
        <button class="btn" onclick="alert('Thank you for visiting!')">Hire Me Now</button>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
