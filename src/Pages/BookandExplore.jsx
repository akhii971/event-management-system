import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navvbar from "@/components/Navvbar";
import Footer from "@/components/Footer";

export const productData = [
  {
    id: 1,
    title: "Concerts & Shows",
    description: "Experience electrifying live performances from top artists!",
    thumbnail:
      "https://static.vecteezy.com/system/resources/thumbnails/052/372/509/small_2x/a-crowd-at-a-concert-with-their-hands-up-free-video.jpg",

    events: [
      {
        eventId: "C1",
        name: "Arijit Singh Live Concert",
        date: "Jan 28, 2025",
        time: "7:00 PM",
        location: "Wankhede Stadium, Mumbai",
        banner: "https://images.news18.com/ibnlive/uploads/2025/03/MixCollage-27-Mar-2025-04-27-PM-7101-2025-03-d0d8043335f19225f216cde07187828f.jpg",
        price: [
          { type: "Regular", amount: 999 },
          { type: "VIP", amount: 2999 },
          { type: "VVIP", amount: 6999 }
        ],
        seatsAvailable: 250,
        organizer: "Live Nation Events"
      },
      {
        eventId: "C2",
        name: "Alan Walker EDM Night",
        date: "Feb 15, 2025",
        time: "8:30 PM",
        location: "Bangalore Arena",
        banner:
          "https://cdn.siasat.com/wp-content/uploads/2025/04/image-6-1024x512.jpg",
        price: [
          { type: "General", amount: 1199 },
          { type: "Fan Zone", amount: 2499 },
          { type: "Backstage Pass", amount: 8999 }
        ],
        seatsAvailable: 180,
        organizer: "Sunburn Live"
      },
      {
        eventId: "C3",
        name: "Shreya Ghoshal Musical Night",
        date: "Mar 12, 2025",
        time: "6:00 PM",
        location: "Chennai Stadium",
        banner:
          "https://www.iwmbuzz.com/wp-content/uploads/2025/05/pictures-can-only-do-a-little-justice-to-what-we-felt-last-night-shreya-ghoshal-on-her-electrifying-mumbai-concert-6-920x518.jpg",
        price: [
          { type: "Balcony", amount: 699 },
          { type: "Premium", amount: 1999 }
        ],
        seatsAvailable: 500,
        organizer: "Music Waves India"
      },
      {
        eventId: "C4",
        name: "KK Tribute Night",
        date: "Apr 09, 2025",
        time: "7:30 PM",
        location: "YMCA Stadium, Chennai",
        banner:
          "https://s3.ap-south-1.amazonaws.com/townscript-production/images/2baa5602-1fb7-432c-9881-0661b90790d8.jpg",
        price: [
          { type: "Silver", amount: 499 },
          { type: "Gold", amount: 1499 },
          { type: "Platinum", amount: 3499 }
        ],
        seatsAvailable: 320,
        organizer: "Music Legends Club"
      }
    ]
  },

  {
    id: 2,
    title: "Community & Fun Events",
    description: "Fun festivals for students, kids and families!",
    thumbnail:
      "https://www.shutterstock.com/image-photo/sydney-nsw-australia-february-19-600nw-2268247085.jpg",

    events: [
      {
        eventId: "F1",
        name: "Chennai Food Festival",
        date: "Mar 10–14, 2025",
        location: "Marina Beach, Chennai",
        banner:
          "https://img.freepik.com/premium-photo/street-food-festival-night-view_862994-25040.jpg",
        price: [{ type: "Entry Pass", amount: 49 }],
        seatsAvailable: "Unlimited",
        organizer: "Foodies Hub Community"
      },
      {
        eventId: "F2",
        name: "Family Fun Carnival",
        date: "Jan 20, 2025",
        time: "10:00 AM",
        location: "City Central Park",
        banner:
          "https://png.pngtree.com/background/20250521/original/pngtree-labor-day-community-celebration-with-colorful-tents-and-banners-picture-image_16519888.jpg",
        price: [
          { type: "Child", amount: 99 },
          { type: "Adult", amount: 199 }
        ],
        seatsAvailable: 1000,
        organizer: "Town Council"
      },
      {
        eventId: "F3",
        name: "Cosplay Costume Parade",
        date: "Apr 05, 2025",
        location: "Forum Mall, Hyderabad",
        banner:
          "https://live.staticflickr.com/771/22312874740_1d2bbf490c_b.jpg",
        price: [
          { type: "Participant", amount: 299 },
          { type: "Viewer", amount: 49 }
        ],
        seatsAvailable: 300,
        organizer: "Otaku Club India"
      },
      {
        eventId: "F4",
        name: "Summer Water Splash Fest",
        date: "May 02, 2025",
        time: "11:00 AM",
        location: "WonderLa Water Park, Bangalore",
        banner:
          "https://img.freepik.com/premium-photo/water-park-with-colorful-slides-happy-people-enjoying-warm-day-generative-ai_791316-32009.jpg",
        price: [
          { type: "Kids", amount: 149 },
          { type: "Adults", amount: 249 }
        ],
        seatsAvailable: 2000,
        organizer: "WonderLa Group"
      }
    ]
  },

  {
    id: 3,
    title: "Tech & Hackathons",
    description: "Compete, innovate & build with the best tech minds!",
    thumbnail:
      "https://media.istockphoto.com/id/1321460515/video/hackathon-with-digital-technology-concept.jpg",

    events: [
      {
        eventId: "T1",
        name: "Code Battle Hackathon 2025",
        date: "Feb 1–2, 2025",
        location: "Tech Auditorium, Pune",
        banner:
          "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/68fa65138d9be_code-battle.png?d=700x400",
        price: [
          { type: "Individual", amount: 499 },
          { type: "Team", amount: 1499 }
        ],
        seatsAvailable: 60,
        organizer: "Google Developer Group"
      },
      {
        eventId: "T2",
        name: "AI & Robotics Expo",
        date: "Mar 8–10, 2025",
        location: "NIT Trichy Campus",
        banner:
          "https://static.wixstatic.com/media/c76346_2f8d82ddab3a4db8beae0eaba49d6515~mv2.jpg/v1/fill/w_824,h_720,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/947_edited.jpg",
        price: [{ type: "Entry", amount: 199 }],
        seatsAvailable: 400,
        organizer: "NIT Robotics Club"
      },
      {
        eventId: "T3",
        name: "Ethical Hacking Workshop",
        date: "Jan 11, 2025",
        location: "IIT Hyderabad",
        banner:
          "https://t4.ftcdn.net/jpg/02/05/93/21/360_F_205932110_IWiDmketVT703mNPZ8eSn76Sa25QoSYw.jpg",
        price: [{ type: "Entry Pass", amount: 399 }],
        seatsAvailable: 120,
        organizer: "CyberSec India"
      },
      {
        eventId: "T4",
        name: "Blockchain Bootcamp",
        date: "Apr 15, 2025",
        location: "TCS Auditorium, Mumbai",
        banner:
          "https://egyptinnovate.com/sites/default/files/Cairo%20Blockchain%20bootcamp.jpg",
        price: [
          { type: "Basic", amount: 899 },
          { type: "Pro", amount: 1999 }
        ],
        seatsAvailable: 150,
        organizer: "Web3 India Core"
      }
    ]
  }
];


