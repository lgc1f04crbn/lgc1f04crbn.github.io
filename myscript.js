// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;

// Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
var textArray = [
    " Bonjour et bienvenue au centre de gestion des SAV|Le M.S.A.V",
    "Vous cherchez le service technique, tapez 1, la compta, tapez 2, le service administratif, tapez 3...|**Tape 1**",
    "Vous êtes bien au service technique, un correspondant va prendre votre appel                                                                                                                                              ne quittez pas                                                                                                                                             ",
    "Service technique bonjour, merci d'avoir patienter, que puis-je faire pour vous |J'ai un proche qui est en rade..",
    "En rade ?? De quoi donc ?|De sentiments !! Son pilote a rendu l'âme, un 404 NOT FOUND a été trouvé !",
    "AH ! La belle affaire.. Hum, depuis combien de temps sont apparus les symptômes ?| Depuis Mercredi soir pour être précise.",
    "Bien c'est noté. Quel est le surnom code client s'il vous plaît ?|P'tit chat.",
    "Bien, merci. Je lance une petite analyse, veuillez patienter.|Merci                                                                                                                                  ",
    "Oui, allo ? Oui, merci d'avoir patienter, les services vitaux sont corrects, pas d'anomalie distinctive. Depuis combien de temps est-il actif ?|Environ 27 ans.",
    "Je vois.. je vois.. Je vais escalader votre incident, ne quittez pas|Bien, merci.",
    "Bonjour, Philippe Croustillant à l'appareil, alors de ce que mon collègue m'a transmis, votre proche subit une défaillance assez complexe à déterminer et de facto à résoudre. J'étais en train de regarder son journal de bord mais je ne vois rien. Je vais tout de même vous lire ces derniers mots, sans doute trouverons-nous un indice.|Ok, merci",
    "Chère Maé, il n'y pas de SAV à chercher ni ici, ni là-bas. Depuis que je te connais Maé, j'ai ressenti milles et une choses. De la joie, du rire, de l'affection, du bonheur,... Certaines émotions que j'avais connus jadis certes, mais dont la saveur avait été ternie par le temps. Aujourd'hui, elles se ravivent, reprennent des couleurs. Et même si les zeolithes, je suis pas bien bon; et bien ça me fait pas peur de continuer à les étudier si cela peut t'aider ! Tu es une remarquable personne Maé, ne l'oublie pas :)|Mes pensées vont vers toi en ce moment (EDIT : tout le temps)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ",
"","","",
"","","",
"","","",
"","","",
"","","",
"","","",
"","","",
"","","",
"","","",
"","","",
"","","",
"","","",
"","","",
"","","",
"","","",
"","","",
"","","",
"","","",
"","","",
"","","",
"","","",
"","","",
];

// Speed (in milliseconds) of typing.
var speedForward = 80, //Typing Speed
    speedWait = 1000, // Wait between typing and backspacing
    speedBetweenLines = 1000, //Wait between first and second lines
    speedBackspace = 25; //Backspace Speed

//Run the loop
typeWriter("output", textArray);

function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
      eHeader = element.children("h1"), //Header element
      eParagraph = element.children("p"); //Subheader element
  
  // Determine if animation should be typing or backspacing
  if (!isBackspacing) {
    
    // If full string hasn't yet been typed out, continue typing
    if (i < aString.length) {
      
      // If character about to be typed is a pipe, switch to second line and continue.
      if (aString.charAt(i) == "|") {
        isParagraph = true;
        eHeader.removeClass("cursor");
        eParagraph.addClass("cursor");
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);
        
      // If character isn't a pipe, continue typing.
      } else {
        // Type header or subheader depending on whether pipe has been detected
        if (!isParagraph) {
          eHeader.text(eHeader.text() + aString.charAt(i));
        } else {
          eParagraph.text(eParagraph.text() + aString.charAt(i));
        }
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedForward);
      }
      
    // If full string has been typed, switch to backspace mode.
    } else if (i == aString.length) {
      
      isBackspacing = true;
      setTimeout(function(){ typeWriter(id, ar); }, speedWait);
      
    }
    
  // If backspacing is enabled
  } else {
    
    // If either the header or the paragraph still has text, continue backspacing
    if (eHeader.text().length > 0 || eParagraph.text().length > 0) {
      
      // If paragraph still has text, continue erasing, otherwise switch to the header.
      if (eParagraph.text().length > 0) {
        eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
      } else if (eHeader.text().length > 0) {
        eParagraph.removeClass("cursor");
        eHeader.addClass("cursor");
        eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
      }
      setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
    
    // If neither head or paragraph still has text, switch to next quote in array and start typing.
    } else { 
      
      isBackspacing = false;
      i = 0;
      isParagraph = false;
      a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
      setTimeout(function(){ typeWriter(id, ar); }, 50);
    }

  }


}