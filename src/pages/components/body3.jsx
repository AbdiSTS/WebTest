import React from "react";
import { useState, useEffect } from "react";

const Body3 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [dataImages, setDataImages] = useState([]);

  const [dataHistory, setDatahistory] = useState({
    proyek: 0,
    dana: 0,
    wilayah: 0,
  });

  useEffect(() => {
    fetch("http://localhost:1337/api/history") // ganti sesuai endpoint
      .then((res) => res.json())
      .then((resJson) => {
        setDatahistory(resJson.data); // karena v4 Strapi pakai { data: [...] }
      })
      .catch((err) => console.error("Gagal fetch:", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:1337/api/image-part-3s?populate=*") // ganti sesuai endpoint
      .then((res) => res.json())
      .then((resJson) => {
        setDataImages(resJson.data); // karena v4 Strapi pakai { data: [...] }
      })
      .catch((err) => console.error("Gagal fetch:", err));
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full bg-white p-12 gap-6">
      {/* Kiri */}
      <div className="w-full lg:w-1/3 flex flex-col justify-center">
        <p className="text-sm text-green-600 mb-2">— Kisah</p>
        <h2 className="text-4xl font-bold leading-tight mb-4">
          
          {dataHistory.title}
        </h2>
        <p className="text-gray-600 mb-6 w-4/5">
         {dataHistory.desc}
        </p>
        <button className="border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition w-max">
          Lihat Semua Kisah
        </button>

        {/* garis pelangi */}
        <div className="mt-6 h-1 w-2/3 bg-gradient-to-r from-green-400 via-yellow-400 to-gray-500 rounded-full"></div>
      </div>

      {/* Kanan - Stack Gambar */}
      <div className="flex w-full h-[500px] overflow-hidden">
        {dataImages.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isDefaultFull = hoveredIndex === null && index === 0;
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative h-full transition-all duration-500 ease-in-out 
            ${isHovered || isDefaultFull ? "w-full z-10" : "w-1/2"}
            `}
            >
              <img
                src={`http://localhost:1337${
                  item.img3_p3.formats?.small?.url || item.img3_p3.url
                }`}
                alt="kisah"
                className="w-full h-full object-cover"
              />
              {isHovered || isDefaultFull ? (
                <div
                  className={`absolute inset-0 bg-black/50 text-white p-6 flex flex-col justify-end transition-opacity duration-500`}
                >
                  <p className="text-lg font-semibold mb-4">{item.title}</p>
                  <button className="bg-white text-black px-4 py-2 rounded text-sm w-max">
                    Baca Kisah
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body3;
