/* ============================================
   ABC Buddy â€” Main Application Script
   Interactive alphabet learning for kids 4-7
   ============================================ */

// â”€â”€â”€ Letter Data â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const LETTER_DATA = {
    A: { sound: 'Auh', spokenSound: 'Auh as in apple', emoji: '\uD83C\uDF4E', word: 'Apple', desc: 'Crunchy, red, and yummy!', action: 'Can you say A?', color: '#EF5350' },
    B: { sound: 'Buh', spokenSound: 'Buh as in ball', emoji: '\uD83C\uDFC0', word: 'Ball', desc: 'A round ball you can bounce!', action: 'Can you bounce a ball?', color: '#42A5F5' },
    C: { sound: 'Kuh', spokenSound: 'Kuh as in cat', emoji: '\uD83D\uDC31', word: 'Cat', desc: 'Soft, cuddly, and curious!', action: 'Can you say meow?', color: '#FFA726' },
    D: { sound: 'Duh', spokenSound: 'Duh as in dog', emoji: '\uD83D\uDC36', word: 'Dog', desc: 'A friendly pet that likes to play!', action: 'Can you wag like a dog?', color: '#66BB6A' },
    E: { sound: 'Eh', spokenSound: 'Eh as in egg', emoji: '\uD83E\uDD5A', word: 'Egg', desc: 'Smooth and oval-shaped!', action: 'Can you say E?', color: '#AB47BC' },
    F: { sound: 'Fff', spokenSound: 'Fff as in fish', emoji: '\uD83D\uDC20', word: 'Fish', desc: 'It swims in the water!', action: 'Can you swim like a fish?', color: '#26A69A' },
    G: { sound: 'Guh', spokenSound: 'Guh as in grapes', emoji: '\uD83C\uDF47', word: 'Grapes', desc: 'Small, sweet fruit in a bunch!', action: 'Can you count the grapes?', color: '#7E57C2' },
    H: { sound: 'Huh', spokenSound: 'Huh as in house', emoji: '\uD83C\uDFE0', word: 'House', desc: 'A cozy place to live!', action: 'Can you point to your house?', color: '#EC407A' },
    I: { sound: 'Ih', spokenSound: 'Ih as in igloo', emoji: '\uD83E\uDDCA', word: 'Igloo', desc: 'A small house made of ice!', action: 'Can you say I?', color: '#5C6BC0' },
    J: { sound: 'Juh', spokenSound: 'Juh as in jam', emoji: '\uD83C\uDF53', word: 'Jam', desc: 'Sweet fruit spread for bread!', action: 'Can you say J?', color: '#FF7043' },
    K: { sound: 'Kuh', spokenSound: 'Kuh as in kite', emoji: '\uD83E\uDE81', word: 'Kite', desc: 'It flies high in the sky!', action: 'Can you fly a kite?', color: '#29B6F6' },
    L: { sound: 'Lll', spokenSound: 'Lll as in lion', emoji: '\uD83E\uDD81', word: 'Lion', desc: 'A big cat with a loud roar!', action: 'Can you roar like a lion?', color: '#FFCA28' },
    M: { sound: 'Mmm', spokenSound: 'Mmm as in moon', emoji: '\uD83C\uDF19', word: 'Moon', desc: 'It shines in the night sky!', action: 'Can you see the moon?', color: '#78909C' },
    N: { sound: 'Nnn', spokenSound: 'Nnn as in nose', emoji: '\uD83D\uDC43', word: 'Nose', desc: 'You use it to smell!', action: 'Can you touch your nose?', color: '#FF8A65' },
    O: { sound: 'Ah', spokenSound: 'Ah as in octopus', emoji: '\uD83D\uDC19', word: 'Octopus', desc: 'It has eight wiggly arms!', action: 'Can you wiggle your arms?', color: '#26C6DA' },
    P: { sound: 'Puh', spokenSound: 'Puh as in pig', emoji: '\uD83D\uDC37', word: 'Pig', desc: 'A pink farm animal that says oink!', action: 'Can you say oink?', color: '#F48FB1' },
    Q: { sound: 'Kwuh', spokenSound: 'Kwuh as in queen', emoji: '\uD83D\uDC51', word: 'Queen', desc: 'A royal leader with a crown!', action: 'Can you wave like a queen?', color: '#CE93D8' },
    R: { sound: 'Rrr', spokenSound: 'Rrr as in rainbow', emoji: '\uD83C\uDF08', word: 'Rainbow', desc: 'A bright arc of many colors!', action: 'Can you name a rainbow color?', color: '#EF5350' },
    S: { sound: 'Sss', spokenSound: 'Sss as in sun', emoji: '\u2600\uFE0F', word: 'Sun', desc: 'Warm, bright, and golden!', action: 'Can you shine like the sun?', color: '#FDD835' },
    T: { sound: 'Tuh', spokenSound: 'Tuh as in tree', emoji: '\uD83C\uDF33', word: 'Tree', desc: 'It grows tall with green leaves!', action: 'Can you stand tall like a tree?', color: '#43A047' },
    U: { sound: 'Uh', spokenSound: 'Uh as in umbrella', emoji: '\u2602\uFE0F', word: 'Umbrella', desc: 'It keeps you dry in the rain!', action: 'Can you open an umbrella?', color: '#5C6BC0' },
    V: { sound: 'Vvv', spokenSound: 'Vvv as in violin', emoji: '\uD83C\uDFBB', word: 'Violin', desc: 'A musical instrument with strings!', action: 'Can you pretend to play violin?', color: '#8D6E63' },
    W: { sound: 'Wuh', spokenSound: 'Wuh as in whale', emoji: '\uD83D\uDC33', word: 'Whale', desc: 'A huge animal that lives in the ocean!', action: 'Can you make a whale splash?', color: '#0288D1' },
    X: { sound: 'Ks', spokenSound: 'Ks as in x-ray', emoji: '\uD83E\uDDB4', word: 'X-ray', desc: 'A picture that can show bones!', action: 'Can you make an X with your arms?', color: '#607D8B' },
    Y: { sound: 'Yuh', spokenSound: 'Yuh as in yo-yo', emoji: '\uD83E\uDE80', word: 'Yo-yo', desc: 'A toy that goes down and up!', action: 'Can you move like a yo-yo?', color: '#FFB300' },
    Z: { sound: 'Zzz', spokenSound: 'Zzz as in zebra', emoji: '\uD83E\uDD93', word: 'Zebra', desc: 'An animal with black and white stripes!', action: 'Can you say Z?', color: '#37474F' }
};

// Stroke guide points for each letter on a 300x300 canvas (letter centered at 150,150)
// Each entry is an array of strokes; each stroke is an array of [x,y] waypoints
const LETTER_STROKES = {
    A: [
        [[150, 55], [85, 255]],
        [[150, 55], [215, 255]],
        [[100, 170], [200, 170]]
    ],
    B: [
        [[95, 55], [95, 255]],
        [[95, 55], [178, 95], [95, 158]],
        [[95, 158], [188, 205], [95, 255]]
    ],
    C: [
        [[200, 92], [150, 55], [88, 155], [150, 255], [200, 218]]
    ],
    D: [
        [[95, 55], [95, 255]],
        [[95, 55], [195, 155], [95, 255]]
    ],
    E: [
        [[95, 55], [95, 255]],
        [[95, 55], [195, 55]],
        [[95, 155], [175, 155]],
        [[95, 255], [195, 255]]
    ],
    F: [
        [[95, 55], [95, 255]],
        [[95, 55], [195, 55]],
        [[95, 155], [175, 155]]
    ],
    G: [
        [[202, 95], [150, 55], [88, 155], [150, 255], [210, 225], [210, 158], [163, 158]]
    ],
    H: [
        [[95, 55], [95, 255]],
        [[205, 55], [205, 255]],
        [[95, 155], [205, 155]]
    ],
    I: [
        [[112, 55], [188, 55]],
        [[150, 55], [150, 255]],
        [[112, 255], [188, 255]]
    ],
    J: [
        [[112, 55], [188, 55]],
        [[155, 55], [155, 225], [127, 252], [92, 235]]
    ],
    K: [
        [[95, 55], [95, 255]],
        [[95, 158], [205, 55]],
        [[132, 130], [205, 255]]
    ],
    L: [
        [[95, 55], [95, 255]],
        [[95, 255], [205, 255]]
    ],
    M: [
        [[85, 255], [85, 55], [150, 168], [215, 55], [215, 255]]
    ],
    N: [
        [[95, 255], [95, 55], [205, 255], [205, 55]]
    ],
    O: [
        [[150, 55], [90, 92], [70, 155], [90, 218], [150, 255], [210, 218], [230, 155], [210, 92], [150, 55]]
    ],
    P: [
        [[95, 55], [95, 255]],
        [[95, 55], [188, 95], [95, 162]]
    ],
    Q: [
        [[150, 55], [90, 92], [70, 155], [90, 218], [150, 255], [210, 218], [230, 155], [210, 92], [150, 55]],
        [[168, 208], [212, 255]]
    ],
    R: [
        [[95, 55], [95, 255]],
        [[95, 55], [185, 92], [95, 160]],
        [[112, 160], [208, 255]]
    ],
    S: [
        [[200, 88], [155, 55], [95, 72], [80, 120], [132, 155], [175, 188], [175, 228], [130, 255], [82, 242]]
    ],
    T: [
        [[90, 55], [210, 55]],
        [[150, 55], [150, 255]]
    ],
    U: [
        [[95, 55], [95, 210], [120, 248], [150, 258], [180, 248], [205, 210], [205, 55]]
    ],
    V: [
        [[85, 55], [150, 255]],
        [[150, 255], [215, 55]]
    ],
    W: [
        [[75, 55], [105, 255], [150, 165], [195, 255], [225, 55]]
    ],
    X: [
        [[90, 55], [210, 255]],
        [[210, 55], [90, 255]]
    ],
    Y: [
        [[90, 55], [150, 155]],
        [[210, 55], [150, 155]],
        [[150, 155], [150, 255]]
    ],
    Z: [
        [[90, 55], [210, 55]],
        [[210, 55], [90, 255]],
        [[90, 255], [210, 255]]
    ]
};

