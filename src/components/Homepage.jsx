import React, { useState } from "react";
import DarkVeil from "./DarkVeil";
import Navvbar from "./Navvbar";
import SplitText from "./SplitText";
import { Button, Card, Form } from "react-bootstrap";
import Slider from "react-slick";

// Slick carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactSection from "./ContactSection";
import EventTeam from "./EventTeam";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Homepage() {
   const productData = [
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
        banner:
          "https://upload.wikimedia.org/wikipedia/commons/5/5e/Arijit_Singh_2014.jpg",
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
        banner: "https://cdn.siasat.com/wp-content/uploads/2025/04/image-6-1024x512.jpg",
        price: [
          { type: "General", amount: 1199 },
          { type: "Fan Zone", amount: 2499 },
          { type: "Backstage Pass", amount: 8999 }
        ],
        seatsAvailable: 180,
        organizer: "Sunburn Live"
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
        banner: "https://img.freepik.com/premium-photo/street-food-festival-night-view_862994-25040.jpg",
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
      }
    ]
  },

  {
    id: 3,
    title: "Tech & Hackathons",
    description: "Compete, innovate & build with the best tech minds!",
    thumbnail:
      "https://media.istockphoto.com/id/1321460515/video/hackathon-with-digital-technology-concept.jpg?s=640x640&k=20&c=w7uyTYchqQ43FuCF5ASi6bWW9dUDV-yQ1BXHSFxhQV0=",

    events: [
      {
        eventId: "T1",
        name: "Code Battle Hackathon 2025",
        date: "Feb 1–2, 2025",
        location: "Tech Auditorium, Pune",
        banner:
          "https://img.freepik.com/premium-photo/group-programmers-writing-code-hackathon_1097104-666.jpg",
        price: [
          { type: "Individual", amount: 499 },
          { type: "Team", amount: 1499 }
        ],
        seatsAvailable: 60,
        organizer: "Google Developer Group"
      }
    ]
  }
];


  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = productData.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const navigate=useNavigate();
  


  // Carousel settings
const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true
};


  const Carouselitems = [
    {
      id: 1,
      title: "Explore Tech Events",
      thumbnail:
        "https://img.freepik.com/premium-photo/photo-realistic-vector-illustration-remote-team-collaborating-software-dev-project-with-coding-t_980716-260452.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      id: 2,
      title: "Alan Walker Show",
      thumbnail: "https://cdn.siasat.com/wp-content/uploads/2025/04/image-6-1024x512.jpg",
    },
    {
      id: 3,
      title: "Community & Fun Events",
      thumbnail:
        "https://png.pngtree.com/background/20250521/original/pngtree-labor-day-community-celebration-with-colorful-tents-and-banners-picture-image_16519888.jpg",
    },
  ];

  return (
    <div className="relative w-full min-h-screen">
      {/* Background */}
       <div className="relative w-full min-h-screen">
    <div className="absolute inset-0 -z-10">
            <DarkVeil />
          </div>

      {/* Navbar */}
      <Navvbar />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center px-4 pb-20 pt-28">
        {/* Heading */}
        <div className="text-center mt-2">
          <SplitText
            text="EXPLORE EXCITING EVENTS"
            className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-lg"
          />
        </div>
             {/* Search Bar */}
        <div className="mt-12 flex justify-center w-full">
          <Form
            className="flex items-center gap-2 w-[320px] sm:w-[420px] bg-black/40 border-2 border-purple-500 text-white 
                       p-2 rounded-full hover:shadow-purple-500/60 transition-all duration-300"
          >
            <span className="text-purple-300 font-bold pl-1 text-lg">🔍</span>
            <Form.Control
              type="search"
              placeholder="Search events..."
              className="bg-transparent text-white placeholder-purple-300 border-none shadow-none text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form>
        </div>

        {/* Carousel */}
        <div className="w-full max-w-[1800px] mt-14">
          <Slider {...settings}>
            {Carouselitems.map((p) => (
              <div key={p.id} className="px-6">
               <div
  className="
    group relative 
    h-[300px] sm:h-[400px] lg:h-[500px] 
    w-full rounded-3xl 
    overflow-hidden cursor-pointer
    bg-black/40 backdrop-blur-xl shadow-2xl
    transition-shadow duration-700 ease-out
    hover:shadow-purple-500/80
  "
>

                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-b
                               from-black/80 via-black/30 to-transparent
                               group-hover:from-purple-700/60 
                               transition-all duration-500"
                  />

                  <h3 className="absolute bottom-6 left-6 text-white font-bold text-3xl drop-shadow-xl group-hover:text-purple-200">
                    {p.title}
                  </h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>

   

        {/* Cards */}
        <div className="mt-14 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 justify-items-center">
          {filteredProducts.map((p) => (
            <Card
              key={p.id}
              style={{ width: "23rem" }}
              className="bg-black/40 backdrop-blur-xl border border-purple-500/40 rounded-3xl shadow-xl 
                         hover:shadow-purple-500/80 transition-shadow duration-500 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Card.Img src={p.thumbnail} className="w-full h-full object-cover" />
              </div>

              <Card.Body className="p-6">
                <Card.Title className="text-xl font-bold text-white mb-2">
                  {p.title}
                </Card.Title>

                <p className="text-gray-300 text-sm mb-3">
                  {p.description}
                </p>

                <Button
                  className="w-full font-semibold text-white rounded-full py-2 bg-purple-600 hover:bg-purple-500 
                             hover:shadow-purple-500/60 transition-all duration-300"
                             onClick={()=> navigate(`/bookandexplore/${p.id}`)}
                >
                  Book and Explore
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        
           {/* Event Team Section */}
            <EventTeam />

        {/* Contact Section */}
         
         <ContactSection />

          {/* Footer  */}
          

     
      </div>
       <Footer />
    </div>
    </div>
  );
}

export default Homepage;






