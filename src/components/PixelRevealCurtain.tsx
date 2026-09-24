import React, { useEffect, useState } from 'react';

interface PixelRevealCurtainProps {
  progress?: number;
  message?: string;
  onDone?: () => void;
  replayKey?: number;
}

export const PixelRevealCurtain: React.FC<PixelRevealCurtainProps> = ({
  progress = 0,
  message = 'Preparing sanctuary...',
  onDone,
  replayKey = 0,
}) => {
  const [visible, setVisible] = useState(true);
  const [localProgress, setLocalProgress] = useState(progress);

  useEffect(() => {
    setVisible(true);
    setLocalProgress(8);
    const steps = [22, 40, 62, 85, 100];
    let i = 0;
    const timers: number[] = [];
    const tick = () => {
      if (i < steps.length) {
        setLocalProgress(steps[i]);
        i += 1;
        timers.push(window.setTimeout(tick, 220));
      } else {
        timers.push(
          window.setTimeout(() => {
            setVisible(false);
            onDone?.();
          }, 280)
        );
      }
    };
    timers.push(window.setTimeout(tick, 120));
    return () => timers.forEach((t) => window.clearTimeout(t));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [replayKey]);

  useEffect(() => {
    if (progress > localProgress) setLocalProgress(progress);
  }, [progress, localProgress]);

  if (!visible) return null;

  const pct = Math.min(100, Math.max(0, localProgress));

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#07080c] transition-opacity duration-500"
      style={{ opacity: pct >= 100 ? 0.15 : 1 }}
      aria-busy="true"
      aria-live="polite"
    >
      <div className="w-64 sm:w-80 flex flex-col items-center gap-5">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#e8702a] to-[#993b0b] flex items-center justify-center p-2.5 border border-[#e8702a]/40 shadow-xl shadow-[#e8702a]/30">
          <svg width="24" height="24" viewBox="0 0 256 256" fill="#ffffff" aria-hidden="true">
            <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
          </svg>
        </div>

        <div className="w-full">
          <div className="flex justify-between text-[10px] font-mono uppercase tracking-widest text-white/50 mb-2">
            <span>AuraQuote</span>
            <span className="text-[#ff9d63]">{pct}%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#e8702a] to-[#ff9d63] transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>

        <p className="text-xs font-mono text-white/45 text-center">{message}</p>
      </div>
    </div>
  );
};
