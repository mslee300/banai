// app/components/Banner.tsx
import React from "react";
import Image from "next/image";

export default function Banner() {
  return (
    <div
      style={{
        // Space above and below the banner
        marginTop: "20px",
        marginBottom: "20px",
        // Center the banner container
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          // Restrict banner to 600px (like your main content)
          width: "100%",
          maxWidth: "600px",
          position: "relative",
          borderRadius: "8px",
          overflow: "hidden",
          margin: "0 16px", // left/right padding
        }}
      >
        <Image
          src="/banner.png" // Replace with your actual banner file
          alt="Banner"
          width={600}
          height={200}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
