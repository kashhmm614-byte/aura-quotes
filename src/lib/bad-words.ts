const WORDS: string[] = [
  'fuck', 'fucks', 'fucking', 'fucker', 'fuckers', 'fuckhead', 'fuckface', 'fuckass', 'fucktard', 'motherfucker', 'motherfuckers', 'motherfucking', 'mf', 'fuk', 'fukk', 'fucc', 'fuc',
  'shit', 'shits', 'shitty', 'shite', 'shat', 'bullshit', 'horseshit', 'dipshit', 'shithead', 'shitting', 'douchebag', 'douche', 'douch',
  'bitch', 'bitches', 'bitching', 'sonofabitch', 'biatch', 'biznitch',
  'bastard', 'bastards',
  'asshole', 'assholes', 'asswipe', 'asshat', 'assclown', 'ass', 'arse', 'arsehole', 'asses',
  'dumbass', 'badass', 'jackass', 'smartass', 'halfass', 'dickass',
  'butt', 'butts', 'butthole', 'buttfuck', 'buttplug', 'butthead',
  'dick', 'dicks', 'dickhead', 'dicking', 'dildo', 'dildos',
  'pussy', 'pussies', 'pusy',
  'cunt', 'cunts', 'kunt',
  'cock', 'cocks', 'cockhead', 'cocksucker',
  'penis', 'penises', 'vagina', 'vaginas', 'vajayjay',
  'tits', 'titties', 'titty', 'boobs', 'boob', 'nipples', 'nipple',
  'jizz', 'jizzed', 'jizzing',
  'cum', 'cums', 'cumming', 'cumshot', 'semen',
  'slut', 'sluts', 'slutty', 'whore', 'whores', 'skank', 'skanky',
  'nigger', 'niggers', 'nigga', 'niggas', 'nigguh', 'nig', 'nigs',
  'faggot', 'faggots', 'fag', 'fags', 'faggit', 'f@ggot',
  'dyke', 'dykes',
  'retard', 'retarded', 'retards', 'retardation',
  'spic', 'spics', 'wetback', 'wetbacks',
  'kike', 'kikes',
  'chink', 'chinks',
  'cracker', 'crackers',
  'tranny', 'trannies',
  'rape', 'raped', 'raping', 'rapist',
  'kill', 'murder', 'suicide', 'hang yourself',
  'nazi', 'hitler', 'heil',
  'porn', 'porno', 'pornography', 'xxx', 'xvideos', 'pornhub',
  'anal', 'anus', 'rectum',
  'orgasm', 'orgy', 'masturbate', 'masturbating', 'masturbation', 'handjob', 'blowjob', 'blow job',
  'sperm', 'testicles', 'scrotum',
  'wanker', 'wankers', 'wanking',
  'bollocks', 'bugger', 'twat', 'twats', 'minger', 'prick', 'pricks',
  'goddamn', 'goddamned', 'dammit', 'damnit',
  'crap', 'crappy', 'piss', 'pissed', 'pissing', 'pisser',
  'stfu', 'gtfo', 'wtf', 'tfh', 'idiot', 'idiots', 'moron', 'morons', 'loser', 'pathetic',
  'drug', 'drugs', 'cocaine', 'heroin', 'meth', 'weed', 'marijuana'
];

function leetNormalize(s: string): string {
  return String(s || '')
    .toLowerCase()
    .replace(/[0]/g, 'o')
    .replace(/[1!|]/g, 'i')
    .replace(/[3]/g, 'e')
    .replace(/[4@]/g, 'a')
    .replace(/[5$]/g, 's')
    .replace(/[7]/g, 't')
    .replace(/[^\sa-z*#]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokens(s: string): string[] {
  return leetNormalize(s)
    .split(/[^a-z*#]+/)
    .filter(Boolean);
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function tokenMatchesWord(tok: string, w: string): boolean {
  if (tok === w) return true;
  if (!tok.includes('*') && !tok.includes('#')) return false;
  if (tok.length !== w.length) return false;
  const re = new RegExp(
    '^' +
      tok
        .split('')
        .map((ch) => (ch === '*' || ch === '#' ? '[a-z]' : escapeRe(ch)))
        .join('') +
      '$'
  );
  return re.test(w);
}

function joinLetters(list: string[]): string[] {
  const joined: string[] = [];
  let buf = '';
  for (const t of list) {
    if (t.length === 1) {
      buf += t;
    } else {
      if (buf) {
        joined.push(buf);
        buf = '';
      }
      joined.push(t);
    }
  }
  if (buf) joined.push(buf);
  return list.concat(joined);
}

export function containsBadWords(text: string): boolean {
  if (!text) return false;
  const list = tokens(text);
  if (!list.length) return false;
  const all = joinLetters(list);
  for (const bad of WORDS) {
    for (const tok of all) {
      if (tokenMatchesWord(tok, bad)) return true;
    }
  }
  return false;
}

export function findBadWord(text: string): string | null {
  if (!text) return null;
  const list = tokens(text);
  const all = joinLetters(list);
  for (const bad of WORDS) {
    for (const tok of all) {
      if (tokenMatchesWord(tok, bad)) return bad;
    }
  }
  return null;
}

export { WORDS };
