import { useNavigate } from 'react-router-dom';

export default function TopNavMitra({ title, showBack = false, onBack }) {
  const navigate = useNavigate();

  return (
    <header className="bg-surface sticky top-0 z-50 border-b border-outline-variant/30 shadow-sm flex justify-between items-center w-full px-margin-mobile h-[64px]">
      <div className="flex items-center gap-2">
        {showBack && (
          <button onClick={onBack || (() => navigate(-1))} className="p-2 -ml-2 rounded-full hover:bg-surface-container-high transition-colors">
            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
        <h1 className="font-h3 text-h3-mobile font-bold text-primary">{title}</h1>
      </div>
      <button onClick={() => navigate('/notifikasi')} className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-high transition-colors">
        <svg className="w-5 h-5 text-on-surface-variant" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      </button>
    </header>
  );
}
