import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavMitra from '../../components/TopNavMitra';
import BottomNavMitra from '../../components/BottomNavMitra';

const reports = [
  { id: 1, name: 'Pantai Kamali', category: 'Kebersihan', status: 'Diproses', statusClass: 'bg-[#fedb9b] text-[#795f2b]', date: '14 Okt 2023', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYfYoHX_JRTXjSO0QMqoQOeXCcAPME-QQblKssAGHw34DabpDX2P0dGAZRqeslSYEma_VFyRqcJfd049KIYhCvzEjyqxSVpwix0df8gxFaB3jL06bIU5k8G4d9d4VXIg2PdHGH_PxfLOJFpguC7DuEvM7h6S73Y2nEvlpW23hjSkoFHK5fJAxdNIf3u_h1wycIrmGv8R8JZqElxO0aKrGBEep-ZaQw-RjDv5rii_5HPE8XTswe5mfQLbvLKz9WAq7ZdQTqL6KEimDi', desc: 'Ditemukan tumpukan sampah plastik di area anjungan sebelah barat setelah acara malam minggu...' },
  { id: 2, name: 'Benteng Keraton', category: 'Kerusakan Fasilitas', status: 'Selesai', statusClass: 'bg-[#d4edda] text-[#155724]', date: '12 Okt 2023', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC55UTaeTh-ZlewssBoEyY78XKuoT1xwW_aRWH4he2D84nT1cp6hg8Jl74J3-6VjzSPhx_am3E8dTfJeK40UEFAb36GVzlJW8YCii3gHz34uvP7tjIjvDe2mf9t3-Iy36jhXEjtB2Rqpi4Vlbi-HxPmKCpNGcHDie105C7EeZmVv9sDUVfa1qYGMLfBKNxZ3Bhy-JsRckeR0DWZgVMrv24kAWBVbKsFq3uw6Yr9xL3brenn3jpsKKguR8KAcKkbDKHi0w_4tI9-UcBy', desc: 'Lampu penerangan jalan di gerbang utama mati total, sudah diperbaiki oleh tim teknis...' },
  { id: 3, name: 'Pemandian Samparona', category: 'Kebersihan', status: 'Terkirim', statusClass: 'bg-[#cbe6ff] text-[#001e30]', date: '10 Okt 2023', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByXj3Q9hL1fNE-IPtKUPfLTWvz3lUlk9LVC6gpcXq9sP9Gje6J5oPTJaTCcPFEm5s37t5GLOp7zMZKtYq7uvWVL-RRLg4J-8lu1tCEhNzYnHKDC0dCOjRhD2iKaJXcaxsuvjyrMLDxZc6fJ7JZnn9o8qldsTySroZa70J8R_INpk4Er8PuyIumIImvgNacH4C2nnrI1hQtwD2W7cC9ZX067gyDHJBb5pCo3McWIDA1n3dljoh2cxbEICGWGU1LGThF2UIHgp4kzGjk', desc: 'Laporan rutin mingguan mengenai kondisi air terjun dan ketersediaan tempat sampah di pos 2...' },
  { id: 4, name: 'Pantai Nirwana', category: 'Layanan Pengunjung', status: 'Terkirim', statusClass: 'bg-[#cbe6ff] text-[#001e30]', date: '08 Okt 2023', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSpdk-N3QtGY7cGyK047MifMxDj6ndQW8NtFjBtoVuu_ZejdqxeCOkG1aqkteQS-d76l9iF1ZBYXsjvrmog33cl0JG1PSUM2qdW9LeWF3xcqcQpc9a_2ZPsPRbZ0X0sC5dgGkgTWao71cdosy1DN_qSW1L3BY9tvVUEgfm44lN1z_ofIMjBp2e08vQqatbhXMlOPVP_ouowI5vUG6sedYCbmDEWNxkd8B7eDB0VKWUBEVY5wjsCuUB2gPWboIEsKTUVM3BDWJugH-k', desc: 'Saran penambahan papan informasi digital di pintu masuk utama untuk jadwal pasang surut...' },
];

const filters = ['Semua', 'Terkirim', 'Diproses', 'Selesai'];

export default function Laporan() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('Semua');
  const navigate = useNavigate();

  const filtered = reports.filter(r => {
    if (activeFilter !== 'Semua' && r.status !== activeFilter) return false;
    if (search && !r.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="bg-surface text-on-surface min-h-screen pb-24">
      {/* Top App Bar */}
      <header className="bg-surface sticky top-0 z-50 border-b border-[#c1c7cf]/30 shadow-sm flex justify-between items-center w-full px-margin-mobile h-[64px]">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/pokdarwis')} className="p-2 -ml-2 rounded-full hover:bg-[#eee7de] transition-colors active:scale-95">
            <svg className="w-5 h-5 text-[#003b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-[16px] font-bold text-[#003b5a]">Riwayat Laporan</h1>
        </div>
        <button className="p-2 rounded-full hover:bg-[#eee7de] transition-colors">
          <svg className="w-5 h-5 text-[#003b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
      </header>

      <main className="max-w-[600px] mx-auto px-margin-mobile mt-gutter">
        {/* Search */}
        <div className="relative mb-lg">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#72787f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12 pl-12 pr-4 bg-surface-container-lowest border border-[#c1c7cf]/50 rounded-xl focus:ring-2 focus:ring-[#003b5a]/20 focus:border-[#003b5a] outline-none transition-all placeholder:text-[#72787f]/70"
            placeholder="Cari destinasi..."
            type="text"
          />
        </div>

        {/* Filter Chips */}
        <div className="flex gap-sm overflow-x-auto hide-scrollbar pb-gutter -mx-margin-mobile px-margin-mobile">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-[12px] font-medium border border-[#c1c7cf]/50 transition-colors ${
                activeFilter === f ? 'bg-[#003b5a] text-white border-[#003b5a]' : 'bg-surface-container-lowest text-[#41474e] hover:bg-[#eee7de]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Report List */}
        <div className="flex flex-col gap-lg mt-4">
          {filtered.map((report) => (
            <div key={report.id} className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#c1c7cf]/20 hover:scale-[1.01] transition-transform duration-200">
              <div className="flex justify-between items-start mb-sm">
                <div>
                  <h3 className="text-[16px] font-semibold text-[#1e1b16]">{report.name}</h3>
                  <span className="text-[12px] font-medium text-[#72787f] block">{report.category}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${report.statusClass}`}>{report.status}</span>
              </div>
              <div className="flex gap-md">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                  <img className="w-full h-full object-cover" src={report.img} alt="" />
                </div>
                <div className="flex flex-col justify-between">
                  <p className="text-[14px] text-[#41474e] line-clamp-2">{report.desc}</p>
                  <div className="flex items-center gap-1 text-[#72787f]">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-[11px] font-medium">{report.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <BottomNavMitra role="pokdarwis" />
    </div>
  );
}
