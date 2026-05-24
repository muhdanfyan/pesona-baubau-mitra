import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavMitra from '../../components/TopNavMitra';
import BottomNavMitra from '../../components/BottomNavMitra';

const destinations = [
  {
    id: 1,
    name: 'Pantai Kamali',
    visits: '1.250',
    status: 'Terawat',
    statusClass: 'bg-green-100 text-green-700 border-green-200',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiD6UwFLk7KSMi18n8bPQwLwGFAy0KY8KvsOTUH4GfOrE4dQ_rR6OE5DsKbnu8APqmidbAHrFNN7uUWGNLpb_oeYycZ8c7QCOVgYpJaOVxgR_auScRqET-Dpf6alx_9tflYeHJDMVuMOGnYdm5_hKp1wiM80TQg04GndfrzqwnNSpkZTpkltIp2vH5N6rOtQM_A-RvL17a6xHbqQJ7bsQ5lgdz5zxqk-poyQ4HCvn34bXPWrO31Thhu0WgLDiL2-zftyZ7MJphrMhZ',
  },
  {
    id: 2,
    name: 'Benteng Keraton Buton',
    visits: '3.400',
    status: 'Butuh Perbaikan',
    statusClass: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB10JV_GmqH613y9eKFrq0GHwt1Ab0saqRQM6n4rE6P7rtA-DOo-RHtnx-8V7c2MEqN03JpbpA2SvY38McRHGjIlU1rWp4mg5FKy_azUVoRgps4CRSUfPtySWVsHYfNetMJqebTFqivjFRnn5OfqpAK_q7Lv-zxHXI8aycQccjO_XrkUQjT24-FDLZVNlk_cOm1H4419sHg8FAcKoCAe9t4miGf3xaTgjAEUNHYl1H18pVL5PvMNBvcH7IG62OwKnNdj8KhptTaH2jD',
  },
  {
    id: 3,
    name: 'Hutan Pinus Samparona',
    visits: '850',
    status: 'Darurat',
    statusClass: 'bg-red-100 text-red-700 border-red-200',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBx9mnJL78m68MbOyQ9VYOQ8t1KHftOjj7xnFHmDB3Iv1lhq6ntPqn5fS87pME_y9SqJPjcvMyET_qPeoOhQeP_wbkNIYoCiB5URUCQWp2YDJoQWFAVBiLVMRNkKC5hmSzTXmhNyp8PUPJfL1x2uvQIvQ6cv7IefYW2lNHwHPl7426i0slY-6rbn5jRzhY3O2iTWlmzNLTOAEcNPLUiBMHp8QGxRTJjrStskeqGiXTyrAuHcpwgvlmNQRPVz7r3rtdOCSxTx0NsW7e_',
  },
];

