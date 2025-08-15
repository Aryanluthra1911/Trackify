# 🏆 Trackify - Advanced Jewelry Inventory Management System

> **PRECISION • LUXURY • EXCELLENCE**

Trackify is a sophisticated web-based inventory management system designed specifically for jewelry businesses. It provides comprehensive tools for tracking sales, managing orders, generating bills, and maintaining detailed records of precious metal transactions with golden precision.

## ✨ Features

### 🔐 Authentication & Security
- **User Registration & Login**: Secure authentication system with JWT tokens
- **Protected Routes**: Role-based access control for sensitive operations
- **Session Management**: Secure cookie-based session handling

### 📊 Dashboard
- **Real-time Overview**: Comprehensive dashboard with key business metrics
- **Quick Actions**: Fast access to common operations
- **Visual Analytics**: Clear presentation of business data

### 💰 Sales Management
- **Product Tracking**: Monitor jewelry items with detailed specifications
- **Weight & Rate Management**: Track precious metal weights and current rates
- **Labour Cost Calculation**: Automated labour cost computation
- **Total Cost Calculation**: Real-time price calculations including all costs

### 🧾 GST Sales & Billing
- **GST Integration**: Complete GST calculation (CGST + SGST)
- **Bill Generation**: Professional invoice creation
- **Payment Mode Tracking**: Monitor different payment methods
- **Purity Standards**: Support for various karat standards (22k, 24k, etc.)

### 📋 Custom Bills
- **Flexible Billing**: Create custom bills for non-standard items
- **Quantity Management**: Handle bulk orders efficiently
- **Payment Tracking**: Monitor payment methods and status

### 📦 Order Management
- **Order Creation**: Comprehensive order entry system
- **Customer Details**: Store customer information and contact details
- **Advance Deposits**: Track partial payments and deposits
- **Order Status**: Monitor order completion and fulfillment

### 🔍 Search & Records
- **Advanced Search**: Find records quickly with search functionality
- **Data Management**: Clear, update, and delete records as needed
- **Historical Data**: Maintain complete transaction history

## 🛠️ Technology Stack

### Backend
- **Runtime**: Node.js with ES6 modules
- **Framework**: Express.js 5.1.0
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT + bcryptjs
- **Security**: CORS, cookie-parser
- **Environment**: dotenv for configuration

### Frontend
- **Framework**: React 19.1.0 with React Router DOM
- **Build Tool**: Vite 7.0.3
- **Styling**: Tailwind CSS 4.1.11
- **HTTP Client**: Axios for API communication
- **State Management**: React hooks and context
- **Icons**: Lucide React for modern iconography

### Database Schema
- **Sales**: Product, weight, rate, labour, total, date, time
- **GST Sales**: Element, bill number, purity, payment mode, GST calculations
- **Custom Bills**: Cost, quantity, payment method, total
- **Orders**: Product details, customer info, deposits, totals
- **Credentials**: User authentication data

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Trackify
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   
   # Create .env file with your database configuration
   echo "DATABASE_URL=postgresql://username:password@localhost:5432/trackify" > .env
   
   # Run database migrations
   npx prisma migrate dev
   
   # Start the server
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   
   # Start development server
   npm run dev
   ```

4. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:4444

## 📁 Project Structure

```
Trackify/
├── backend/                 # Backend server
│   ├── controllers/        # Business logic controllers
│   ├── routes/            # API route definitions
│   ├── prisma/            # Database schema and migrations
│   ├── utils/             # Utility functions
│   └── server.js          # Main server file
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Application pages
│   │   ├── assets/        # Images and static files
│   │   └── App.jsx        # Main application component
│   └── package.json
└── README.md
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the backend directory:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/trackify
JWT_SECRET=your-secret-key
PORT=4444
```

### Database Setup
1. Create a PostgreSQL database
2. Update the DATABASE_URL in your .env file
3. Run `npx prisma migrate dev` to create tables
4. Run `npx prisma generate` to generate Prisma client

## 📱 Usage Guide

### 1. User Registration & Login
- Navigate to the signup page to create an account
- Use your credentials to log in
- JWT tokens are automatically managed for session persistence

### 2. Dashboard Operations
- **Sales Entry**: Add new jewelry sales with product details
- **GST Bills**: Generate GST-compliant invoices
- **Custom Bills**: Create bills for non-standard items
- **Order Management**: Track customer orders and deposits

### 3. Data Management
- Use search functionality to find specific records
- Update or delete records as needed
- Export data for reporting purposes

## 🌐 Deployment

### Vercel Frontend
The frontend is configured for Vercel deployment with:
- Build optimization
- Static asset serving
- Environment variable configuration

### Backend Deployment
- Configure your production database
- Set environment variables
- Use PM2 or similar process manager
- Configure CORS for production domains

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for password security
- **CORS Protection**: Configured for specific origins
- **Input Validation**: Server-side data validation
- **Protected Routes**: Authentication required for sensitive operations

## 📊 Business Benefits

- **Efficiency**: Streamlined inventory and sales management
- **Accuracy**: Precise calculations for precious metals
- **Compliance**: GST-ready billing system
- **Tracking**: Complete audit trail of all transactions
- **Customer Management**: Organized customer and order tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Trackify** - Where precision meets luxury in inventory management.

*Built with ❤️ for jewellery businesses worldwide*
