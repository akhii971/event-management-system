import React, { useState, useRef, useEffect } from "react";
import GooeyNav from "./GooeyNav";
import { FaUserCircle, FaTicketAlt, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/Loginslice";

function Navvbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const user = useSelector((state) => state.login.user);

  const handleLogout = () => {
    dispatch(logout());
    setMenuOpen(false);
    navigate("/signin");
  };

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="w-full fixed top-2 left-0 z-50 px-6 sm:px-10 py-4">
      <div className="grid grid-cols-3 items-center w-full">

        {/* LEFT — add space so center can align perfectly */}
        <div className="hidden md:flex"></div>

        {/* CENTER MENU */}
        <div className="hidden md:flex justify-center">
          <GooeyNav
            items={[
              { label: "Home", href: "/" },
              { label: "About", href: "#About" },
              { label: "Contact", href: "#contact" },
            ]}
            initialActiveIndex={0}
          />
        </div>

        {/* RIGHT BUTTONS (Desktop) */}
        <div className="hidden md:flex justify-end items-center gap-4 text-white text-lg relative">

          <button
            onClick={() => navigate("/mytickets")}
            className="flex items-center gap-2 px-4 py-2 rounded-full 
                      bg-black/40 border border-purple-500/40 
                      hover:bg-purple-600 hover:border-purple-400
                      hover:shadow-[0_0_15px_#a855f7] transition-all duration-300"
          >
            <FaTicketAlt className="text-purple-300" />
            <span>My Tickets</span>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-full 
                       bg-black/40 border border-purple-500/40 
                       hover:bg-purple-600 hover:border-purple-400
                       hover:shadow-[0_0_15px_#a855f7] transition-all duration-300"
          >
            <FaUserCircle size={22} className="text-purple-300" />
            <span>{isLoggedIn ? user?.name : "Account"}</span>
          </button>

          {/* Account Dropdown */}
          {menuOpen && (
            <div
              ref={menuRef}
              className="absolute top-14 right-0 w-48 bg-black/60 backdrop-blur-xl 
              border border-purple-500/30 rounded-xl shadow-lg p-3 
              animate-fadeSlide text-sm text-white"
            >
              <ul className="space-y-2">
                {!isLoggedIn ? (
                  <>
                    <li><a href="/signup">Signup</a></li>
                    <li><a href="/signin">Signin</a></li>
                  </>
                ) : (
                  <>
                    <li><a href="/profile">Profile</a></li>
                    <li><button onClick={handleLogout}>Logout</button></li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex justify-end">
          <button
            className="text-white text-2xl"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU --------------------- */}
      {mobileMenu && (
        <div className="md:hidden bg-black/80 backdrop-blur-xl border border-purple-500/30 mt-3 p-4 rounded-xl text-white text-center space-y-4 animate-fadeSlide">

          <a href="/" className="block py-2">Home</a>
          <a href="#About" className="block py-2">About</a>
          <a href="#contact" className="block py-2">Contact</a>

          {isLoggedIn ? (
            <>
              <a href="/profile" className="block py-2">Profile</a>
              <a href="/mytickets" className="block py-2">My Tickets</a>
              <button className="block w-full py-2 bg-red-600 rounded-lg" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <a href="/signup" className="block py-2 bg-purple-600 rounded-lg">Signup</a>
              <a href="/signin" className="block py-2 bg-purple-600 rounded-lg">Signin</a>
            </>
          )}

        </div>
      )}

    </div>
  );
}

export default Navvbar;





