'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const router = useRouter();

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

  const [paramsText, setparamsText] = useState('bitr.ee/')

  const createTree = async () => {
    let updatedParamsText = paramsText;
    if (paramsText.startsWith('bitr.ee/')) {
      updatedParamsText = paramsText.split('/')[1]
    }
    router.push(`/generate?handle=${updatedParamsText}`)
  }

  const [treeDomain, setTreeDomain] = useState('')

  // Function to send the user to their respective tree 
  const getTreeDomain = async () => {
    router.push(`/${treeDomain}`)
  }

  return (
    <main>
      <section className="bg-green-400 min-h-[100vh] grid grid-cols-2">
        {/* Descriptions and Inputs Tags Section  */}
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
            <input value={paramsText} onChange={(e) => setparamsText(e.target.value)} type="text" className="w-1/3 focus:outline-green-400 border-2 border-black p-2" />
            <button onClick={() => createTree()} className="bg-pink-400 text-white p-2 rounded-lg hover:cursor-pointer transform transition-transform duration-200 hover:scale-105 font-bold">
              Claim Now
            </button>
          </div>
          <div className="flex gap-4 my-4">
            <input value={treeDomain} placeholder="Enter your tree handle" onChange={(e) => setTreeDomain(e.target.value)} type="text" className="w-1/3 focus:outline-green-400 border-2 border-black p-2" />
            <button onClick={() => getTreeDomain()} className="bg-purple-500 text-white p-2 rounded-lg hover:cursor-pointer transform transition-transform duration-200 hover:scale-105 font-bold">
              View your tree
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
        <h1 className="text-white font-bold text-7xl">Todo Add Some Styling Here Using AI In Some Leisure Time</h1>
      </section>
    </main>
  );
}
