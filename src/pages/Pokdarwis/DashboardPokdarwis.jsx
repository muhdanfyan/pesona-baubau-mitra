import { useNavigate } from 'react-router-dom';
import BottomNavMitra from '../../components/BottomNavMitra';

export default function DashboardPokdarwis() {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Destinasi Binaan', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', path: '/pokdarwis/destinasi' },
    { label: 'Anggota', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
    { label: 'Laporan', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', path: '/pokdarwis/laporan' },
    { label: 'Profil', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', path: '/profil' },
  ];

  const activities = [
    { text: 'Laporan kebersihan Pantai Kamali telah dikirim', time: '2 jam lalu', icon: 'check_circle' },
    { text: 'Notifikasi: Undangan Rapat Koordinasi Dinas Pariwisata', time: '5 jam lalu', icon: 'mail' },
  ];

  return (
    <div className="font-body text-on-surface antialiased min-h-screen pb-24 bg-[#F5F3F0]">
      {/* Top Navigation */}
      <header className="bg-surface sticky top-0 z-50 flex justify-between items-center w-full px-margin-mobile h-[64px] border-b border-[#c1c7cf]/30 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#2D5A3E]/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-[#2D5A3E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </div>
          <div className="flex flex-col">
            <h1 className="text-[16px] font-bold text-[#003b5a] leading-tight">Pokdarwis Kelurahan Baubau</h1>
            <p className="text-[10px] font-medium text-[#41474e] flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Jl. Sultan Hasanuddin No. 12
            </p>
          </div>
        </div>
        <button onClick={() => navigate('/notifikasi')} className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#eee7de] transition-colors active:scale-95">
          <svg className="w-5 h-5 text-[#003b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
      </header>

      <main className="pb-[80px] pt-4">
        {/* Hero Banner */}
        <section className="px-margin-mobile mb-xl">
          <div className="relative w-full h-[140px] rounded-2xl overflow-hidden mb-lg light-shadow">
            <img
              className="w-full h-full object-cover"
              alt="Benteng Keraton Buton"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn_MDgqv5s5zUlpHnAfykXuQ28NmTTUYyE2Cri6ad6Eh_eJUx3AJnkEJndVLtLbKTCCZ6K2mD97qfhb0ohsu_lhZv2JQOs0sGMiQDdRkJsDU92OewXa2QUXp9AG4vkGw5KHqI-YeJp0hZUzIjiXkagG8qOlom11auTNfJmJ8WvVMq4Cre12yTnG4SennTMoM3OfPEedA3n9YnBrU4p1sdS3UuJ_49ZhbM-W1RBPZWo8QVuWkbw7Bkd_1o3U_2HItT3-4OWPTwpsfHV"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-lg">
              <span className="text-white text-[11px] font-medium uppercase tracking-wider opacity-80">Dashboard Pengelola</span>
              <h2 className="text-white text-[20px] font-bold">Halo, Admin Baubau</h2>
            </div>
          </div>

          {/* Stats Horizontal Scroll */}
          <div className="flex gap-lg overflow-x-auto hide-scrollbar -mx-margin-mobile px-margin-mobile">
            <div className="min-w-[140px] bg-white p-lg rounded-xl light-shadow flex flex-col gap-sm border-l-4 border-[#2D5A3E]">
              <svg className="w-6 h-6 text-[#2D5A3E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-[22px] font-bold text-[#003b5a] leading-tight">8</span>
                <span className="text-[12px] font-medium text-[#41474e]">Destinasi Binaan</span>
              </div>
            </div>
            <div className="min-w-[140px] bg-white p-lg rounded-xl light-shadow flex flex-col gap-sm border-l-4 border-[#2D5A3E]">
              <svg className="w-6 h-6 text-[#2D5A3E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-[22px] font-bold text-[#003b5a] leading-tight">24</span>
                <span className="text-[12px] font-medium text-[#41474e]">Anggota Aktif</span>
              </div>
            </div>
            <div className="min-w-[140px] bg-white p-lg rounded-xl light-shadow flex flex-col gap-sm border-l-4 border-[#2D5A3E]">
              <svg className="w-6 h-6 text-[#2D5A3E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div className="flex flex-col">
                <span className="text-[22px] font-bold text-[#003b5a] leading-tight">12</span>
                <span className="text-[12px] font-medium text-[#41474e]">Laporan Bulan Ini</span>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Grid */}
        <section className="px-margin-mobile mb-xl">
          <h3 className="text-[16px] font-bold text-[#003b5a] mb-lg">Menu Utama</h3>
          <div className="grid grid-cols-2 gap-gutter">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => item.path && navigate(item.path)}
                className="bg-white p-xl rounded-2xl light-shadow flex flex-col items-center gap-md hover:bg-[#f4ede3] transition-all active:scale-95 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#2D5A3E]/10 flex items-center justify-center text-[#2D5A3E] group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <span className="text-[16px] font-semibold text-center text-[#003b5a]">{item.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Activities & Tasks */}
        <section className="px-margin-mobile space-y-xl">
          <div>
            <div className="flex justify-between items-center mb-lg">
              <h3 className="text-[16px] font-bold text-[#003b5a]">Aktivitas Terbaru</h3>
              <button className="text-[#2D5A3E] text-[11px] font-bold uppercase tracking-wide">Lihat Semua</button>
            </div>
            <div className="space-y-lg">
              {activities.map((act, i) => (
                <div key={i} className="bg-white p-lg rounded-xl light-shadow flex gap-lg items-start border-l-4 border-[#2D5A3E]/40">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-[#f4ede3] flex items-center justify-center">
                    <svg className={`w-5 h-5 text-[#2D5A3E]`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      {act.icon === 'check_circle' ? (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      )}
                    </svg>
                  </div>
                  <div className="flex flex-col gap-xs">
                    <p className="text-[14px] text-[#003b5a] leading-snug">{act.text}</p>
                    <span className="text-[12px] text-[#41474e]/70 italic">{act.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tasks */}
          <div className="bg-[#003b5a] p-xl rounded-2xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
            <h3 className="text-[18px] font-semibold text-white mb-lg relative z-10">Tugas Hari Ini</h3>
            <div className="space-y-md relative z-10">
              {[
                'Cek kebersihan area Benteng Keraton',
                'Laporan mingguan jumlah pengunjung',
              ].map((task, i) => (
                <label key={i} className="flex items-center gap-lg bg-white/10 p-md rounded-xl cursor-pointer active:bg-white/20 transition-colors border border-white/10">
                  <input type="checkbox" className="w-5 h-5 rounded border-white/30 bg-transparent text-[#745a27] focus:ring-0" />
                  <span className="text-[14px] font-medium text-white/90">{task}</span>
                </label>
              ))}
            </div>
            <button className="mt-xl w-full py-md bg-[#745a27] text-white rounded-xl text-[14px] font-medium flex items-center justify-center gap-sm">
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Tambah Tugas Baru
            </button>
          </div>
        </section>
      </main>

      <BottomNavMitra role="pokdarwis" />
    </div>
  );
}
