import { useNavigate, useLocation } from 'react-router-dom';

export default function BottomNavMitra({ role = 'umkm' }) {
  const navigate = useNavigate();
  const location = useLocation();

  const roleConfig = {
    umkm: { label: 'UMKM', color: 'text-primary' },
    hotel: { label: 'Hotel', color: 'text-primary' },
    pokdarwis: { label: 'Pokdarwis', color: 'text-pokdarwis-green' },
  };

  const config = roleConfig[role] || roleConfig.umkm;
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');
  const activeColor = config.color;

  const navItems = [
    { path: `/${role}`, icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', label: 'Beranda' },
    { path: `/${role}/produk`, icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z', label: 'Layanan' },
    { path: '/notifikasi', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z', label: 'Chat' },
    { path: '/profil', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', label: 'Akun' },
  ];

  if (role === 'pokdarwis') {
    navItems[1] = { path: '/pokdarwis/destinasi', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', label: 'Destinasi' };
  }

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-[64px] px-2 bg-surface-container-lowest shadow-[0_-2px_12px_rgba(0,0,0,0.08)] rounded-t-xl">
      {navItems.map((item) => (
        <button
          key={item.path}
          onClick={() => navigate(item.path)}
          className={`flex flex-col items-center justify-center transition-all active:scale-90 w-1/4 h-full ${
            isActive(item.path) ? `${activeColor} font-bold` : 'text-on-surface-variant'
          }`}
        >
          <svg className="w-6 h-6" fill={isActive(item.path) ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive(item.path) ? 0 : 1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
          </svg>
          <span className="font-label text-label-mobile">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
