"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface MapRegionProps {
  id: string;
  name: string;
  imageSrc: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform?: string;
  };
  size?: {
    width: number;
    height: number;
  };
  onClick?: () => void;
  zIndex?: number;
  hitboxScale?: number; // Tỷ lệ phạm vi hover so với kích thước ảnh (0.5 = 50% kích thước)
  hitboxOffset?: {
    x?: number; // Offset theo chiều ngang (âm = trái, dương = phải), tính theo % của width
    y?: number; // Offset theo chiều dọc (âm = lên, dương = xuống), tính theo % của height
  };
}

export default function MapRegion({
  id,
  name,
  imageSrc,
  position,
  size = { width: 200, height: 200 },
  onClick,
  zIndex = 10,
  hitboxScale = 0.6, // Mặc định 60% kích thước ảnh
  hitboxOffset = { x: 0, y: 0 }, // Mặc định không offset
}: MapRegionProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Tính toán kích thước và vị trí của vùng hover
  const hitboxWidth = size.width * hitboxScale;
  const hitboxHeight = size.height * hitboxScale;
  
  // Vị trí căn giữa + offset tùy chỉnh
  const hitboxOffsetX = (size.width - hitboxWidth) / 2 + size.width * (hitboxOffset.x || 0);
  const hitboxOffsetY = (size.height - hitboxHeight) / 2 + size.height * (hitboxOffset.y || 0);

  return (
    <div
      className="absolute group"
      style={{
        ...position,
        zIndex,
        width: size.width,
        height: size.height,
      }}
    >
      {/* Glow effect khi hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-lg pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            filter: "blur(20px)",
            background:
              "radial-gradient(circle, rgba(255,215,0,0.4) 0%, transparent 70%)",
            transform: "scale(1.2)",
          }}
        />
      )}

      {/* Image vùng đất */}
      <motion.div
        className="relative pointer-events-none"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Image
          src={imageSrc}
          alt={name}
          width={size.width}
          height={size.height}
          className="transition-all duration-300"
          style={{
            filter: isHovered
              ? "brightness(1.2) drop-shadow(0 0 20px rgba(255,215,0,0.6))"
              : "none",
          }}
        />
      </motion.div>

      {/* Vùng tương tác hover (hitbox) - nhỏ hơn ảnh */}
      <div
        className="absolute cursor-pointer"
        style={{
          top: hitboxOffsetY,
          left: hitboxOffsetX,
          width: hitboxWidth,
          height: hitboxHeight,
          // Debug: uncomment để xem vùng hover
          // backgroundColor: "rgba(255, 0, 0, 0.3)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      />
    </div>
  );
}
