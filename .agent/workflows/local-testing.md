---
description: How to test the portfolio website locally
---

# Local Testing Workflow

This workflow guides you through setting up and testing the portfolio website on your local machine.

## Prerequisites

Before starting, ensure you have the following installed:
- **Node.js** (version 18 or higher recommended)
- **pnpm** (this project uses pnpm as the package manager)

To install pnpm globally if you don't have it:
```bash
npm install -g pnpm
```

## Steps

### 1. Install Dependencies

First, install all project dependencies using pnpm:

```bash
pnpm install
```

This will read the `package.json` and `pnpm-lock.yaml` files and install all required packages.

### 2. Start the Development Server

// turbo
Run the development server:

```bash
pnpm dev
```

This will start the Next.js development server, typically on `http://localhost:3000`.

### 3. Open in Browser

Once the server is running, open your browser and navigate to:
- **Local**: http://localhost:3000
- **Network**: The terminal will also show a network URL you can use to test from other devices on the same network

### 4. Test the Application

Verify the following:
- ✅ The homepage loads correctly
- ✅ All navigation links work
- ✅ Images and assets load properly
- ✅ Responsive design works on different screen sizes
- ✅ Dark/light theme toggle works (if applicable)
- ✅ All interactive components function as expected

### 5. Check for Errors

Monitor the terminal and browser console for any errors or warnings:
- **Terminal**: Shows server-side errors and build warnings
- **Browser Console** (F12): Shows client-side JavaScript errors

## Additional Commands

### Build for Production

To test a production build locally:

```bash
pnpm build
pnpm start
```

This creates an optimized production build and starts a production server.

### Run Linting

To check code quality:

```bash
pnpm lint
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use, you can specify a different port:

```bash
pnpm dev -- -p 3001
```

### Clear Cache

If you encounter strange issues, try clearing the Next.js cache:

```bash
rm -rf .next
pnpm dev
```

### Dependency Issues

If you have dependency conflicts, try:

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## Notes

- The project uses **Next.js 16.0.10** with **React 19.2.0**
- **Tailwind CSS 4.1.9** is configured for styling
- Hot Module Replacement (HMR) is enabled, so changes will reflect immediately
