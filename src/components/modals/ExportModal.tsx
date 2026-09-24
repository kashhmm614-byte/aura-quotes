import React, { useState } from 'react';
import { X, Download, Image as ImageIcon } from 'lucide-react';
import type { Quote, ExportFormat } from '../../types';
import { exportQuoteImage } from '../../lib/canvas-export';

interface ExportModalProps {
  isOpen: boolean;
  quote: Quote | null;
  onClose: () => void;
  onShowToast: (msg: string, type: 'success' | 'error' | 'info') => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  quote,
  onClose,
  onShowToast,
}) => {
  const [format, setFormat] = useState<ExportFormat>('square');
  const [isExporting, setIsExporting] = useState(false);

  if (!isOpen || !quote) return null;

  const handleDownload = async () => {
    setIsExporting(true);
    try {
      const ok = await exportQuoteImage(quote, format);
      if (!ok) throw new Error('export failed');
      onShowToast('✓ 1080p Poster downloaded successfully!', 'success');
      onClose();
    } catch (e) {
      onShowToast('Could not generate poster.', 'error');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="glass-card max-w-md w-full p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl relative animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/50 hover:text-white p-1 rounded-full hover:bg-white/10"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#e8702a] mb-2">
          <ImageIcon size={14} />
          <span>High-Res Poster Export</span>
        </div>

        <h3 className="text-2xl font-playfair text-white mb-2">Export Aesthetic Card</h3>
        <p className="text-xs text-white/60 mb-6">
          Renders a hardware-accelerated 1080p poster with deep time geology gradients ready for Instagram, X, or wallpapers.
        </p>

        {/* Format Selector */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <button
            type="button"
            onClick={() => setFormat('square')}
            className={`p-3 rounded-2xl border text-center cursor-pointer transition-all ${
              format === 'square'
                ? 'bg-[#e8702a]/20 border-[#e8702a] text-[#ff9d63]'
                : 'bg-white/5 border-white/10 text-white/70 hover:text-white'
            }`}
          >
            <div className="w-8 h-8 rounded-lg border border-current mx-auto mb-2" />
            <div className="text-xs font-semibold">Square</div>
            <div className="text-[10px] opacity-60">1:1 (Feed)</div>
          </button>

          <button
            type="button"
            onClick={() => setFormat('story')}
            className={`p-3 rounded-2xl border text-center cursor-pointer transition-all ${
              format === 'story'
                ? 'bg-[#e8702a]/20 border-[#e8702a] text-[#ff9d63]'
                : 'bg-white/5 border-white/10 text-white/70 hover:text-white'
            }`}
          >
            <div className="w-5 h-8 rounded border border-current mx-auto mb-2" />
            <div className="text-xs font-semibold">Story</div>
            <div className="text-[10px] opacity-60">9:16 (Status)</div>
          </button>

          <button
            type="button"
            onClick={() => setFormat('landscape')}
            className={`p-3 rounded-2xl border text-center cursor-pointer transition-all ${
              format === 'landscape'
                ? 'bg-[#e8702a]/20 border-[#e8702a] text-[#ff9d63]'
                : 'bg-white/5 border-white/10 text-white/70 hover:text-white'
            }`}
          >
            <div className="w-8 h-5 rounded border border-current mx-auto mb-2" />
            <div className="text-xs font-semibold">Landscape</div>
            <div className="text-[10px] opacity-60">16:9 (Desktop)</div>
          </button>
        </div>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          disabled={isExporting}
          className="w-full bg-[#e8702a] hover:bg-[#d2611f] text-white py-3 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02] shadow-lg shadow-[#e8702a]/30 cursor-pointer flex items-center justify-center gap-2"
        >
          <Download size={16} />
          <span>{isExporting ? 'Generating Poster...' : 'Download High-Res PNG'}</span>
        </button>
      </div>
    </div>
  );
};
