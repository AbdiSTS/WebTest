import React from "react";
import CountUp from "react-countup";
import { useState, useEffect } from "react";

const Body4 = ({ statisktik }) => {
  const [dataLaporan, setDataLaporan] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/part-4s") // ganti sesuai endpoint
      .then((res) => res.json())
      .then((resJson) => {
        setDataLaporan(resJson.data); // karena v4 Strapi pakai { data: [...] }
        console.log("Fetched data image:", dataLaporan);
      })
      .catch((err) => console.error("Gagal fetch:", err));
  }, []);

  return (
    <div className="relative bg-green-600 text-white py-16 px-10 overflow-hidden">
      {/* Background Peta (tumpukan belakang) */}
      <img
        src="/assets/map.png"
        alt="Peta Indonesia"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[60%] object-contain pointer-events-none"
      />

      {/* Konten utama di atas peta */}
      <div className="relative z-10 max-w-5xl">
        <p className="italic text-sm mb-1">— Statistik</p>
        <h2 className="text-3xl font-extrabold mb-10">
          Statistik Terkini BPDLH
        </h2>

        {/* Angka-angka */}
        <div className="flex gap-8 border-y border-white/40 py-6 mb-10 flex-wrap">
          <div>
            <p className="text-xl font-bold">
              <CountUp
                end={statisktik.totalBerjalan}
                duration={2}
                separator="."
                decimals={0}
              />
              +
            </p>
            <p className="text-sm text-white/80">Proyek Berjalan</p>
          </div>
          <div>
            <p className="text-xl font-bold">
              Rp{" "}
              <CountUp
                end={statisktik.totalAktivitas}
                duration={5}
                separator="."
                decimals={0}
              />
              T
            </p>
            <p className="text-sm text-white/80">Aktivitas Pendanaan</p>
          </div>
          <div>
            <p className="text-xl font-bold">
              <CountUp
                end={statisktik.totalWilayah}
                duration={5}
                separator="."
                decimals={0}
              />
              +
            </p>
            <p className="text-sm text-white/80">Wilayah Tercakup</p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {dataLaporan.map((item) => (
            <div className="border-t border-white/60 pt-2">
              <p className="text-sm text-white/70">Laporan Keuangan</p>
              <a
                href={item.link_url}
                className="font-bold hover:underline flex items-center gap-1"
              >
                {item.title} <span>↗</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body4;
