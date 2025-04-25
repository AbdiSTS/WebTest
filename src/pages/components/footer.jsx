import React from "react";

const footer = () => {
  return (
    <footer className="bg-[#262626] text-white px-8 py-10 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo dan Alamat */}
        <div className="space-y-4">
          <img src="/assets/logo_bpdh.png" alt="BPDLH" className="h-10" />
          <p className="text-sm font-semibold">
            Badan Pengelola Dana Lingkungan Hidup
          </p>
          <p className="text-xs leading-5">
            JB Tower lt 29-30, Jl. Kebon Sirih No. 48-50, RT 011/002, Gambir,
            Daerah Khusus Ibukota Jakarta, 10110
          </p>
          {/* Icon sosial */}
          <div className="flex space-x-4 mt-2">
            <a href="#">
              <img src="/assets/logo_fb.png" alt="fb" />
            </a>
            <a href="#">
              <img src="/assets/logo_ig.png" alt="ig" />
            </a>
            <a href="#">
              <img src="/assets/logo_linkeld.png" alt="linkedin" />
            </a>
          </div>
          <div className="mt-3">
            <p className="font-semibold">Saluran Pengaduan</p>
            <div className="flex gap-2 mt-2">
              <img src="/assets/sp_1.png" alt="lapor" />
              <img src="/assets/sp_2.png" alt="halo" />
              <img src="/assets/sp_3.png" alt="call" />
              <img src="/assets/sp_4.png" alt="sipandu" />
            </div>
          </div>
        </div>

        {/* Profil */}
        <div>
          <p className="font-bold mb-2">Profil</p>
          <ul className="space-y-1 text-xs text-gray-300">
            <li>— Tentang Kami</li>
            <li>— Tata Kelola</li>
            <li>— Komite Pengarah</li>
            <li>— Dewan Pengawas</li>
            <li>— Dewan Direksi</li>
          </ul>
        </div>

        {/* Ruang Lingkup */}
        <div>
          <p className="font-bold mb-2">Ruang Lingkup</p>
          <ul className="space-y-1 text-xs text-gray-300">
            <li>— Program Tematik</li>
            <li>— Windows</li>
            <li>— Proyek</li>
          </ul>
        </div>

        {/* Informasi Publik */}
        <div>
          <p className="font-bold mb-2">Informasi Publik</p>
          <ul className="space-y-1 text-xs text-gray-300">
            <li>— Publikasi</li>
            <li>— Laporan</li>
            <li>— Pengumuman</li>
          </ul>
        </div>

        {/* Layanan */}
        <div>
          <p className="font-bold mb-2">Layanan</p>
          <ul className="space-y-1 text-xs text-gray-300">
            <li>Karir</li>
            <li>Pengadaan</li>
            <li>Hubungi Kami</li>
          </ul>
        </div>
      </div>

      {/* Footer bawah */}
      <div className="text-xs text-gray-400 mt-10 border-t border-gray-700 pt-4 text-center">
        © 2025 BPDLH - Badan Pengelola Dana Lingkungan Hidup
      </div>

      {/* Tombol scroll ke atas */}

      <div
        className="fixed bottom-5 right-5 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img
          src="/assets/button_up.png"
          alt="Scroll to top"
          className="w-12 h-12 hover:scale-110 transition-transform duration-300"
        />
      </div>
    </footer>
  );
};

export default footer;