const LETTER_COLORS = [
    '#EF5350', '#42A5F5', '#FFA726', '#66BB6A', '#AB47BC',
    '#26A69A', '#7E57C2', '#EC407A', '#5C6BC0', '#FF7043',
    '#29B6F6', '#FFCA28', '#78909C', '#FF8A65', '#26C6DA',
    '#F48FB1', '#CE93D8', '#EF5350', '#FDD835', '#43A047',
    '#5C6BC0', '#8D6E63', '#0288D1', '#607D8B', '#FFB300',
    '#37474F'
];

const VOWELS = ['A', 'E', 'I', 'O', 'U'];

const SONG_ART_CLASSES = {
    'abc-rock': 'song-art-rock',
    nebula: 'song-art-nebula',
    'rocket-rhyme': 'song-art-rocket',
    'planet-party': 'song-art-planet',
    'vowel-pop': 'song-art-vowels'
};

const SONG_LIBRARY = {
    'abc-rock': {
        title: 'The ABC Song',
        detail: 'Classic alphabet song',
        art: 'Play',
        cardId: 'sing-card-play',
        audioFile: 'abc_song.mpeg',
        videoFile: 'abcsong.mp4',
        startOffset: 6000,
        lines: [
            { text: 'A B C D, clap with me!', letters: ['A', 'B', 'C', 'D'], duration: 2500 },
            { text: 'E F G, sing happily!', letters: ['E', 'F', 'G'], duration: 2300 },
            { text: 'H I J K, jump and sway!', letters: ['H', 'I', 'J', 'K'], duration: 2500 },
            { text: 'L M N O P, letters rock with energy!', letters: ['L', 'M', 'N', 'O', 'P'], duration: 3600 },
            { text: 'Q R S, T U V, keep the beat and sing with me!', letters: ['Q', 'R', 'S', 'T', 'U', 'V'], duration: 4500 },
            { text: 'W X, Y and Z, now we know our ABCs!', letters: ['W', 'X', 'Y', 'Z'], duration: 4000 }
        ]
    },
    nebula: {
        title: 'Nebula Letters',
        detail: 'Gentle practice song',
        art: 'A B C',
        cardId: 'sing-card-slow',
        audioFile: 'nebula.mpeg',
        videoFile: 'nebulaletters.mp4',
        startOffset: 7000,
        slow: true,
        lines: [
            { text: 'A is bright like a little star.', letters: ['A'], duration: 3800 },
            { text: 'B bounces by from near to far.', letters: ['B'], duration: 4500 },
            { text: 'C curves softly, round and clear.', letters: ['C'], duration: 5500 },
            { text: 'D drums a beat for all to hear.', letters: ['D'], duration: 5500 },
            { text: 'Every letter has a sound.', letters: [], duration: 4800 },
            { text: 'Sing them slowly, round and round.', letters: [], duration: 5000 }
        ]
    },
    'rocket-rhyme': {
        title: 'Rocket Rhymes',
        detail: 'Letter sound rhymes',
        art: 'Go',
        cardId: 'sing-card-rhyme',
        audioFile: 'Rocket_rhymes.mpeg',
        videoFile: 'rocketrhymes.mp4',
        startOffset: 7000,
        lines: [
            { text: 'Buh, buh, Ball.', letters: ['B'], duration: 15000 },
            { text: 'Bounce it down the hall!', letters: [], duration: 1800 },
            { text: 'Kuh, kuh, Cat.', letters: ['C'], duration: 1800 },
            { text: 'Stretch upon the mat!', letters: [], duration: 1800 },
            { text: 'Duh, duh, Dog.', letters: ['D'], duration: 1800 },
            { text: 'Hop across the log!', letters: [], duration: 1800 },
            { text: 'Fff, fff, Fish.', letters: ['F'], duration: 1800 },
            { text: 'Splash and make a wish!', letters: [], duration: 1800 },
            { text: 'Mmm, mmm, Moon.', letters: ['M'], duration: 1800 },
            { text: 'Glow and hum a tune!', letters: [], duration: 1800 },
            { text: 'Zzz, zzz, Zebra.', letters: ['Z'], duration: 1800 },
            { text: 'Zip across the stars!', letters: [], duration: 1800 }
        ]
    },
    'planet-party': {
        title: 'Planet Party Groove',
        detail: 'Cheerful word song',
        art: 'Sun',
        cardId: 'sing-card-planet',
        audioFile: 'planet_grove.mpeg',
        videoFile: 'planetpartygrove.mp4',
        startOffset: 16500,
        lines: [
            { text: 'A is for Apple, crunchy and sweet.', letters: ['A'], duration: 3500 },
            { text: 'K is for Kite, flying to the beat.', letters: ['K'], duration: 3500 },
            { text: 'M is for Moon, glowing up high.', letters: ['M'], duration: 3500 },
            { text: 'S is for Sun, shining in the sky.', letters: ['S'], duration: 3500 },
            { text: 'T is for Tree, standing tall and free.', letters: ['T'], duration: 3500 },
            { text: 'We love words from A to Z!', letters: ['A', 'Z'], duration: 4500 }
        ]
    },
    'vowel-pop': {
        title: 'Vowel Pop',
        detail: 'A E I O U chorus',
        art: 'A E I',
        cardId: 'sing-card-vowels',
        audioFile: 'vowel_pop.mp3',
        videoFile: 'vowelpop.mp4',
        lines: [
            { text: 'A says Auh in Apple.', letters: ['A'], duration: 3200 },
            { text: 'E says Eh in Egg.', letters: ['E'], duration: 3200 },
            { text: 'I says Ih in Igloo.', letters: ['I'], duration: 3200 },
            { text: 'O says Ah in Octopus.', letters: ['O'], duration: 3400 },
            { text: 'U says Uh in Umbrella.', letters: ['U'], duration: 3400 },
            { text: 'A E I O U, vowels are fun to do!', letters: ['A', 'E', 'I', 'O', 'U'], duration: 4800 }
        ]
    }
};

const WORD_AUDIO_LINES = {
    A: 'Awesome A! Auh, Auh, Apple. Crunchy apple, yummy and bright!',
    B: 'Brilliant B! Buh, Buh, Ball. Bounce the ball up high!',
    C: 'Cool C! Kuh, Kuh, Cat. Soft little cat says meow!',
    D: 'Dazzling D! Duh, Duh, Dog. Happy dog, wag your tail!',
    E: 'Excellent E! Eh, Eh, Egg. Smooth little egg, hold it gently!',
    F: 'Fantastic F! Fff, Fff, Fish. Little fish, swim and splash!',
    G: 'Great G! Guh, Guh, Grapes. Sweet grapes grow in a bunch!',
    H: 'Happy H! Huh, Huh, House. A cozy house keeps us safe!',
    I: 'Incredible I! Ih, Ih, Igloo. Icy igloo, cold and round!',
    J: 'Jolly J! Juh, Juh, Jam. Sweet jam on toast, yum!',
    K: 'Kind K! Kuh, Kuh, Kite. Fly the kite up to the sky!',
    L: 'Lovely L! Lll, Lll, Lion. Big lion gives a friendly roar!',
    M: 'Magic M! Mmm, Mmm, Moon. The moon glows softly at night!',
    N: 'Nice N! Nnn, Nnn, Nose. Touch your nose and sniff sniff!',
    O: 'Outstanding O! Ah, Ah, Octopus. Eight arms wiggle in the sea!',
    P: 'Playful P! Puh, Puh, Pig. Pink little pig says oink!',
    Q: 'Quick Q! Kwuh, Kwuh, Queen. The queen waves with a shiny crown!',
    R: 'Radiant R! Rrr, Rrr, Rainbow. Rainbow colors shine after rain!',
    S: 'Super S! Sss, Sss, Sun. Warm sun shines bright!',
    T: 'Terrific T! Tuh, Tuh, Tree. Tall tree, reach up high!',
    U: 'Upbeat U! Uh, Uh, Umbrella. Open the umbrella in the rain!',
    V: 'Vibrant V! Vvv, Vvv, Violin. The violin sings a sweet tune!',
    W: 'Wonderful W! Wuh, Wuh, Whale. Big whale splashes in the ocean!',
    X: 'Exciting X! Ks, Ks, X-ray. X-ray shows what is inside!',
    Y: 'Yes for Y! Yuh, Yuh, Yo-yo. Yo-yo goes down and up!',
    Z: 'Zippy Z! Zzz, Zzz, Zebra. Zebra stripes go black and white!'
};

// â”€â”€â”€ State â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const state = {
    soundEnabled: true,
    currentLetter: null,
    isUppercase: true,
    visitedLetters: new Set(),
    gameScore: 0,
    currentGame: null,
    completedGames: new Set(),
    singing: false,
    singTimeout: null,
    songToneTimeouts: [],
    karaokeTimeouts: [],
    songAudio: null,
    karaokeSyncRAF: null,
    currentSong: 'abc-rock',
    pendingSongChoice: null,
    videoSong: null,
    factIndex: 0,
    factInterval: null,
    // Memory game state
    memoryCards: [],
    memoryFlipped: [],
    memoryMatched: 0,
    memoryLocked: false,
    // Bubble game state
    bubbleInterval: null,
    bubbleTarget: null,
    // Tracing
    isDrawing: false,
    lastX: 0,
    lastY: 0
};

// â”€â”€â”€ DOM References â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// â”€â”€â”€ Audio Context (Web Audio API) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
let audioCtx = null;

function getAudioCtx() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioCtx;
}

function playTone(frequency, duration = 0.15, type = 'sine') {
    if (!state.soundEnabled) return;
    try {
        const ctx = getAudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(frequency, ctx.currentTime);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration);
    } catch (e) {
        // Audio not supported
    }
}

function playClickSound() {
    playTone(800, 0.08, 'sine');
    setTimeout(() => playTone(1000, 0.06, 'sine'), 60);
}

