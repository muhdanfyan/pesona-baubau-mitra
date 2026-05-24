import { useNavigate } from 'react-router-dom';
import BottomNavMitra from '../components/BottomNavMitra';

export default function Profil() {
  const navigate = useNavigate();

  const settings = [
    { label: 'Edit Profil', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { label: 'Keamanan & Password', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
    { label: 'Notifikasi', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
  ];

  const support = [
    { label: 'Pusat Bantuan', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
    { label: 'Tentang Aplikasi', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Kebijakan Privasi', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  ];

  const SettingItem = ({ icon, label, color = 'primary' }) => (
    <button className="flex items-center justify-between w-full p-lg hover:bg-[#eee7de] transition-colors active:opacity-80">
      <div className="flex items-center gap-lg">
        <div className={`w-10 h-10 rounded-lg bg-${color}/5 flex items-center justify-center text-${color}`}>
          <svg className={`w-5 h-5 text-[${color === 'primary' ? '#003b5a' : '#745a27'}]`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
          </svg>
        </div>
        <span className="text-[14px] font-medium">{label}</span>
      </div>
      <svg className="w-5 h-5 text-[#72787f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );

  return (
    <div className="bg-[#fff8f1] text-on-surface min-h-screen pb-4xl">
      {/* TopAppBar */}
      <header className="bg-surface border-b border-[#c1c7cf]/30 shadow-sm fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile h-[64px]">
        <div className="flex items-center gap-base">
          <svg className="w-5 h-5 text-[#003b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
          <h1 className="text-[16px] font-bold text-[#003b5a]">Pesona Baubau Digital Hub</h1>
        </div>
        <button onClick={() => navigate('/notifikasi')} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#eee7de] transition-colors active:opacity-80 active:scale-95">
          <svg className="w-5 h-5 text-[#41474e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
      </header>

      <main className="pt-[80px] px-margin-mobile max-w-2xl mx-auto space-y-xl">
        {/* Profile Header */}
        <section className="flex flex-col items-center py-xl">
          <div className="relative group">
            <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden bg-[#eee7de]">
              <img
                className="w-full h-full object-cover"
                alt="Partner Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsdE3OxDrMKIm-VLRfoQGCOcSLoauahQFroDKulakcPEm6ufKr7BaT4WgI5My2lW-2X_wGwwI47Xe3ZsKg7FwWYOnc_nhSikL0l1eI7-IBSB1fojMn7GEZ5DjdwtueeJ5a_8I-9iJngak6RlxoTBCAxD1FvkmrU9YoSiYAhivi8dhv18QPFUPN3GrYAhsihRElqMWKcUtEnbD5Sibzrr4Wi2Q4He86SmRYis9ibeNoPRrcGJ77tg3_WDFSs7S_uB3I_RgLGG_fWRPj"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-[#003b5a] text-white p-base rounded-full shadow-lg border-2 border-white transition-transform active:scale-90">
              <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </button>
          </div>
          <div className="mt-md text-center">
            <h2 className="text-[22px] font-bold text-[#003b5a]">Andi Pratama</h2>
            <p className="text-[14px] font-medium text-[#41474e]">Mitra Pengelola • Pokdarwis Buton</p>
            <div className="inline-flex items-center mt-sm px-md py-1 bg-[#fedb9b] text-[#5a4312] rounded-full text-[12px] font-medium">
              <svg className="w-3.5 h-3.5 mr-1 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Terverifikasi
            </div>
          </div>
        </section>

        {/* Account Settings */}
        <div className="space-y-md">
          <h3 className="text-[16px] font-semibold text-on-surface px-base">Pengaturan Akun</h3>
          <div className="bg-surface-container-lowest rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden">
            {settings.map((item, i) => (
              <div key={item.label}>
                <SettingItem icon={item.icon} label={item.label} />
                {i < settings.length - 1 && <div className="h-[1px] bg-[#c1c7cf]/20 mx-lg"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Support */}
        <div className="space-y-md">
          <h3 className="text-[16px] font-semibold text-on-surface px-base">Dukungan</h3>
          <div className="bg-surface-container-lowest rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden">
            {support.map((item, i) => (
              <div key={item.label}>
                <SettingItem icon={item.icon} label={item.label} color="secondary" />
                {i < support.length - 1 && <div className="h-[1px] bg-[#c1c7cf]/20 mx-lg"></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Logout */}
        <div className="py-xl">
          <button className="w-full h-12 rounded-xl bg-surface-container-lowest border border-[#ba1a1a] text-[#ba1a1a] text-[14px] font-medium hover:bg-[#ffdad6] transition-all flex items-center justify-center gap-sm active:scale-[0.98]">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Keluar dari Akun
          </button>
          <p className="text-center text-[12px] font-medium text-[#72787f] mt-lg">Versi 2.4.1 (Stable)</p>
        </div>
      </main>

      <BottomNavMitra />
    </div>
  );
}
