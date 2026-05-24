import TopNavMitra from '../../components/TopNavMitra';
import BottomNavMitra from '../../components/BottomNavMitra';

export default function KelolaKamar() {
  return (
    <div className="bg-surface font-body text-on-surface min-h-screen pb-24">
      <TopNavMitra title="Kelola Kamar" showBack />

      <main className="px-margin-mobile pt-lg">
        <div className="flex items-center justify-between mb-lg">
          <h2 className="text-[22px] font-bold text-on-surface">Daftar Kamar</h2>
          <button className="bg-[#003b5a] text-white px-lg py-md rounded-xl text-[14px] font-medium flex items-center gap-sm active:scale-95 transition-all shadow-md">
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Tambah Kamar
          </button>
        </div>

        {/* Room cards */}
        <div className="space-y-lg">
          {[
            { name: 'Deluxe Sea View', price: 'Rp 850.000/night', status: 'Tersedia', guests: 2, beds: 1 },
            { name: 'Standard Garden', price: 'Rp 450.000/night', status: 'Terisi', guests: 2, beds: 1 },
            { name: 'Suite President', price: 'Rp 2.500.000/night', status: 'Tersedia', guests: 4, beds: 2 },
          ].map((room, i) => (
            <div key={i} className="bg-white rounded-xl p-md shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#c1c7cf]/20">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-[16px] font-semibold text-[#1e1b16]">{room.name}</h4>
                  <p className="text-[16px] font-semibold text-[#003b5a] mt-xs">{room.price}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-[12px] text-[#72787f] flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {room.guests} Tamu
                    </span>
                    <span className="text-[12px] text-[#72787f] flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                      {room.beds} Kasur
                    </span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-[11px] font-bold ${
                  room.status === 'Tersedia' ? 'bg-green-100 text-green-700' : 'bg-[#ffdad6] text-[#93000a]'
                }`}>
                  {room.status}
                </span>
              </div>
              <div className="flex gap-3 mt-4 pt-3 border-t border-[#c1c7cf]/20">
                <button className="flex-1 h-10 bg-[#003b5a]/10 text-[#003b5a] rounded-lg text-[12px] font-medium hover:bg-[#003b5a]/20 transition-colors">Edit</button>
                <button className="flex-1 h-10 border border-[#c1c7cf]/50 text-[#41474e] rounded-lg text-[12px] font-medium hover:bg-[#eee7de] transition-colors">Nonaktifkan</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <BottomNavMitra role="hotel" />
    </div>
  );
}