function playSuccessSound() {
    playTone(523, 0.12, 'sine');
    setTimeout(() => playTone(659, 0.12, 'sine'), 120);
    setTimeout(() => playTone(784, 0.18, 'sine'), 240);
}

function playWrongSound() {
    playTone(300, 0.2, 'sawtooth');
    setTimeout(() => playTone(250, 0.25, 'sawtooth'), 200);
}

function playPartyPopSound() {
    if (!state.soundEnabled) return;
    // Bass pop
    playTone(150, 0.3, 'sine');
    // Ascending sparkle burst
    setTimeout(() => playTone(523, 0.1, 'sine'), 50);
    setTimeout(() => playTone(659, 0.1, 'sine'), 120);
    setTimeout(() => playTone(784, 0.1, 'sine'), 190);
    setTimeout(() => playTone(1047, 0.15, 'sine'), 260);
    // Second pop + shimmer
    setTimeout(() => playTone(200, 0.2, 'sine'), 350);
    setTimeout(() => playTone(880, 0.1, 'triangle'), 400);
    setTimeout(() => playTone(1175, 0.1, 'triangle'), 460);
    setTimeout(() => playTone(1319, 0.12, 'sine'), 520);
    setTimeout(() => playTone(1568, 0.18, 'sine'), 600);
}

function playLetterSound(letter) {
    if (!state.soundEnabled) return;
    const index = letter.charCodeAt(0) - 65;
    const baseFreq = 262; // middle C
    const freq = baseFreq * Math.pow(2, index / 12);
    playTone(freq, 0.2, 'sine');
    setTimeout(() => playTone(freq * 1.25, 0.15, 'sine'), 200);
}

function playNoteSequence(notes, interval = 200) {
    if (!state.soundEnabled) return;
    notes.forEach((freq, i) => {
        setTimeout(() => playTone(freq, 0.2, 'sine'), i * interval);
    });
}

const SONG_BACKING_PATTERNS = {
    'abc-rock': [262, 330, 392, 523, 392, 330],
    nebula: [392, 440, 523, 659, 523, 440],
    'rocket-rhyme': [330, 392, 494, 659, 494, 392],
    'planet-party': [262, 349, 440, 523, 440, 349],
    'vowel-pop': [294, 370, 440, 587, 440, 370]
};

function clearSongBacking() {
    state.songToneTimeouts.forEach(timeoutId => clearTimeout(timeoutId));
    state.songToneTimeouts = [];
}

function scheduleSongBacking(songId, duration, speedMultiplier = 1) {
    if (!state.soundEnabled) return;
    clearSongBacking();
    const pattern = SONG_BACKING_PATTERNS[songId] || SONG_BACKING_PATTERNS['abc-rock'];
    const beat = Math.max(210, 320 * speedMultiplier);
    const totalDuration = duration * speedMultiplier;
    for (let time = 0; time < totalDuration; time += beat) {
        const note = pattern[Math.floor(time / beat) % pattern.length];
        const timeoutId = setTimeout(() => {
            if (!state.singing) return;
            playTone(note, 0.16, 'triangle');
            if (Math.floor(time / beat) % 2 === 0) {
                playTone(note / 2, 0.08, 'sine');
            }
        }, time);
        state.songToneTimeouts.push(timeoutId);
    }
}

function clearKaraokeTimers() {
    state.karaokeTimeouts.forEach(timeoutId => clearTimeout(timeoutId));
    state.karaokeTimeouts = [];
}