export default function ManajemenDestinasi() {
  const navigate = useNavigate();
  const [showReportModal, setShowReportModal] = useState(false);
  const [selectedDest, setSelectedDest] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleLapor = (dest) => {
    setSelectedDest(dest);
    setShowReportModal(true);
  };

  const handleSubmitReport = (e) => {
    e.preventDefault();
    setShowReportModal(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen pb-40 bg-[#F5F3F0]">
      {/* Top AppBar */}
      <header className="bg-surface border-b border-[#c1c7cf]/30 shadow-sm fixed top-0 w-full h-[64px] z-50 flex justify-between items-center px-margin-mobile">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/pokdarwis')} className="p-2 -ml-2 rounded-full hover:bg-[#eee7de] transition-colors">
            <svg className="w-5 h-5 text-[#003b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <svg className="w-5 h-5 text-[#003b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
          <h1 className="text-[16px] font-bold text-[#003b5a]">Destinasi Binaan</h1>
        </div>
        <button className="bg-[#1A5276] text-white px-4 py-2 rounded-lg flex items-center gap-2 text-[14px] font-medium transition-all active:scale-95">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <span>Tambah</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="mt-[80px] px-margin-mobile space-y-4">
        {/* Summary */}
        <div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#c1c7cf]/20">
          <div className="flex justify-between items-center mb-sm">
            <p className="text-[12px] font-medium text-[#41474e] uppercase tracking-wider">Overview Kelola</p>
            <svg className="w-5 h-5 text-[#745a27]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[24px] font-bold text-[#003b5a]">3</p>
              <p className="text-[12px] text-[#41474e]">Destinasi Aktif</p>
            </div>
            <div>
              <p className="text-[24px] font-bold text-[#745a27]">5.500</p>
              <p className="text-[12px] text-[#41474e]">Total Kunjungan</p>
            </div>
          </div>
        </div>

        {/* Destination Cards */}
        <div className="space-y-4">
          {destinations.map((dest) => (
            <div key={dest.id} className="bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden border border-[#c1c7cf]/10">
              <div className="relative h-32">
                <img className="w-full h-full object-cover" src={dest.img} alt={dest.name} />
                <div className="absolute top-2 right-2">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-bold border ${dest.statusClass}`}>{dest.status}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-[18px] font-semibold text-[#003b5a] mb-1">{dest.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-[18px] h-[18px] text-[#745a27]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-[13px] text-[#41474e]">{dest.visits} kunjungan bulan ini</p>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  <div className="flex gap-2">
                    <button className="flex-1 bg-[#f4ede3] text-[#003b5a] text-[14px] font-medium py-3 rounded-lg border border-[#c1c7cf]/30 flex items-center justify-center gap-2 active:bg-[#eee7de] transition-colors">
                      <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Update Status
                    </button>
                    <button className="flex-1 bg-[#f4ede3] text-[#003b5a] text-[14px] font-medium py-3 rounded-lg border border-[#c1c7cf]/30 flex items-center justify-center gap-2 active:bg-[#eee7de] transition-colors">
                      <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Lihat Detail
                    </button>
                  </div>
                  <button
                    onClick={() => handleLapor(dest)}
                    className="w-full bg-[#ffdad6]/20 text-[#ba1a1a] text-[14px] font-medium py-3 rounded-lg border border-[#ba1a1a]/20 flex items-center justify-center gap-2 active:bg-[#ffdad6]/40 transition-colors"
                  >
                    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.694-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    Lapor Masalah
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Submit Report FAB */}
      <div className="fixed bottom-[64px] left-0 w-full p-margin-mobile bg-gradient-to-t from-[#fff8f1] via-[#fff8f1]/90 to-transparent z-40">
        <button className="w-full h-[48px] bg-[#003b5a] text-white rounded-xl text-[14px] font-medium shadow-lg flex items-center justify-center gap-3 transition-transform active:scale-[0.98]">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          Kirim Laporan ke Dinas
        </button>
      </div>

      {/* Report Modal */}
      {showReportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40" onClick={() => setShowReportModal(false)}>
          <div className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[18px] font-semibold text-[#003b5a]">Lapor Masalah</h3>
              <button onClick={() => setShowReportModal(false)} className="p-1 hover:bg-[#eee7de] rounded-full">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {selectedDest && (
              <p className="text-[14px] text-[#41474e] mb-4">Destinasi: <span className="font-semibold">{selectedDest.name}</span></p>
            )}
            <form onSubmit={handleSubmitReport} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[12px] font-medium text-[#41474e] ml-1">Jenis Masalah</label>
                <select className="w-full h-[48px] px-4 rounded-xl border border-[#c1c7cf]/30 bg-white focus:ring-2 focus:ring-[#003b5a]/20 focus:border-[#003b5a] outline-none transition-all">
                  <option>Kebersihan</option>
                  <option>Kerusakan Fasilitas</option>
                  <option>Keamanan</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[12px] font-medium text-[#41474e] ml-1">Deskripsi Masalah</label>
                <textarea className="w-full h-24 px-4 py-3 rounded-xl border border-[#c1c7cf]/30 bg-white focus:ring-2 focus:ring-[#003b5a]/20 focus:border-[#003b5a] outline-none transition-all resize-none" placeholder="Jelaskan masalah yang ditemukan..."></textarea>
              </div>
              <div className="space-y-1">
                <label className="text-[12px] font-medium text-[#41474e] ml-1">Foto (opsional)</label>
                <div className="w-full h-24 bg-[#faf3e9] rounded-xl border-2 border-dashed border-[#c1c7cf]/50 flex items-center justify-center cursor-pointer">
                  <div className="text-center">
                    <svg className="w-8 h-8 mx-auto text-[#72787f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-[11px] text-[#72787f] mt-1">Tap untuk upload</p>
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full h-[48px] bg-[#003b5a] text-white rounded-xl text-[14px] font-medium shadow-md hover:opacity-90 active:scale-95 transition-all">
                Kirim Laporan
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg text-[14px] font-medium animate-bounce">
          Laporan berhasil dikirim!
        </div>
      )}

      <BottomNavMitra role="pokdarwis" />
    </div>
  );
}
