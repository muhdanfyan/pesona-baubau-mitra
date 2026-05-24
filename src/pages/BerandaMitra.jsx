import { useNavigate } from 'react-router-dom';

function BerandaMitra() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fff8f1] flex flex-col">
      {/* Header */}
      <header className="bg-[#fff8f1] pt-8 pb-4 px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-[#003b5a]/10 flex items-center justify-center">
            <span className="text-2xl">⚓</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#003b5a]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Pesona Baubau</h1>
            <p className="text-sm text-[#41474e]">Portal Mitra Pariwisata</p>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="px-6 mb-8">
        <div className="bg-gradient-to-br from-[#003b5a] to-[#1a5276] rounded-2xl p-8 text-white shadow-lg">
          <p className="text-sm text-white/80 mb-2">Selamat Datang di</p>
          <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Pesona Baubau<br />Digital Hub</h2>
          <p className="text-white/80 text-sm mb-6">
            Kelola usaha, pantau destinasi, dan kembangkan pariwisata Baubau bersama kami.
          </p>
          <div className="flex gap-2">
            <span className="px-3 py-1 text-xs bg-white/20 rounded-full">🏪 UMKM</span>
            <span className="px-3 py-1 text-xs bg-white/20 rounded-full">🏨 Hotel</span>
            <span className="px-3 py-1 text-xs bg-white/20 rounded-full">👥 Pokdarwis</span>
          </div>
        </div>
      </div>

      {/* Pilih Role */}
      <div className="px-6 mb-8">
        <h3 className="text-lg font-semibold text-[#1e1b16] mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Pilih Jenis Mitra</h3>
        <div className="space-y-4">
          {/* UMKM */}
          <button onClick={() => navigate('/login/umkm')} className="w-full bg-white rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#c1c7cf] hover:border-[#003b5a] hover:shadow-lg transition-all text-left active:scale-[0.98]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#003b5a]/10 flex items-center justify-center text-2xl">🏪</div>
              <div className="flex-1">
                <h4 className="font-semibold text-[#1e1b16]">Pelaku UMKM</h4>
                <p className="text-sm text-[#41474e]">Kelola produk, lihat statistik, terima pesanan</p>
              </div>
              <span className="text-[#41474e]">→</span>
            </div>
          </button>

          {/* Hotel */}
          <button onClick={() => navigate('/login/hotel')} className="w-full bg-white rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#c1c7cf] hover:border-[#745a27] hover:shadow-lg transition-all text-left active:scale-[0.98]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#745a27]/10 flex items-center justify-center text-2xl">🏨</div>
              <div className="flex-1">
                <h4 className="font-semibold text-[#1e1b16]">Hotel / Homestay</h4>
                <p className="text-sm text-[#41474e]">Kelola kamar, reservasi, dan fasilitas</p>
              </div>
              <span className="text-[#41474e]">→</span>
            </div>
          </button>

          {/* Pokdarwis */}
          <button onClick={() => navigate('/login/pokdarwis')} className="w-full bg-white rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#c1c7cf] hover:border-[#1a5276] hover:shadow-lg transition-all text-left active:scale-[0.98]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#1a5276]/10 flex items-center justify-center text-2xl">👥</div>
              <div className="flex-1">
                <h4 className="font-semibold text-[#1e1b16]">Pokdarwis</h4>
                <p className="text-sm text-[#41474e]">Kelola destinasi binaan, laporan, dan anggota</p>
              </div>
              <span className="text-[#41474e]">→</span>
            </div>
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="px-6 mb-8">
        <div className="bg-[#f4ede3] rounded-xl p-4 text-center">
          <p className="text-sm text-[#41474e]">
            Bagian dari ekosistem <span className="font-semibold text-[#003b5a]">Pesona Baubau Digital Hub</span>
          </p>
          <p className="text-xs text-[#41474e] mt-1">
            Dinas Pariwisata Kota Baubau × CV Sarjana Komputer
          </p>
        </div>
      </div>
    </div>
  );
}

export default BerandaMitra;
