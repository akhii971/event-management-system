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

function Homepage() {
  const productData = [
    {
      id: 1,
      title: "Concerts & Shows",
      description: "Experience electrifying live performances from top artists!",
      thumbnail:
        "https://static.vecteezy.com/system/resources/thumbnails/052/372/509/small_2x/a-crowd-at-a-concert-with-their-hands-up-free-video.jpg",
    },
    {
      id: 2,
      title: "Community & Fun Events",
      description: "Fun festivals for students, kids and families!",
      thumbnail:
        "https://www.shutterstock.com/image-photo/sydney-nsw-australia-february-19-600nw-2268247085.jpg",
    },
    {
      id: 3,
      title: "Tech & Hackathons",
      description: "Compete, innovate & build with the best tech minds!",
      thumbnail:
        "https://media.istockphoto.com/id/1321460515/video/hackathon-with-digital-technology-concept.jpg?s=640x640&k=20&c=w7uyTYchqQ43FuCF5ASi6bWW9dUDV-yQ1BXHSFxhQV0=",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredProducts = productData.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "220px",
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2600,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { centerPadding: "120px" } },
      { breakpoint: 1024, settings: { centerPadding: "60px" } },
      {
        breakpoint: 768,
        settings: { centerMode: false, centerPadding: "0px", slidesToShow: 1 },
      },
      {
        breakpoint: 480,
        settings: { centerMode: false, centerPadding: "0px", slidesToShow: 1 },
      },
    ],
  };

  const Carouselitems = [
    {
      id: 1,
      title: "Explore Tech Events",
      thumbnail:
        "https://img.freepik.com/premium-photo/photo-realistic-vector-illustration-remote-team-collaborating-software-dev-project-with-coding-t_980716-260452.jpg",
    },
    {
      id: 2,
      title: "Alan Walker Show",
      thumbnail:
        "https://cdn.siasat.com/wp-content/uploads/2025/04/image-6-1024x512.jpg",
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
      <div className="absolute inset-0 -z-10">
        <DarkVeil />
      </div>

      <Navvbar />

      {/* MAIN CONTENT CENTERED */}
      <div className="relative z-20 flex justify-center pb-20 pt-28 w-full">
        <div className="w-full max-w-7xl flex flex-col items-center px-4">

          {/* Heading */}
          <div className="text-center mt-2">
            <SplitText
              text="EXPLORE EXCITING EVENTS"
              className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-lg"
            />
          </div>

          {/* Search Bar */}
          <div className="mt-12 flex justify-center w-full">
            <Form className="flex items-center gap-2 w-[320px] sm:w-[420px] bg-black/40 border-2 border-purple-500 text-white p-2 rounded-full">
              <span className="text-purple-300 text-lg pl-1">🔍</span>
              <Form.Control
                type="search"
                placeholder="Search events..."
                className="bg-transparent text-white placeholder-purple-400 border-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form>
          </div>

          {/* ⭐ Carousel Centered */}
          <div className="w-full max-w-7xl mx-auto mt-14">
            <Slider {...settings}>
              {Carouselitems.map((p) => (
                <div key={p.id} className="px-6">
                  <div
                    className="group relative h-[350px] sm:h-[450px] lg:h-[500px] 
                    w-full rounded-3xl overflow-hidden cursor-pointer
                    bg-black/40 backdrop-blur-xl shadow-2xl transition-all 
                    hover:shadow-purple-500/80"
                  >
                    <img src={p.thumbnail} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent"></div>
                    <h3 className="absolute bottom-6 left-6 text-white font-semibold text-xl md:text-3xl drop-shadow-xl">
                      {p.title}
                    </h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* ⭐ Centered Cards */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-start w-full">
            {filteredProducts.map((p) => (
              <Card
                key={p.id}
                className="w-full max-w-xs bg-black/40 backdrop-blur-xl 
                border border-purple-500/30 rounded-3xl shadow-xl
                hover:shadow-purple-500/70 transition-all"
              >
                <div className="h-56 overflow-hidden rounded-t-3xl">
                  <Card.Img src={p.thumbnail} className="w-full h-full object-cover" />
                </div>
                <Card.Body className="p-5">
                  <Card.Title className="text-lg font-bold text-white mb-2">{p.title}</Card.Title>
                  <p className="text-gray-300 text-sm mb-3">{p.description}</p>
                  <Button
                    className="w-full rounded-full py-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold"
                    onClick={() => navigate(`/bookandexplore/${p.id}`)}
                  >
                    Book & Explore
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>

          <EventTeam />
          <ContactSection />

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Homepage;







