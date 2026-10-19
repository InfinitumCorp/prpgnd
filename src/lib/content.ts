export const nav = [
  { href: "#work", id: "work", label: "Work" },
  { href: "#practice", id: "practice", label: "Practice" },
  { href: "#signal", id: "signal", label: "Signal" },
  { href: "#studio", id: "studio", label: "Studio" },
] as const;

export const cycles = [
  "Campaigns for a city that already has the volume up.",
  "One line, then the media, the page, and the follow-through.",
  "Built in Washington. Heard wherever the audience actually is.",
];

export const marquee = [
  "MAKE YOURSELF HEARD",
  "WASHINGTON, DC",
  "DIGITAL MARKETING",
  "PAID",
  "EARNED",
  "OWNED",
];

export const practice = [
  {
    n: "01",
    title: "Strategy",
    body: "The argument before the assets. Positioning, the audience, and the one line the work is not allowed to wander from.",
  },
  {
    n: "02",
    title: "Media",
    body: "Search, social, and the budget math. Spend follows the sentence — not a platform the room happens to like this quarter.",
  },
  {
    n: "03",
    title: "Creative",
    body: "Film, stills, type, and pages that sound like the same mouth. If it could belong to anyone, it does not ship.",
  },
  {
    n: "04",
    title: "Social",
    body: "Not a content calendar. A system: what you say, what you never say, and how fast you answer when the city answers back.",
  },
  {
    n: "05",
    title: "Sites",
    body: "Launch pages and brand sites built to convert a warm stranger in one sitting. Fast, legible, and on the line.",
  },
  {
    n: "06",
    title: "Narrative",
    body: "Reputation and the moment a story starts moving without you. We write the correction before the correction writes itself.",
  },
] as const;

export type Sector = "Commerce" | "B2B" | "Civic" | "Culture";

export type WorkItem = {
  id: string;
  sector: Sector;
  place: string;
  client: string;
  title: string;
  story: string;
  channels: string[];
  heard: string;
};

export const work: WorkItem[] = [
  {
    id: "harbor",
    sector: "Commerce",
    place: "Navy Yard",
    client: "Harbor & Rye",
    title: "A waterfront room that filled on a Tuesday.",
    story:
      "A new dining room on the river needed a crowd before the critics arrived. We named the night, seeded the neighborhood, and treated reservations like a launch, not a listing.",
    channels: ["Paid social", "Local search", "Creator seeding"],
    heard: "The first six weekends booked before a single review landed.",
  },
  {
    id: "northline",
    sector: "B2B",
    place: "Downtown",
    client: "Northline",
    title: "A contractor that stopped sounding like a capability statement.",
    story:
      "Federal buyers skim. We threw out the adjective stack, rebuilt the argument around one proof, and aimed every page and placement at the people who actually award the work.",
    channels: ["Thought leadership", "LinkedIn", "Site"],
    heard: "The pipeline started with a sentence a buyer could repeat in a meeting.",
  },
  {
    id: "ward",
    sector: "Civic",
    place: "Citywide",
    client: "Ward Light",
    title: "A civic effort that needed neighbors, not a slogan.",
    story:
      "Nonpartisan, local, and easy to ignore. We traded broad awareness for a message a resident could say out loud to the person next door — then put it on the channels they already open.",
    channels: ["Community", "Paid social", "Explainers"],
    heard: "The ask got simpler. The response got specific.",
  },
  {
    id: "vale",
    sector: "Culture",
    place: "Georgetown",
    client: "Atelier Vale",
    title: "A beautiful room with a quiet website.",
    story:
      "The store already had taste. The site did not. We rebuilt the digital visit so it felt like stepping off M Street — then pointed media at the one collection worth a trip.",
    channels: ["Brand site", "Paid social", "Editorial"],
    heard: "Online started behaving like the shop floor: fewer browsers, more buyers.",
  },
];

export const sectors = ["All", "Commerce", "B2B", "Civic", "Culture"] as const;

export const aims = [
  {
    id: "launch",
    label: "Launch",
    line: "Something new needs a first audience.",
  },
  {
    id: "shift",
    label: "Reposition",
    line: "The story people tell about you is the wrong one.",
  },
  {
    id: "mobilize",
    label: "Mobilize",
    line: "You need a specific public to move.",
  },
  {
    id: "defend",
    label: "Hold the line",
    line: "A narrative is getting away from you.",
  },
] as const;

export const rooms = [
  { id: "hill", label: "The Hill" },
  { id: "city", label: "The city" },
  { id: "buyers", label: "Buyers" },
  { id: "donors", label: "Donors" },
] as const;

export const volumes = [
  { id: "whisper", label: "Whisper", detail: "Precise. Senior. Earned." },
  { id: "speak", label: "Speak", detail: "Always on. Visible. Steady." },
  { id: "shout", label: "Shout", detail: "A moment. Then hold." },
] as const;

export type AimId = (typeof aims)[number]["id"];
export type RoomId = (typeof rooms)[number]["id"];
export type VolumeId = (typeof volumes)[number]["id"];

const codenames: Record<AimId, Record<RoomId, string>> = {
  launch: {
    hill: "First Reading",
    city: "Opening Night",
    buyers: "Market Entry",
    donors: "Founding Ask",
  },
  shift: {
    hill: "Revised Markup",
    city: "New Address",
    buyers: "Category Reset",
    donors: "Second Act",
  },
  mobilize: {
    hill: "Whip Count",
    city: "Street Level",
    buyers: "Full Room",
    donors: "The Ask",
  },
  defend: {
    hill: "Hold the Record",
    city: "Local Truth",
    buyers: "Steady Signal",
    donors: "Quiet Majority",
  },
};

const score: Record<VolumeId, [string, string, string]> = {
  whisper: [
    "A private briefing and a one-page argument, circulated before anything is public.",
    "Earned placements in the few rooms your audience already trusts.",
    "A quiet site update so the sentence is there the moment someone searches.",
  ],
  speak: [
    "A campaign line, a landing page, and a four-week system built from that same line.",
    "Always-on media against search and the two social rooms that actually convert.",
    "A monthly read: what was heard, what was ignored, and what changes.",
  ],
  shout: [
    "Two weeks of saturation — one film, one line, every channel saying it at once.",
    "Paid pointed at a single action, not a vague awareness goal.",
    "Then the volume drops, so the line survives the spike.",
  ],
};

export function transmission(aim: AimId, room: RoomId, volume: VolumeId) {
  const aimMeta = aims.find((item) => item.id === aim)!;
  const roomMeta = rooms.find((item) => item.id === room)!;
  const volumeMeta = volumes.find((item) => item.id === volume)!;
  return {
    name: codenames[aim][room],
    aim: aimMeta,
    room: roomMeta,
    volume: volumeMeta,
    moves: score[volume],
  };
}

export function briefText(aim: AimId, room: RoomId, volume: VolumeId) {
  const card = transmission(aim, room, volume);
  return [
    `Transmission: ${card.name}`,
    `${card.aim.label} · ${card.room.label} · ${card.volume.label}`,
    "",
    card.aim.line,
    "",
    ...card.moves.map((move, index) => `0${index + 1}  ${move}`),
  ].join("\n");
}
