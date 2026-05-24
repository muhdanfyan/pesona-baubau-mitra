import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavMitra from '../../components/TopNavMitra';
import BottomNavMitra from '../../components/BottomNavMitra';

const products = [
  { id: 1, name: 'Kain Tenun Buton Motif Kamooru', price: 'Rp 450.000', stock: 12, active: true, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHrU9DKu0om73m9saTBZDsuVorVT36X68P5mC-2daCz09O52RYYvmhS7E9q9D4g-qkU83Zb5WGWVJrz21ibq1OwIqgmuAlyhqiaKH7KlNZB60_3fQ7pyA0rZqB8gvaRX2SeCxKys4rd-f59rxUc2W8tCYYZiHetIN-BZptGQj_f8LPRRZDn4alMegWLiyV7TlHrlfM0JdXRmD5fWmwtgYrBYaiTYyF2rbcc6mc2M1lRQxkYKaKni8yocXDTi3a3D090ZmARJvad9Bl' },
  { id: 2, name: 'Madu Hutan Asli Buton 250ml', price: 'Rp 85.000', stock: 0, active: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwhZCiE5yUg5Cne4aXIiz05QvC0dFlgxk7blscENQW-KbTn2xO5lIvNiE1pcfjZvIP2BfyoEJZISWTsUL17odFm2fcXMX2v4GZ1Bu6Vv-iurIXCZmXOYak0Mr-uneY3jkVvIXLi_L3LDhDieppdwflRQ-EaLnwKh6rSIVUARYROEzgcw0LQ-fEFT3YxtfHM9UaQXc6FoaYn3hK1iMtnlc7CIOElW1LHntwvUcTIgky31JYTKyT6UwGzoHeSd8HWPix2sGXI1hjET5P' },
  { id: 3, name: 'Miniatur Kapal Pinisi Kayu Jati', price: 'Rp 1.250.000', stock: 3, active: true, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrhRiQCNFnT31W9U_9icUobF7ZAZEh0S6ak3tRhZvGxRqpGwSbuHtRfVFXCyEhjIy3fZN3U0CJgTTAA3_EZrw_MaNY5KLZHl4NU8r6f78DvNUxGvot1k7vvkZRXy-_zkqozCNbht-zwxaZ0e6cfxSMnDbyx4x27qrPyiaf6rpX1JDfU7f21lpZKtHVY7FSZtkWgCYY7gwKMVngQ-M9fh8SgwHFWrmJFDhnZKgZG50XWvoPohUUndqNxqWMETNeu1CEDl9sRfg3lEQ9' },
];

const filters = ['Semua', 'Aktif', 'Nonaktif', 'Habis'];

export default function KelolaProduk() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [productList, setProductList] = useState(products);
  const navigate = useNavigate();

  const toggleProduct = (id) => {
    setProductList(productList.map(p => p.id === id ? { ...p, active: !p.active } : p));
  };

  const filteredProducts = productList.filter(p => {
    if (activeFilter === 'Aktif') return p.active;
    if (activeFilter === 'Nonaktif') return !p.active;
    if (activeFilter === 'Habis') return p.stock === 0;
    return true;
  }).filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  const activeCount = productList.filter(p => p.active).length;
  const outOfStock = productList.filter(p => p.stock === 0).length;

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen pb-24">
      <TopNavMitra title="Pesona Baubau Digital Hub" />

      <main className="px-margin-mobile pt-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-lg">
          <h2 className="text-[22px] font-bold text-on-surface">Produk Saya</h2>
          <button
            onClick={() => navigate('/umkm/produk/tambah')}
            className="bg-[#003b5a] text-white px-lg py-md rounded-xl text-[14px] font-medium flex items-center gap-sm active:scale-95 transition-all shadow-md"
          >
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Tambah Produk
          </button>
        </div>

        {/* Search & Filters */}
        <div className="space-y-md mb-xl">
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#72787f]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 h-12 bg-white border border-[#c1c7cf]/50 rounded-xl focus:ring-2 focus:ring-[#003b5a]/20 focus:border-[#003b5a] outline-none transition-all text-[14px]"
              placeholder="Cari produk Anda..."
              type="text"
            />
          </div>
          <div className="flex gap-sm overflow-x-auto custom-scrollbar pb-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-lg h-9 rounded-full text-[12px] font-medium shrink-0 transition-colors ${
                  activeFilter === f ? 'bg-[#003b5a] text-white' : 'bg-white border border-[#c1c7cf]/50 text-[#41474e] hover:bg-[#eee7de]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Product List */}
        <div className="space-y-lg">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl p-md flex gap-md shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#c1c7cf]/20">
              <div className={`w-20 h-20 rounded-lg overflow-hidden shrink-0 ${!product.active ? 'grayscale' : ''}`}>
                <img className="w-full h-full object-cover" src={product.img} alt={product.name} />
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#1e1b16] truncate">{product.name}</h4>
                  <p className="text-[16px] font-semibold text-[#003b5a] mt-xs">{product.price}</p>
                  <p className="text-[12px] font-medium text-[#72787f] mt-1">Stok: {product.stock} unit</p>
                </div>
                <div className="flex items-center gap-md mt-sm">
                  <button className="text-[#72787f] hover:text-[#003b5a] transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button className="text-[#72787f] hover:text-[#ba1a1a] transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between py-1">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={product.active}
                    onChange={() => toggleProduct(product.id)}
                    className="sr-only peer"
                  />
                  <div className="w-10 h-6 bg-[#c1c7cf]/30 rounded-full peer peer-checked:bg-[#003b5a] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-4"></div>
                </label>
                <span className={`text-[12px] font-medium ${product.active ? 'text-[#003b5a] font-bold' : 'text-[#72787f]'}`}>
                  {product.active ? 'Aktif' : 'Nonaktif'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-2xl grid grid-cols-2 gap-md">
          <div className="bg-[#faf3e9] p-lg rounded-xl">
            <span className="text-[12px] font-medium text-[#41474e]">Total Produk</span>
            <p className="text-[22px] font-bold text-[#003b5a]">{productList.length}</p>
          </div>
          <div className="bg-[#faf3e9] p-lg rounded-xl">
            <span className="text-[12px] font-medium text-[#41474e]">Habis Stok</span>
            <p className="text-[22px] font-bold text-[#ba1a1a]">{outOfStock}</p>
          </div>
        </div>
      </main>

      <BottomNavMitra role="umkm" />
    </div>
  );
}
