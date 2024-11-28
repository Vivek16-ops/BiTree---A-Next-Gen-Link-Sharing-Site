'use client'
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY, currentTarget } = event;
    const rect = currentTarget.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    const rotationX = (deltaY / rect.height) * 30;
    const rotationY = -(deltaX / rect.width) * 30;

    setRotation({ x: rotationX, y: rotationY });
  };


  return (
    <main>
      <section className="bg-green-400 min-h-[100vh] grid grid-cols-2">
        <div className="flex justify-center flex-col ml-[10vw]">
          <p className="text-yellow-300 font-bold text-7xl">
            Everything you
            <br />are. In one,
            <br />simple link in bio.
          </p>
          <p className="font-semibold text-xl my-4">
            Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="flex gap-4">
            <input type="text" className="w-1/3 focus:outline-green-400 border-2 border-black p-2" placeholder="bittr.ee/username" />
            <button className="bg-black text-white p-2 rounded-lg hover:cursor-pointer transform transition-transform duration-200 hover:scale-105 font-bold">
              Claim Now
            </button>
          </div>
        </div>

        {/* Rotating Image Section  */}
        <div className="flex items-center justify-center flex-col mr-[10vw]">
          <div
            onMouseMove={handleMouseMove}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%", // Adjust to take parent height
              background: "transparent", // Transparent background
              perspective: "1000px", // Add perspective for 3D effect
            }}
          >
            <div
              style={{
                width: "500px",
                height: "500px",
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transition: "transform 0.1s ease-out",
                transformStyle: "preserve-3d",
              }}
            >
              <img
                src="/home.jpeg" // Replace with your image path
                alt="3D Rotating"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px", // Optional styling
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)", // Optional styling
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-red-700 min-h-[100vh]">

      </section>
    </main>
  );
}
