import { useNavigate } from 'react-router-dom';
import TopNavMitra from '../../components/TopNavMitra';
import BottomNavMitra from '../../components/BottomNavMitra';

export default function DashboardHotel() {
  const navigate = useNavigate();

  const quickMenu = [
    { label: 'Kelola Kamar', icon: 'bed', path: '/hotel/kamar' },
    { label: 'Reservasi', icon: 'calendar_month' },
    { label: 'Laporan', icon: 'bar_chart' },
    { label: 'Profil', icon: 'person', path: '/profil' },
  ];

  const reservations = [
    { name: 'Ahmad Sulaiman', room: 'Deluxe Sea View', code: '#RSV-2041', type: 'Check-in', typeColor: 'bg-[#003b5a]/10 text-[#003b5a]' },
    { name: 'Siti Rahmawati', room: 'Standard Garden', code: '#RSV-2039', type: 'Stay', typeColor: 'bg-[#745a27]/10 text-[#745a27]' },
    { name: 'Budi Handoko', room: 'Suite President', code: '#RSV-2035', type: 'Check-out', typeColor: 'bg-[#ffdad6] text-[#93000a]' },
  ];

  const facilities = [
    { name: 'Wi-Fi Gratis', icon: 'wifi', active: true },
    { name: 'Air Conditioning', icon: 'ac_unit', active: true },
    { name: 'Breakfast Include', icon: 'restaurant', active: false },
    { name: 'Parkir Luas', icon: 'local_parking', active: true },
  ];

  return (
    <div className="bg-surface text-on-surface min-h-screen pb-24 md:pb-0">
      {/* Top AppBar */}
      <header className="bg-surface border-b border-[#c1c7cf]/30 shadow-sm flex justify-between items-center w-full px-margin-mobile h-[64px] z-50 sticky top-0">
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-[#003b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
          <div className="flex flex-col">
            <h1 className="text-[16px] font-bold text-[#003b5a]">Nirwana Buton Resort</h1>
            <div className="flex items-center text-[#745a27]">
              {[1,2,3,4].map(i => (
                <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 20 20" stroke="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
            </div>
          </div>
        </div>
        <button onClick={() => navigate('/notifikasi')} className="p-2 hover:bg-[#eee7de] transition-colors rounded-full">
          <svg className="w-5 h-5 text-[#41474e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
      </header>

      <main className="max-w-[1200px] mx-auto px-margin-mobile py-lg">
        {/* Quick Menu */}
        <div className="mb-xl">
          <h2 className="text-[22px] font-bold mb-md text-on-surface">Halo, Selamat Pagi!</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {quickMenu.map((item) => (
              <button
                key={item.label}
                onClick={() => item.path && navigate(item.path)}
                className="flex items-center gap-3 bg-surface-container-lowest p-md rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:bg-[#1a5276] hover:text-white transition-all group"
              >
                <div className="p-2 bg-[#003b5a]/10 rounded-lg group-hover:bg-white/20">
                  <svg className="w-5 h-5 text-[#003b5a] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {item.icon === 'bed' && <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5V17c0 .55-.45 1-1 1h-1v1c0 .55-.45 1-1 1s-1-.45-1-1v-1H7v1c0 .55-.45 1-1 1s-1-.45-1-1v-1H4c-.55 0-1-.45-1-1v-6.5c0-.55.45-1 1-1h16c.55 0 1 .45 1 1zM5 12v2h14v-2H5z" />}
                    {item.icon === 'calendar_month' && <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />}
                    {item.icon === 'bar_chart' && <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />}
                    {item.icon === 'person' && <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />}
                  </svg>
                </div>
                <span className="text-[14px] font-medium group-hover:text-white">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-xl">
          <div className="bg-[#1a5276] text-white p-xl rounded-2xl shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-[12px] font-medium opacity-80">Kamar Terisi</p>
              <h3 className="text-[32px] font-bold mt-xs">24</h3>
              <p className="text-[10px] font-medium mt-xs">+2 dari kemarin</p>
            </div>
          </div>
          <div className="bg-[#fedb9b] text-[#5a4312] p-xl rounded-2xl shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-[12px] font-medium opacity-80">Kamar Tersedia</p>
              <h3 className="text-[32px] font-bold mt-xs">12</h3>
              <p className="text-[10px] font-medium mt-xs">Siap huni</p>
            </div>
          </div>
          <div className="bg-[#ffddb3] text-[#633f00] p-xl rounded-2xl shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-[12px] font-medium opacity-80">Permintaan Baru</p>
              <h3 className="text-[32px] font-bold mt-xs">5</h3>
              <p className="text-[10px] font-medium mt-xs">Butuh konfirmasi</p>
            </div>
          </div>
        </div>

        {/* Reservations + Facilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] p-xl">
            <div className="flex justify-between items-center mb-xl">
              <h3 className="text-[18px] font-semibold text-on-surface">Reservasi Hari Ini</h3>
              <button className="text-[#003b5a] text-[14px] font-medium hover:underline">Lihat Semua</button>
            </div>
            <div className="space-y-lg">
              {reservations.map((res, i) => (
                <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-lg border border-[#c1c7cf]/30 rounded-xl hover:border-[#003b5a]/50 transition-colors gap-md">
                  <div className="flex items-center gap-lg">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${res.type === 'Check-out' ? 'bg-[#ffdad6]/10 text-[#ba1a1a]' : res.type === 'Stay' ? 'bg-[#745a27]/5 text-[#745a27]' : 'bg-[#003b5a]/5 text-[#003b5a]'}`}>
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[16px] font-semibold">{res.name}</h4>
                      <p className="text-[14px] text-[#41474e]">{res.room} {res.code}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-xl">
                    <span className={`px-md py-xs rounded-full text-[12px] font-medium ${res.typeColor}`}>{res.type}</span>
                    <div className="flex items-center gap-sm">
                      <button className="px-lg py-2 bg-[#003b5a] text-white rounded-lg text-[14px] font-medium hover:opacity-90 transition-all active:scale-95">Konfirmasi</button>
                      <button className="px-lg py-2 border border-[#72787f] text-[#41474e] rounded-lg text-[14px] font-medium hover:bg-[#eee7de] transition-all">Tolak</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-gutter">
            <div className="bg-surface-container-lowest rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] p-xl">
              <h3 className="text-[18px] font-semibold text-on-surface mb-xl">Fasilitas Aktif</h3>
              <div className="space-y-md">
                {facilities.map((f) => (
                  <label key={f.name} className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#003b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        {f.icon === 'wifi' && <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />}
                        {f.icon === 'ac_unit' && <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />}
                        {f.icon === 'restaurant' && <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />}
                        {f.icon === 'local_parking' && <path strokeLinecap="round" strokeLinejoin="round" d="M5 20h14M5 20V4a1 1 0 011-1h12a1 1 0 011 1v16M9 16h6" />}
                      </svg>
                      <span className="text-[14px] font-medium">{f.name}</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked={f.active} className="sr-only peer" />
                      <div className="w-10 h-6 bg-[#c1c7cf] rounded-full peer peer-checked:bg-[#003b5a] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-4"></div>
                    </label>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-[#f4ede3] rounded-2xl p-xl border border-[#c1c7cf]/20">
              <div className="flex items-start gap-md">
                <svg className="w-5 h-5 text-[#745a27] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" /></svg>
                <div>
                  <h4 className="text-[16px] font-semibold mb-xs">Tips Hari Ini</h4>
                  <p className="text-[14px] text-[#41474e]">Update ketersediaan kamar Anda untuk akhir pekan ini guna meningkatkan visibilitas di halaman utama pencarian.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNavMitra role="hotel" />
    </div>
  );
}
