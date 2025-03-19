import React, { useState, useEffect, useRef } from "react";
import { useCartStore } from "../store/Store"; // ใช้ useCartStore จาก Zustand
import { Link } from "react-router";
const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart } = useCartStore(); // ใช้ hook จาก Zustand store

  const cartRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // ตรวจสอบการเลื่อนหน้าจอ
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }

      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // คำนวณจำนวนสินค้าทั้งหมดในตะกร้า
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // ใช้ inline style เพื่อควบคุมพื้นหลัง Navbar
  const backgroundColor = isScrolled ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,1)";

  return (
    <div
      className="navbar shadow-sm fixed top-0 w-full z-10 transition-all duration-300"
      style={{ backgroundColor }}
    >
      <div className="flex-1">
        <Link to='/'> <a className="btn btn-ghost text-xl" aria-label="Protein Diet24">
          Protein Diet24
        </a></Link>
      </div>

      <div className="hidden md:flex flex-1 justify-center join flex gap-4">
        <Link to='/order'> <button className="join-item btn btn-secondary" aria-label="สั่งข้าว">
          สั่งข้าว
        </button></Link>
        <Link to='/drink'> <button className="join-item btn btn-ghost" aria-label="สั่งน้ำ">
          สั่งน้ำ
        </button></Link>
        <Link to='/other'><button className="join-item btn btn-ghost" aria-label="อื่นๆ">
          อื่นๆ
        </button></Link>
      </div>

      <div className="flex-none md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="btn btn-ghost text-xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div className={`flex-none flex gap-4 ${menuOpen ? "hidden" : ""}`}>
        <div ref={cartRef} className="dropdown dropdown-end">
          <button
            onClick={() => setCartOpen(!cartOpen)}
            className="btn btn-ghost btn-circle"
            aria-label="Cart"
          >
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            {totalItems > 0 && (
              <span className="badge badge-sm indicator-item">{totalItems}</span>
            )}
          </button>
          {cartOpen && (
            <div className="card card-compact dropdown-content bg-base-100 z-10 mt-3 w-52 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">{totalItems} Items</span>
                <span className="text-info">Subtotal: ฿{totalPrice}</span>
                <div className="card-actions">
                  <Link to='/shop'><button className="btn btn-primary btn-block">View cart</button></Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <div ref={profileRef} className="dropdown dropdown-end">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="btn btn-ghost btn-circle avatar"
            aria-label="User Profile"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User Profile"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDH2ElUvwbeCZYMXqLRqlGzsKFjC3s8Sl-UA&s"
              />
            </div>
          </button>
          {profileOpen && (
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          )}
        </div>
      </div>

      {
        menuOpen && (
          <div
            className="absolute top-16 left-0 right-0 bg-base-100 shadow-lg p-4 md:hidden"
            style={{ opacity: isScrolled ? 0.7 : 1 }}
          >
            <ul>
              <li>
                <a className="block py-2" onClick={() => alert("Order Food Clicked!")}>
                  Order Food
                </a>
              </li>
              <li>
                <a className="block py-2" onClick={() => alert("Order Drinks Clicked!")}>
                  Order Drinks
                </a>
              </li>
              <li>
                <a className="block py-2" onClick={() => alert("Others Clicked!")}>
                  Others
                </a>
              </li>
            </ul>
          </div>
        )
      }
    </div >
  );
};

export default Navbar;
