import { Dictionary } from './types'

export const cs: Dictionary = {
  locale: 'cs',
  meta: {
    title: 'Roubenka Rájenka – ubytování v Českém ráji, Kněžnice u Jičína',
    description:
      'Pronájem roubené chalupy až pro 8 osob v Kněžnici přímo v Českém ráji. Zahrada s bazénem, pergolou a ohništěm, výhled na Trosky kousek od branky. Napište si o volný termín.',
  },
  nav: {
    cottage: 'Chalupa',
    story: 'Historie',
    gallery: 'Galerie',
    surroundings: 'Okolí',
    pricing: 'Ceník',
    contact: 'Kontakt',
    cta: 'Poslat poptávku',
    switchLabel: 'English',
    switchHref: '/en',
    switchLang: 'en',
  },
  hero: {
    eyebrow: 'Kněžnice · Český ráj',
    title: 'Roubenka Rájenka',
    lead: 'Krásná a útulná roubená chalupa až pro 8 osob v klidné části Kněžnice, kousek od lesa. Postavili ji místní tesaři před více než sto lety – a pár kroků od stavení se otevírá ikonický pohled na Trosky.',
    ctaPrimary: 'Poslat poptávku',
    ctaSecondary: 'Prohlédnout chalupu',
    imageAlt: 'Roubenka Rájenka – chalupa s červenou střechou a krytým posezením před vchodem',
    facts: ['až 8 hostů', '2 ložnice + světnice', 'zahrada s bazénem', 'parkování na pozemku'],
  },
  cottage: {
    eyebrow: 'Chalupa',
    title: 'Roubenka, jak má být',
    imageAlt: 'Průčelí roubenky s červenou střechou a bílými spárami',
    paragraphs: [
      'Srdcem chalupy je světnice, které dominuje dubový stůl se čtyřmi židlemi a lavicí pro plnou obsazenost. Atmosféru dokresluje krb, k odpočinku slouží pohodlná válenda a smart TV. V přízemí na světnici navazuje kompletně vybavená kuchyň a v zádveří koupelna se sprchovým koutem, toaletou a pračkou.',
      'Chodbou se schodištěm s vykrojenými nášlapy vystoupáte do podkroví ke dvěma ložnicím. V každé z nich jsou čtyři lůžka s novými kvalitními matracemi i lůžkovinami a vestavěná skříň, v jedné je navíc připravená dětská postýlka.',
      'Na prostorné zahradě najdete bazén, zastřešenou pergolu s posezením, plynový gril i klasické ohniště na opékání špekáčků. Pro děti je připravená prolézačka se skluzavkou, oblíbené hnízdo, dvě houpačky, malá horolezecká stěna a trampolína. Parkuje se pohodlně přímo na pozemku.',
    ],
    amenitiesTitle: 'Co je k dispozici',
    amenities: [
      'Kompletně vybavená kuchyň',
      'Kávovar Dolce Gusto (16 kapslí v ceně)',
      'Krb ve světnici',
      'Smart TV',
      'Pračka',
      'Bazén na zahradě',
      'Trampolína a dětské hřiště',
      'Zastřešená pergola s posezením',
      'Plynový gril a ohniště',
      'Povlečení a ručníky v ceně',
      'Dětská postýlka',
      'Parkování na pozemku',
    ],
    factsTitle: 'V kostce',
    facts: [
      { label: 'Kapacita', value: 'až 8 hostů (2× 4 lůžka)' },
      { label: 'Ložnice', value: '2 v podkroví + dětská postýlka' },
      { label: 'Vytápění', value: 'elektrický kotel, krb' },
      { label: 'Poloha', value: 'Kněžnice, Český ráj' },
      { label: 'Provoz', value: 'celoročně' },
    ],
  },
  story: {
    eyebrow: 'Historie',
    title: 'Dům, který pamatuje',
    paragraphs: [
      'Chalupu postavili místní tesaři z borového dřeva před více než sto lety – přesně tak, jak se v podhůří Českého ráje stavělo odjakživa. Nechybí roubené stěny, bílé spáry, masivní trámy ani valbová střecha, která dům chrání proti severnímu větru.',
      'Autentické kouzlo tradičního stavení dotvářejí zachované nižší průchody dveří mezi jednotlivými místnostmi. A stačí udělat jen pár kroků od chalupy, aby se vám otevřel úchvatný ikonický pohled na hrad Trosky.',
    ],
  },
  gallery: {
    eyebrow: 'Galerie',
    title: 'Nahlédněte dovnitř',
    prevLabel: 'Předchozí fotografie',
    nextLabel: 'Další fotografie',
    openLabel: 'Zobrazit na celou obrazovku',
    closeLabel: 'Zavřít',
    photos: [
      {
        src: '/images/web/svetnice.jpg',
        label: 'Světnice',
        alt: 'Světnice s dubovým stolem, lavicí a okny se zelenými rámy',
      },
      {
        src: '/images/web/svetnice-celek.jpg',
        label: 'Světnice – celkový pohled',
        alt: 'Celkový pohled na světnici s jídelním stolem uprostřed',
      },
      {
        src: '/images/web/svetnice-tramy.jpg',
        label: 'Světnice – pod trámy',
        alt: 'Pohled od jídelního stolu přes válendu na masivní trámy',
      },
      {
        src: '/images/web/svetnice-valenda.jpg',
        label: 'Světnice – válenda u krbu',
        alt: 'Pohodlná válenda a krb ve světnici',
      },
      {
        src: '/images/web/kuchyne.jpg',
        label: 'Kuchyň',
        alt: 'Kompletně vybavená kuchyň',
      },
      {
        src: '/images/web/podkrovi.jpg',
        label: 'Podkroví',
        alt: 'Podkrovní chodba se střešními okny a vstupem do ložnice',
      },
      {
        src: '/images/web/loznice-1.jpg',
        label: 'První ložnice',
        alt: 'První podkrovní ložnice se čtyřmi lůžky',
      },
      {
        src: '/images/web/loznice-podkrovi.jpg',
        label: 'První ložnice – ode dveří',
        alt: 'Pohled do první ložnice s manželskou postelí a samostatným lůžkem',
      },
      {
        src: '/images/web/loznice-postel.jpg',
        label: 'První ložnice – manželská postel',
        alt: 'Manželská postel s novými matracemi v první ložnici',
      },
      {
        src: '/images/web/loznice-okna.jpg',
        label: 'První ložnice – lůžka u oken',
        alt: 'Lůžka u oken první ložnice s výhledem do zeleně',
      },
      {
        src: '/images/web/loznice-2.jpg',
        label: 'Druhá ložnice',
        alt: 'Druhá podkrovní ložnice se čtyřmi lůžky',
      },
      {
        src: '/images/web/loznice-2-celek.jpg',
        label: 'Druhá ložnice – celkový pohled',
        alt: 'Celkový pohled na druhou ložnici s lůžky a dětskou postýlkou',
      },
      {
        src: '/images/web/loznice-skrine.jpg',
        label: 'Druhá ložnice – vestavěné skříně',
        alt: 'Vestavěné skříně ve druhé ložnici',
      },
      {
        src: '/images/web/postylka.jpg',
        label: 'Druhá ložnice – dětská postýlka',
        alt: 'Dětská postýlka ve druhé ložnici',
      },
      {
        src: '/images/web/koupelna.jpg',
        label: 'Koupelna',
        alt: 'Koupelna se sprchovým koutem',
      },
      {
        src: '/images/web/schodiste.jpg',
        label: 'Schodiště',
        alt: 'Schodiště s vykrojenými nášlapy do podkroví',
      },
      {
        src: '/images/web/zadveri.jpg',
        label: 'Zádveří',
        alt: 'Dřevem obložené zádveří s výhledem na pergolu',
      },
      {
        src: '/images/web/exterier.jpg',
        label: 'Chalupa',
        alt: 'Roubenka s červenou střechou a bílými spárami',
      },
      {
        src: '/images/web/zahrada.jpg',
        label: 'Zahrada',
        alt: 'Zahrada u chalupy s výhledem do zeleně',
      },
      {
        src: '/images/web/pergola.jpg',
        label: 'Pergola',
        alt: 'Zastřešená pergola s posezením na zahradě',
      },
      {
        src: '/images/web/ohniste.jpg',
        label: 'Ohniště',
        alt: 'Houpačka a ohniště na zahradě',
      },
      {
        src: '/images/web/bazen.jpg',
        label: 'Bazén',
        alt: 'Bazén na zahradě',
      },
      {
        src: '/images/web/hriste.jpg',
        label: 'Dětské hřiště',
        alt: 'Prolézačka se skluzavkou a houpačkami na zahradě',
      },
    ],
  },
  surroundings: {
    eyebrow: 'Okolí',
    title: 'Český ráj za humny',
    lead: 'Kněžnice nabízí skvělou vybavenost i dostupnost: v docházkové vzdálenosti je vyhlášená pekárna Náš Chléb i vlaková a autobusová zastávka, takže pohodlně dorazíte i bez auta. Okolí je protkané pěšími trasami a cyklostezkami od Prachovských skal až po pohádkový Jičín.',
    distanceNote: 'Vzdálenosti jsou orientační, měřeno od chalupy.',
    groups: [
      {
        title: 'Jídlo a nákupy',
        places: [
          {
            name: 'Pekařství Náš Chléb',
            distance: '1 km',
            description:
              'Vyhlášená prodejna přímo v obci – pár minut pěšky pro čerstvé ranní pečivo.',
          },
          {
            name: 'Obchod a pošta, Libuň',
            distance: '2 km',
            description: 'Potraviny a pošta v sousední obci.',
          },
          {
            name: 'Jinolické rybníky',
            distance: '3 km',
            description: 'Restaurace a stánky s občerstvením přímo u vody.',
          },
          {
            name: 'Restaurace u Prachovských skal',
            distance: '4–5 km',
            description: 'Pařezská Lhota a okolí skal.',
          },
          {
            name: 'Jičín – supermarkety',
            distance: '6,5 km',
            description: 'Kaufland, Lidl, Tesco, Billa a řada restaurací.',
          },
          {
            name: 'Rohlík k nám vozí',
            distance: 'rozvoz',
            description:
              'Online supermarket doveze nákup až ke dveřím chalupy – ideální na velký nákup na začátek pobytu.',
          },
        ],
      },
      {
        title: 'Hrady, zámky a památky',
        places: [
          {
            name: 'Pohádkový Jičín',
            distance: '6,5 km',
            description:
              'Rumcajsova ševcovna, Valdická brána s výhledem, zámek s podloubím, Muzeum hry a lipová alej k Valdštejnské lodžii.',
          },
          {
            name: 'Zřícenina hradu Pařez',
            distance: '6 km',
            description: 'Romantické pozůstatky skalního hradu.',
          },
          {
            name: 'Hrad Trosky',
            distance: '8 km',
            description: 'Ikonický symbol celého Českého ráje – a od chalupy na dohled.',
          },
          {
            name: 'Zámek Hrubá Skála',
            distance: '13 km',
            description: 'Romantický zámek tyčící se na pískovcových skalách.',
          },
          {
            name: 'Hrad Kost',
            distance: '15 km',
            description: 'Jeden z nejzachovalejších gotických hradů v Česku.',
          },
          {
            name: 'Zámek Humprecht',
            distance: '15 km',
            description: 'Unikátní barokní lovecký zámeček u Sobotky.',
          },
          {
            name: 'Hrad Valdštejn',
            distance: '16 km',
            description: 'Nejstarší hrad Českého ráje se slavným kamenným mostem.',
          },
        ],
      },
      {
        title: 'Skalní města a příroda',
        places: [
          {
            name: 'Cidlinský hřeben',
            distance: '1 km',
            description: 'Klidné pěší trasy a lesy přímo nad Kněžnicí.',
          },
          {
            name: 'Prachovské skály',
            distance: '4 km',
            description: 'Skalní město plné vyhlídek, soutěsek a pískovcových věží.',
          },
          {
            name: 'Vrch Zebín',
            distance: '5 km',
            description: 'Čedičový vrch s kapličkou a nádherným kruhovým výhledem.',
          },
          {
            name: 'Hruboskalsko',
            distance: '14 km',
            description: 'Rozsáhlé skalní město s vyhlášenou vyhlídkou Hlavatice.',
          },
          {
            name: 'Údolí Plakánek',
            distance: '15 km',
            description: 'Romantická procházka údolím kolem hradu Kost.',
          },
        ],
      },
      {
        title: 'Koupání',
        places: [
          {
            name: 'Jinolické rybníky',
            distance: '3 km',
            description: 'Přírodní koupání, písečné pláže, lodičky a občerstvení.',
          },
          {
            name: 'Aqua centrum a koupaliště Kníže',
            distance: '7 km',
            description:
              'Krytý bazén s tobogánem, divokou řekou a saunami plus venkovní koupaliště v Jičíně.',
          },
          {
            name: 'Rybník Věžák',
            distance: '12 km',
            description: 'Ikonický rybník známý z českých filmů.',
          },
          {
            name: 'Koupaliště Sobotka',
            distance: '16 km',
            description: 'Přírodní koupaliště s výhledem na zámek Humprecht.',
          },
        ],
      },
      {
        title: 'Pro děti a sport',
        places: [
          {
            name: 'Hřiště v Kněžnici',
            distance: '300 m',
            description: 'Sportovní a dětské hřiště přímo v obci.',
          },
          {
            name: 'Půjčovna koloběžek a kol',
            distance: '3 km',
            description: 'Jinolice a Prachovské skály.',
          },
          {
            name: 'Jízda na koních',
            distance: '3 km',
            description: 'Jezdecký klub Jinolice / Březka.',
          },
          {
            name: 'Šťastná země Radvánovice',
            distance: '12 km',
            description:
              'Obří přírodní zábavní park – trampolíny, dřevěný hrad, vodní prvky a zvířátka.',
          },
          {
            name: 'Rozhledna Dubecko',
            distance: '13 km',
            description: 'Vyhlídka na celý Český ráj i Krkonoše.',
          },
        ],
      },
    ],
  },
  pricing: {
    eyebrow: 'Ceník',
    title: 'Kolik stojí pobyt',
    seasonsHead: { season: 'Sezóna', week: 'Týden', weekend: 'Víkend' },
    seasons: [
      { label: 'Letní sezóna', dates: '1. 5. – 30. 9.', week: '25 000 Kč', weekend: '8 000 Kč' },
      { label: 'Zimní sezóna', dates: '1. 12. – 31. 3.', week: '17 000 Kč', weekend: '6 000 Kč' },
      {
        label: 'Mimo sezónu',
        dates: 'duben, říjen, listopad',
        week: '15 000 Kč',
        weekend: '6 000 Kč',
      },
    ],
    holidaysTitle: 'Svátky a prázdniny',
    holidays: [
      { label: 'Vánoce', value: '30 000 Kč', detail: '6 nocí, vratná kauce 10 000 Kč' },
      { label: 'Silvestr', value: '30 000 Kč', detail: '6 nocí, vratná kauce 10 000 Kč' },
      { label: 'Velikonoce', value: '23 000 Kč', detail: '6 nocí' },
      { label: 'Jarní prázdniny', value: '23 000 Kč', detail: '6 nocí' },
    ],
    holidaysNote: 'Ceny platí za celý objekt. Cena za méně nocí dle dohody.',
    includesTitle: 'V ceně',
    includes:
      'Povlečení a ručníky pro každého, ručníky na ruce v koupelně a na WC a 16 kapslí do kávovaru Dolce Gusto.',
    feesTitle: 'Platí se zvlášť',
    fees: [
      'Elektřina dle skutečné spotřeby – 6 Kč za kWh',
      'Poplatek obci 25 Kč za osobu a den',
      'Domácí mazlíček 200 Kč za den',
      'Plynový gril včetně bomby 200 Kč za pobyt',
      'Vratná kauce 5 000 Kč v hotovosti při předání (Vánoce a Silvestr 10 000 Kč) – vrací se po odečtení elektřiny',
      'Poplatek 1 500 Kč, pokud chalupa není předána v čistém stavu bez nadměrného znečištění',
    ],
    checkTitle: 'Příjezd a odjezd',
    check:
      'Nástup na ubytování je v 16:00, uvolnění chalupy do 10:00 – prosíme o dodržení časů. Při odjezdu prosíme o svlečení povlečení. V případě neočekávané změny času příjezdu nám dejte vědět telefonicky.',
    cancellationTitle: 'Storno podmínky',
    cancellation: [
      'Zrušení více než 60 dnů před nástupem – bez poplatku',
      'Zrušení 59–30 dnů před nástupem – 50 % zaplaceného nájemného',
      'Zrušení 29–10 dnů před nástupem – 80 % zaplaceného nájemného',
      'Zrušení 9 a méně dnů před nástupem – 100 % zaplaceného nájemného',
    ],
  },
  contact: {
    eyebrow: 'Kontakt a rezervace',
    title: 'Napište si o termín',
    lead: 'Pošlete nám termín a počet hostů a my se vám co nejdříve ozveme s potvrzením volných dní a cenou. Rezervace potvrzujeme osobně – žádný automat.',
    emailLabel: 'E-mail',
    phoneLabel: 'Telefon',
    addressLabel: 'Adresa',
    mapTitle: 'Mapa – Kněžnice, okres Jičín',
    mapLink: 'Otevřít mapu',
  },
  form: {
    name: 'Jméno a příjmení',
    email: 'E-mail',
    phone: 'Telefon',
    phoneOptional: 'nepovinné',
    arrival: 'Příjezd',
    departure: 'Odjezd',
    guests: 'Počet hostů',
    guestsOptions: [
      { value: '1', label: '1 host' },
      { value: '2', label: '2 hosté' },
      { value: '3', label: '3 hosté' },
      { value: '4', label: '4 hosté' },
      { value: '5', label: '5 hostů' },
      { value: '6', label: '6 hostů' },
      { value: '7', label: '7 hostů' },
      { value: '8', label: '8 hostů' },
    ],
    message: 'Zpráva',
    messagePlaceholder: 'S kým přijedete, na co se chcete zeptat…',
    submit: 'Odeslat poptávku',
    sending: 'Odesílám…',
    success: 'Děkujeme, poptávka je na cestě.',
    successDetail:
      'Ozveme se vám co nejdříve s potvrzením termínu. Kopii jsme poslali na váš e-mail.',
    error: 'Poptávku se nepodařilo odeslat. Zkuste to prosím znovu, nebo nám napište e-mail.',
  },
  footer: {
    tagline: 'Roubenka na dohled od Trosek',
    rights: 'Roubenka Rájenka, Kněžnice',
  },
  notFound: {
    title: 'Stránka nenalezena',
    body: 'Tady nic není – zkuste to z úvodní stránky.',
    back: 'Zpět na úvod',
  },
}
