//List of sensored words in Portuguese Brazilian / PT-BR
var sensored = ["ANUS",
    "-NUS",
    "BABA-OVO",
    "BABAOVO",
    "BACURA",
    "BAGOS",
    "BAITOLA",
    "BEBUM",
    "BICHA",
    "BISCA",
    "BIXA",
    "BOAZUDA",
    "BOCETA",
    "BOCO",
    "BOC+",
    "BOIOLA",
    "BOLAGATO",
    "BOQUETE",
    "BOLCAT",
    "BOSSETA",
    "BOSTA",
    "BOSTANA",
    "BRECHA",
    "BREXA",
    "BRIOCO",
    "BRONHA",
    "BUCA",
    "BUCETA",
    "BUNDUDA",
    "BUSSETA",
    "CACHORRA",
    "CANALHA",
    "CARALHO",
    "CASSETA",
    "CASSETE",
    "CHECHECA",
    "CHERECA",
    "CHIBUMBA",
    "CHIBUMBO",
    "CHIFRUDA",
    "CHIFRUDO",
    "CHOTA",
    "CHOCHOTA",
    "CHUPADA",
    "CHUPADO",
    "CLITORIS",
    "CLIT+RIS",
    "COCAINA",
    "COCA-NA",
    "CORNA",
    "CORNO",
    "CORNUDA",
    "CORNUDO",
    "CRETINA",
    "CRETINO",
    "CRUZ-CREDO",
    "CU",
    "C+",
    "CULHAO",
    "CULH+O",
    "CULH+ES",
    "CURALHO",
    "CUZAO",
    "CUZ+O",
    "CUZUDA",
    "CUZUDO",
    "DEBIL",
    "DEBILOIDE",
    "DEFUNTO",
    "DEMONIO",
    "DEM+NIO",
    "DIFUNTO",
    "EGUA",
    "+GUA",
    "ESCROTA",
    "ESCROTO",
    "ESPORRADA",
    "ESPORRADO",
    "ESPORRO",
    "ESP+RRO",
    "FELACAO",
    "FELA¦+O",
    "FODA",
    "FODAO",
    "FOD+O",
    "FODE",
    "FODIDA",
    "FODIDO",
    "FORNICA",
    "FUDENDO",
    "FUDECAO",
    "FUDE¦+O",
    "FUDIDA",
    "FUDIDO",
    "FURNICA",
    "FURNICAR",
    "FURONA",
    "GAIATA",
    "GAIATO",
    "GONORREA",
    "GONORREIA",
    "GOSMA",
    "GOSMENTA",
    "GOSMENTO",
    "GRELINHO",
    "GRELO",
    "ISCROTA",
    "ISCROTO",
    "LADROEIRA",
    "LADRONA",
    "LALAU",
    "LEPROSA",
    "LEPROSO",
    "LESBICA",
    "L+SBICA",
    "MACHONA",
    "MACHORRA",
    "MANGUACA",
    "MANGUA¦A",
    "MASTURBA",
    "MASTURBAÇÃO",
    "MELECA",
    "MIJA",
    "MIJADA",
    "MIJADO",
    "MIJO",
    "MOCREA",
    "MOCR+A",
    "MOCREIA",
    "MOCR+IA",
    "MOLECA",
    "MONDRONGA",
    "MONDRONGO",
    "NABA",
    "NADEGA",
    "OLHOTA",
    "PACA",
    "PASPALHA",
    "PASPALHAO",
    "PASPALHO",
    "PAU",
    "PEIA",
    "PEIDO",
    "PEMBA",
    "PENIS",
    "P-NIS",
    "PENTELHA",
    "PENTELHO",
    "PERERECA",
    "PICA",
    "PICAO",
    "PIC+O",
    "PILANTRA",
    "PIROCA",
    "PIROCO",
    "PIRU",
    "PORRA",
    "PREGA",
    "PROSTIBULO",
    "PROST-BULO",
    "PROSTITUTA",
    "PROSTITUTO",
    "PUNHETA",
    "PUNHETAO",
    "PUNHET+O",
    "PUNHETEIRO",
    "PUS",
    "PUSTULA",
    "P+STULA",
    "PUTA",
    "PUTO",
    "PUXA-SACO",
    "PUXASACO",
    "RABAO",
    "RAB+O",
    "RABO",
    "RABUDA",
    "RABUDAO",
    "RABUD+O",
    "RABUDO",
    "RABUDONA",
    "RACHADAO",
    "RACHAD+O",
    "RACHADINHA",
    "RACHADINHO",
    "RAMELA",
    "REMELA",
    "RIDICULA",
    "RID-CULA",
    "ROLA",
    "ROLINHA",
    "ROSCA",
    "SAFADA",
    "SAFADO",
    "SAPATAO",
    "SAPAT+O",
    "SIFILIS",
    "S-FILIS",
    "SIRIRICA",
    "TARADA",
    "TARADO",
    "TESTUDA",
    "TEZAO",
    "TEZ+O",
    "TEZUDA",
    "TEZUDO",
    "VACA",
    "VAGABUNDA",
    "VAGABUNDO",
    "VAGINA",
    "VEADA",
    "VEADAO",
    "VEAD+O",
    "VEADO",
    "VIADA",
    "VIADO",
    "VIADAO",
    "VIAD+O",
    "XAVASCA",
    "XERERECA",
    "XEXECA",
    "XIBIU",
    "XIBUMBA",
    "XOTA",
    "XOCHOTA",
    "XOXOTA",
    "XANA",
    "XANINHA"];

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

function sensore(item) {

    var result = item;
    for (var i = 0; i < sensored.length; i++) {
        var cens = sensored[i].toLowerCase();

        var reslow = result.toLowerCase();

        while (reslow.includes(cens))
        {
            reslow = result.toLowerCase();
            var searchMask = cens;
            var regEx = new RegExp(searchMask, "ig");

            var index = reslow.indexOf(searchMask);
            if (index == -1)index = 0;

              if (isLetter(reslow.charAt(index-1)) || isLetter(reslow.charAt(index + cens.length)))
              {
                break;
              }


            result = result.replace(regEx, '<span style="color: gray;">[CENSURADO]</span>&nbsp');
        }
    }
    return result;
}
