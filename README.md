# 🍕 Pizza Shop

A complete management system for food establishments, allowing you to track sales, orders, and metrics through an intuitive dashboard.

## 📋 About the Project

Pizza Shop is a web application developed to manage food establishments, offering:

- **Restaurant Registration**: Registration system for new establishments
- **Analytics Dashboard**: Sales metrics and performance visualization
- **Order Management**: Complete order flow control
- **Authentication**: Secure login system via magic link
- **Responsive Design**: Adaptable interface for different devices

### ✨ Features

#### Dashboard

- 📊 Monthly total revenue with comparison
- 📈 Monthly order quantity
- 📅 Daily orders
- ❌ Monthly cancellations
- 📉 Revenue chart by period
- 🥇 Most popular products

#### Order Management

- 📋 Complete order listing
- 🔍 Filters by ID, customer, and status
- 📄 Complete order details
- 🔄 Status changes (Pending → Processing → Delivering → Delivered)
- ❌ Order cancellation
- 📖 Pagination

#### Authentication

- 🔐 Login via magic link
- 👤 Restaurant registration
- 🔒 Protected routes

## 🛠️ Tech Stack

### Frontend

- **React 19** - Main library
- **TypeScript** - Static typing
- **React Router v7** - Routing
- **TanStack Query** - Server state management
- **React Hook Form** - Forms
- **Zod** - Schema validation
- **Tailwind CSS v4** - Styling
- **Radix UI** - Accessible components
- **Recharts** - Charts and visualizations
- **Lucide React** - Icons
- **date-fns** - Date manipulation
- **Sonner** - Toast notifications
- **Axios** - HTTP client

### Development

- **Vite** - Build tool
- **Vitest** - Unit testing
- **Testing Library** - Testing utilities
- **Playwright** - E2E testing
- **MSW** - Mock Service Worker
- **ESLint** - Linting
- **Prettier** - Code formatting

## 🚀 How to Run

### Prerequisites

- Node.js (version 18 or higher)
- Pnpm
- Bun backend running (WSL Ubuntu)

### 1. Clone the repository

```bash
git clone <repository-url>
cd pizza-shop
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure the backend

⚠️ **Important**: This project requires a Bun backend running separately.

The backend should be running on WSL Ubuntu (for Windows OS) and available on the network. Make sure to:

1. Have the backend configured and running
2. Check the API URL in the configuration file
3. Ensure CORS is properly configured

[Backend Repository](https://github.com/rocketseat-education/pizzashop-api)

### 4. Run the project

#### Development

```bash
pnpm run dev
```
The project will be available at `http://localhost:5173`

#### Test mode (with mocks)

```bash
pnpm run dev:test
```
The project will be available at `http://localhost:58789`

### 5. Run tests

```bash
# Unit tests
pnpm run test

# E2E tests
pnpm playwright test --ui
```

## 🏗️ Project Structure

```
src/
├── api/                    # API functions and mocks
│   ├── mocks/             # Mock Service Worker
│   └── *.ts               # API functions
├── components/            # Reusable components
│   ├── ui/               # Base components (shadcn/ui)
│   └── theme/            # Theme components
├── lib/                  # Utilities and configurations
├── pages/                # Application pages
│   ├── auth/            # Authentication pages
│   ├── app/             # Application pages
│   └── _layouts/        # Layouts
└── routes.tsx           # Route configuration
```

## 🎨 Design System

The project uses a design system based on:

- **Tailwind CSS v4** for styling
- **Radix UI** for accessible components
- **Custom shadcn/ui components**
- **Theme system** (dark/light)
- **Responsive design**

## 📱 Features by Screen

### Dashboard (`/`)

- Cards with main metrics
- Temporal revenue chart
- Popular products chart
- Custom period selector

### Orders (`/orders`)

- Table with all orders
- Filters by ID, customer, and status
- Pagination
- Modal with order details
- Status change actions

### Authentication

- **Login** (`/sign-in`): Email + magic link
- **Registration** (`/sign-up`): Restaurant data

## 🧪 Testing

The project includes:

- **Unit Tests**: Components and utility functions
- **Integration Tests**: Complete flows
- **Mocks**: MSW to simulate API during development
- **E2E**: Playwright for end-to-end testing

## 🎓 Credits

This project was developed as part of **Rocketseat's** React track, applying modern frontend development concepts with React and TypeScript.

---

Developed with ❤️ during Rocketseat's React track
