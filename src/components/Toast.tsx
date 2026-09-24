import React from 'react';
import type { ToastMessage } from '../types';

interface ToastProps {
  toast: ToastMessage | null;
}

export const Toast: React.FC<ToastProps> = ({ toast }) => {
  if (!toast) return null;

  const border =
    toast.type === 'success'
      ? 'border-emerald-500/40'
      : toast.type === 'error'
        ? 'border-red-500/40'
        : 'border-white/20';

  const accent =
    toast.type === 'success' ? 'text-emerald-300' : toast.type === 'error' ? 'text-red-300' : 'text-white';

  return (
    <div
      role="status"
      className={`fixed bottom-6 right-6 z-[90] max-w-sm px-4 py-3 rounded-xl bg-[#0d0f16]/95 backdrop-blur-xl border ${border} ${accent} text-xs font-mono shadow-2xl toast-in`}
    >
      {toast.message}
    </div>
  );
};
