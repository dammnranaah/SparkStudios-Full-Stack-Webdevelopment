# Items Explorer | Spark Studios

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A modern full-stack web application that displays a list of items fetched from a backend API. This project demonstrates a professional implementation using Next.js for the frontend and Express.js with Supabase for the backend, featuring a sleek black theme UI.

## 📸 Screenshots

![Application Screenshot](https://via.placeholder.com/800x400?text=Items+Explorer+Screenshot)

## 🏗️ Project Structure

The project is organized into two main directories:

```
├── backend/            # Express.js API server
│   ├── src/            # TypeScript source files
│   │   ├── index.ts    # Main server file
│   │   └── supabase.ts # Supabase client configuration
│   ├── package.json    # Backend dependencies
│   └── tsconfig.json   # TypeScript configuration
│
└── frontend/           # Next.js application
    ├── src/            # Frontend source files
    │   ├── app/        # Next.js App Router
    │   │   ├── page.tsx    # Main page component
    │   │   └── layout.tsx  # Root layout component
    │   └── ...
    └── package.json    # Frontend dependencies
```

## ✨ Features

- **Modern UI**: Sleek black theme with responsive design
- **Real-time Data**: Fetches items from the backend API
- **Error Handling**: Graceful error states and loading indicators
- **TypeScript**: Type-safe code throughout the application
- **Responsive Design**: Works on mobile, tablet, and desktop

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account (optional, as the backend provides mock data)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following content:
   ```
   PORT=5000
   SUPABASE_URL=your_supabase_url
   SUPABASE_SERVICE_KEY=your_supabase_service_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The backend server will run on http://localhost:5000. You can test the API by visiting http://localhost:5000/items in your browser.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend application will run on http://localhost:3000.

## 🗄️ Database Setup (Optional)

If you want to use Supabase instead of the mock data:

1. Create a Supabase account at https://supabase.com
2. Create a new project
3. Create a table named `items` with the following schema:
   - `id`: integer (primary key)
   - `name`: text
4. Insert some sample data
5. Update the `.env` file in the backend directory with your Supabase credentials

## 🔌 API Endpoints

| Endpoint | Method | Description | Response |
|----------|--------|-------------|----------|
| `/` | GET | Health check | `Backend API is running` |
| `/items` | GET | Fetch all items | `[{ "id": 1, "name": "Item 1" }, ...]` |

## 🚢 Deployment

### Backend Deployment

You can deploy the backend to platforms like Heroku, Render, or Railway:

1. Build the TypeScript code:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

### Frontend Deployment

You can deploy the Next.js frontend to platforms like Vercel or Netlify:

1. Build the Next.js application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## 🧪 Testing

To run tests for the backend:

```bash
cd backend
npm test
```

To run tests for the frontend:

```bash
cd frontend
npm test
```

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework for the frontend
- [Express.js](https://expressjs.com/) - Backend API framework
- [Supabase](https://supabase.com/) - Database and authentication
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Made By

Dammnranaah - [https://github.com/dammnranaah](https://github.com/dammnranaah)
