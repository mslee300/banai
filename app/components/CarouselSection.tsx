"use client";

import React, { useEffect } from "react";
import ProfileCard from "./ProfileCard";

interface ProfileData {
  imageSrc: string;
  name: string;
  description: string;
  nickname: string;
  url?: string;
}

interface CarouselSectionProps {
  title: string;
  profiles: ProfileData[];
}

const CarouselSection: React.FC<CarouselSectionProps> = ({
  title,
  profiles,
}) => {
  // Add useEffect to safely interact with the document object only on the client side
  useEffect(() => {
    // Create style to hide scrollbar in WebKit browsers
    const style = document.createElement("style");
    style.textContent = `
      div::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);

    // Clean up function to remove the style when component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <section style={{ marginBottom: "30px" }}>
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "600",
          marginBottom: "16px",
          color: "#1B1C1E",
          padding: "0 16px",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          padding: "0 16px",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE and Edge
        }}
      >
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            imageSrc={profile.imageSrc}
            name={profile.name}
            description={profile.description}
            nickname={profile.nickname}
          />
        ))}
      </div>
    </section>
  );
};

export default CarouselSection;
