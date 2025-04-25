import React from "react";
import CountUp from "react-countup";
import { useState, useEffect } from "react";

const Body5 = () => {
  // const windowsData = [
  //   { title: "UNDP - Mitigation Outcome" },
  //   { title: "UNDP - Indonesia Impact Fund" },
  //   { title: "APBN & World Bank – Dana Rehabilitasi Mangrove" },
  //   {
  //     title:
  //       "World Bank – Forest Carbon Partnership Facility (FCPF) - Carbon Fund",
  //   },
  //   { title: "Dana TERRA for Social Forestry (TERRA-CF)" },
  // ];

  // const mainPublication = {
  //   image: "/assets/image1.png",
  //   title:
  //     "Geliat Usaha Jamur di Desa Samaenre: Asa dan Kegelisahan Warga Kampung mencari Alternatif Mata Pencaharian di pinggiran hutan",
  //   description:
  //     "Hutan, satu kesatuan ekosistem yang memiliki komponen fisik dan makhluk hidup di dalamnya. Air, tanah, udara, tumbuh-tumbuhan, berbagai macam hewan dari udara hingga tanah menjadikan hutan tempat hidup yang utuh.",
  //   date: "11 April 2025",
  // };

  // const otherPublications = [
  //   {
  //     image: "https://picsum.photos/seed/picsum/200/300",
  //     category: "Berita",
  //     title:
  //       "Jejak Maret: Terbukanya Potensi Kerja Sama Baru untuk Lingkungan...",
  //     date: "27 Maret 2024",
  //   },
  //   {
  //     image: "https://picsum.photos/seed/picsum/200/300",
  //     category: "Siaran Pers",
  //     title:
  //       "Indonesia Pertegas Komitmen NDC melalui Mobilisasi Pendanaan Iklim",
  //     date: "24 Maret 2024",
  //   },
  //   {
  //     image: "https://picsum.photos/seed/picsum/200/300",
  //     category: "Berita",
  //     title:
  //       "Penandatanganan Perjanjian Dana Insentif Karbon untuk Desa dan Kelompok Tani Hutan...",
  //     date: "18 Maret 2024",
  //   },
  //   {
  //     image: "https://picsum.photos/seed/picsum/200/300",
  //     category: "Berita",
  //     title:
  //       "Penandatanganan Perjanjian Dana Insentif Karbon untuk Desa dan Kelompok Tani Hutan...",
  //     date: "18 Maret 2024",
  //   },
  //   {
  //     image: "https://picsum.photos/seed/picsum/200/300",
  //     category: "Berita",
  //     title:
  //       "Penandatanganan Perjanjian Dana Insentif Karbon untuk Desa dan Kelompok Tani Hutan...",
  //     date: "18 Maret 2024",
  //   },
  //   {
  //     image: "https://picsum.photos/seed/picsum/200/300",
  //     category: "Berita",
  //     title:
  //       "Penandatanganan Perjanjian Dana Insentif Karbon untuk Desa dan Kelompok Tani Hutan...",
  //     date: "18 Maret 2024",
  //   },
  // ];

  const [dataWindows, setDataWindows] = useState([]);
  const [dataPublikasi, setDataPublikasi] = useState([]);
  const [dataLainnya, setDataLainnya] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/windows") // ganti sesuai endpoint
      .then((res) => res.json())
      .then((resJson) => {
        setDataWindows(resJson.data); // karena v4 Strapi pakai { data: [...] }
      })
      .catch((err) => console.error("Gagal fetch:", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:1337/api/publikasis?populate=*") // ganti sesuai endpoint
      .then((res) => res.json())
      .then((resJson) => {
        setDataPublikasi(resJson.data); // karena v4 Strapi pakai { data: [...] }
        console.log("Fetched data publikasi:", dataPublikasi);
      })
      .catch((err) => console.error("Gagal fetch:", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:1337/api/lainnyas?populate=*") // ganti sesuai endpoint
      .then((res) => res.json())
      .then((resJson) => {
        setDataLainnya(resJson.data); // karena v4 Strapi pakai { data: [...] }
        console.log("Fetched data:", dataWindows);
      })
      .catch((err) => console.error("Gagal fetch:", err));
  }, []);

  return (
    <div className="flex gap-8 px-8 py-12">
      {/* Windows Section */}
      <div className="w-1/4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Windows</h2>
          <a href="#" className="text-green-600 text-sm">
            Lainnya
          </a>
        </div>
        {dataWindows.map((item, idx) => (
          <div key={idx} className="mb-4 border-b pb-2">
            <p className="text-xs text-gray-400">Windows</p>
            <p className="text-sm font-medium">
              {item.title}-{item.desc}
            </p>
          </div>
        ))}
      </div>
      {/* Publikasi Section */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Publikasi</h2>
        </div>
        {dataPublikasi.map((item) => (
          <div className="mb-6">
            <div className="rounded-lg overflow-hidden">
              <img
                src={`http://localhost:1337${
                  item.image.formats?.small?.url || item.image.url
                }`}
                alt="Forest"
                className="w-full h-96 object-cover"
              />
            </div>
            <p className="text-xs text-green-500 mt-2">Kisah</p>
            <p className="font-semibold leading-tight mt-1">
              {item.title}
            </p>
            <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
            <p className="text-xs text-gray-400 mt-1">{item.date}</p>
          </div>
        ))}
      </div>

      <div>
        {/* Side List */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold"></h2>
          <a href="#" className="text-green-600 text-sm">
            Lainnya
          </a>
        </div>

        <div className="h-96 overflow-y-scroll">
          {dataLainnya.map((item, idx) => (
            <div key={idx} className="flex gap-4 mb-4">
              <img
                src={`http://localhost:1337${
                  item.image.formats?.small?.url || item.image.url
                }`}
                alt="thumb"
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <p className="font-medium text-sm leading-snug">{item.title}</p>
                <p className="text-xs text-gray-400 mt-1">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body5;
