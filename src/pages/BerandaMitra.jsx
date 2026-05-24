import { useNavigate } from 'react-router-dom';

const destinations = [
  {
    name: 'Benteng Keraton Buton',
    desc: 'Benteng terluas di dunia dengan panorama laut Celebes',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn_MDgqv5s5zUlpHnAfykXuQ28NmTTUYyE2Cri6ad6Eh_eJUx3AJnkEJndVLtLbKTCCZ6K2mD97qfhb0ohsu_lhZv2JQOs0sGMiQDdRkJsDU92OewXa2QUXp9AG4vkGw5KHqI-YeJp0hZUzIjiXkagG8qOlom11auTNfJmJ8WvVMq4Cre12yTnG4SennTMoM3OfPEedA3n9YnBrU4p1sdS3UuJ_49ZhbM-W1RBPZWo8QVuWkbw7Bkd_1o3U_2HItT3-4OWPTwpsfHV',
    tag: 'Sejarah',
  },
  {
    name: 'Pantai Kamali',
    desc: 'Pantai pasir putih dengan sunset yang memukau',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbYhnxrnDMj1UzCBCEqm-LO0lYzjjFKFVD7rJQCyz5KDjHElXB_xbAwe7p0vWTglDCm1mffk3p5PzE5XAuL_6ErwYqyS9gTyWF4-PFPejj_XQhQ_zcFX42nO69qLqik4K3nBJJHk7NxeEdjMiDoF0P_i8vxkBkSTg8TvwTvn8OXrxPLL5tU7t-yMs8Q77_gxGCCvCpBIUre9V-lBw42lB-TM6qBNXBs0xrqJ8ex29z6teQv52ldObVlj0HINRcLHBN2-vKmxgVNQ4',
    tag: 'Wisata',
  },
  {
    name: 'Air Terjun Watu Wolu',
    desc: 'Air terjun eksotis di tengah hutan tropis Baubau',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCc8TqPe7eY7CRMg1NFFuQ-00AKLkMGm2XIQPxY_QkEAqNkH9i-ihp6FnBvRli0Ernvz8tR6t0a_T0UTUup0BWDQN3BRzFPIRqUvjnBcQ8TbVfA3NWEzIiiGD7dpbMV-K3RfXwvWlh5My6EmwQ6xjOQdKkRPGkOlA7hl1D3OizRq0ekWnQzxLvwAOx9g_4pHQyPqc5pXR9p1Nm6sKiOksp1btV1Pm4A2RGPGqTFydblt4OQ5hcl8wmmuOYuPJ1ET6v3tIP3HMq0WoxcY0',
    tag: 'Alam',
  },
];

const events = [
  { name: 'Festival Pesona Baubau', date: '12-15 Des 2024', icon: '🎭' },
  { name: 'Expo UMKM Baubau', date: '20-22 Jan 2025', icon: '🏪' },
];

const stats = [
  { value: '45+', label: 'Destinasi', icon: '🗺️' },
  { value: '120+', label: 'UMKM Aktif', icon: '🏪' },
  { value: '12', label: 'Event Tahunan', icon: '🎭' },
  { value: '15K+', label: 'Wisatawan', icon: '🧳' },
];

