import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Body1 = ({ statistik }) => {
  const [dataImages, setDataImage] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/image-part-1s?populate=*") // ganti sesuai endpoint
      .then((res) => res.json())
      .then((resJson) => {
        setDataImage(resJson.data); // karena v4 Strapi pakai { data: [...] }
        console.log("Fetched data image:", dataImages);
      })
      .catch((err) => console.error("Gagal fetch:", err));
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full h-full bg-white p-10">
      {/* Kiri */}
      <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
        <p className="text-sm text-gray-500 mb-2 italic">Eco Cares</p>
        <h1 className="text-4xl font-extrabold leading-tight mb-4">
          {statistik.title} <br />
        </h1>
        <p className="text-gray-700 mb-8 w-4/5">{statistik.description}</p>

        <p className="mb-8 w-4/5 font-bold">Statistik Terkini BPLDH</p>

        {/* Statistik */}
        <div className="flex gap-8">
          <div>
            <p className="text-xl font-bold">
              <CountUp end={statistik.totalBerjalan} duration={1.5} />+
            </p>
            <p className="text-sm text-gray-500">Proyek Berjalan</p>
          </div>
          <div>
            <p className="text-xl font-bold">
              Rp{" "}
              <CountUp
                end={statistik.totalAktivitas}
                duration={2}
                separator="."
                decimals={0}
              />
              T
            </p>
            <p className="text-sm text-gray-500">Aktivitas Pendanaan</p>
          </div>
          <div>
            <p className="text-xl font-bold">
              <CountUp end={statistik.totalWilayah} duration={1.5} />+
            </p>
            <p className="text-sm text-gray-500">Wilayah Tercakup</p>
          </div>
        </div>
      </div>

      {/* Kanan */}
      <div className="relative w-full lg:w-1/2 h-[700px] rounded-lg overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}
          loop={true}

          className="w-full h-full"
        >
          {dataImages.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative w-full h-[700px]">
                <img
                  src={`http://localhost:1337${
                    item.img1_p_1.formats?.small?.url || item.img1_p_1.url
                  }`}
                  alt="Forest"
                  className="w-full h-full object-cover"
                />
                {/* Konten overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-green-700/80 text-white p-16" style={{ backgroundColor: "#01A24A" }}>
                  {item.title_image.split("\n").map((line, index) => (
                    <h6 key={index} className="text-2xl font-semibold">
                      {line}
                    </h6>
                  ))}
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Body1;
