# คู่มือการติดตั้งและพัฒนาโปรเจค Landing Page (Installation and Development Guide)

## 🇹🇭 ภาษาไทย

### ข้อกำหนดเบื้องต้น (Prerequisites)
- Node.js เวอร์ชั่น 18.0.0 หรือสูงกว่า
- npm หรือ yarn package manager

### การติดตั้ง (Installation)

1. **โคลนโปรเจค**
```bash
git clone <repository-url>
cd LandingPage
```

2. **ติดตั้ง Dependencies**
```bash
npm install
# หรือ
yarn install
```

### คำสั่งที่ใช้ในการพัฒนา (Development Commands)

- **เริ่มต้นการพัฒนา:**
```bash
npm run dev
```
เซิร์ฟเวอร์จะทำงานที่ `http://localhost:5173`

- **สร้างไฟล์สำหรับการ Deploy:**
```bash
npm run build
```

- **ตรวจสอบ Code Style:**
```bash
npm run lint
```

### โครงสร้างโปรเจค (Project Structure)

```
LandingPage/
├── src/
│   ├── Layouts/
│   │   └── Main.tsx        # เลย์เอาท์หลักของแอพพลิเคชั่น
│   │   ├── Pages/
│   │   │   ├── Home.tsx        # หน้าหลัก
│   │   │   ├── Shop.tsx        # หน้าร้านค้า
│   │   │   ├── Order.tsx       # หน้าสั่งซื้อ
│   │   │   ├── Drink.tsx       # หน้าเครื่องดื่ม
│   │   │   └── Other.tsx       # หน้าอื่นๆ
│   │   └── routes/
│   │       └── index.tsx       # การกำหนดเส้นทาง (Routes)
│   ├── public/                 # ไฟล์ static
│   └── package.json           # รายการ dependencies
```

### เทคโนโลยีที่ใช้ (Technologies)

- **Frontend Framework:** React + TypeScript
- **Routing:** React Router
- **Styling:** Tailwind CSS + DaisyUI
- **Animation:** Framer Motion
- **State Management:** Zustand
- **Build Tool:** Vite
- **QR Code:** qrcode.react
- **UI Components:** HeroIcons
- **Notifications:** SweetAlert2

---

## 🇬🇧 English

### Prerequisites
- Node.js version 18.0.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the project**
```bash
git clone <repository-url>
cd LandingPage
```

2. **Install Dependencies**
```bash
npm install
# or
yarn install
```

### Development Commands

- **Start Development Server:**
```bash
npm run dev
```
Server will run at `http://localhost:5173`

- **Build for Production:**
```bash
npm run build
```

- **Lint Code:**
```bash
npm run lint
```

### Project Structure

```
LandingPage/
├── src/
│   ├── Layouts/
│   │   └── Main.tsx        # Main application layout
│   │   ├── Pages/
│   │   │   ├── Home.tsx        # Home page
│   │   │   ├── Shop.tsx        # Shop page
│   │   │   ├── Order.tsx       # Order page
│   │   │   ├── Drink.tsx       # Drinks page
│   │   │   └── Other.tsx       # Other pages
│   │   └── routes/
│   │       └── index.tsx       # Route definitions
│   ├── public/                 # Static files
│   └── package.json           # Dependencies list
```

### Technologies Used

- **Frontend Framework:** React + TypeScript
- **Routing:** React Router
- **Styling:** Tailwind CSS + DaisyUI
- **Animation:** Framer Motion
- **State Management:** Zustand
- **Build Tool:** Vite
- **QR Code:** qrcode.react
- **UI Components:** HeroIcons
- **Notifications:** SweetAlert2

### Available Routes

- `/` - Home page
- `/shop` - Shop page
- `/order` - Order page
- `/drink` - Drinks page
- `/other` - Other content page

### Best Practices

1. Use TypeScript for type safety
2. Follow the existing routing structure for new pages
3. Utilize Tailwind CSS for styling
4. Use Framer Motion for smooth animations
5. Implement state management with Zustand when needed
6. Follow ESLint rules for code consistency

---

หากมีคำถามหรือต้องการความช่วยเหลือเพิ่มเติม สามารถติดต่อทีมพัฒนาได้
(If you have any questions or need additional help, please contact the development team)

# คู่มือการใช้งานเว็บไซต์ขายสินค้า (E-commerce Website User Guide)

## 🇹🇭 ภาษาไทย

### การใช้งานสำหรับผู้ซื้อ

#### 1. การเลือกซื้อสินค้า
- เลือกดูสินค้าในหน้าแรกของเว็บไซต์
- คลิกที่สินค้าเพื่อดูรายละเอียดเพิ่มเติม
- กดปุ่ม "เพิ่มลงตะกร้า" เพื่อเพิ่มสินค้าลงในตะกร้า

#### 2. การจัดการตะกร้าสินค้า
- คลิกที่ไอคอนตะกร้าที่มุมขวาบนเพื่อดูสินค้าในตะกร้า
- สามารถปรับจำนวนสินค้าได้โดยใช้ปุ่ม + และ -
- กดปุ่ม "ลบ" เพื่อนำสินค้าออกจากตะกร้า
- ยอดรวมจะคำนวณอัตโนมัติตามจำนวนสินค้า

#### 3. การชำระเงิน
- กดปุ่ม "สร้างใบเสร็จและ QR Code" เพื่อดูใบเสร็จและ QR Code สำหรับชำระเงิน
- สแกน QR Code ด้วยแอพธนาคารของท่านเพื่อชำระเงิน
- หลังชำระเงินเสร็จ กดปุ่ม "✕" เพื่อกลับไปหน้าหลัก

### ข้อแนะนำเพิ่มเติม
- ตรวจสอบราคาและจำนวนสินค้าให้ถูกต้องก่อนชำระเงิน
- เก็บหลักฐานการชำระเงินไว้ทุกครั้ง
- หากมีปัญหาในการใช้งาน กรุณาติดต่อเจ้าหน้าที่

## 🇬🇧 English

### Customer Guide

#### 1. Shopping
- Browse products on the homepage
- Click on products to view details
- Click "Add to Cart" to add items to your shopping cart

#### 2. Cart Management
- Click the cart icon in the top right corner to view your cart
- Adjust quantities using + and - buttons
- Click "Remove" to remove items from cart
- Total amount updates automatically based on quantities

#### 3. Payment
- Click "Generate Receipt and QR Code" to view receipt and payment QR Code
- Scan the QR Code with your banking app to make payment
- After payment, click "✕" to return to main page

### Additional Tips
- Double-check prices and quantities before payment
- Keep payment confirmation for your records
- Contact support if you encounter any issues

## ข้อกำหนดทางเทคนิค (Technical Requirements)

### ความต้องการของระบบ
- เว็บเบราว์เซอร์ที่รองรับ: Chrome, Firefox, Safari, Edge เวอร์ชันล่าสุด
- การเชื่อมต่ออินเทอร์เน็ตที่เสถียร
- แอพธนาคารที่รองรับการสแกน QR Code

### System Requirements
- Supported browsers: Latest versions of Chrome, Firefox, Safari, Edge
- Stable internet connection
- Banking app with QR Code scanning capability