function escapeHtml(text) {
    return text.replace(/[&<>"']/g, char => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    }[char]));
}

function renderKaraokeLine(text, activeIndex = -1) {
    const karaokeEl = $('#karaoke-line');
    const words = text.split(/\s+/).filter(Boolean);
    karaokeEl.innerHTML = words.map((word, index) => {
        const activeClass = index === activeIndex ? ' active-word' : '';
        const doneClass = index < activeIndex ? ' done-word' : '';
        return `<span class="karaoke-word${activeClass}${doneClass}">${escapeHtml(word)}</span>`;
    }).join(' ');
}

function scheduleKaraokeLine(line, duration, startDelay = 0) {
    const words = line.text.split(/\s+/).filter(Boolean);
    if (!words.length) return;
    // Show first word highlighted immediately (no blank flash)
    renderKaraokeLine(line.text, 0);
    const wordDelay = Math.max(180, duration / words.length);
    words.forEach((_, index) => {
        const timeoutId = setTimeout(() => {
            if (!state.singing) return;
            renderKaraokeLine(line.text, index);
        }, startDelay + (index * wordDelay));
        state.karaokeTimeouts.push(timeoutId);
    });
}

function scheduleKaraokeSong(song, speedMultiplier = 1) {
    clearKaraokeTimers();
    
    // If we have a custom audio file, use time-sync mode (rAF polling)
    if (state.songAudio) {
        startKaraokeSync(song, speedMultiplier);
        return;
    }
    
    // Fallback: setTimeout-based scheduling for speech synthesis mode
    let elapsed = 0;
    song.lines.forEach(line => {
        const lineDuration = line.duration * speedMultiplier;
        const timeoutId = setTimeout(() => {
            if (!state.singing) return;
            scheduleKaraokeLine(line, lineDuration);

            const letters = line.letters;
            const letterDelay = lineDuration / (letters.length + 1);
            letters.forEach((letter, i) => {
                const letterId = setTimeout(() => {
                    if (!state.singing) return;
                    const singEl = $(`#sing-${letter}`);
                    if (singEl) {
                        $$('.sing-letter.highlighted').forEach(el => {
                            el.classList.remove('highlighted');
                            el.classList.add('done');
                        });
                        singEl.classList.add('highlighted');
                        playLetterSound(letter);
                    }
                }, i * letterDelay);
                state.karaokeTimeouts.push(letterId);
            });
        }, elapsed);
        state.karaokeTimeouts.push(timeoutId);
        elapsed += lineDuration;
    });
}

// Audio-synced karaoke using requestAnimationFrame
// Polls audio.currentTime every frame to keep lyrics perfectly in sync
function startKaraokeSync(song, speedMultiplier) {
    if (state.karaokeSyncRAF) cancelAnimationFrame(state.karaokeSyncRAF);
    
    const audio = state.songAudio;
    const startOffset = (song.startOffset || 0) / 1000; // convert ms to seconds
    
    // Pre-compute cumulative start times in seconds using exactly the defined durations
    const lineTimings = [];
    let cumulative = startOffset;
    song.lines.forEach(line => {
        const durSec = (line.duration * speedMultiplier) / 1000;
        lineTimings.push({ line, startSec: cumulative, durSec: durSec });
        cumulative += durSec;
    });
    
    let prevLineIdx = -1;
    let highlightedLetters = new Set();
    
    function syncFrame() {
        if (!state.singing || !state.songAudio) return;
        
        const currentTime = audio.currentTime;
        
        // Find which line we should be on
        let activeLineIdx = -1;
        for (let i = 0; i < lineTimings.length; i++) {
            if (currentTime >= lineTimings[i].startSec) {
                activeLineIdx = i;
            }
        }
        
        if (activeLineIdx >= 0 && activeLineIdx !== prevLineIdx) {
            prevLineIdx = activeLineIdx;
            highlightedLetters.clear();
            const { line, durSec } = lineTimings[activeLineIdx];
            
            // Render the karaoke text for this line
            const words = line.text.split(/\s+/).filter(Boolean);
            renderKaraokeLine(line.text, 0);
            
            // Clear previous letter highlights
            $$('.sing-letter.highlighted').forEach(el => {
                el.classList.remove('highlighted');
                el.classList.add('done');
            });
        }
        
        // Update word highlight within current line
        if (activeLineIdx >= 0) {
            const { line, startSec, durSec } = lineTimings[activeLineIdx];
            const elapsed = currentTime - startSec;
            const progress = Math.min(elapsed / durSec, 1);
            const words = line.text.split(/\s+/).filter(Boolean);
            const activeWordIdx = Math.min(Math.floor(progress * words.length), words.length - 1);
            renderKaraokeLine(line.text, activeWordIdx);
            
            // Highlight letters based on progress
            const letters = line.letters;
            const activeLetterIdx = Math.min(Math.floor(progress * letters.length), letters.length - 1);
            for (let i = 0; i <= activeLetterIdx; i++) {
                const letter = letters[i];
                if (!highlightedLetters.has(letter)) {
                    highlightedLetters.add(letter);
                    $$('.sing-letter.highlighted').forEach(el => {
                        el.classList.remove('highlighted');
                        el.classList.add('done');
                    });
                    const singEl = $(`#sing-${letter}`);
                    if (singEl) singEl.classList.add('highlighted');
                }
            }
        }
        
        state.karaokeSyncRAF = requestAnimationFrame(syncFrame);
    }
    
    // Show the first line immediately so the screen doesn't look stuck during the intro
    if (song.lines.length > 0) {
        renderKaraokeLine(song.lines[0].text, -1);
    }
    
    state.karaokeSyncRAF = requestAnimationFrame(syncFrame);
}

function startVideoKaraokeSync(song, video) {
    if (state.karaokeSyncRAF) cancelAnimationFrame(state.karaokeSyncRAF);

    const startOffset = (song.startOffset || 0) / 1000;
    const lineTimings = [];
    let cumulative = startOffset;
    song.lines.forEach(line => {
        const durSec = line.duration / 1000;
        lineTimings.push({ line, startSec: cumulative, durSec });
        cumulative += durSec;
    });

    let prevLineIdx = -1;
    let highlightedLetters = new Set();

    function syncFrame() {
        if (!state.videoSong || video.paused || video.ended) return;
        const currentTime = video.currentTime;

        let activeLineIdx = -1;
        for (let i = 0; i < lineTimings.length; i++) {
            if (currentTime >= lineTimings[i].startSec) activeLineIdx = i;
        }

        if (activeLineIdx >= 0 && activeLineIdx !== prevLineIdx) {
            prevLineIdx = activeLineIdx;
            highlightedLetters.clear();
            renderKaraokeLine(lineTimings[activeLineIdx].line.text, 0);
            $$('.sing-letter.highlighted').forEach(el => {
                el.classList.remove('highlighted');
                el.classList.add('done');
            });
        }

        if (activeLineIdx >= 0) {
            const { line, startSec, durSec } = lineTimings[activeLineIdx];
            const progress = Math.min((currentTime - startSec) / durSec, 1);
            const words = line.text.split(/\s+/).filter(Boolean);
            renderKaraokeLine(line.text, Math.min(Math.floor(progress * words.length), words.length - 1));
            const letters = line.letters;
            const activeLetterIdx = Math.min(Math.floor(progress * letters.length), letters.length - 1);
            for (let i = 0; i <= activeLetterIdx; i++) {
                const letter = letters[i];
                if (!highlightedLetters.has(letter)) {
                    highlightedLetters.add(letter);
                    $$('.sing-letter.highlighted').forEach(el => {
                        el.classList.remove('highlighted');
                        el.classList.add('done');
                    });
                    const singEl = $(`#sing-${letter}`);
                    if (singEl) singEl.classList.add('highlighted');
                }
            }
        }
        state.karaokeSyncRAF = requestAnimationFrame(syncFrame);
    }

    if (song.lines.length > 0) renderKaraokeLine(song.lines[0].text, -1);
    state.karaokeSyncRAF = requestAnimationFrame(syncFrame);
}

// â”€â”€â”€ Custom Audio System (Google AI Studio support) â”€â”€â”€â”€â”€
// Checks for custom audio files in assets/audio/. Falls back to Speech Synthesis.
const audioCache = {};

function playCustomAudio(filename) {
    if (!state.soundEnabled) return Promise.resolve(false);
    const candidates = filename.endsWith('.mp3')
        ? [filename, filename.replace(/\.mp3$/, '.mpeg')]
        : [filename];

    const tryCandidate = (index) => new Promise((resolve) => {
        const candidate = candidates[index];
        if (!candidate) { resolve(false); return; }
        const path = `assets/audio/${candidate}`;
        if (audioCache[candidate] === false) {
            resolve(tryCandidate(index + 1));
            return;
        }
        if (audioCache[candidate]) {
            const audio = audioCache[candidate].cloneNode();
            audio.play().then(() => resolve(true)).catch(() => resolve(tryCandidate(index + 1)));
            return;
        }
        const audio = new Audio(path);
        audio.addEventListener('canplaythrough', () => {
            audioCache[candidate] = audio;
            audio.play().then(() => resolve(true)).catch(() => resolve(tryCandidate(index + 1)));
        }, { once: true });
        audio.addEventListener('error', () => {
            audioCache[candidate] = false;
            resolve(tryCandidate(index + 1));
        }, { once: true });
        audio.load();
    });

    return tryCandidate(0);
}

function getAudioCandidates(filename) {
    return filename.endsWith('.mp3')
        ? [filename, filename.replace(/\.mp3$/, '.mpeg')]
        : [filename];
}

function playSongAudio(filename) {
    if (!filename) return Promise.resolve(false);
    const candidates = getAudioCandidates(filename);

    const tryCandidate = (index) => new Promise((resolve) => {
        const candidate = candidates[index];
        if (!candidate) { resolve(false); return; }
        const audio = new Audio(`assets/audio/${candidate}`);
        audio.addEventListener('canplaythrough', () => {
            if (state.songAudio) {
                state.songAudio.pause();
                state.songAudio.currentTime = 0;
            }
            audio.muted = !state.soundEnabled;
            state.songAudio = audio;
            audio.play().then(() => resolve(true)).catch(() => resolve(tryCandidate(index + 1)));
        }, { once: true });
        audio.addEventListener('error', () => resolve(tryCandidate(index + 1)), { once: true });
        audio.load();
    });

    return tryCandidate(0);
}

async function playLetterAudio(letter) {
    if (!state.soundEnabled) return;
    // Try custom audio first (e.g., assets/audio/A.mp3)
    const played = await playCustomAudio(`${letter}.mp3`);
    if (!played) {
        // Fallback: speak the letter name
        speak(letter);
    }
}

async function playWordAudio(letter) {
    if (!state.soundEnabled) return;
    // Try custom word audio (e.g., assets/audio/A_word.mp3)
    const played = await playCustomAudio(`${letter}_word.mp3`);
    if (!played) {
        // Fallback: use speech synthesis
        speakWordLine(letter);
    }
}

function speakWordLine(letter) {
    const data = LETTER_DATA[letter];
    speak(WORD_AUDIO_LINES[letter] || `Wonderful ${letter}! ${letter} is for ${data.word}. ${data.desc}`);
}

// â”€â”€â”€ Speech Synthesis â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
async function playDisplayedSound(letter) {
    if (!state.soundEnabled) return;
    const data = LETTER_DATA[letter];
    playLetterSound(letter);
    const played = await playCustomAudio(`${letter}_sound.mp3`);
    if (!played) {
        speak(data.spokenSound || data.sound);
    }
}

function speak(text) {
    if (!state.soundEnabled) return;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.92;
        utterance.pitch = 1.55;
        utterance.volume = 1;
        // Try to find a friendly voice
        const voices = window.speechSynthesis.getVoices();
        const friendlyVoice = voices.find(v =>
            v.name.includes('Samantha') ||
            v.name.includes('Karen') ||
            v.name.includes('Victoria') ||
            v.lang.startsWith('en')
        );
        if (friendlyVoice) utterance.voice = friendlyVoice;
        window.speechSynthesis.speak(utterance);
    }
}

// â”€â”€â”€ Confetti â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function launchConfetti() {
    const canvas = $('#confetti-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confetti = [];
    const colors = ['#FF6B6B', '#FDB813', '#5DADE2', '#58D68D', '#A178DF', '#FF85B3', '#FF8C42'];

    for (let i = 0; i < 80; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: -20 - Math.random() * 200,
            w: 8 + Math.random() * 6,
            h: 4 + Math.random() * 4,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 4,
            vy: 2 + Math.random() * 4,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            opacity: 1
        });
    }

    let frame = 0;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;

        confetti.forEach(c => {
            c.x += c.vx;
            c.y += c.vy;
            c.vy += 0.05;
            c.rotation += c.rotationSpeed;
            if (frame > 60) c.opacity -= 0.01;

            if (c.opacity > 0 && c.y < canvas.height + 20) {
                alive = true;
                ctx.save();
                ctx.globalAlpha = Math.max(0, c.opacity);
                ctx.translate(c.x, c.y);
                ctx.rotate((c.rotation * Math.PI) / 180);
                ctx.fillStyle = c.color;
                ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
                ctx.restore();
            }
        });

        frame++;
        if (alive) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
    animate();
}

// â”€â”€â”€ Show Feedback â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function showFeedback(text, color = '#FFD700') {
    const fb = $('#game-feedback');
    const fc = $('#feedback-content');
    fc.textContent = String(text).replace(/[^\x20-\x7E]/g, '').replace(/\s+/g, ' ').trim();
    fc.style.color = color;
    fb.style.display = 'flex';
    setTimeout(() => { fb.style.display = 'none'; }, 1500);
}

// â”€â”€â”€ Initialize Alphabet Grid â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function initAlphabetGrid() {
    const grid = $('#alphabet-grid');
    grid.innerHTML = '';

    Object.keys(LETTER_DATA).forEach((letter, i) => {
        const btn = document.createElement('button');
        btn.className = 'letter-btn';
        if (VOWELS.includes(letter)) btn.classList.add('vowel');
        btn.textContent = letter;
        btn.style.background = `linear-gradient(145deg, ${LETTER_COLORS[i]}, ${shadeColor(LETTER_COLORS[i], -20)})`;
        btn.dataset.letter = letter;
        btn.id = `letter-${letter}`;
        btn.setAttribute('aria-label', `Learn letter ${letter}`);

        // Staggered animation
        btn.style.animation = `popIn 0.4s ${i * 0.03}s cubic-bezier(0.34, 1.56, 0.64, 1) backwards`;

        btn.addEventListener('click', () => openLetter(letter));
        grid.appendChild(btn);
    });
}

function shadeColor(color, percent) {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);
    R = Math.min(255, Math.max(0, R + Math.round(R * percent / 100)));
    G = Math.min(255, Math.max(0, G + Math.round(G * percent / 100)));
    B = Math.min(255, Math.max(0, B + Math.round(B * percent / 100)));
    return `#${(R.toString(16).padStart(2,'0'))}${(G.toString(16).padStart(2,'0'))}${(B.toString(16).padStart(2,'0'))}`;
}

// â”€â”€â”€ Open Letter Modal â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function openLetter(letter) {
    state.currentLetter = letter;
    state.visitedLetters.add(letter);
    const data = LETTER_DATA[letter];
    const index = letter.charCodeAt(0) - 65;

    // Mark as visited
    const btn = $(`#letter-${letter}`);
    if (btn) btn.classList.add('visited');

    // Update modal
    updateLetterDisplay(letter);
    $('#sound-text').textContent = `"${data.sound}"`;
    $('#word-emoji').textContent = data.emoji;
    $('#word-label').textContent = `${letter} is for ${data.word}!`;
    $('#word-desc').textContent = data.desc;
    $('#action-text').textContent = data.action;

    // Color the big letter
    const bigLetter = $('#big-letter');
    bigLetter.style.background = `linear-gradient(135deg, ${LETTER_COLORS[index]}, ${shadeColor(LETTER_COLORS[index], 30)})`;
    bigLetter.style.webkitBackgroundClip = 'text';
    bigLetter.style.backgroundClip = 'text';

    // Show modal
    const modal = $('#letter-modal');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');

    // Hide tracing area
    $('#tracing-area').style.display = 'none';

    // Play sound â€” try custom audio first, fallback to speech
    playLetterSound(letter);
    setTimeout(async () => {
        const played = await playCustomAudio(`${letter}_full.mp3`);
        if (!played) {
            speakWordLine(letter);
        }
    }, 200);

    // Update mascot speech
    updateMascotSpeech(letter);
}

