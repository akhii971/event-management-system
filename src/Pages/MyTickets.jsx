import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navvbar from "../components/Navvbar";
import Footer from "../components/Footer";

function MyTickets() {
  const bookedTickets = useSelector((state) => state.tickets.bookedTickets);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navvbar />

      <div className="pt-28 max-w-5xl mx-auto px-6 pb-20">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-400 mb-10 text-center drop-shadow-md">
          🎟 My Tickets
        </h1>

        {bookedTickets.length === 0 ? (
          <p className="text-gray-400 text-center text-lg">No tickets booked yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {bookedTickets.map((t, i) => (
              <div
                key={i}
                className="bg-black/50 border border-purple-500/40 rounded-2xl
                         shadow-lg hover:shadow-purple-500/60 
                         transition-all duration-300 overflow-hidden"
              >
                {/* Banner */}
                <img
                  src={t.banner}
                  alt={t.eventName}
                  className="w-full h-40 object-cover"
                />

                <div className="p-5 space-y-2">
                  <h2 className="text-lg font-bold text-white">
                    {t.eventName}
                  </h2>

                  <p className="text-purple-300 text-sm">
                    📅 {t.date}
                  </p>

                  <p className="text-gray-300 text-sm">📍 {t.location}</p>

                  <p className="text-gray-300 text-sm">
                    🎟 {t.ticketType} × {t.quantity}
                  </p>

                  <p className="text-purple-400 font-bold text-lg mt-2">
                    ₹ {t.totalPrice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Back to Home button */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/")}
            className="bg-purple-700 hover:bg-purple-500 px-6 py-3 rounded-full 
                       transition font-semibold shadow-lg"
          >
            ← Back To Home
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default MyTickets;