function BerandaMitra() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F3F0] font-body text-[#1e1b16] antialiased">
      {/* Header with Logo + Name */}
      <header className="bg-[#fff8f1] pt-6 pb-4 px-4">
        <div className="flex items-center justify-between max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#003b5a]/10 flex items-center justify-center shadow-sm">
              <svg className="w-6 h-6 text-[#003b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
            </div>
            <div>
              <h1 className="text-[22px] font-bold text-[#003b5a] leading-tight">Pesona Baubau</h1>
              <p className="text-[11px] font-medium text-[#41474e]">Portal Mitra Pariwisata</p>
            </div>
          </div>
          {/* Login button - small, top right */}
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-2 bg-[#003b5a] text-white text-[12px] font-semibold rounded-full shadow-sm hover:bg-[#1a5276] transition-all active:scale-95"
          >
            Masuk
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="px-4 mt-4">
        <div className="bg-gradient-to-br from-[#003b5a] via-[#1a5276] to-[#2D5A3E] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16"></div>
          <div className="relative z-10">
            <p className="text-[11px] font-medium text-white/70 uppercase tracking-wider mb-1">Selamat Datang di</p>
            <h2 className="text-[24px] font-bold mb-1 leading-tight">Pesona Baubau<br />Digital Hub</h2>
            <p className="text-[13px] text-white/80 mb-5">
              Kelola usaha, pantau destinasi, dan kembangkan pariwisata Baubau bersama kami.
            </p>
            {/* Stats row */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {stats.map((s, i) => (
                <div key={i} className="text-center bg-white/10 rounded-xl py-2 px-1 backdrop-blur-sm">
                  <div className="text-lg">{s.icon}</div>
                  <div className="text-[16px] font-bold">{s.value}</div>
                  <div className="text-[9px] text-white/70">{s.label}</div>
                </div>
              ))}
            </div>
            {/* Tags */}
            <div className="flex gap-1.5">
              <span className="px-2.5 py-1 text-[10px] bg-white/20 rounded-full font-medium">🏪 UMKM</span>
              <span className="px-2.5 py-1 text-[10px] bg-white/20 rounded-full font-medium">🏨 Hotel</span>
              <span className="px-2.5 py-1 text-[10px] bg-white/20 rounded-full font-medium">👥 Pokdarwis</span>
            </div>
          </div>
        </div>
      </div>

      {/* Role Selection - direct to dashboard, no login */}
      <div className="px-4 mt-6">
        <h3 className="text-[16px] font-bold text-[#003b5a] mb-3">Pilih Peran Mitra</h3>
        <div className="grid grid-cols-3 gap-3">
          {/* UMKM */}
          <button
            onClick={() => navigate('/umkm')}
            className="bg-white rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#c1c7cf]/30 hover:border-[#003b5a] hover:shadow-md transition-all active:scale-95 flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-xl bg-[#003b5a]/10 flex items-center justify-center text-2xl">🏪</div>
            <span className="text-[13px] font-semibold text-[#003b5a]">UMKM</span>
            <span className="text-[10px] text-[#41474e] text-center leading-tight">Kelola Produk &amp; Statistik</span>
          </button>

          {/* Hotel */}
          <button
            onClick={() => navigate('/hotel')}
            className="bg-white rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#c1c7cf]/30 hover:border-[#745a27] hover:shadow-md transition-all active:scale-95 flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-xl bg-[#745a27]/10 flex items-center justify-center text-2xl">🏨</div>
            <span className="text-[13px] font-semibold text-[#745a27]">Hotel</span>
            <span className="text-[10px] text-[#41474e] text-center leading-tight">Kelola Kamar Reservasi</span>
          </button>

          {/* Pokdarwis */}
          <button
            onClick={() => navigate('/pokdarwis')}
            className="bg-white rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#c1c7cf]/30 hover:border-[#2D5A3E] hover:shadow-md transition-all active:scale-95 flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 rounded-xl bg-[#2D5A3E]/10 flex items-center justify-center text-2xl">👥</div>
            <span className="text-[13px] font-semibold text-[#2D5A3E]">Pokdarwis</span>
            <span className="text-[10px] text-[#41474e] text-center leading-tight">Kelola Destinasi &amp; Laporan</span>
          </button>
        </div>
      </div>

      {/* Preview Section: Destinasi Populer */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[16px] font-bold text-[#003b5a]">Destinasi Populer</h3>
          <button className="text-[11px] font-semibold text-[#003b5a] hover:underline">Lihat Semua →</button>
        </div>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar -mx-4 px-4">
          {destinations.map((d, i) => (
            <div key={i} className="min-w-[200px] bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden flex-shrink-0 border border-[#c1c7cf]/20">
              <div className="h-24 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={d.image}
                  alt={d.name}
                />
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-[13px] font-bold text-[#003b5a]">{d.name}</h4>
                  <span className="text-[9px] bg-[#003b5a]/10 text-[#003b5a] px-2 py-0.5 rounded-full font-medium">{d.tag}</span>
                </div>
                <p className="text-[11px] text-[#41474e] leading-snug">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Preview Section: Event Terdekat */}
      <div className="px-4 mt-6">
        <h3 className="text-[16px] font-bold text-[#003b5a] mb-3">Event Terdekat</h3>
        <div className="space-y-2.5">
          {events.map((e, i) => (
            <div key={i} className="bg-white rounded-xl p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#c1c7cf]/20 flex items-center gap-3">
              <div className="text-2xl w-10 h-10 flex items-center justify-center bg-[#f4ede3] rounded-lg">{e.icon}</div>
              <div className="flex-1">
                <h4 className="text-[13px] font-semibold text-[#1e1b16]">{e.name}</h4>
                <p className="text-[11px] text-[#41474e]">{e.date}</p>
              </div>
              <button className="text-[11px] font-semibold text-[#003b5a] bg-[#003b5a]/10 px-3 py-1.5 rounded-full">Detail</button>
            </div>
          ))}
        </div>
      </div>

      {/* Info Footer */}
      <div className="px-4 mt-6 mb-8">
        <div className="bg-gradient-to-r from-[#f4ede3] to-[#e8e1d8] rounded-xl p-4 text-center border border-[#c1c7cf]/20">
          <p className="text-[13px] text-[#41474e]">
            Bagian dari ekosistem{' '}
            <span className="font-bold text-[#003b5a]">Pesona Baubau Digital Hub</span>
          </p>
          <p className="text-[10px] text-[#41474e] mt-1">
            Dinas Pariwisata Kota Baubau × CV Sarjana Komputer
          </p>
        </div>
      </div>
    </div>
  );
}

export default BerandaMitra;
