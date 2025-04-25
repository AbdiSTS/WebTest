import { useState, useEffect } from "react";

 

const Body2 = () => {
  const [dataImages, setDataImage] = useState([]);
  const [dataAnnoucement, setDataAnnoucement] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/image-part-2s?populate=*") // ganti sesuai endpoint
      .then((res) => res.json())
      .then((resJson) => {
        setDataImage(resJson.data); // karena v4 Strapi pakai { data: [...] }
        console.log("Fetched data image:", dataImages);
      })
      .catch((err) => console.error("Gagal fetch:", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:1337/api/announcements") // ganti sesuai endpoint
      .then((res) => res.json())
      .then((resJson) => {
        setDataAnnoucement(resJson.data); // karena v4 Strapi pakai { data: [...] }
      })
      .catch((err) => console.error("Gagal fetch:", err));
  }, []);
  
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 bg-white">
      {/* Program Terbaru */}
      <div className="w-full lg:w-3/4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Program Terbaru</h2>
          <button className="text-green-600 border border-green-600 px-3 py-1 rounded text-sm hover:bg-green-600 hover:text-white transition">
            Lihat Semua Program
          </button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {dataImages.map((item) => (
            <div
              key={item}
              className="min-w-[250px] bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
            >
              <img
                src={`http://localhost:1337${
                  item.img2_p2.formats?.small?.url || item.img2_p2.url
                }`}
                alt={item.title}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold line-clamp-2">{item.title}</h4>
                <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pengumuman */}
      <div className="w-full lg:w-1/4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Pengumuman</h2>
          <button className="text-green-600 text-sm">Lainnya</button>
        </div>
        <div className="space-y-2 h-96 overflow-y-scroll">
          {dataAnnoucement.map((a, i) => (
            <div
              key={i}
              className={`p-4 border ${
                a.highlight
                  ? "bg-orange-50 border-orange-300"
                  : "bg-white border-gray-200"
              } rounded`}
            >
              <p className="text-xs text-orange-500 font-semibold mb-1">
                {a.title_annouc}
              </p>
              <p className="text-sm font-medium text-gray-800 line-clamp-2">
                {a.desc_annouc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body2;
