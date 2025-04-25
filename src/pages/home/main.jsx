import React, { useEffect, useState } from "react";
import Navbars from "../components/navbar";
import Body1 from "../components/body1";
import Body2 from "../components/body2";
import Body3 from "../components/body3";
import Body4 from "../components/body4";
import Body5 from "../components/body5";
import Footer from "../components/footer";

const Home = () => {
 
  const [statistik, setStatistik] = useState({
    proyek: 0,
    dana: 0,
    wilayah: 0,
  });

  useEffect(() => {
    fetch("http://localhost:1337/api/part-1") // ganti sesuai endpoint
      .then((res) => res.json())
      .then((resJson) => {
        setStatistik(resJson.data); // karena v4 Strapi pakai { data: [...] }
      })
      .catch((err) => console.error("Gagal fetch:", err));
  }, []);

 
  return (
    <div>
      <Navbars />
      <Body1 statistik={statistik} />
      <Body2 />
      <Body3 />
      <Body4 statisktik={statistik} />
      <Body5   />
      <Footer />
    </div>
  );
};

export default Home;
