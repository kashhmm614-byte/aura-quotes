export interface LithosTheme {
  id: string;
  name: string;
  baseImg: string;
  revealImg: string;
}

export interface DiscoveryPin {
  id: string;
  x: number;
  y: number;
  tag: string;
  title: string;
  quote: string;
  author: string;
  category: string;
}

export const LITHOS_THEMES: LithosTheme[] = [
  {
    id: 'sedimentary',
    name: 'Sedimentary Strata',
    baseImg:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85',
    revealImg:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85'
  },
  {
    id: 'volcanic',
    name: 'Volcanic Ash',
    baseImg:
      'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&q=85',
    revealImg:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'seabed',
    name: 'Ancient Seabed',
    baseImg:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=85',
    revealImg:
      'https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?auto=format&fit=crop&w=1920&q=85'
  }
];

export const DISCOVERY_PINS_DATA: DiscoveryPin[] = [
  {
    id: 'pin-1',
    x: 32,
    y: 42,
    tag: 'Mesozoic Strata • 163 Ma',
    title: 'Perisphinctes Ammonite',
    quote: '"Time is a river of events, and fierce is its current."',
    author: 'Marcus Aurelius',
    category: 'Stoicism'
  },
  {
    id: 'pin-2',
    x: 68,
    y: 36,
    tag: 'Paleogene Basalt • 58 Ma',
    title: 'Columnar Basalt Joint',
    quote:
      '"In every outthrust headland, in every curve of a beach, there is the poetry of earth."',
    author: 'Rachel Carson',
    category: 'Mindfulness'
  },
  {
    id: 'pin-3',
    x: 76,
    y: 65,
    tag: 'Archean Bioherm • 2.7 Ba',
    title: 'Stromatolite Reef',
    quote: '"Look deep into nature, and then you will understand everything better."',
    author: 'Albert Einstein',
    category: 'Wisdom'
  },
  {
    id: 'pin-4',
    x: 24,
    y: 68,
    tag: 'Devonian Vein • 380 Ma',
    title: 'Hydrothermal Quartz',
    quote: '"What we achieve inwardly will change outer reality."',
    author: 'Plutarch',
    category: 'Philosophy'
  }
];

class LithosAudio {
  private audioCtx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private subOsc: OscillatorNode | null = null;
  private droneOsc: OscillatorNode | null = null;
  audioPlaying = false;

  toggle(): boolean {
    if (this.audioPlaying) {
      this.stop();
      return false;
    }
    this.start();
    return true;
  }

  private start(): void {
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!this.audioCtx) this.audioCtx = new AudioContextClass();
      if (this.audioCtx.state === 'suspended') void this.audioCtx.resume();

      const now = this.audioCtx.currentTime;
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.12, now + 2);

      const filter = this.audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(140, now);
      filter.connect(this.masterGain);
      this.masterGain.connect(this.audioCtx.destination);

      this.subOsc = this.audioCtx.createOscillator();
      this.subOsc.type = 'sine';
      this.subOsc.frequency.setValueAtTime(55, now);
      this.subOsc.connect(filter);
      this.subOsc.start(now);

      this.droneOsc = this.audioCtx.createOscillator();
      this.droneOsc.type = 'triangle';
      this.droneOsc.frequency.setValueAtTime(110, now);
      this.droneOsc.connect(filter);
      this.droneOsc.start(now);

      this.audioPlaying = true;
      this.playChime(528);
    } catch (err) {
      console.warn('Audio start error:', err);
    }
  }

  private stop(): void {
    try {
      if (!this.audioCtx || !this.masterGain) return;
      const now = this.audioCtx.currentTime;
      this.masterGain.gain.cancelScheduledValues(now);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

      setTimeout(() => {
        this.subOsc?.stop();
        this.droneOsc?.stop();
        this.audioPlaying = false;
      }, 900);
    } catch {
      this.audioPlaying = false;
    }
  }

  playChime(freq = 520): void {
    try {
      const AudioContextClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!this.audioCtx) this.audioCtx = new AudioContextClass();
      if (this.audioCtx.state === 'suspended') void this.audioCtx.resume();

      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.8);
    } catch {
      /* safe ignore */
    }
  }
}

export const lithosAudio = new LithosAudio();
