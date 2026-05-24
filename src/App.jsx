import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginMitra from './pages/LoginMitra';
import BerandaMitra from './pages/BerandaMitra';
import DashboardUMKM from './pages/UMKM/DashboardUMKM';
import KelolaProduk from './pages/UMKM/KelolaProduk';
import TambahProduk from './pages/UMKM/TambahProduk';
import DashboardHotel from './pages/Hotel/DashboardHotel';
import KelolaKamar from './pages/Hotel/KelolaKamar';
import DashboardPokdarwis from './pages/Pokdarwis/DashboardPokdarwis';
import ManajemenDestinasi from './pages/Pokdarwis/ManajemenDestinasi';
import Laporan from './pages/Pokdarwis/Laporan';
import Notifikasi from './pages/Notifikasi';
import Profil from './pages/Profil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root → Landing page kaya dengan data dummy */}
        <Route path="/" element={<BerandaMitra />} />

        {/* Login - akses dari tombol kecil di pojok kanan header */}
        <Route path="/login" element={<LoginMitra />} />

        {/* UMKM Routes - langsung ke dashboard tanpa login */}
        <Route path="/umkm" element={<DashboardUMKM />} />
        <Route path="/umkm/produk" element={<KelolaProduk />} />
        <Route path="/umkm/produk/tambah" element={<TambahProduk />} />

        {/* Hotel Routes - langsung ke dashboard tanpa login */}
        <Route path="/hotel" element={<DashboardHotel />} />
        <Route path="/hotel/kamar" element={<KelolaKamar />} />

        {/* Pokdarwis Routes - langsung ke dashboard tanpa login */}
        <Route path="/pokdarwis" element={<DashboardPokdarwis />} />
        <Route path="/pokdarwis/destinasi" element={<ManajemenDestinasi />} />
        <Route path="/pokdarwis/laporan" element={<Laporan />} />

        {/* Shared Routes */}
        <Route path="/notifikasi" element={<Notifikasi />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
