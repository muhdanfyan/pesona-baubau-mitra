import { useNavigate } from 'react-router-dom';
import TopNavMitra from '../../components/TopNavMitra';
import BottomNavMitra from '../../components/BottomNavMitra';
import StatCard from '../../components/StatCard';

export default function DashboardUMKM() {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Kelola Produk', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4', path: '/umkm/produk', bg: 'bg-[#003b5a]' },
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
    <div className="min-h-screen bg-[#F5F3F0] font-body text-on-surface antialiased pb-24">
      <TopNavMitra title="Pesona Baubau Digital Hub" />

      <main className="px-margin-mobile pt-lg pb-4xl max-w-[1200px] mx-auto">
        {/* Welcome */}
        <section className="mb-xl">
          <h2 className="text-[24px] font-bold text-[#003b5a] mb-xs">Halo, Andi Sastro!</h2>
          <p className="text-[14px] text-[#41474e]">Selamat datang kembali di dashboard UMKM Anda.</p>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-2xl">
          <StatCard icon="inventory" label="Produk Aktif" value="24" color="primary" />
          <StatCard icon="visibility" label="Dilihat Hari Ini" value="158" color="secondary" />
          <StatCard icon="chat" label="Pesanan Masuk" value="3" color="green" borderColor="border-green-600" />
        </section>

        {/* Menu Grid */}
        <section className="mb-2xl">
          <h3 className="text-[18px] font-semibold text-[#003b5a] mb-lg">Menu Utama</h3>
          <div className="grid grid-cols-2 gap-gutter">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => item.path && navigate(item.path)}
                className="bg-white p-xl rounded-2xl light-shadow flex flex-col items-center justify-center text-center gap-md hover:bg-[#eee7de] transition-all active-interaction"
              >
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <span className="text-[16px] font-semibold text-[#003b5a]">{item.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mb-4xl">
          <div className="flex justify-between items-end mb-lg">
            <h3 className="text-[18px] font-semibold text-[#003b5a]">Aktivitas Terakhir</h3>
            <button className="text-[12px] font-medium text-[#003b5a] hover:underline">Lihat Semua</button>
          </div>
          <div className="bg-white rounded-2xl light-shadow overflow-hidden">
            {activities.map((act, i) => (
              <div key={i} className={`p-lg border-b border-[#c1c7cf]/20 flex items-center gap-lg hover:bg-[#faf3e9] transition-colors ${i === activities.length - 1 ? 'border-b-0' : ''}`}>
                <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                  {act.img ? (
                    <img className="w-full h-full object-cover" src={act.img} alt="" />
                  ) : (
                    <div className="w-full h-full bg-[#94c5ee] flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#003b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={act.icon === 'person' ? 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' : 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z'} />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <p className="text-[14px] font-medium text-[#1e1b16]">{act.text}</p>
                  <p className="text-[12px] font-medium text-[#72787f]">{act.time}</p>
                </div>
                <svg className="w-5 h-5 text-[#72787f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
        className="fixed bottom-24 right-margin-mobile w-14 h-14 bg-[#003b5a] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#1a5276] transition-all active:scale-90 z-40"
      >
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>

      <BottomNavMitra role="umkm" />
    </div>
  );
}
