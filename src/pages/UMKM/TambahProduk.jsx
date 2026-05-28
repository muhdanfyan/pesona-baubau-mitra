import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavMitra from '../../components/TopNavMitra';

export default function TambahProduk() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/umkm/produk');
  };

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen pb-24">
      <TopNavMitra title="Tambah Produk" showBack onBack={() => navigate('/umkm/produk')} />

      <main className="px-margin-mobile pt-lg max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div className="space-y-1">
            <label className="text-[12px] font-medium text-[#41474e] ml-1">Foto Produk</label>
            <div className="w-full h-40 bg-white rounded-xl border-2 border-dashed border-[#c1c7cf]/50 flex items-center justify-center cursor-pointer hover:border-[#003b5a]/30 transition-colors">
              <div className="text-center">
                <svg className="w-10 h-10 mx-auto text-[#72787f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-[12px] text-[#72787f] mt-2">Tap untuk upload foto produk</p>
              </div>
            </div>
          </div>

          {/* Nama Produk / Layanan */}
          <div className="space-y-1">
            <label className="text-[12px] font-medium text-[#41474e] ml-1">Nama Produk / Layanan</label>
            <input className="w-full h-[48px] px-4 rounded-xl border border-[#c1c7cf]/30 bg-white focus:ring-2 focus:ring-[#003b5a]/20 focus:border-[#003b5a] outline-none transition-all" placeholder="Masukkan nama produk atau layanan" type="text" />
          </div>

          {/* Tipe */}
          <div className="space-y-1">
            <label className="text-[12px] font-medium text-[#41474e] ml-1">Tipe</label>
            <select className="w-full h-[48px] px-4 rounded-xl border border-[#c1c7cf]/30 bg-white focus:ring-2 focus:ring-[#003b5a]/20 focus:border-[#003b5a] outline-none transition-all text-[#41474e]">
              <option>Produk Fisik</option>
              <option>Layanan / Jasa</option>
            </select>
          </div>

          {/* Kategori */}
          <div className="space-y-1">
            <label className="text-[12px] font-medium text-[#41474e] ml-1">Kategori</label>
            <select className="w-full h-[48px] px-4 rounded-xl border border-[#c1c7cf]/30 bg-white focus:ring-2 focus:ring-[#003b5a]/20 focus:border-[#003b5a] outline-none transition-all text-[#41474e]">
              <option>Pilih kategori</option>
              <option>Kerajinan Tangan</option>
              <option>Makanan & Minuman</option>
              <option>Fashion</option>
              <option>Penginapan / Hotel</option>
              <option>Jasa Fotografer / Pemandu</option>
              <option>Lainnya</option>
            </select>
          </div>

          {/* Harga & Stok */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-[12px] font-medium text-[#41474e] ml-1">Harga (Rp)</label>
              <input className="w-full h-[48px] px-4 rounded-xl border border-[#c1c7cf]/30 bg-white focus:ring-2 focus:ring-[#003b5a]/20 focus:border-[#003b5a] outline-none transition-all" placeholder="0" type="number" />
            </div>
            <div className="space-y-1">
              <label className="text-[12px] font-medium text-[#41474e] ml-1">Stok</label>
              <input className="w-full h-[48px] px-4 rounded-xl border border-[#c1c7cf]/30 bg-white focus:ring-2 focus:ring-[#003b5a]/20 focus:border-[#003b5a] outline-none transition-all" placeholder="0" type="number" />
            </div>
          </div>

          {/* Deskripsi */}
          <div className="space-y-1">
            <label className="text-[12px] font-medium text-[#41474e] ml-1">Deskripsi</label>
            <textarea className="w-full h-24 px-4 py-3 rounded-xl border border-[#c1c7cf]/30 bg-white focus:ring-2 focus:ring-[#003b5a]/20 focus:border-[#003b5a] outline-none transition-all resize-none" placeholder="Deskripsi produk..."></textarea>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button type="button" onClick={() => navigate('/umkm/produk')} className="flex-1 h-[48px] border border-[#72787f] text-[#41474e] rounded-xl text-[14px] font-medium hover:bg-[#eee7de] transition-all">
              Batal
            </button>
            <button type="submit" className="flex-1 h-[48px] bg-[#003b5a] text-white rounded-xl text-[14px] font-medium shadow-md hover:opacity-90 active:scale-95 transition-all">
              Simpan Produk
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