function updateLetterDisplay(letter) {
    const display = state.isUppercase ? letter.toUpperCase() : letter.toLowerCase();
    $('#big-letter').textContent = display;
}

function updateMascotSpeech(letter) {
    const data = LETTER_DATA[letter];
    const messages = [
        `${data.emoji} ${letter} is for ${data.word}! ${data.action}`,
        `Great choice! ${data.emoji} ${data.desc}`,
        `You picked ${letter}! ${data.word} starts with ${letter}!`,
        `${data.emoji} Wow! ${letter} makes the ${data.sound} sound!`
    ];
    const msg = messages[Math.floor(Math.random() * messages.length)];
    const speech = $('#mascot-speech p');
    if (speech) speech.textContent = msg;
}

// â”€â”€â”€ Close Modal â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function closeModal() {
    const modal = $('#letter-modal');
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
}

// â”€â”€â”€ Navigation â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const NAV_TARGETS = {
    home: '#hero-section',
    learn: '#alphabet-section',
    games: '#games-section',
    sing: '#sing-section',
    ebook: '#ebook-section',
    slides: '#slides-section'
};

let navScrollTicking = false;

function setActiveNav(section) {
    $$('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.section === section);
    });
}

function getSectionForViewport() {
    const header = $('#site-header');
    const headerOffset = header ? header.offsetHeight : 0;
    const probeY = headerOffset + (window.innerHeight - headerOffset) * 0.35;
    const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;

    if (scrollTop < 80) {
        return 'home';
    }

    const gamePlayArea = $('#game-play-area');
    if (gamePlayArea && gamePlayArea.style.display !== 'none') {
        const gameRect = gamePlayArea.getBoundingClientRect();
        if (gameRect.top <= probeY && gameRect.bottom > probeY) {
            return 'games';
        }
    }

    let activeSection = 'home';
    Object.entries(NAV_TARGETS).forEach(([section, selector]) => {
        const el = $(selector);
        if (!el || el.offsetParent === null) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
            activeSection = section;
        }
    });

    return activeSection;
}

function updateNavFromScroll() {
    if (navScrollTicking) return;
    navScrollTicking = true;

    requestAnimationFrame(() => {
        setActiveNav(getSectionForViewport());
        navScrollTicking = false;
    });
}

function navigateToSection(section) {
    setActiveNav(section);

    // Always stop current game and restore sections
    $('#game-play-area').style.display = 'none';
    stopCurrentGame();
    $('#games-section').style.display = 'block';

    const target = $(NAV_TARGETS[section]);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Lazy-load ebook iframe only when navigating to ebook section
    if (section === 'ebook') {
        const frame = $('#ebook-frame');
        if (frame && !frame.src && frame.dataset.src) {
            frame.src = frame.dataset.src;
        }
    }
}

// â”€â”€â”€ Games â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function stopCurrentGame() {
    if (state.bubbleInterval) {
        clearInterval(state.bubbleInterval);
        state.bubbleInterval = null;
    }
    state.currentGame = null;
}

function startGame(gameType) {
    state.currentGame = gameType;
    state.gameScore = 0;
    updateScore();

    const container = $('#game-container');
    const playArea = $('#game-play-area');
    const gamesSection = $('#games-section');

    gamesSection.style.display = 'none';
    playArea.style.display = 'block';
    playArea.scrollIntoView({ behavior: 'smooth' });

    switch (gameType) {
        case 'quiz': initQuizGame(container); break;
        case 'bubbles': initBubbleGame(container); break;
        case 'memory': initMemoryGame(container); break;
        case 'matching': initMatchingGame(container); break;
        case 'order': initOrderGame(container); break;
        case 'color': initColorGame(container); break;
    }
}

function updateScore() {
    $('#score-value').textContent = state.gameScore;
}

function renderMissionStars() {
    $$('.games-section .game-card[data-game]').forEach(card => {
        const badge = card.querySelector('.game-card-badge');
        if (!badge) return;
        const completed = state.completedGames.has(card.dataset.game);
        card.classList.toggle('game-completed', completed);
        badge.classList.add('mission-stars');
        badge.setAttribute('aria-label', completed ? 'Mission completed: three stars earned' : 'Mission not completed');
        badge.innerHTML = Array.from({ length: 3 }, (_, index) =>
            `<span class="mission-star" style="--star-index:${index}" aria-hidden="true">${completed ? '\u2605' : '\u2606'}</span>`
        ).join('');
    });
}

function completeCurrentGame(gameType = state.currentGame) {
    if (!gameType || state.completedGames.has(gameType)) return;
    state.completedGames.add(gameType);
    renderMissionStars();
}

function backToGames() {
    stopCurrentGame();
    $('#game-play-area').style.display = 'none';
    $('#games-section').style.display = 'block';
    $('#games-section').scrollIntoView({ behavior: 'smooth' });
}

// â”€â”€â”€ Quiz Game â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function initQuizGame(container) {
    function nextQuestion() {
        const letters = Object.keys(LETTER_DATA);
        const correctLetter = letters[Math.floor(Math.random() * letters.length)];
        const correctData = LETTER_DATA[correctLetter];

        // Generate wrong options
        const options = [{ letter: correctLetter, emoji: correctData.emoji, word: correctData.word }];
        while (options.length < 4) {
            const rand = letters[Math.floor(Math.random() * letters.length)];
            if (!options.find(o => o.letter === rand)) {
                options.push({ letter: rand, emoji: LETTER_DATA[rand].emoji, word: LETTER_DATA[rand].word });
            }
        }

        // Shuffle
        options.sort(() => Math.random() - 0.5);

        container.innerHTML = `
            <div class="quiz-container">
                <p class="quiz-question">What letter does this word start with?</p>
                <div class="quiz-letter-display">${correctData.word}</div>
                <p class="quiz-question" style="font-size:20px; margin-bottom:20px;">Choose the first letter.</p>
                <div class="quiz-options">
                    ${options.map(o => `
                        <button class="quiz-option" data-letter="${o.letter}">${o.letter}</button>
                    `).join('')}
                </div>
            </div>
        `;

        container.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', () => {
                const chosen = btn.dataset.letter;
                container.querySelectorAll('.quiz-option').forEach(b => b.style.pointerEvents = 'none');

                if (chosen === correctLetter) {
                    btn.classList.add('correct');
                    state.gameScore += 10;
                    updateScore();
                    playSuccessSound();
                    showFeedback('Great job!', '#FFD700');
                    launchConfetti();
                } else {
                    btn.classList.add('wrong');
                    container.querySelector(`[data-letter="${correctLetter}"]`).classList.add('correct');
                    playWrongSound();
                    showFeedback('Almost! Try again!', '#FF6B6B');
                }

                setTimeout(nextQuestion, 2000);
            });
        });
    }

    nextQuestion();
}

// â”€â”€â”€ Bubble Pop Game â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function initBubbleGame(container) {
    const letters = Object.keys(LETTER_DATA);
    state.bubbleTarget = letters[Math.floor(Math.random() * letters.length)];

    container.innerHTML = `
        <div class="bubble-prompt">Pop the letter <strong>${state.bubbleTarget}</strong>!</div>
        <div class="bubble-container" id="bubble-field"></div>
    `;

    const field = container.querySelector('#bubble-field');
    let bubblesPopped = 0;

    function spawnBubble() {
        const isTarget = Math.random() < 0.3;
        const letter = isTarget ? state.bubbleTarget : letters[Math.floor(Math.random() * letters.length)];

        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const colorIndex = letter.charCodeAt(0) - 65;
        const color = LETTER_COLORS[colorIndex];
        bubble.style.background = `linear-gradient(145deg, ${color}, ${shadeColor(color, -20)})`;
        bubble.textContent = letter;

        const startX = 10 + Math.random() * 80;
        const endX = startX + (Math.random() - 0.5) * 30;
        const duration = 4 + Math.random() * 3;

        bubble.style.setProperty('--start-x', startX + '%');
        bubble.style.setProperty('--end-x', endX + '%');
        bubble.style.setProperty('--duration', duration + 's');
        bubble.style.left = startX + '%';

        bubble.addEventListener('click', () => {
            if (bubble.classList.contains('popped')) return;
            bubble.classList.add('popped');

            if (letter === state.bubbleTarget) {
                state.gameScore += 5;
                updateScore();
                playSuccessSound();
                bubblesPopped++;

                if (bubblesPopped >= 5) {
                    completeCurrentGame('bubbles');
                    // New target letter
                    bubblesPopped = 0;
                    state.bubbleTarget = letters[Math.floor(Math.random() * letters.length)];
                    container.querySelector('.bubble-prompt').innerHTML =
                        `Pop the letter <strong>${state.bubbleTarget}</strong>!`;
                    showFeedback('New letter!', '#FFD700');
                    launchConfetti();
                } else {
                    showFeedback('Nice!', '#58D68D');
                }
            } else {
                playWrongSound();
                showFeedback(`That's ${letter}! Find ${state.bubbleTarget}!`, '#FF6B6B');
            }

            setTimeout(() => bubble.remove(), 400);
        });

        field.appendChild(bubble);

        // Remove after animation ends
        setTimeout(() => {
            if (field.contains(bubble)) bubble.remove();
        }, duration * 1000);
    }

    state.bubbleInterval = setInterval(spawnBubble, 1200);
    spawnBubble();
}

