# Node.js CI/CD Demo Project

This is a simple Node.js application integrated with GitHub Actions for CI/CD and DockerHub deployment.

## Project Structure

```
nodejs-ci-cd-demo/
├── index.js
├── package.json
├── Dockerfile
└── .github/
    └── workflows/
        └── main.yml
```

## Run Locally

```bash
git clone <repo-url>
cd nodejs-ci-cd-demo
npm install
npm start
```

Visit: http://localhost:3000

## GitHub Actions CI/CD Pipeline

1. On every push to `main` branch:
   - Install dependencies
   - Run tests
   - Build Docker image
   - Push Docker image to DockerHub

## GitHub Secrets Required

| Secret Name        | Description               |
|-------------------|---------------------------|
| DOCKER_USERNAME   | Your DockerHub Username   |
| DOCKER_PASSWORD   | Your DockerHub Password   |

# Node.js CI/CD Demo Project 🚀

This project demonstrates a complete CI/CD Pipeline using:
- Node.js Express App
- GitHub Actions for Automation
- Docker for Containerization
- DockerHub for Image Registry
- Deployed on AWS EC2 Instance

---

## Features:
- GitHub Actions triggers on every Push
- Auto Build & Push Docker Image
- Custom Stylish Landing Page
- Easy Deployment Ready

---

## Developed by:
Stanley Raj
