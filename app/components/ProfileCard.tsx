// ProfileCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProfileCardProps {
  imageSrc: string;
  name: string;
  description: string;
  nickname: string;
  url?: string;
}

// Map character names to URL-friendly IDs
const idMap: Record<string, string> = {
  "Lana Condor": "lana",
  "Tý Quậy": "ty",
  "Đen Vâu": "den",
  "Dũng sĩ Hesman": "hesman",
  "Sơn Tùng M-TP": "son",
  "Maggie Q": "maggie",
  "Xã Xệ and Lý Toét": "xaxe",
  "Ba Giai and Tú Xuất": "bagiai",
  "Bích Phương": "bich",
  "Trạng Quỳnh": "trang",
  "Noo Phước Thịnh": "noo",
  "Tóc Tiên": "toc",
  "Min": "min",
  "Erik": "erik",
  "Sailor Moon": "sailor",
  "Phương Ly": "phuong",
  "Doraemon": "doraemon",
  "Tom and Jerry": "tomandjerry",
  "Karik": "karik",
  "Nu, pogodi!": "nupogodi",
  "Hương Tràm": "huong",
  "Hồ Chí Minh": "hochiminh",
  "Suboi": "suboi",
  "Trấn Thành": "tran",
  "Hồ Ngọc Hà": "hongocha",
  "Chi Pu": "chipu",
  "Hòa Minzy": "hoaminzy",
  "Isaac": "issac",
  "Khởi My": "khoimy",
  "Lê Tí": "leti",
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  imageSrc,
  name,
  description,
  nickname,
  url = "#", // Default to "#" if no URL is provided
}) => {
  // Use the mapping to compute the URL
  const linkHref = url === "#" ? `/${idMap[name]}` : url;

  return (
    <>
      <Link
        href={linkHref}
        className="profile-card"
        style={{
          textDecoration: "none",
          display: "block",
          width: "200px",
          marginRight: "12px",
          flexShrink: 0,
          cursor: "pointer", // Clearly indicates that this is clickable
        }}
      >
        <div
          className="card-image"
          style={{
            width: "200px",
            height: "200px",
            position: "relative",
            borderRadius: "8px",
            overflow: "hidden",
            marginBottom: "10px",
          }}
        >
          <Image
            src={imageSrc}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <h3
          style={{
            margin: "0 0 4px 0",
            fontSize: "16px",
            fontWeight: "600",
            color: "#1A1918",
          }}
        >
          {name}
        </h3>
        <div
          style={{
            height: "60px",
            overflow: "hidden",
            marginBottom: "4px",
          }}
        >
          <p
            style={{
              margin: "0",
              fontSize: "14px",
              lineHeight: "1.4",
              color: "#61605A",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </p>
        </div>
        <p
          style={{
            margin: "0",
            fontSize: "12px",
            color: "#85837D",
          }}
        >
          {nickname}
        </p>
      </Link>

      {/* Global CSS overrides to make the profile card responsive */}
      <style jsx global>{`
        @media (max-width: 600px) {
          .profile-card {
            /* Clamp width between 120px (min) and 200px (max), with a dynamic value in between */
            width: clamp(120px, calc(100vw / 3), 200px) !important;
          }
          .card-image {
            width: clamp(120px, calc(100vw / 3), 200px) !important;
            height: clamp(120px, calc(100vw / 3), 200px) !important;
          }
        }
      `}</style>
    </>
  );
};

export default ProfileCard;
