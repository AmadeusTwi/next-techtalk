import { useEffect, useState } from "react";

export default function CSR() {
  const [stars, setStars] = useState(null);

  useEffect(() => {
    const fetchStars = async () => {
      const response = await fetch("/api/github");
      const data = await response.json();
      setStars(data.stars);
    };

    fetchStars();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-blue-400 to-purple-500">
      <h1 className="text-6xl font-bold mb-8">Next.js has</h1>
      <div className="text-9xl font-bold mb-8">
        {stars}
        <span className="text-6xl font-bold">⭐️</span>
      </div>
    </div>
  );
}
