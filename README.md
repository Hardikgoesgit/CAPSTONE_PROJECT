# Sociant - OAuth2 Authentication Platform


A **MERN stack** application implementing **OAuth2 Authorization Code Flow with PKCE** for Google and Facebook authentication. Built with React, Node.js, Express, MongoDB, and JWT for secure session management.


---


## 🚀 Quick Start


```bash
# Clone the repository
git clone https://github.com/Hardikgoesgit/CAPSTONE_PROJECT.git
cd Sociant


# Backend setup
cd backend
npm install
cp .env.example .env
# Edit .env with your credentials
npm run dev


# Frontend setup (in a new terminal)
cd frontend
npm install
echo "VITE_API_URL=http://localhost:3000" > .env
npm run dev


# Visit http://localhost:5173
```


---


## 🚀 Features


### Backend
- ✅ **OAuth2 with PKCE** - Secure authorization code flow with Proof Key for Code Exchange
- ✅ **Multi-Provider Support** - Google and Facebook authentication
- ✅ **JWT Sessions** - Secure httpOnly cookie-based authentication
- ✅ **Account Linking** - Link multiple OAuth providers to single account
- ✅ **Role-Based Access Control** - Support for user and admin roles
- ✅ **Session Management** - Track and revoke active sessions
- ✅ **Security Hardened** - Helmet, CORS, rate limiting, CSRF protection
- ✅ **Structured Logging** - Winston logger with correlation IDs
- ✅ **Request Tracking** - Full audit trail of authentication events
- ✅ **MongoDB Integration** - Mongoose ODM with efficient indexing


### Frontend
- ✅ **Modern React** - Built with React 18 + Vite for blazing fast development
- ✅ **Beautiful UI** - Responsive design with Tailwind CSS
- ✅ **Dark/Light Theme** - Theme toggle with persistent preferences
- ✅ **Smooth Animations** - Framer Motion for delightful user experience
- ✅ **OAuth Integration** - Seamless Google & Facebook login buttons
- ✅ **Account Management** - Link/unlink providers, view active sessions
- ✅ **Profile Customization** - Update name, view avatar, manage settings
- ✅ **Toast Notifications** - Real-time feedback for user actions
- ✅ **Fully Responsive** - Mobile-first design for all screen sizes
- ✅ **Error Handling** - Error boundaries and fallback UI
- ✅ **Protected Routes** - Client-side route protection


---


## 📋 Prerequisites


- Node.js >= 18.0.0
- MongoDB >= 6.0
- npm >= 9.0.0
- Google OAuth2 credentials
- Facebook OAuth2 credentials


---


## 🛠️ Installation


### Backend Setup


#### 1. Clone the repository


```bash
git clone https://github.com/Hardikgoesgit/CAPSTONE_PROJECT.git
cd Sociant
```


#### 2. Install backend dependencies


```bash
cd backend
npm install
```


#### 3. Configure backend environment variables


Copy the example environment file:


```bash
cp .env.example .env
```


Edit `backend/.env` with your configuration:


```env
# Server
NODE_ENV=development
PORT=3000


# Database
MONGODB_URI=mongodb://localhost:27017/Socaint


# JWT
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d


# Frontend
FRONTEND_URL=http://localhost:5173


# Google OAuth2
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:3000/api/auth/callback/google


# Facebook OAuth2
FACEBOOK_APP_ID=your-facebook-app-id
FACEBOOK_APP_SECRET=your-facebook-app-secret
FACEBOOK_CALLBACK_URL=http://localhost:3000/api/auth/callback/facebook
```


#### 4. Start MongoDB


Make sure MongoDB is running locally or update `MONGODB_URI` with your connection string.


```bash
# Start MongoDB (macOS with Homebrew)
brew services start mongodb-community


# Or using Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```


### Frontend Setup


#### 1. Install frontend dependencies


```bash
cd ../frontend
npm install
```


#### 2. Configure frontend environment variables


Create `frontend/.env`:


```env
# Backend API URL
VITE_API_URL=http://localhost:3000
```


---


## 🎯 Usage


### Running the Full Application


#### Start Backend (Terminal 1)


```bash
cd backend
npm run dev
```


The backend server will start on `http://localhost:3000`


#### Start Frontend (Terminal 2)


```bash
cd frontend
npm run dev
```


The frontend will start on `http://localhost:5173`


#### Access the Application


