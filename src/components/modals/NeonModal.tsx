import React, { useState, useRef, useEffect } from 'react';
import { Database, X, Plug, RefreshCcw } from 'lucide-react';
import { auraNeon } from '../../lib/neon-client';
import { auraDB } from '../../lib/db';

interface NeonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string, type: 'success' | 'error' | 'info') => void;
}

export const NeonModal: React.FC<NeonModalProps> = ({ isOpen, onClose, onShowToast }) => {
  const [url, setUrl] = useState('');
  const [alert, setAlert] = useState<{ msg: string; type: 'info' | 'success' | 'error' } | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setAlert(null);
    void auraNeon.init().then(() => {
      if (auraNeon.isConfigured && auraNeon.maskedUrl) {
        setAlert({ msg: `Connected to Neon Postgres (${auraNeon.maskedUrl})`, type: 'success' });
      }
    });
  }, [isOpen]);

  if (!isOpen) return null;

  const testConnection = async () => {
    setBusy(true);
    setAlert({ msg: 'Testing connection to Neon...', type: 'info' });
    const res = await auraNeon.testConnection(url.trim());
    if (res.success) {
      setAlert({ msg: `${res.message}`, type: 'success' });
    } else {
      setAlert({ msg: `Connection failed: ${res.message}`, type: 'error' });
    }
    setBusy(false);
  };

  const saveConfig = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setBusy(true);
    setAlert({ msg: 'Saving and verifying Neon connection...', type: 'info' });
    const res = await auraNeon.saveConfig(url.trim());
    if (res.success) {
      onShowToast('Neon database connected successfully!', 'success');
      onClose();
    } else {
      setAlert({ msg: `Could not save: ${res.message}`, type: 'error' });
    }
    setBusy(false);
  };

  const syncAll = async () => {
    setBusy(true);
    setAlert({ msg: 'Syncing quotes to Neon Serverless Postgres...', type: 'info' });
    const quotes = await auraDB.getAllQuotes();
    const result = await auraNeon.syncAllQuotes(quotes, (_s, _t, msg) => {
      if (msg) setAlert({ msg, type: 'info' });
    });
    if (result.success) {
      setAlert({ msg: result.message || 'Sync complete', type: 'success' });
      onShowToast('Quotes synced to Neon Cloud Database!', 'success');
    } else {
      setAlert({ msg: `Sync incomplete: ${result.message}`, type: 'error' });
    }
    setBusy(false);
  };

  const alertStyles =
    alert?.type === 'error'
      ? 'bg-red-500/15 text-red-200 border-red-500/30'
      : alert?.type === 'success'
        ? 'bg-emerald-500/15 text-emerald-200 border-emerald-500/30'
        : 'bg-indigo-500/15 text-indigo-200 border-indigo-500/30';

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="glass-card max-w-lg w-full p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-5 right-5 text-white/50 hover:text-white p-1 rounded-full hover:bg-white/10">
          <X size={18} />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#e8702a] mb-2">
          <Database size={14} />
          <span>Neon Serverless Postgres</span>
        </div>
        <h3 className="text-2xl font-playfair text-white mb-2">Cloud Database Config</h3>
        <p className="text-xs text-white/60 mb-5">
          Paste your Neon connection string to sync quotes and favorites across every device.
        </p>

        {alert && (
          <div className={`mb-4 text-xs font-mono px-3 py-2 rounded-xl border ${alertStyles}`}>{alert.msg}</div>
        )}

        <form onSubmit={saveConfig} className="space-y-3">
          <input
            type="password"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="postgresql://user:pass@ep-....neon.tech/neondb"
            className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2.5 text-xs font-mono text-white placeholder-white/30 focus:outline-none focus:border-[#e8702a]"
          />
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={busy || !url.trim()}
              onClick={testConnection}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs text-white/80 disabled:opacity-40 cursor-pointer"
            >
              <Plug size={14} />
              Test Connection
            </button>
            <button
              type="button"
              disabled={busy}
              onClick={syncAll}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs text-white/80 disabled:opacity-40 cursor-pointer"
            >
              <RefreshCcw size={14} />
              Sync All Quotes
            </button>
            <button
              type="submit"
              disabled={busy || !url.trim()}
              className="ml-auto px-4 py-2 rounded-xl bg-[#e8702a] hover:bg-[#d2611f] text-white text-xs font-semibold shadow-lg shadow-[#e8702a]/25 disabled:opacity-40 cursor-pointer"
            >
              Save & Connect
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
