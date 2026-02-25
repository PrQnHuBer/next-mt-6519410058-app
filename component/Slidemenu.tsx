"use client"; //

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Slidemenu() {
  const pathname = usePathname(); //

  const menuItems = [
    { name: "Home", img: "/home.png", path: "/" },
    { name: "About", img: "/aboutme.png", path: "/aboutme" },
    { name: "Education", img: "/edu.png", path: "/eduexp" },
    { name: "Specialization", img: "/spec.png", path: "/spec" },
    { name: "Projects", img: "/project.png", path: "/projects" },
    { name: "Skills", img: "/skill.png", path: "/skills" },
    { name: "Contact", img: "/contact.png", path: "/contactme" },
  ]; //

  return (
    <div className="flex flex-col gap-8 p-6 border border-gray-800 rounded-full bg-[#1e1e1e]/50 backdrop-blur-md shadow-2xl">
      {menuItems.map((item, idx) => {
        const isActive = pathname === item.path; //

        return (
          <Link href={item.path} key={idx} title={item.name}>
            <div className="cursor-pointer transition-all duration-300 hover:scale-125">
              <img 
                src={item.img} 
                alt={item.name}
                /* ปรับค่าเริ่มต้นให้เป็นสีขาว (brightness-100) และไม่มี grayscale */
                className={`w-[35] h-[35] object-contain transition-all duration-300 ${
                  isActive 
                  ? "brightness-100 scale-110" 
                  : "brightness-100 opacity-50 hover:opacity-100" 
                }`}
                /* ใช้ filter เพื่อเปลี่ยนสีรูปภาพจากขาวเป็นส้มเฉพาะตอน isActive */
                style={isActive ? { 
                  filter: 'invert(53%) sepia(88%) saturate(3015%) hue-rotate(1deg) brightness(103%) contrast(106%)' 
                } : { 
                  filter: 'brightness(0) invert(1)' // บังคับให้รูปเป็นสีขาวล้วนในสถานะปกติ
                }}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}