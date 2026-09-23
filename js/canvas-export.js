/**
 * AuraQuote Canvas Card Exporter
 * Renders high-resolution aesthetic quote posters for social sharing.
 * Supported formats:
 *   - 'square': 1080 × 1080 (1:1 Instagram Post / DP)
 *   - 'story':  1080 × 1920 (9:16 WhatsApp Status / Instagram Story / Wallpaper)
 *   - 'landscape': 1920 × 1080 (16:9 Desktop Wallpaper / Twitter)
 */
class CardExporter {
  /**
   * Generates and downloads a quote image
   * @param {Object} quote - { text, author, category, theme }
   * @param {string} format - 'square' | 'story' | 'landscape'
   */
  static async exportQuoteImage(quote, format = 'square') {
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

    // Ensure fonts are loaded
    try {
      if (document.fonts) {
        await document.fonts.ready;
      }
    } catch (e) {
      // Proceed if font loading promise fails or unsupported
    }

    const currentTheme = quote.theme || document.documentElement.getAttribute('data-theme') || 'midnight';

    // Draw Background
    this._drawBackground(ctx, width, height, currentTheme);

    // Draw Decorative Borders & Accents
    this._drawOrnaments(ctx, width, height, currentTheme);

    // Draw Category & Header Tag
    this._drawHeaderTag(ctx, width, height, quote.category || 'Wisdom', currentTheme);

    // Draw Quote Text
    const textBottom = this._drawQuoteText(ctx, width, height, quote.text, format, currentTheme);

    // Draw Author Attribution
    this._drawAuthor(ctx, width, textBottom + 45, quote.author || 'Anonymous', currentTheme);

    // Draw Footer Watermark
    this._drawWatermark(ctx, width, height, currentTheme);

    // Trigger Download or Native Share
    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (!blob) return resolve(false);

        const safeAuthor = (quote.author || 'Quote').replace(/[^a-zA-Z0-9]/g, '_');
        const filename = `AuraQuote-${safeAuthor}-${format}-${Date.now()}.png`;

        // Check if Web Share API with files is supported (primarily on mobile phones)
        if (navigator.canShare && navigator.canShare({ files: [new File([blob], filename, { type: 'image/png' })] })) {
          const file = new File([blob], filename, { type: 'image/png' });
          navigator.share({
            title: 'Daily Inspiration • AuraQuote',
            text: `"${quote.text}" — ${quote.author}`,
            files: [file]
          }).then(() => resolve(true)).catch(() => {
            this._downloadBlob(blob, filename);
            resolve(true);
          });
        } else {
          this._downloadBlob(blob, filename);
          resolve(true);
        }
      }, 'image/png', 1.0);
    });
  }

  static _downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  static _drawBackground(ctx, w, h, theme) {
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
      // Midnight Velvet (Default)
      grad.addColorStop(0, '#07090F');
      grad.addColorStop(0.5, '#111420');
      grad.addColorStop(1, '#2E1065');
    }

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Subtle radial glow in the center
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

  static _drawOrnaments(ctx, w, h, theme) {
    const isLight = theme === 'light';
    const inset = 60;
    ctx.save();
    ctx.strokeStyle = isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.09)';
    ctx.lineWidth = 2;
    ctx.strokeRect(inset, inset, w - (inset * 2), h - (inset * 2));

    // Corner decorative marks
    ctx.strokeStyle = isLight ? '#0F172A' : '#F8FAFC';
    ctx.lineWidth = 3.5;
    const cl = 28;
    // Top-left
    ctx.beginPath(); ctx.moveTo(inset, inset + cl); ctx.lineTo(inset, inset); ctx.lineTo(inset + cl, inset); ctx.stroke();
    // Top-right
    ctx.beginPath(); ctx.moveTo(w - inset - cl, inset); ctx.lineTo(w - inset, inset); ctx.lineTo(w - inset, inset + cl); ctx.stroke();
    // Bottom-left
    ctx.beginPath(); ctx.moveTo(inset, h - inset - cl); ctx.lineTo(inset, h - inset); ctx.lineTo(inset + cl, h - inset); ctx.stroke();
    // Bottom-right
    ctx.beginPath(); ctx.moveTo(w - inset - cl, h - inset); ctx.lineTo(w - inset, h - inset); ctx.lineTo(w - inset, h - inset - cl); ctx.stroke();

    ctx.restore();
  }

  static _drawHeaderTag(ctx, w, h, category, theme) {
    ctx.save();
    const isLight = theme === 'light';
    ctx.font = '600 22px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = isLight ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.65)';
    ctx.letterSpacing = '3px';

    const tagText = `✦  ${category.toUpperCase()}  ✦`;
    const yPos = 130;
    ctx.fillText(tagText, w / 2, yPos);
    ctx.restore();
  }

  static _drawQuoteText(ctx, w, h, text, format, theme) {
    ctx.save();
    const isLight = theme === 'light';
    const isStory = format === 'story';
    const isLandscape = format === 'landscape';
    const isShort = text.length < 90;

    let fontSize = 48;
    if (isStory) {
      fontSize = isShort ? 54 : 44;
    } else if (isLandscape) {
      fontSize = isShort ? 52 : 42;
    } else {
      fontSize = isShort ? 52 : 42;
    }

    const lineHeight = fontSize * 1.48;

    ctx.font = `italic 400 ${fontSize}px "Playfair Display", Georgia, serif`;
    ctx.fillStyle = isLight ? '#0F172A' : '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Word wrap calculation
    const maxWidth = isLandscape ? (w - 480) : (w - 240);
    const words = text.split(' ');
    const lines = [];
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

    // Calculate vertical start position to center the quote
    const totalHeight = lines.length * lineHeight;
    let startY = (h / 2) - (totalHeight / 2) - 20;

    // Draw decorative quote mark watermark
    ctx.save();
    ctx.font = '900 140px "Playfair Display", serif';
    ctx.fillStyle = isLight ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.08)';
    ctx.fillText('“', w / 2, startY - 45);
    ctx.restore();

    // Render lines
    lines.forEach((line, index) => {
      ctx.fillText(line, w / 2, startY + (index * lineHeight));
    });

    ctx.restore();
    return startY + totalHeight;
  }

  static _drawAuthor(ctx, w, yPos, author, theme) {
    ctx.save();
    const isLight = theme === 'light';
    ctx.font = '600 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillStyle = isLight ? '#2563EB' : 'rgba(255, 255, 255, 0.9)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    ctx.fillText(`— ${author}`, w / 2, yPos);
    ctx.restore();
  }

  static _drawWatermark(ctx, w, h, theme) {
    ctx.save();
    const isLight = theme === 'light';
    ctx.font = '600 16px "JetBrains Mono", monospace';
    ctx.fillStyle = isLight ? 'rgba(0, 0, 0, 0.35)' : 'rgba(255, 255, 255, 0.35)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';

    ctx.fillText('A U R A Q U O T E  ✦  D A I L Y', w / 2, h - 90);
    ctx.restore();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CardExporter };
}
