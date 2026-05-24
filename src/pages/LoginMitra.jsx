import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const partnerTypes = [
  { id: 'umkm', emoji: '\u{1F3EA}', label: 'UMKM' },
  { id: 'hotel', emoji: '\u{1F3E8}', label: 'Hotel/Homestay' },
  { id: 'pokdarwis', emoji: '\u{1F465}', label: 'Pokdarwis' },
];

export default function LoginMitra() {
  const [tab, setTab] = useState('masuk');
  const [selectedPartner, setSelectedPartner] = useState(null);
  const navigate = useNavigate();

  const handleMasuk = (e) => {
    e.preventDefault();
    if (selectedPartner) {
      navigate(`/${selectedPartner}`);
    }
  };

  const handleDaftar = (e) => {
    e.preventDefault();
    if (selectedPartner) {
      navigate(`/${selectedPartner}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 px-4" style={{ background: 'linear-gradient(135deg, #1A5276 0%, #2D5A3E 100%)' }}>
      {/* Header */}
      <header className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-lg">
          <svg className="w-8 h-8 text-[#003b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </div>
        <h1 className="text-[28px] font-bold text-white tracking-tight leading-tight">Pesona Baubau Mitra</h1>
        <p className="text-[14px] text-white/80 mt-2">Pusat Digitalisasi Ekosistem Pariwisata</p>
      </header>

      {/* Main Card */}
      <main className="w-full max-w-md rounded-[24px] shadow-2xl overflow-hidden" style={{ background: 'rgba(255, 248, 241, 0.95)', backdropFilter: 'blur(10px)' }}>
        {/* Tab Navigation */}
        <nav className="flex border-b border-c1c7cf/30">
          <button
            onClick={() => setTab('masuk')}
            className={`flex-1 py-4 text-[16px] font-semibold transition-all duration-300 border-b-2 ${
              tab === 'masuk' ? 'border-[#003b5a] text-[#003b5a]' : 'border-transparent text-[#41474e]'
            }`}
          >
            Masuk
          </button>
          <button
            onClick={() => setTab('daftar')}
            className={`flex-1 py-4 text-[16px] font-semibold transition-all duration-300 border-b-2 ${
              tab === 'daftar' ? 'border-[#003b5a] text-[#003b5a]' : 'border-transparent text-[#41474e]'
            }`}
          >
            Daftar
          </button>
        </nav>

        <div className="p-6">
          {/* Login Form */}
          {tab === 'masuk' && (
            <form onSubmit={handleMasuk} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[12px] font-medium text-[#41474e] ml-1">Email Mitra</label>
                <input
                  className="w-full h-[48px] px-4 rounded-xl border border-[#c1c7cf]/30 bg-white focus:ring-2 focus:ring-[#003b5a]/20 focus:border-[#003b5a] outline-none transition-all"
                  placeholder="nama@email.com"
                  type="email"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[12px] font-medium text-[#41474e] ml-1">Kata Sandi</label>
                <input
                  className="w-full h-[48px] px-4 rounded-xl border border-[#c1c7cf]/30 bg-white focus:ring-2 focus:ring-[#003b5a]/20 focus:border-[#003b5a] outline-none transition-all"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
              <div className="flex justify-end">
                <a className="text-[12px] font-medium text-[#003b5a] hover:underline" href="#">Lupa kata sandi?</a>
              </div>
              <button type="submit" className="w-full h-[48px] bg-[#003b5a] text-white rounded-xl text-[14px] font-medium shadow-md hover:opacity-90 active:scale-95 transition-all">
                Masuk ke Dashboard
              </button>
            </form>
          )}

          {/* Register Form */}
          {tab === 'daftar' && (
            <form onSubmit={handleDaftar} className="space-y-4">
              <div className="space-y-1">
                <label className="text-[12px] font-medium text-[#41474e] ml-1">Nama Lengkap</label>
                <input className="w-full h-[48px] px-4 rounded-xl border border-[#c1c7cf]/30 bg-white focus:ring-2 focus:ring-[#003b5a]/20 focus:border-[#003b5a] outline-none transition-all" placeholder="Masukkan nama sesuai KTP" type="text" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[12px] font-medium text-[#41474e] ml-1">Email</label>
                  <input className="w-full h-[48px] px-4 rounded-xl border border-[#c1c7cf]/30 bg-white focus:ring-2 focus:ring-[#003b5a]/20 focus:border-[#003b5a] outline-none transition-all" placeholder="nama@email.com" type="email" />
                </div>
                <div className="space-y-1">
                  <label className="text-[12px] font-medium text-[#41474e] ml-1">WhatsApp</label>
                  <input className="w-full h-[48px] px-4 rounded-xl border border-[#c1c7cf]/30 bg-white focus:ring-2 focus:ring-[#003b5a]/20 focus:border-[#003b5a] outline-none transition-all" placeholder="0812..." type="tel" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[12px] font-medium text-[#41474e] ml-1">Jenis Kemitraan</label>
                <div className="grid grid-cols-3 gap-2">
                  {partnerTypes.map((p) => (
                    <div
                      key={p.id}
                      onClick={() => setSelectedPartner(p.id)}
                      className={`cursor-pointer flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                        selectedPartner === p.id
                          ? 'border-[#003b5a] bg-[#cbe6ff] ring-2 ring-[#003b5a]/20'
                          : 'border-[#c1c7cf]/30 bg-white hover:bg-[#faf3e9]'
                      }`}
                    >
                      <span className="text-2xl mb-1">{p.emoji}</span>
                      <span className="text-[10px] font-medium text-center leading-tight">{p.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[12px] font-medium text-[#41474e] ml-1">Kata Sandi</label>
                <input className="w-full h-[48px] px-4 rounded-xl border border-[#c1c7cf]/30 bg-white focus:ring-2 focus:ring-[#003b5a]/20 focus:border-[#003b5a] outline-none transition-all" placeholder="Minimal 8 karakter" type="password" />
              </div>
              <div className="flex items-start gap-2 py-2">
                <input className="mt-1 rounded text-[#003b5a] focus:ring-[#003b5a]" id="terms" type="checkbox" />
                <label className="text-[12px] font-medium text-[#41474e]" htmlFor="terms">Saya menyetujui syarat dan ketentuan kemitraan Pesona Baubau Digital Hub.</label>
              </div>
              <button type="submit" className="w-full h-[48px] bg-[#745a27] text-white rounded-xl text-[14px] font-medium shadow-md hover:opacity-90 active:scale-95 transition-all">
                Daftar Sekarang
              </button>
            </form>
          )}
        </div>

        {/* Footer Image */}
        <div className="relative h-24 overflow-hidden mt-2">
          <img
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Baubau landscape"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb08rrAx4_MqyDyhCbzLmLgbxm2O_YAlNgvJHT0Ebak4NAVkio-itc4R_NY7y7x_aGdjalBAmAnjv24luyebecJDuhlL6mfp3Nz3KPGiVtOrDM_pZW1viejVREvdYIzoH-saL9Cux1dRrKQObfwTj32vJmY7FJEEUWW-kEzYTxn6s3OnhDop5z1x7CfvB4ORd7Pfk-o580rnoaXePJyMb8hcsSEFxZU0GOS7r16uOCkCwytheIMd4kMUGBL_2GXbU4fUwGRxZSFWtY"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fff8f1] to-transparent"></div>
        </div>
      </main>

      <footer className="mt-8 text-center">
        <p className="text-[12px] font-medium text-white/60">© 2024 Dinas Pariwisata Kota Baubau. Seluruh Hak Cipta Dilindungi.</p>
      </footer>
    </div>
  );
}
