
# 🐦 Twitter Clone - MERN Stack Project



[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://semver.org)

## Overview

A Twitter clone application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) with modern features and real-time functionality.

### Key Features

- JWT Authentication
- Follow/Unfollow System
- Create & Delete Posts
- Post Comments
- Like Posts
- Image Upload (Cloudinary)
- Notifications
- Profile Editing
- Modern UI with Tailwind CSS
- Data Fetching with React Query

## Tech Stack

- **Frontend:**
  - React.js
  - Tailwind CSS
  - DaisyUI
  - React Query
  - React Router DOM
  - React Icons

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - JWT
  - Cloudinary
  - Bcrypt

## Project Structure

```
twitter-clone/
├── backend/
│   ├── controllers/
│   ├── db/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
└── package.json
```

## Installation & Setup

### Prerequisites

- Node.js (v14+)
- MongoDB
- Cloudinary Account

### Environment Variables

```shell
MONGO_URI=your_mongodb_uri
PORT=5000
JWT_SECRET=your_jwt_secret
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Installation Steps

1. Clone repository
```bash
git clone https://github.com/username/twitter-clone.git
cd twitter-clone
```

2. Install dependencies
```bash
npm install
cd frontend && npm install
```

3. Setup environment variables
- Create `.env` file in root folder
- Fill with required variables (see example above)

4. Run application
```bash
# Development mode
npm run dev

# Production build
npm run build
npm start
```

## Features & Usage

### 1. Authentication
- Register with email, username, and password
- Login with username/email
- JWT token authentication

### 2. Post Management
- Create posts with text and/or images
- Like and unlike posts
- Comment on posts
- Delete own posts

### 3. User Profile
- Edit profile information
- Upload profile and cover photos
- View followers and following
- Edit bio and links

### 4. Social Interaction
- Follow/unfollow users
- Like and follow notifications
- Following timeline
- Suggested users

## Development

### Scripts

```json
{
  "dev": "NODE_ENV=development nodemon backend/server.js",
  "start": "NODE_ENV=production node backend/server.js",
  "build": "npm install && npm install --prefix frontend && npm run build --prefix frontend"
}
```

### API Endpoints

- `POST /api/auth/signup` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/posts` - Get timeline posts
- `POST /api/posts` - Create new post
- `PUT /api/users/profile` - Update profile

## Contributing

1. Fork repository
2. Create new branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Create Pull Request

## Debug & Troubleshooting

- Ensure MongoDB is running
- Check environment variables
- View console logs for errors
- Validate request body

## License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## Acknowledgments

- Tailwind CSS for styling
- DaisyUI for UI components
- Cloudinary for image hosting
- MongoDB Atlas for database hosting

## Contact & Support

- Create issues for bug reports
- Pull requests for contributions
- Email for further inquiries

---