function BookandExplore() {
  const { id } = useParams();
  const navigate = useNavigate();

  const category = productData.find((p) => p.id === parseInt(id));

  if (!category) {
    return (
      <div className="text-white text-center pt-40">
        <h1 className="text-2xl font-bold">Category Not Found</h1>
      </div>
    );
  }

  return (
    
    <div className="min-h-screen bg-black text-white">
    <Navvbar />

    <div className="pt-32 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-400 text-center mb-12 drop-shadow-lg">
        {category.title}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-28">
        {category.events.map((event, index) => (
          <div
            key={index}
            className="group bg-black/50 border border-purple-500/40 rounded-3xl 
            shadow-lg shadow-purple-900/40 overflow-hidden 
            hover:scale-[1.02] hover:shadow-purple-500/60 
            transition-all duration-500"
          >
            {/* Banner */}
            <div className="h-60 sm:h-72 w-full overflow-hidden">
              <img
                src={event.banner}
                alt={event.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              />
            </div>

            {/* Content */}
            <div className="p-6 space-y-2">
              <h2 className="text-xl font-bold text-white drop-shadow-md">
                {event.name}
              </h2>

              <p className="text-purple-300 text-sm font-medium">
                📅 {event.date}  
                {event.time && <span className="ml-2">⏱ {event.time}</span>}
              </p>

              <p className="text-gray-300 text-sm">📍 {event.location}</p>

              <p className="text-xs text-gray-400">
                🏢 Organizer: {event.organizer}
              </p>

              <p className="text-xs text-gray-400">
                🎟 Seats Available: {event.seatsAvailable}
              </p>

              {/* Ticket Pricing */}
              <div className="mt-3">
                <h3 className="text-purple-300 font-semibold text-sm mb-2">
                  Ticket Pricing
                </h3>

                <ul className="space-y-1 text-gray-300 text-sm">
                  {event.price.map((ticket, i) => (
                    <li key={i} className="flex justify-between">
                      <span>{ticket.type}</span>
                      <span className="text-purple-400 font-semibold">
                        ₹{ticket.amount}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
  onClick={() => navigate(`/bookticket/${category.id}/${event.eventId}`)}
  className="mt-5 w-full bg-purple-600 hover:bg-purple-500 
  rounded-full py-2 font-semibold hover:shadow-[0_0_20px_#a855f7]
  transition-all"
>
  Book Ticket
</button>
            </div>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="text-center pb-10">
        <button
          onClick={() => navigate("/")}
          className="bg-purple-700 hover:bg-purple-500 px-6 py-3 rounded-full 
          transition font-semibold shadow-lg"
        >
          ← Back To Home
        </button>
      </div>
    </div>

  </div>
  );
}

export default BookandExplore;
