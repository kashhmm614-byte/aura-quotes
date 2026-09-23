// AuraQuote — Expanded Master Quotes Database (1,000+ Curated Quotes)
// Categories: Romance, Stoicism, Mindfulness, Philosophy, Wisdom, Motivation, Innovation, Poetry & Art, Courage
const SEED_QUOTES = [
  {
    "id": "quote-1",
    "text": "Whatever our souls are made of, his and mine are the same.",
    "author": "Emily Brontë",
    "category": "Romance",
    "tags": [
      "soul",
      "love",
      "passion"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 116
  },
  {
    "id": "quote-2",
    "text": "You have bewitched me, body and soul, and I love, I love, I love you.",
    "author": "Jane Austen",
    "category": "Romance",
    "tags": [
      "devotion",
      "passion",
      "romance"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 49
  },
  {
    "id": "quote-3",
    "text": "I loved her against reason, against promise, against peace, against hope, against happiness, against all discouragement that could be.",
    "author": "Charles Dickens",
    "category": "Romance",
    "tags": [
      "longing",
      "unconditional",
      "heart"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 38
  },
  {
    "id": "quote-4",
    "text": "I love you without knowing how, or when, or from where. I love you straightforwardly, without complexities or pride.",
    "author": "Pablo Neruda",
    "category": "Romance",
    "tags": [
      "devotion",
      "poetry",
      "eternal"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 129
  },
  {
    "id": "quote-5",
    "text": "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.",
    "author": "Maya Angelou",
    "category": "Romance",
    "tags": [
      "barrier",
      "hope",
      "strength"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 70
  },
  {
    "id": "quote-6",
    "text": "Lovers don't finally meet somewhere. They're in each other all along.",
    "author": "Rumi",
    "category": "Romance",
    "tags": [
      "destiny",
      "spiritual",
      "connection"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 66
  },
  {
    "id": "quote-7",
    "text": "If I had a flower for every time I thought of you... I could walk through my garden forever.",
    "author": "Alfred Tennyson",
    "category": "Romance",
    "tags": [
      "affection",
      "memory",
      "garden"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 63
  },
  {
    "id": "quote-8",
    "text": "In vain have I struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you.",
    "author": "Jane Austen",
    "category": "Romance",
    "tags": [
      "confession",
      "ardor",
      "pride"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 52
  },
  {
    "id": "quote-9",
    "text": "The best thing to hold onto in life is each other.",
    "author": "Audrey Hepburn",
    "category": "Romance",
    "tags": [
      "togetherness",
      "tenderness",
      "life"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 129
  },
  {
    "id": "quote-10",
    "text": "Grow old along with me! The best is yet to be.",
    "author": "Robert Browning",
    "category": "Romance",
    "tags": [
      "aging",
      "companionship",
      "future"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 48
  },
  {
    "id": "quote-11",
    "text": "You are my heart, my life, my one and only thought.",
    "author": "Arthur Conan Doyle",
    "category": "Romance",
    "tags": [
      "devotion",
      "clarity",
      "loyalty"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 121
  },
  {
    "id": "quote-12",
    "text": "When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.",
    "author": "Nora Ephron",
    "category": "Romance",
    "tags": [
      "commitment",
      "romance",
      "future"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 129
  },
  {
    "id": "quote-13",
    "text": "To love and be loved is to feel the sun from both sides.",
    "author": "David Viscott",
    "category": "Romance",
    "tags": [
      "warmth",
      "harmony",
      "joy"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 104
  },
  {
    "id": "quote-14",
    "text": "I would rather spend one lifetime with you, than face all the ages of this world alone.",
    "author": "J.R.R. Tolkien",
    "category": "Romance",
    "tags": [
      "eternity",
      "loyalty",
      "companionship"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 46
  },
  {
    "id": "quote-15",
    "text": "We loved with a love that was more than love.",
    "author": "Edgar Allan Poe",
    "category": "Romance",
    "tags": [
      "passion",
      "intense",
      "timeless"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 110
  },
  {
    "id": "quote-16",
    "text": "Love is composed of a single soul inhabiting two bodies.",
    "author": "Aristotle",
    "category": "Romance",
    "tags": [
      "unity",
      "philosophy",
      "soul"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 89
  },
  {
    "id": "quote-17",
    "text": "If you remember me, then I don't care if everyone else forgets.",
    "author": "Haruki Murakami",
    "category": "Romance",
    "tags": [
      "devotion",
      "memory",
      "intimacy"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 39
  },
  {
    "id": "quote-18",
    "text": "There is no charm equal to tenderness of heart.",
    "author": "Jane Austen",
    "category": "Romance",
    "tags": [
      "gentleness",
      "charm",
      "tenderness"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 38
  },
  {
    "id": "quote-19",
    "text": "I wish you to know that you have been the last dream of my soul.",
    "author": "Charles Dickens",
    "category": "Romance",
    "tags": [
      "dream",
      "soul",
      "devotion"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 46
  },
  {
    "id": "quote-20",
    "text": "Doubt thou the stars are fire; Doubt that the sun doth move; Doubt truth to be a liar; But never doubt I love.",
    "author": "William Shakespeare",
    "category": "Romance",
    "tags": [
      "faith",
      "certainty",
      "classic"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 62
  },
  {
    "id": "quote-21",
    "text": "If I know what love is, it is because of you.",
    "author": "Hermann Hesse",
    "category": "Romance",
    "tags": [
      "awakening",
      "gratitude",
      "deep"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 64
  },
  {
    "id": "quote-22",
    "text": "Love is an untamed force. When we try to control it, it destroys us. When we try to imprison it, it enslaves us. When we try to understand it, it leaves us feeling lost and confused.",
    "author": "Paulo Coelho",
    "category": "Romance",
    "tags": [
      "nature",
      "wild",
      "surrender"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 99
  },
  {
    "id": "quote-23",
    "text": "You don't love someone because they're perfect, you love them in spite of the fact that they're not.",
    "author": "Jodi Picoult",
    "category": "Romance",
    "tags": [
      "acceptance",
      "grace",
      "authenticity"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 112
  },
  {
    "id": "quote-24",
    "text": "Where there is love there is life.",
    "author": "Mahatma Gandhi",
    "category": "Romance",
    "tags": [
      "vitality",
      "truth",
      "living"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 38
  },
  {
    "id": "quote-25",
    "text": "I look at you and I would rather look at you than all the portraits in the world.",
    "author": "Frank O'Hara",
    "category": "Romance",
    "tags": [
      "beauty",
      "gaze",
      "modern"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 106
  },
  {
    "id": "quote-26",
    "text": "My heart is, and always will be, yours.",
    "author": "Jane Austen",
    "category": "Romance",
    "tags": [
      "constancy",
      "loyalty",
      "gift"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 60
  },
  {
    "id": "quote-27",
    "text": "The minute I heard my first love story I started looking for you, not knowing how blind that was.",
    "author": "Rumi",
    "category": "Romance",
    "tags": [
      "searching",
      "destiny",
      "awakening"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 126
  },
  {
    "id": "quote-28",
    "text": "Love does not consist in gazing at each other, but in looking outward together in the same direction.",
    "author": "Antoine de Saint-Exupéry",
    "category": "Romance",
    "tags": [
      "partnership",
      "journey",
      "shared-vision"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 118
  },
  {
    "id": "quote-29",
    "text": "I am who I am because of you. You are every reason, every hope, and every dream I've ever had.",
    "author": "Nicholas Sparks",
    "category": "Romance",
    "tags": [
      "gratitude",
      "inspiration",
      "romantic"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 124
  },
  {
    "id": "quote-30",
    "text": "To love or have loved, that is enough. Ask nothing further. There is no other pearl to be found in the dark folds of life.",
    "author": "Victor Hugo",
    "category": "Romance",
    "tags": [
      "completeness",
      "pearl",
      "treasure"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 104
  },
  {
    "id": "quote-31",
    "text": "You are part of my existence, part of myself. You have been in every line I have ever read.",
    "author": "Charles Dickens",
    "category": "Romance",
    "tags": [
      "presence",
      "literature",
      "woven"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 88
  },
  {
    "id": "quote-32",
    "text": "Soul meets soul on lovers' lips.",
    "author": "Percy Bysshe Shelley",
    "category": "Romance",
    "tags": [
      "kiss",
      "soul",
      "poetry"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 63
  },
  {
    "id": "quote-33",
    "text": "I have waited for this opportunity for more than half a century, to repeat to you once again my vow of eternal fidelity and everlasting love.",
    "author": "Gabriel García Márquez",
    "category": "Romance",
    "tags": [
      "patience",
      "eternity",
      "loyalty"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 92
  },
  {
    "id": "quote-34",
    "text": "If equal affection cannot be, let the more loving one be me.",
    "author": "W.H. Auden",
    "category": "Romance",
    "tags": [
      "generosity",
      "vulnerability",
      "poetic"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 110
  },
  {
    "id": "quote-35",
    "text": "You pierce my soul. I am half agony, half hope.",
    "author": "Jane Austen",
    "category": "Romance",
    "tags": [
      "longing",
      "hope",
      "vulnerability"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 70
  },
  {
    "id": "quote-36",
    "text": "There is no remedy for love but to love more.",
    "author": "Henry David Thoreau",
    "category": "Romance",
    "tags": [
      "healing",
      "limitless",
      "cure"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 138
  },
  {
    "id": "quote-37",
    "text": "I fell in love the way you fall asleep: slowly, and then all at once.",
    "author": "John Green",
    "category": "Romance",
    "tags": [
      "surrender",
      "unfolding",
      "spark"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 35
  },
  {
    "id": "quote-38",
    "text": "One word frees us of all the weight and pain of life: that word is love.",
    "author": "Sophocles",
    "category": "Romance",
    "tags": [
      "freedom",
      "weightlessness",
      "ancient"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 132
  },
  {
    "id": "quote-39",
    "text": "The heart has its reasons of which reason knows nothing.",
    "author": "Blaise Pascal",
    "category": "Romance",
    "tags": [
      "mystery",
      "intuition",
      "heart"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 138
  },
  {
    "id": "quote-40",
    "text": "Take my hand, take my whole life too, for I can't help falling in love with you.",
    "author": "Elvis Presley",
    "category": "Romance",
    "tags": [
      "surrender",
      "melody",
      "sweet"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 55
  },
  {
    "id": "quote-41",
    "text": "I want to do with you what spring does with the cherry trees.",
    "author": "Pablo Neruda",
    "category": "Romance",
    "tags": [
      "rebirth",
      "nature",
      "blossom"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 124
  },
  {
    "id": "quote-42",
    "text": "Your love shines in my heart as the sun that shines upon the earth.",
    "author": "Eleanor Di Guillo",
    "category": "Romance",
    "tags": [
      "sunlight",
      "warmth",
      "radiance"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 89
  },
  {
    "id": "quote-43",
    "text": "You are my today and all of my tomorrows.",
    "author": "Leo Christopher",
    "category": "Romance",
    "tags": [
      "constancy",
      "present",
      "future"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 78
  },
  {
    "id": "quote-44",
    "text": "A kiss is a lovely trick designed by nature to stop speech when words become superfluous.",
    "author": "Ingrid Bergman",
    "category": "Romance",
    "tags": [
      "kiss",
      "magic",
      "silence"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 70
  },
  {
    "id": "quote-45",
    "text": "We are most alive when we're in love.",
    "author": "John Updike",
    "category": "Romance",
    "tags": [
      "aliveness",
      "vitality",
      "spark"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 54
  },
  {
    "id": "quote-46",
    "text": "For the two of us, home isn't a place. It is a person. And we are finally home.",
    "author": "Stephanie Perkins",
    "category": "Romance",
    "tags": [
      "home",
      "sanctuary",
      "belonging"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 62
  },
  {
    "id": "quote-47",
    "text": "Love is the bridge between two hearts.",
    "author": "Kahlil Gibran",
    "category": "Romance",
    "tags": [
      "bridge",
      "connection",
      "harmony"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 132
  },
  {
    "id": "quote-48",
    "text": "You make me want to be a better man.",
    "author": "Mark Andrus",
    "category": "Romance",
    "tags": [
      "growth",
      "devotion",
      "betterment"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 78
  },
  {
    "id": "quote-49",
    "text": "I knew the second I met you that there was something about you I needed. Turns out it wasn't something about you at all. It was just you.",
    "author": "Jamie McGuire",
    "category": "Romance",
    "tags": [
      "epiphany",
      "clarity",
      "destiny"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 48
  },
  {
    "id": "quote-50",
    "text": "Love is like the wind, you can't see it but you can feel it.",
    "author": "Nicholas Sparks",
    "category": "Romance",
    "tags": [
      "invisible",
      "feeling",
      "gentle"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 46
  },
  {
    "id": "quote-51",
    "text": "I desire to be with you. I think of you, I feel for you, I have no life without you.",
    "author": "Lord Byron",
    "category": "Romance",
    "tags": [
      "desire",
      "longing",
      "passion"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 83
  },
  {
    "id": "quote-52",
    "text": "To love another person is to see the face of God.",
    "author": "Victor Hugo",
    "category": "Romance",
    "tags": [
      "sacred",
      "transcendence",
      "divine"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 47
  },
  {
    "id": "quote-53",
    "text": "I never had a moment's doubt. I loved you. I believe in you completely. You are my dearest one. My reason for life.",
    "author": "Ian McEwan",
    "category": "Romance",
    "tags": [
      "certainty",
      "faith",
      "dearest"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 80
  },
  {
    "id": "quote-54",
    "text": "I have found the one whom my soul loves.",
    "author": "Song of Solomon",
    "category": "Romance",
    "tags": [
      "scripture",
      "sacred",
      "found"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 79
  },
  {
    "id": "quote-55",
    "text": "Each time you happen to me all over again.",
    "author": "Edith Wharton",
    "category": "Romance",
    "tags": [
      "fresh",
      "wonder",
      "renewed"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 112
  },
  {
    "id": "quote-56",
    "text": "Love takes off masks that we fear we cannot live without and know we cannot live within.",
    "author": "James Baldwin",
    "category": "Romance",
    "tags": [
      "authenticity",
      "vulnerability",
      "courage"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 68
  },
  {
    "id": "quote-57",
    "text": "If you love somebody, let them go, for if they return, they were always yours. And if they don't, they never were.",
    "author": "Kahlil Gibran",
    "category": "Romance",
    "tags": [
      "freedom",
      "trust",
      "letting-go"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 138
  },
  {
    "id": "quote-58",
    "text": "Love is a canvas furnished by nature and embroidered by imagination.",
    "author": "Voltaire",
    "category": "Romance",
    "tags": [
      "canvas",
      "imagination",
      "art"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 40
  },
  {
    "id": "quote-59",
    "text": "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
    "author": "Lao Tzu",
    "category": "Romance",
    "tags": [
      "strength",
      "courage",
      "depth"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 128
  },
  {
    "id": "quote-60",
    "text": "Two souls with but a single thought, two hearts that beat as one.",
    "author": "John Keats",
    "category": "Romance",
    "tags": [
      "harmony",
      "rhythm",
      "unity"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 93
  },
  {
    "id": "quote-61",
    "text": "There is only one happiness in this life, to love and be loved.",
    "author": "George Sand",
    "category": "Romance",
    "tags": [
      "happiness",
      "simplicity",
      "core"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 103
  },
  {
    "id": "quote-62",
    "text": "My bounty is as boundless as the sea, my love as deep; the more I give to thee, the more I have, for both are infinite.",
    "author": "William Shakespeare",
    "category": "Romance",
    "tags": [
      "boundless",
      "infinite",
      "generosity"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 50
  },
  {
    "id": "quote-63",
    "text": "Love looks not with the eyes, but with the mind; and therefore is winged Cupid painted blind.",
    "author": "William Shakespeare",
    "category": "Romance",
    "tags": [
      "mind",
      "vision",
      "depth"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 83
  },
  {
    "id": "quote-64",
    "text": "Love isn't something natural. Rather it requires discipline, concentration, patience, faith, and the overcoming of narcissism.",
    "author": "Erich Fromm",
    "category": "Romance",
    "tags": [
      "discipline",
      "growth",
      "wisdom"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 45
  },
  {
    "id": "quote-65",
    "text": "They slipped briskly into an intimacy from which they never recovered.",
    "author": "F. Scott Fitzgerald",
    "category": "Romance",
    "tags": [
      "intimacy",
      "connection",
      "grace"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 105
  },
  {
    "id": "quote-66",
    "text": "I loved you yesterday, love you still, always have, always will.",
    "author": "Elaine Davis",
    "category": "Romance",
    "tags": [
      "unending",
      "time",
      "steadfast"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 72
  },
  {
    "id": "quote-67",
    "text": "I cannot fix on the hour, or the spot, or the look or the words, which laid the foundation. It was too long ago. I was in the middle before I knew that I had begun.",
    "author": "Jane Austen",
    "category": "Romance",
    "tags": [
      "origins",
      "inevitable",
      "gentle"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 115
  },
  {
    "id": "quote-68",
    "text": "You are every breath I take, every step I make.",
    "author": "Nicholas Sparks",
    "category": "Romance",
    "tags": [
      "breath",
      "rhythm",
      "presence"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 114
  },
  {
    "id": "quote-69",
    "text": "The water shines only by the sun. And it is you who are my sun.",
    "author": "Charles de Leusse",
    "category": "Romance",
    "tags": [
      "sunshine",
      "reflection",
      "light"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 81
  },
  {
    "id": "quote-70",
    "text": "Love is a friendship that has caught fire.",
    "author": "Ann Landers",
    "category": "Romance",
    "tags": [
      "friendship",
      "warmth",
      "flame"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 108
  },
  {
    "id": "quote-71",
    "text": "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
    "author": "Maya Angelou",
    "category": "Romance",
    "tags": [
      "uniqueness",
      "reciprocity",
      "match"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 59
  },
  {
    "id": "quote-72",
    "text": "Whatever is done for love always occurs beyond good and evil.",
    "author": "Friedrich Nietzsche",
    "category": "Romance",
    "tags": [
      "beyond",
      "transcendence",
      "depth"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 125
  },
  {
    "id": "quote-73",
    "text": "To be your friend was all I ever wanted; to be your lover was all I ever dreamed.",
    "author": "Valerie Lombardo",
    "category": "Romance",
    "tags": [
      "friendship",
      "dream",
      "fulfillment"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 43
  },
  {
    "id": "quote-74",
    "text": "I love you more than my own skin.",
    "author": "Frida Kahlo",
    "category": "Romance",
    "tags": [
      "passion",
      "art",
      "raw"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 40
  },
  {
    "id": "quote-75",
    "text": "Yours is the light by which my spirit's born: you are my sun, my moon, and all my stars.",
    "author": "E.E. Cummings",
    "category": "Romance",
    "tags": [
      "stars",
      "cosmos",
      "poetic"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 119
  },
  {
    "id": "quote-76",
    "text": "Love is when the other person's happiness is more important than your own.",
    "author": "H. Jackson Brown Jr.",
    "category": "Romance",
    "tags": [
      "unselfish",
      "devotion",
      "kindness"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 64
  },
  {
    "id": "quote-77",
    "text": "You are the finest, loveliest, tenderest, and most beautiful person I have ever known — and even that is an understatement.",
    "author": "F. Scott Fitzgerald",
    "category": "Romance",
    "tags": [
      "admiration",
      "beauty",
      "reverence"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 133
  },
  {
    "id": "quote-78",
    "text": "I am in you and you in me, mutual in divine love.",
    "author": "William Blake",
    "category": "Romance",
    "tags": [
      "mystic",
      "oneness",
      "divine"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 72
  },
  {
    "id": "quote-79",
    "text": "We are shaped and fashioned by what we love.",
    "author": "Johann Wolfgang von Goethe",
    "category": "Romance",
    "tags": [
      "shaping",
      "transformation",
      "spirit"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 45
  },
  {
    "id": "quote-80",
    "text": "Love understands love; it needs no talk.",
    "author": "Frances Ridley Havergal",
    "category": "Romance",
    "tags": [
      "silence",
      "understanding",
      "peace"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 64
  },
  {
    "id": "quote-81",
    "text": "When I saw you I fell in love, and you smiled because you knew.",
    "author": "Arrigo Boito",
    "category": "Romance",
    "tags": [
      "knowing",
      "smile",
      "spark"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 47
  },
  {
    "id": "quote-82",
    "text": "I cross the oceans of time to find you.",
    "author": "Bram Stoker",
    "category": "Romance",
    "tags": [
      "time",
      "quest",
      "eternity"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 83
  },
  {
    "id": "quote-83",
    "text": "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    "author": "Helen Keller",
    "category": "Romance",
    "tags": [
      "heart",
      "beauty",
      "feeling"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 70
  },
  {
    "id": "quote-84",
    "text": "How do I love thee? Let me count the ways. I love thee to the depth and breadth and height my soul can reach.",
    "author": "Elizabeth Barrett Browning",
    "category": "Romance",
    "tags": [
      "depth",
      "breadth",
      "sonnet"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 93
  },
  {
    "id": "quote-85",
    "text": "Love is a game that two can play and both win.",
    "author": "Eva Gabor",
    "category": "Romance",
    "tags": [
      "playful",
      "harmony",
      "win-win"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 116
  },
  {
    "id": "quote-86",
    "text": "In your light I learn how to love. In your beauty, how to make poems.",
    "author": "Rumi",
    "category": "Romance",
    "tags": [
      "poetry",
      "light",
      "beauty"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 81
  },
  {
    "id": "quote-87",
    "text": "I would find you in any lifetime.",
    "author": "Kanye West",
    "category": "Romance",
    "tags": [
      "destiny",
      "reincarnation",
      "certainty"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 55
  },
  {
    "id": "quote-88",
    "text": "A flower cannot blossom without sunshine, and man cannot live without love.",
    "author": "Max Müller",
    "category": "Romance",
    "tags": [
      "blossom",
      "vitality",
      "sun"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 82
  },
  {
    "id": "quote-89",
    "text": "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.",
    "author": "Angelita Lim",
    "category": "Romance",
    "tags": [
      "unconditional",
      "flaws",
      "grace"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 80
  },
  {
    "id": "quote-90",
    "text": "You are the poem I never knew how to write, and this life is the story I have always wanted to tell.",
    "author": "Tyler Knott Gregson",
    "category": "Romance",
    "tags": [
      "poetry",
      "story",
      "life"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 61
  },
  {
    "id": "quote-91",
    "text": "To love is nothing. To be loved is something. But to love and be loved, that’s everything.",
    "author": "T. Tolis",
    "category": "Romance",
    "tags": [
      "wholeness",
      "reciprocity",
      "truth"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 120
  },
  {
    "id": "quote-92",
    "text": "The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes.",
    "author": "Marilyn Monroe",
    "category": "Romance",
    "tags": [
      "gentleness",
      "intimacy",
      "charm"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 69
  },
  {
    "id": "quote-93",
    "text": "I could not tell you if I loved you the first moment I saw you, or if it was the second or third or fourth. But I remember the first moment I looked at you walking toward me and realized that somehow the rest of the world seemed to vanish.",
    "author": "Cassandra Clare",
    "category": "Romance",
    "tags": [
      "world-stops",
      "presence",
      "magic"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 124
  },
  {
    "id": "quote-94",
    "text": "Love is the flower you've got to let grow.",
    "author": "John Lennon",
    "category": "Romance",
    "tags": [
      "growth",
      "patience",
      "flower"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 122
  },
  {
    "id": "quote-95",
    "text": "Come live with me, and be my love, and we will all the pleasures prove.",
    "author": "Christopher Marlowe",
    "category": "Romance",
    "tags": [
      "invitation",
      "pastoral",
      "pleasure"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 117
  },
  {
    "id": "quote-96",
    "text": "You have made a place in my heart where no one else could ever go.",
    "author": "F. Scott Fitzgerald",
    "category": "Romance",
    "tags": [
      "sanctuary",
      "unique",
      "sacred"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 44
  },
  {
    "id": "quote-97",
    "text": "For it was not into my ear you whispered, but into my heart. It was not my lips you kissed, but my soul.",
    "author": "Judy Garland",
    "category": "Romance",
    "tags": [
      "whisper",
      "soul",
      "tender"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 112
  },
  {
    "id": "quote-98",
    "text": "Love does not dominate; it cultivates.",
    "author": "Johann Wolfgang von Goethe",
    "category": "Romance",
    "tags": [
      "cultivation",
      "nurture",
      "freedom"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 116
  },
  {
    "id": "quote-99",
    "text": "If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.",
    "author": "A.A. Milne",
    "category": "Romance",
    "tags": [
      "companionship",
      "sweet",
      "devotion"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 56
  },
  {
    "id": "quote-100",
    "text": "I love you as certain dark things are to be loved, in secret, between the shadow and the soul.",
    "author": "Pablo Neruda",
    "category": "Romance",
    "tags": [
      "secret",
      "shadow",
      "soul"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 103
  },
  {
    "id": "quote-101",
    "text": "The sea hath fish for every man, and every woman her own man; but none on earth so dear as you.",
    "author": "Christina Rossetti",
    "category": "Romance",
    "tags": [
      "treasured",
      "sea",
      "constancy"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 128
  },
  {
    "id": "quote-102",
    "text": "You are the sun that makes my day, the moon that guides my night.",
    "author": "Lang Leav",
    "category": "Romance",
    "tags": [
      "sun",
      "moon",
      "celestial"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 66
  },
  {
    "id": "quote-103",
    "text": "Love is an absolute necessity without which life has no meaning.",
    "author": "Daphne du Maurier",
    "category": "Romance",
    "tags": [
      "meaning",
      "necessity",
      "life"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 55
  },
  {
    "id": "quote-104",
    "text": "I want to stand with you on a mountain, I want to bathe with you in the sea.",
    "author": "Darren Hayes",
    "category": "Romance",
    "tags": [
      "adventure",
      "nature",
      "embrace"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 94
  },
  {
    "id": "quote-105",
    "text": "Your voice is full of money, she said. But his heart was full of her.",
    "author": "F. Scott Fitzgerald",
    "category": "Romance",
    "tags": [
      "wealth",
      "devotion",
      "classic"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 83
  },
  {
    "id": "quote-106",
    "text": "You are my favorite place to go to when my mind searches for peace.",
    "author": "Nayyirah Waheed",
    "category": "Romance",
    "tags": [
      "sanctuary",
      "peace",
      "calm"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 69
  },
  {
    "id": "quote-107",
    "text": "Where you are, that is where I want to be.",
    "author": "C.S. Lewis",
    "category": "Romance",
    "tags": [
      "presence",
      "nearness",
      "home"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 116
  },
  {
    "id": "quote-108",
    "text": "If love is a dream, may I never wake up.",
    "author": "William Shakespeare",
    "category": "Romance",
    "tags": [
      "dream",
      "wonder",
      "sweet"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 123
  },
  {
    "id": "quote-109",
    "text": "One smile can't change the world, but your smile changed mine.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "smile",
      "world",
      "impact"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 106
  },
  {
    "id": "quote-110",
    "text": "Love is not finding someone to live with; it's finding someone you can't live without.",
    "author": "Rafael Ortiz",
    "category": "Romance",
    "tags": [
      "essential",
      "devotion",
      "bond"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 63
  },
  {
    "id": "quote-111",
    "text": "I need you like a heart needs a beat.",
    "author": "OneRepublic",
    "category": "Romance",
    "tags": [
      "vital",
      "pulse",
      "rhythm"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 122
  },
  {
    "id": "quote-112",
    "text": "Every love story is beautiful, but ours is my favorite.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "story",
      "cherished",
      "sweet"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 76
  },
  {
    "id": "quote-113",
    "text": "You are the dream I’ve been waiting to wake up to.",
    "author": "Beau Taplin",
    "category": "Romance",
    "tags": [
      "awakening",
      "dream",
      "joy"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 133
  },
  {
    "id": "quote-114",
    "text": "In your smile I see something more beautiful than the stars.",
    "author": "Beth Revis",
    "category": "Romance",
    "tags": [
      "stars",
      "smile",
      "radiance"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 134
  },
  {
    "id": "quote-115",
    "text": "My soul and your soul are forever tangled.",
    "author": "N.R. Hart",
    "category": "Romance",
    "tags": [
      "tangled",
      "entwined",
      "eternity"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 42
  },
  {
    "id": "quote-116",
    "text": "I choose you. And I'll choose you over and over and over. Without pause, without a doubt, in a heartbeat.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "choice",
      "commitment",
      "steadfast"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 64
  },
  {
    "id": "quote-117",
    "text": "You are my blue crayon, the one I never have enough of, the one I use to color my sky.",
    "author": "A.R. Asher",
    "category": "Romance",
    "tags": [
      "color",
      "sky",
      "artistic"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 140
  },
  {
    "id": "quote-118",
    "text": "When I follow my heart, it leads me to you.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "compass",
      "heart",
      "guidance"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 39
  },
  {
    "id": "quote-119",
    "text": "Love is when you look into someone's eyes and see everything you need.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "eyes",
      "completeness",
      "home"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 138
  },
  {
    "id": "quote-120",
    "text": "I love you more than yesterday, less than tomorrow.",
    "author": "Edmond Rostand",
    "category": "Romance",
    "tags": [
      "growing",
      "daily",
      "cyrano"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 75
  },
  {
    "id": "quote-121",
    "text": "The sound of your voice is my favorite lullaby.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "voice",
      "comfort",
      "melody"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 86
  },
  {
    "id": "quote-122",
    "text": "Distance means so little when someone means so much.",
    "author": "Tom McNeal",
    "category": "Romance",
    "tags": [
      "distance",
      "constancy",
      "faith"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 69
  },
  {
    "id": "quote-123",
    "text": "I fell in love with your soul before I could even touch your skin.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "soul-first",
      "connection",
      "depth"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 43
  },
  {
    "id": "quote-124",
    "text": "You make me feel like I am home.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "belonging",
      "comfort",
      "shelter"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 62
  },
  {
    "id": "quote-125",
    "text": "I love you for all that you are, all that you have been, and all that you're yet to be.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "acceptance",
      "eternity",
      "grace"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 107
  },
  {
    "id": "quote-126",
    "text": "My heart beats faster when you whisper my name.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "whisper",
      "pulse",
      "intimacy"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 126
  },
  {
    "id": "quote-127",
    "text": "With you, time stands completely still.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "timeless",
      "moment",
      "magic"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 75
  },
  {
    "id": "quote-128",
    "text": "I have loved you all my life, it has just taken me this long to find you.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "lifelong",
      "destiny",
      "found"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 62
  },
  {
    "id": "quote-129",
    "text": "You are the sweetest chapter in my book of life.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "chapter",
      "story",
      "sweetness"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 118
  },
  {
    "id": "quote-130",
    "text": "If our love were a painting, it would be a masterpiece.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "masterpiece",
      "canvas",
      "harmony"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 98
  },
  {
    "id": "quote-131",
    "text": "The warmth of your hand in mine is all the proof I need of heaven.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "heaven",
      "touch",
      "peace"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 85
  },
  {
    "id": "quote-132",
    "text": "You are my favorite thought before I drift to sleep.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "night",
      "thought",
      "gentle"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 117
  },
  {
    "id": "quote-133",
    "text": "You are the anchor to my drifting heart.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "anchor",
      "safety",
      "steadfast"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 93
  },
  {
    "id": "quote-134",
    "text": "No measure of time with you will be long enough, but let's start with forever.",
    "author": "Stephenie Meyer",
    "category": "Romance",
    "tags": [
      "forever",
      "beginning",
      "time"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 53
  },
  {
    "id": "quote-135",
    "text": "In a sea of people, my eyes will always search for you.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "gaze",
      "devotion",
      "search"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 68
  },
  {
    "id": "quote-136",
    "text": "You are the music my heart beats to.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "music",
      "harmony",
      "rhythm"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 52
  },
  {
    "id": "quote-137",
    "text": "Loving you is like breathing; how could I ever stop?",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "natural",
      "essential",
      "breath"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 66
  },
  {
    "id": "quote-138",
    "text": "You gave my heart wings and taught my soul how to fly.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "wings",
      "freedom",
      "flight"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 130
  },
  {
    "id": "quote-139",
    "text": "I find pieces of you in every sunset I watch.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "sunset",
      "memory",
      "beauty"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 106
  },
  {
    "id": "quote-140",
    "text": "You are my greatest adventure and my safest haven.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "adventure",
      "haven",
      "balance"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 103
  },
  {
    "id": "quote-141",
    "text": "Every beat of my heart whispers your name.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "whisper",
      "heartbeat",
      "devotion"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 68
  },
  {
    "id": "quote-142",
    "text": "Your touch writes poetry upon my skin.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "touch",
      "poetry",
      "intimate"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 130
  },
  {
    "id": "quote-143",
    "text": "You turned my ordinary days into a story worth reading.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "magic",
      "transformation",
      "narrative"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 109
  },
  {
    "id": "quote-144",
    "text": "I love you not only for what you are, but for what I am when I am with you.",
    "author": "Roy Croft",
    "category": "Romance",
    "tags": [
      "reflection",
      "growth",
      "companion"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 89
  },
  {
    "id": "quote-145",
    "text": "You are the dawn after my longest night.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "dawn",
      "light",
      "hope"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 109
  },
  {
    "id": "quote-146",
    "text": "Forever is a long time, but I wouldn't mind spending it by your side.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "eternity",
      "side-by-side",
      "sweet"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 86
  },
  {
    "id": "quote-147",
    "text": "You are the stillness in my chaotic mind.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "calm",
      "serenity",
      "anchor"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 81
  },
  {
    "id": "quote-148",
    "text": "Your laughter is my favorite melody in this noisy world.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "laughter",
      "joy",
      "melody"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 63
  },
  {
    "id": "quote-149",
    "text": "To the world you may be one person, but to one person you may be the world.",
    "author": "Dr. Seuss",
    "category": "Romance",
    "tags": [
      "universe",
      "cherished",
      "individual"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 52
  },
  {
    "id": "quote-150",
    "text": "You are my North Star, guiding me home across the darkest seas.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "compass",
      "north-star",
      "guidance"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 100
  },
  {
    "id": "quote-151",
    "text": "Two hearts, one journey, infinite love.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "journey",
      "infinity",
      "union"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 98
  },
  {
    "id": "quote-152",
    "text": "I will love you until the stars go out and the tides no longer turn.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "cosmic",
      "unending",
      "tides"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 46
  },
  {
    "id": "quote-153",
    "text": "You are the spark that ignited a symphony in my heart.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "symphony",
      "spark",
      "music"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 131
  },
  {
    "id": "quote-154",
    "text": "In your embrace, I have found my forever sanctuary.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "sanctuary",
      "embrace",
      "peace"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 41
  },
  {
    "id": "quote-155",
    "text": "You are the secret wish I whisper to every falling star.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "shooting-star",
      "wish",
      "dream"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 49
  },
  {
    "id": "quote-156",
    "text": "Every kiss from you is a promise carved into eternity.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "promise",
      "eternity",
      "kiss"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 54
  },
  {
    "id": "quote-157",
    "text": "Our love is an echo that will ring through the universe forever.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "echo",
      "universe",
      "timeless"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 115
  },
  {
    "id": "quote-158",
    "text": "You are the soft rain that brings my garden into bloom.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "gentle",
      "bloom",
      "rain"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 55
  },
  {
    "id": "quote-159",
    "text": "Loving you is the easiest, most natural thing I have ever done.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "effortless",
      "natural",
      "joy"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 136
  },
  {
    "id": "quote-160",
    "text": "My soul knew yours before our eyes ever met.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "soulmate",
      "ancient",
      "destiny"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 122
  },
  {
    "id": "quote-161",
    "text": "You are the poetry written between the lines of my life.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "poetry",
      "subtle",
      "depth"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 89
  },
  {
    "id": "quote-162",
    "text": "I look at you and see the rest of my days painted in golden light.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "golden",
      "future",
      "light"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 111
  },
  {
    "id": "quote-163",
    "text": "You are my heart's undisputed home.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "home",
      "anchor",
      "certainty"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 43
  },
  {
    "id": "quote-164",
    "text": "If stars could speak, they would tell you how deeply I adore you.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "starlight",
      "cosmic",
      "adoration"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 84
  },
  {
    "id": "quote-165",
    "text": "Your love is the gentle breeze that sails my ship into harbor.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "harbor",
      "breeze",
      "safety"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 83
  },
  {
    "id": "quote-166",
    "text": "You are my sunrise in winter and my shade in summer.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "comfort",
      "seasons",
      "shelter"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 111
  },
  {
    "id": "quote-167",
    "text": "Every second spent loving you is a second spent living fully.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "living",
      "presence",
      "fullness"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 94
  },
  {
    "id": "quote-168",
    "text": "With you, even the silence speaks of tenderness.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "silence",
      "gentleness",
      "peace"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 102
  },
  {
    "id": "quote-169",
    "text": "You are the fire in my winter and the coolness in my desert.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "balance",
      "elements",
      "refuge"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 67
  },
  {
    "id": "quote-170",
    "text": "Our love is written in the constellations.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "constellation",
      "destiny",
      "cosmos"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 105
  },
  {
    "id": "quote-171",
    "text": "You are the reason my eyes light up and my heart feels brave.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "bravery",
      "light",
      "spark"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 36
  },
  {
    "id": "quote-172",
    "text": "I love you more than all the words ever spoken by all the poets in time.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "boundless",
      "poetry",
      "devotion"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 122
  },
  {
    "id": "quote-173",
    "text": "To hold you close is to hold all the miracles of the earth.",
    "author": "Anonymous",
    "category": "Romance",
    "tags": [
      "miracle",
      "earth",
      "embrace"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 127
  },
  {
    "id": "quote-174",
    "text": "You have power over your mind - not outside events. Realize this, and you will find strength.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "mindset",
      "resilience",
      "clarity"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 49
  },
  {
    "id": "quote-175",
    "text": "We suffer more often in imagination than in reality.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "anxiety",
      "perspective",
      "wisdom"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 122
  },
  {
    "id": "quote-176",
    "text": "No person has the power to have everything they want, but it is in their power not to want what they have not, and cheerfully to put to good use what they have.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "contentment",
      "gratitude"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 103
  },
  {
    "id": "quote-177",
    "text": "Waste no more time arguing about what a good man should be. Be one.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "action",
      "character",
      "integrity"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 131
  },
  {
    "id": "quote-178",
    "text": "It is not death that a man should fear, but he should fear never beginning to live.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "courage",
      "purpose"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 69
  },
  {
    "id": "quote-179",
    "text": "Difficulties strengthen the mind, as labor does the body.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "growth",
      "adversity",
      "grit"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 133
  },
  {
    "id": "quote-180",
    "text": "If anyone can refute me, show me I'm making a mistake, I'll gladly change. I seek the truth, which never harmed anyone.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "humility",
      "truth",
      "learning"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 117
  },
  {
    "id": "quote-181",
    "text": "He who fears death will never do anything worthy of a man who is alive.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "fearlessness",
      "action"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 78
  },
  {
    "id": "quote-182",
    "text": "Wealth consists not in having great possessions, but in having few wants.",
    "author": "Epictetus",
    "category": "Stoicism",
    "tags": [
      "simplicity",
      "wealth",
      "freedom"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 49
  },
  {
    "id": "quote-183",
    "text": "Man is not worried by real problems so much as by his imagined anxieties about real problems.",
    "author": "Epictetus",
    "category": "Stoicism",
    "tags": [
      "anxiety",
      "mind",
      "control"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 72
  },
  {
    "id": "quote-184",
    "text": "Don't explain your philosophy. Embody it.",
    "author": "Epictetus",
    "category": "Stoicism",
    "tags": [
      "action",
      "deeds",
      "authenticity"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 90
  },
  {
    "id": "quote-185",
    "text": "The soul becomes dyed with the color of its thoughts.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "thoughts",
      "mind",
      "character"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 55
  },
  {
    "id": "quote-186",
    "text": "First say to yourself what you would be; and then do what you have to do.",
    "author": "Epictetus",
    "category": "Stoicism",
    "tags": [
      "identity",
      "action",
      "purpose"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 93
  },
  {
    "id": "quote-187",
    "text": "If a man knows not to which port he sails, no wind is favorable.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "direction",
      "purpose",
      "clarity"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 35
  },
  {
    "id": "quote-188",
    "text": "Begin at once to live, and count each separate day as a separate life.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "present",
      "mindfulness",
      "gratitude"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 127
  },
  {
    "id": "quote-189",
    "text": "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "beauty",
      "wonder",
      "stars"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 127
  },
  {
    "id": "quote-190",
    "text": "The best revenge is not to be like that.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "character",
      "integrity",
      "revenge"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 68
  },
  {
    "id": "quote-191",
    "text": "It is not that we have a short time to live, but that we waste a lot of it.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "time",
      "presence",
      "focus"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 99
  },
  {
    "id": "quote-192",
    "text": "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.",
    "author": "Epictetus",
    "category": "Stoicism",
    "tags": [
      "gratitude",
      "wisdom",
      "joy"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 132
  },
  {
    "id": "quote-193",
    "text": "How much trouble he avoids who does not look to see what his neighbor says or does or thinks.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "focus",
      "boundaries",
      "peace"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 57
  },
  {
    "id": "quote-194",
    "text": "Freedom is the only worthy goal in life. It is won by disregarding things that lie beyond our control.",
    "author": "Epictetus",
    "category": "Stoicism",
    "tags": [
      "freedom",
      "control",
      "liberty"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 99
  },
  {
    "id": "quote-195",
    "text": "Luck is what happens when preparation meets opportunity.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "luck",
      "preparation",
      "readiness"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 48
  },
  {
    "id": "quote-196",
    "text": "Reject your sense of injury and the injury itself disappears.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "resilience",
      "perception",
      "mind"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 115
  },
  {
    "id": "quote-197",
    "text": "Nothing, to my way of thinking, is a better proof of a well-ordered mind than a man's ability to stop where he is and pass some time in his own company.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "solitude",
      "mind",
      "peace"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 73
  },
  {
    "id": "quote-198",
    "text": "Receive without conceit, release without struggle.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "detachment",
      "grace",
      "humility"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 116
  },
  {
    "id": "quote-199",
    "text": "To be calm is the highest achievement of the self.",
    "author": "Zen Proverb",
    "category": "Stoicism",
    "tags": [
      "calm",
      "stillness",
      "mastery"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 99
  },
  {
    "id": "quote-200",
    "text": "Only time can heal what reason cannot.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "healing",
      "time",
      "patience"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 112
  },
  {
    "id": "quote-201",
    "text": "Think of yourself as dead. You have lived your life. Now, take what's left and live it properly.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "memento-mori",
      "rebirth",
      "clarity"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 60
  },
  {
    "id": "quote-202",
    "text": "Small-minded people blame others. Average people blame themselves. The wise see all blame as foolishness.",
    "author": "Epictetus",
    "category": "Stoicism",
    "tags": [
      "wisdom",
      "responsibility",
      "maturity"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 54
  },
  {
    "id": "quote-203",
    "text": "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.",
    "author": "Epictetus",
    "category": "Stoicism",
    "tags": [
      "serenity",
      "worry",
      "peace"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 82
  },
  {
    "id": "quote-204",
    "text": "A gem cannot be polished without friction, nor a man perfected without trials.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "trials",
      "grit",
      "refinement"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 132
  },
  {
    "id": "quote-205",
    "text": "The happiness of your life depends upon the quality of your thoughts.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "thoughts",
      "happiness",
      "quality"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 55
  },
  {
    "id": "quote-206",
    "text": "No man is free who is not master of himself.",
    "author": "Epictetus",
    "category": "Stoicism",
    "tags": [
      "self-mastery",
      "discipline",
      "freedom"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 104
  },
  {
    "id": "quote-207",
    "text": "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "morning",
      "privilege",
      "gratitude"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 134
  },
  {
    "id": "quote-208",
    "text": "Caretake your thoughts; what you think today determines what you build tomorrow.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "vision",
      "thoughts",
      "destiny"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 102
  },
  {
    "id": "quote-209",
    "text": "Hang on to your youthful enthusiasms — you'll be able to use them better when you're older.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "youth",
      "enthusiasm",
      "vitality"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 35
  },
  {
    "id": "quote-210",
    "text": "If you are pained by any external thing, it is not this thing that disturbs you, but your own judgment about it.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "perception",
      "mind",
      "stoic"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 111
  },
  {
    "id": "quote-211",
    "text": "It is the power of the mind to be unconquerable.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "unconquerable",
      "strength",
      "power"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 76
  },
  {
    "id": "quote-212",
    "text": "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "future",
      "reason",
      "calm"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 97
  },
  {
    "id": "quote-213",
    "text": "Associate with people who are likely to improve you.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "community",
      "growth",
      "standards"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 37
  },
  {
    "id": "quote-214",
    "text": "Attach yourself to what is spiritually superior, regardless of what other people think or do.",
    "author": "Epictetus",
    "category": "Stoicism",
    "tags": [
      "standards",
      "spirituality",
      "integrity"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 49
  },
  {
    "id": "quote-215",
    "text": "Be tolerant with others and strict with yourself.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "discipline",
      "compassion",
      "humility"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 81
  },
  {
    "id": "quote-216",
    "text": "He who indulges in empty fears earns himself real fears.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "fear",
      "reality",
      "mind"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 138
  },
  {
    "id": "quote-217",
    "text": "How ridiculous and what a stranger he is who is surprised by anything which happens in life.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "acceptance",
      "serenity",
      "equanimity"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 74
  },
  {
    "id": "quote-218",
    "text": "True happiness is to enjoy the present, without anxious dependence upon the future.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "present",
      "happiness",
      "now"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 65
  },
  {
    "id": "quote-219",
    "text": "The impediment to action advances action. What stands in the way becomes the way.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "obstacle",
      "action",
      "opportunity"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 42
  },
  {
    "id": "quote-220",
    "text": "No great thing is created suddenly, any more than a bunch of grapes or a fig.",
    "author": "Epictetus",
    "category": "Stoicism",
    "tags": [
      "patience",
      "growth",
      "mastery"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 65
  },
  {
    "id": "quote-221",
    "text": "Every night before going to sleep, we must ask ourselves: what weakness did I overcome today? What virtue did I acquire?",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "self-reflection",
      "virtue",
      "growth"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 107
  },
  {
    "id": "quote-222",
    "text": "Life is very short and anxious for those who forget the past, neglect the present, and fear the future.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "time",
      "mindfulness",
      "anxiety"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 45
  },
  {
    "id": "quote-223",
    "text": "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "amor-fati",
      "acceptance",
      "love"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 45
  },
  {
    "id": "quote-224",
    "text": "Circumstances don't make the man, they only reveal him to himself.",
    "author": "Epictetus",
    "category": "Stoicism",
    "tags": [
      "character",
      "circumstance",
      "truth"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 128
  },
  {
    "id": "quote-225",
    "text": "Sometimes even to live is an act of courage.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "courage",
      "resilience",
      "survival"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 97
  },
  {
    "id": "quote-226",
    "text": "If it is not right, do not do it; if it is not true, do not say it.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "truth",
      "integrity",
      "simplicity"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 139
  },
  {
    "id": "quote-227",
    "text": "No man was ever wise by chance.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "deliberate",
      "wisdom",
      "effort"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 43
  },
  {
    "id": "quote-228",
    "text": "He who laughs at himself never runs out of things to laugh at.",
    "author": "Epictetus",
    "category": "Stoicism",
    "tags": [
      "humor",
      "humility",
      "perspective"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 132
  },
  {
    "id": "quote-229",
    "text": "Do every act of your life as though it were the very last act of your life.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "presence",
      "urgency",
      "focus"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 103
  },
  {
    "id": "quote-230",
    "text": "As is a tale, so is life: not how long it is, but how good it is, is what matters.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "meaning",
      "quality",
      "story"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 133
  },
  {
    "id": "quote-231",
    "text": "It is not the man who has too little, but the man who craves more, that is poor.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "contentment",
      "wealth",
      "greed"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 51
  },
  {
    "id": "quote-232",
    "text": "Don't demand that things happen as you wish, but wish that they happen as they do happen, and you will go on well.",
    "author": "Epictetus",
    "category": "Stoicism",
    "tags": [
      "acceptance",
      "flow",
      "peace"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 51
  },
  {
    "id": "quote-233",
    "text": "Whatever anyone does or says, I must be emerald and keep my color.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "integrity",
      "constancy",
      "emerald"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 119
  },
  {
    "id": "quote-234",
    "text": "The mind that is anxious about future events is miserable.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "anxiety",
      "peace",
      "now"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 95
  },
  {
    "id": "quote-235",
    "text": "The blazing fire makes flame and brightness out of everything that is thrown into it.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "adversity",
      "alchemy",
      "fuel"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 105
  },
  {
    "id": "quote-236",
    "text": "Let silence be your general rule; or say only what is necessary and in few words.",
    "author": "Epictetus",
    "category": "Stoicism",
    "tags": [
      "silence",
      "discernment",
      "speech"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 56
  },
  {
    "id": "quote-237",
    "text": "Ignorance is the cause of fear.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "knowledge",
      "courage",
      "clarity"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 68
  },
  {
    "id": "quote-238",
    "text": "Forward, as occasion offers. Never look round to see whether any shall note it.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "modesty",
      "progress",
      "duty"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 102
  },
  {
    "id": "quote-239",
    "text": "Practice what you preach, or keep quiet.",
    "author": "Musonius Rufus",
    "category": "Stoicism",
    "tags": [
      "deeds",
      "authenticity",
      "integrity"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 112
  },
  {
    "id": "quote-240",
    "text": "Excellence is an art won by training and habituation.",
    "author": "Aristotle",
    "category": "Stoicism",
    "tags": [
      "habit",
      "excellence",
      "discipline"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 89
  },
  {
    "id": "quote-241",
    "text": "To bear trials with a calm mind robs misfortune of its strength and burden.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "calm",
      "misfortune",
      "resilience"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 62
  },
  {
    "id": "quote-242",
    "text": "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "simplicity",
      "happiness",
      "mind"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 104
  },
  {
    "id": "quote-243",
    "text": "Nothing is burdensome if taken lightly, and nothing need arouse one's irritation so long as one doesn't make it worse by one's own irritation.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "lightness",
      "reaction",
      "peace"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 131
  },
  {
    "id": "quote-244",
    "text": "The greater the difficulty, the more glory in overcoming it.",
    "author": "Epicurus",
    "category": "Stoicism",
    "tags": [
      "difficulty",
      "triumph",
      "glory"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 128
  },
  {
    "id": "quote-245",
    "text": "You always own the option of having no opinion.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "opinion",
      "peace",
      "restraint"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 123
  },
  {
    "id": "quote-246",
    "text": "Begin each day by telling yourself: Today I shall meet with interference, ingratitude, insolence, disloyalty, ill-will, and selfishness.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "preparation",
      "compassion",
      "realism"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 60
  },
  {
    "id": "quote-247",
    "text": "Regard friend as loyal, and you will make him loyal.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "trust",
      "friendship",
      "loyalty"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 126
  },
  {
    "id": "quote-248",
    "text": "The key is to keep company only with people who uplift you, whose presence calls forth your best.",
    "author": "Epictetus",
    "category": "Stoicism",
    "tags": [
      "standards",
      "company",
      "uplift"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 74
  },
  {
    "id": "quote-249",
    "text": "Do not spoil what you have by desiring what you have not.",
    "author": "Epicurus",
    "category": "Stoicism",
    "tags": [
      "gratitude",
      "contentment",
      "peace"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 86
  },
  {
    "id": "quote-250",
    "text": "Look within. Within is the fountain of good, and it will ever bubble up, if thou wilt ever dig.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "inner-depth",
      "goodness",
      "source"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 120
  },
  {
    "id": "quote-251",
    "text": "To be like the rock that the waves keep crashing over. It stands unmoved and the raging of the sea falls still around it.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "rock",
      "stillness",
      "unmoved"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 118
  },
  {
    "id": "quote-252",
    "text": "We are like passengers on a ship; we can steer with wisdom even when the storms rage.",
    "author": "Epictetus",
    "category": "Stoicism",
    "tags": [
      "stewardship",
      "wisdom",
      "storm"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 82
  },
  {
    "id": "quote-253",
    "text": "Live out your life in truth and justice, tolerant of those who are neither true nor just.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "tolerance",
      "justice",
      "truth"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 91
  },
  {
    "id": "quote-254",
    "text": "Leisure without study is death: it is a tomb for the living man.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "study",
      "mind",
      "curiosity"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 101
  },
  {
    "id": "quote-255",
    "text": "Never claim to be a wise person, nor talk much among the unlearned about your principles.",
    "author": "Epictetus",
    "category": "Stoicism",
    "tags": [
      "humility",
      "quiet",
      "practice"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 92
  },
  {
    "id": "quote-256",
    "text": "A man's worth is no greater than his ambitions.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "ambition",
      "worth",
      "striving"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 50
  },
  {
    "id": "quote-257",
    "text": "The mind is the ruler of the soul.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "mastery",
      "ruler",
      "soul"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 66
  },
  {
    "id": "quote-258",
    "text": "Let your desire be to contemplate the infinite cosmos.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "cosmos",
      "perspective",
      "infinite"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 63
  },
  {
    "id": "quote-259",
    "text": "Life is like a play: it's not the length, but the excellence of the acting that matters.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "excellence",
      "drama",
      "living"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 43
  },
  {
    "id": "quote-260",
    "text": "Wisdom is the only freedom.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "freedom",
      "wisdom",
      "liberty"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 78
  },
  {
    "id": "quote-261",
    "text": "Calmness is a superpower in a turbulent world.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "calm",
      "superpower",
      "stillness"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 37
  },
  {
    "id": "quote-262",
    "text": "When you conquer your own mind, you conquer the entire world.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "victory",
      "mind",
      "mastery"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 110
  },
  {
    "id": "quote-263",
    "text": "Every new day is an unwritten page of virtue.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "fresh",
      "virtue",
      "dawn"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 105
  },
  {
    "id": "quote-264",
    "text": "Hold fast to your center and let the chaos swirl without touching you.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "center",
      "anchor",
      "peace"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 64
  },
  {
    "id": "quote-265",
    "text": "Stand firm as a tower that never shakes its summit though the winds blow.",
    "author": "Dante Alighieri",
    "category": "Stoicism",
    "tags": [
      "firmness",
      "tower",
      "resolve"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 110
  },
  {
    "id": "quote-266",
    "text": "Self-control is strength. Right thought is mastery. Calmness is power.",
    "author": "James Allen",
    "category": "Stoicism",
    "tags": [
      "strength",
      "mastery",
      "power"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 63
  },
  {
    "id": "quote-267",
    "text": "Your mind will take the shape of what you frequently hold in thought.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "habits",
      "thoughts",
      "shape"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 35
  },
  {
    "id": "quote-268",
    "text": "The greatest step toward tranquility is learning to let go.",
    "author": "Epictetus",
    "category": "Stoicism",
    "tags": [
      "letting-go",
      "tranquility",
      "peace"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 44
  },
  {
    "id": "quote-269",
    "text": "A soul that knows peace cannot be shaken by the noise of the world.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "peace",
      "noise",
      "serenity"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 125
  },
  {
    "id": "quote-270",
    "text": "Turn your attention inward and you will find an ocean of stillness.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "inward",
      "ocean",
      "stillness"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 115
  },
  {
    "id": "quote-271",
    "text": "Every obstacle is merely an invitation to practice courage.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "obstacle",
      "invitation",
      "courage"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 42
  },
  {
    "id": "quote-272",
    "text": "Act with clarity, speak with honesty, live with purpose.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "clarity",
      "honesty",
      "purpose"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 64
  },
  {
    "id": "quote-273",
    "text": "You are not what happened to you; you are what you choose to become.",
    "author": "Carl Jung",
    "category": "Stoicism",
    "tags": [
      "choice",
      "identity",
      "growth"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 43
  },
  {
    "id": "quote-274",
    "text": "The true measure of a man is how he treats someone who can do him no good.",
    "author": "Samuel Johnson",
    "category": "Stoicism",
    "tags": [
      "integrity",
      "kindness",
      "measure"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 39
  },
  {
    "id": "quote-275",
    "text": "Master your passions or they will master you.",
    "author": "Epictetus",
    "category": "Stoicism",
    "tags": [
      "discipline",
      "passions",
      "control"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 77
  },
  {
    "id": "quote-276",
    "text": "Strength comes from knowing what you cannot change and mastering what you can.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "wisdom",
      "discernment",
      "strength"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 44
  },
  {
    "id": "quote-277",
    "text": "Let virtue be your only compass.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "compass",
      "virtue",
      "guidance"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 100
  },
  {
    "id": "quote-278",
    "text": "The peaceful mind is the greatest fortress in existence.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "fortress",
      "peace",
      "protection"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 65
  },
  {
    "id": "quote-279",
    "text": "Cultivate an unshakeable spirit in the face of uncertainty.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "spirit",
      "uncertainty",
      "unshakeable"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 70
  },
  {
    "id": "quote-280",
    "text": "In the midst of chaos, discover your sanctuary within.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "sanctuary",
      "inner",
      "calm"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 120
  },
  {
    "id": "quote-281",
    "text": "To endure trials with dignity is the highest mark of noble character.",
    "author": "Seneca",
    "category": "Stoicism",
    "tags": [
      "dignity",
      "trials",
      "character"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 97
  },
  {
    "id": "quote-282",
    "text": "Do not be distracted by the applause or the criticism of the crowd.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "independence",
      "focus",
      "freedom"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 62
  },
  {
    "id": "quote-283",
    "text": "Each moment is a sacred chance to act rightly.",
    "author": "Marcus Aurelius",
    "category": "Stoicism",
    "tags": [
      "sacred",
      "right-action",
      "now"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 104
  },
  {
    "id": "quote-284",
    "text": "Peace comes from within. Do not seek it without.",
    "author": "Buddha",
    "category": "Mindfulness",
    "tags": [
      "inner-peace",
      "clarity",
      "spirit"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 51
  },
  {
    "id": "quote-285",
    "text": "The present moment is filled with joy and happiness. If you are attentive, you will see it.",
    "author": "Thich Nhat Hanh",
    "category": "Mindfulness",
    "tags": [
      "presence",
      "joy",
      "awareness"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 127
  },
  {
    "id": "quote-286",
    "text": "Smile, breathe, and go slowly.",
    "author": "Thich Nhat Hanh",
    "category": "Mindfulness",
    "tags": [
      "gentleness",
      "breath",
      "pacing"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 108
  },
  {
    "id": "quote-287",
    "text": "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.",
    "author": "Thich Nhat Hanh",
    "category": "Mindfulness",
    "tags": [
      "breath",
      "anchor",
      "calm"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 108
  },
  {
    "id": "quote-288",
    "text": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "author": "Buddha",
    "category": "Mindfulness",
    "tags": [
      "now",
      "focus",
      "presence"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 95
  },
  {
    "id": "quote-289",
    "text": "Silence is not empty, it is full of answers.",
    "author": "Rumi",
    "category": "Mindfulness",
    "tags": [
      "silence",
      "listening",
      "wisdom"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 66
  },
  {
    "id": "quote-290",
    "text": "To the mind that is still, the whole universe surrenders.",
    "author": "Lao Tzu",
    "category": "Mindfulness",
    "tags": [
      "stillness",
      "tao",
      "universe"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 135
  },
  {
    "id": "quote-291",
    "text": "Surrender to what is. Say 'yes' to life — and see how life suddenly starts working for you rather than against you.",
    "author": "Eckhart Tolle",
    "category": "Mindfulness",
    "tags": [
      "surrender",
      "acceptance",
      "flow"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 95
  },
  {
    "id": "quote-292",
    "text": "The primary cause of unhappiness is never the situation but your thoughts about it.",
    "author": "Eckhart Tolle",
    "category": "Mindfulness",
    "tags": [
      "thoughts",
      "unhappiness",
      "clarity"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 138
  },
  {
    "id": "quote-293",
    "text": "Muddy water is best cleared by leaving it alone.",
    "author": "Alan Watts",
    "category": "Mindfulness",
    "tags": [
      "patience",
      "clarity",
      "stillness"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 87
  },
  {
    "id": "quote-294",
    "text": "You cannot travel the path until you have become the path itself.",
    "author": "Buddha",
    "category": "Mindfulness",
    "tags": [
      "embodiment",
      "journey",
      "truth"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 59
  },
  {
    "id": "quote-295",
    "text": "Breath is the bridge which connects life to consciousness, which unites your body to your thoughts.",
    "author": "Thich Nhat Hanh",
    "category": "Mindfulness",
    "tags": [
      "breath",
      "bridge",
      "unity"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 47
  },
  {
    "id": "quote-296",
    "text": "Nature does not hurry, yet everything is accomplished.",
    "author": "Lao Tzu",
    "category": "Mindfulness",
    "tags": [
      "nature",
      "patience",
      "timing"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 47
  },
  {
    "id": "quote-297",
    "text": "When you let go of what you are, you become what you might be.",
    "author": "Lao Tzu",
    "category": "Mindfulness",
    "tags": [
      "transformation",
      "letting-go",
      "potential"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 119
  },
  {
    "id": "quote-298",
    "text": "In the midst of movement and chaos, keep stillness inside of you.",
    "author": "Deepak Chopra",
    "category": "Mindfulness",
    "tags": [
      "stillness",
      "chaos",
      "center"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 90
  },
  {
    "id": "quote-299",
    "text": "Mindfulness is simply being aware of what is happening right now without wishing it were any different.",
    "author": "James Baraz",
    "category": "Mindfulness",
    "tags": [
      "acceptance",
      "awareness",
      "now"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 80
  },
  {
    "id": "quote-300",
    "text": "Quiet the mind, and the soul will speak.",
    "author": "Ma Jaya Sati Bhagavati",
    "category": "Mindfulness",
    "tags": [
      "quiet",
      "soul",
      "listening"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 89
  },
  {
    "id": "quote-301",
    "text": "Drink your tea slowly and reverently, as if it is the axis on which the world earth revolves.",
    "author": "Thich Nhat Hanh",
    "category": "Mindfulness",
    "tags": [
      "tea",
      "reverence",
      "ritual"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 87
  },
  {
    "id": "quote-302",
    "text": "The only way to live is by accepting each minute as an unrepeatable miracle.",
    "author": "Tara Brach",
    "category": "Mindfulness",
    "tags": [
      "miracle",
      "presence",
      "gratitude"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 94
  },
  {
    "id": "quote-303",
    "text": "Look at a tree, a flower, a plant. Let your awareness rest upon it. How still they are, how deeply rooted in Being.",
    "author": "Eckhart Tolle",
    "category": "Mindfulness",
    "tags": [
      "nature",
      "stillness",
      "being"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 128
  },
  {
    "id": "quote-304",
    "text": "Life is a dance. Mindfulness is witnessing that dance.",
    "author": "Amit Ray",
    "category": "Mindfulness",
    "tags": [
      "dance",
      "witness",
      "joy"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 41
  },
  {
    "id": "quote-305",
    "text": "Nothing is permanent in this wicked world - not even our troubles.",
    "author": "Charlie Chaplin",
    "category": "Mindfulness",
    "tags": [
      "impermanence",
      "perspective",
      "hope"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 121
  },
  {
    "id": "quote-306",
    "text": "Be where you are, otherwise you will miss your life.",
    "author": "Buddha",
    "category": "Mindfulness",
    "tags": [
      "presence",
      "living",
      "now"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 118
  },
  {
    "id": "quote-307",
    "text": "Your calm mind is the ultimate weapon against your challenges.",
    "author": "Bryant McGill",
    "category": "Mindfulness",
    "tags": [
      "calm",
      "mindset",
      "strength"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 117
  },
  {
    "id": "quote-308",
    "text": "Within you, there is a stillness and a sanctuary to which you can retreat at any time and be yourself.",
    "author": "Hermann Hesse",
    "category": "Mindfulness",
    "tags": [
      "sanctuary",
      "inner",
      "retreat"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 47
  },
  {
    "id": "quote-309",
    "text": "When you realize nothing is lacking, the whole world belongs to you.",
    "author": "Lao Tzu",
    "category": "Mindfulness",
    "tags": [
      "abundance",
      "contentment",
      "tao"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 42
  },
  {
    "id": "quote-310",
    "text": "Tension is who you think you should be. Relaxation is who you are.",
    "author": "Chinese Proverb",
    "category": "Mindfulness",
    "tags": [
      "relaxation",
      "authenticity",
      "peace"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 86
  },
  {
    "id": "quote-311",
    "text": "The soul loves to meditate, for in silence it connects with eternity.",
    "author": "Paramahansa Yogananda",
    "category": "Mindfulness",
    "tags": [
      "meditation",
      "silence",
      "eternity"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 128
  },
  {
    "id": "quote-312",
    "text": "Slow down and enjoy life. It's not only the scenery you miss by going too fast - you also miss the sense of where you are going and why.",
    "author": "Eddie Cantor",
    "category": "Mindfulness",
    "tags": [
      "slow-down",
      "pacing",
      "clarity"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 78
  },
  {
    "id": "quote-313",
    "text": "One conscious breathe in and out is a meditation.",
    "author": "Eckhart Tolle",
    "category": "Mindfulness",
    "tags": [
      "breath",
      "simplicity",
      "meditation"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 137
  },
  {
    "id": "quote-314",
    "text": "The root of all suffering is attachment.",
    "author": "Buddha",
    "category": "Mindfulness",
    "tags": [
      "attachment",
      "detachment",
      "suffering"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 48
  },
  {
    "id": "quote-315",
    "text": "Do whatever you are doing right now with 100% of your heart.",
    "author": "Thich Nhat Hanh",
    "category": "Mindfulness",
    "tags": [
      "wholehearted",
      "focus",
      "presence"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 66
  },
  {
    "id": "quote-316",
    "text": "Wherever you are, be there totally.",
    "author": "Eckhart Tolle",
    "category": "Mindfulness",
    "tags": [
      "totality",
      "presence",
      "immersion"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 59
  },
  {
    "id": "quote-317",
    "text": "Nothing can bring you peace but yourself.",
    "author": "Ralph Waldo Emerson",
    "category": "Mindfulness",
    "tags": [
      "inner-peace",
      "self-reliance",
      "truth"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 59
  },
  {
    "id": "quote-318",
    "text": "Everything that has a beginning has an ending. Make your peace with that and all will be well.",
    "author": "Jack Kornfield",
    "category": "Mindfulness",
    "tags": [
      "impermanence",
      "peace",
      "cycles"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 103
  },
  {
    "id": "quote-319",
    "text": "Observe without judgment, and clarity will arise naturally.",
    "author": "Jiddu Krishnamurti",
    "category": "Mindfulness",
    "tags": [
      "observation",
      "clarity",
      "nonjudgment"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 92
  },
  {
    "id": "quote-320",
    "text": "Wisdom begins with the pause between thought and action.",
    "author": "Viktor Frankl",
    "category": "Mindfulness",
    "tags": [
      "pause",
      "choice",
      "space"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 52
  },
  {
    "id": "quote-321",
    "text": "When we are present, we have already arrived.",
    "author": "Thich Nhat Hanh",
    "category": "Mindfulness",
    "tags": [
      "arrived",
      "presence",
      "peace"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 89
  },
  {
    "id": "quote-322",
    "text": "The stillness of a pond reveals the sky above.",
    "author": "Lao Tzu",
    "category": "Mindfulness",
    "tags": [
      "pond",
      "reflection",
      "stillness"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 58
  },
  {
    "id": "quote-323",
    "text": "Let your breath be your guide back to tranquility.",
    "author": "Jon Kabat-Zinn",
    "category": "Mindfulness",
    "tags": [
      "breath",
      "tranquility",
      "guide"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 70
  },
  {
    "id": "quote-324",
    "text": "Simplicity of living produces richness of being.",
    "author": "E.F. Schumacher",
    "category": "Mindfulness",
    "tags": [
      "simplicity",
      "richness",
      "being"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 94
  },
  {
    "id": "quote-325",
    "text": "In true listening, we offer the greatest gift of presence.",
    "author": "Thich Nhat Hanh",
    "category": "Mindfulness",
    "tags": [
      "listening",
      "gift",
      "presence"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 66
  },
  {
    "id": "quote-326",
    "text": "Empty your cup so that it may be filled; become devoid to gain totality.",
    "author": "Bruce Lee",
    "category": "Mindfulness",
    "tags": [
      "empty-cup",
      "learning",
      "openness"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 44
  },
  {
    "id": "quote-327",
    "text": "The greatest art is to sit quietly and do nothing.",
    "author": "Chinese Proverb",
    "category": "Mindfulness",
    "tags": [
      "art",
      "sitting",
      "wu-wei"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 91
  },
  {
    "id": "quote-328",
    "text": "Allow each moment to unfold without resistance.",
    "author": "Eckhart Tolle",
    "category": "Mindfulness",
    "tags": [
      "unfolding",
      "flow",
      "non-resistance"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 138
  },
  {
    "id": "quote-329",
    "text": "Your heartbeat is the ancient drum of life.",
    "author": "Alan Watts",
    "category": "Mindfulness",
    "tags": [
      "pulse",
      "rhythm",
      "life"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 105
  },
  {
    "id": "quote-330",
    "text": "Look deeply into nature, and then you will understand everything better.",
    "author": "Albert Einstein",
    "category": "Mindfulness",
    "tags": [
      "nature",
      "insight",
      "understanding"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 47
  },
  {
    "id": "quote-331",
    "text": "Peace is every step.",
    "author": "Thich Nhat Hanh",
    "category": "Mindfulness",
    "tags": [
      "step",
      "path",
      "everyday"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 41
  },
  {
    "id": "quote-332",
    "text": "The mind is like water; when it is turbulent, it is difficult to see.",
    "author": "Sun Tzu",
    "category": "Mindfulness",
    "tags": [
      "water",
      "clarity",
      "vision"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 118
  },
  {
    "id": "quote-333",
    "text": "Return to the breath, return to the center.",
    "author": "Pema Chödrön",
    "category": "Mindfulness",
    "tags": [
      "breath",
      "center",
      "refuge"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 104
  },
  {
    "id": "quote-334",
    "text": "Nothing ever goes away until it has taught us what we need to know.",
    "author": "Pema Chödrön",
    "category": "Mindfulness",
    "tags": [
      "lessons",
      "patience",
      "growth"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 36
  },
  {
    "id": "quote-335",
    "text": "You are the sky. Everything else is just the weather.",
    "author": "Pema Chödrön",
    "category": "Mindfulness",
    "tags": [
      "sky",
      "weather",
      "perspective"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 46
  },
  {
    "id": "quote-336",
    "text": "Peace does not mean to be in a place where there is no noise; it means to be in the midst of those things and still be calm.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "calm",
      "noise",
      "resilience"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 131
  },
  {
    "id": "quote-337",
    "text": "In the space between stimulus and response lies our growth and freedom.",
    "author": "Viktor Frankl",
    "category": "Mindfulness",
    "tags": [
      "space",
      "choice",
      "freedom"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 65
  },
  {
    "id": "quote-338",
    "text": "Drop the idea of becoming someone, because you are already a masterpiece.",
    "author": "Osho",
    "category": "Mindfulness",
    "tags": [
      "acceptance",
      "masterpiece",
      "being"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 56
  },
  {
    "id": "quote-339",
    "text": "The morning breeze has secrets to tell you. Do not go back to sleep.",
    "author": "Rumi",
    "category": "Mindfulness",
    "tags": [
      "breeze",
      "morning",
      "awakening"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 87
  },
  {
    "id": "quote-340",
    "text": "Water does not resist. Water flows.",
    "author": "Margaret Atwood",
    "category": "Mindfulness",
    "tags": [
      "water",
      "flow",
      "yielding"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 97
  },
  {
    "id": "quote-341",
    "text": "Walk as if you are kissing the Earth with your feet.",
    "author": "Thich Nhat Hanh",
    "category": "Mindfulness",
    "tags": [
      "earth",
      "gentle",
      "reverence"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 96
  },
  {
    "id": "quote-342",
    "text": "Listen to the wind, it talks. Listen to the silence, it speaks.",
    "author": "Native American Proverb",
    "category": "Mindfulness",
    "tags": [
      "wind",
      "nature",
      "listening"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 62
  },
  {
    "id": "quote-343",
    "text": "Be like a tree and let the dead leaves drop.",
    "author": "Rumi",
    "category": "Mindfulness",
    "tags": [
      "letting-go",
      "renewal",
      "nature"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 86
  },
  {
    "id": "quote-344",
    "text": "Quiet minds cannot be perplexed or frightened, but go on in fortune or in misfortune at their own private pace.",
    "author": "Robert Louis Stevenson",
    "category": "Mindfulness",
    "tags": [
      "quiet-mind",
      "steadfast",
      "pace"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 42
  },
  {
    "id": "quote-345",
    "text": "When you touch one thing with deep awareness, you touch everything.",
    "author": "Thich Nhat Hanh",
    "category": "Mindfulness",
    "tags": [
      "interconnection",
      "awareness",
      "depth"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 56
  },
  {
    "id": "quote-346",
    "text": "The miracle is not to walk on water. The miracle is to walk on the green earth in the present moment.",
    "author": "Thich Nhat Hanh",
    "category": "Mindfulness",
    "tags": [
      "miracle",
      "earth",
      "presence"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 83
  },
  {
    "id": "quote-347",
    "text": "Silence is the language of God, all else is poor translation.",
    "author": "Rumi",
    "category": "Mindfulness",
    "tags": [
      "silence",
      "divine",
      "language"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 35
  },
  {
    "id": "quote-348",
    "text": "Give yourself permission to pause and breathe.",
    "author": "Jon Kabat-Zinn",
    "category": "Mindfulness",
    "tags": [
      "permission",
      "pause",
      "breathe"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 84
  },
  {
    "id": "quote-349",
    "text": "The quieter you become, the more you can hear.",
    "author": "Ram Dass",
    "category": "Mindfulness",
    "tags": [
      "listening",
      "quiet",
      "hearing"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 68
  },
  {
    "id": "quote-350",
    "text": "Every breath is a fresh start.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "breath",
      "fresh",
      "renewal"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 135
  },
  {
    "id": "quote-351",
    "text": "In stillness, the answers you have been looking for will find you.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "stillness",
      "answers",
      "calm"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 135
  },
  {
    "id": "quote-352",
    "text": "Release what you cannot control and cherish what you can.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "release",
      "cherish",
      "control"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 93
  },
  {
    "id": "quote-353",
    "text": "Let your mind be as clear as an untroubled spring.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "clear",
      "spring",
      "purity"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 71
  },
  {
    "id": "quote-354",
    "text": "There is a profound beauty in simply existing.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "existing",
      "beauty",
      "simplicity"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 89
  },
  {
    "id": "quote-355",
    "text": "May your thoughts be gentle and your steps be peaceful.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "gentle",
      "peaceful",
      "blessing"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 124
  },
  {
    "id": "quote-356",
    "text": "The lotus blossoms most beautifully from the deepest mud.",
    "author": "Buddhist Proverb",
    "category": "Mindfulness",
    "tags": [
      "lotus",
      "adversity",
      "beauty"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 128
  },
  {
    "id": "quote-357",
    "text": "Listen to your breathing as if it were ocean waves upon a shore.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "breath",
      "ocean",
      "waves"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 135
  },
  {
    "id": "quote-358",
    "text": "In the quietest hour of the night, find gratitude for having lived another day.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "gratitude",
      "night",
      "reflection"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 106
  },
  {
    "id": "quote-359",
    "text": "Do not hurry, do not worry; you are exactly where you need to be.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "trust",
      "timing",
      "calm"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 119
  },
  {
    "id": "quote-360",
    "text": "Breathe in courage, breathe out doubt.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "breath",
      "courage",
      "release"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 126
  },
  {
    "id": "quote-361",
    "text": "The soul thrives in the garden of tranquility.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "garden",
      "tranquility",
      "thrive"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 97
  },
  {
    "id": "quote-362",
    "text": "A peaceful heart makes a radiant face.",
    "author": "Proverbs",
    "category": "Mindfulness",
    "tags": [
      "radiance",
      "heart",
      "peace"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 54
  },
  {
    "id": "quote-363",
    "text": "Find stillness in the breath and clarity in the mind.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "stillness",
      "breath",
      "clarity"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 59
  },
  {
    "id": "quote-364",
    "text": "Every step taken with awareness is a step toward freedom.",
    "author": "Thich Nhat Hanh",
    "category": "Mindfulness",
    "tags": [
      "awareness",
      "step",
      "freedom"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 72
  },
  {
    "id": "quote-365",
    "text": "Let go of the heavy load you were never meant to carry.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "lightness",
      "release",
      "burden"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 62
  },
  {
    "id": "quote-366",
    "text": "Peace is not the absence of trouble, but the presence of grace.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "grace",
      "presence",
      "peace"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 42
  },
  {
    "id": "quote-367",
    "text": "Rest your thoughts in the quiet space of your heart.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "heart",
      "rest",
      "quiet"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 109
  },
  {
    "id": "quote-368",
    "text": "The morning light carries the promise of a peaceful day.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "morning",
      "light",
      "promise"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 129
  },
  {
    "id": "quote-369",
    "text": "When you drink water, remember the spring.",
    "author": "Chinese Proverb",
    "category": "Mindfulness",
    "tags": [
      "gratitude",
      "source",
      "remembrance"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 104
  },
  {
    "id": "quote-370",
    "text": "Be soft. Do not let the world make you hard.",
    "author": "Kurt Vonnegut",
    "category": "Mindfulness",
    "tags": [
      "softness",
      "gentleness",
      "heart"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 42
  },
  {
    "id": "quote-371",
    "text": "Still waters reflect the majesty of the heavens.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "reflection",
      "majesty",
      "waters"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 130
  },
  {
    "id": "quote-372",
    "text": "Embrace the quiet rhythm of your own unfolding.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "rhythm",
      "unfolding",
      "pace"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 75
  },
  {
    "id": "quote-373",
    "text": "A single deep breath can change your entire day.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "breath",
      "change",
      "moment"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 42
  },
  {
    "id": "quote-374",
    "text": "Plant seeds of kindness in the soil of tranquility.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "kindness",
      "tranquility",
      "seeds"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 41
  },
  {
    "id": "quote-375",
    "text": "There is no river you cannot cross with patience and stillness.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "patience",
      "river",
      "stillness"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 109
  },
  {
    "id": "quote-376",
    "text": "Let the dust settle before you seek your reflection.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "clarity",
      "settling",
      "reflection"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 96
  },
  {
    "id": "quote-377",
    "text": "May you walk gently upon this sacred earth.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "sacred",
      "gentle",
      "earth"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 99
  },
  {
    "id": "quote-378",
    "text": "Mindfulness is the art of befriending your own mind.",
    "author": "Jon Kabat-Zinn",
    "category": "Mindfulness",
    "tags": [
      "friendship",
      "mind",
      "art"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 102
  },
  {
    "id": "quote-379",
    "text": "In every season of life, peace is a choice you can make.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "choice",
      "peace",
      "seasons"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 55
  },
  {
    "id": "quote-380",
    "text": "Breathe in peace, exhale tension.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "breath",
      "release",
      "peace"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 42
  },
  {
    "id": "quote-381",
    "text": "Your presence is your greatest power.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "presence",
      "power",
      "now"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 100
  },
  {
    "id": "quote-382",
    "text": "Stillness is where your spirit gathers strength.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "stillness",
      "spirit",
      "strength"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 45
  },
  {
    "id": "quote-383",
    "text": "When the mind is peaceful, the world is at rest.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "peaceful",
      "world",
      "rest"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 58
  },
  {
    "id": "quote-384",
    "text": "Allow your heart to be open like the morning sky.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "sky",
      "open-heart",
      "morning"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 43
  },
  {
    "id": "quote-385",
    "text": "Treasures of the soul are found only in the silence.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "treasures",
      "soul",
      "silence"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 111
  },
  {
    "id": "quote-386",
    "text": "Observe the river of time without rushing into the current.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "river",
      "observation",
      "time"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 43
  },
  {
    "id": "quote-387",
    "text": "Every sunset is an invitation to pause and reflect.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "sunset",
      "pause",
      "reflection"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 121
  },
  {
    "id": "quote-388",
    "text": "May peace be your shield and kindness your guide.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "shield",
      "kindness",
      "peace"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 65
  },
  {
    "id": "quote-389",
    "text": "The greatest journey begins with a single mindful breath.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "journey",
      "breath",
      "beginning"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 86
  },
  {
    "id": "quote-390",
    "text": "Find harmony between doing and simply being.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "harmony",
      "being",
      "doing"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 50
  },
  {
    "id": "quote-391",
    "text": "Quiet your doubts and trust the wisdom of your breath.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "trust",
      "wisdom",
      "breath"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 107
  },
  {
    "id": "quote-392",
    "text": "Light your inner lamp and darkness will vanish.",
    "author": "Buddha",
    "category": "Mindfulness",
    "tags": [
      "inner-light",
      "lamp",
      "wisdom"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 66
  },
  {
    "id": "quote-393",
    "text": "Let your spirit rest in the calm ocean of Being.",
    "author": "Anonymous",
    "category": "Mindfulness",
    "tags": [
      "ocean",
      "spirit",
      "being"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 109
  },
  {
    "id": "quote-394",
    "text": "The unexamined life is not worth living.",
    "author": "Socrates",
    "category": "Philosophy",
    "tags": [
      "examination",
      "self-knowledge",
      "truth"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 111
  },
  {
    "id": "quote-395",
    "text": "I think, therefore I am.",
    "author": "René Descartes",
    "category": "Philosophy",
    "tags": [
      "existence",
      "thought",
      "foundation"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 40
  },
  {
    "id": "quote-396",
    "text": "He who has a why to live can bear almost any how.",
    "author": "Friedrich Nietzsche",
    "category": "Philosophy",
    "tags": [
      "meaning",
      "resilience",
      "purpose"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 114
  },
  {
    "id": "quote-397",
    "text": "Man is condemned to be free; because once thrown into the world, he is responsible for everything he does.",
    "author": "Jean-Paul Sartre",
    "category": "Philosophy",
    "tags": [
      "freedom",
      "responsibility",
      "existentialism"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 45
  },
  {
    "id": "quote-398",
    "text": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "author": "Aristotle",
    "category": "Philosophy",
    "tags": [
      "habit",
      "excellence",
      "discipline"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 88
  },
  {
    "id": "quote-399",
    "text": "Entities should not be multiplied unnecessarily.",
    "author": "William of Ockham",
    "category": "Philosophy",
    "tags": [
      "simplicity",
      "reasoning",
      "clarity"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 119
  },
  {
    "id": "quote-400",
    "text": "Happiness is the meaning and the purpose of life, the whole aim and end of human existence.",
    "author": "Aristotle",
    "category": "Philosophy",
    "tags": [
      "happiness",
      "eudaimonia",
      "purpose"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 109
  },
  {
    "id": "quote-401",
    "text": "To know, is to know that you know nothing. That is the meaning of true knowledge.",
    "author": "Socrates",
    "category": "Philosophy",
    "tags": [
      "humility",
      "wisdom",
      "learning"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 107
  },
  {
    "id": "quote-402",
    "text": "Life must be understood backward. But it must be lived forward.",
    "author": "Søren Kierkegaard",
    "category": "Philosophy",
    "tags": [
      "time",
      "understanding",
      "forward"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 101
  },
  {
    "id": "quote-403",
    "text": "There is only one really serious philosophical problem, and that is suicide. Deciding whether or not life is worth living is to answer the fundamental question in philosophy.",
    "author": "Albert Camus",
    "category": "Philosophy",
    "tags": [
      "meaning",
      "absurdism",
      "life"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 75
  },
  {
    "id": "quote-404",
    "text": "You can discover more about a person in an hour of play than in a year of conversation.",
    "author": "Plato",
    "category": "Philosophy",
    "tags": [
      "play",
      "character",
      "human-nature"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 68
  },
  {
    "id": "quote-405",
    "text": "I cannot teach anybody anything. I can only make them think.",
    "author": "Socrates",
    "category": "Philosophy",
    "tags": [
      "education",
      "questioning",
      "curiosity"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 61
  },
  {
    "id": "quote-406",
    "text": "In the midst of winter, I found there was, within me, an invincible summer.",
    "author": "Albert Camus",
    "category": "Philosophy",
    "tags": [
      "resilience",
      "inner-strength",
      "hope"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 120
  },
  {
    "id": "quote-407",
    "text": "The only thing I know is that I know nothing.",
    "author": "Socrates",
    "category": "Philosophy",
    "tags": [
      "humility",
      "paradox",
      "knowledge"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 126
  },
  {
    "id": "quote-408",
    "text": "Liberty consists in doing what one desires.",
    "author": "John Stuart Mill",
    "category": "Philosophy",
    "tags": [
      "liberty",
      "desire",
      "freedom"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 75
  },
  {
    "id": "quote-409",
    "text": "Wonder is the feeling of a philosopher, and philosophy begins in wonder.",
    "author": "Plato",
    "category": "Philosophy",
    "tags": [
      "wonder",
      "curiosity",
      "origins"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 65
  },
  {
    "id": "quote-410",
    "text": "God is dead. God remains dead. And we have killed him. How shall we comfort ourselves, the murderers of all murderers?",
    "author": "Friedrich Nietzsche",
    "category": "Philosophy",
    "tags": [
      "culture",
      "modernity",
      "critique"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 68
  },
  {
    "id": "quote-411",
    "text": "The brave man is he who overcomes not only his enemies, but his pleasures.",
    "author": "Democritus",
    "category": "Philosophy",
    "tags": [
      "self-control",
      "pleasure",
      "bravery"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 85
  },
  {
    "id": "quote-412",
    "text": "He who knows others is wise; he who knows himself is enlightened.",
    "author": "Lao Tzu",
    "category": "Philosophy",
    "tags": [
      "enlightenment",
      "self-awareness",
      "wisdom"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 51
  },
  {
    "id": "quote-413",
    "text": "Anxiety is the dizziness of freedom.",
    "author": "Søren Kierkegaard",
    "category": "Philosophy",
    "tags": [
      "anxiety",
      "freedom",
      "choice"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 120
  },
  {
    "id": "quote-414",
    "text": "Those who can make you believe absurdities can make you commit atrocities.",
    "author": "Voltaire",
    "category": "Philosophy",
    "tags": [
      "critical-thinking",
      "reason",
      "justice"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 117
  },
  {
    "id": "quote-415",
    "text": "To be is to be perceived.",
    "author": "George Berkeley",
    "category": "Philosophy",
    "tags": [
      "perception",
      "reality",
      "mind"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 73
  },
  {
    "id": "quote-416",
    "text": "Custom is the great guide of human life.",
    "author": "David Hume",
    "category": "Philosophy",
    "tags": [
      "habit",
      "human-nature",
      "custom"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 93
  },
  {
    "id": "quote-417",
    "text": "Man is born free, and everywhere he is in chains.",
    "author": "Jean-Jacques Rousseau",
    "category": "Philosophy",
    "tags": [
      "society",
      "freedom",
      "politics"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 75
  },
  {
    "id": "quote-418",
    "text": "All that is real is rational, and all that is rational is real.",
    "author": "G.W.F. Hegel",
    "category": "Philosophy",
    "tags": [
      "dialectic",
      "rationality",
      "reality"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 131
  },
  {
    "id": "quote-419",
    "text": "History repeats itself, first as tragedy, second as farce.",
    "author": "Karl Marx",
    "category": "Philosophy",
    "tags": [
      "history",
      "cycles",
      "critique"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 44
  },
  {
    "id": "quote-420",
    "text": "Science is what you know. Philosophy is what you don't know.",
    "author": "Bertrand Russell",
    "category": "Philosophy",
    "tags": [
      "science",
      "philosophy",
      "curiosity"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 36
  },
  {
    "id": "quote-421",
    "text": "The greatest happiness of the greatest number is the foundation of morals and legislation.",
    "author": "Jeremy Bentham",
    "category": "Philosophy",
    "tags": [
      "utilitarianism",
      "ethics",
      "society"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 93
  },
  {
    "id": "quote-422",
    "text": "The limits of my language mean the limits of my world.",
    "author": "Ludwig Wittgenstein",
    "category": "Philosophy",
    "tags": [
      "language",
      "world",
      "thought"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 114
  },
  {
    "id": "quote-423",
    "text": "Whereof one cannot speak, thereof one must be silent.",
    "author": "Ludwig Wittgenstein",
    "category": "Philosophy",
    "tags": [
      "silence",
      "truth",
      "limits"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 107
  },
  {
    "id": "quote-424",
    "text": "Nothing exists except atoms and empty space; everything else is opinion.",
    "author": "Democritus",
    "category": "Philosophy",
    "tags": [
      "atomism",
      "reality",
      "materialism"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 47
  },
  {
    "id": "quote-425",
    "text": "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
    "author": "Aristotle",
    "category": "Philosophy",
    "tags": [
      "critical-thinking",
      "open-mindedness",
      "intellect"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 44
  },
  {
    "id": "quote-426",
    "text": "To live is to suffer, to survive is to find some meaning in the suffering.",
    "author": "Friedrich Nietzsche",
    "category": "Philosophy",
    "tags": [
      "survival",
      "meaning",
      "suffering"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 103
  },
  {
    "id": "quote-427",
    "text": "The soul is dyed the color of its thoughts.",
    "author": "Heraclitus",
    "category": "Philosophy",
    "tags": [
      "thoughts",
      "soul",
      "character"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 62
  },
  {
    "id": "quote-428",
    "text": "No man ever steps in the same river twice, for it's not the same river and he's not the same man.",
    "author": "Heraclitus",
    "category": "Philosophy",
    "tags": [
      "change",
      "impermanence",
      "flux"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 99
  },
  {
    "id": "quote-429",
    "text": "Everything flows, nothing stands still.",
    "author": "Heraclitus",
    "category": "Philosophy",
    "tags": [
      "flux",
      "change",
      "nature"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 68
  },
  {
    "id": "quote-430",
    "text": "The mind is furnished with ideas by experience alone.",
    "author": "John Locke",
    "category": "Philosophy",
    "tags": [
      "empiricism",
      "experience",
      "learning"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 51
  },
  {
    "id": "quote-431",
    "text": "We do not describe the world we see, we see the world we can describe.",
    "author": "René Descartes",
    "category": "Philosophy",
    "tags": [
      "perception",
      "language",
      "cognition"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 79
  },
  {
    "id": "quote-432",
    "text": "Dare to know! Have the courage to use your own understanding.",
    "author": "Immanuel Kant",
    "category": "Philosophy",
    "tags": [
      "enlightenment",
      "courage",
      "reason"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 43
  },
  {
    "id": "quote-433",
    "text": "Act only according to that maxim whereby you can, at the same time, will that it should become a universal law.",
    "author": "Immanuel Kant",
    "category": "Philosophy",
    "tags": [
      "duty",
      "universal-law",
      "ethics"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 66
  },
  {
    "id": "quote-434",
    "text": "Two things awe me most, the starry sky above me and the moral law within me.",
    "author": "Immanuel Kant",
    "category": "Philosophy",
    "tags": [
      "cosmos",
      "morality",
      "awe"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 82
  },
  {
    "id": "quote-435",
    "text": "He who fights with monsters should look to it that he himself does not become a monster.",
    "author": "Friedrich Nietzsche",
    "category": "Philosophy",
    "tags": [
      "vigilance",
      "morality",
      "shadow"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 71
  },
  {
    "id": "quote-436",
    "text": "And if you gaze long into an abyss, the abyss also gazes into you.",
    "author": "Friedrich Nietzsche",
    "category": "Philosophy",
    "tags": [
      "abyss",
      "depth",
      "introspection"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 55
  },
  {
    "id": "quote-437",
    "text": "One cannot step twice into the same waters.",
    "author": "Heraclitus",
    "category": "Philosophy",
    "tags": [
      "impermanence",
      "presence",
      "flow"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 91
  },
  {
    "id": "quote-438",
    "text": "The price good men pay for indifference to public affairs is to be ruled by evil men.",
    "author": "Plato",
    "category": "Philosophy",
    "tags": [
      "civics",
      "duty",
      "justice"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 104
  },
  {
    "id": "quote-439",
    "text": "Wise men speak because they have something to say; fools because they have to say something.",
    "author": "Plato",
    "category": "Philosophy",
    "tags": [
      "wisdom",
      "discernment",
      "speech"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 125
  },
  {
    "id": "quote-440",
    "text": "Courage is knowing what not to fear.",
    "author": "Plato",
    "category": "Philosophy",
    "tags": [
      "courage",
      "wisdom",
      "fear"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 73
  },
  {
    "id": "quote-441",
    "text": "Ignorance, the root and stem of every evil.",
    "author": "Plato",
    "category": "Philosophy",
    "tags": [
      "ignorance",
      "knowledge",
      "evil"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 113
  },
  {
    "id": "quote-442",
    "text": "The root of all evil is the lack of reflection.",
    "author": "Socrates",
    "category": "Philosophy",
    "tags": [
      "reflection",
      "truth",
      "mind"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 138
  },
  {
    "id": "quote-443",
    "text": "Human behavior flows from three main sources: desire, emotion, and knowledge.",
    "author": "Plato",
    "category": "Philosophy",
    "tags": [
      "psychology",
      "desire",
      "emotion"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 118
  },
  {
    "id": "quote-444",
    "text": "Knowing yourself is the beginning of all wisdom.",
    "author": "Aristotle",
    "category": "Philosophy",
    "tags": [
      "self-awareness",
      "origins",
      "wisdom"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 102
  },
  {
    "id": "quote-445",
    "text": "Patience is bitter, but its fruit is sweet.",
    "author": "Aristotle",
    "category": "Philosophy",
    "tags": [
      "patience",
      "virtue",
      "reward"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 36
  },
  {
    "id": "quote-446",
    "text": "To perceive is to suffer.",
    "author": "Aristotle",
    "category": "Philosophy",
    "tags": [
      "perception",
      "sensitivity",
      "existence"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 120
  },
  {
    "id": "quote-447",
    "text": "Hope is a waking dream.",
    "author": "Aristotle",
    "category": "Philosophy",
    "tags": [
      "hope",
      "dreams",
      "imagination"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 139
  },
  {
    "id": "quote-448",
    "text": "Whoso would be a man must be a nonconformist.",
    "author": "Ralph Waldo Emerson",
    "category": "Philosophy",
    "tags": [
      "nonconformity",
      "individuality",
      "courage"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 105
  },
  {
    "id": "quote-449",
    "text": "Trust thyself: every heart vibrates to that iron string.",
    "author": "Ralph Waldo Emerson",
    "category": "Philosophy",
    "tags": [
      "self-reliance",
      "trust",
      "authenticity"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 73
  },
  {
    "id": "quote-450",
    "text": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "author": "Ralph Waldo Emerson",
    "category": "Philosophy",
    "tags": [
      "inner-depth",
      "potential",
      "spirit"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 119
  },
  {
    "id": "quote-451",
    "text": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "author": "Ralph Waldo Emerson",
    "category": "Philosophy",
    "tags": [
      "authenticity",
      "identity",
      "bravery"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 48
  },
  {
    "id": "quote-452",
    "text": "Live in the sunshine, swim the sea, drink the wild air.",
    "author": "Ralph Waldo Emerson",
    "category": "Philosophy",
    "tags": [
      "nature",
      "vitality",
      "wild"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 52
  },
  {
    "id": "quote-453",
    "text": "The invariable mark of wisdom is to see the miraculous in the common.",
    "author": "Ralph Waldo Emerson",
    "category": "Philosophy",
    "tags": [
      "miracles",
      "everyday",
      "wisdom"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 68
  },
  {
    "id": "quote-454",
    "text": "I went to the woods because I wished to live deliberately.",
    "author": "Henry David Thoreau",
    "category": "Philosophy",
    "tags": [
      "deliberate",
      "nature",
      "solitude"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 49
  },
  {
    "id": "quote-455",
    "text": "Rather than love, than money, than fame, give me truth.",
    "author": "Henry David Thoreau",
    "category": "Philosophy",
    "tags": [
      "truth",
      "integrity",
      "values"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 48
  },
  {
    "id": "quote-456",
    "text": "Things do not change; we change.",
    "author": "Henry David Thoreau",
    "category": "Philosophy",
    "tags": [
      "growth",
      "perception",
      "transformation"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 130
  },
  {
    "id": "quote-457",
    "text": "Our life is frittered away by detail. Simplify, simplify.",
    "author": "Henry David Thoreau",
    "category": "Philosophy",
    "tags": [
      "simplicity",
      "focus",
      "clarity"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 105
  },
  {
    "id": "quote-458",
    "text": "Could a greater miracle take place than for us to look through each other's eyes for an instant?",
    "author": "Henry David Thoreau",
    "category": "Philosophy",
    "tags": [
      "empathy",
      "connection",
      "miracle"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 54
  },
  {
    "id": "quote-459",
    "text": "If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.",
    "author": "Henry David Thoreau",
    "category": "Philosophy",
    "tags": [
      "dreams",
      "foundations",
      "vision"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 69
  },
  {
    "id": "quote-460",
    "text": "Go confidently in the direction of your dreams! Live the life you've imagined.",
    "author": "Henry David Thoreau",
    "category": "Philosophy",
    "tags": [
      "dreams",
      "confidence",
      "courage"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 71
  },
  {
    "id": "quote-461",
    "text": "Not all those who wander are lost.",
    "author": "J.R.R. Tolkien",
    "category": "Philosophy",
    "tags": [
      "wandering",
      "journey",
      "exploration"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 112
  },
  {
    "id": "quote-462",
    "text": "Without music, life would be a mistake.",
    "author": "Friedrich Nietzsche",
    "category": "Philosophy",
    "tags": [
      "music",
      "art",
      "life"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 61
  },
  {
    "id": "quote-463",
    "text": "The higher we soar the smaller we appear to those who cannot fly.",
    "author": "Friedrich Nietzsche",
    "category": "Philosophy",
    "tags": [
      "elevation",
      "perspective",
      "growth"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 126
  },
  {
    "id": "quote-464",
    "text": "You must have chaos within you to give birth to a dancing star.",
    "author": "Friedrich Nietzsche",
    "category": "Philosophy",
    "tags": [
      "chaos",
      "creation",
      "genius"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 78
  },
  {
    "id": "quote-465",
    "text": "There are no facts, only interpretations.",
    "author": "Friedrich Nietzsche",
    "category": "Philosophy",
    "tags": [
      "perspective",
      "relativism",
      "truth"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 61
  },
  {
    "id": "quote-466",
    "text": "That which does not kill us makes us stronger.",
    "author": "Friedrich Nietzsche",
    "category": "Philosophy",
    "tags": [
      "strength",
      "resilience",
      "adversity"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 122
  },
  {
    "id": "quote-467",
    "text": "In every real man a child is hidden that wants to play.",
    "author": "Friedrich Nietzsche",
    "category": "Philosophy",
    "tags": [
      "inner-child",
      "play",
      "authenticity"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 116
  },
  {
    "id": "quote-468",
    "text": "Become who you are.",
    "author": "Friedrich Nietzsche",
    "category": "Philosophy",
    "tags": [
      "becoming",
      "potential",
      "destiny"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 68
  },
  {
    "id": "quote-469",
    "text": "The thought of suicide is a great consolation: by means of it one gets successfully through many a bad night.",
    "author": "Friedrich Nietzsche",
    "category": "Philosophy",
    "tags": [
      "consolation",
      "mind",
      "endurance"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 99
  },
  {
    "id": "quote-470",
    "text": "He who cannot obey himself will be commanded.",
    "author": "Friedrich Nietzsche",
    "category": "Philosophy",
    "tags": [
      "self-mastery",
      "discipline",
      "command"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 97
  },
  {
    "id": "quote-471",
    "text": "To love truth for truth's sake is the principal part of human perfection in this world.",
    "author": "John Locke",
    "category": "Philosophy",
    "tags": [
      "truth",
      "perfection",
      "virtue"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 67
  },
  {
    "id": "quote-472",
    "text": "All men are liable to error; and most men are, in many points, by passion or interest, under temptation to it.",
    "author": "John Locke",
    "category": "Philosophy",
    "tags": [
      "error",
      "fallibility",
      "humility"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 41
  },
  {
    "id": "quote-473",
    "text": "Reading furnishes the mind only with materials of knowledge; it is thinking that makes what we read ours.",
    "author": "John Locke",
    "category": "Philosophy",
    "tags": [
      "reading",
      "thinking",
      "integration"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 46
  },
  {
    "id": "quote-474",
    "text": "Common sense is not so common.",
    "author": "Voltaire",
    "category": "Philosophy",
    "tags": [
      "common-sense",
      "critique",
      "clarity"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 116
  },
  {
    "id": "quote-475",
    "text": "Appreciation is a wonderful thing: It makes what is excellent in others belong to us as well.",
    "author": "Voltaire",
    "category": "Philosophy",
    "tags": [
      "appreciation",
      "gratitude",
      "generosity"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 89
  },
  {
    "id": "quote-476",
    "text": "Judge a man by his questions rather than by his answers.",
    "author": "Voltaire",
    "category": "Philosophy",
    "tags": [
      "curiosity",
      "inquiry",
      "character"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 70
  },
  {
    "id": "quote-477",
    "text": "The most important decision you make is to be in a good mood.",
    "author": "Voltaire",
    "category": "Philosophy",
    "tags": [
      "attitude",
      "decision",
      "joy"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 40
  },
  {
    "id": "quote-478",
    "text": "Doubt is an uncomfortable condition, but certainty is a ridiculous one.",
    "author": "Voltaire",
    "category": "Philosophy",
    "tags": [
      "doubt",
      "certainty",
      "intellect"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 35
  },
  {
    "id": "quote-479",
    "text": "God gave us the gift of life; it is up to us to give ourselves the gift of living well.",
    "author": "Voltaire",
    "category": "Philosophy",
    "tags": [
      "living-well",
      "agency",
      "life"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 77
  },
  {
    "id": "quote-480",
    "text": "Every man is guilty of all the good he did not do.",
    "author": "Voltaire",
    "category": "Philosophy",
    "tags": [
      "responsibility",
      "goodness",
      "action"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 133
  },
  {
    "id": "quote-481",
    "text": "Perfection is attained by slow degrees; it requires the hand of time.",
    "author": "Voltaire",
    "category": "Philosophy",
    "tags": [
      "perfection",
      "time",
      "patience"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 51
  },
  {
    "id": "quote-482",
    "text": "Dare to think for yourself.",
    "author": "Voltaire",
    "category": "Philosophy",
    "tags": [
      "freethinking",
      "courage",
      "independence"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 116
  },
  {
    "id": "quote-483",
    "text": "To hold a pen is to be at war.",
    "author": "Voltaire",
    "category": "Philosophy",
    "tags": [
      "writing",
      "ideas",
      "intellect"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 68
  },
  {
    "id": "quote-484",
    "text": "I may disapprove of what you say, but I will defend to the death your right to say it.",
    "author": "Evelyn Beatrice Hall",
    "category": "Philosophy",
    "tags": [
      "free-speech",
      "tolerance",
      "liberty"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 55
  },
  {
    "id": "quote-485",
    "text": "The secret of happiness is freedom, the secret of freedom is courage.",
    "author": "Thucydides",
    "category": "Philosophy",
    "tags": [
      "freedom",
      "courage",
      "happiness"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 129
  },
  {
    "id": "quote-486",
    "text": "Self-knowledge is the beginning of wisdom.",
    "author": "Plato",
    "category": "Philosophy",
    "tags": [
      "self-knowledge",
      "wisdom",
      "foundation"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 91
  },
  {
    "id": "quote-487",
    "text": "A system of morality which is based on relative emotional values is a mere illusion.",
    "author": "Socrates",
    "category": "Philosophy",
    "tags": [
      "morality",
      "ethics",
      "truth"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 105
  },
  {
    "id": "quote-488",
    "text": "False words are not only evil in themselves, but they infect the soul with evil.",
    "author": "Plato",
    "category": "Philosophy",
    "tags": [
      "truthfulness",
      "speech",
      "integrity"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 125
  },
  {
    "id": "quote-489",
    "text": "There is no harm in repeating a good thing.",
    "author": "Plato",
    "category": "Philosophy",
    "tags": [
      "repetition",
      "goodness",
      "virtue"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 89
  },
  {
    "id": "quote-490",
    "text": "Only the dead have seen the end of war.",
    "author": "George Santayana",
    "category": "Philosophy",
    "tags": [
      "peace",
      "history",
      "war"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 106
  },
  {
    "id": "quote-491",
    "text": "Those who cannot remember the past are condemned to repeat it.",
    "author": "George Santayana",
    "category": "Philosophy",
    "tags": [
      "memory",
      "history",
      "wisdom"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 36
  },
  {
    "id": "quote-492",
    "text": "Chaos is a name for any order that produces confusion in our minds.",
    "author": "George Santayana",
    "category": "Philosophy",
    "tags": [
      "order",
      "chaos",
      "perception"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 49
  },
  {
    "id": "quote-493",
    "text": "Skepticism is the chastity of the intellect, and it is shameful to surrender it too soon.",
    "author": "George Santayana",
    "category": "Philosophy",
    "tags": [
      "skepticism",
      "intellect",
      "reason"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 44
  },
  {
    "id": "quote-494",
    "text": "Beauty is a pledge of the possible conformity between the soul and nature.",
    "author": "George Santayana",
    "category": "Philosophy",
    "tags": [
      "beauty",
      "nature",
      "harmony"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 123
  },
  {
    "id": "quote-495",
    "text": "The world is a comedy to those that think, a tragedy to those that feel.",
    "author": "Horace Walpole",
    "category": "Philosophy",
    "tags": [
      "perspective",
      "thinking",
      "feeling"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 54
  },
  {
    "id": "quote-496",
    "text": "Wisdom begins in wonder.",
    "author": "Socrates",
    "category": "Philosophy",
    "tags": [
      "wonder",
      "wisdom",
      "origins"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 104
  },
  {
    "id": "quote-497",
    "text": "The greatest deception men suffer is from their own opinions.",
    "author": "Leonardo da Vinci",
    "category": "Philosophy",
    "tags": [
      "delusion",
      "opinion",
      "truth"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 39
  },
  {
    "id": "quote-498",
    "text": "Simplicity is the ultimate sophistication.",
    "author": "Leonardo da Vinci",
    "category": "Philosophy",
    "tags": [
      "simplicity",
      "elegance",
      "sophistication"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 82
  },
  {
    "id": "quote-499",
    "text": "Learn how to see. Realize that everything connects to everything else.",
    "author": "Leonardo da Vinci",
    "category": "Philosophy",
    "tags": [
      "connection",
      "vision",
      "holism"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 109
  },
  {
    "id": "quote-500",
    "text": "Time stays long enough for anyone who will use it.",
    "author": "Leonardo da Vinci",
    "category": "Philosophy",
    "tags": [
      "time",
      "stewardship",
      "action"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 105
  },
  {
    "id": "quote-501",
    "text": "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigor of the mind.",
    "author": "Leonardo da Vinci",
    "category": "Philosophy",
    "tags": [
      "action",
      "vigor",
      "mind"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 53
  },
  {
    "id": "quote-502",
    "text": "Where the spirit does not work with the hand, there is no art.",
    "author": "Leonardo da Vinci",
    "category": "Philosophy",
    "tags": [
      "art",
      "spirit",
      "craft"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 90
  },
  {
    "id": "quote-503",
    "text": "Nothing strengthens authority so much as silence.",
    "author": "Leonardo da Vinci",
    "category": "Philosophy",
    "tags": [
      "silence",
      "power",
      "presence"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 51
  },
  {
    "id": "quote-504",
    "text": "The journey of a thousand miles begins with one step.",
    "author": "Lao Tzu",
    "category": "Wisdom",
    "tags": [
      "journey",
      "action",
      "beginnings"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 40
  },
  {
    "id": "quote-505",
    "text": "When the student is ready, the teacher will appear.",
    "author": "Zen Proverb",
    "category": "Wisdom",
    "tags": [
      "readiness",
      "learning",
      "timing"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 74
  },
  {
    "id": "quote-506",
    "text": "Knowing others is intelligence; knowing yourself is true wisdom.",
    "author": "Lao Tzu",
    "category": "Wisdom",
    "tags": [
      "intelligence",
      "wisdom",
      "self-knowledge"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 81
  },
  {
    "id": "quote-507",
    "text": "Mastering others is strength; mastering yourself is true power.",
    "author": "Lao Tzu",
    "category": "Wisdom",
    "tags": [
      "mastery",
      "self-control",
      "power"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 136
  },
  {
    "id": "quote-508",
    "text": "A tree that is unbending is easily broken.",
    "author": "Lao Tzu",
    "category": "Wisdom",
    "tags": [
      "flexibility",
      "resilience",
      "adaptability"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 40
  },
  {
    "id": "quote-509",
    "text": "Silence is a source of great strength.",
    "author": "Lao Tzu",
    "category": "Wisdom",
    "tags": [
      "silence",
      "strength",
      "inner-calm"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 80
  },
  {
    "id": "quote-510",
    "text": "In the middle of difficulty lies opportunity.",
    "author": "Albert Einstein",
    "category": "Wisdom",
    "tags": [
      "opportunity",
      "difficulty",
      "optimism"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 61
  },
  {
    "id": "quote-511",
    "text": "Life isn't about waiting for the storm to pass, it's about learning to dance in the rain.",
    "author": "Vivian Greene",
    "category": "Wisdom",
    "tags": [
      "resilience",
      "joy",
      "storm"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 122
  },
  {
    "id": "quote-512",
    "text": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "author": "Ralph Waldo Emerson",
    "category": "Wisdom",
    "tags": [
      "trailblazing",
      "originality",
      "courage"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 66
  },
  {
    "id": "quote-513",
    "text": "In three words I can sum up everything I've learned about life: it goes on.",
    "author": "Robert Frost",
    "category": "Wisdom",
    "tags": [
      "endurance",
      "perspective",
      "life"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 120
  },
  {
    "id": "quote-514",
    "text": "The only real mistake is the one from which we learn nothing.",
    "author": "Henry Ford",
    "category": "Wisdom",
    "tags": [
      "mistakes",
      "learning",
      "growth"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 48
  },
  {
    "id": "quote-515",
    "text": "Turn your wounds into wisdom.",
    "author": "Oprah Winfrey",
    "category": "Wisdom",
    "tags": [
      "healing",
      "wisdom",
      "transformation"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 80
  },
  {
    "id": "quote-516",
    "text": "To know what you know and what you do not know, that is true knowledge.",
    "author": "Confucius",
    "category": "Wisdom",
    "tags": [
      "knowledge",
      "humility",
      "truth"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 134
  },
  {
    "id": "quote-517",
    "text": "It does not matter how slowly you go as long as you do not stop.",
    "author": "Confucius",
    "category": "Wisdom",
    "tags": [
      "persistence",
      "perseverance",
      "pace"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 106
  },
  {
    "id": "quote-518",
    "text": "Real knowledge is to know the extent of one's ignorance.",
    "author": "Confucius",
    "category": "Wisdom",
    "tags": [
      "humility",
      "ignorance",
      "knowledge"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 87
  },
  {
    "id": "quote-519",
    "text": "The man who moves a mountain begins by carrying away small stones.",
    "author": "Confucius",
    "category": "Wisdom",
    "tags": [
      "progress",
      "diligence",
      "mountains"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 114
  },
  {
    "id": "quote-520",
    "text": "Silence is a true friend who never betrays.",
    "author": "Confucius",
    "category": "Wisdom",
    "tags": [
      "silence",
      "loyalty",
      "peace"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 130
  },
  {
    "id": "quote-521",
    "text": "Everything has beauty, but not everyone sees it.",
    "author": "Confucius",
    "category": "Wisdom",
    "tags": [
      "beauty",
      "perspective",
      "appreciation"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 54
  },
  {
    "id": "quote-522",
    "text": "They must often change, who would be constant in happiness or wisdom.",
    "author": "Confucius",
    "category": "Wisdom",
    "tags": [
      "adaptability",
      "change",
      "happiness"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 65
  },
  {
    "id": "quote-523",
    "text": "Wheresoever you go, go with all your heart.",
    "author": "Confucius",
    "category": "Wisdom",
    "tags": [
      "wholehearted",
      "devotion",
      "passion"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 55
  },
  {
    "id": "quote-524",
    "text": "Before you embark on a journey of revenge, dig two graves.",
    "author": "Confucius",
    "category": "Wisdom",
    "tags": [
      "revenge",
      "consequence",
      "peace"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 137
  },
  {
    "id": "quote-525",
    "text": "Better a diamond with a flaw than a pebble without.",
    "author": "Confucius",
    "category": "Wisdom",
    "tags": [
      "value",
      "flaws",
      "excellence"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 138
  },
  {
    "id": "quote-526",
    "text": "Our greatest glory is not in never falling, but in rising every time we fall.",
    "author": "Confucius",
    "category": "Wisdom",
    "tags": [
      "resilience",
      "rising",
      "courage"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 57
  },
  {
    "id": "quote-527",
    "text": "The superior man is modest in his speech, but exceeds in his actions.",
    "author": "Confucius",
    "category": "Wisdom",
    "tags": [
      "modesty",
      "action",
      "deeds"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 87
  },
  {
    "id": "quote-528",
    "text": "Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.",
    "author": "Chinese Proverb",
    "category": "Wisdom",
    "tags": [
      "education",
      "empowerment",
      "sustainability"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 38
  },
  {
    "id": "quote-529",
    "text": "A bird does not sing because it has an answer, it sings because it has a song.",
    "author": "Maya Angelou",
    "category": "Wisdom",
    "tags": [
      "expression",
      "authenticity",
      "song"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 57
  },
  {
    "id": "quote-530",
    "text": "If you want to go fast, go alone. If you want to go far, go together.",
    "author": "African Proverb",
    "category": "Wisdom",
    "tags": [
      "community",
      "collaboration",
      "journey"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 129
  },
  {
    "id": "quote-531",
    "text": "Smooth seas do not make skillful sailors.",
    "author": "African Proverb",
    "category": "Wisdom",
    "tags": [
      "adversity",
      "skills",
      "growth"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 77
  },
  {
    "id": "quote-532",
    "text": "Wisdom is like a baobab tree; no one individual can embrace it.",
    "author": "African Proverb",
    "category": "Wisdom",
    "tags": [
      "humility",
      "wisdom",
      "perspective"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 135
  },
  {
    "id": "quote-533",
    "text": "The best time to plant a tree was 20 years ago. The second best time is now.",
    "author": "Chinese Proverb",
    "category": "Wisdom",
    "tags": [
      "action",
      "now",
      "planting"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 87
  },
  {
    "id": "quote-534",
    "text": "Fall seven times, stand up eight.",
    "author": "Japanese Proverb",
    "category": "Wisdom",
    "tags": [
      "resilience",
      "perseverance",
      "grit"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 137
  },
  {
    "id": "quote-535",
    "text": "Even a monkey can fall from a tree.",
    "author": "Japanese Proverb",
    "category": "Wisdom",
    "tags": [
      "humility",
      "fallibility",
      "grace"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 120
  },
  {
    "id": "quote-536",
    "text": "Vision without action is a daydream. Action without vision is a nightmare.",
    "author": "Japanese Proverb",
    "category": "Wisdom",
    "tags": [
      "vision",
      "action",
      "execution"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 129
  },
  {
    "id": "quote-537",
    "text": "The bamboo that bends is stronger than the oak that resists.",
    "author": "Japanese Proverb",
    "category": "Wisdom",
    "tags": [
      "flexibility",
      "resilience",
      "wisdom"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 138
  },
  {
    "id": "quote-538",
    "text": "A river cuts through rock, not because of its power, but because of its persistence.",
    "author": "Jim Watkins",
    "category": "Wisdom",
    "tags": [
      "persistence",
      "water",
      "consistency"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 66
  },
  {
    "id": "quote-539",
    "text": "Knowledge speaks, but wisdom listens.",
    "author": "Jimi Hendrix",
    "category": "Wisdom",
    "tags": [
      "listening",
      "knowledge",
      "wisdom"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 69
  },
  {
    "id": "quote-540",
    "text": "Count your age by friends, not years. Count your life by smiles, not tears.",
    "author": "John Lennon",
    "category": "Wisdom",
    "tags": [
      "friendship",
      "smiles",
      "gratitude"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 55
  },
  {
    "id": "quote-541",
    "text": "The purpose of our lives is to be happy.",
    "author": "Dalai Lama",
    "category": "Wisdom",
    "tags": [
      "happiness",
      "purpose",
      "compassion"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 135
  },
  {
    "id": "quote-542",
    "text": "Love and compassion are necessities, not luxuries. Without them, humanity cannot survive.",
    "author": "Dalai Lama",
    "category": "Wisdom",
    "tags": [
      "compassion",
      "love",
      "humanity"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 124
  },
  {
    "id": "quote-543",
    "text": "If you think you are too small to make a difference, try sleeping with a mosquito.",
    "author": "Dalai Lama",
    "category": "Wisdom",
    "tags": [
      "impact",
      "smallness",
      "humor"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 48
  },
  {
    "id": "quote-544",
    "text": "Remember that not getting what you want is sometimes a wonderful stroke of luck.",
    "author": "Dalai Lama",
    "category": "Wisdom",
    "tags": [
      "luck",
      "acceptance",
      "fortune"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 83
  },
  {
    "id": "quote-545",
    "text": "Be kind whenever possible. It is always possible.",
    "author": "Dalai Lama",
    "category": "Wisdom",
    "tags": [
      "kindness",
      "compassion",
      "simplicity"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 39
  },
  {
    "id": "quote-546",
    "text": "Happiness is not something ready made. It comes from your own actions.",
    "author": "Dalai Lama",
    "category": "Wisdom",
    "tags": [
      "agency",
      "action",
      "happiness"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 95
  },
  {
    "id": "quote-547",
    "text": "My religion is very simple. My religion is kindness.",
    "author": "Dalai Lama",
    "category": "Wisdom",
    "tags": [
      "kindness",
      "simplicity",
      "heart"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 63
  },
  {
    "id": "quote-548",
    "text": "Old friends pass away, new friends appear. It is just like the days. An old day passes, a new day arrives.",
    "author": "Dalai Lama",
    "category": "Wisdom",
    "tags": [
      "acceptance",
      "impermanence",
      "friendship"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 60
  },
  {
    "id": "quote-549",
    "text": "Choose to be optimistic, it feels better.",
    "author": "Dalai Lama",
    "category": "Wisdom",
    "tags": [
      "optimism",
      "choice",
      "mindset"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 139
  },
  {
    "id": "quote-550",
    "text": "Silence is sometimes the best answer.",
    "author": "Dalai Lama",
    "category": "Wisdom",
    "tags": [
      "silence",
      "discernment",
      "peace"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 93
  },
  {
    "id": "quote-551",
    "text": "Wisdom is the daughter of experience.",
    "author": "Leonardo da Vinci",
    "category": "Wisdom",
    "tags": [
      "experience",
      "wisdom",
      "origins"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 79
  },
  {
    "id": "quote-552",
    "text": "Life is really simple, but we insist on making it complicated.",
    "author": "Confucius",
    "category": "Wisdom",
    "tags": [
      "simplicity",
      "clarity",
      "life"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 74
  },
  {
    "id": "quote-553",
    "text": "A gentle answer turns away wrath, but a harsh word stirs up anger.",
    "author": "Proverbs",
    "category": "Wisdom",
    "tags": [
      "gentleness",
      "wrath",
      "peace"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 140
  },
  {
    "id": "quote-554",
    "text": "As water reflects the face, so one's life reflects the heart.",
    "author": "Proverbs",
    "category": "Wisdom",
    "tags": [
      "reflection",
      "heart",
      "integrity"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 136
  },
  {
    "id": "quote-555",
    "text": "He who walks with the wise grows wise.",
    "author": "Proverbs",
    "category": "Wisdom",
    "tags": [
      "company",
      "wisdom",
      "growth"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 64
  },
  {
    "id": "quote-556",
    "text": "There is a season for everything, and a time for every matter under heaven.",
    "author": "Ecclesiastes",
    "category": "Wisdom",
    "tags": [
      "seasons",
      "timing",
      "patience"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 63
  },
  {
    "id": "quote-557",
    "text": "A joyful heart is good medicine, but a crushed spirit dries up the bones.",
    "author": "Proverbs",
    "category": "Wisdom",
    "tags": [
      "joy",
      "health",
      "spirit"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 38
  },
  {
    "id": "quote-558",
    "text": "Do not boast about tomorrow, for you do not know what a day may bring.",
    "author": "Proverbs",
    "category": "Wisdom",
    "tags": [
      "humility",
      "future",
      "now"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 119
  },
  {
    "id": "quote-559",
    "text": "A good name is rather to be chosen than great riches.",
    "author": "Proverbs",
    "category": "Wisdom",
    "tags": [
      "reputation",
      "integrity",
      "values"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 59
  },
  {
    "id": "quote-560",
    "text": "Cast your bread upon the waters, for after many days you will find it.",
    "author": "Ecclesiastes",
    "category": "Wisdom",
    "tags": [
      "generosity",
      "faith",
      "abundance"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 86
  },
  {
    "id": "quote-561",
    "text": "Words are like arrows: once released, you cannot recall them.",
    "author": "Ancient Proverb",
    "category": "Wisdom",
    "tags": [
      "words",
      "mindfulness",
      "speech"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 77
  },
  {
    "id": "quote-562",
    "text": "The tongue is only three inches long, yet it can kill a man six feet high.",
    "author": "Japanese Proverb",
    "category": "Wisdom",
    "tags": [
      "speech",
      "tongue",
      "care"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 70
  },
  {
    "id": "quote-563",
    "text": "A stitch in time saves nine.",
    "author": "English Proverb",
    "category": "Wisdom",
    "tags": [
      "prevention",
      "action",
      "diligence"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 43
  },
  {
    "id": "quote-564",
    "text": "You cannot direct the wind, but you can adjust your sails.",
    "author": "Dolly Parton",
    "category": "Wisdom",
    "tags": [
      "adaptability",
      "control",
      "navigation"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 133
  },
  {
    "id": "quote-565",
    "text": "Honesty is the first chapter in the book of wisdom.",
    "author": "Thomas Jefferson",
    "category": "Wisdom",
    "tags": [
      "honesty",
      "wisdom",
      "integrity"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 70
  },
  {
    "id": "quote-566",
    "text": "The only true wisdom is in knowing you know nothing.",
    "author": "Socrates",
    "category": "Wisdom",
    "tags": [
      "humility",
      "truth",
      "wisdom"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 79
  },
  {
    "id": "quote-567",
    "text": "Never let yesterday use up too much of today.",
    "author": "Will Rogers",
    "category": "Wisdom",
    "tags": [
      "presence",
      "regret",
      "today"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 117
  },
  {
    "id": "quote-568",
    "text": "You don't have to see the whole staircase, just take the first step.",
    "author": "Martin Luther King Jr.",
    "category": "Wisdom",
    "tags": [
      "faith",
      "steps",
      "courage"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 100
  },
  {
    "id": "quote-569",
    "text": "The time is always right to do what is right.",
    "author": "Martin Luther King Jr.",
    "category": "Wisdom",
    "tags": [
      "justice",
      "right-action",
      "timing"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 86
  },
  {
    "id": "quote-570",
    "text": "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
    "author": "Martin Luther King Jr.",
    "category": "Wisdom",
    "tags": [
      "light",
      "love",
      "nonviolence"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 121
  },
  {
    "id": "quote-571",
    "text": "Injustice anywhere is a threat to justice everywhere.",
    "author": "Martin Luther King Jr.",
    "category": "Wisdom",
    "tags": [
      "justice",
      "interconnected",
      "solidarity"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 103
  },
  {
    "id": "quote-572",
    "text": "Faith is taking the first step even when you don't see the whole staircase.",
    "author": "Martin Luther King Jr.",
    "category": "Wisdom",
    "tags": [
      "faith",
      "courage",
      "steps"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 77
  },
  {
    "id": "quote-573",
    "text": "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
    "author": "Martin Luther King Jr.",
    "category": "Wisdom",
    "tags": [
      "character",
      "adversity",
      "measure"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 38
  },
  {
    "id": "quote-574",
    "text": "Life's most persistent and urgent question is: 'What are you doing for others?'",
    "author": "Martin Luther King Jr.",
    "category": "Wisdom",
    "tags": [
      "service",
      "compassion",
      "duty"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 49
  },
  {
    "id": "quote-575",
    "text": "Forgiveness is not an occasional act; it is a constant attitude.",
    "author": "Martin Luther King Jr.",
    "category": "Wisdom",
    "tags": [
      "forgiveness",
      "attitude",
      "peace"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 68
  },
  {
    "id": "quote-576",
    "text": "We must accept finite disappointment, but never lose infinite hope.",
    "author": "Martin Luther King Jr.",
    "category": "Wisdom",
    "tags": [
      "hope",
      "resilience",
      "endurance"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 57
  },
  {
    "id": "quote-577",
    "text": "A man who stands for nothing will fall for anything.",
    "author": "Malcolm X",
    "category": "Wisdom",
    "tags": [
      "principles",
      "conviction",
      "integrity"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 109
  },
  {
    "id": "quote-578",
    "text": "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    "author": "Malcolm X",
    "category": "Wisdom",
    "tags": [
      "education",
      "preparation",
      "future"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 68
  },
  {
    "id": "quote-579",
    "text": "If you have no critics you'll likely have no success.",
    "author": "Malcolm X",
    "category": "Wisdom",
    "tags": [
      "critics",
      "success",
      "resilience"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 39
  },
  {
    "id": "quote-580",
    "text": "There is no better teacher than adversity. Every defeat, every heartbreak, every loss, contains its own seed, its own lesson on how to improve your performance the next time.",
    "author": "Malcolm X",
    "category": "Wisdom",
    "tags": [
      "adversity",
      "lessons",
      "growth"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 48
  },
  {
    "id": "quote-581",
    "text": "You can't separate peace from freedom because no one can be at peace unless he has his freedom.",
    "author": "Malcolm X",
    "category": "Wisdom",
    "tags": [
      "freedom",
      "peace",
      "justice"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 111
  },
  {
    "id": "quote-582",
    "text": "The only way to do great work is to love what you do.",
    "author": "Steve Jobs",
    "category": "Wisdom",
    "tags": [
      "passion",
      "work",
      "excellence"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 90
  },
  {
    "id": "quote-583",
    "text": "Stay hungry, stay foolish.",
    "author": "Steve Jobs",
    "category": "Wisdom",
    "tags": [
      "curiosity",
      "humility",
      "ambition"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 79
  },
  {
    "id": "quote-584",
    "text": "Your time is limited, so don't waste it living someone else's life.",
    "author": "Steve Jobs",
    "category": "Wisdom",
    "tags": [
      "authenticity",
      "time",
      "individuality"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 128
  },
  {
    "id": "quote-585",
    "text": "Don't let the noise of others' opinions drown out your own inner voice.",
    "author": "Steve Jobs",
    "category": "Wisdom",
    "tags": [
      "intuition",
      "inner-voice",
      "conviction"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 135
  },
  {
    "id": "quote-586",
    "text": "Have the courage to follow your heart and intuition.",
    "author": "Steve Jobs",
    "category": "Wisdom",
    "tags": [
      "intuition",
      "courage",
      "heart"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 75
  },
  {
    "id": "quote-587",
    "text": "Simplicity can be harder than complexity: You have to work hard to get your thinking clean to make it simple.",
    "author": "Steve Jobs",
    "category": "Wisdom",
    "tags": [
      "simplicity",
      "clarity",
      "focus"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 90
  },
  {
    "id": "quote-588",
    "text": "Details matter, it's worth waiting to get it right.",
    "author": "Steve Jobs",
    "category": "Wisdom",
    "tags": [
      "craft",
      "details",
      "patience"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 112
  },
  {
    "id": "quote-589",
    "text": "I would rather bet on our vision than build a me-too product.",
    "author": "Steve Jobs",
    "category": "Wisdom",
    "tags": [
      "vision",
      "originality",
      "boldness"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 100
  },
  {
    "id": "quote-590",
    "text": "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.",
    "author": "Steve Jobs",
    "category": "Wisdom",
    "tags": [
      "innovation",
      "mistakes",
      "agility"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 49
  },
  {
    "id": "quote-591",
    "text": "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose.",
    "author": "Steve Jobs",
    "category": "Wisdom",
    "tags": [
      "mortality",
      "courage",
      "boldness"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 84
  },
  {
    "id": "quote-592",
    "text": "Be a yardstick of quality. Some people aren't used to an environment where excellence is expected.",
    "author": "Steve Jobs",
    "category": "Wisdom",
    "tags": [
      "quality",
      "standards",
      "excellence"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 108
  },
  {
    "id": "quote-593",
    "text": "What we think, we become.",
    "author": "Buddha",
    "category": "Wisdom",
    "tags": [
      "mind",
      "becoming",
      "thoughts"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 59
  },
  {
    "id": "quote-594",
    "text": "All that we are is the result of what we have thought.",
    "author": "Buddha",
    "category": "Wisdom",
    "tags": [
      "mindset",
      "creation",
      "reality"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 67
  },
  {
    "id": "quote-595",
    "text": "Radiate boundless love towards the entire world.",
    "author": "Buddha",
    "category": "Wisdom",
    "tags": [
      "metta",
      "boundless",
      "love"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 40
  },
  {
    "id": "quote-596",
    "text": "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
    "author": "Buddha",
    "category": "Wisdom",
    "tags": [
      "health",
      "contentment",
      "faithfulness"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 125
  },
  {
    "id": "quote-597",
    "text": "Three things cannot be long hidden: the sun, the moon, and the truth.",
    "author": "Buddha",
    "category": "Wisdom",
    "tags": [
      "truth",
      "sun",
      "inevitable"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 90
  },
  {
    "id": "quote-598",
    "text": "Purity or impurity depends on oneself, No one can purify another.",
    "author": "Buddha",
    "category": "Wisdom",
    "tags": [
      "responsibility",
      "purity",
      "self"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 35
  },
  {
    "id": "quote-599",
    "text": "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
    "author": "Buddha",
    "category": "Wisdom",
    "tags": [
      "self-reliance",
      "path",
      "liberation"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 101
  },
  {
    "id": "quote-600",
    "text": "Chaos gives birth to stars.",
    "author": "Anonymous",
    "category": "Wisdom",
    "tags": [
      "chaos",
      "stars",
      "creation"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 138
  },
  {
    "id": "quote-601",
    "text": "The cave you fear to enter holds the treasure you seek.",
    "author": "Joseph Campbell",
    "category": "Wisdom",
    "tags": [
      "courage",
      "treasure",
      "hero's-journey"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 103
  },
  {
    "id": "quote-602",
    "text": "Follow your bliss and the universe will open doors for you where there were only walls.",
    "author": "Joseph Campbell",
    "category": "Wisdom",
    "tags": [
      "bliss",
      "destiny",
      "doors"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 122
  },
  {
    "id": "quote-603",
    "text": "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
    "author": "Joseph Campbell",
    "category": "Wisdom",
    "tags": [
      "acceptance",
      "surrender",
      "unfolding"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 127
  },
  {
    "id": "quote-604",
    "text": "The privilege of a lifetime is being who you are.",
    "author": "Joseph Campbell",
    "category": "Wisdom",
    "tags": [
      "authenticity",
      "privilege",
      "self"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 129
  },
  {
    "id": "quote-605",
    "text": "Find a place inside where there's joy, and the joy will burn out the pain.",
    "author": "Joseph Campbell",
    "category": "Wisdom",
    "tags": [
      "joy",
      "inner-depth",
      "healing"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 129
  },
  {
    "id": "quote-606",
    "text": "Participate joyfully in the sorrows of the world.",
    "author": "Joseph Campbell",
    "category": "Wisdom",
    "tags": [
      "compassion",
      "joy",
      "world"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 120
  },
  {
    "id": "quote-607",
    "text": "Opportunities multiply as they are seized.",
    "author": "Sun Tzu",
    "category": "Wisdom",
    "tags": [
      "momentum",
      "opportunity",
      "action"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 60
  },
  {
    "id": "quote-608",
    "text": "He will win who knows when to fight and when not to fight.",
    "author": "Sun Tzu",
    "category": "Wisdom",
    "tags": [
      "discernment",
      "strategy",
      "restraint"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 81
  },
  {
    "id": "quote-609",
    "text": "In the midst of chaos, there is also opportunity.",
    "author": "Sun Tzu",
    "category": "Wisdom",
    "tags": [
      "chaos",
      "opportunity",
      "strategy"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 90
  },
  {
    "id": "quote-610",
    "text": "Pretend inferiority and encourage his arrogance.",
    "author": "Sun Tzu",
    "category": "Wisdom",
    "tags": [
      "humility",
      "tactics",
      "insight"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 43
  },
  {
    "id": "quote-611",
    "text": "There is no instance of a nation benefitting from prolonged warfare.",
    "author": "Sun Tzu",
    "category": "Wisdom",
    "tags": [
      "peace",
      "warfare",
      "wisdom"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 120
  },
  {
    "id": "quote-612",
    "text": "Great results, can be achieved with small forces.",
    "author": "Sun Tzu",
    "category": "Wisdom",
    "tags": [
      "leverage",
      "strategy",
      "efficiency"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 77
  },
  {
    "id": "quote-613",
    "text": "Patience is the companion of wisdom.",
    "author": "Saint Augustine",
    "category": "Wisdom",
    "tags": [
      "patience",
      "wisdom",
      "virtue"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 114
  },
  {
    "id": "quote-614",
    "text": "The world is a book and those who do not travel read only one page.",
    "author": "Saint Augustine",
    "category": "Wisdom",
    "tags": [
      "travel",
      "perspective",
      "exploration"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 75
  },
  {
    "id": "quote-615",
    "text": "Hope has two beautiful daughters; their names are Anger and Courage.",
    "author": "Saint Augustine",
    "category": "Wisdom",
    "tags": [
      "hope",
      "courage",
      "transformation"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 119
  },
  {
    "id": "quote-616",
    "text": "Order your soul; reduce your wants; live in charity; associate with the good.",
    "author": "Saint Augustine",
    "category": "Wisdom",
    "tags": [
      "order",
      "charity",
      "simplicity"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 50
  },
  {
    "id": "quote-617",
    "text": "Trust the process of life, even when the road is steep.",
    "author": "Anonymous",
    "category": "Wisdom",
    "tags": [
      "trust",
      "process",
      "resilience"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 127
  },
  {
    "id": "quote-618",
    "text": "The way to get started is to quit talking and begin doing.",
    "author": "Walt Disney",
    "category": "Motivation",
    "tags": [
      "action",
      "start",
      "doing"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 73
  },
  {
    "id": "quote-619",
    "text": "If you can dream it, you can do it.",
    "author": "Walt Disney",
    "category": "Motivation",
    "tags": [
      "dreams",
      "possibility",
      "belief"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 99
  },
  {
    "id": "quote-620",
    "text": "All our dreams can come true, if we have the courage to pursue them.",
    "author": "Walt Disney",
    "category": "Motivation",
    "tags": [
      "courage",
      "pursuit",
      "dreams"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 74
  },
  {
    "id": "quote-621",
    "text": "It's kind of fun to do the impossible.",
    "author": "Walt Disney",
    "category": "Motivation",
    "tags": [
      "impossible",
      "fun",
      "ambition"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 120
  },
  {
    "id": "quote-622",
    "text": "The difference in winning and losing is most often not quitting.",
    "author": "Walt Disney",
    "category": "Motivation",
    "tags": [
      "persistence",
      "winning",
      "perseverance"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 87
  },
  {
    "id": "quote-623",
    "text": "Whether you think you can or you think you can't, you're right.",
    "author": "Henry Ford",
    "category": "Motivation",
    "tags": [
      "mindset",
      "belief",
      "confidence"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 76
  },
  {
    "id": "quote-624",
    "text": "Don't find fault, find a remedy; anybody can complain.",
    "author": "Henry Ford",
    "category": "Motivation",
    "tags": [
      "solutions",
      "focus",
      "initiative"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 86
  },
  {
    "id": "quote-625",
    "text": "Failure is simply the opportunity to begin again, this time more intelligently.",
    "author": "Henry Ford",
    "category": "Motivation",
    "tags": [
      "failure",
      "intelligence",
      "restart"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 124
  },
  {
    "id": "quote-626",
    "text": "Coming together is a beginning; keeping together is progress; working together is success.",
    "author": "Henry Ford",
    "category": "Motivation",
    "tags": [
      "teamwork",
      "collaboration",
      "progress"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 72
  },
  {
    "id": "quote-627",
    "text": "Obstacles are those frightful things you see when you take your eyes off your goal.",
    "author": "Henry Ford",
    "category": "Motivation",
    "tags": [
      "focus",
      "goals",
      "obstacles"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 105
  },
  {
    "id": "quote-628",
    "text": "You can't build a reputation on what you are going to do.",
    "author": "Henry Ford",
    "category": "Motivation",
    "tags": [
      "action",
      "reputation",
      "execution"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 51
  },
  {
    "id": "quote-629",
    "text": "I have not failed. I've just found 10,000 ways that won't work.",
    "author": "Thomas Edison",
    "category": "Motivation",
    "tags": [
      "experimentation",
      "persistence",
      "inquiry"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 59
  },
  {
    "id": "quote-630",
    "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "author": "Thomas Edison",
    "category": "Motivation",
    "tags": [
      "effort",
      "hard-work",
      "genius"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 88
  },
  {
    "id": "quote-631",
    "text": "Our greatest weakness lies in giving up. The most certain way always to succeed is just to try one more time.",
    "author": "Thomas Edison",
    "category": "Motivation",
    "tags": [
      "persistence",
      "resilience",
      "trying"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 120
  },
  {
    "id": "quote-632",
    "text": "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
    "author": "Thomas Edison",
    "category": "Motivation",
    "tags": [
      "opportunity",
      "work-ethic",
      "diligence"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 83
  },
  {
    "id": "quote-633",
    "text": "If we did all the things we are capable of, we would literally astound ourselves.",
    "author": "Thomas Edison",
    "category": "Motivation",
    "tags": [
      "capability",
      "potential",
      "wonder"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 121
  },
  {
    "id": "quote-634",
    "text": "There is no substitute for hard work.",
    "author": "Thomas Edison",
    "category": "Motivation",
    "tags": [
      "hard-work",
      "dedication",
      "discipline"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 130
  },
  {
    "id": "quote-635",
    "text": "Action is the foundational key to all success.",
    "author": "Pablo Picasso",
    "category": "Motivation",
    "tags": [
      "action",
      "foundation",
      "success"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 57
  },
  {
    "id": "quote-636",
    "text": "I am always doing that which I cannot do, in order that I may learn how to do it.",
    "author": "Pablo Picasso",
    "category": "Motivation",
    "tags": [
      "learning",
      "growth",
      "challenge"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 113
  },
  {
    "id": "quote-637",
    "text": "Inspiration exists, but it has to find you working.",
    "author": "Pablo Picasso",
    "category": "Motivation",
    "tags": [
      "inspiration",
      "craft",
      "work"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 107
  },
  {
    "id": "quote-638",
    "text": "Only put off until tomorrow what you are willing to die having left undone.",
    "author": "Pablo Picasso",
    "category": "Motivation",
    "tags": [
      "urgency",
      "purpose",
      "action"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 73
  },
  {
    "id": "quote-639",
    "text": "Everything you can imagine is real.",
    "author": "Pablo Picasso",
    "category": "Motivation",
    "tags": [
      "imagination",
      "reality",
      "creation"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 86
  },
  {
    "id": "quote-640",
    "text": "It always seems impossible until it's done.",
    "author": "Nelson Mandela",
    "category": "Motivation",
    "tags": [
      "impossible",
      "achievement",
      "hope"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 105
  },
  {
    "id": "quote-641",
    "text": "A winner is a dreamer who never gives up.",
    "author": "Nelson Mandela",
    "category": "Motivation",
    "tags": [
      "dreams",
      "perseverance",
      "winning"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 35
  },
  {
    "id": "quote-642",
    "text": "After climbing a great hill, one only finds that there are many more hills to climb.",
    "author": "Nelson Mandela",
    "category": "Motivation",
    "tags": [
      "journey",
      "humility",
      "growth"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 73
  },
  {
    "id": "quote-643",
    "text": "Do not judge me by my successes, judge me by how many times I fell down and got back up again.",
    "author": "Nelson Mandela",
    "category": "Motivation",
    "tags": [
      "resilience",
      "character",
      "perseverance"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 71
  },
  {
    "id": "quote-644",
    "text": "There is no passion to be found playing small — in settling for a life that is less than the one you are capable of living.",
    "author": "Nelson Mandela",
    "category": "Motivation",
    "tags": [
      "passion",
      "ambition",
      "potential"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 61
  },
  {
    "id": "quote-645",
    "text": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "author": "Winston Churchill",
    "category": "Motivation",
    "tags": [
      "courage",
      "continuing",
      "success"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 90
  },
  {
    "id": "quote-646",
    "text": "If you are going through hell, keep going.",
    "author": "Winston Churchill",
    "category": "Motivation",
    "tags": [
      "grit",
      "perseverance",
      "toughness"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 135
  },
  {
    "id": "quote-647",
    "text": "Attitude is a little thing that makes a big difference.",
    "author": "Winston Churchill",
    "category": "Motivation",
    "tags": [
      "attitude",
      "perspective",
      "power"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 109
  },
  {
    "id": "quote-648",
    "text": "To improve is to change; to be perfect is to change often.",
    "author": "Winston Churchill",
    "category": "Motivation",
    "tags": [
      "change",
      "improvement",
      "growth"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 112
  },
  {
    "id": "quote-649",
    "text": "Never, never, never give up.",
    "author": "Winston Churchill",
    "category": "Motivation",
    "tags": [
      "relentless",
      "grit",
      "never-give-up"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 118
  },
  {
    "id": "quote-650",
    "text": "Continuous effort — not strength or intelligence — is the key to unlocking our potential.",
    "author": "Winston Churchill",
    "category": "Motivation",
    "tags": [
      "effort",
      "potential",
      "keys"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 76
  },
  {
    "id": "quote-651",
    "text": "A pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty.",
    "author": "Winston Churchill",
    "category": "Motivation",
    "tags": [
      "optimism",
      "perspective",
      "mindset"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 94
  },
  {
    "id": "quote-652",
    "text": "We make a living by what we get, but we make a life by what we give.",
    "author": "Winston Churchill",
    "category": "Motivation",
    "tags": [
      "generosity",
      "giving",
      "life"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 91
  },
  {
    "id": "quote-653",
    "text": "I am an optimist. It does not seem too much use being anything else.",
    "author": "Winston Churchill",
    "category": "Motivation",
    "tags": [
      "optimism",
      "pragmatism",
      "cheer"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 91
  },
  {
    "id": "quote-654",
    "text": "Success usually comes to those who are too busy to be looking for it.",
    "author": "Henry David Thoreau",
    "category": "Motivation",
    "tags": [
      "focus",
      "diligence",
      "flow"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 121
  },
  {
    "id": "quote-655",
    "text": "The secret of getting ahead is getting started.",
    "author": "Mark Twain",
    "category": "Motivation",
    "tags": [
      "beginnings",
      "action",
      "momentum"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 62
  },
  {
    "id": "quote-656",
    "text": "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
    "author": "Mark Twain",
    "category": "Motivation",
    "tags": [
      "boldness",
      "regret",
      "action"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 100
  },
  {
    "id": "quote-657",
    "text": "Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    "author": "Mark Twain",
    "category": "Motivation",
    "tags": [
      "exploration",
      "adventure",
      "dreams"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 95
  },
  {
    "id": "quote-658",
    "text": "Continuous improvement is better than delayed perfection.",
    "author": "Mark Twain",
    "category": "Motivation",
    "tags": [
      "iteration",
      "progress",
      "action"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 136
  },
  {
    "id": "quote-659",
    "text": "Courage is resistance to fear, mastery of fear — not absence of fear.",
    "author": "Mark Twain",
    "category": "Motivation",
    "tags": [
      "courage",
      "fear",
      "mastery"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 136
  },
  {
    "id": "quote-660",
    "text": "Don't count the days, make the days count.",
    "author": "Muhammad Ali",
    "category": "Motivation",
    "tags": [
      "presence",
      "impact",
      "daily"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 129
  },
  {
    "id": "quote-661",
    "text": "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'",
    "author": "Muhammad Ali",
    "category": "Motivation",
    "tags": [
      "sacrifice",
      "training",
      "champion"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 56
  },
  {
    "id": "quote-662",
    "text": "He who is not courageous enough to take risks will accomplish nothing in life.",
    "author": "Muhammad Ali",
    "category": "Motivation",
    "tags": [
      "risk",
      "courage",
      "accomplishment"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 119
  },
  {
    "id": "quote-663",
    "text": "Champions aren't made in gyms. Champions are made from something they have deep inside them: a desire, a dream, a vision.",
    "author": "Muhammad Ali",
    "category": "Motivation",
    "tags": [
      "heart",
      "vision",
      "desire"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 45
  },
  {
    "id": "quote-664",
    "text": "Impossible is not a fact. It's an opinion. Impossible is potential. Impossible is temporary. Impossible is nothing.",
    "author": "Muhammad Ali",
    "category": "Motivation",
    "tags": [
      "impossible",
      "potential",
      "greatness"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 71
  },
  {
    "id": "quote-665",
    "text": "You miss 100% of the shots you don't take.",
    "author": "Wayne Gretzky",
    "category": "Motivation",
    "tags": [
      "initiative",
      "risk",
      "action"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 100
  },
  {
    "id": "quote-666",
    "text": "I've failed over and over and over again in my life. And that is why I succeed.",
    "author": "Michael Jordan",
    "category": "Motivation",
    "tags": [
      "failure",
      "resilience",
      "success"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 119
  },
  {
    "id": "quote-667",
    "text": "Talent wins games, but teamwork and intelligence win championships.",
    "author": "Michael Jordan",
    "category": "Motivation",
    "tags": [
      "teamwork",
      "intelligence",
      "excellence"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 116
  },
  {
    "id": "quote-668",
    "text": "Some people want it to happen, some wish it would happen, others make it happen.",
    "author": "Michael Jordan",
    "category": "Motivation",
    "tags": [
      "initiative",
      "drive",
      "execution"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 114
  },
  {
    "id": "quote-669",
    "text": "If you quit once it becomes a habit. Never quit!",
    "author": "Michael Jordan",
    "category": "Motivation",
    "tags": [
      "relentless",
      "habit",
      "grit"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 77
  },
  {
    "id": "quote-670",
    "text": "Obstacles don't have to stop you. If you run into a wall, don't turn around and give up. Figure out how to climb it.",
    "author": "Michael Jordan",
    "category": "Motivation",
    "tags": [
      "problem-solving",
      "walls",
      "determination"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 46
  },
  {
    "id": "quote-671",
    "text": "Hard work beats talent when talent doesn't work hard.",
    "author": "Tim Notke",
    "category": "Motivation",
    "tags": [
      "work-ethic",
      "discipline",
      "humility"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 139
  },
  {
    "id": "quote-672",
    "text": "The future belongs to those who believe in the beauty of their dreams.",
    "author": "Eleanor Roosevelt",
    "category": "Motivation",
    "tags": [
      "dreams",
      "future",
      "belief"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 131
  },
  {
    "id": "quote-673",
    "text": "Do one thing every day that scares you.",
    "author": "Eleanor Roosevelt",
    "category": "Motivation",
    "tags": [
      "courage",
      "growth",
      "comfort-zone"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 65
  },
  {
    "id": "quote-674",
    "text": "No one can make you feel inferior without your consent.",
    "author": "Eleanor Roosevelt",
    "category": "Motivation",
    "tags": [
      "dignity",
      "boundaries",
      "self-worth"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 121
  },
  {
    "id": "quote-675",
    "text": "You must do the things you think you cannot do.",
    "author": "Eleanor Roosevelt",
    "category": "Motivation",
    "tags": [
      "breakthrough",
      "courage",
      "stretch"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 74
  },
  {
    "id": "quote-676",
    "text": "With the new day comes new strength and new thoughts.",
    "author": "Eleanor Roosevelt",
    "category": "Motivation",
    "tags": [
      "dawn",
      "renewal",
      "strength"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 63
  },
  {
    "id": "quote-677",
    "text": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    "author": "Eleanor Roosevelt",
    "category": "Motivation",
    "tags": [
      "mindset",
      "conversations",
      "intellect"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 138
  },
  {
    "id": "quote-678",
    "text": "It is better to light a candle than curse the darkness.",
    "author": "Eleanor Roosevelt",
    "category": "Motivation",
    "tags": [
      "action",
      "solutions",
      "light"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 60
  },
  {
    "id": "quote-679",
    "text": "The only limit to our realization of tomorrow will be our doubts of today.",
    "author": "Franklin D. Roosevelt",
    "category": "Motivation",
    "tags": [
      "doubt",
      "limitless",
      "tomorrow"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 53
  },
  {
    "id": "quote-680",
    "text": "When you reach the end of your rope, tie a knot in it and hang on.",
    "author": "Franklin D. Roosevelt",
    "category": "Motivation",
    "tags": [
      "endurance",
      "perseverance",
      "hope"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 38
  },
  {
    "id": "quote-681",
    "text": "Believe you can and you're halfway there.",
    "author": "Theodore Roosevelt",
    "category": "Motivation",
    "tags": [
      "belief",
      "confidence",
      "momentum"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 40
  },
  {
    "id": "quote-682",
    "text": "Keep your eyes on the stars, and your feet on the ground.",
    "author": "Theodore Roosevelt",
    "category": "Motivation",
    "tags": [
      "vision",
      "practicality",
      "balance"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 66
  },
  {
    "id": "quote-683",
    "text": "It is hard to fail, but it is worse never to have tried to succeed.",
    "author": "Theodore Roosevelt",
    "category": "Motivation",
    "tags": [
      "effort",
      "courage",
      "trying"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 95
  },
  {
    "id": "quote-684",
    "text": "Do what you can, with what you have, where you are.",
    "author": "Theodore Roosevelt",
    "category": "Motivation",
    "tags": [
      "resourcefulness",
      "pragmatism",
      "action"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 113
  },
  {
    "id": "quote-685",
    "text": "Far and away the best prize that life has to offer is the chance to work hard at work worth doing.",
    "author": "Theodore Roosevelt",
    "category": "Motivation",
    "tags": [
      "work-ethic",
      "purpose",
      "meaning"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 133
  },
  {
    "id": "quote-686",
    "text": "The man who really counts in the world is the doer, not the man who merely sits by and says how a thing ought to be done.",
    "author": "Theodore Roosevelt",
    "category": "Motivation",
    "tags": [
      "doer",
      "action",
      "critics"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 44
  },
  {
    "id": "quote-687",
    "text": "Courage is not having the strength to go on; it is going on when you don't have the strength.",
    "author": "Theodore Roosevelt",
    "category": "Motivation",
    "tags": [
      "courage",
      "grit",
      "resilience"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 93
  },
  {
    "id": "quote-688",
    "text": "In any moment of decision, the best thing you can do is the right thing, the next best thing is the wrong thing, and the worst thing you can do is nothing.",
    "author": "Theodore Roosevelt",
    "category": "Motivation",
    "tags": [
      "decision",
      "decisiveness",
      "action"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 88
  },
  {
    "id": "quote-689",
    "text": "Energy and persistence conquer all things.",
    "author": "Benjamin Franklin",
    "category": "Motivation",
    "tags": [
      "persistence",
      "energy",
      "mastery"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 115
  },
  {
    "id": "quote-690",
    "text": "An investment in knowledge pays the best interest.",
    "author": "Benjamin Franklin",
    "category": "Motivation",
    "tags": [
      "knowledge",
      "learning",
      "growth"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 108
  },
  {
    "id": "quote-691",
    "text": "By failing to prepare, you are preparing to fail.",
    "author": "Benjamin Franklin",
    "category": "Motivation",
    "tags": [
      "preparation",
      "planning",
      "foresight"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 59
  },
  {
    "id": "quote-692",
    "text": "Well done is better than well said.",
    "author": "Benjamin Franklin",
    "category": "Motivation",
    "tags": [
      "deeds",
      "execution",
      "integrity"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 126
  },
  {
    "id": "quote-693",
    "text": "Lost time is never found again.",
    "author": "Benjamin Franklin",
    "category": "Motivation",
    "tags": [
      "time",
      "urgency",
      "focus"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 124
  },
  {
    "id": "quote-694",
    "text": "Diligence is the mother of good luck.",
    "author": "Benjamin Franklin",
    "category": "Motivation",
    "tags": [
      "diligence",
      "luck",
      "effort"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 84
  },
  {
    "id": "quote-695",
    "text": "Without continual growth and progress, such words as improvement, achievement, and success have no meaning.",
    "author": "Benjamin Franklin",
    "category": "Motivation",
    "tags": [
      "growth",
      "progress",
      "evolution"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 98
  },
  {
    "id": "quote-696",
    "text": "He that can have patience can have what he will.",
    "author": "Benjamin Franklin",
    "category": "Motivation",
    "tags": [
      "patience",
      "desire",
      "achievement"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 86
  },
  {
    "id": "quote-697",
    "text": "Small strokes fell great oaks.",
    "author": "Benjamin Franklin",
    "category": "Motivation",
    "tags": [
      "consistency",
      "daily-effort",
      "persistence"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 66
  },
  {
    "id": "quote-698",
    "text": "Tell me and I forget, teach me and I may remember, involve me and I learn.",
    "author": "Benjamin Franklin",
    "category": "Motivation",
    "tags": [
      "engagement",
      "learning",
      "action"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 53
  },
  {
    "id": "quote-699",
    "text": "Dream big and dare to fail.",
    "author": "Norman Vaughan",
    "category": "Motivation",
    "tags": [
      "big-dreams",
      "daring",
      "courage"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 118
  },
  {
    "id": "quote-700",
    "text": "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "author": "Zig Ziglar",
    "category": "Motivation",
    "tags": [
      "transformation",
      "goals",
      "character"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 123
  },
  {
    "id": "quote-701",
    "text": "You don't have to be great to start, but you have to start to be great.",
    "author": "Zig Ziglar",
    "category": "Motivation",
    "tags": [
      "starting",
      "greatness",
      "humility"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 35
  },
  {
    "id": "quote-702",
    "text": "Your attitude, not your aptitude, will determine your altitude.",
    "author": "Zig Ziglar",
    "category": "Motivation",
    "tags": [
      "attitude",
      "success",
      "elevation"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 131
  },
  {
    "id": "quote-703",
    "text": "Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.",
    "author": "Zig Ziglar",
    "category": "Motivation",
    "tags": [
      "direction",
      "time",
      "focus"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 133
  },
  {
    "id": "quote-704",
    "text": "Expect the best. Prepare for the worst. Capitalize on what comes.",
    "author": "Zig Ziglar",
    "category": "Motivation",
    "tags": [
      "readiness",
      "optimism",
      "adaptability"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 48
  },
  {
    "id": "quote-705",
    "text": "People often say that motivation doesn't last. Well, neither does bathing — that's why we recommend it daily.",
    "author": "Zig Ziglar",
    "category": "Motivation",
    "tags": [
      "daily-habit",
      "motivation",
      "renewal"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 134
  },
  {
    "id": "quote-706",
    "text": "There is no traffic jam along the extra mile.",
    "author": "Roger Staubach",
    "category": "Motivation",
    "tags": [
      "excellence",
      "extra-mile",
      "effort"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 89
  },
  {
    "id": "quote-707",
    "text": "The price of greatness is responsibility.",
    "author": "Winston Churchill",
    "category": "Motivation",
    "tags": [
      "responsibility",
      "greatness",
      "leadership"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 63
  },
  {
    "id": "quote-708",
    "text": "Either you run the day or the day runs you.",
    "author": "Jim Rohn",
    "category": "Motivation",
    "tags": [
      "control",
      "intention",
      "mastery"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 57
  },
  {
    "id": "quote-709",
    "text": "Don't wish it were easier, wish you were better.",
    "author": "Jim Rohn",
    "category": "Motivation",
    "tags": [
      "growth",
      "standard",
      "strength"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 137
  },
  {
    "id": "quote-710",
    "text": "Discipline is the bridge between goals and accomplishment.",
    "author": "Jim Rohn",
    "category": "Motivation",
    "tags": [
      "discipline",
      "bridge",
      "execution"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 124
  },
  {
    "id": "quote-711",
    "text": "If you are not willing to risk the unusual, you will have to settle for the ordinary.",
    "author": "Jim Rohn",
    "category": "Motivation",
    "tags": [
      "risk",
      "unusual",
      "extraordinary"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 101
  },
  {
    "id": "quote-712",
    "text": "Success is nothing more than a few simple disciplines, practiced every day.",
    "author": "Jim Rohn",
    "category": "Motivation",
    "tags": [
      "habits",
      "daily",
      "disciplines"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 94
  },
  {
    "id": "quote-713",
    "text": "Motivation is what gets you started. Habit is what keeps you going.",
    "author": "Jim Ryun",
    "category": "Motivation",
    "tags": [
      "habits",
      "momentum",
      "consistency"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 41
  },
  {
    "id": "quote-714",
    "text": "The only person you are destined to become is the person you decide to be.",
    "author": "Ralph Waldo Emerson",
    "category": "Motivation",
    "tags": [
      "decision",
      "destiny",
      "identity"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 106
  },
  {
    "id": "quote-715",
    "text": "Start where you are. Use what you have. Do what you can.",
    "author": "Arthur Ashe",
    "category": "Motivation",
    "tags": [
      "pragmatism",
      "starting",
      "action"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 66
  },
  {
    "id": "quote-716",
    "text": "Success is the sum of small efforts, repeated day in and day out.",
    "author": "Robert Collier",
    "category": "Motivation",
    "tags": [
      "small-steps",
      "repetition",
      "consistency"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 50
  },
  {
    "id": "quote-717",
    "text": "The secret of success is constancy to purpose.",
    "author": "Benjamin Disraeli",
    "category": "Motivation",
    "tags": [
      "purpose",
      "constancy",
      "focus"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 93
  },
  {
    "id": "quote-718",
    "text": "Through perseverance many people win success out of what seemed destined to be certain failure.",
    "author": "Benjamin Disraeli",
    "category": "Motivation",
    "tags": [
      "perseverance",
      "triumph",
      "grit"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 52
  },
  {
    "id": "quote-719",
    "text": "Action may not always bring happiness, but there is no happiness without action.",
    "author": "Benjamin Disraeli",
    "category": "Motivation",
    "tags": [
      "action",
      "happiness",
      "movement"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 137
  },
  {
    "id": "quote-720",
    "text": "I am not a product of my circumstances. I am a product of my decisions.",
    "author": "Stephen Covey",
    "category": "Motivation",
    "tags": [
      "decisions",
      "agency",
      "ownership"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 94
  },
  {
    "id": "quote-721",
    "text": "Begin with the end in mind.",
    "author": "Stephen Covey",
    "category": "Motivation",
    "tags": [
      "vision",
      "purpose",
      "planning"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 120
  },
  {
    "id": "quote-722",
    "text": "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
    "author": "Stephen Covey",
    "category": "Motivation",
    "tags": [
      "priorities",
      "time",
      "focus"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 102
  },
  {
    "id": "quote-723",
    "text": "Seek first to understand, then to be understood.",
    "author": "Stephen Covey",
    "category": "Motivation",
    "tags": [
      "understanding",
      "empathy",
      "communication"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 106
  },
  {
    "id": "quote-724",
    "text": "Live out of your imagination, not your history.",
    "author": "Stephen Covey",
    "category": "Motivation",
    "tags": [
      "imagination",
      "future",
      "reinvention"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 111
  },
  {
    "id": "quote-725",
    "text": "You can have it all. You just can't have it all at once.",
    "author": "Oprah Winfrey",
    "category": "Motivation",
    "tags": [
      "patience",
      "balance",
      "perspective"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 75
  },
  {
    "id": "quote-726",
    "text": "Do what you have to do until you can do what you want to do.",
    "author": "Oprah Winfrey",
    "category": "Motivation",
    "tags": [
      "work-ethic",
      "path",
      "patience"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 131
  },
  {
    "id": "quote-727",
    "text": "The biggest adventure you can take is to live the life of your dreams.",
    "author": "Oprah Winfrey",
    "category": "Motivation",
    "tags": [
      "adventure",
      "dreams",
      "boldness"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 91
  },
  {
    "id": "quote-728",
    "text": "Step out of the history that is holding you back. Step into the new story you are willing to create.",
    "author": "Oprah Winfrey",
    "category": "Motivation",
    "tags": [
      "reinvention",
      "story",
      "courage"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 113
  },
  {
    "id": "quote-729",
    "text": "Where there is no struggle, there is no strength.",
    "author": "Oprah Winfrey",
    "category": "Motivation",
    "tags": [
      "struggle",
      "strength",
      "growth"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 139
  },
  {
    "id": "quote-730",
    "text": "Don't watch the clock; do what it does. Keep going.",
    "author": "Sam Levenson",
    "category": "Motivation",
    "tags": [
      "momentum",
      "keep-going",
      "persistence"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 127
  },
  {
    "id": "quote-731",
    "text": "Everything you want is on the other side of fear.",
    "author": "Jack Canfield",
    "category": "Motivation",
    "tags": [
      "courage",
      "fear",
      "breakthrough"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 99
  },
  {
    "id": "quote-732",
    "text": "Decide what you want, decide what you are willing to exchange for it, establish your priorities, and go to work.",
    "author": "H.L. Hunt",
    "category": "Motivation",
    "tags": [
      "decisiveness",
      "sacrifice",
      "execution"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 89
  },
  {
    "id": "quote-733",
    "text": "Success is walking from failure to failure with no loss of enthusiasm.",
    "author": "Winston Churchill",
    "category": "Motivation",
    "tags": [
      "enthusiasm",
      "resilience",
      "journey"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 105
  },
  {
    "id": "quote-734",
    "text": "Great acts are made up of small deeds.",
    "author": "Lao Tzu",
    "category": "Motivation",
    "tags": [
      "small-deeds",
      "greatness",
      "patience"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 92
  },
  {
    "id": "quote-735",
    "text": "Keep your eyes on the goal, not on the obstacles.",
    "author": "Anonymous",
    "category": "Motivation",
    "tags": [
      "focus",
      "goals",
      "clarity"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 55
  },
  {
    "id": "quote-736",
    "text": "Your only limit is the amount of effort you are willing to invest.",
    "author": "Anonymous",
    "category": "Motivation",
    "tags": [
      "effort",
      "investment",
      "limitless"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 130
  },
  {
    "id": "quote-737",
    "text": "Build your own dreams, or someone else will hire you to build theirs.",
    "author": "Farrah Gray",
    "category": "Motivation",
    "tags": [
      "ownership",
      "dreams",
      "ambition"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 95
  },
  {
    "id": "quote-738",
    "text": "Wake up with determination. Go to bed with satisfaction.",
    "author": "George Horace Lorimer",
    "category": "Motivation",
    "tags": [
      "determination",
      "satisfaction",
      "daily"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 92
  },
  {
    "id": "quote-739",
    "text": "Difficult roads often lead to beautiful destinations.",
    "author": "Anonymous",
    "category": "Motivation",
    "tags": [
      "perseverance",
      "beauty",
      "destination"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 68
  },
  {
    "id": "quote-740",
    "text": "Stay dedicated. It's not going to happen overnight and it won't be easy, but it will be worth it.",
    "author": "Anonymous",
    "category": "Motivation",
    "tags": [
      "dedication",
      "worth-it",
      "patience"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 131
  },
  {
    "id": "quote-741",
    "text": "Make today so awesome yesterday gets jealous.",
    "author": "Anonymous",
    "category": "Motivation",
    "tags": [
      "energy",
      "enthusiasm",
      "today"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 66
  },
  {
    "id": "quote-742",
    "text": "The best project you will ever work on is you.",
    "author": "Anonymous",
    "category": "Motivation",
    "tags": [
      "self-growth",
      "mastery",
      "investment"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 116
  },
  {
    "id": "quote-743",
    "text": "Innovation distinguishes between a leader and a follower.",
    "author": "Steve Jobs",
    "category": "Innovation",
    "tags": [
      "innovation",
      "leadership",
      "differentiation"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 70
  },
  {
    "id": "quote-744",
    "text": "Design is not just what it looks like and feels like. Design is how it works.",
    "author": "Steve Jobs",
    "category": "Innovation",
    "tags": [
      "design",
      "function",
      "craft"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 133
  },
  {
    "id": "quote-745",
    "text": "The people who are crazy enough to think they can change the world are the ones who do.",
    "author": "Steve Jobs",
    "category": "Innovation",
    "tags": [
      "visionary",
      "change",
      "audacity"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 134
  },
  {
    "id": "quote-746",
    "text": "I want to put a ding in the universe.",
    "author": "Steve Jobs",
    "category": "Innovation",
    "tags": [
      "impact",
      "legacy",
      "ambition"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 101
  },
  {
    "id": "quote-747",
    "text": "You can't connect the dots looking forward; you can only connect them looking backwards.",
    "author": "Steve Jobs",
    "category": "Innovation",
    "tags": [
      "dots",
      "trust",
      "perspective"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 97
  },
  {
    "id": "quote-748",
    "text": "If you want something new, you have to stop doing something old.",
    "author": "Peter Drucker",
    "category": "Innovation",
    "tags": [
      "change",
      "reinvention",
      "innovation"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 115
  },
  {
    "id": "quote-749",
    "text": "The best way to predict the future is to create it.",
    "author": "Peter Drucker",
    "category": "Innovation",
    "tags": [
      "future",
      "creation",
      "agency"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 65
  },
  {
    "id": "quote-750",
    "text": "What gets measured gets managed.",
    "author": "Peter Drucker",
    "category": "Innovation",
    "tags": [
      "metrics",
      "management",
      "focus"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 70
  },
  {
    "id": "quote-751",
    "text": "Knowledge has to be improved, challenged, and increased constantly, or it vanishes.",
    "author": "Peter Drucker",
    "category": "Innovation",
    "tags": [
      "learning",
      "knowledge",
      "continuous"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 91
  },
  {
    "id": "quote-752",
    "text": "Whenever you see a successful business, someone once made a courageous decision.",
    "author": "Peter Drucker",
    "category": "Innovation",
    "tags": [
      "courage",
      "business",
      "decisions"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 44
  },
  {
    "id": "quote-753",
    "text": "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.",
    "author": "Mark Zuckerberg",
    "category": "Innovation",
    "tags": [
      "speed",
      "experimentation",
      "iteration"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 126
  },
  {
    "id": "quote-754",
    "text": "The biggest risk is not taking any risk.",
    "author": "Mark Zuckerberg",
    "category": "Innovation",
    "tags": [
      "risk",
      "innovation",
      "boldness"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 71
  },
  {
    "id": "quote-755",
    "text": "Ideas don't come out fully formed. They only become clear as you work on them.",
    "author": "Mark Zuckerberg",
    "category": "Innovation",
    "tags": [
      "ideas",
      "execution",
      "clarity"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 65
  },
  {
    "id": "quote-756",
    "text": "When something is important enough, you do it even if the odds are not in your favor.",
    "author": "Elon Musk",
    "category": "Innovation",
    "tags": [
      "resilience",
      "mission",
      "odds"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 69
  },
  {
    "id": "quote-757",
    "text": "If you get up in the morning and think the future is going to be better, it is a bright day.",
    "author": "Elon Musk",
    "category": "Innovation",
    "tags": [
      "optimism",
      "future",
      "vision"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 77
  },
  {
    "id": "quote-758",
    "text": "I think it is possible for ordinary people to choose to be extraordinary.",
    "author": "Elon Musk",
    "category": "Innovation",
    "tags": [
      "extraordinary",
      "choice",
      "potential"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 75
  },
  {
    "id": "quote-759",
    "text": "Failure is an option here. If things are not failing, you are not innovating enough.",
    "author": "Elon Musk",
    "category": "Innovation",
    "tags": [
      "failure",
      "risk",
      "innovation"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 104
  },
  {
    "id": "quote-760",
    "text": "Constantly seek criticism. A well-thought-out critique of what you're doing is as valuable as gold.",
    "author": "Elon Musk",
    "category": "Innovation",
    "tags": [
      "feedback",
      "criticism",
      "improvement"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 45
  },
  {
    "id": "quote-761",
    "text": "Persistence is very important. You should not give up unless you are forced to give up.",
    "author": "Elon Musk",
    "category": "Innovation",
    "tags": [
      "persistence",
      "resolve",
      "space"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 52
  },
  {
    "id": "quote-762",
    "text": "It's okay to have your eggs in one basket as long as you control what happens to that basket.",
    "author": "Elon Musk",
    "category": "Innovation",
    "tags": [
      "focus",
      "control",
      "conviction"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 54
  },
  {
    "id": "quote-763",
    "text": "First-principles thinking is the best way to innovate: boil things down to their fundamental truths.",
    "author": "Elon Musk",
    "category": "Innovation",
    "tags": [
      "first-principles",
      "physics",
      "truth"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 64
  },
  {
    "id": "quote-764",
    "text": "If you double the number of experiments you do per year you're going to double your inventiveness.",
    "author": "Jeff Bezos",
    "category": "Innovation",
    "tags": [
      "experimentation",
      "inventiveness",
      "scale"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 84
  },
  {
    "id": "quote-765",
    "text": "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
    "author": "Jeff Bezos",
    "category": "Innovation",
    "tags": [
      "brand",
      "reputation",
      "excellence"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 123
  },
  {
    "id": "quote-766",
    "text": "What's dangerous is not to evolve.",
    "author": "Jeff Bezos",
    "category": "Innovation",
    "tags": [
      "evolution",
      "adaptability",
      "growth"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 54
  },
  {
    "id": "quote-767",
    "text": "If you never want to be criticized, for goodness' sake don't do anything new.",
    "author": "Jeff Bezos",
    "category": "Innovation",
    "tags": [
      "critics",
      "novelty",
      "boldness"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 125
  },
  {
    "id": "quote-768",
    "text": "Work hard, have fun, make history.",
    "author": "Jeff Bezos",
    "category": "Innovation",
    "tags": [
      "work-ethic",
      "fun",
      "history"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 62
  },
  {
    "id": "quote-769",
    "text": "I knew that if I failed I wouldn't regret that, but I knew the one thing I might regret is not trying.",
    "author": "Jeff Bezos",
    "category": "Innovation",
    "tags": [
      "regret-minimization",
      "courage",
      "trying"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 43
  },
  {
    "id": "quote-770",
    "text": "Invention requires a long-term willingness to be misunderstood.",
    "author": "Jeff Bezos",
    "category": "Innovation",
    "tags": [
      "misunderstood",
      "invention",
      "patience"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 88
  },
  {
    "id": "quote-771",
    "text": "Life's too short to hang out with people who aren't resourceful.",
    "author": "Jeff Bezos",
    "category": "Innovation",
    "tags": [
      "resourcefulness",
      "standards",
      "company"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 87
  },
  {
    "id": "quote-772",
    "text": "We see our customers as invited guests to a party, and we are the hosts.",
    "author": "Jeff Bezos",
    "category": "Innovation",
    "tags": [
      "customer-focus",
      "hospitality",
      "service"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 77
  },
  {
    "id": "quote-773",
    "text": "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
    "author": "Bill Gates",
    "category": "Innovation",
    "tags": [
      "technology",
      "seamless",
      "everyday"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 104
  },
  {
    "id": "quote-774",
    "text": "Software is a great combination between artistry and engineering.",
    "author": "Bill Gates",
    "category": "Innovation",
    "tags": [
      "software",
      "artistry",
      "engineering"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 94
  },
  {
    "id": "quote-775",
    "text": "We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten.",
    "author": "Bill Gates",
    "category": "Innovation",
    "tags": [
      "change",
      "timeline",
      "perspective"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 88
  },
  {
    "id": "quote-776",
    "text": "Your most unhappy customers are your greatest source of learning.",
    "author": "Bill Gates",
    "category": "Innovation",
    "tags": [
      "feedback",
      "customers",
      "learning"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 42
  },
  {
    "id": "quote-777",
    "text": "Don't compare yourself with anyone in this world... if you do so, you are insulting yourself.",
    "author": "Bill Gates",
    "category": "Innovation",
    "tags": [
      "individuality",
      "comparison",
      "self-worth"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 61
  },
  {
    "id": "quote-778",
    "text": "Patience is a key element of success.",
    "author": "Bill Gates",
    "category": "Innovation",
    "tags": [
      "patience",
      "success",
      "endurance"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 88
  },
  {
    "id": "quote-779",
    "text": "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    "author": "Bill Gates",
    "category": "Innovation",
    "tags": [
      "humility",
      "success",
      "learning"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 84
  },
  {
    "id": "quote-780",
    "text": "Any sufficiently advanced technology is indistinguishable from magic.",
    "author": "Arthur C. Clarke",
    "category": "Innovation",
    "tags": [
      "technology",
      "magic",
      "future"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 133
  },
  {
    "id": "quote-781",
    "text": "The only way of discovering the limits of the possible is to venture a little way past them into the impossible.",
    "author": "Arthur C. Clarke",
    "category": "Innovation",
    "tags": [
      "limits",
      "impossible",
      "exploration"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 109
  },
  {
    "id": "quote-782",
    "text": "New ideas pass through three periods: 1) It can't be done; 2) It probably can be done, but it's not worth doing; 3) I knew it was a good idea all along!",
    "author": "Arthur C. Clarke",
    "category": "Innovation",
    "tags": [
      "ideas",
      "acceptance",
      "paradigm"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 124
  },
  {
    "id": "quote-783",
    "text": "We are an impossibility in an impossible universe.",
    "author": "Ray Bradbury",
    "category": "Innovation",
    "tags": [
      "wonder",
      "cosmos",
      "humanity"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 37
  },
  {
    "id": "quote-784",
    "text": "Science fiction is the most important literature in the history of the world, because it's the history of ideas, the history of our civilization.",
    "author": "Ray Bradbury",
    "category": "Innovation",
    "tags": [
      "scifi",
      "ideas",
      "literature"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 132
  },
  {
    "id": "quote-785",
    "text": "Everything is theoretically impossible, until it is done.",
    "author": "Robert A. Heinlein",
    "category": "Innovation",
    "tags": [
      "theory",
      "action",
      "breakthrough"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 108
  },
  {
    "id": "quote-786",
    "text": "Progress isn't made by early risers. It's made by lazy men trying to find easier ways to do something.",
    "author": "Robert A. Heinlein",
    "category": "Innovation",
    "tags": [
      "efficiency",
      "leverage",
      "humor"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 83
  },
  {
    "id": "quote-787",
    "text": "Don't let yesterday take up too much of today.",
    "author": "Alan Kay",
    "category": "Innovation",
    "tags": [
      "computing",
      "future",
      "now"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 96
  },
  {
    "id": "quote-788",
    "text": "The best way to predict the future is to invent it.",
    "author": "Alan Kay",
    "category": "Innovation",
    "tags": [
      "invention",
      "future",
      "agency"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 35
  },
  {
    "id": "quote-789",
    "text": "Simple things should be simple, complex things should be possible.",
    "author": "Alan Kay",
    "category": "Innovation",
    "tags": [
      "simplicity",
      "software-design",
      "architecture"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 80
  },
  {
    "id": "quote-790",
    "text": "Technology is anything that wasn't around when you were born.",
    "author": "Alan Kay",
    "category": "Innovation",
    "tags": [
      "technology",
      "perspective",
      "generations"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 73
  },
  {
    "id": "quote-791",
    "text": "Computer science is no more about computers than astronomy is about telescopes.",
    "author": "Edsger W. Dijkstra",
    "category": "Innovation",
    "tags": [
      "computer-science",
      "abstractions",
      "science"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 131
  },
  {
    "id": "quote-792",
    "text": "Simplicity is prerequisite for reliability.",
    "author": "Edsger W. Dijkstra",
    "category": "Innovation",
    "tags": [
      "simplicity",
      "reliability",
      "code"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 84
  },
  {
    "id": "quote-793",
    "text": "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
    "author": "Edsger W. Dijkstra",
    "category": "Innovation",
    "tags": [
      "debugging",
      "programming",
      "wit"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 88
  },
  {
    "id": "quote-794",
    "text": "The question of whether machines can think is about as relevant as the question of whether submarines can swim.",
    "author": "Edsger W. Dijkstra",
    "category": "Innovation",
    "tags": [
      "artificial-intelligence",
      "thought",
      "machines"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 103
  },
  {
    "id": "quote-795",
    "text": "Talk is cheap. Show me the code.",
    "author": "Linus Torvalds",
    "category": "Innovation",
    "tags": [
      "code",
      "action",
      "execution"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 130
  },
  {
    "id": "quote-796",
    "text": "Most good programmers do programming not because they expect to get paid, but because it is fun to program.",
    "author": "Linus Torvalds",
    "category": "Innovation",
    "tags": [
      "passion",
      "programming",
      "play"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 129
  },
  {
    "id": "quote-797",
    "text": "Intelligence is the ability to adapt to change.",
    "author": "Stephen Hawking",
    "category": "Innovation",
    "tags": [
      "intelligence",
      "adaptation",
      "change"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 104
  },
  {
    "id": "quote-798",
    "text": "Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist.",
    "author": "Stephen Hawking",
    "category": "Innovation",
    "tags": [
      "curiosity",
      "stars",
      "wonder"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 137
  },
  {
    "id": "quote-799",
    "text": "However difficult life may seem, there is always something you can do and succeed at.",
    "author": "Stephen Hawking",
    "category": "Innovation",
    "tags": [
      "resilience",
      "possibility",
      "action"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 112
  },
  {
    "id": "quote-800",
    "text": "Quiet people have the loudest minds.",
    "author": "Stephen Hawking",
    "category": "Innovation",
    "tags": [
      "quiet",
      "mind",
      "intellect"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 63
  },
  {
    "id": "quote-801",
    "text": "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.",
    "author": "Albert Einstein",
    "category": "Innovation",
    "tags": [
      "imagination",
      "knowledge",
      "creativity"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 97
  },
  {
    "id": "quote-802",
    "text": "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
    "author": "Albert Einstein",
    "category": "Innovation",
    "tags": [
      "curiosity",
      "questioning",
      "wonder"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 63
  },
  {
    "id": "quote-803",
    "text": "Logic will get you from A to Z; imagination will get you everywhere.",
    "author": "Albert Einstein",
    "category": "Innovation",
    "tags": [
      "logic",
      "imagination",
      "creativity"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 69
  },
  {
    "id": "quote-804",
    "text": "A person who never made a mistake never tried anything new.",
    "author": "Albert Einstein",
    "category": "Innovation",
    "tags": [
      "mistakes",
      "experimentation",
      "growth"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 90
  },
  {
    "id": "quote-805",
    "text": "We cannot solve our problems with the same thinking we used when we created them.",
    "author": "Albert Einstein",
    "category": "Innovation",
    "tags": [
      "breakthrough",
      "paradigm",
      "solutions"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 97
  },
  {
    "id": "quote-806",
    "text": "Look deep into nature, and then you will understand everything better.",
    "author": "Albert Einstein",
    "category": "Innovation",
    "tags": [
      "nature",
      "understanding",
      "depth"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 38
  },
  {
    "id": "quote-807",
    "text": "Everything should be made as simple as possible, but not simpler.",
    "author": "Albert Einstein",
    "category": "Innovation",
    "tags": [
      "simplicity",
      "elegance",
      "precision"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 84
  },
  {
    "id": "quote-808",
    "text": "Genius is making complex ideas simple, not making simple ideas complex.",
    "author": "Albert Einstein",
    "category": "Innovation",
    "tags": [
      "genius",
      "clarity",
      "simplicity"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 78
  },
  {
    "id": "quote-809",
    "text": "Creativity is intelligence having fun.",
    "author": "Albert Einstein",
    "category": "Innovation",
    "tags": [
      "creativity",
      "intelligence",
      "fun"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 120
  },
  {
    "id": "quote-810",
    "text": "Peace cannot be kept by force; it can only be achieved by understanding.",
    "author": "Albert Einstein",
    "category": "Innovation",
    "tags": [
      "peace",
      "understanding",
      "harmony"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 121
  },
  {
    "id": "quote-811",
    "text": "The measure of intelligence is the ability to change.",
    "author": "Albert Einstein",
    "category": "Innovation",
    "tags": [
      "intelligence",
      "change",
      "adaptation"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 137
  },
  {
    "id": "quote-812",
    "text": "I have no special talents. I am only passionately curious.",
    "author": "Albert Einstein",
    "category": "Innovation",
    "tags": [
      "curiosity",
      "humility",
      "passion"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 86
  },
  {
    "id": "quote-813",
    "text": "Science without religion is lame, religion without science is blind.",
    "author": "Albert Einstein",
    "category": "Innovation",
    "tags": [
      "science",
      "harmony",
      "balance"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 127
  },
  {
    "id": "quote-814",
    "text": "The true sign of intelligence is not knowledge but imagination.",
    "author": "Albert Einstein",
    "category": "Innovation",
    "tags": [
      "intelligence",
      "imagination",
      "vision"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 56
  },
  {
    "id": "quote-815",
    "text": "Stay curious, for curiosity leads to discovery.",
    "author": "Carl Sagan",
    "category": "Innovation",
    "tags": [
      "curiosity",
      "discovery",
      "cosmos"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 94
  },
  {
    "id": "quote-816",
    "text": "Somewhere, something incredible is waiting to be known.",
    "author": "Carl Sagan",
    "category": "Innovation",
    "tags": [
      "wonder",
      "discovery",
      "cosmos"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 51
  },
  {
    "id": "quote-817",
    "text": "We are a way for the cosmos to know itself.",
    "author": "Carl Sagan",
    "category": "Innovation",
    "tags": [
      "cosmos",
      "consciousness",
      "humanity"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 114
  },
  {
    "id": "quote-818",
    "text": "The cosmos is within us. We are made of star-stuff.",
    "author": "Carl Sagan",
    "category": "Innovation",
    "tags": [
      "stars",
      "connection",
      "cosmos"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 103
  },
  {
    "id": "quote-819",
    "text": "Extraordinary claims require extraordinary evidence.",
    "author": "Carl Sagan",
    "category": "Innovation",
    "tags": [
      "evidence",
      "truth",
      "skepticism"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 38
  },
  {
    "id": "quote-820",
    "text": "For small creatures such as we the vastness is bearable only through love.",
    "author": "Carl Sagan",
    "category": "Innovation",
    "tags": [
      "love",
      "vastness",
      "connection"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 85
  },
  {
    "id": "quote-821",
    "text": "Science is a way of thinking much more than it is a body of knowledge.",
    "author": "Carl Sagan",
    "category": "Innovation",
    "tags": [
      "science",
      "mindset",
      "critical-thinking"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 110
  },
  {
    "id": "quote-822",
    "text": "If you wish to make an apple pie from scratch, you must first invent the universe.",
    "author": "Carl Sagan",
    "category": "Innovation",
    "tags": [
      "interconnected",
      "origins",
      "cosmos"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 107
  },
  {
    "id": "quote-823",
    "text": "Not explaining science seems to me perverse. When you're in love, you want to tell the world.",
    "author": "Carl Sagan",
    "category": "Innovation",
    "tags": [
      "passion",
      "science",
      "sharing"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 119
  },
  {
    "id": "quote-824",
    "text": "Science is not only compatible with spirituality; it is a profound source of spirituality.",
    "author": "Carl Sagan",
    "category": "Innovation",
    "tags": [
      "spirituality",
      "science",
      "awe"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 38
  },
  {
    "id": "quote-825",
    "text": "The nitrogen in our DNA, the calcium in our teeth, the iron in our blood were made in the interiors of collapsing stars.",
    "author": "Carl Sagan",
    "category": "Innovation",
    "tags": [
      "origins",
      "stars",
      "unity"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 45
  },
  {
    "id": "quote-826",
    "text": "Curiosity is the engine of achievement.",
    "author": "Ken Robinson",
    "category": "Innovation",
    "tags": [
      "curiosity",
      "achievement",
      "education"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 117
  },
  {
    "id": "quote-827",
    "text": "If you're not prepared to be wrong, you'll never come up with anything original.",
    "author": "Ken Robinson",
    "category": "Innovation",
    "tags": [
      "creativity",
      "mistakes",
      "originality"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 89
  },
  {
    "id": "quote-828",
    "text": "Human resources are like natural resources; they're often buried deep.",
    "author": "Ken Robinson",
    "category": "Innovation",
    "tags": [
      "potential",
      "talent",
      "nurture"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 52
  },
  {
    "id": "quote-829",
    "text": "Role models are only of limited use. For no matter how great you may think someone is, you have to be yourself.",
    "author": "Ken Robinson",
    "category": "Innovation",
    "tags": [
      "authenticity",
      "identity",
      "individuality"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 94
  },
  {
    "id": "quote-830",
    "text": "The greatest threat to our planet is the belief that someone else will save it.",
    "author": "Robert Swan",
    "category": "Innovation",
    "tags": [
      "responsibility",
      "environment",
      "action"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 58
  },
  {
    "id": "quote-831",
    "text": "We cannot direct the wind, but we can adjust our sails.",
    "author": "Bertha Calloway",
    "category": "Innovation",
    "tags": [
      "navigation",
      "resilience",
      "adaptability"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 41
  },
  {
    "id": "quote-832",
    "text": "A goal without a plan is just a wish.",
    "author": "Antoine de Saint-Exupéry",
    "category": "Innovation",
    "tags": [
      "goals",
      "planning",
      "execution"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 68
  },
  {
    "id": "quote-833",
    "text": "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
    "author": "Antoine de Saint-Exupéry",
    "category": "Innovation",
    "tags": [
      "minimalism",
      "perfection",
      "design"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 83
  },
  {
    "id": "quote-834",
    "text": "If you want to build a ship, don't drum up the men to gather wood, divide the work, and give orders. Instead, teach them to yearn for the vast and endless sea.",
    "author": "Antoine de Saint-Exupéry",
    "category": "Innovation",
    "tags": [
      "leadership",
      "vision",
      "inspiration"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 76
  },
  {
    "id": "quote-835",
    "text": "What makes the desert beautiful is that somewhere it hides a well.",
    "author": "Antoine de Saint-Exupéry",
    "category": "Innovation",
    "tags": [
      "hidden-beauty",
      "depth",
      "hope"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 62
  },
  {
    "id": "quote-836",
    "text": "It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
    "author": "Antoine de Saint-Exupéry",
    "category": "Innovation",
    "tags": [
      "heart",
      "essential",
      "vision"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 93
  },
  {
    "id": "quote-837",
    "text": "The machine does not isolate man from the great problems of nature, but plunges him more deeply into them.",
    "author": "Antoine de Saint-Exupéry",
    "category": "Innovation",
    "tags": [
      "technology",
      "nature",
      "humanity"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 76
  },
  {
    "id": "quote-838",
    "text": "True innovation occurs when humanity and technology intersect.",
    "author": "Anonymous",
    "category": "Innovation",
    "tags": [
      "intersection",
      "humanity",
      "tech"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 78
  },
  {
    "id": "quote-839",
    "text": "Code is like humor. When you have to explain it, it’s bad.",
    "author": "Cory House",
    "category": "Innovation",
    "tags": [
      "clean-code",
      "simplicity",
      "humor"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 132
  },
  {
    "id": "quote-840",
    "text": "First, solve the problem. Then, write the code.",
    "author": "John Johnson",
    "category": "Innovation",
    "tags": [
      "problem-solving",
      "architecture",
      "coding"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 83
  },
  {
    "id": "quote-841",
    "text": "Experience is the name everyone gives to their mistakes.",
    "author": "Oscar Wilde",
    "category": "Innovation",
    "tags": [
      "experience",
      "mistakes",
      "learning"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 70
  },
  {
    "id": "quote-842",
    "text": "The web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",
    "author": "Tim Berners-Lee",
    "category": "Innovation",
    "tags": [
      "web",
      "future",
      "openness"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 131
  },
  {
    "id": "quote-843",
    "text": "Data is a precious thing and will last longer than the systems themselves.",
    "author": "Tim Berners-Lee",
    "category": "Innovation",
    "tags": [
      "data",
      "longevity",
      "systems"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 88
  },
  {
    "id": "quote-844",
    "text": "We need diversity of thought in the world to face the new challenges.",
    "author": "Tim Berners-Lee",
    "category": "Innovation",
    "tags": [
      "diversity",
      "thought",
      "challenges"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 67
  },
  {
    "id": "quote-845",
    "text": "You can't have great software without a great team.",
    "author": "Joel Spolsky",
    "category": "Innovation",
    "tags": [
      "teamwork",
      "software",
      "culture"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 45
  },
  {
    "id": "quote-846",
    "text": "Great design is eliminated friction.",
    "author": "Anonymous",
    "category": "Innovation",
    "tags": [
      "design",
      "friction",
      "elegance"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 95
  },
  {
    "id": "quote-847",
    "text": "The future is already here — it's just not very evenly distributed.",
    "author": "William Gibson",
    "category": "Innovation",
    "tags": [
      "future",
      "technology",
      "distribution"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 37
  },
  {
    "id": "quote-848",
    "text": "Cyberspace. A consensual hallucination experienced daily by billions of legitimate operators.",
    "author": "William Gibson",
    "category": "Innovation",
    "tags": [
      "cyberspace",
      "internet",
      "vision"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 130
  },
  {
    "id": "quote-849",
    "text": "The most profound technologies are those that disappear.",
    "author": "Mark Weiser",
    "category": "Innovation",
    "tags": [
      "ubiquitous",
      "seamless",
      "tech"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 104
  },
  {
    "id": "quote-850",
    "text": "Technology is best when it brings people together.",
    "author": "Matt Mullenweg",
    "category": "Innovation",
    "tags": [
      "community",
      "connection",
      "technology"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 41
  },
  {
    "id": "quote-851",
    "text": "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    "author": "Patrick McKenzie",
    "category": "Innovation",
    "tags": [
      "growth",
      "learning",
      "courage"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 79
  },
  {
    "id": "quote-852",
    "text": "Art washes away from the soul the dust of everyday life.",
    "author": "Pablo Picasso",
    "category": "Poetry & Art",
    "tags": [
      "art",
      "soul",
      "renewal"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 63
  },
  {
    "id": "quote-853",
    "text": "Every child is an artist. The problem is how to remain an artist once he grows up.",
    "author": "Pablo Picasso",
    "category": "Poetry & Art",
    "tags": [
      "childhood",
      "creativity",
      "art"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 118
  },
  {
    "id": "quote-854",
    "text": "Colors, like features, follow the changes of the emotions.",
    "author": "Pablo Picasso",
    "category": "Poetry & Art",
    "tags": [
      "color",
      "emotion",
      "expression"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 43
  },
  {
    "id": "quote-855",
    "text": "Painting is just another way of keeping a diary.",
    "author": "Pablo Picasso",
    "category": "Poetry & Art",
    "tags": [
      "painting",
      "diary",
      "intimacy"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 134
  },
  {
    "id": "quote-856",
    "text": "Learn the rules like a pro, so you can break them like an artist.",
    "author": "Pablo Picasso",
    "category": "Poetry & Art",
    "tags": [
      "rules",
      "mastery",
      "rebellion"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 118
  },
  {
    "id": "quote-857",
    "text": "I dream my painting and I paint my dream.",
    "author": "Vincent van Gogh",
    "category": "Poetry & Art",
    "tags": [
      "dreams",
      "painting",
      "vision"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 40
  },
  {
    "id": "quote-858",
    "text": "If you hear a voice within you say 'you cannot paint,' then by all means paint, and that voice will be silenced.",
    "author": "Vincent van Gogh",
    "category": "Poetry & Art",
    "tags": [
      "courage",
      "inner-critic",
      "art"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 131
  },
  {
    "id": "quote-859",
    "text": "Great things are done by a series of small things brought together.",
    "author": "Vincent van Gogh",
    "category": "Poetry & Art",
    "tags": [
      "small-steps",
      "masterpiece",
      "patience"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 38
  },
  {
    "id": "quote-860",
    "text": "There is nothing more truly artistic than to love people.",
    "author": "Vincent van Gogh",
    "category": "Poetry & Art",
    "tags": [
      "love",
      "art",
      "compassion"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 66
  },
  {
    "id": "quote-861",
    "text": "I would rather die of passion than of boredom.",
    "author": "Vincent van Gogh",
    "category": "Poetry & Art",
    "tags": [
      "passion",
      "aliveness",
      "fire"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 60
  },
  {
    "id": "quote-862",
    "text": "I am seeking, I am striving, I am in it with all my heart.",
    "author": "Vincent van Gogh",
    "category": "Poetry & Art",
    "tags": [
      "devotion",
      "seeking",
      "striving"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 37
  },
  {
    "id": "quote-863",
    "text": "The heart of man is very much like the sea, it has its storms, it has its tides and in its depths it has its pearls too.",
    "author": "Vincent van Gogh",
    "category": "Poetry & Art",
    "tags": [
      "depth",
      "sea",
      "pearls"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 114
  },
  {
    "id": "quote-864",
    "text": "The sadness will last forever.",
    "author": "Vincent van Gogh",
    "category": "Poetry & Art",
    "tags": [
      "sorrow",
      "honesty",
      "vulnerability"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 54
  },
  {
    "id": "quote-865",
    "text": "Close your eyes and see.",
    "author": "James Joyce",
    "category": "Poetry & Art",
    "tags": [
      "imagination",
      "inner-sight",
      "vision"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 65
  },
  {
    "id": "quote-866",
    "text": "Poetry is the rhythmical creation of beauty in words.",
    "author": "Edgar Allan Poe",
    "category": "Poetry & Art",
    "tags": [
      "beauty",
      "poetry",
      "rhythm"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 51
  },
  {
    "id": "quote-867",
    "text": "Those who dream by day are cognizant of many things which escape those who dream only by night.",
    "author": "Edgar Allan Poe",
    "category": "Poetry & Art",
    "tags": [
      "daydream",
      "cognizance",
      "imagination"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 95
  },
  {
    "id": "quote-868",
    "text": "All that we see or seem is but a dream within a dream.",
    "author": "Edgar Allan Poe",
    "category": "Poetry & Art",
    "tags": [
      "dream",
      "illusion",
      "mystery"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 120
  },
  {
    "id": "quote-869",
    "text": "Words have no power to impress the mind without the exquisite horror of their reality.",
    "author": "Edgar Allan Poe",
    "category": "Poetry & Art",
    "tags": [
      "words",
      "reality",
      "literature"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 49
  },
  {
    "id": "quote-870",
    "text": "To see a World in a Grain of Sand And a Heaven in a Wild Flower, Hold Infinity in the palm of your hand And Eternity in an hour.",
    "author": "William Blake",
    "category": "Poetry & Art",
    "tags": [
      "infinity",
      "eternity",
      "mysticism"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 107
  },
  {
    "id": "quote-871",
    "text": "The true method of knowledge is experiment.",
    "author": "William Blake",
    "category": "Poetry & Art",
    "tags": [
      "knowledge",
      "experiment",
      "truth"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 62
  },
  {
    "id": "quote-872",
    "text": "No bird soars too high, if he soars with his own wings.",
    "author": "William Blake",
    "category": "Poetry & Art",
    "tags": [
      "independence",
      "flight",
      "wings"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 94
  },
  {
    "id": "quote-873",
    "text": "What is now proved was once only imagined.",
    "author": "William Blake",
    "category": "Poetry & Art",
    "tags": [
      "imagination",
      "proof",
      "creation"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 124
  },
  {
    "id": "quote-874",
    "text": "The tree which moves some to tears of joy is in the eyes of others only a green thing which stands in the way.",
    "author": "William Blake",
    "category": "Poetry & Art",
    "tags": [
      "perception",
      "awe",
      "nature"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 67
  },
  {
    "id": "quote-875",
    "text": "He who binds to himself a joy Does the winged life destroy; But he who kisses the joy as it flies Lives in eternity's sun rise.",
    "author": "William Blake",
    "category": "Poetry & Art",
    "tags": [
      "detachment",
      "joy",
      "eternity"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 133
  },
  {
    "id": "quote-876",
    "text": "A thing of beauty is a joy forever: Its loveliness increases; it will never pass into nothingness.",
    "author": "John Keats",
    "category": "Poetry & Art",
    "tags": [
      "beauty",
      "joy",
      "immortality"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 82
  },
  {
    "id": "quote-877",
    "text": "Beauty is truth, truth beauty,—that is all Ye know on earth, and all ye need to know.",
    "author": "John Keats",
    "category": "Poetry & Art",
    "tags": [
      "truth",
      "beauty",
      "poetic"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 56
  },
  {
    "id": "quote-878",
    "text": "I am certain of nothing but of the holiness of the Heart's affections and the truth of Imagination.",
    "author": "John Keats",
    "category": "Poetry & Art",
    "tags": [
      "heart",
      "imagination",
      "holiness"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 112
  },
  {
    "id": "quote-879",
    "text": "Poetry should please by a fine excess and not by singularity.",
    "author": "John Keats",
    "category": "Poetry & Art",
    "tags": [
      "excess",
      "pleasure",
      "craft"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 112
  },
  {
    "id": "quote-880",
    "text": "I almost wish we were butterflies and liv'd but three summer days — three such days with you I could fill with more delight than fifty common years could ever contain.",
    "author": "John Keats",
    "category": "Poetry & Art",
    "tags": [
      "butterflies",
      "summer",
      "delight"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 130
  },
  {
    "id": "quote-881",
    "text": "Hope is the thing with feathers that perches in the soul - and sings the tunes without the words - and never stops at all.",
    "author": "Emily Dickinson",
    "category": "Poetry & Art",
    "tags": [
      "hope",
      "soul",
      "feathers"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 126
  },
  {
    "id": "quote-882",
    "text": "Forever is composed of nows.",
    "author": "Emily Dickinson",
    "category": "Poetry & Art",
    "tags": [
      "now",
      "forever",
      "presence"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 49
  },
  {
    "id": "quote-883",
    "text": "Tell all the truth but tell it slant — Success in Circuit lies.",
    "author": "Emily Dickinson",
    "category": "Poetry & Art",
    "tags": [
      "truth",
      "slant",
      "art"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 134
  },
  {
    "id": "quote-884",
    "text": "I dwell in Possibility — A fairer House than Prose.",
    "author": "Emily Dickinson",
    "category": "Poetry & Art",
    "tags": [
      "possibility",
      "poetry",
      "architecture"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 139
  },
  {
    "id": "quote-885",
    "text": "Unable are the loved to die, for love is immortality.",
    "author": "Emily Dickinson",
    "category": "Poetry & Art",
    "tags": [
      "immortality",
      "love",
      "eternity"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 55
  },
  {
    "id": "quote-886",
    "text": "If I read a book and it makes my whole body so cold no fire can warm me, I know that is poetry.",
    "author": "Emily Dickinson",
    "category": "Poetry & Art",
    "tags": [
      "chills",
      "power",
      "poetry"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 74
  },
  {
    "id": "quote-887",
    "text": "That it will never come again is what makes life so sweet.",
    "author": "Emily Dickinson",
    "category": "Poetry & Art",
    "tags": [
      "sweetness",
      "impermanence",
      "presence"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 48
  },
  {
    "id": "quote-888",
    "text": "Nature is what we know — Yet have no art to say — So impotent Our Wisdom is To her Simplicity.",
    "author": "Emily Dickinson",
    "category": "Poetry & Art",
    "tags": [
      "nature",
      "simplicity",
      "awe"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 109
  },
  {
    "id": "quote-889",
    "text": "Find ecstasy in life; the mere sense of living is joy enough.",
    "author": "Emily Dickinson",
    "category": "Poetry & Art",
    "tags": [
      "ecstasy",
      "living",
      "joy"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 38
  },
  {
    "id": "quote-890",
    "text": "Two roads diverged in a wood, and I — I took the one less traveled by, And that has made all the difference.",
    "author": "Robert Frost",
    "category": "Poetry & Art",
    "tags": [
      "choices",
      "individuality",
      "path"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 74
  },
  {
    "id": "quote-891",
    "text": "The woods are lovely, dark and deep, But I have promises to keep, And miles to go before I sleep.",
    "author": "Robert Frost",
    "category": "Poetry & Art",
    "tags": [
      "duty",
      "woods",
      "journey"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 108
  },
  {
    "id": "quote-892",
    "text": "Poetry is when an emotion has found its thought and the thought has found words.",
    "author": "Robert Frost",
    "category": "Poetry & Art",
    "tags": [
      "emotion",
      "thought",
      "craft"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 121
  },
  {
    "id": "quote-893",
    "text": "Happiness makes up in height for what it lacks in length.",
    "author": "Robert Frost",
    "category": "Poetry & Art",
    "tags": [
      "height",
      "happiness",
      "intensity"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 83
  },
  {
    "id": "quote-894",
    "text": "Like a piece of ice on a hot stove the poem must ride on its own melting.",
    "author": "Robert Frost",
    "category": "Poetry & Art",
    "tags": [
      "poem",
      "metaphor",
      "organic"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 85
  },
  {
    "id": "quote-895",
    "text": "Freedom lies in being bold.",
    "author": "Robert Frost",
    "category": "Poetry & Art",
    "tags": [
      "freedom",
      "boldness",
      "courage"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 126
  },
  {
    "id": "quote-896",
    "text": "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.",
    "author": "Robert Frost",
    "category": "Poetry & Art",
    "tags": [
      "honesty",
      "surprise",
      "emotion"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 60
  },
  {
    "id": "quote-897",
    "text": "Love is the irresistible desire to be irresistibly desired.",
    "author": "Robert Frost",
    "category": "Poetry & Art",
    "tags": [
      "desire",
      "reciprocity",
      "love"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 44
  },
  {
    "id": "quote-898",
    "text": "Do not go gentle into that good night, Old age should burn and rave at close of day; Rage, rage against the dying of the light.",
    "author": "Dylan Thomas",
    "category": "Poetry & Art",
    "tags": [
      "defiance",
      "light",
      "fire"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 110
  },
  {
    "id": "quote-899",
    "text": "Though lovers be lost, love shall not; And death shall have no dominion.",
    "author": "Dylan Thomas",
    "category": "Poetry & Art",
    "tags": [
      "triumph",
      "eternal",
      "love"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 123
  },
  {
    "id": "quote-900",
    "text": "The ball I threw while playing in the park has not yet reached the ground.",
    "author": "Dylan Thomas",
    "category": "Poetry & Art",
    "tags": [
      "nostalgia",
      "time",
      "suspension"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 115
  },
  {
    "id": "quote-901",
    "text": "Art is not what you see, but what you make others see.",
    "author": "Edgar Degas",
    "category": "Poetry & Art",
    "tags": [
      "vision",
      "art",
      "perspective"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 66
  },
  {
    "id": "quote-902",
    "text": "Creativity takes courage.",
    "author": "Henri Matisse",
    "category": "Poetry & Art",
    "tags": [
      "creativity",
      "courage",
      "boldness"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 48
  },
  {
    "id": "quote-903",
    "text": "There are always flowers for those who want to see them.",
    "author": "Henri Matisse",
    "category": "Poetry & Art",
    "tags": [
      "flowers",
      "optimism",
      "beauty"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 124
  },
  {
    "id": "quote-904",
    "text": "An artist must never be a prisoner. Prisoner? An artist should never be a prisoner of himself, prisoner of style, prisoner of a reputation, prisoner of success.",
    "author": "Henri Matisse",
    "category": "Poetry & Art",
    "tags": [
      "freedom",
      "artist",
      "growth"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 133
  },
  {
    "id": "quote-905",
    "text": "Color is the keyboard, the eyes are the hammers, the soul is the piano with many strings.",
    "author": "Wassily Kandinsky",
    "category": "Poetry & Art",
    "tags": [
      "synesthesia",
      "color",
      "soul"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 73
  },
  {
    "id": "quote-906",
    "text": "Everything starts from a dot.",
    "author": "Wassily Kandinsky",
    "category": "Poetry & Art",
    "tags": [
      "dot",
      "origins",
      "canvas"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 122
  },
  {
    "id": "quote-907",
    "text": "The artist must train not only his eye but also his soul.",
    "author": "Wassily Kandinsky",
    "category": "Poetry & Art",
    "tags": [
      "soul",
      "discipline",
      "art"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 111
  },
  {
    "id": "quote-908",
    "text": "Art is a lie that makes us realize truth.",
    "author": "Pablo Picasso",
    "category": "Poetry & Art",
    "tags": [
      "paradox",
      "truth",
      "illusion"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 138
  },
  {
    "id": "quote-909",
    "text": "To create one's own world in any of the arts takes courage.",
    "author": "Georgia O'Keeffe",
    "category": "Poetry & Art",
    "tags": [
      "world-building",
      "courage",
      "canvas"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 50
  },
  {
    "id": "quote-910",
    "text": "I found I could say things with color and shapes that I couldn't say any other way — things I had no words for.",
    "author": "Georgia O'Keeffe",
    "category": "Poetry & Art",
    "tags": [
      "color",
      "unspoken",
      "shapes"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 136
  },
  {
    "id": "quote-911",
    "text": "Whether you succeed or not is irrelevant, there is no such thing. Making your unknown known is the important thing.",
    "author": "Georgia O'Keeffe",
    "category": "Poetry & Art",
    "tags": [
      "expression",
      "unknown",
      "authenticity"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 107
  },
  {
    "id": "quote-912",
    "text": "I have already settled it for myself so flattery and criticism go down the same drain and I am quite free.",
    "author": "Georgia O'Keeffe",
    "category": "Poetry & Art",
    "tags": [
      "freedom",
      "criticism",
      "peace"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 135
  },
  {
    "id": "quote-913",
    "text": "Every artist was first an amateur.",
    "author": "Ralph Waldo Emerson",
    "category": "Poetry & Art",
    "tags": [
      "amateur",
      "beginnings",
      "humility"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 40
  },
  {
    "id": "quote-914",
    "text": "Painting is poetry that is seen rather than felt, and poetry is painting that is felt rather than seen.",
    "author": "Leonardo da Vinci",
    "category": "Poetry & Art",
    "tags": [
      "painting",
      "poetry",
      "senses"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 79
  },
  {
    "id": "quote-915",
    "text": "The artist sees what others only catch a glimpse of.",
    "author": "Leonardo da Vinci",
    "category": "Poetry & Art",
    "tags": [
      "gaze",
      "depth",
      "perception"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 103
  },
  {
    "id": "quote-916",
    "text": "Art enables us to find ourselves and lose ourselves at the same time.",
    "author": "Thomas Merton",
    "category": "Poetry & Art",
    "tags": [
      "paradox",
      "identity",
      "art"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 89
  },
  {
    "id": "quote-917",
    "text": "The aim of art is to represent not the outward appearance of things, but their inward significance.",
    "author": "Aristotle",
    "category": "Poetry & Art",
    "tags": [
      "significance",
      "inward",
      "essence"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 119
  },
  {
    "id": "quote-918",
    "text": "We have art in order not to die of the truth.",
    "author": "Friedrich Nietzsche",
    "category": "Poetry & Art",
    "tags": [
      "truth",
      "shelter",
      "beauty"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 82
  },
  {
    "id": "quote-919",
    "text": "Poetry is the spontaneous overflow of powerful feelings: it takes its origin from emotion recollected in tranquility.",
    "author": "William Wordsworth",
    "category": "Poetry & Art",
    "tags": [
      "emotion",
      "tranquility",
      "spontaneous"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 43
  },
  {
    "id": "quote-920",
    "text": "The earth has music for those who listen.",
    "author": "William Shakespeare",
    "category": "Poetry & Art",
    "tags": [
      "earth",
      "music",
      "listening"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 99
  },
  {
    "id": "quote-921",
    "text": "All the world's a stage, and all the men and women merely players.",
    "author": "William Shakespeare",
    "category": "Poetry & Art",
    "tags": [
      "stage",
      "theatre",
      "humanity"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 117
  },
  {
    "id": "quote-922",
    "text": "Music can change the world because it can change people.",
    "author": "Bono",
    "category": "Poetry & Art",
    "tags": [
      "music",
      "change",
      "humanity"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 78
  },
  {
    "id": "quote-923",
    "text": "The artist's job is not to succumb to despair, but to find an antidote to the emptiness of existence.",
    "author": "Gertrude Stein",
    "category": "Poetry & Art",
    "tags": [
      "antidote",
      "purpose",
      "hope"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 36
  },
  {
    "id": "quote-924",
    "text": "Poetry is an echo, asking a shadow to dance.",
    "author": "Carl Sandburg",
    "category": "Poetry & Art",
    "tags": [
      "echo",
      "dance",
      "shadow"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 88
  },
  {
    "id": "quote-925",
    "text": "Fog comes on little cat feet.",
    "author": "Carl Sandburg",
    "category": "Poetry & Art",
    "tags": [
      "imagery",
      "nature",
      "gentle"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 140
  },
  {
    "id": "quote-926",
    "text": "Nothing is softer or more flexible than water, yet nothing can resist it.",
    "author": "Lao Tzu",
    "category": "Poetry & Art",
    "tags": [
      "water",
      "yielding",
      "strength"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 97
  },
  {
    "id": "quote-927",
    "text": "To paint is to love again.",
    "author": "Henry Miller",
    "category": "Poetry & Art",
    "tags": [
      "painting",
      "rebirth",
      "love"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 48
  },
  {
    "id": "quote-928",
    "text": "Develop an interest in life as you see it; the people, things, literature, music — the world is so rich.",
    "author": "Henry Miller",
    "category": "Poetry & Art",
    "tags": [
      "curiosity",
      "richness",
      "engagement"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 90
  },
  {
    "id": "quote-929",
    "text": "Art is the signature of civilizations.",
    "author": "Beverly Sills",
    "category": "Poetry & Art",
    "tags": [
      "civilization",
      "legacy",
      "culture"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 81
  },
  {
    "id": "quote-930",
    "text": "A room without books is like a body without a soul.",
    "author": "Cicero",
    "category": "Poetry & Art",
    "tags": [
      "books",
      "soul",
      "sanctuary"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 116
  },
  {
    "id": "quote-931",
    "text": "There is no friend as loyal as a book.",
    "author": "Ernest Hemingway",
    "category": "Poetry & Art",
    "tags": [
      "books",
      "friendship",
      "loyalty"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 93
  },
  {
    "id": "quote-932",
    "text": "Write hard and clear about what hurts.",
    "author": "Ernest Hemingway",
    "category": "Poetry & Art",
    "tags": [
      "vulnerability",
      "clarity",
      "honesty"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 125
  },
  {
    "id": "quote-933",
    "text": "In order to write about life first you must live it.",
    "author": "Ernest Hemingway",
    "category": "Poetry & Art",
    "tags": [
      "experience",
      "living",
      "writing"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 54
  },
  {
    "id": "quote-934",
    "text": "The world breaks everyone and afterward many are strong at the broken places.",
    "author": "Ernest Hemingway",
    "category": "Poetry & Art",
    "tags": [
      "kintsugi",
      "strength",
      "broken"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 90
  },
  {
    "id": "quote-935",
    "text": "There is nothing to writing. All you do is sit down at a typewriter and bleed.",
    "author": "Ernest Hemingway",
    "category": "Poetry & Art",
    "tags": [
      "craft",
      "raw",
      "dedication"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 57
  },
  {
    "id": "quote-936",
    "text": "You must write the book that wants to be written.",
    "author": "Madeleine L'Engle",
    "category": "Poetry & Art",
    "tags": [
      "authenticity",
      "calling",
      "creation"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 128
  },
  {
    "id": "quote-937",
    "text": "Literature is the most agreeable way of ignoring life.",
    "author": "Fernando Pessoa",
    "category": "Poetry & Art",
    "tags": [
      "literature",
      "imagination",
      "refuge"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 101
  },
  {
    "id": "quote-938",
    "text": "My soul is a hidden orchestra; I know not what instruments, what fiddlestrings and harps, drums and tambours, sound and clash inside me.",
    "author": "Fernando Pessoa",
    "category": "Poetry & Art",
    "tags": [
      "orchestra",
      "inner-depth",
      "music"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 118
  },
  {
    "id": "quote-939",
    "text": "To be great, be whole; exclude nothing, exaggerate nothing that is not you.",
    "author": "Fernando Pessoa",
    "category": "Poetry & Art",
    "tags": [
      "wholeness",
      "authenticity",
      "greatness"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 69
  },
  {
    "id": "quote-940",
    "text": "Art is contemplation; it is the pleasure of the mind which searches into nature and which there divines the spirit.",
    "author": "Auguste Rodin",
    "category": "Poetry & Art",
    "tags": [
      "contemplation",
      "nature",
      "spirit"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 113
  },
  {
    "id": "quote-941",
    "text": "Patience is also a form of action.",
    "author": "Auguste Rodin",
    "category": "Poetry & Art",
    "tags": [
      "patience",
      "action",
      "sculpture"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 138
  },
  {
    "id": "quote-942",
    "text": "Nothing is a waste of time if you use the experience wisely.",
    "author": "Auguste Rodin",
    "category": "Poetry & Art",
    "tags": [
      "experience",
      "learning",
      "wisdom"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 103
  },
  {
    "id": "quote-943",
    "text": "Art is the stored honey of the human soul.",
    "author": "Theodore Dreiser",
    "category": "Poetry & Art",
    "tags": [
      "honey",
      "soul",
      "nectar"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 134
  },
  {
    "id": "quote-944",
    "text": "The purpose of art is washing the dust of daily life off our souls.",
    "author": "Pablo Picasso",
    "category": "Poetry & Art",
    "tags": [
      "cleansing",
      "renewal",
      "soul"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 96
  },
  {
    "id": "quote-945",
    "text": "Every great artist writes his own autobiography in his work.",
    "author": "Ellis Yarnal",
    "category": "Poetry & Art",
    "tags": [
      "autobiography",
      "canvas",
      "expression"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 94
  },
  {
    "id": "quote-946",
    "text": "Painting is silent poetry, and poetry is painting that speaks.",
    "author": "Plutarch",
    "category": "Poetry & Art",
    "tags": [
      "painting",
      "speech",
      "harmony"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 90
  },
  {
    "id": "quote-947",
    "text": "True art is characterized by an irresistible urge in the creative artist.",
    "author": "Albert Einstein",
    "category": "Poetry & Art",
    "tags": [
      "urge",
      "creativity",
      "calling"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 140
  },
  {
    "id": "quote-948",
    "text": "The soul that sees beauty may sometimes walk alone.",
    "author": "Johann Wolfgang von Goethe",
    "category": "Poetry & Art",
    "tags": [
      "beauty",
      "solitude",
      "wonder"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 128
  },
  {
    "id": "quote-949",
    "text": "Architecture is frozen music.",
    "author": "Johann Wolfgang von Goethe",
    "category": "Poetry & Art",
    "tags": [
      "architecture",
      "music",
      "harmony"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 110
  },
  {
    "id": "quote-950",
    "text": "Daring ideas are like chessmen moved forward; they may be beaten, but they may start a winning game.",
    "author": "Johann Wolfgang von Goethe",
    "category": "Poetry & Art",
    "tags": [
      "daring",
      "chess",
      "ideas"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 69
  },
  {
    "id": "quote-951",
    "text": "Whatever you can do, or dream you can, begin it. Boldness has genius, power, and magic in it.",
    "author": "Johann Wolfgang von Goethe",
    "category": "Poetry & Art",
    "tags": [
      "boldness",
      "magic",
      "begin"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 76
  },
  {
    "id": "quote-952",
    "text": "Art is a step from what is the obvious and well-known toward what is arcane and concealed.",
    "author": "Kahlil Gibran",
    "category": "Poetry & Art",
    "tags": [
      "mystery",
      "arcane",
      "depth"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 66
  },
  {
    "id": "quote-953",
    "text": "Beauty is eternity gazing at itself in a mirror. But you are eternity and you are the mirror.",
    "author": "Kahlil Gibran",
    "category": "Poetry & Art",
    "tags": [
      "eternity",
      "mirror",
      "beauty"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 46
  },
  {
    "id": "quote-954",
    "text": "Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.",
    "author": "Kahlil Gibran",
    "category": "Poetry & Art",
    "tags": [
      "music",
      "spirit",
      "peace"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 70
  },
  {
    "id": "quote-955",
    "text": "The poet is a bird of unearthly plumage in whose heart are gathered all the world's sorrows and joys.",
    "author": "Kahlil Gibran",
    "category": "Poetry & Art",
    "tags": [
      "poet",
      "sorrow",
      "joy"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 92
  },
  {
    "id": "quote-956",
    "text": "Art is the unceasing effort to compete with the beauty of flowers — and never succeeding.",
    "author": "Marc Chagall",
    "category": "Poetry & Art",
    "tags": [
      "flowers",
      "humility",
      "nature"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 66
  },
  {
    "id": "quote-957",
    "text": "In our life there is a single color, as on an artist's palette, which provides the meaning of life and art. It is the color of love.",
    "author": "Marc Chagall",
    "category": "Poetry & Art",
    "tags": [
      "love",
      "palette",
      "meaning"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 131
  },
  {
    "id": "quote-958",
    "text": "If I create from the heart, nearly everything works; if from the head, almost nothing.",
    "author": "Marc Chagall",
    "category": "Poetry & Art",
    "tags": [
      "heart",
      "intuition",
      "creation"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 94
  },
  {
    "id": "quote-959",
    "text": "Only work which is the product of inner necessity can be called true art.",
    "author": "Wassily Kandinsky",
    "category": "Poetry & Art",
    "tags": [
      "necessity",
      "authenticity",
      "true-art"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 107
  },
  {
    "id": "quote-960",
    "text": "The creation of something new is not accomplished by the intellect but by the play instinct.",
    "author": "Carl Jung",
    "category": "Poetry & Art",
    "tags": [
      "play",
      "creation",
      "unconscious"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 113
  },
  {
    "id": "quote-961",
    "text": "Art is a harmony parallel with nature.",
    "author": "Paul Cézanne",
    "category": "Poetry & Art",
    "tags": [
      "harmony",
      "nature",
      "canvas"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 120
  },
  {
    "id": "quote-962",
    "text": "A work of art which did not begin in emotion is not art.",
    "author": "Paul Cézanne",
    "category": "Poetry & Art",
    "tags": [
      "emotion",
      "origins",
      "craft"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 83
  },
  {
    "id": "quote-963",
    "text": "Courage is not the absence of fear, but the triumph over it.",
    "author": "Nelson Mandela",
    "category": "Courage",
    "tags": [
      "triumph",
      "fearlessness",
      "courage"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 78
  },
  {
    "id": "quote-964",
    "text": "The brave man is not he who does not feel afraid, but he who conquers that fear.",
    "author": "Nelson Mandela",
    "category": "Courage",
    "tags": [
      "conquering",
      "bravery",
      "strength"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 38
  },
  {
    "id": "quote-965",
    "text": "I learned that courage was not the absence of fear, but the triumph over it.",
    "author": "Nelson Mandela",
    "category": "Courage",
    "tags": [
      "fear",
      "triumph",
      "resilience"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 98
  },
  {
    "id": "quote-966",
    "text": "It takes courage to grow up and become who you really are.",
    "author": "E.E. Cummings",
    "category": "Courage",
    "tags": [
      "authenticity",
      "growth",
      "identity"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 76
  },
  {
    "id": "quote-967",
    "text": "Courage starts with showing up and letting ourselves be seen.",
    "author": "Brené Brown",
    "category": "Courage",
    "tags": [
      "vulnerability",
      "presence",
      "courage"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 58
  },
  {
    "id": "quote-968",
    "text": "Vulnerability is not winning or losing; it's having the courage to show up when you can't control the outcome.",
    "author": "Brené Brown",
    "category": "Courage",
    "tags": [
      "vulnerability",
      "daring",
      "grit"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 97
  },
  {
    "id": "quote-969",
    "text": "You can choose courage or you can choose comfort, but you cannot choose both.",
    "author": "Brené Brown",
    "category": "Courage",
    "tags": [
      "choices",
      "growth",
      "comfort-zone"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 62
  },
  {
    "id": "quote-970",
    "text": "Imperfections are not inadequacies; they are reminders that we're all in this together.",
    "author": "Brené Brown",
    "category": "Courage",
    "tags": [
      "imperfection",
      "connection",
      "compassion"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 80
  },
  {
    "id": "quote-971",
    "text": "Courage is being scared to death, but saddling up anyway.",
    "author": "John Wayne",
    "category": "Courage",
    "tags": [
      "grit",
      "action",
      "fear"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 137
  },
  {
    "id": "quote-972",
    "text": "You have been assigned this mountain to show others it can be moved.",
    "author": "Mel Robbins",
    "category": "Courage",
    "tags": [
      "mountain",
      "inspiration",
      "strength"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 68
  },
  {
    "id": "quote-973",
    "text": "You are one decision away from a completely different life.",
    "author": "Mel Robbins",
    "category": "Courage",
    "tags": [
      "decisions",
      "breakthrough",
      "agency"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 78
  },
  {
    "id": "quote-974",
    "text": "Doubt kills more dreams than failure ever will.",
    "author": "Suzy Kassem",
    "category": "Courage",
    "tags": [
      "doubt",
      "dreams",
      "confidence"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 70
  },
  {
    "id": "quote-975",
    "text": "Fear is a reaction. Courage is a decision.",
    "author": "Winston Churchill",
    "category": "Courage",
    "tags": [
      "decision",
      "reaction",
      "fear"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 111
  },
  {
    "id": "quote-976",
    "text": "He who is brave is free.",
    "author": "Seneca",
    "category": "Courage",
    "tags": [
      "freedom",
      "bravery",
      "liberty"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 124
  },
  {
    "id": "quote-977",
    "text": "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
    "author": "André Gide",
    "category": "Courage",
    "tags": [
      "oceans",
      "shore",
      "discovery"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 70
  },
  {
    "id": "quote-978",
    "text": "It is during our darkest moments that we must focus to see the light.",
    "author": "Aristotle Onassis",
    "category": "Courage",
    "tags": [
      "darkness",
      "light",
      "focus"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 106
  },
  {
    "id": "quote-979",
    "text": "A ship in harbor is safe, but that is not what ships are built for.",
    "author": "John A. Shedd",
    "category": "Courage",
    "tags": [
      "harbor",
      "purpose",
      "voyage"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 36
  },
  {
    "id": "quote-980",
    "text": "The only thing we have to fear is fear itself.",
    "author": "Franklin D. Roosevelt",
    "category": "Courage",
    "tags": [
      "fear",
      "courage",
      "leadership"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 101
  },
  {
    "id": "quote-981",
    "text": "There is a stubbornness about me that never can bear to be frightened at the will of others. My courage always rises at every attempt to intimidate me.",
    "author": "Jane Austen",
    "category": "Courage",
    "tags": [
      "defiance",
      "fortitude",
      "courage"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 59
  },
  {
    "id": "quote-982",
    "text": "I am not afraid of storms, for I am learning how to sail my ship.",
    "author": "Louisa May Alcott",
    "category": "Courage",
    "tags": [
      "storms",
      "learning",
      "self-reliance"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 45
  },
  {
    "id": "quote-983",
    "text": "She stood in the storm and when the wind did not blow her way, she adjusted her sails.",
    "author": "Elizabeth Edwards",
    "category": "Courage",
    "tags": [
      "sails",
      "resilience",
      "grace"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 65
  },
  {
    "id": "quote-984",
    "text": "Life shrinks or expands in proportion to one's courage.",
    "author": "Anaïs Nin",
    "category": "Courage",
    "tags": [
      "expansion",
      "courage",
      "living"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 127
  },
  {
    "id": "quote-985",
    "text": "And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom.",
    "author": "Anaïs Nin",
    "category": "Courage",
    "tags": [
      "blossom",
      "transformation",
      "risk"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 87
  },
  {
    "id": "quote-986",
    "text": "We don't see things as they are, we see them as we are.",
    "author": "Anaïs Nin",
    "category": "Courage",
    "tags": [
      "perception",
      "inward",
      "lens"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 97
  },
  {
    "id": "quote-987",
    "text": "Have courage for the great sorrows of life and patience for the small ones; and when you have laboriously accomplished your daily task, go to sleep in peace.",
    "author": "Victor Hugo",
    "category": "Courage",
    "tags": [
      "peace",
      "sorrows",
      "endurance"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 106
  },
  {
    "id": "quote-988",
    "text": "Even the darkest night will end and the sun will rise.",
    "author": "Victor Hugo",
    "category": "Courage",
    "tags": [
      "dawn",
      "sun",
      "hope"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 132
  },
  {
    "id": "quote-989",
    "text": "Confront the dark parts of yourself, and work to banish them with illumination and forgiveness.",
    "author": "August Wilson",
    "category": "Courage",
    "tags": [
      "illumination",
      "shadow",
      "forgiveness"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 65
  },
  {
    "id": "quote-990",
    "text": "Everything you've ever wanted is sitting on the other side of fear.",
    "author": "George Addair",
    "category": "Courage",
    "tags": [
      "breakthrough",
      "desire",
      "overcoming"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 123
  },
  {
    "id": "quote-991",
    "text": "Real courage is when you know you're licked before you begin, but you begin anyway and see it through no matter what.",
    "author": "Harper Lee",
    "category": "Courage",
    "tags": [
      "grit",
      "conviction",
      "integrity"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 95
  },
  {
    "id": "quote-992",
    "text": "It's not whether you get knocked down, it's whether you get up.",
    "author": "Vince Lombardi",
    "category": "Courage",
    "tags": [
      "resilience",
      "rising",
      "persistence"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 117
  },
  {
    "id": "quote-993",
    "text": "The measure of who we are is what we do with what we have.",
    "author": "Vince Lombardi",
    "category": "Courage",
    "tags": [
      "resourcefulness",
      "character",
      "duty"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 126
  },
  {
    "id": "quote-994",
    "text": "Perfection is not attainable, but if we chase perfection we can catch excellence.",
    "author": "Vince Lombardi",
    "category": "Courage",
    "tags": [
      "excellence",
      "striving",
      "pursuit"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 97
  },
  {
    "id": "quote-995",
    "text": "The greatest oak was once a little nut that held its ground.",
    "author": "Anonymous",
    "category": "Courage",
    "tags": [
      "roots",
      "holding-ground",
      "growth"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 92
  },
  {
    "id": "quote-996",
    "text": "Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.",
    "author": "Oprah Winfrey",
    "category": "Courage",
    "tags": [
      "breath",
      "moment",
      "presence"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 136
  },
  {
    "id": "quote-997",
    "text": "You may encounter many defeats, but you must not be defeated.",
    "author": "Maya Angelou",
    "category": "Courage",
    "tags": [
      "undefeated",
      "resilience",
      "endurance"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 37
  },
  {
    "id": "quote-998",
    "text": "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.",
    "author": "Maya Angelou",
    "category": "Courage",
    "tags": [
      "thriving",
      "passion",
      "style"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 46
  },
  {
    "id": "quote-999",
    "text": "I can be changed by what happens to me. But I refuse to be reduced by it.",
    "author": "Maya Angelou",
    "category": "Courage",
    "tags": [
      "unbroken",
      "sovereignty",
      "strength"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 72
  },
  {
    "id": "quote-1000",
    "text": "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.",
    "author": "Maya Angelou",
    "category": "Courage",
    "tags": [
      "metamorphosis",
      "struggle",
      "beauty"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 63
  },
  {
    "id": "quote-1001",
    "text": "History, despite its wrenching pain, cannot be unlived, but if faced with courage, need not be lived again.",
    "author": "Maya Angelou",
    "category": "Courage",
    "tags": [
      "history",
      "courage",
      "healing"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 86
  },
  {
    "id": "quote-1002",
    "text": "Nothing can dim the light which shines from within.",
    "author": "Maya Angelou",
    "category": "Courage",
    "tags": [
      "inner-light",
      "indomitable",
      "radiance"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 123
  },
  {
    "id": "quote-1003",
    "text": "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.",
    "author": "Maya Angelou",
    "category": "Courage",
    "tags": [
      "virtue",
      "foundation",
      "consistency"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 66
  },
  {
    "id": "quote-1004",
    "text": "If you're always trying to be normal you will never know how amazing you can be.",
    "author": "Maya Angelou",
    "category": "Courage",
    "tags": [
      "uniqueness",
      "authenticity",
      "amazing"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 74
  },
  {
    "id": "quote-1005",
    "text": "Try to be a rainbow in someone's cloud.",
    "author": "Maya Angelou",
    "category": "Courage",
    "tags": [
      "kindness",
      "rainbow",
      "service"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 119
  },
  {
    "id": "quote-1006",
    "text": "The brave do not live forever, but the cautious do not live at all.",
    "author": "Meg Cabot",
    "category": "Courage",
    "tags": [
      "living",
      "caution",
      "boldness"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 109
  },
  {
    "id": "quote-1007",
    "text": "Bravery is being the only one who knows you're afraid.",
    "author": "David Hackworth",
    "category": "Courage",
    "tags": [
      "quiet-courage",
      "stealth",
      "resolve"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 82
  },
  {
    "id": "quote-1008",
    "text": "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    "author": "J.K. Rowling",
    "category": "Courage",
    "tags": [
      "integrity",
      "loyalty",
      "bravery"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 95
  },
  {
    "id": "quote-1009",
    "text": "We must all face the choice between what is right and what is easy.",
    "author": "J.K. Rowling",
    "category": "Courage",
    "tags": [
      "choices",
      "morality",
      "conviction"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 105
  },
  {
    "id": "quote-1010",
    "text": "It matters not what someone is born, but what they grow to be.",
    "author": "J.K. Rowling",
    "category": "Courage",
    "tags": [
      "growth",
      "potential",
      "becoming"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 102
  },
  {
    "id": "quote-1011",
    "text": "Rock bottom became the solid foundation on which I rebuilt my life.",
    "author": "J.K. Rowling",
    "category": "Courage",
    "tags": [
      "rock-bottom",
      "foundation",
      "rebuilding"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 79
  },
  {
    "id": "quote-1012",
    "text": "Do not pity the dead. Pity the living, and, above all, those who live without love.",
    "author": "J.K. Rowling",
    "category": "Courage",
    "tags": [
      "love",
      "living",
      "compassion"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 89
  },
  {
    "id": "quote-1013",
    "text": "What's coming will come, and we'll meet it when it does.",
    "author": "J.K. Rowling",
    "category": "Courage",
    "tags": [
      "equanimity",
      "acceptance",
      "fortitude"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 130
  },
  {
    "id": "quote-1014",
    "text": "It does not do to dwell on dreams and forget to live.",
    "author": "J.K. Rowling",
    "category": "Courage",
    "tags": [
      "living",
      "presence",
      "action"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 105
  },
  {
    "id": "quote-1015",
    "text": "Fear of a name increases fear of the thing itself.",
    "author": "J.K. Rowling",
    "category": "Courage",
    "tags": [
      "facing-fear",
      "clarity",
      "naming"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 77
  },
  {
    "id": "quote-1016",
    "text": "Words are, in my not-so-humble opinion, our most inexhaustible source of magic.",
    "author": "J.K. Rowling",
    "category": "Courage",
    "tags": [
      "words",
      "magic",
      "power"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 80
  },
  {
    "id": "quote-1017",
    "text": "The strength of the wolf is the pack, and the strength of the pack is the wolf.",
    "author": "Rudyard Kipling",
    "category": "Courage",
    "tags": [
      "unity",
      "teamwork",
      "strength"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 124
  },
  {
    "id": "quote-1018",
    "text": "If you can keep your head when all about you Are losing theirs and blaming it on you...",
    "author": "Rudyard Kipling",
    "category": "Courage",
    "tags": [
      "calm",
      "stoicism",
      "mastery"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 93
  },
  {
    "id": "quote-1019",
    "text": "If you can meet with Triumph and Disaster And treat those two impostors just the same...",
    "author": "Rudyard Kipling",
    "category": "Courage",
    "tags": [
      "equanimity",
      "triumph",
      "disaster"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 69
  },
  {
    "id": "quote-1020",
    "text": "No pressure, no diamonds.",
    "author": "Thomas Carlyle",
    "category": "Courage",
    "tags": [
      "pressure",
      "diamonds",
      "transformation"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 74
  },
  {
    "id": "quote-1021",
    "text": "Permanence, perseverance and persistence in spite of all obstacles, discouragements, and impossibilities: It is this, that in all things distinguishes the strong soul from the weak.",
    "author": "Thomas Carlyle",
    "category": "Courage",
    "tags": [
      "perseverance",
      "soul",
      "distinction"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 67
  },
  {
    "id": "quote-1022",
    "text": "The tragedy of life is what dies inside a man while he lives.",
    "author": "Albert Schweitzer",
    "category": "Courage",
    "tags": [
      "vitality",
      "aliveness",
      "spirit"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 64
  },
  {
    "id": "quote-1023",
    "text": "At times our own light goes out and is rekindled by a spark from another person.",
    "author": "Albert Schweitzer",
    "category": "Courage",
    "tags": [
      "spark",
      "community",
      "gratitude"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 50
  },
  {
    "id": "quote-1024",
    "text": "Constant kindness can accomplish much. As the sun makes ice melt, kindness causes misunderstanding, mistrust, and hostility to evaporate.",
    "author": "Albert Schweitzer",
    "category": "Courage",
    "tags": [
      "kindness",
      "gentleness",
      "warmth"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 127
  },
  {
    "id": "quote-1025",
    "text": "The purpose of human life is to serve, and to show compassion and the will to help others.",
    "author": "Albert Schweitzer",
    "category": "Courage",
    "tags": [
      "service",
      "compassion",
      "purpose"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 59
  },
  {
    "id": "quote-1026",
    "text": "Do something wonderful, people may imitate it.",
    "author": "Albert Schweitzer",
    "category": "Courage",
    "tags": [
      "inspiration",
      "example",
      "action"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 75
  },
  {
    "id": "quote-1027",
    "text": "Success is how high you bounce when you hit bottom.",
    "author": "George S. Patton",
    "category": "Courage",
    "tags": [
      "bounce-back",
      "resilience",
      "grit"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 50
  },
  {
    "id": "quote-1028",
    "text": "Courage is fear holding on a minute longer.",
    "author": "George S. Patton",
    "category": "Courage",
    "tags": [
      "endurance",
      "fear",
      "one-minute-more"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 130
  },
  {
    "id": "quote-1029",
    "text": "Accept the challenges so that you can feel the exhilaration of victory.",
    "author": "George S. Patton",
    "category": "Courage",
    "tags": [
      "challenge",
      "victory",
      "exhilaration"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 103
  },
  {
    "id": "quote-1030",
    "text": "Better to fight for something than live for nothing.",
    "author": "George S. Patton",
    "category": "Courage",
    "tags": [
      "purpose",
      "conviction",
      "fight"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 132
  },
  {
    "id": "quote-1031",
    "text": "A good plan violently executed now is better than a perfect plan executed next week.",
    "author": "George S. Patton",
    "category": "Courage",
    "tags": [
      "decisiveness",
      "execution",
      "speed"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 123
  },
  {
    "id": "quote-1032",
    "text": "I am not what happened to me, I am what I choose to become.",
    "author": "Carl Jung",
    "category": "Courage",
    "tags": [
      "identity",
      "choice",
      "transformation"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 58
  },
  {
    "id": "quote-1033",
    "text": "Until you make the unconscious conscious, it will direct your life and you will call it fate.",
    "author": "Carl Jung",
    "category": "Courage",
    "tags": [
      "consciousness",
      "awareness",
      "fate"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 59
  },
  {
    "id": "quote-1034",
    "text": "Your visions will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes.",
    "author": "Carl Jung",
    "category": "Courage",
    "tags": [
      "heart",
      "awakening",
      "introspection"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 62
  },
  {
    "id": "quote-1035",
    "text": "There is no coming to consciousness without pain.",
    "author": "Carl Jung",
    "category": "Courage",
    "tags": [
      "growth",
      "consciousness",
      "pain"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 129
  },
  {
    "id": "quote-1036",
    "text": "The privilege of a lifetime is to become who you truly are.",
    "author": "Carl Jung",
    "category": "Courage",
    "tags": [
      "individuation",
      "authenticity",
      "privilege"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 96
  },
  {
    "id": "quote-1037",
    "text": "Knowing your own darkness is the best method for dealing with the darknesses of other people.",
    "author": "Carl Jung",
    "category": "Courage",
    "tags": [
      "shadow",
      "empathy",
      "self-knowledge"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 70
  },
  {
    "id": "quote-1038",
    "text": "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.",
    "author": "Carl Jung",
    "category": "Courage",
    "tags": [
      "transformation",
      "connection",
      "chemistry"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 127
  },
  {
    "id": "quote-1039",
    "text": "Even a happy life cannot be without a measure of darkness, and the word happy would lose its meaning if it were not balanced by sadness.",
    "author": "Carl Jung",
    "category": "Courage",
    "tags": [
      "balance",
      "darkness",
      "meaning"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 110
  },
  {
    "id": "quote-1040",
    "text": "Thinking is difficult, that’s why most people judge.",
    "author": "Carl Jung",
    "category": "Courage",
    "tags": [
      "discernment",
      "judgment",
      "thinking"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 132
  },
  {
    "id": "quote-1041",
    "text": "You cannot protect yourself from sadness without protecting yourself from happiness.",
    "author": "Jonathan Safran Foer",
    "category": "Courage",
    "tags": [
      "vulnerability",
      "feeling",
      "wholeness"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 102
  },
  {
    "id": "quote-1042",
    "text": "The human capacity for burden is like bamboo — far more flexible than you'd ever believe at first glance.",
    "author": "Jodi Picoult",
    "category": "Courage",
    "tags": [
      "flexibility",
      "endurance",
      "bamboo"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 111
  },
  {
    "id": "quote-1043",
    "text": "Sometimes the bravest thing you can do is just to keep breathing.",
    "author": "Anonymous",
    "category": "Courage",
    "tags": [
      "survival",
      "gentle-courage",
      "breath"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 71
  },
  {
    "id": "quote-1044",
    "text": "Scars remind us that the past was real, but they don't have to dictate our future.",
    "author": "Anonymous",
    "category": "Courage",
    "tags": [
      "scars",
      "future",
      "healing"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 47
  },
  {
    "id": "quote-1045",
    "text": "She was a wild storm that refused to apologize for the thunder she made.",
    "author": "Anonymous",
    "category": "Courage",
    "tags": [
      "authenticity",
      "power",
      "unapologetic"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 59
  },
  {
    "id": "quote-1046",
    "text": "The strongest people are not those who show strength in front of us but those who win battles we know nothing about.",
    "author": "Anonymous",
    "category": "Courage",
    "tags": [
      "hidden-battles",
      "quiet-strength",
      "compassion"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 72
  },
  {
    "id": "quote-1047",
    "text": "Fall down seven times, get up eight with fire in your soul.",
    "author": "Anonymous",
    "category": "Courage",
    "tags": [
      "fire",
      "rising",
      "grit"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 64
  },
  {
    "id": "quote-1048",
    "text": "Your strength is forged in the fires you refused to run from.",
    "author": "Anonymous",
    "category": "Courage",
    "tags": [
      "forge",
      "fires",
      "endurance"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 81
  },
  {
    "id": "quote-1049",
    "text": "Let your courage be stronger than your fears and your faith larger than your doubts.",
    "author": "Anonymous",
    "category": "Courage",
    "tags": [
      "faith",
      "courage",
      "doubt"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 57
  },
  {
    "id": "quote-1050",
    "text": "Even the tallest mountain yields to footsteps taken one by one.",
    "author": "Anonymous",
    "category": "Courage",
    "tags": [
      "steps",
      "patience",
      "mountain"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 73
  },
  {
    "id": "quote-1051",
    "text": "Within every winter lies an invincible spring waiting for its time.",
    "author": "Anonymous",
    "category": "Courage",
    "tags": [
      "spring",
      "renewal",
      "winter"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 36
  },
  {
    "id": "quote-1052",
    "text": "Courage does not always roar. Sometimes courage is the quiet voice at the end of the day saying, 'I will try again tomorrow.'",
    "author": "Mary Anne Radmacher",
    "category": "Courage",
    "tags": [
      "quiet-voice",
      "try-again",
      "tomorrow"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 125
  },
  {
    "id": "quote-1053",
    "text": "Live with intention. Walk to the edge. Listen hard. Practice wellness. Play with abandon. Laugh. Choose with no regret. Continue to learn.",
    "author": "Mary Anne Radmacher",
    "category": "Courage",
    "tags": [
      "intention",
      "edge",
      "wellness"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 103
  },
  {
    "id": "quote-1054",
    "text": "As we work to create light for others, we naturally light our own way.",
    "author": "Mary Anne Radmacher",
    "category": "Courage",
    "tags": [
      "light",
      "service",
      "illumination"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 51
  },
  {
    "id": "quote-1055",
    "text": "No storm can last forever; the clouds will break and the sky will clear.",
    "author": "Anonymous",
    "category": "Courage",
    "tags": [
      "clouds",
      "clearing",
      "patience"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 70
  },
  {
    "id": "quote-1056",
    "text": "Walk through the fire and emerge as gold.",
    "author": "Anonymous",
    "category": "Courage",
    "tags": [
      "alchemy",
      "gold",
      "transcendence"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 40
  },
  {
    "id": "quote-1057",
    "text": "Do not pray for an easy life, pray for the strength to endure a difficult one.",
    "author": "Bruce Lee",
    "category": "Courage",
    "tags": [
      "strength",
      "prayer",
      "endurance"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 41
  },
  {
    "id": "quote-1058",
    "text": "Be like water making its way through cracks. Do not be assertive, but adjust to the object, and you shall find a way around or through it.",
    "author": "Bruce Lee",
    "category": "Courage",
    "tags": [
      "water",
      "adaptability",
      "flow"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 105
  },
  {
    "id": "quote-1059",
    "text": "Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup.",
    "author": "Bruce Lee",
    "category": "Courage",
    "tags": [
      "water",
      "formless",
      "zen"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 72
  },
  {
    "id": "quote-1060",
    "text": "Defeat is a state of mind; no one is ever defeated until defeat has been accepted as a reality.",
    "author": "Bruce Lee",
    "category": "Courage",
    "tags": [
      "mindset",
      "defeat",
      "resolve"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 124
  },
  {
    "id": "quote-1061",
    "text": "Knowing is not enough, we must apply. Willing is not enough, we must do.",
    "author": "Bruce Lee",
    "category": "Courage",
    "tags": [
      "action",
      "application",
      "deeds"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 51
  },
  {
    "id": "quote-1062",
    "text": "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
    "author": "Bruce Lee",
    "category": "Courage",
    "tags": [
      "mastery",
      "focus",
      "repetition"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 116
  },
  {
    "id": "quote-1063",
    "text": "Mistakes are always forgivable, if one has the courage to admit them.",
    "author": "Bruce Lee",
    "category": "Courage",
    "tags": [
      "humility",
      "courage",
      "forgiveness"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 131
  },
  {
    "id": "quote-1064",
    "text": "The successful warrior is the average man, with laser-like focus.",
    "author": "Bruce Lee",
    "category": "Courage",
    "tags": [
      "focus",
      "warrior",
      "simplicity"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 97
  },
  {
    "id": "quote-1065",
    "text": "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
    "author": "Bruce Lee",
    "category": "Courage",
    "tags": [
      "authenticity",
      "self-faith",
      "originality"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 48
  },
  {
    "id": "quote-1066",
    "text": "Adapt what is useful, reject what is useless, and add what is specifically your own.",
    "author": "Bruce Lee",
    "category": "Courage",
    "tags": [
      "synthesis",
      "adaptability",
      "ownership"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 36
  },
  {
    "id": "quote-1067",
    "text": "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.",
    "author": "Bruce Lee",
    "category": "Courage",
    "tags": [
      "flexibility",
      "willow",
      "survival"
    ],
    "theme": "nordic",
    "isCustom": false,
    "likes": 108
  },
  {
    "id": "quote-1068",
    "text": "If you spend too much time thinking about a thing, you'll never get it done.",
    "author": "Bruce Lee",
    "category": "Courage",
    "tags": [
      "action",
      "momentum",
      "overthinking"
    ],
    "theme": "sunset",
    "isCustom": false,
    "likes": 71
  },
  {
    "id": "quote-1069",
    "text": "Choose the positive. You have choice, you are master of your attitude, choose the positive, the constructive.",
    "author": "Bruce Lee",
    "category": "Courage",
    "tags": [
      "attitude",
      "mastery",
      "positivity"
    ],
    "theme": "light",
    "isCustom": false,
    "likes": 95
  },
  {
    "id": "quote-1070",
    "text": "To hell with circumstances; I create opportunities.",
    "author": "Bruce Lee",
    "category": "Courage",
    "tags": [
      "creation",
      "opportunities",
      "sovereignty"
    ],
    "theme": "emerald",
    "isCustom": false,
    "likes": 96
  },
  {
    "id": "quote-1071",
    "text": "Real living is living for others.",
    "author": "Bruce Lee",
    "category": "Courage",
    "tags": [
      "service",
      "living",
      "generosity"
    ],
    "theme": "midnight",
    "isCustom": false,
    "likes": 91
  }
];

// Export for Node environment (testing) and browser window
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SEED_QUOTES };
}
if (typeof window !== 'undefined') {
    window.SEED_QUOTES = SEED_QUOTES;
}
