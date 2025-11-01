# 🎪 VuEventsOrg - Festival Management Platform

[![Web Design Project](https://img.shields.io/badge/Project-Web%20Design-orange.svg)](https://github.com/Vukotije/vu-fest-org)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.0.2-purple.svg)](https://getbootstrap.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Disabled-red.svg)](https://firebase.google.com/)

A responsive, cross platform web application for managing festival organizers and events, built as part of a web design course project. The application demonstrates UI/UX design using vanilla JavaScript and Bootstrap framework. It depends upon firebase server, but has support to mock data.

## 📖 Project Overview

VuEventsOrg is a festival management platform that allows users to browse festival organizers, view event details, and manage user accounts. The project emphasizes **web design excellence** over complex backend development, showcasing responsive design, modern UI components, and smooth user interactions.

### 🎯 Purpose

This project was developed as part of the **Web Design** university course to demonstrate:

- Modern responsive web design principles
- Clean, professional UI/UX implementation
- Cross-browser compatibility
- Accessible design patterns
- Mobile-first approach

## ✨ Features

### 🏠 **Home Page**

- **Organizer Gallery**: Browse festival organizers with attractive card layouts
- **Search Functionality**: Real-time search through organizer names
- **Responsive Grid**: Adaptive layout that works on all screen sizes

### 👤 **User Management**

- **User Registration & Login**: Authentication system with form validation
- **User Panel**: Administrative interface for managing user accounts
- **Profile Management**: Edit user information and preferences
- **Session Management**: Persistent login state

### 🎪 **Festival Management**

- **Organizer Profiles**: Detailed information about each festival organizer
- **Festival Listings**: Browse and search festivals by organizer
- **Event Details**: Comprehensive festival information including dates, locations, and descriptions
- **Festival Panel**: Administrative tools for festival management

### 🎨 **Design Features**

- **Custom Branding**: Unique VuEventsOrg brand identity with custom logo and colors
- **Typography**: Professional font combinations (Montserrat + Seymour One)
- **Color Scheme**: Vibrant yet professional color palette (Pink, Orange, Blue)
- **Responsive Design**: Mobile-first approach with Bootstrap grid system
- **Interactive Elements**: Hover effects, smooth transitions, and micro-interactions

## 🛠️ Technology Stack

### Frontend Technologies

- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Custom styling with modern layout techniques
- **JavaScript (Vanilla)**: Pure JavaScript without external libraries
- **Bootstrap 5.0.2**: Responsive framework and UI components

### Fonts & Icons

- **Montserrat**: Primary font family for body text
- **Seymour One**: Display font for branding
- **Bootstrap Icons**: Scalable vector icons

### Data Management

- **Mock Data System**: Local JSON data for development and demonstration
- **Firebase Ready**: Infrastructure prepared for Firebase integration (currently disabled)
- **XMLHttpRequest**: Native AJAX for data fetching

## 📁 Project Structure

```
vu-fest-org/
├── README.md                    # Project documentation
├── public/                      # Static assets
│   ├── css/
│   │   └── style.css           # Custom styles and theme
│   ├── data/
│   │   ├── data.json           # Static data for demonstration
│   │   └── mock-data.js        # Mock data service
│   └── img/                    # Images and logos
├── src/                        # Source code
│   ├── html/                   # HTML pages
│   │   ├── index.html          # Home page - organizer gallery
│   │   ├── organizer.html      # Organizer profile page
│   │   ├── festival.html       # Festival details page
│   │   ├── user-panel.html     # User management panel
│   │   ├── festival-panel.html # Festival management panel
│   │   └── error.html          # Error page
│   └── js/                     # JavaScript modules
│       ├── index.js            # Home page functionality
│       ├── organizer.js        # Organizer page logic
│       ├── festival.js         # Festival page functionality
│       ├── user-panel.js       # User management logic
│       ├── festival-panel.js   # Festival management
│       ├── authentication.js   # Login/registration system
│       └── error.js            # Error handling
```

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Vukotije/vu-fest-org.git
   cd vu-fest-org
   ```

2. **Open with local server** (recommended)

   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   ```

3. **Access the application**
   - With server: `http://localhost:8000/src/html/index.html`
   - Direct file: Open `src/html/index.html` in your browser

### 📱 Navigation

- **Home**: Browse all festival organizers
- **Organizer Pages**: View detailed organizer information and their festivals
- **User Panel**: Manage user accounts (admin functionality)
- **Festival Panel**: Manage festivals and events (admin functionality)

## 💾 Data Management

### Mock Data System

The application uses a comprehensive mock data system that simulates a real backend:

- **Organizers**: 6 sample festival organizers with complete profiles
- **Festivals**: Multiple festivals per organizer with detailed information
- **Users**: Sample user accounts for testing authentication
- **Fallback System**: Automatic fallback to mock data when Firebase is unavailable

### Firebase Integration (Currently Disabled)

The codebase includes Firebase integration infrastructure:

- **Realtime Database**: Configured for `wd-sv-67-2023-default-rtdb.firebaseio.com`
- **CRUD Operations**: Complete Create, Read, Update, Delete functionality
- **Error Handling**: Graceful fallback to mock data when Firebase is unavailable

> **Note**: Firebase services are currently disabled for this project. The application runs entirely on mock data, for demonstration purposes.

## 🎨 Design Philosophy

### Visual Identity

- **Logo**: Custom VuEventsOrg branding with colorful typography
- **Color Palette**:
  - Pink (#CC2E78) - Primary accent
  - Orange (#F28131) - Secondary accent
  - Blue (#02A0E0) - Tertiary accent
- **Typography**: Clean, modern font hierarchy

### User Experience

- **Intuitive Navigation**: Clear menu structure and breadcrumbs
- **Responsive Design**: Seamless experience across all devices
- **Loading States**: Smooth transitions and feedback
- **Error Handling**: User-friendly error messages and fallbacks

### Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmark elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: ARIA labels and descriptions
- **Color Contrast**: WCAG compliant color combinations

## 🌟 Key Learning Outcomes

This project demonstrates proficiency in:

1. **Modern Web Design**: Contemporary UI/UX patterns and best practices
2. **Responsive Development**: Mobile-first, cross-device compatibility
3. **JavaScript Fundamentals**: Vanilla JS without framework dependencies
4. **Bootstrap Framework**: Efficient use of Bootstrap components and grid system
5. **Code Organization**: Clean, maintainable code structure
6. **User Experience**: Intuitive navigation and interaction design
7. **Visual Design**: Color theory, typography, and layout principles

## 🚫 Firebase Status

**Important Notice**: Firebase integration is currently **disabled** and will likely remain so. The application is designed to work entirely with mock data, making it:

- ✅ **Self-contained**: No external dependencies or API keys required
- ✅ **Demonstration Ready**: Perfect for showcasing web design skills
- ✅ **Educational**: Great for learning frontend development concepts
- ✅ **Portable**: Easy to run on any system or hosting platform

## 📚 Academic Context

**Course**: Web Design, University of Novi Sad  
**Focus**: Frontend development and visual design principles  
**Objective**: Demonstrate modern web design techniques and responsive development skills  
**Assessment**: UI/UX quality, code organization, and design implementation

## 📄 License

This project is developed for educational purposes as part of a web design course. Feel free to use it as a reference for learning web development and design principles.
