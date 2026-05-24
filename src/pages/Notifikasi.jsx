import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavMitra from '../components/BottomNavMitra';

const notifications = [
  {
    id: 1,
    unread: true,
    icon: 'description',
    bgColor: 'bg-[#fedb9b]',
    iconColor: 'text-[#795f2b]',
    title: 'Report Status Updated',
    time: '2 mins ago',
    desc: 'Your "Q3 Tourism Traffic Analysis" report has been reviewed and approved by the regional hub manager.',
    actions: true,
  },
  {
    id: 2,
    unread: true,
    icon: 'handshake',
    bgColor: 'bg-[#ffddb3]',
    iconColor: 'text-[#633f00]',
    title: 'New Partnership Request',
    time: '1 hour ago',
    desc: 'Maritime Adventure Co. has requested a partnership for the upcoming Buton Cultural Festival. Review the proposal.',
  },
  {
    id: 3,
    unread: false,
    icon: 'settings',
    bgColor: 'bg-[#eee7de]',
    iconColor: 'text-[#72787f]',
    title: 'System Maintenance',
    time: 'Yesterday',
    desc: 'The portal will undergo scheduled maintenance tonight from 02:00 AM to 04:00 AM WITA. Access may be intermittent.',
  },
  {
    id: 4,
    unread: false,
    icon: 'campaign',
    bgColor: 'bg-[#eee7de]',
    iconColor: 'text-[#72787f]',
    title: 'Holiday Season Promotions',
    time: '2 days ago',
    desc: 'Enroll your services into the annual "Island Bliss" holiday promotion package to increase visibility to 5,000+ potential tourists.',
  },
];

export default function Notifikasi() {
  const navigate = useNavigate();
  const [list, setList] = useState(notifications);

  const markAsRead = (id) => {
    setList(list.map(n => n.id === id ? { ...n, unread: false } : n));
  };

  const markAllRead = () => {
    setList(list.map(n => ({ ...n, unread: false })));
  };

  return (
    <div className="min-h-screen text-[#1e1b16] bg-[#F5F3F0] pb-24">
      {/* Top App Bar */}
      <header className="bg-surface border-b border-[#c1c7cf]/30 shadow-sm sticky top-0 z-50 flex justify-between items-center w-full px-margin-mobile h-[64px]">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-[#eee7de] transition-colors">
            <svg className="w-5 h-5 text-[#003b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <svg className="w-5 h-5 text-[#003b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
          <h1 className="text-[16px] font-bold text-[#003b5a]">Pesona Baubau Digital Hub</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-[#eee7de] transition-colors">
            <svg className="w-5 h-5 text-[#41474e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="p-2 rounded-full hover:bg-[#eee7de] transition-colors relative">
            <svg className="w-5 h-5 text-[#003b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            {list.some(n => n.unread) && <span className="absolute top-2 right-2 w-2 h-2 bg-[#ba1a1a] rounded-full"></span>}
          </button>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-margin-mobile py-xl">
        {/* Header */}
        <div className="mb-xl flex justify-between items-end">
          <div>
            <h2 className="text-[28px] font-bold text-[#003b5a]">Notifications</h2>
            <p className="text-[14px] text-[#41474e] mt-1">Manage your business updates and alerts.</p>
          </div>
          <button onClick={markAllRead} className="text-[#003b5a] text-[14px] font-medium px-4 py-2 hover:bg-[#003b5a]/5 rounded-lg transition-colors flex items-center gap-2">
            <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            Mark all as read
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 mb-lg overflow-x-auto pb-2 hide-scrollbar">
          {['All', 'Reports', 'Partnerships', 'System'].map((f, i) => (
            <button key={f} className={`${i === 0 ? 'bg-[#003b5a] text-white' : 'bg-[#eee7de] text-[#41474e] hover:bg-[#e8e1d8]'} px-4 py-2 rounded-full text-[12px] font-medium whitespace-nowrap shadow-sm transition-all`}>
              {f}
            </button>
          ))}
        </div>

        {/* Notification List */}
        <div className="space-y-4">
          {list.map((n) => (
            <div
              key={n.id}
              onClick={() => markAsRead(n.id)}
              className={`relative rounded-xl p-lg flex gap-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] cursor-pointer hover:bg-surface transition-all ${n.unread ? 'bg-surface-container-lowest' : 'bg-surface/50 border border-[#c1c7cf]/20 opacity-80'}`}
            >
              {n.unread && <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#003b5a] rounded-l-xl"></div>}
              <div className={`w-12 h-12 rounded-full ${n.bgColor} flex items-center justify-center flex-shrink-0`}>
                <svg className={`w-6 h-6 ${n.iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  {n.icon === 'description' && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />}
                  {n.icon === 'handshake' && <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                  {n.icon === 'settings' && <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />}
                  {n.icon === 'campaign' && <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />}
                </svg>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h4 className={`text-[16px] font-semibold ${n.unread ? 'text-[#1e1b16]' : 'text-[#41474e]'}`}>{n.title}</h4>
                  <span className="text-[12px] font-medium text-[#41474e]">{n.time}</span>
                </div>
                <p className="text-[14px] text-[#41474e] leading-relaxed">{n.desc}</p>
                {n.actions && (
                  <div className="mt-3 flex gap-2">
                    <button className="bg-[#003b5a] text-white text-[14px] font-medium px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">View Report</button>
                    <button className="text-[#41474e] text-[14px] font-medium px-4 py-2 rounded-lg border border-[#c1c7cf] hover:bg-[#eee7de] transition-all">Dismiss</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-xl">
          <div className="bg-[#1a5276] text-white p-xl rounded-2xl flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <span className="bg-white/20 px-3 py-1 rounded-full text-[12px] font-medium inline-block mb-4">Partner Highlight</span>
              <h3 className="text-[22px] font-bold mb-2">Congratulations, Mitra!</h3>
              <p className="text-[14px] font-medium opacity-90">Your profile has been featured in the "Top Maritime Operators" section for August. Expect higher engagement this month.</p>
            </div>
            <div className="mt-xl relative z-10">
              <button className="bg-[#ffdea4] text-[#261900] text-[14px] font-medium px-6 py-3 rounded-xl hover:shadow-lg transition-shadow">See Feature Details</button>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-xl rounded-2xl flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.06)] border border-[#c1c7cf]/10">
            <div>
              <div className="flex items-center gap-2 text-[#4d3100] mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-[12px] font-medium uppercase tracking-wider">Account Security</span>
              </div>
              <h3 className="text-[18px] font-semibold text-[#003b5a] mb-2">Security Checklist Complete</h3>
              <p className="text-[14px] text-[#41474e]">All your verification documents have been validated. Your mitra status is now "Gold Tier".</p>
            </div>
            <div className="mt-xl flex items-center justify-between">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-surface bg-[#003b5a]/10 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#003b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-surface bg-[#003b5a]/20 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#003b5a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
              </div>
              <a className="text-[#003b5a] text-[12px] font-medium hover:underline" href="#">Manage Security</a>
            </div>
          </div>
        </div>

        {/* Load More */}
        <div className="mt-2xl flex justify-center pb-8">
          <button className="flex items-center gap-2 text-[14px] font-medium text-[#003b5a] border border-[#003b5a] px-8 py-3 rounded-xl hover:bg-[#003b5a]/5 transition-all">
            Load older notifications
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </main>

      <BottomNavMitra />
    </div>
  );
}
