import React from "react";
import Image from "next/image";
import Link from "next/link";

const BottomNav = () => {
  // Define each navigation item
  const navItems = [
    { name: "Trang chủ", icon: "/home.svg", href: "/", active: true },
    { name: "Trò chuyện", icon: "/chat.svg", href: "/chat", active: false },
    {
      name: "Tạo mới",
      icon: "/create.svg",
      href: "/create",
      active: false,
    },
    {
      name: "Hồ sơ",
      icon: "/profile.svg",
      href: "/profile",
      active: false,
    },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "64px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderTop: "1px solid #f0f0f0",
        maxWidth: "600px",
        margin: "0 auto",
        zIndex: 1000,
      }}
    >
      {navItems.map((item) => (
        <Link
          href={item.href}
          key={item.name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "25%",
            height: "100%",
            textDecoration: "none",
            color: item.active ? "#FFD700" : "#666",
          }}
        >
          <div>
            <Image
              src={item.icon}
              alt={`${item.name} icon`}
              width={24}
              height={24}
            />
          </div>
          <span
            style={{
              fontSize: "12px",
              marginTop: "4px",
            }}
          >
            {item.name}
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;
