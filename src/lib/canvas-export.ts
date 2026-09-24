import type { ExportFormat, Quote } from '../types';

type Ctx = CanvasRenderingContext2D;

export async function exportQuoteImage(
  quote: Pick<Quote, 'text' | 'author' | 'category' | 'theme'>,
  format: ExportFormat = 'square'
): Promise<boolean> {
  let width = 1080;
  let height = 1080;

  if (format === 'story') {
    width = 1080;
    height = 1920;
  } else if (format === 'landscape') {
    width = 1920;
    height = 1080;
  }

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return false;

  try {
    if (document.fonts) {
      await document.fonts.ready;
    }
  } catch {
    /* proceed */
  }

  const currentTheme =
    quote.theme || document.documentElement.getAttribute('data-theme') || 'midnight';

  drawBackground(ctx, width, height, currentTheme);
  drawOrnaments(ctx, width, height, currentTheme);
  drawHeaderTag(ctx, width, height, quote.category || 'Wisdom', currentTheme);
  const textBottom = drawQuoteText(ctx, width, height, quote.text, format, currentTheme);
  drawAuthor(ctx, width, textBottom + 45, quote.author || 'Anonymous', currentTheme);
  drawWatermark(ctx, width, height, currentTheme);

  return new Promise((resolve) => {
    canvas.toBlob((blob) => {
      if (!blob) return resolve(false);

      const safeAuthor = (quote.author || 'Quote').replace(/[^a-zA-Z0-9]/g, '_');
      const filename = `AuraQuote-${safeAuthor}-${format}-${Date.now()}.png`;

      if (
        navigator.canShare &&
        navigator.canShare({ files: [new File([blob], filename, { type: 'image/png' })] })
      ) {
        const file = new File([blob], filename, { type: 'image/png' });
        navigator
          .share({
            title: 'Daily Inspiration • AuraQuote',
            text: `"${quote.text}" — ${quote.author}`,
            files: [file]
          })
          .then(() => resolve(true))
          .catch(() => {
            downloadBlob(blob, filename);
            resolve(true);
          });
      } else {
        downloadBlob(blob, filename);
        resolve(true);
      }
    }, 'image/png', 1.0);
  });
}

function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function drawBackground(ctx: Ctx, w: number, h: number, theme: string): void {
  const grad = ctx.createLinearGradient(0, 0, w, h);

  if (theme === 'light') {
    grad.addColorStop(0, '#FAFAF9');
    grad.addColorStop(0.5, '#F5F5F4');
    grad.addColorStop(1, '#E2E8F0');
  } else if (theme === 'nordic') {
    grad.addColorStop(0, '#060B14');
    grad.addColorStop(0.5, '#0E172C');
    grad.addColorStop(1, '#0C4A6E');
  } else if (theme === 'sunset') {
    grad.addColorStop(0, '#120C09');
    grad.addColorStop(0.5, '#2D160D');
    grad.addColorStop(1, '#7C2D12');
  } else if (theme === 'emerald') {
    grad.addColorStop(0, '#040C09');
    grad.addColorStop(0.5, '#0B231B');
    grad.addColorStop(1, '#064E3B');
  } else {
    grad.addColorStop(0, '#07090F');
    grad.addColorStop(0.5, '#111420');
    grad.addColorStop(1, '#2E1065');
  }

  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  const radial = ctx.createRadialGradient(w * 0.5, h * 0.45, 50, w * 0.5, h * 0.45, w * 0.55);
  if (theme === 'light') {
    radial.addColorStop(0, 'rgba(37, 99, 235, 0.08)');
    radial.addColorStop(1, 'rgba(255, 255, 255, 0)');
  } else if (theme === 'sunset') {
    radial.addColorStop(0, 'rgba(249, 115, 22, 0.22)');
    radial.addColorStop(1, 'rgba(0, 0, 0, 0)');
  } else if (theme === 'nordic') {
    radial.addColorStop(0, 'rgba(56, 189, 248, 0.2)');
    radial.addColorStop(1, 'rgba(0, 0, 0, 0)');
  } else if (theme === 'emerald') {
    radial.addColorStop(0, 'rgba(16, 185, 129, 0.22)');
    radial.addColorStop(1, 'rgba(0, 0, 0, 0)');
  } else {
    radial.addColorStop(0, 'rgba(129, 140, 248, 0.22)');
    radial.addColorStop(1, 'rgba(0, 0, 0, 0)');
  }
  ctx.fillStyle = radial;
  ctx.fillRect(0, 0, w, h);
}

