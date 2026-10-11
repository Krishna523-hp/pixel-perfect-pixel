import { photos, type Photo } from "./photos";

export type Destination = {
  slug: string;
  name: string;
  category: string;
  short: string;
  intro: string;
  about: string[];
  history: string[];
  significance: string;
  image: Photo | null;
  image2?: Photo | null;
};

export const destinations: Destination[] = [
  {
    slug: "curzon-gate",
    name: "Curzon Gate",
    category: "Royal Heritage",
    short: "The grand ceremonial arch at the heart of Bardhaman, also known as Bijoy Toran.",
    intro:
      "Rising over one of the town's busiest crossings, Curzon Gate is the most recognisable landmark of Bardhaman and a symbol of the city's royal past.",
    about: [
      "The gate is a large ceremonial archway built in a European classical style, with a broad central arch, ornamental pillars and sculpted figures crowning the top. It stands where Bijay Chand Road meets the Grand Trunk Road, so nearly every visitor to the town passes beneath or beside it.",
      "In the evenings the surrounding market streets fill with people, making the gate as much a part of daily life as it is a monument.",
    ],
    history: [
      "The gate was built in the early twentieth century under Maharaja Bijay Chand Mahtab of the Burdwan Raj, and is associated with the visit of the Viceroy Lord Curzon to Bardhaman in 1904 — which is how it got its name.",
      "After Indian independence it was renamed Bijoy Toran, though most people still call it Curzon Gate.",
    ],
    significance:
      "Curzon Gate is the unofficial emblem of Bardhaman. It appears on local signs, photographs and souvenirs, and is the natural starting point for exploring the old royal town.",
    image: photos.curzon1,
    image2: photos.curzon2,
  },
  {
    slug: "bardhaman-palace",
    name: "Bardhaman Palace",
    category: "Royal Heritage",
    short: "The Rajbati — former seat of the Maharajas of the Burdwan Raj.",
    intro:
      "The Bardhaman Rajbati was the home of the Maharajas of Burdwan, one of the wealthiest zamindari estates of colonial Bengal.",
    about: [
      "The palace complex combines grand halls, courtyards and colonnades that reflect the blend of European and Indian tastes favoured by the Burdwan rulers. Its interiors were once known for ornate rooms, large staircases and decorative detail.",
      "Today the Rajbati is closely linked with the University of Burdwan, whose administrative offices occupy the palace campus. Visitors can view the buildings from the grounds.",
    ],
    history: [
      "The Burdwan Raj family rose to prominence in the seventeenth and eighteenth centuries and governed a vast estate under Mughal and later British rule. The Rajbati served as their principal residence in the town.",
      "After the abolition of zamindari, the palace and associated properties passed to public use, and the University of Burdwan, established in 1960, began functioning from the palace premises.",
    ],
    significance:
      "The palace is the centre of Bardhaman's royal story. Many of the town's temples, gardens and lakes were built or supported by the family that lived here.",
    image: photos.palace1,
    image2: null,
  },
  {
    slug: "108-shiva-temple",
    name: "108 Shiva Temple, Nawabhat",
    category: "Sacred Landmark",
    short: "A rare ring of 108 small Shiva temples arranged like a prayer rosary.",
    intro:
      "On the outskirts of the town at Nawabhat stands one of Bengal's most remarkable temple complexes: 108 Shiva shrines arranged in a single great ring.",
    about: [
      "The small temples, each in the traditional Bengal style with a curved roof, are placed side by side to form a circle, with each shrine housing a Shiva lingam. The layout is often compared to a japamala, the rosary of 108 beads used in prayer.",
      "Walking along the ring and through the open courtyard gives a strong sense of rhythm and symmetry that photographs cannot fully capture.",
    ],
    history: [
      "The complex dates from the late eighteenth century and is attributed to Maharani Bishnukumari of the Burdwan Raj family.",
      "It remains an active place of worship and draws large crowds during Shivaratri and the month of Shravan.",
    ],
    significance:
      "The number 108 is sacred in Hindu tradition. The temple ring gives that idea architectural form, making it a significant religious site and a striking example of Bengal temple building.",
    image: photos.shiva1,
    image2: photos.shiva2,
  },
  {
    slug: "sarbamangala-temple",
    name: "Sarbamangala Temple",
    category: "Sacred Landmark",
    short: "The town's most revered shrine to Goddess Sarbamangala, a nine-spired temple.",
    intro:
      "The Sarbamangala Temple is the principal place of worship for many in Bardhaman and one of the most important Shakti shrines of the district.",
    about: [
      "The temple is a nabaratna — a 'nine-jewelled' structure crowned by nine spires — a form associated with temple architecture in Bengal. The presiding deity is Goddess Sarbamangala, a form of Durga, worshipped through a small, ancient stone image.",
      "The temple courtyard hosts daily rituals, and the atmosphere becomes especially lively during Durga Puja and Navaratri.",
    ],
    history: [
      "The present temple was built under the patronage of the Burdwan Raj in the early eighteenth century. The deity is believed by devotees to be considerably older than the building itself.",
      "Over the centuries the temple has remained at the centre of the town's religious calendar.",
    ],
    significance:
      "For local residents the goddess is regarded as a guardian of the town, and the temple is often the first stop for pilgrims visiting Bardhaman.",
    image: photos.sarba1,
    image2: photos.sarba2,
  },
  {
    slug: "kankaleshwari-temple",
    name: "Kankaleshwari Kali Temple",
    category: "Sacred Landmark",
    short: "A nine-spired temple at Kanchannagar housing a striking stone image of the goddess.",
    intro:
      "In the Kanchannagar area of Bardhaman, near the Damodar, the Kankaleshwari Temple is known for its unusual and powerful image of the goddess.",
    about: [
      "The temple is built in the nabaratna style with nine spires. Inside is a large stone sculpture of the goddess in her skeletal, multi-armed form, from which the name Kankaleshwari ('goddess of the skeleton') comes.",
      "The temple attracts devotees throughout the year, with special gatherings on Kali Puja.",
    ],
    history: [
      "According to local accounts, the stone image was recovered from the bed of the Damodar River in the twentieth century and later installed in the temple. The sculpture is generally considered to be much older than the shrine itself.",
    ],
    significance:
      "Kankaleshwari is a valued centre of Kali worship in the region, and the sculpture is regarded as an important example of early stone carving from the area.",
    image: photos.kank1,
    image2: photos.kank2,
  },
  {
    slug: "hawa-mahal",
    name: "Hawa Mahal, Bardhaman",
    category: "Royal Heritage",
    short: "A royal pleasure pavilion beside the water at Golapbag — not the Jaipur palace.",
    intro:
      "Bardhaman has its own Hawa Mahal — a small royal pavilion set beside a pond within Golapbag, entirely separate from the famous palace of the same name in Jaipur.",
    about: [
      "The building is a modest pavilion whose reflection in the still water beside it is one of the most photographed views of Golapbag. Its name, 'palace of the winds', suits its open, airy setting.",
      "It now stands within the Golapbag campus of the University of Burdwan.",
    ],
    history: [
      "Golapbag was developed as a pleasure garden of the Burdwan Maharajas, and the Hawa Mahal was part of that royal retreat, used for leisure in the warmer months.",
    ],
    significance:
      "The Hawa Mahal is a reminder of the leisure culture of the Burdwan Raj, and a quiet, picturesque spot within the university grounds.",
    image: photos.hawa1,
    image2: null,
  },
  {
    slug: "golapbag",
    name: "Golapbag",
    category: "Gardens & Nature",
    short: "The former royal rose garden, now a leafy university campus.",
    intro:
      "Golapbag — 'the rose garden' — was once a royal garden of the Burdwan Maharajas and is now one of the greenest corners of the town.",
    about: [
      "The grounds include tree-lined avenues, ponds and old garden structures alongside modern university buildings. The area is also known for its botanical collection maintained by the university.",
      "It is a popular place for morning walks and is pleasant to explore on foot.",
    ],
    history: [
      "The garden was laid out by the Burdwan Raj in the nineteenth century as a private pleasure garden. In the years after independence, the estate became the main campus of the University of Burdwan.",
    ],
    significance:
      "Golapbag shows how a royal landscape became a centre of education, linking Bardhaman's heritage with its present as a university town.",
    image: photos.golap1,
    image2: photos.golap2,
  },
  {
    slug: "meghnad-saha-planetarium",
    name: "Meghnad Saha Planetarium",
    category: "Culture & Learning",
    short: "A domed planetarium bringing the night sky to students and families.",
    intro:
      "Named after the celebrated Indian astrophysicist Meghnad Saha, this planetarium is a popular centre for astronomy education in Bardhaman.",
    about: [
      "The planetarium's dome hosts sky shows that explain stars, planets and the wider universe for school groups and general visitors alike.",
      "It is run by the University of Burdwan and is located near the Golapbag area.",
    ],
    history: [
      "The planetarium opened in the 1990s. It honours Meghnad Saha, whose work on the ionisation of gases in stars — the Saha equation — made a lasting contribution to astrophysics.",
    ],
    significance:
      "For many students in the district, a visit here is a first introduction to astronomy, making it an important public science institution.",
    image: photos.plan1,
    image2: photos.plan2,
  },
  {
    slug: "christ-church",
    name: "Christ Church, Bardhaman",
    category: "Culture & Learning",
    short: "A historic colonial-era church with a tall spire and Gothic details.",
    intro:
      "Christ Church is one of the older churches of the region and a quiet architectural landmark in Bardhaman.",
    about: [
      "The church is built in a European style with pointed arches and a tall tower that rises above the surrounding streets. The simple interior and the calm churchyard offer a contrast to the bustle of the town.",
    ],
    history: [
      "The church dates from the nineteenth century, when Bardhaman was an important administrative and military station under British rule. It has continued as a place of worship for the local Christian community.",
    ],
    significance:
      "Christ Church reflects the colonial layer of Bardhaman's history and the town's long tradition of different communities living side by side.",
    image: photos.christ1,
    image2: photos.christ2,
  },
  {
    slug: "damodar-river",
    name: "Damodar River Heritage",
    category: "Gardens & Nature",
    short: "The broad river south of the town, seen best at Sadarghat.",
    intro:
      "The Damodar flows along the southern edge of Bardhaman, and its wide sandy banks have shaped the life, farming and history of the region.",
    about: [
      "Sadarghat is the town's best-known point on the river, where people gather to watch the sunset, perform rituals and enjoy the open landscape. In the dry season, sandbanks spread across the riverbed; in the monsoon the river runs full.",
    ],
    history: [
      "The Damodar was once called the 'Sorrow of Bengal' because of its frequent floods. From the mid-twentieth century, the Damodar Valley Corporation built dams upstream to control flooding and support irrigation and power.",
      "The fertile plains it waters made the Bardhaman region one of Bengal's major rice-growing areas.",
    ],
    significance:
      "The river is central to the economy and culture of the district — from agriculture to festivals held along its banks.",
    image: photos.damodar1,
    image2: photos.damodar2,
  },
  {
    slug: "krishnasayar-park",
    name: "Krishnasayar Park",
    category: "Gardens & Nature",
    short: "A large historic lake surrounded by a landscaped eco park.",
    intro:
      "Krishnasayar is a large lake in Bardhaman town, now surrounded by a landscaped park that is a favourite place for families to relax.",
    about: [
      "Walking paths circle the water, with gardens, seating and recreational facilities around the edge. The park is especially popular in the cooler winter months and on holidays.",
    ],
    history: [
      "The lake is traditionally associated with the Burdwan Raj, which created several large tanks in and around the town. In recent decades the area has been developed as a public eco park.",
    ],
    significance:
      "Krishnasayar offers green open space in the middle of the town and shows how historic water bodies continue to serve the community today.",
    image: null,
    image2: null,
  },
];

export const getDestination = (slug: string) => {
  const d = destinations.find((x) => x.slug === slug);
  if (!d) throw new Error(`Unknown destination ${slug}`);
  return d;
};