Open your browser and navigate to: `http://localhost:5173`


---


## 📡 API Endpoints


### Authentication


| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/auth/google` | Initiate Google OAuth flow | No |
| GET | `/api/auth/facebook` | Initiate Facebook OAuth flow | No |
| GET | `/api/auth/callback/google` | Google OAuth callback | No |
| GET | `/api/auth/callback/facebook` | Facebook OAuth callback | No |
| POST | `/api/auth/logout` | Logout current session | Yes |
| POST | `/api/auth/unlink/:provider` | Unlink OAuth provider | Yes |


### User Management


| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/user/me` | Get current user profile | Yes |
| PATCH | `/api/user/me` | Update user profile | Yes |
| DELETE | `/api/user/me` | Delete user account | Yes |
| GET | `/api/user/sessions` | Get active sessions | Yes |
| DELETE | `/api/user/sessions/:id` | Revoke specific session | Yes |
| POST | `/api/user/sessions/revoke-all` | Revoke all other sessions | Yes |


### Health Check


| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Server health check |
| GET | `/api` | API version info |


---


## 🔐 OAuth2 Setup


### Google OAuth2


1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy Client ID and Client Secret to `.env`


### Facebook OAuth2


1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app
3. Add Facebook Login product
4. Configure OAuth redirect URIs: `http://localhost:3000/api/auth/callback/facebook`
5. Copy App ID and App Secret to `.env`


---


## 🏗️ Project Structure


### Backend Structure


```
backend/
├── src/
│   ├── config/
│   │   ├── db.js              # MongoDB connection
│   │   └── env.js             # Environment configuration
│   ├── controllers/
│   │   ├── auth.controller.js # OAuth flow handlers
│   │   └── user.controller.js # User management
│   ├── middlewares/
│   │   ├── authMiddleware.js  # JWT verification
│   │   ├── errorHandler.js    # Global error handling
│   │   ├── rateLimiter.js     # Rate limiting
│   │   └── requestLogger.js   # Request logging
│   ├── models/
│   │   └── User.js            # User schema
│   ├── routes/
│   │   ├── auth.routes.js     # Auth endpoints
│   │   └── user.routes.js     # User endpoints
│   ├── services/
│   │   ├── googleOAuth.service.js   # Google OAuth logic
│   │   └── facebookOAuth.service.js # Facebook OAuth logic
│   └── utils/
│       ├── jwt.js             # JWT utilities
│       ├── logger.js          # Winston logger
│       └── oauth.js           # PKCE utilities
├── logs/                      # Application logs
├── app.js                     # Express app setup
├── server.js                  # Server entry point
├── seed.js                    # Database seeding
├── .env.example               # Environment template
└── package.json
```


### Frontend Structure


