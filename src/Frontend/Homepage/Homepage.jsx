import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import logo from "../../assets/logo.png";
import group_chat from "../../assets/group_chat.jpg";
import diary02 from "../../assets/diary02.png";
import goal_tracking from "../../assets/goal_tracking.png";
import diary01 from "../../assets/diary01.jpg";
import chat from "../../assets/chat.jpg";

function Homepage() {
  const navigate = useNavigate();

  let [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
      });
    };

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    showSlide(currentIndex);
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const elements = document.querySelectorAll(".s11, .s22, .info");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="navbar_left">
          <div>
            <img src={logo} alt="Halcyon" id="logo" />
          </div>
          <div>Home</div>
          <div onClick={() => navigate("/contact_us")}>Contact Us</div>
          <div onClick={() => navigate("/about_us")}>About Us</div>
        </div>
        <div className="navbar_right">
          <div className="sign_in_btn" onClick={() => navigate("/sign_in")}>
            Sign In
          </div>
        </div>
      </div>

      <div className="heading">
        <div className="heading-content">
          <h1>Halcyon - Your Space for Connection and Reflection</h1>
          <h3>
            Chat with friends, share how you feel, and nurture your inner self
            with a secure, personal diary.
          </h3>
        </div>
      </div>

      <div className="services">
        <h1>Our Services</h1>
        <div className="service-1">
          <div className="s11">
            <h2>Chatting Space</h2>
            <p>
              Connect with people worldwide in a customizable messaging
              environment. Share your mood, send gift boxes, and exchange
              stories effortlessly.
            </p>
          </div>
          <div className="s22">
            <img src={chat} alt="Chatting space" />
          </div>
        </div>

        <div className="service-2">
          <div className="s22">
            <img src={diary01} alt="Digital diary" />
          </div>
          <div className="s11">
            <h2>Digital Diary</h2>
            <p>
              Write and protect your digital journal entries with passwords. Add
              images, videos, categorize entries, and track your goals
              seamlessly.
            </p>
          </div>
        </div>
      </div>

      <div className="features">
        <h1>Key Features</h1>
        <div className="slider">
          <div className="slide">
            <img src={group_chat} alt="" />
            <div className="text">
              <h2>Global Connectivity</h2>
              <p>
                Experience seamless global connectivity through our interactive
                chat platform. Stay connected with the world.
              </p>
            </div>
          </div>

          <div className="slide">
            <img src={diary02} alt="" />
            <div className="text">
              <h2>Private Diary Entries</h2>
              <p>
                Keep your thoughts secure with private diary entries. Write,
                edit, and customize your digital journey effortlessly.
              </p>
            </div>
          </div>

          <div className="slide">
            <img src={goal_tracking} alt="" />
            <div className="text">
              <h2>Goal Tracking System</h2>
              <p>
                Track and accomplish your goals effectively with our goal
                tracking system integrated into the diary feature. Stay focused.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="info">
        <h2>What we stand for?</h2>
        <p>
          Welcome to Halcyon - Your ultimate digital sanctuary offering two
          unique platforms - Converse and Diary. Connect with individuals
          worldwide through our innovative chatting space with features like
          scheduled messaging, customizable gift boxes, mood sharing, and
          engaging stories. Securely document your thoughts, memories, and
          goals in our versatile digital diary, complete with password
          protection, media integration, and easy editing capabilities.
        </p>
      </div>

      <div className="footer">
        <h3>HALCYON</h3>
        <div className="footer-list">
          <div>
            <ul>
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>CONTACT US</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>PRIVACY POLICY</li>
              <li>TERMS AND CONDITIONS</li>
            </ul>
          </div>
        </div>
        <div className="last">
          Copyright 2024, All Rights Reserved by Halcyon
        </div>
      </div>
    </>
  );
}

export default Homepage;