// â”€â”€â”€ Memory Game â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function initMemoryGame(container) {
    // Pick 6 random letters for 12 cards (6 pairs)
    const letters = Object.keys(LETTER_DATA);
    const picked = [];
    while (picked.length < 6) {
        const l = letters[Math.floor(Math.random() * letters.length)];
        if (!picked.includes(l)) picked.push(l);
    }

    // Create pairs: letter + emoji
    const cards = [];
    picked.forEach(letter => {
        cards.push({ id: letter + '-letter', match: letter, display: letter, type: 'letter' });
        cards.push({ id: letter + '-word', match: letter, display: LETTER_DATA[letter].word, type: 'word' });
    });

    // Shuffle
    cards.sort(() => Math.random() - 0.5);

    state.memoryCards = cards;
    state.memoryFlipped = [];
    state.memoryMatched = 0;
    state.memoryLocked = false;

    container.innerHTML = `
        <p style="text-align:center; font-family:var(--font-display); font-size:20px; color:var(--clr-amber); margin-bottom:20px;">
            Match each letter to its word!
        </p>
        <div class="memory-grid">
            ${cards.map((card, i) => `
                <div class="memory-card" data-index="${i}" data-match="${card.match}" id="mem-card-${i}">
                    <div class="memory-card-inner">
                        <div class="memory-card-front">?</div>
                        <div class="memory-card-back">${card.display}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    container.querySelectorAll('.memory-card').forEach(card => {
        card.addEventListener('click', () => handleMemoryClick(card, container));
    });
}

function handleMemoryClick(card, container) {
    if (state.memoryLocked) return;
    if (card.classList.contains('flipped') || card.classList.contains('matched')) return;

    card.classList.add('flipped');
    playClickSound();
    state.memoryFlipped.push(card);

    if (state.memoryFlipped.length === 2) {
        state.memoryLocked = true;
        const [c1, c2] = state.memoryFlipped;

        if (c1.dataset.match === c2.dataset.match) {
            // Match!
            setTimeout(() => {
                c1.classList.add('matched');
                c2.classList.add('matched');
                state.memoryMatched++;
                state.gameScore += 15;
                updateScore();
                playSuccessSound();

                if (state.memoryMatched === 6) {
                    completeCurrentGame('memory');
                    showFeedback('You win!', '#FFD700');
                    launchConfetti();
                    setTimeout(() => initMemoryGame(container), 3000);
                } else {
                    showFeedback('Match!', '#58D68D');
                }

                state.memoryFlipped = [];
                state.memoryLocked = false;
            }, 500);
        } else {
            // No match
            setTimeout(() => {
                c1.classList.remove('flipped');
                c2.classList.remove('flipped');
                state.memoryFlipped = [];
                state.memoryLocked = false;
            }, 1000);
        }
    }
}

// â”€â”€â”€ Matching Game â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function initMatchingGame(container) {
    const letters = Object.keys(LETTER_DATA);
    const picked = [];
    while (picked.length < 4) {
        const l = letters[Math.floor(Math.random() * letters.length)];
        if (!picked.includes(l)) picked.push(l);
    }

    const emojis = picked.map(l => ({ letter: l, emoji: LETTER_DATA[l].emoji, word: LETTER_DATA[l].word }));
    const shuffledEmojis = [...emojis].sort(() => Math.random() - 0.5);

    container.innerHTML = `
        <p style="text-align:center; font-family:var(--font-display); font-size:20px; color:var(--clr-amber); margin-bottom:24px;">
            Choose a letter, then choose the matching word.
        </p>
        <div style="display:flex; justify-content:space-around; align-items:flex-start; max-width:600px; margin:0 auto; flex-wrap:wrap; gap:20px;">
            <div style="display:flex; flex-direction:column; gap:16px;">
                ${picked.map(l => `
                    <button class="quiz-option match-letter" data-letter="${l}" style="min-width:80px; font-size:28px;">
                        ${l}
                    </button>
                `).join('')}
            </div>
            <div style="display:flex; flex-direction:column; gap:16px;">
                ${shuffledEmojis.map(e => `
                    <button class="quiz-option match-emoji" data-letter="${e.letter}" style="min-width:80px; font-size:28px;">
                        ${e.word}
                    </button>
                `).join('')}
            </div>
        </div>
    `;

    let selectedLetter = null;
    let matched = 0;

    container.querySelectorAll('.match-letter').forEach(btn => {
        btn.addEventListener('click', () => {
            container.querySelectorAll('.match-letter').forEach(b => b.style.borderColor = 'rgba(255,255,255,0.15)');
            btn.style.borderColor = '#FDB813';
            selectedLetter = btn.dataset.letter;
            playClickSound();
        });
    });

    container.querySelectorAll('.match-emoji').forEach(btn => {
        btn.addEventListener('click', () => {
            if (!selectedLetter) {
                showFeedback('Pick a letter first!', '#FFB300');
                return;
            }
            if (btn.dataset.letter === selectedLetter) {
                btn.classList.add('correct');
                container.querySelector(`.match-letter[data-letter="${selectedLetter}"]`).classList.add('correct');
                btn.style.pointerEvents = 'none';
                container.querySelector(`.match-letter[data-letter="${selectedLetter}"]`).style.pointerEvents = 'none';
                state.gameScore += 10;
                updateScore();
                playSuccessSound();
                matched++;
                if (matched === 4) {
                    completeCurrentGame('matching');
                    showFeedback('Perfect!', '#FFD700');
                    launchConfetti();
                    setTimeout(() => initMatchingGame(container), 2500);
                } else {
                    showFeedback('Correct!', '#58D68D');
                }
                selectedLetter = null;
            } else {
                btn.classList.add('wrong');
                playWrongSound();
                showFeedback('Try again!', '#FF6B6B');
                setTimeout(() => btn.classList.remove('wrong'), 500);
            }
        });
    });
}

// â”€â”€â”€ ABC Order Game â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function initOrderGame(container) {
    // Pick a random starting index for 5 consecutive letters
    const allLetters = Object.keys(LETTER_DATA);
    const start = Math.floor(Math.random() * (allLetters.length - 5));
    const correctOrder = allLetters.slice(start, start + 5);
    const shuffled = [...correctOrder].sort(() => Math.random() - 0.5);

    container.innerHTML = `
        <p style="text-align:center; font-family:var(--font-display); font-size:20px; color:var(--clr-amber); margin-bottom:24px;">
            Put these letters in ABC order!
        </p>
        <div id="order-slots" style="display:flex; justify-content:center; gap:12px; margin-bottom:24px; min-height:80px; flex-wrap:wrap;">
            ${correctOrder.map((_, i) => `
                <div class="quiz-option" style="min-width:60px; min-height:60px; font-size:28px; opacity:0.3; display:flex; align-items:center; justify-content:center;" id="slot-${i}" data-index="${i}">
                    ?
                </div>
            `).join('')}
        </div>
        <div id="order-choices" style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
            ${shuffled.map(l => `
                <button class="quiz-option order-choice" data-letter="${l}" style="min-width:60px; font-size:28px;">
                    ${l}
                </button>
            `).join('')}
        </div>
    `;

    let nextSlot = 0;

    container.querySelectorAll('.order-choice').forEach(btn => {
        btn.addEventListener('click', () => {
            const letter = btn.dataset.letter;
            if (letter === correctOrder[nextSlot]) {
                const slot = container.querySelector(`#slot-${nextSlot}`);
                slot.textContent = letter;
                slot.style.opacity = '1';
                slot.classList.add('correct');
                btn.style.display = 'none';
                state.gameScore += 5;
                updateScore();
                playSuccessSound();
                nextSlot++;

                if (nextSlot === correctOrder.length) {
                    completeCurrentGame('order');
                    showFeedback('Perfect order!', '#FFD700');
                    launchConfetti();
                    setTimeout(() => initOrderGame(container), 2500);
                }
            } else {
                btn.classList.add('wrong');
                playWrongSound();
                showFeedback(`Try ${correctOrder[nextSlot]}!`, '#FF6B6B');
                setTimeout(() => btn.classList.remove('wrong'), 500);
            }
        });
    });
}

// â”€â”€â”€ Color Letters Game â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function initColorGame(container) {
    const letters = Object.keys(LETTER_DATA);
    const letter = letters[Math.floor(Math.random() * letters.length)];
    const colors = [
        { name: 'red', value: '#EF5350' },
        { name: 'blue', value: '#42A5F5' },
        { name: 'orange', value: '#FFA726' },
        { name: 'coral', value: '#FF8A65' },
        { name: 'pink', value: '#EC407A' },
        { name: 'yellow', value: '#FFCA28' },
        { name: 'teal', value: '#26C6DA' },
        { name: 'navy', value: '#5C6BC0' }
    ];

    container.innerHTML = `
        <div class="color-game">
            <p class="color-game-title">
                Pick a color and tap the letter to paint it!
            </p>
            <div class="color-palette" role="group" aria-label="Color choices">
                ${colors.map((c, index) => `
                    <button class="color-pick${index === 0 ? ' selected' : ''}" type="button" data-color="${c.value}" aria-label="Pick ${c.name}" title="${c.name}" style="background:${c.value};"></button>
                `).join('')}
            </div>
            <div id="color-letter" class="color-letter">
                ${letter}
            </div>
            <button id="color-next" class="sing-btn color-next">
                <span>Next Letter</span>
            </button>
        </div>
    `;

    let selectedColor = colors[0].value;
    let hasPainted = false;
    const letterEl = container.querySelector('#color-letter');

    const paintLetter = () => {
        letterEl.style.color = selectedColor;
        letterEl.style.setProperty('-webkit-text-stroke', `3px ${selectedColor}`);
        letterEl.style.textShadow = `0 0 30px ${selectedColor}40`;
        playSuccessSound();
        if (!hasPainted) {
            state.gameScore += 2;
            updateScore();
            hasPainted = true;
        }
    };

    container.querySelectorAll('.color-pick').forEach(btn => {
        btn.addEventListener('click', () => {
            selectedColor = btn.dataset.color;
            container.querySelectorAll('.color-pick').forEach(b => {
                b.classList.remove('selected');
            });
            btn.classList.add('selected');
            btn.style.transform = 'scale(1.2)';
            setTimeout(() => btn.style.transform = 'scale(1)', 200);
            paintLetter();
        });
    });

    letterEl.addEventListener('click', paintLetter);

    container.querySelector('#color-next').addEventListener('click', () => initColorGame(container));
}

// â”€â”€â”€ Sing Along â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function initSingLetters() {
    const container = $('#sing-letters');
    container.innerHTML = '';
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(letter => {
        const el = document.createElement('div');
        el.className = 'sing-letter';
        el.textContent = letter;
        el.id = `sing-${letter}`;
        container.appendChild(el);
    });
}

