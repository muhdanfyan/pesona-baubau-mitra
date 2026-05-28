import { useNavigate } from 'react-router-dom';
import BottomNavMitra from '../../components/BottomNavMitra';

export default function DashboardUMKM() {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Kelola Produk & Jasa', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4', path: '/umkm/produk', bg: 'bg-[#003b5a]' },
    { label: 'Statistik', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', bg: 'bg-[#745a27]' },
    { label: 'Pesan', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z', bg: 'bg-[#6b4604]' },
    { label: 'Profil', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', path: '/profil', bg: 'bg-[#41474e]' },
  ];

  const activities = [
    { text: 'Produk Tenun Buton dilihat 5 kali', time: '10 menit yang lalu', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiVP5_fdwWKtXS5TvAa7yzuEMMoJvj227esVclmsEc3QDdKG92-DyYSkWl1n1BK2mLhOjiCwJYlYm4WpFqVeWvUgQxG9Z1Bv8kkpcPFSL5UFCgK4ns85jFEqEAYHIMKia90etQgcd4eE-cIYKOkuH5mjMlwFY9RdG5STbZXi_b9c79zgthvnwTkSZ_TKliqtni8AK25ninVrYaBD0yBeRtrTSvXSttTi5Nm1W8xiUmbBh_bxL7RSy_PBXn_iWsdvmEyDjjVPWJgUFY' },
    { text: 'Pesan baru dari Wisatawan', time: '2 jam yang lalu', icon: 'person' },
    { text: 'Pesanan baru: Madu Hutan Buton', time: '5 jam yang lalu', icon: 'shopping_cart' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F3F0] font-body text-[#1e1b16] antialiased pb-24">
      {/* Header */}
      <header className="bg-[#fff8f1] border-b border-[#c1c7cf]/30 shadow-sm flex justify-between items-center w-full px-4 h-[64px] sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#003b5a]/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-[#003b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </div>
          <h1 className="text-[16px] font-bold text-[#003b5a]">Dashboard UMKM</h1>
        </div>
        <button onClick={() => navigate('/notifikasi')} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#eee7de] transition-colors">
          <svg className="w-5 h-5 text-[#41474e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
      </header>

      <main className="px-4 pt-4 max-w-[1200px] mx-auto">
        {/* Welcome */}
        <section className="mb-5">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-full bg-[#003b5a]/10 flex items-center justify-center overflow-hidden">
              <svg className="w-6 h-6 text-[#003b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-[20px] font-bold text-[#003b5a]">Selamat Datang, Mitra UMKM!</h2>
              <p className="text-[12px] text-[#41474e]">Andi Sastro · Bergabung sejak 2023</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-3 gap-3 mb-5">
          <div className="bg-white rounded-xl p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border-l-4 border-[#003b5a] text-center">
            <p className="text-[20px] font-bold text-[#003b5a]">12</p>
            <p className="text-[10px] font-medium text-[#41474e]">Layanan/Produk Aktif</p>
          </div>
          <div className="bg-white rounded-xl p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border-l-4 border-[#745a27] text-center">
            <p className="text-[20px] font-bold text-[#745a27]">45</p>
            <p className="text-[10px] font-medium text-[#41474e]">Dilihat Hari Ini</p>
          </div>
          <div className="bg-white rounded-xl p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] border-l-4 border-green-600 text-center">
            <p className="text-[20px] font-bold text-green-600">3</p>
            <p className="text-[10px] font-medium text-[#41474e]">Pesanan Masuk</p>
          </div>
        </section>

        {/* Menu Grid */}
        <section className="mb-5">
          <h3 className="text-[16px] font-semibold text-[#003b5a] mb-3">Menu Utama</h3>
          <div className="grid grid-cols-2 gap-3">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => item.path && navigate(item.path)}
                className="bg-white p-4 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center text-center gap-3 hover:bg-[#eee7de] transition-all active:scale-95"
              >
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <span className="text-[14px] font-semibold text-[#003b5a]">{item.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mb-6">
          <div className="flex justify-between items-end mb-3">
            <h3 className="text-[16px] font-semibold text-[#003b5a]">Aktivitas Terakhir</h3>
            <button className="text-[11px] font-medium text-[#003b5a] hover:underline">Lihat Semua</button>
          </div>
          <div className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden">
            {activities.map((act, i) => (
              <div key={i} className={`p-4 border-b border-[#c1c7cf]/20 flex items-center gap-3 hover:bg-[#faf3e9] transition-colors ${i === activities.length - 1 ? 'border-b-0' : ''}`}>
                <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                  {act.img ? (
                    <img className="w-full h-full object-cover" src={act.img} alt="" />
                  ) : (
                    <div className="w-full h-full bg-[#94c5ee] flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#003b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={act.icon === 'person' ? 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' : 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z'} />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <p className="text-[13px] font-medium text-[#1e1b16]">{act.text}</p>
                  <p className="text-[11px] font-medium text-[#72787f]">{act.time}</p>
                </div>
                <svg className="w-4 h-4 text-[#72787f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FAB */}
      <button
        onClick={() => navigate('/umkm/produk/tambah')}
        className="fixed bottom-24 right-4 w-14 h-14 bg-[#003b5a] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#1a5276] transition-all active:scale-90 z-40"
      >
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>

      <BottomNavMitra role="umkm" />
    </div>
  );
}
