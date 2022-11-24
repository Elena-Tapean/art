import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles: [
      {
        id: 1,
        text: 'Avem demonstrația în fiecare zi cum la Tele-screenul nostru dystopaian vedem o multitudine de imagini, mici sau mari în dimensiune, de un colorit variat și de un șoc mai mult sau mai puțin antrenant la vederea sa; demonstrație care arată cât de mult le place oamenilor să se uite la imagini decât să mai apuce în mână o carte. Această schimbare a apărut odată ce cărțile au devenit ilustrate. Nu a mai fost numai nuvela în sine, dar a fost urmată și de imaginile sale care oglindeau pățaniile protagonistului principal. De atunci până acum mai existau câțiva pași pentru ca imaginea să domine cartea.'
      },
      {
        id: 2,
        text: 'În picturi, oamenii deslușeau povestea dintr-o singură privire, sau din mai multe, având în vedere că nu toți s-au antrenat în științele critice literare sau vizuale. În cărți, oameniilor le trebuiau adesea zile și încă altele pentru a descoperi și tainele metaforice (existente) în acestea. De aceea, poate, și cu un mic ajutor din partea industriei de ilustrații, oamenii au început să prefere imaginea, fiind mai captivantă, mai ușor de deslușit și antrenantă pentru imaginația omului. S-a răspândit repede acest cult al imaginilor în toată Europa, din Marea Britanie (având primele ilustrații în romanele de aventuri) până în Germania, Franța, și mai ales în America, unde chiar și istoria pictată a indienilor americani promova într-un mod similar uzanța imaginilor de defavoarea textelor scrise.'
      },
      {
        id: 3,
        text: 'Rămânem în America pentru că aici au avut loc primele promovări ale imaginilor, și anume în industria ziarelor de pamflet, a benzilor de desene animate (aici poate fi amintită și cultura Pop a artelor plastice, cu reprezentați precum Roy Lichtenstein, Richard Hamilton), industria filmelor americane (ea poate fi amintită ca un puternic promotor al imaginilor), cea a reclamelor (aici poate fi amintit și Andy Warhol), dar și industria manipulării fotografice, element ce domină tot mai mult în zilele noastre.'
      },
      {
        id: 4,
        text: 'Politica, poate interesantă și stimulantă pentru oamenii specializați, este amintită doar pentru diferitele ziare ale vremii secolului XIX sau XX, sigur și acum, unde proeminenții agenți politici sunt satirizați și criticați într-un stil caricatural, cele mai mari defecte fiind scoase la iveală prin intermediul exagerării. Aceste imagini sunt publicate ăn mii de numere lunar sau anual pe tot continentul american, asfel promovând imaginea și mai apoi textul. Se pare că textul scris, articolul în sine, are doar proprietăți explicative și nu narative ale fenomenului, a evenimentului care s-a produs, pentru a pune în temă cititorul despre circumstanța prin care agentul politic este criticat. Textul este doar un alt mod prin care se accentuează defectele (exagerate) acelui om politic. A nu se trece cu vederea nici ziarele din ziua de azi, fie ele pamflete, tabloide sau zilnice care pun mare accent pe imagini. Ați văzut cum, de cele mai multe ori, o întreagă pagină este rezervată doar imaginii despre o adolescentă, sau despre un accident sau despre un anume eveniment ce va avea loc la Sala Palatului? Sau a unei reclame la un parfum? Sau, mai nou, în revistele pentru femei sunt două pagini față-verso alocate pentru o imagine a unui produs publicitar? Voi reveni la această idee când voi discuta industria reclamelor.'
      },
      {
        id: 5,
        text: 'În ceea ce privește industria benzilor desenate, aceasta a explodat în jurul anilor 1980-1990, când nu numai desenele animate produse în America au fost un mare hit, ci și anime-urile japoneze importate și traduse. Acestea au avut un efect devastator de bun pentru creatorii desenelor pentru ambele tabere. Aș putea spune că Estul (Japonia) și Vestul (America) și-au reunit forțele și au produs cele mai longevive desene animate din lume, cum sunt: Batman, Superman, Spiderman, etc. (din partea Americii) și Transformers, Dragon Ball, Yu Yu Hakusho, Naruto, etc. (din partea Japoniei). Alături de desenul respectiv difuzat la televizor, acesta era însoțit de benzile sale de animație. Iată un mic secret pe care orice fan îl cunoaște: în America, mai întâi este filmul/serialul și mai apoi benzile animate, iar în Japonia, mai întâi sunt create manga (benzile animate), abia apoi fiind adaptate într-un anime (film/serial). Cert este că nuvelele, romanele, cărțile în general au fost înlocuite prin seriale animate, însă pentru manga sau comic books, textul supraviețuiește împreună cu imaginea, dat fiindcă, în astfel de situații, cele două componente nu pot fi despărțite în aceste împrejurări. Mai exact, cele două nu ar avea nici un sens una fără cealaltă. Imaginea arată acțiunea, în timp ce textul oferă dialogurile sau un mic narativ.'
      },
      {
        id: 6,
        text: 'Concomitent cu industria copiilor se desfășura și cea a adulților, și anume cea a filmelor. Acestea au jucat roluri importante în a promova imaginea și nu cartea. Între film și desene există o diferență de „vârstă” de câteva decenii (cu anumite excepții, bine înțeles, în cazul desenelor animate Betty Boop și Tom & Jerry, unde primul a apărut în 1930, respectiv 1940). Se știe însă că oamenii anilor 1950 care preferau televizorul, ce difuza narațiunea în imagini, au dus la explozia de succes al filmelor americane, fie ele western, istorice, contemporane, sau de altă natură mai captivantă. Se spune că însăși invenția primei camere de filmat a dus la orientarea lumii spre imagine. Mai mult, au luat naștere noi meserii, precum acelea de regizor, actori, staff, reporteri, cameramani și prezentatori de știri. Și mai mult, au apărut emisiunile de felurite teme, documentare, reclamele tip Aunt Jenima, dar și difuzările în direct ale evenimentelor sportive, galelor de decernare a premiilor Oscar, știri mondene, și câte și mai câte. Imaginați-vă lumea fără aceste imagini. Până și cuvântul „imaginați-vă” are de a face cu imaginile.'
      },
      {
        id: 7,
        text: 'Revenind la industria reclamelor, cărora le acordăm o mare parte din timpul nostru, observăm cu ușurință latura lor persuasivă. Reclamele nu sunt difuzate doar la televizor, sau cum îmi place mie să-i spun, Tele-screen (fiindcă nu știu dacă ați constatat sau nu, dar lumea noastră începe să semene cu Brave New World sau Fahrenheit 451), dar se găsesc și pe stradă și oriunde ai privi. Reclamele, de cele mai multe ori, sunt agățate de blocuri, sunt ancorate pe panourile verzi sau gri, cu lungimi impresionante pe toate câmpurile din România; și dacă nu sunt acolo unde \„trebuie\”, un text bine-voitor te anunță că: \„Reclama ta poate fi aici\”.'
      },
      {
        id: 8,
        text: 'Precizările continuă și la chioșcurile de ziare și în stațiile de autobuz, unde le privești cu un ochi și îl întorci pe celălalt. Le citești scurt și apoi revii în realitate. Chiar și în autobuze sunt montate mici ecrane similare Tele-screen-ului în care se derulează câteva reclame despre automobile, universități, cursuri de fotografiat, restaurante, fără a fi specificatată valabilitatea lor. Poate că anunțul a fost pus acum trei semestre și acum nu mai este valabil, dar reclama tot nu e \„demontată\”.'
      },
      {
        id: 9,
        text: 'În spatele acestei industrii se află experimente și cercetări continue, prin care producătorii doresc să cunoască și să intuiască ce anume ar dori clienții lor în legătură cu un anumit produs. Aceste cercetări, însă, sunt și de o natură mai răutăcioasă, de marketing, prin care sunt modelate anumite elemente, trucurui sau tehnici de captivare a viziunii persoanei, de atragere prin privire și prin gând, și de \„hipnotizare\” a persoanei în a-și procura acel produs de la respectiva firmă/organizație.'
      },
      {
        id: 10,
        text: 'Sunt cunoscute doar câteva din aceste tehnici de marketing și suntem cu toții familiarizați cu ele, doar că nu conștientizăm. O primă tehnică ar fi culoarea produsului. S-a demonstrat că roșul stimulează apetitul (Coca-Cola, McDonalds, alte batoane de ciocolată), în timp ce culoarea albastră duce cu gândul la liniștire, la răcorire (Pepsi, orice sticlă de apă minerală sau plată). Astfel oamenii pot fi manipulați doar prin culoarea produsului și nu prin calitățile satisfăcătoare ale acestuia.'
      },
      {
        id: 11,
        text: 'O altă tehnică ar fi marca sau brand-ul firmei. Cei mai mulți oameni în ziua de azi se ghidează după brand-ul inscripționat pe acel produs sau după forma reclamei. Organizația Coca-Cola și-a câștigat succesul prin a le oferi oamenilor o băutură răcoritoare bine recunoscută după forma sticlei, brand-ul roșu cu inscripții albe, reclamele variate înfățișând diferiți oameni în timp ce savurează o Coca-Cola în familie sau cu prietenii.'
      },
      {
        id: 12,
        text: 'Astfel, de aici reiese o a treia tehnică: cea prin care chipurile zâmbărețe sau fericite atrag oamenii instant, ei gândind că acele personaje din reclame sunt fericite. Și ce altă țintă în viață decât cea de a fi fericit?'
      },
      {
        id: 13,
        text: 'O ultimă tehnică de marketing ce se dezvoltă și în zilele noastre, dar prea frecvent, este aceea de repetiție. Ori de câte ori o reclamă sau un anunț la televizor, radio, etc., se repetă de-a-lungul întregii zile, creierul uman îl învață și îl reproduce mai repede decât ar învăța copiii la școală. Repetiția este un mecanism al „hipnozei”, un mecanism manipulator, care facilitează imprimarea unor anumite produse în mentalul oamenilor, limitându-li-se astfel gama de experimente cu alte produse „rivale”. Ce bine însă că încă mai suntem conștienți și apoi putem alege din celelalte game care... Nu vi se pare că acest moment seamănă cu o scenă asemănătoare din Fight Club? Unde Naratorul (nu i se cunoaște numele, așa că va fi înscris cu inițiala majoră) trebuie să-și cumpere o canapea, dar se întreabă de care? Or, acele canapele de pe piață sunt toate la fel, fie că e de la IKEA sau de la Dedeman, sau Baumax, toate sunt la fel: tu, omule, trebuie să alegi doar culoarea. Naratorul a ales o culoare care seamănă cu galben-bej, dar e de la IKEA.'
      },
      {
        id: 14,
        text: 'Manipularea prin imagini se mai face și într-o altă industrie tot atât de prosperă ca și cele amintite mai sus, și anume industria fotografică. S-au descoperit în ultimii ani anumite programe de calculator care au puterea de a schimba orice în acea imagine, cum ar fi: culoarea, contrastul, mișcarea elementelor selectate și poziționarea lor în cu totul altundeva, ba mai mult, distorsionarea imaginii și amestecul acesteia cu multe altele din cu totul alte medii artistice. Toate acestea au dus la falsificare, la manipulare în rândul cazurilor de judecată, în rândul oamenilor care vor să ateste existența creaturilor din altă lume (nu spun că nu există, ci sunt anumiți indivizi sau un anumit grup care vor din tot dinadinsul să-i facă pe oameni să creadă în industria lor înșelătoare), în cazul cercetătorilor care vor să expună noi plante mulțimilor, ei selectându-le culoarea (un asemenea țel îl posedă artistul NASA, persoana și funcția responsabilă cu culoarea descoperirilor spațiale), și, de ce nu, și în rândul adolescenților sau pamfletiștilor care manipulează imaginile, transformându-le în caricaturi provenite din mai multe medii artistice (cum sunt meme-urile sau demotivational-urile).'
      },
      {
        id: 15,
        text: 'Toate aceste industrii enumerate mai sus au de-a face cu imaginile și cu puterea de a le manipula în scopul lor prestabilit, deseori fără ca oamenii să-l cunoască. La fel cum o organizație își trasează anumite ținte pentru a-și asigura succesul, tot așa oamenii care lucrează în televiziune sau în industria fotografică și publicitară își selectează o „clientelă” (dar, de fiecare dată, această limită este depășită prin anumite strategii, tehnici cum am văzut mai sus) de la care așteaptă două lucruri importante: ca aceștia să le fie fideli și încrezători în tot ceea ce primesc de la ei, și ca aceștia să le urmărească non-stop. De aici, televiziunea a devenit coruptă (seducția manipulatoare), imaginile au devenit pe cât de șocante, pe atât de supărătoare și înfricoșătoare pentru copii (aici se regăsește o altă tehnică de marketing unde s-a demonstrat că, cu cât o imagine este mai șocantă, cu atât este mai ușor reținută de către memorie), iar cartea începe să-și reîncepe să-și recapete teritoriul demult pierdut.'
      },
      {
        id: 16,
        text: 'În ultimele decenii, chiar și în timpul celor două războaie mondiale, cărțile n-au încetat a fi scrise - și nici în timpul marelui succes al imaginilor. Unii oameni preferă liniștea unei cărți decât alarma trepidantă a televiziunii (tele-imaginii), alții preferă propria imaginație decât imaginația altuia (a ilustratorului, spre exemplu). De aceea, cărțile au devenit refugiul perfect după o zi agitată la serviciu. Chiar dacă calculatorul, laptop-ul sau smartphone-urile au înlocuit televizorul, locul cărții e undeva aparte.'
      },
      {
        id: 17,
        text: 'Articol apărut în revista semestrială de cultură, InterArtes, Anul III, nr. 4, 2014, ISSN 2285-9357, ISSN-L 2285-9357. <br/> (c) Copyright. Elena Țăpean. 2014-2022.'
      }
    ]
  },
  getters: {
  },
  mutations: {
    SET_TEXT (state, data) {
      state.articles = data
      state.articlesCopy = [...data]
    },
    NEXT_ARTICLE_PARA (state, {id}) {
      const index = state.articles.findIndex(article => article.id === id)
      const count = state.articles[index].count
      const articleUpdated = {...state.articles[index], count}
      Vue.set(state.articles, index, articleUpdated)
    },
    PREV_ARTICLE_PARA (state, {id}) {
      const index = state.articles.findIndex(article => article.id === id)
      const count = state.articles[index].count > 0
      const articleUpdated = {...state.articles[index], count}
      Vue.set(state.articles, index, articleUpdated)
    }
  },
  actions: {
    async get_data ({commit}) {
      try {
        setTimeout (() => {
          const data = [
            {
              id: 1,
              text: 'Avem demonstrația în fiecare zi cum la Tele-screenul nostru dystopaian vedem o multitudine de imagini, mici sau mari în dimensiune, de un colorit variat și de un șoc mai mult sau mai puțin antrenant la vederea sa; demonstrație care arată cât de mult le place oamenilor să se uite la imagini decât să mai apuce în mână o carte. Această schimbare a apărut odată ce cărțile au devenit ilustrate. Nu a mai fost numai nuvela în sine, dar a fost urmată și de imaginile sale care oglindeau pățaniile protagonistului principal. De atunci până acum mai existau câțiva pași pentru ca imaginea să domine cartea.'
            },
            {
              id: 2,
              text: 'În picturi, oamenii deslușeau povestea dintr-o singură privire, sau din mai multe, având în vedere că nu toți s-au antrenat în științele critice literare sau vizuale. În cărți, oameniilor le trebuiau adesea zile și încă altele pentru a descoperi și tainele metaforice (existente) în acestea. De aceea, poate, și cu un mic ajutor din partea industriei de ilustrații, oamenii au început să prefere imaginea, fiind mai captivantă, mai ușor de deslușit și antrenantă pentru imaginația omului. S-a răspândit repede acest cult al imaginilor în toată Europa, din Marea Britanie (având primele ilustrații în romanele de aventuri) până în Germania, Franța, și mai ales în America, unde chiar și istoria pictată a indienilor americani promova într-un mod similar uzanța imaginilor de defavoarea textelor scrise.'
            },
            {
              id: 3,
              text: 'Rămânem în America pentru că aici au avut loc primele promovări ale imaginilor, și anume în industria ziarelor de pamflet, a benzilor de desene animate (aici poate fi amintită și cultura Pop a artelor plastice, cu reprezentați precum Roy Lichtenstein, Richard Hamilton), industria filmelor americane (ea poate fi amintită ca un puternic promotor al imaginilor), cea a reclamelor (aici poate fi amintit și Andy Warhol), dar și industria manipulării fotografice, element ce domină tot mai mult în zilele noastre.'
            },
            {
              id: 4,
              text: 'Politica, poate interesantă și stimulantă pentru oamenii specializați, este amintită doar pentru diferitele ziare ale vremii secolului XIX sau XX, sigur și acum, unde proeminenții agenți politici sunt satirizați și criticați într-un stil caricatural, cele mai mari defecte fiind scoase la iveală prin intermediul exagerării. Aceste imagini sunt publicate ăn mii de numere lunar sau anual pe tot continentul american, asfel promovând imaginea și mai apoi textul. Se pare că textul scris, articolul în sine, are doar proprietăți explicative și nu narative ale fenomenului, a evenimentului care s-a produs, pentru a pune în temă cititorul despre circumstanța prin care agentul politic este criticat. Textul este doar un alt mod prin care se accentuează defectele (exagerate) acelui om politic. A nu se trece cu vederea nici ziarele din ziua de azi, fie ele pamflete, tabloide sau zilnice care pun mare accent pe imagini. Ați văzut cum, de cele mai multe ori, o întreagă pagină este rezervată doar imaginii despre o adolescentă, sau despre un accident sau despre un anume eveniment ce va avea loc la Sala Palatului? Sau a unei reclame la un parfum? Sau, mai nou, în revistele pentru femei sunt două pagini față-verso alocate pentru o imagine a unui produs publicitar? Voi reveni la această idee când voi discuta industria reclamelor.'
            },
            {
              id: 5,
              text: 'În ceea ce privește industria benzilor desenate, aceasta a explodat în jurul anilor 1980-1990, când nu numai desenele animate produse în America au fost un mare hit, ci și anime-urile japoneze importate și traduse. Acestea au avut un efect devastator de bun pentru creatorii desenelor pentru ambele tabere. Aș putea spune că Estul (Japonia) și Vestul (America) și-au reunit forțele și au produs cele mai longevive desene animate din lume, cum sunt: Batman, Superman, Spiderman, etc. (din partea Americii) și Transformers, Dragon Ball, Yu Yu Hakusho, Naruto, etc. (din partea Japoniei). Alături de desenul respectiv difuzat la televizor, acesta era însoțit de benzile sale de animație. Iată un mic secret pe care orice fan îl cunoaște: în America, mai întâi este filmul/serialul și mai apoi benzile animate, iar în Japonia, mai întâi sunt create manga (benzile animate), abia apoi fiind adaptate într-un anime (film/serial). Cert este că nuvelele, romanele, cărțile în general au fost înlocuite prin seriale animate, însă pentru manga sau comic books, textul supraviețuiește împreună cu imaginea, dat fiindcă, în astfel de situații, cele două componente nu pot fi despărțite în aceste împrejurări. Mai exact, cele două nu ar avea nici un sens una fără cealaltă. Imaginea arată acțiunea, în timp ce textul oferă dialogurile sau un mic narativ.'
            },
            {
              id: 6,
              text: 'Concomitent cu industria copiilor se desfășura și cea a adulților, și anume cea a filmelor. Acestea au jucat roluri importante în a promova imaginea și nu cartea. Între film și desene există o diferență de „vârstă” de câteva decenii (cu anumite excepții, bine înțeles, în cazul desenelor animate Betty Boop și Tom & Jerry, unde primul a apărut în 1930, respectiv 1940). Se știe însă că oamenii anilor 1950 care preferau televizorul, ce difuza narațiunea în imagini, au dus la explozia de succes al filmelor americane, fie ele western, istorice, contemporane, sau de altă natură mai captivantă. Se spune că însăși invenția primei camere de filmat a dus la orientarea lumii spre imagine. Mai mult, au luat naștere noi meserii, precum acelea de regizor, actori, staff, reporteri, cameramani și prezentatori de știri. Și mai mult, au apărut emisiunile de felurite teme, documentare, reclamele tip Aunt Jenima, dar și difuzările în direct ale evenimentelor sportive, galelor de decernare a premiilor Oscar, știri mondene, și câte și mai câte. Imaginați-vă lumea fără aceste imagini. Până și cuvântul „imaginați-vă” are de a face cu imaginile.'
            },
            {
              id: 7,
              text: 'Revenind la industria reclamelor, cărora le acordăm o mare parte din timpul nostru, observăm cu ușurință latura lor persuasivă. Reclamele nu sunt difuzate doar la televizor, sau cum îmi place mie să-i spun, Tele-screen (fiindcă nu știu dacă ați constatat sau nu, dar lumea noastră începe să semene cu Brave New World sau Fahrenheit 451), dar se găsesc și pe stradă și oriunde ai privi. Reclamele, de cele mai multe ori, sunt agățate de blocuri, sunt ancorate pe panourile verzi sau gri, cu lungimi impresionante pe toate câmpurile din România; și dacă nu sunt acolo unde \„trebuie\”, un text bine-voitor te anunță că: \„Reclama ta poate fi aici\”.'
            },
            {
              id: 8,
              text: 'Precizările continuă și la chioșcurile de ziare și în stațiile de autobuz, unde le privești cu un ochi și îl întorci pe celălalt. Le citești scurt și apoi revii în realitate. Chiar și în autobuze sunt montate mici ecrane similare Tele-screen-ului în care se derulează câteva reclame despre automobile, universități, cursuri de fotografiat, restaurante, fără a fi specificatată valabilitatea lor. Poate că anunțul a fost pus acum trei semestre și acum nu mai este valabil, dar reclama tot nu e \„demontată\”.'
            },
            {
              id: 9,
              text: 'În spatele acestei industrii se află experimente și cercetări continue, prin care producătorii doresc să cunoască și să intuiască ce anume ar dori clienții lor în legătură cu un anumit produs. Aceste cercetări, însă, sunt și de o natură mai răutăcioasă, de marketing, prin care sunt modelate anumite elemente, trucurui sau tehnici de captivare a viziunii persoanei, de atragere prin privire și prin gând, și de \„hipnotizare\” a persoanei în a-și procura acel produs de la respectiva firmă/organizație.'
            },
            {
              id: 10,
              text: 'Sunt cunoscute doar câteva din aceste tehnici de marketing și suntem cu toții familiarizați cu ele, doar că nu conștientizăm. O primă tehnică ar fi culoarea produsului. S-a demonstrat că roșul stimulează apetitul (Coca-Cola, McDonalds, alte batoane de ciocolată), în timp ce culoarea albastră duce cu gândul la liniștire, la răcorire (Pepsi, orice sticlă de apă minerală sau plată). Astfel oamenii pot fi manipulați doar prin culoarea produsului și nu prin calitățile satisfăcătoare ale acestuia.'
            },
            {
              id: 11,
              text: 'O altă tehnică ar fi marca sau brand-ul firmei. Cei mai mulți oameni în ziua de azi se ghidează după brand-ul inscripționat pe acel produs sau după forma reclamei. Organizația Coca-Cola și-a câștigat succesul prin a le oferi oamenilor o băutură răcoritoare bine recunoscută după forma sticlei, brand-ul roșu cu inscripții albe, reclamele variate înfățișând diferiți oameni în timp ce savurează o Coca-Cola în familie sau cu prietenii.'
            },
            {
              id: 12,
              text: 'Astfel, de aici reiese o a treia tehnică: cea prin care chipurile zâmbărețe sau fericite atrag oamenii instant, ei gândind că acele personaje din reclame sunt fericite. Și ce altă țintă în viață decât cea de a fi fericit?'
            },
            {
              id: 13,
              text: 'O ultimă tehnică de marketing ce se dezvoltă și în zilele noastre, dar prea frecvent, este aceea de repetiție. Ori de câte ori o reclamă sau un anunț la televizor, radio, etc., se repetă de-a-lungul întregii zile, creierul uman îl învață și îl reproduce mai repede decât ar învăța copiii la școală. Repetiția este un mecanism al „hipnozei”, un mecanism manipulator, care facilitează imprimarea unor anumite produse în mentalul oamenilor, limitându-li-se astfel gama de experimente cu alte produse „rivale”. Ce bine însă că încă mai suntem conștienți și apoi putem alege din celelalte game care... Nu vi se pare că acest moment seamănă cu o scenă asemănătoare din Fight Club? Unde Naratorul (nu i se cunoaște numele, așa că va fi înscris cu inițiala majoră) trebuie să-și cumpere o canapea, dar se întreabă de care? Or, acele canapele de pe piață sunt toate la fel, fie că e de la IKEA sau de la Dedeman, sau Baumax, toate sunt la fel: tu, omule, trebuie să alegi doar culoarea. Naratorul a ales o culoare care seamănă cu galben-bej, dar e de la IKEA.'
            },
            {
              id: 14,
              text: 'Manipularea prin imagini se mai face și într-o altă industrie tot atât de prosperă ca și cele amintite mai sus, și anume industria fotografică. S-au descoperit în ultimii ani anumite programe de calculator care au puterea de a schimba orice în acea imagine, cum ar fi: culoarea, contrastul, mișcarea elementelor selectate și poziționarea lor în cu totul altundeva, ba mai mult, distorsionarea imaginii și amestecul acesteia cu multe altele din cu totul alte medii artistice. Toate acestea au dus la falsificare, la manipulare în rândul cazurilor de judecată, în rândul oamenilor care vor să ateste existența creaturilor din altă lume (nu spun că nu există, ci sunt anumiți indivizi sau un anumit grup care vor din tot dinadinsul să-i facă pe oameni să creadă în industria lor înșelătoare), în cazul cercetătorilor care vor să expună noi plante mulțimilor, ei selectându-le culoarea (un asemenea țel îl posedă artistul NASA, persoana și funcția responsabilă cu culoarea descoperirilor spațiale), și, de ce nu, și în rândul adolescenților sau pamfletiștilor care manipulează imaginile, transformându-le în caricaturi provenite din mai multe medii artistice (cum sunt meme-urile sau demotivational-urile).'
            },
            {
              id: 15,
              text: 'Toate aceste industrii enumerate mai sus au de-a face cu imaginile și cu puterea de a le manipula în scopul lor prestabilit, deseori fără ca oamenii să-l cunoască. La fel cum o organizație își trasează anumite ținte pentru a-și asigura succesul, tot așa oamenii care lucrează în televiziune sau în industria fotografică și publicitară își selectează o „clientelă” (dar, de fiecare dată, această limită este depășită prin anumite strategii, tehnici cum am văzut mai sus) de la care așteaptă două lucruri importante: ca aceștia să le fie fideli și încrezători în tot ceea ce primesc de la ei, și ca aceștia să le urmărească non-stop. De aici, televiziunea a devenit coruptă (seducția manipulatoare), imaginile au devenit pe cât de șocante, pe atât de supărătoare și înfricoșătoare pentru copii (aici se regăsește o altă tehnică de marketing unde s-a demonstrat că, cu cât o imagine este mai șocantă, cu atât este mai ușor reținută de către memorie), iar cartea începe să-și reîncepe să-și recapete teritoriul demult pierdut.'
            },
            {
              id: 16,
              text: 'În ultimele decenii, chiar și în timpul celor două războaie mondiale, cărțile n-au încetat a fi scrise - și nici în timpul marelui succes al imaginilor. Unii oameni preferă liniștea unei cărți decât alarma trepidantă a televiziunii (tele-imaginii), alții preferă propria imaginație decât imaginația altuia (a ilustratorului, spre exemplu). De aceea, cărțile au devenit refugiul perfect după o zi agitată la serviciu. Chiar dacă calculatorul, laptop-ul sau smartphone-urile au înlocuit televizorul, locul cărții e undeva aparte.'
            },
            {
              id: 17,
              text: 'Articol apărut în revista semestrială de cultură, InterArtes, Anul III, nr. 4, 2014, ISSN 2285-9357, ISSN-L 2285-9357. <br/> (c) Copyright. Elena Țăpean. 2014-2022.'
            }
          ]
          commit('SET_TEXT', data)
        }, 1000)
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