```
frontend/
├── src/
│   ├── api/
│   │   └── auth.js     # Handles API calls for authentication (Google, Facebook)
│   │
│   ├── assets/
│   │   ├── favicon-Sociant.png        # App favicon
│   │   └── Sociant-logo.png           # Dashboard logo
│   │
│   ├── components/
│   │   ├── atoms/                     # Reusable, low-level UI components
│   │   │   ├── Button.jsx             # Multi-style button component
│   │   │   ├── Loader.jsx             # Loading spinner component
│   │   │   └── ThemeToggleButton.jsx  # Dark/Light theme switcher
│   │   │
│   │   ├── dashboard/                 # Dashboard-specific components
│   │   │   ├── AccountInsights.jsx    # Account stats card grid layout
│   │   │   └── AnalyticsDashboard.jsx # KPI cards + charts (Recharts)
│   │   │
│   │   ├── molecules/                 # Combined smaller components
│   │   │   └── Toast.jsx              # Notification toast system
│   │   │
│   │   ├── organisms/                 # Larger building blocks / layouts
│   │   │   ├── ErrorBoundary.jsx      # Error boundary wrapper for React errors
│   │   │   └── Navbar.jsx             # Top navigation bar with user dropdown
│   │   │
│   │   └── ui/
│   │       └── Badge.jsx              # Small badge/label UI component
│   │
│   ├── context/
│   │   ├── AuthContext.jsx            # Global authentication context (JWT/session)
│   │   └── ThemeContext.jsx           # Global theme (dark/light) context
│   │
│   ├── pages/
│   │   ├── CallbackPage.jsx           # Handles OAuth2 callback redirects
│   │   ├── DashboardPage.jsx          # Main dashboard page after login
│   │   ├── LandingPage.jsx            # Landing/Login page
│   │   └── SettingsPage.jsx           # User settings and profile customization
│   │
│   ├── routes/
│   │   └── ProtectedRoute.jsx         # Protects private routes from unauthenticated access
│   │
│   ├── App.jsx                        # Main application component (router + layout)
│   ├── main.jsx                       # Entry point (React DOM rendering)
│   └── index.css                      # Global styling imports (Tailwind base)
│
├── .env                               # Frontend environment variables (ignored in Git)
├── .gitignore                         # Ignored files for frontend
├── eslint.config.js                   # ESLint configuration
├── index.html                         # Main HTML template
├── package.json                       # Frontend dependencies and scripts
├── package-lock.json                  # NPM lock file
├── postcss.config.js                  # PostCSS configuration
├── tailwind.config.js                 # Tailwind CSS setup
└── vite.config.js                     # Vite bundler configuration






---


## 🔒 Security Features


### Implemented Security Measures


- **PKCE (RFC 7636)** - Proof Key for Code Exchange for OAuth2
- **Helmet** - Security headers (CSP, HSTS, etc.)
- **CORS** - Configured for frontend domain only
- **Rate Limiting** - Prevent brute force attacks
- **httpOnly Cookies** - XSS protection for tokens
- **SameSite Cookies** - CSRF protection
- **Input Validation** - Express-validator for request validation
- **Session Management** - Track and revoke active sessions
- **Correlation IDs** - Request tracking and audit trails
- **Structured Logging** - Security event monitoring


### Environment-Specific Security


**Development:**
- CORS relaxed for localhost
- Detailed error messages
- SameSite=Lax for easier testing


**Production:**
- Strict CORS configuration
- HTTPS-only cookies (secure flag)
- SameSite=Strict
- Minimal error exposure


---


## 📊 Logging


All authentication events are logged with correlation IDs for tracking:


- LOGIN_SUCCESS - Successful authentication
- LOGIN_FAILURE - Failed authentication attempt
- LOGOUT - User logout
- LINK_ACCOUNT - Provider linked to account
- UNLINK_ACCOUNT - Provider unlinked
- SESSION_INVALID - Invalid session detected
- RATE_LIMIT_EXCEEDED - Rate limit violation


Logs are stored in:
- logs/combined.log - All logs
- logs/error.log - Error logs only
- logs/exceptions.log - Uncaught exceptions


---


## 🧪 Testing


### Backend Testing


**Health Check:**
```bash
curl http://localhost:3000/health
```


**Initiate Google Login:**
```bash
curl http://localhost:3000/api/auth/google
```


**Get Current User (with JWT cookie):**
```bash
curl -X GET http://localhost:3000/api/user/me
 --cookie "Sociant_token=YOUR_JWT_TOKEN"
```


**Logout:**
```bash
curl -X POST http://localhost:3000/api/auth/logout
 --cookie "Sociant_token=YOUR_JWT_TOKEN"
```
### Frontend Testing


#### Development Testing
1. Start both backend and frontend servers
2. Navigate to `http://localhost:5173`
3. Click "Continue with Google" or "Continue with Facebook"
4. Complete OAuth flow
5. Verify dashboard displays user information
6. Test theme toggle
7. Test account linking/unlinking
8. Test logout functionality


---


## 📝 Database Schema


### User Model


```javascript
{
 name: String,
 email: String (unique, indexed),
 avatar: String,
 roles: [String],  // ['user', 'admin']
 providers: [{
   name: String,   // 'google' or 'facebook'
   providerId: String,
   linkedAt: Date
 }],
 activeSessions: [{
   sessionId: String,
   createdAt: Date,
   expiresAt: Date,
   userAgent: String,
   ip: String
 }],
 lastLoginAt: Date,
 createdAt: Date,
 updatedAt: Date
}
```


---


## 👤 Author


**Hardik Kumar**
- GitHub: [@Hardikgoesgit](https://github.com/Hardikgoesgit)


**Akshat Gupta**
- GitHub: [@Akshato07](https://github.com/Akshato07)


---


## Acknowledgments


- OAuth2 RFC 6749 - Authorization Framework
- PKCE RFC 7636 - Proof Key for Code Exchange
- Express.js Community
- MongoDB Documentation


---
