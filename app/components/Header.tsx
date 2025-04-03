import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        height: "60px",
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      {/* Logo on the left */}
      <div style={{ marginLeft: "16px" }}>
        <Image
          src="/logo.svg"
          alt="Ban AI Logo"
          width={63}
          height={26}
        />
      </div>

      {/* Search icon on the right */}
      {/* <div style={{ marginRight: "16px" }}>
        <Image
          src="/search-icon.svg"
          alt="Search"
          width={22}
          height={22}
        />
      </div> */}
    </header>
  );
};

export default Header;
