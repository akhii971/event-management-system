import React, { useEffect, useRef } from "react";

function Footer() {
  const footerRef = useRef(null);

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footerRef.current.classList.add("footer-reveal");
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
   <footer
  ref={footerRef}
  className="
    w-full bg-black text-white
  border-t border-purple-600/40
    transition-all duration-700 opacity-0 scale-95 footer-animate
  "
>
      {/* Content Container */}
      <div className="w-full px-8 lg:px-16 py-10 max-w-[1800px] mx-auto">


        
       {/* Footer Column Grid */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 text-xs sm:text-sm">

  <div>
    <h4 className="font-semibold mb-3 text-purple-300">About ABCD Event</h4>
    <ul className="space-y-2 text-gray-300">
      <li className="underline-hover cursor-pointer">Press</li>
      <li className="underline-hover cursor-pointer">We are hiring!</li>
      <li className="underline-hover cursor-pointer">Sponsors & Partners</li>
      <li className="underline-hover cursor-pointer">Help Center</li>
    </ul>
  </div>

  <div>
    <h4 className="font-semibold mb-3 text-purple-300">Partner with us</h4>
    <ul className="space-y-2 text-gray-300">
      <li className="underline-hover cursor-pointer">College Clubs</li>
      <li className="underline-hover cursor-pointer">List your event</li>
      <li className="underline-hover cursor-pointer">Corporate bookings</li>
      <li className="underline-hover cursor-pointer">Student Ambassador Program</li>
    </ul>
  </div>

  <div>
    <h4 className="font-semibold mb-3 text-purple-300">Business</h4>
    <ul className="space-y-2 text-gray-300">
      <li className="underline-hover cursor-pointer">Event Tickets</li>
      <li className="underline-hover cursor-pointer">Gift Cards</li>
    </ul>
  </div>

  <div>
    <h4 className="font-semibold mb-3 text-purple-300">Discover</h4>
    <ul className="space-y-2 text-gray-300">
      <li className="underline-hover cursor-pointer">Tech Festivals</li>
      <li className="underline-hover cursor-pointer">Music Concerts</li>
    </ul>
  </div>

  <div>
    <h4 className="font-bold text-sm mb-3 text-purple-300">Live Your City</h4>
    <p className="text-gray-400 text-[11px] mb-4">
      Discover unforgettable experiences near you!
    </p>
    <div className="space-y-3">
      <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" className="h-9 cursor-pointer" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" className="h-9 cursor-pointer" />
    </div>
  </div>

  {/* Follow Us — moved to last */}
  <div >
    <h4 className="font-semibold mb-3 text-purple-300">Follow us</h4>
    <ul className="space-y-3 text-gray-300">
      <li className="flex items-center gap-2 underline-hover cursor-pointer" >
        <i className="fa-brands fa-facebook"></i> Facebook
      </li>
      <li className="flex items-center gap-2 underline-hover cursor-pointer" style={{marginLeft:"20px"}}>
        <i className="fa-brands fa-x-twitter"></i> Twitter
      </li>
      <li className="flex items-center gap-2 underline-hover cursor-pointer">
        <i className="fa-brands fa-instagram"></i> Instagram
      </li>
      <li className="flex items-center gap-2 underline-hover cursor-pointer" style={{marginLeft:"20px"}}>
        <i className="fa-brands fa-tiktok"></i> TikTok
      </li>
    </ul>
  </div>

</div>

        

        {/* Copyright */}
        <div className="mt-10 pt-4 text-center text-[11px] text-gray-500">
          <div className="flex justify-center gap-4 mb-2">
            <span className="underline-hover cursor-pointer hover:text-purple-300">Terms of Use</span>
            |
            <span className="underline-hover cursor-pointer hover:text-purple-300">Privacy Policy</span>
            |
            <span className="underline-hover cursor-pointer hover:text-purple-300">Cookies</span>
          </div>

          © {new Date().getFullYear()} ABCD Events — All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;