function getCurrentSong() {
    return SONG_LIBRARY[state.currentSong] || SONG_LIBRARY['abc-rock'];
}

function setActiveSong(songId) {
    state.currentSong = SONG_LIBRARY[songId] ? songId : 'abc-rock';
    $$('.song-card').forEach(card => {
        card.classList.toggle('active', card.dataset.song === state.currentSong);
    });
    $('#karaoke-line').textContent = `${getCurrentSong().title} is ready. Press Replay or choose another song.`;
}

function initSongCards() {
    Object.entries(SONG_LIBRARY).forEach(([songId, song]) => {
        const fallbackSelector = songId === 'planet-party' ? '.song-card-wide' : songId === 'vowel-pop' ? '.song-card-locked' : null;
        const card = $(`#${song.cardId}`) || (fallbackSelector ? $(fallbackSelector) : null);
        if (!card) return;
        card.id = song.cardId;
        card.dataset.song = songId;
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.removeAttribute('aria-hidden');
        card.classList.remove('song-card-locked');
        const art = card.querySelector('.song-art, .lock-icon');
        const title = card.querySelector('strong');
        const detail = card.querySelector('small');
        if (art) {
            art.className = `song-art ${SONG_ART_CLASSES[songId] || 'song-art-nebula'}`;
            art.textContent = song.art;
        }
        if (title) title.textContent = song.title;
        if (detail) detail.textContent = song.detail;
    });
    setActiveSong('abc-rock');
}

function openSongMode(songId) {
    const song = SONG_LIBRARY[songId];
    if (!song) return;

    stopSinging(false);
    stopSongVideo(false);
    state.pendingSongChoice = songId;
    setActiveSong(songId);
    $('#song-mode-song-title').textContent = song.title;
    const modal = $('#song-mode-modal');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    $('#song-mode-sing').focus();
}

function closeSongMode() {
    const modal = $('#song-mode-modal');
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
}

function stopSongVideo(resetText = true) {
    const video = $('#song-video');
    const stage = $('#song-video-stage');
    state.videoSong = null;
    if (video) {
        video.pause();
        video.removeAttribute('src');
        video.load();
    }
    if (stage) stage.hidden = true;
    if (state.karaokeSyncRAF) { cancelAnimationFrame(state.karaokeSyncRAF); state.karaokeSyncRAF = null; }
    if ($('#song-video-status')) $('#song-video-status').textContent = '';
    if (resetText) {
        $('.song-library').style.display = '';
        $('#sing-letters').style.display = 'none';
        $$('.sing-letter').forEach(el => el.classList.remove('highlighted', 'done'));
        $('#karaoke-line').textContent = 'Choose a song to start singing!';
    }
}

async function startSongVideo(songId = state.currentSong || 'abc-rock') {
    const song = SONG_LIBRARY[songId];
    if (!song) return;

    stopSinging(false);
    stopSongVideo(false);
    setActiveSong(songId);
    state.videoSong = songId;
    $('#sing-controls').style.display = 'none';
    $('.song-library').style.display = 'none';
    $('#sing-letters').style.display = '';
    $$('.sing-letter').forEach(el => el.classList.remove('highlighted', 'done'));

    const stage = $('#song-video-stage');
    const video = $('#song-video');
    const status = $('#song-video-status');
    $('#song-video-title').textContent = song.title;
    status.textContent = `Loading ${song.title} video...`;
    stage.hidden = false;
    stage.scrollIntoView({ behavior: 'smooth', block: 'start' });
    video.muted = !state.soundEnabled;
    video.src = `assets/video/${song.videoFile}`;
    video.load();

    try {
        await video.play();
    } catch (error) {
        if (state.videoSong === songId && !video.error) {
            status.textContent = 'Press play when you are ready to watch and sing.';
        }
    }
}

async function startSinging(songId = state.currentSong || 'abc-rock', options = {}) {
    stopSongVideo(false);
    if (state.singing) stopSinging(false);
    setActiveSong(songId);
    state.singing = true;
    $('#sing-letters').style.display = '';
    $('#sing-controls').style.display = '';

    // Reset all letters
    $$('.sing-letter').forEach(el => {
        el.classList.remove('highlighted', 'done');
    });

    const song = getCurrentSong();
    const speedMultiplier = options.slow || song.slow ? 1.8 : 1;
    let lineIndex = 0;

    const playedSongFile = await playSongAudio(song.audioFile);
    if (playedSongFile) {
        scheduleKaraokeSong(song, speedMultiplier);
        if (state.songAudio) {
            state.songAudio.onended = () => {
                if (!state.singing) return;
                state.singing = false;
                clearKaraokeTimers();
                $('#karaoke-line').textContent = `Great singing! ${song.title} is complete.`;
                showFeedback('Great singing!', '#FFD700');
                playPartyPopSound();
                launchConfetti();
            };
        }
        return;
    }

    function playLine() {
        if (lineIndex >= song.lines.length || !state.singing) {
            state.singing = false;
            if (lineIndex >= song.lines.length) {
                $('#karaoke-line').textContent = `Great singing! ${song.title} is complete.`;
                showFeedback('Great singing!', '#FFD700');
                playPartyPopSound();
                launchConfetti();
            }
            return;
        }

        const line = song.lines[lineIndex];

        // Highlight each letter in sequence and SPEAK it
        const letters = line.letters;
        const letterDelay = (line.duration * speedMultiplier) / (letters.length + 1);
        scheduleKaraokeLine(line, line.duration * speedMultiplier);
        scheduleSongBacking(state.currentSong, line.duration, speedMultiplier);
        speak(line.text);

        letters.forEach((letter, i) => {
            setTimeout(() => {
                if (!state.singing) return;
                const singEl = $(`#sing-${letter}`);
                if (singEl) {
                    $$('.sing-letter.highlighted').forEach(el => {
                        el.classList.remove('highlighted');
                        el.classList.add('done');
                    });
                    singEl.classList.add('highlighted');
                    // Play the letter tone
                    playLetterSound(letter);
                }
            }, i * letterDelay);
        });

        lineIndex++;
        state.singTimeout = setTimeout(playLine, line.duration * speedMultiplier);
    }

    playLine();
}

function stopSinging(resetText = true) {
    state.singing = false;
    clearSongBacking();
    clearKaraokeTimers();
    if (state.karaokeSyncRAF) {
        cancelAnimationFrame(state.karaokeSyncRAF);
        state.karaokeSyncRAF = null;
    }
    if (state.songAudio) {
        state.songAudio.pause();
        state.songAudio.currentTime = 0;
        state.songAudio = null;
    }
    if (state.singTimeout) {
        clearTimeout(state.singTimeout);
        state.singTimeout = null;
    }
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
    if (resetText) {
        $('#karaoke-line').textContent = 'Choose a song to start singing!';
        $('#sing-letters').style.display = 'none';
        $('#sing-controls').style.display = 'none';
    }
    $$('.sing-letter').forEach(el => {
        el.classList.remove('highlighted', 'done');
    });
}

// â”€â”€â”€ Tracing â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function initTracing() {
    const canvas = $('#trace-canvas');
    const ctx = canvas.getContext('2d');

    function getPosition(e) {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        if (e.touches) {
            return {
                x: (e.touches[0].clientX - rect.left) * scaleX,
                y: (e.touches[0].clientY - rect.top) * scaleY
            };
        }
        return {
            x: (e.clientX - rect.left) * scaleX,
            y: (e.clientY - rect.top) * scaleY
        };
    }

    function drawLetterGuide() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#f0f0f0';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw guide letter
        const letter = state.isUppercase ? state.currentLetter : state.currentLetter.toLowerCase();
        ctx.font = 'bold 200px "Baloo 2", cursive';
        ctx.fillStyle = 'rgba(0, 0, 0, 0.07)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(letter, canvas.width / 2, canvas.height / 2);

        // Dotted outline
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.12)';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.strokeText(letter, canvas.width / 2, canvas.height / 2);
        ctx.setLineDash([]);

        // Draw numbered stroke guides
        drawStrokeGuides(ctx, state.currentLetter);
    }

    function startDraw(e) {
        e.preventDefault();
        state.isDrawing = true;
        const pos = getPosition(e);
        state.lastX = pos.x;
        state.lastY = pos.y;
    }

    function draw(e) {
        if (!state.isDrawing) return;
        e.preventDefault();
        const pos = getPosition(e);

        ctx.beginPath();
        ctx.moveTo(state.lastX, state.lastY);
        ctx.lineTo(pos.x, pos.y);
        ctx.strokeStyle = LETTER_DATA[state.currentLetter]?.color || '#EF5350';
        ctx.lineWidth = 6;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.setLineDash([]);
        ctx.stroke();

        state.lastX = pos.x;
        state.lastY = pos.y;
    }

    function stopDraw() {
        state.isDrawing = false;
    }

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDraw);
    canvas.addEventListener('mouseleave', stopDraw);
    canvas.addEventListener('touchstart', startDraw, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    canvas.addEventListener('touchend', stopDraw);

    // Store drawLetterGuide for later use
    canvas._drawGuide = drawLetterGuide;
}

