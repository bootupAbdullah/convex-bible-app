# Bible App - Convex Demo Project

A simple Bible study app built with React and Convex, demonstrating real-time database functionality and collaborative note-taking.

## 🎯 Project Goals

- **Primary**: Demonstrate Convex competency (queries, mutations, actions)
- **Secondary**: Build functional Bible verse display with community notes
- **Demo**: Real-time collaboration across multiple browser windows

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Convex (serverless functions + real-time database)
- **Styling**: CSS with background imagery

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone and install dependencies**
   ```bash
   git clone <repository-url>
   cd bible-app
   npm install
   ```

2. **Set up Convex**
   ```bash
   npm install convex
   npx convex dev
   ```
   This will create your Convex project and provide dashboard access.

3. **Start development servers**
   
   Terminal 1 (Convex backend):
   ```bash
   npx convex dev
   ```
   
   Terminal 2 (React frontend):
   ```bash
   npm run dev
   ```

4. **Access the app**
   - Frontend: http://localhost:5173
   - Convex Dashboard: (URL provided in terminal)

## 📁 Project Structure

```
bible-app/
├── convex/
│   ├── _generated/          # Auto-generated API files
│   └── bible.ts            # Bible functions (queries, mutations)
├── public/
│   └── images/
│       └── open-book.jpg   # Background book image
├── src/
│   ├── App.tsx             # Main React component
│   ├── App.css             # Styling with book background
│   └── main.tsx            # Entry point with ConvexProvider
└── package.json
```

## 🔧 Convex Functions

### Queries (Read Data)
- `searchVerses` - Get sample Bible verses
- `getBookmarks` - Retrieve all saved bookmarks

### Mutations (Write Data)  
- `saveBookmark` - Save a verse bookmark with reference

### Actions (External APIs)
- `fetchVerse` - Simulate external Bible API call

## 🎨 Features

- **Verse Display**: Shows sample Bible verses with clean formatting
- **Bookmarking**: Click to save verses with automatic reference generation
- **Real-time Updates**: Bookmarks appear instantly across all connected clients
- **Book Background**: Open book image as page background

## 📊 Database Schema

### Bookmarks Table
- `verse` (string) - The verse text
- `reference` (string) - Bible reference (e.g., "John 3:16")
- `createdAt` (string) - ISO timestamp

## 🎯 Convex Concepts Demonstrated

1. **Queries**: Real-time data fetching with `useQuery`
2. **Mutations**: Database writes with `useMutation` 
3. **Type Safety**: End-to-end TypeScript integration
4. **Real-time Sync**: Automatic UI updates across clients

## 🔗 Resources

- [Convex Documentation](https://docs.convex.dev)
- [Project Dashboard](https://dashboard.convex.dev)