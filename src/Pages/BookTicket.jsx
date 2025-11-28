import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bookTicket } from "../redux/ticketSlice";
import Navvbar from "../components/Navvbar";
import Footer from "../components/Footer";
import { productData } from "./BookandExplore"; // 👈 import from your page

function BookTicket() {
  const { categoryId, eventId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const category = productData.find((c) => c.id === parseInt(categoryId));
  const event = category.events.find((e) => e.eventId === eventId);

  const [ticketType, setTicketType] = useState(event.price[0]);
  const [quantity, setQuantity] = useState(1);

  const totalPrice = ticketType.amount * quantity;

  const confirmBooking = () => {
    dispatch(
      bookTicket({
        id: Date.now(),
        category: category.title,
        event: event.name,
        ticketType: ticketType.type,
        quantity,
        totalPrice,
        date: event.date,
        location: event.location,
         banner: event.banner,
      })
    );

    navigate("/mytickets");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navvbar />

      <div className="pt-28 max-w-3xl mx-auto p-6">
        <div className="bg-black/50 border border-purple-500/40 rounded-2xl p-6">

          <img className="rounded-xl h-60 w-full object-cover" src={event.banner} alt={event.name} />

          <h1 className="text-3xl font-extrabold text-purple-400 mt-4">{event.name}</h1>

          <p className="text-gray-300 text-sm mt-1">
            📅 {event.date} {event.time && `• ⏱ ${event.time}`}
          </p>
          <p className="text-gray-400 text-sm">📍 {event.location}</p>

          <label className="text-purple-300 font-semibold mt-4 block">Ticket Type:</label>
          <select
            className="w-full p-2 bg-black/40 border border-purple-500/30 rounded-xl"
            value={ticketType.type}
            onChange={(e) =>
              setTicketType(event.price.find((ticket) => ticket.type === e.target.value))
            }
          >
            {event.price.map((ticket, i) => (
              <option key={i} value={ticket.type}>
                {ticket.type} — ₹{ticket.amount}
              </option>
            ))}
          </select>

          <label className="text-purple-300 font-semibold mt-4 block">Quantity:</label>
          <input
            type="number"
            className="w-full p-2 rounded-xl bg-black/40 border border-purple-500/30"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />

          <p className="text-purple-400 font-bold mt-3 text-lg">
            Total Price: ₹{totalPrice}
          </p>

          <button
            onClick={confirmBooking}
            className="w-full py-2 mt-5 rounded-full bg-purple-600 hover:bg-purple-500"
          >
            Confirm Booking 🎟
          </button>

          <button
            onClick={() => navigate(-1)}
            className="w-full py-2 mt-3 rounded-full bg-gray-700 hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BookTicket;