function drawStrokeGuides(ctx, letter) {
    const strokes = LETTER_STROKES[letter];
    if (!strokes) return;

    const colors      = ['#4CAF50', '#FF9800', '#2196F3', '#E91E63'];
    const colorsFaint = ['rgba(76,175,80,0.45)', 'rgba(255,152,0,0.45)', 'rgba(33,150,243,0.45)', 'rgba(233,30,99,0.45)'];

    strokes.forEach((points, si) => {
        if (points.length < 2) return;
        const color      = colors[si % colors.length];
        const colorFaint = colorsFaint[si % colorsFaint.length];

        // Dashed guide path
        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        for (let i = 1; i < points.length; i++) ctx.lineTo(points[i][0], points[i][1]);
        ctx.strokeStyle = colorFaint;
        ctx.lineWidth = 3.5;
        ctx.setLineDash([9, 6]);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
        ctx.setLineDash([]);

        // Arrowhead at end
        const last = points[points.length - 1];
        const prev = points[points.length - 2];
        const angle = Math.atan2(last[1] - prev[1], last[0] - prev[0]);
        const aLen = 13;
        ctx.beginPath();
        ctx.moveTo(last[0], last[1]);
        ctx.lineTo(last[0] - aLen * Math.cos(angle - Math.PI / 6), last[1] - aLen * Math.sin(angle - Math.PI / 6));
        ctx.moveTo(last[0], last[1]);
        ctx.lineTo(last[0] - aLen * Math.cos(angle + Math.PI / 6), last[1] - aLen * Math.sin(angle + Math.PI / 6));
        ctx.strokeStyle = color;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Numbered start dot
        const start = points[0];
        ctx.beginPath();
        ctx.arc(start[0], start[1], 14, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.fillStyle = 'white';
        ctx.font = 'bold 13px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText((si + 1).toString(), start[0], start[1]);
    });
}

function showTracing() {
    const tracingArea = $('#tracing-area');
    tracingArea.style.display = 'block';
    const canvas = $('#trace-canvas');
    if (canvas._drawGuide) canvas._drawGuide();
}

function clearTrace() {
    const canvas = $('#trace-canvas');
    if (canvas._drawGuide) canvas._drawGuide();
}

function doneTracing() {
    $('#tracing-area').style.display = 'none';
    playSuccessSound();
    showFeedback('Beautiful!', '#FFD700');
    launchConfetti();
}

// â”€â”€â”€ Facts Carousel â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function initFacts() {
    state.factInterval = setInterval(() => {
        nextFact();
    }, 5000);
}

function nextFact() {
    const cards = $$('.fact-card');
    const dots = $$('.fact-dot');

    cards[state.factIndex].classList.remove('active');
    dots[state.factIndex].classList.remove('active');

    state.factIndex = (state.factIndex + 1) % cards.length;

    cards[state.factIndex].classList.add('active');
    dots[state.factIndex].classList.add('active');
}

// â”€â”€â”€ Event Listeners â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function bindEvents() {
    // Navigation
    $$('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            playClickSound();
            navigateToSection(btn.dataset.section);
        });
    });
    window.addEventListener('scroll', updateNavFromScroll, { passive: true });
    window.addEventListener('resize', updateNavFromScroll);
    window.addEventListener('hashchange', updateNavFromScroll);

    // Logo click -> refresh
    $('#logo').addEventListener('click', () => window.location.reload());

    // Sound toggle
    $('#sound-toggle').addEventListener('click', () => {
        state.soundEnabled = !state.soundEnabled;
        $('.sound-on').style.display = state.soundEnabled ? 'inline' : 'none';
        $('.sound-off').style.display = state.soundEnabled ? 'none' : 'inline';
        if (state.songAudio) {
            state.songAudio.muted = !state.soundEnabled;
        }
        if ($('#song-video')) {
            $('#song-video').muted = !state.soundEnabled;
        }
        if (!state.soundEnabled && 'speechSynthesis' in window) {
            window.speechSynthesis.cancel();
        }
    });

    // Modal controls
    $('#modal-close').addEventListener('click', closeModal);
    $('#modal-backdrop').addEventListener('click', closeModal);

    // Case toggle
    $('#uppercase-btn').addEventListener('click', () => {
        state.isUppercase = true;
        $('#uppercase-btn').classList.add('active');
        $('#lowercase-btn').classList.remove('active');
        updateLetterDisplay(state.currentLetter);
        playClickSound();
    });

    $('#lowercase-btn').addEventListener('click', () => {
        state.isUppercase = false;
        $('#lowercase-btn').classList.add('active');
        $('#uppercase-btn').classList.remove('active');
        updateLetterDisplay(state.currentLetter);
        playClickSound();
    });

    // Play sound button
    $('#play-sound-btn').addEventListener('click', async () => {
        if (state.currentLetter) {
            await playDisplayedSound(state.currentLetter);
        }
    });

    // Prev/Next letter
    $('#btn-prev').addEventListener('click', () => {
        if (!state.currentLetter) return;
        const idx = state.currentLetter.charCodeAt(0) - 65;
        const prev = idx > 0 ? String.fromCharCode(65 + idx - 1) : 'Z';
        openLetter(prev);
        playClickSound();
    });

    $('#btn-next').addEventListener('click', () => {
        if (!state.currentLetter) return;
        const idx = state.currentLetter.charCodeAt(0) - 65;
        const next = idx < 25 ? String.fromCharCode(65 + idx + 1) : 'A';
        openLetter(next);
        playClickSound();
    });

    // Practice / Trace
    $('#btn-practice').addEventListener('click', () => {
        showTracing();
        playClickSound();
    });

    $('#btn-clear').addEventListener('click', () => {
        clearTrace();
        playClickSound();
    });

    $('#btn-done').addEventListener('click', doneTracing);

    // Games
    $$('.game-card').forEach(card => {
        card.addEventListener('click', () => {
            playClickSound();
            startGame(card.dataset.game);
        });
    });

    // Game back button
    $('#game-back-btn').addEventListener('click', () => {
        playClickSound();
        backToGames();
    });

    // Sing along
    $('#sing-play-btn').addEventListener('click', () => {
        playClickSound();
        startSinging(state.currentSong || 'abc-rock');
    });

    // Slow button removed

    $('#sing-stop-btn').addEventListener('click', () => {
        playClickSound();
        stopSinging();
        stopSongVideo();
    });

    $$('.song-card').forEach(card => {
        card.addEventListener('click', () => {
            const songId = card.dataset.song;
            if (!songId) return;
            card.classList.remove('song-card-pulse');
            void card.offsetWidth;
            card.classList.add('song-card-pulse');
            setTimeout(() => card.classList.remove('song-card-pulse'), 450);
            playClickSound();
            openSongMode(songId);
        });
    });

    $('#song-mode-sing').addEventListener('click', () => {
        const songId = state.pendingSongChoice || state.currentSong || 'abc-rock';
        closeSongMode();
        startSinging(songId);
    });

    $('#song-mode-watch').addEventListener('click', () => {
        const songId = state.pendingSongChoice || state.currentSong || 'abc-rock';
        closeSongMode();
        startSongVideo(songId);
    });

    $('#song-mode-close').addEventListener('click', closeSongMode);
    $('#song-mode-overlay').addEventListener('click', closeSongMode);
    $('#song-video-close').addEventListener('click', () => stopSongVideo());

    $('#song-video').addEventListener('playing', () => {
        const song = SONG_LIBRARY[state.videoSong];
        if (!song) return;
        $('#song-video-status').textContent = '';
        const pauseBtn = $('#video-pause-btn');
        if (pauseBtn) { pauseBtn.querySelector('span:last-child').textContent = 'Pause'; pauseBtn.querySelector('.btn-icon').textContent = '⏸'; }
        startVideoKaraokeSync(song, $('#song-video'));
    });

    $('#song-video').addEventListener('pause', () => {
        if (state.karaokeSyncRAF) { cancelAnimationFrame(state.karaokeSyncRAF); state.karaokeSyncRAF = null; }
        const pauseBtn = $('#video-pause-btn');
        if (pauseBtn) { pauseBtn.querySelector('span:last-child').textContent = 'Play'; pauseBtn.querySelector('.btn-icon').textContent = '▶'; }
    });

    $('#video-pause-btn').addEventListener('click', () => {
        playClickSound();
        const video = $('#song-video');
        if (video.paused) video.play(); else video.pause();
    });

    $('#song-video').addEventListener('error', () => {
        const song = SONG_LIBRARY[state.videoSong];
        if (!song) return;
        $('#song-video-status').textContent = 'This cosmic video is coming soon!';
        $('#karaoke-line').textContent = `${song.title} video is not available yet.`;
    });

    $('#song-video').addEventListener('ended', () => {
        const song = SONG_LIBRARY[state.videoSong];
        if (!song) return;
        if (state.karaokeSyncRAF) { cancelAnimationFrame(state.karaokeSyncRAF); state.karaokeSyncRAF = null; }
        $('#song-video-status').textContent = `Great singing! ${song.title} is complete.`;
        launchConfetti();
    });

    // Facts dots
    $$('.fact-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            const idx = parseInt(dot.dataset.fact);
            $$('.fact-card').forEach(c => c.classList.remove('active'));
            $$('.fact-dot').forEach(d => d.classList.remove('active'));
            $$('.fact-card')[idx].classList.add('active');
            dot.classList.add('active');
            state.factIndex = idx;
        });
    });

    // Parents / Teachers modals
    ['#footer-parents', '#footer-teachers'].forEach(selector => {
        const footerButton = $(selector);
        if (footerButton) {
            footerButton.addEventListener('click', () => {
                $('#parents-modal').style.display = 'flex';
            });
        }
    });
    $('#parents-close').addEventListener('click', () => {
        $('#parents-modal').style.display = 'none';
    });
    $('#parents-overlay').addEventListener('click', () => {
        $('#parents-modal').style.display = 'none';
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeSongMode();
            $('#parents-modal').style.display = 'none';
        }

        // If a letter key is pressed and no modal is open
        const letter = e.key.toUpperCase();
        if (/^[A-Z]$/.test(letter) && !$('#letter-modal').classList.contains('open')) {
            openLetter(letter);
        }
    });
}

// â”€â”€â”€ Initialize â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
function init() {
    initAlphabetGrid();
    initSingLetters();
    initSongCards();
    renderMissionStars();
    initTracing();
    initFacts();
    bindEvents();
    updateNavFromScroll();

    // Load speech synthesis voices
    if ('speechSynthesis' in window) {
        window.speechSynthesis.getVoices();
        window.speechSynthesis.onvoiceschanged = () => {
            window.speechSynthesis.getVoices();
        };
    }

    // Welcome message after a short delay
    setTimeout(() => {
        speak('Welcome to A B C Buddy! Tap a letter to start learning!');
    }, 1500);
}

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', init);
