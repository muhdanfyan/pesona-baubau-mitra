export default function StatCard({ icon, label, value, color = 'primary', borderColor }) {
  const colorMap = {
    primary: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary-container' },
    secondary: { bg: 'bg-secondary/10', text: 'text-secondary', border: 'border-secondary' },
    green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-600' },
    pokdarwis: { bg: 'bg-pokdarwis-green/10', text: 'text-pokdarwis-green', border: 'border-pokdarwis-green' },
  };
  const s = colorMap[color] || colorMap.primary;

  return (
    <div className={`bg-white rounded-xl p-lg light-shadow border-l-4 ${borderColor || s.border} flex items-center gap-lg`}>
      <div className={`w-12 h-12 rounded-full ${s.bg} flex items-center justify-center`}>
        <svg className={`w-6 h-6 ${s.text}`} fill="currentColor" viewBox="0 0 24 24">
          {icon === 'inventory' && <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H4V4h16v16zM7 9h10V7H7v2zm0 4h10v-2H7v2zm0 4h7v-2H7v2z"/>}
          {icon === 'visibility' && <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>}
          {icon === 'chat' && <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h10V7H7v2zm0 4h8v-2H7v2z"/>}
          {icon === 'location' && <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>}
          {icon === 'group' && <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>}
          {icon === 'description' && <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>}
          {icon === 'bed' && <path d="M21 10.5V17c0 .55-.45 1-1 1h-1v1c0 .55-.45 1-1 1s-1-.45-1-1v-1H7v1c0 .55-.45 1-1 1s-1-.45-1-1v-1H4c-.55 0-1-.45-1-1v-6.5c0-.55.45-1 1-1h16c.55 0 1 .45 1 1zM5 12v2h14v-2H5zm2.5-3c.83 0 1.5-.67 1.5-1.5S8.33 6 7.5 6 6 6.67 6 7.5 6.67 9 7.5 9zm9 0c.83 0 1.5-.67 1.5-1.5S17.33 6 16.5 6 15 6.67 15 7.5 15.67 9 16.5 9z"/>}
        </svg>
      </div>
      <div>
        <p className="font-label text-on-surface-variant">{label}</p>
        <p className="font-h2 text-h2" style={{ color: color === 'primary' ? '#003b5a' : color === 'secondary' ? '#745a27' : undefined }}>{value}</p>
      </div>
    </div>
  );
}