function drawOrnaments(ctx: Ctx, w: number, h: number, theme: string): void {
  const isLight = theme === 'light';
  const inset = 60;
  ctx.save();
  ctx.strokeStyle = isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.09)';
  ctx.lineWidth = 2;
  ctx.strokeRect(inset, inset, w - inset * 2, h - inset * 2);

  ctx.strokeStyle = isLight ? '#0F172A' : '#F8FAFC';
  ctx.lineWidth = 3.5;
  const cl = 28;
  ctx.beginPath();
  ctx.moveTo(inset, inset + cl);
  ctx.lineTo(inset, inset);
  ctx.lineTo(inset + cl, inset);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w - inset - cl, inset);
  ctx.lineTo(w - inset, inset);
  ctx.lineTo(w - inset, inset + cl);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(inset, h - inset - cl);
  ctx.lineTo(inset, h - inset);
  ctx.lineTo(inset + cl, h - inset);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w - inset - cl, h - inset);
  ctx.lineTo(w - inset, h - inset);
  ctx.lineTo(w - inset, h - inset - cl);
  ctx.stroke();
  ctx.restore();
}

function drawHeaderTag(ctx: Ctx, w: number, _h: number, category: string, theme: string): void {
  ctx.save();
  const isLight = theme === 'light';
  ctx.font = '600 22px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = isLight ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.65)';
  ctx.letterSpacing = '3px';
  ctx.fillText(`✦  ${category.toUpperCase()}  ✦`, w / 2, 130);
  ctx.restore();
}

function drawQuoteText(
  ctx: Ctx,
  w: number,
  h: number,
  text: string,
  format: ExportFormat,
  theme: string
): number {
  ctx.save();
  const isLight = theme === 'light';
  const isStory = format === 'story';
  const isLandscape = format === 'landscape';
  const isShort = text.length < 90;

  let fontSize = 48;
  if (isStory) fontSize = isShort ? 54 : 44;
  else if (isLandscape) fontSize = isShort ? 52 : 42;
  else fontSize = isShort ? 52 : 42;

  const lineHeight = fontSize * 1.48;

  ctx.font = `italic 400 ${fontSize}px "Playfair Display", Georgia, serif`;
  ctx.fillStyle = isLight ? '#0F172A' : '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const maxWidth = isLandscape ? w - 480 : w - 240;
  const words = text.split(' ');
  const lines: string[] = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const testLine = currentLine + ' ' + words[i];
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth) {
      lines.push(currentLine);
      currentLine = words[i];
    } else {
      currentLine = testLine;
    }
  }
  lines.push(currentLine);

  const totalHeight = lines.length * lineHeight;
  const startY = h / 2 - totalHeight / 2 - 20;

  ctx.save();
  ctx.font = '900 140px "Playfair Display", serif';
  ctx.fillStyle = isLight ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.08)';
  ctx.fillText('“', w / 2, startY - 45);
  ctx.restore();

  lines.forEach((line, index) => {
    ctx.fillText(line, w / 2, startY + index * lineHeight);
  });

  ctx.restore();
  return startY + totalHeight;
}

function drawAuthor(ctx: Ctx, w: number, yPos: number, author: string, theme: string): void {
  ctx.save();
  const isLight = theme === 'light';
  ctx.font = '600 28px "Plus Jakarta Sans", sans-serif';
  ctx.fillStyle = isLight ? '#2563EB' : 'rgba(255, 255, 255, 0.9)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText(`— ${author}`, w / 2, yPos);
  ctx.restore();
}

function drawWatermark(ctx: Ctx, w: number, h: number, theme: string): void {
  ctx.save();
  const isLight = theme === 'light';
  ctx.font = '600 16px "JetBrains Mono", monospace';
  ctx.fillStyle = isLight ? 'rgba(0, 0, 0, 0.35)' : 'rgba(255, 255, 255, 0.35)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText('A U R A Q U O T E  ✦  D A I L Y', w / 2, h - 90);
  ctx.restore();
}
