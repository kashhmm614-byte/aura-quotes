/**
 * AuraQuote profanity filter — shared by browser and Node (server.js / api).
 * Blocks slurs, sexual, hate, and strong profanity with light leetspeak stripping.
 */

export const WORDS = [
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

// Leet / symbol substitutions before matching
function leetNormalize(s) {
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

// Tokens keep * # as in-word masks (b*tch); split on other non-letters
function tokens(s) {
  return leetNormalize(s)
    .split(/[^a-z*#]+/)
    .filter(Boolean);
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Full-match one token against a bad word; * and # in the token match any letter
function tokenMatchesWord(tok, w) {
  if (tok === w) return true;
  if (tok.indexOf('*') === -1 && tok.indexOf('#') === -1) return false;
  if (tok.length !== w.length) return false;
  var re = new RegExp('^' + tok.split('').map(function (ch) {
    return (ch === '*' || ch === '#') ? '[a-z]' : escapeRe(ch);
  }).join('') + '$');
  return re.test(w);
}

export function containsBadWords(text) {
  if (!text) return false;
  var list = tokens(text);
  if (!list.length) return false;

  // Join runs of single letters so "f u c k" / "f.u.c.k" become one token
  var joined = [];
  var buf = '';
  for (var i = 0; i < list.length; i++) {
    if (list[i].length === 1) {
      buf += list[i];
    } else {
      if (buf) { joined.push(buf); buf = ''; }
      joined.push(list[i]);
    }
  }
  if (buf) joined.push(buf);
  // Also keep original tokens
  var all = list.concat(joined);

  for (var w = 0; w < WORDS.length; w++) {
    var bad = WORDS[w];
    for (var t = 0; t < all.length; t++) {
      if (tokenMatchesWord(all[t], bad)) return true;
    }
  }
  return false;
}

export function findBadWord(text) {
  if (!text) return null;
  var list = tokens(text);
  var joined = [];
  var buf = '';
  for (var i = 0; i < list.length; i++) {
    if (list[i].length === 1) buf += list[i];
    else {
      if (buf) { joined.push(buf); buf = ''; }
      joined.push(list[i]);
    }
  }
  if (buf) joined.push(buf);
  var all = list.concat(joined);
  for (var w = 0; w < WORDS.length; w++) {
    var bad = WORDS[w];
    for (var t = 0; t < all.length; t++) {
      if (tokenMatchesWord(all[t], bad)) return bad;
    }
  }
  return null;
}

export default {
  WORDS,
  containsBadWords,
  findBadWord
};
