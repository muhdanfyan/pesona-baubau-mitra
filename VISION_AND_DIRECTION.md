# 🎯 Visi & Arah Pengembangan — Portal Mitra

## Tujuan
Portal bagi mitra pariwisata (UMKM, Hotel, Pokdarwis) untuk berinteraksi dengan Dinas Pariwisata.

## Acuan Desain
WAJIB mengacu pada `public/acuan-desain/`. Setiap folder berisi screen.png (visual) dan code.html (struktur komponen).

Daftar halaman yang ada acuannya:
- analisa_detail_performa
- destination_management
- destination_management_with_report_modal
- destination_management_with_success_confirmation
- detail_laporan
- hotel_dashboard
- login_registration
- manage_products
- manajemen_kemitraan
- maritime_cultural_hub
- notifikasi
- pokdarwis_dashboard
- profil_mitra
- report_history
- report_history_with_count_summary
- report_history_with_date_range_picker
- report_history_with_export_csv_button
- report_history_with_interactive_summary_filters
- report_history_with_refined_filters
- tambah_edit_layanan
- tambah_update_laporan
- umkm_dashboard

## Design System
- Warna utama: Biru laut #1A5276
- Warna aksen: Hijau daun #2D5A3E (untuk UMKM), Emas #C9A96E (untuk hotel), Biru #1A5276 (untuk Pokdarwis)
- Background: #F5F3F0
- Font: Inter

## Aturan Kode
- Mobile-first (mitra akses dari HP)
- Setiap role punya routing terpisah: /umkm/*, /hotel/*, /pokdarwis/*
- Bottom navigation untuk mobile, sidebar untuk desktop
