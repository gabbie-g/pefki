//let flags = document.getElementsByClassName("flags");
let flags = $(".flags");

for (let i = 0; i< flags.length; i++) {
    flags[i].addEventListener("click", function(){
        window.location.hash = flags[i].id;
        window.location.reload();
    })
}


var link0 = {
    gr: "αρχικη σελιδα",
    eng: "home",
    ro: "acasă",
    sr: "početna"
}

var link1 = {
    gr: "λιγα λογια για μας",
    eng: "about us",
    ro: "despre noi",
    sr: "o nama"
}

var link2 = {
    gr: "που βρισκομαστε",
    eng: "how to find us",
    ro: "unde suntem",
    sr: "gde se nalazimo"
}
var link3 = {
    gr: "Επικοινωνια",
    eng: "contact",
    ro: "contact",
    sr: "kontakt"
}

var header = {
    gr: "ο προορισμος των διακοπων σας",
    eng: "your holiday destination",
    ro: "destinația ta de vacanță",
    sr: "tvoja letnja destinacija"
}

var header1 = {
    gr: "υπεροχες καλοκαιρινες διακοπες",
    eng: "great summer vacation",
    ro: "locul tău de odihnă",
    sr: "tvoje mesto za odmor"
}

var p1 = {
    gr: "Ιδανικό μέρος για χαλάρωση και απόλαυση των καλοκαιρινών ημερών",
    eng: "Perfect place to relax and enjoy the summer days",
    ro: "Un loc perfect pentru odihnă și relaxare",
    sr: "Savršeno za nezaboravne trenutke"
}

var p2 = {
    gr: "Το Πευκί θεωρείται ένας από τους κορυφαίους προορισμούς διακοπών στη Βόρεια Εύβοια, καθώς διαθέτει μια ανεπτυγμένη τουριστική υποδομή και προσφέρει εξαιρετικές ξενοδοχειακές μονάδες, δωμάτια, διαμερίσματα και στούντιο καθ 'όλη τη διάρκεια του έτους. Αν θέλετε ένα χαλαρωτικό διάλειμμα από τον έντονο ρυθμό της καθημερινής ζωής, το Πευκί είναι το ιδανικό μέρος.",
    eng: "Pefki is considered one of the premier vacation destinations in North Evia, since it has a highly developed tourist infrastructure and offers excellent hotel accommodation, rooms, apartments and studios throughout the course of the year. If you want a relaxing break away from the hectic pace of everyday life, Pefki is the perfect place.",
    ro: "Pefki e considerat una din cele mai atractive destinații din Nordul Eviei, de vreme ce poate oferi turiștilor tot ceea ce au nevoie, inclusiv cazare la hotel sau în apartamente tot timpul anului. Dacă ceea ce cauți este un loc în care să te poți relaxa și uita de problemele zilnice, Pefki este alegerea perfectă.",
    sr: "Pefki se smatra kao jedna od najatraktivnjih destinacija na severu Evie, nudi turistima sve što im je potrebno, između ostalog smeštaj u hotelima ili apartmanima preko cele godine. Ako to što želiš jeste da zaboraviš na svakodnevni ritam života, Pefki jeste savršen izbor."
}

var header41 = {
    gr: "μεγαλη παραλια",
    eng: "large beach",
    ro: "plaja",
    sr: "dugačka plaža"
}

var header42 = {
    gr: "καθημερινες κρουαζιερες",
    eng: "daily cruises",
    ro: "croaziere zilnice",
    sr: "svakodnevne ture"
}
var header43 = {
    gr: "ψαροταβερνες",
    eng: "fish tavernas",
    ro: "restaurante pescărești",
    sr: "riblji restorani"
}

var list_0 = {
    gr: "μεγάλη παραλία",
    eng: "long and large beach",
    ro: "o plajă încăpătoare",
    sr: "velika plaža"
}

var list_1 = {
    gr: "καλά οργανωμένο:",
    eng: "well organized:",
    ro: "organizată:",
    sr: "organizovana:"
}
var list_2 = {
    gr: "ξαπλώστρες και ομπρέλες",
    eng: "sun-beds and umbrellas",
    ro: "șezlonguri și umbrele de soare",
    sr: "ležaljke i suncobrani"
}
var list_3 = {
    gr: "ντους",
    eng: "showers",
    ro: "dușuri",
    sr: "tuševi"
}
var list_4 = {
    gr: "αλλαξιέρες",
    eng: "changing cabins",
    ro: "cabine de schimb",
    sr: "kabine za presvlačenje"
}
var list_5 = {
    gr: "γήπεδα βόλεϊ",
    eng: "playgrounds",
    ro: "terenuri de volei",
    sr: "igrališta"
}

var p5 = {
    gr: "Οι κρουαζιέρες οργανώνονται κάθε μέρα ή τουλάχιστον μία φορά την εβδομάδα, σύμφωνα με τη αναζήτηση των τουριστών μας. Τα πιο δημοφιλή είναι τα ταξίδια προς:",
    eng: "Cruises are organized every day or at least once per week, according to the interests of our tourists. The most populars are the trips to:",       
    ro: "Croazierele se organizeaza în fiecare zi, sau cel puțin o dată pe săptămână, în funcție de numărul de turiști care sunt interesați de acestea. Cele mai populare ture sunt:",
    sr: "Ture sa brodićem ima svakog dana, ili najmanje jedan put nedeljno, u zavisnosti od broja zainteresovanih turista. Najpopularnije ture su:"
}

var list6 = {
    gr: "Σκιάθος"
}
var list7 = {
    gr: "Σκόπελος και Αλόννησος",
    eng: "Skopelos and Alonnisos",
    ro: "Skopelos și Alonnisos",
    sr: "Skopelos i Alonnisos"
}
var list8 = {
    gr: "Λιχάδες"
}
var header3 = {
    gr: "εξαιρετικη ΕΠΙΛΟΓΗ",
    eng: "excellent choice",
    ro: "o alegere perfectă",
    sr: "savršen izbor"
}

var p6 = {
    gr: "Το Pefki Villas παρέχει στα δωμάτια του τις παρακάτω παροχές:",
    eng: "Pefki Villas provides you rooms with the following facilities:",
    ro: "Pefki Villas îți pune la dispoziție camere cu următoarele facilități:",
    sr: "Pefki Villas ti stavlja na raspolaganje sobe sa sledećim dodacima:"
}

var list9 = {
    gr: "τηλεοραση",
    eng: "television",
    ro: "televizor",
    sr: "televizor"
}
var list10 = {
    gr: "κλιματισμός",
    eng: "air conditioning",
    ro: "aer condiționat",
    sr: "klimatizovano"
}
var list11 = {
    gr: "ψυγείο",
    eng: "refrigerator",
    ro: "frigider",
    sr: "frižider"
}
var list12 = {
    gr: "κουζίνα",
    eng: "kitchen",
    ro: "bucătărie",
    sr: "kuhinja"
}
var list13 = {
    gr: "ηλεκτρική κουζίνα",
    eng: "cooking machine",
    ro: "reșou electric",
    sr: "šporet na struju"
}
var list14 = {
    gr: "ντους",
    eng: "shower",
    ro: "duș",
    sr: "tuš"
}
var list15 = {
    gr: "μπαλκόνι",
    eng: "balcony",
    ro: "terasă",
    sr: "terasa"
}
var list16 = {
    gr: "μπάρμπεκιου",
    eng: "barbecue",
    ro: "grătar",
    sr: "roštilj"
}
var list17 = {
    gr: "παιδική χαρά",
    eng: "playground",
    ro: "loc de joacă pentru copii",
    sr: "igralište za decu"
}
var list18 = {
    gr: "χώρος στάθμευσης",
    eng: "parking space",
    ro: "parcare în cadrul obiectului",
    sr: "parking"
}
var list19 = {
    gr: "δωρεάν Wi-Fi πρόσβαση στο internet",
    eng: "free WiFi internet access",
    ro: "conecția WiFi la internet",
    sr: "WiFi internet konekcija"
}
var button = {
    gr: "pefki villas φοτο γαλλερι",
    eng: "pefki villas photo gallery",
    ro: "galeria foto vila Pefki",
    sr: "galerija foto vile Pefki"
}

var header3_2 = {
    gr: "Που βρισκομαστε",
    eng: "how to find us",
    ro: "unde suntem",
    sr: "gde se nalazimo"
}
var p7 = {
    gr: "Αν έρχεστε με το αυτοκίνητο, μπορεί να σας ενδιαφέρουν τα δρομολόγια των φέρι μποτ από τη Γλύφα προς τον Αγιόκαμπο. Εάν ναι, κάντε κλικ σε αυτόν τον σύνδεσμο:",
    eng: "If you come by car, you may be interested in the timetable of the ferries from Glypha to Agyocampos. If so, please click on this link:",
    ro: "Dacă veniți la mare cu mașina dvs și vă interesează orarul feriboturilor dintre Glypha și Agyokampos, vă rugăm să vizitați următoarea adresă:",
    sr: "Ako dolazite kolima i budite li zainteresovani za program trajekta između Glife i Agyokamposa, možete da kliknete na sledeći link:"
}

var p8 = {
    gr: "Μόλις φτάσετε στο Πευκί, μόλις 100 μέτρα από την παραλία, το Pefki Villas είναι έτοιμο να καλωσορίσει εσας και την οικογένειά σας. Κοντά σε εμάς βρίσκοντε τα σούπερ μάρκετ και ταβέρνες. <br> Έχετε επίσης συντεταγμένες GPS στον παρακάτω χάρτη!",
    eng: "Once in Pefki, just 100 meters from the beach Pefki Villas is ready to welcome you and your family. Close to us you can find super-markets and taverns. <br>Please have a look on the map below!",
    ro: "Odată ajunși la destinație, la numai 100m de plajă se află vila Pefki, gata să vă ofere o primire călduroasă. În apropierea vilei se află supermarkete și taverne. <br>Pe harta de mai jos aveți și coordinatele vilei Pefki!",
    sr: "Kada ste stigli u Pefki, samo 100 metara od plaže nalazi se naša vila Pefki, spremna da ti poželi dobrodošlicu. Blizu naše vile nalaze se supermarketi i taverne. <br>Na mapi ispod imate i GPS koordinate!"
}
var link11 = {
    gr: "Πλοία από / προς τη Γλύφα-Αγυόκαμπο",
    eng: "Ferries to/from Glypha-Agyocampos",
    ro: "Ferries de la/la Glypha-Agyocampos",
    sr: "Ferries od/do Glyfe-Agyokamposa"
}

var h3_3 = {
    gr: "Καλωσοριστε!",
    eng: "you are welcome!",
    ro: "sunteți bineveniți!",
    sr: "dobrodošli!"
}
var p9 = {
    gr: "Πeρασtε σε μας!",
    eng: "come on in!",
    ro: "treceți pe la noi!",
    sr: "letujte kod nas!"
}
var h4_2 = {
    gr: "check-in",
    eng: "check-in",
    ro: "intrarea în apartament",
    sr: "vreme ulaska u sobe"
}
var h4_3 = {
    gr: "check-out",
    eng: "check-out",
    ro: "ieșirea din apartament",
    sr: "vreme izlaska iz sobe"
}
var h3_4 = {
    gr: "Επικοινωνiα",
    eng: "contact",
    ro: "contact",
    sr: "kontakt"
}
var h4_4 = {
    gr: "τηλεφωνο",
    eng: "phone",
    ro: "telefon",
    sr: "telefon"
}
var h4_6 = {
    gr: "Διεuθυνση",
    eng: "address",
    ro: "adresa",
    sr: "adresa"
}

let list = $("li");
console.log($("a"));
console.log($("h3"));

if (window.location.hash === "#gr") {
    $("a")[1].textContent = link0.gr;
    $("a")[5].textContent = link0.gr;
    $("a")[2].textContent = link1.gr;
    $("a")[6].textContent = link1.gr;
    $("a")[3].textContent = link2.gr;
    $("a")[7].textContent = link2.gr; 
    if(window.innerWidth < 1030){
        $("a")[7].classList.add("d-none");
    }
          
    $("a")[4].textContent = link3.gr;
    $("a")[8].textContent = link3.gr;

    $("h1")[1].textContent = header.gr;
    $("h3")[1].textContent = header.gr;

    $("p")[0].textContent = p1.gr;
    $("h2")[1].textContent = header1.gr;
    $("h3")[2].textContent = header1.gr;

    $("p")[1].textContent = p2.gr;
    $("p")[2].textContent = header41.gr;
    $("p")[3].textContent = header42.gr;
    $("p")[4].textContent = header43.gr;

    list[0].textContent = list_0.gr;
    list[1].childNodes[0].textContent = list_1.gr;
    list[1].childNodes[1].children[0].textContent = list_2.gr;
    list[1].childNodes[1].children[1].textContent = list_3.gr;
    list[1].childNodes[1].children[2].textContent = list_4.gr;
    list[1].childNodes[1].children[3].textContent = list_5.gr;

    $("p")[5].textContent = p5.gr;
    list[6].textContent = list6.gr;
    list[7].textContent = list7.gr;
    list[8].textContent = list8.gr;

    $("h3")[3].textContent = header3.gr;
    $("h4")[1].textContent = header3.gr;
    $("p")[6].textContent = p6.gr;
    list[9].textContent = list9.gr;
    list[10].textContent = list10.gr;
    list[11].textContent = list11.gr;
    list[12].textContent = list12.gr;
    list[13].textContent = list13.gr;
    list[14].textContent = list14.gr;
    list[15].textContent = list15.gr;
    list[16].textContent = list16.gr;
    list[17].textContent = list17.gr;
    list[18].textContent = list18.gr;
    list[19].textContent = list19.gr;
    $("button")[0].textContent = button.gr;
    $("button")[1].textContent = button.gr;
    $("h3")[4].textContent = header3_2.gr;
    $("h4")[2].textContent = header3_2.gr;

    $("p")[7].textContent = p7.gr;
    $("a")[15].textContent = link11.gr;
    $("p")[8].innerHTML = p8.gr;

    $("h3")[5].textContent = h3_3.gr;
    $("p")[9].textContent = p9.gr;
    $("h4")[3].textContent = h4_2.gr;
    $("h4")[4].textContent = h4_3.gr;
    $("h3")[6].textContent = h3_4.gr;
    $("h4")[5].textContent = h4_4.gr;
    $("h4")[7].textContent = h4_6.gr;

} else if (window.location.hash === "#eng") {
    $("a")[1].textContent = link0.eng;
    $("a")[5].textContent = link0.eng;
    $("a")[2].textContent = link1.eng;
    $("a")[6].textContent = link1.eng;
    $("a")[3].textContent = link2.eng;
    $("a")[7].textContent = link2.eng           
    $("a")[4].textContent = link3.eng;
    $("a")[8].textContent = link3.eng;

    $("h1")[1].textContent = header.eng;
    $("h3")[1].textContent = header.eng;

    $("p")[0].textContent = p1.eng;
    $("h2")[1].textContent = header1.eng;
    $("h3")[2].textContent = header1.eng;

    $("p")[1].textContent = p2.eng;
    $("p")[2].textContent = header41.eng;
    $("p")[3].textContent = header42.eng;
    $("p")[4].textContent = header43.eng;

    list[0].textContent = list_0.eng;
    list[1].childNodes[0].textContent = list_1.eng;
    list[1].childNodes[1].children[0].textContent = list_2.eng;
    list[1].childNodes[1].children[1].textContent = list_3.eng;
    list[1].childNodes[1].children[2].textContent = list_4.eng;
    list[1].childNodes[1].children[3].textContent = list_5.eng;

    $("p")[5].textContent = p5.eng;
    list[7].textContent = list7.eng;

    $("h3")[3].textContent = header3.eng;
    $("h4")[1].textContent = header3.eng;
    $("p")[6].textContent = p6.eng;
    list[9].textContent = list9.eng;
    list[10].textContent = list10.eng;
    list[11].textContent = list11.eng;
    list[12].textContent = list12.eng;
    list[13].textContent = list13.eng;
    list[14].textContent = list14.eng;
    list[15].textContent = list15.eng;
    list[16].textContent = list16.eng;
    list[17].textContent = list17.eng;
    list[18].textContent = list18.eng;
    list[19].textContent = list19.eng;
    $("button")[0].textContent = button.eng;
    $("button")[1].textContent = button.eng;
    $("h3")[4].textContent = header3_2.eng;
    $("h4")[2].textContent = header3_2.eng;
    $("p")[7].textContent = p7.eng;
    $("a")[15].textContent = link11.eng;
    $("p")[8].innerHTML = p8.eng;

    $("h3")[5].textContent = h3_3.eng;
    $("p")[9].textContent = p9.eng;
    $("h4")[3].textContent = h4_2.eng;
    $("h4")[4].textContent = h4_3.eng;
    $("h3")[6].textContent = h3_4.eng;
    $("h4")[5].textContent = h4_4.eng;
    $("h4")[7].textContent = h4_6.eng;

} else if (window.location.hash === "#ro") {
    $("a")[1].textContent = link0.ro;
    $("a")[5].textContent = link0.ro;
    $("a")[2].textContent = link1.ro;
    $("a")[6].textContent = link1.ro;
    $("a")[3].textContent = link2.ro;
    $("a")[7].textContent = link2.ro;
    $("a")[4].textContent = link3.ro;
    $("a")[8].textContent = link3.ro;

    $("h1")[1].textContent = header.ro;
    $("h3")[1].textContent = header.ro;

    $("p")[0].textContent = p1.ro;
    $("h2")[1].textContent = header1.ro;
    $("h3")[2].textContent = header1.ro;

    $("p")[1].textContent = p2.ro;
    $("p")[2].textContent = header41.ro;
    $("p")[3].textContent = header42.ro;
    $("p")[4].textContent = header43.ro;

    list[0].textContent = list_0.ro;
    list[1].childNodes[0].textContent = list_1.ro;
    list[1].childNodes[1].children[0].textContent = list_2.ro;
    list[1].childNodes[1].children[1].textContent = list_3.ro;
    list[1].childNodes[1].children[2].textContent = list_4.ro;
    list[1].childNodes[1].children[3].textContent = list_5.ro;

    $("p")[5].textContent = p5.ro;
    list[7].textContent = list7.ro;

    $("h3")[3].textContent = header3.ro;
    $("h4")[1].textContent = header3.ro;
    $("p")[6].textContent = p6.ro;
    list[9].textContent = list9.ro;
    list[10].textContent = list10.ro;
    list[11].textContent = list11.ro;
    list[12].textContent = list12.ro;
    list[13].textContent = list13.ro;
    list[14].textContent = list14.ro;
    list[15].textContent = list15.ro;
    list[16].textContent = list16.ro;
    list[17].textContent = list17.ro;
    list[18].textContent = list18.ro;
    list[19].textContent = list19.ro;
    $("button")[0].textContent = button.ro;
    $("button")[1].textContent = button.ro;
    $("h3")[4].textContent = header3_2.ro;
    $("h4")[2].textContent = header3_2.ro;

    $("p")[7].textContent = p7.ro;
    $("a")[15].textContent = link11.ro;
    $("p")[8].innerHTML = p8.ro;

    $("h3")[5].textContent = h3_3.ro;
    $("p")[9].textContent = p9.ro;
    $("h4")[3].textContent = h4_2.ro;
    $("h4")[4].textContent = h4_3.ro;
    $("h3")[6].textContent = h3_4.ro;
    $("h4")[5].textContent = h4_4.ro;
    $("h4")[7].textContent = h4_6.ro;


} else if (window.location.hash === "#sr") {
    $("a")[1].textContent = link0.sr;
    $("a")[5].textContent = link0.sr;
    $("a")[2].textContent = link1.sr;
    $("a")[6].textContent = link1.sr;
    $("a")[3].textContent = link2.sr;
    $("a")[7].textContent = link2.sr;
    $("a")[4].textContent = link3.sr;
    $("a")[8].textContent = link3.sr;

    $("h1")[1].textContent = header.sr;
    $("h3")[1].textContent = header.sr;

    $("p")[0].textContent = p1.sr;
    $("h2")[1].textContent = header1.sr;
    $("h3")[2].textContent = header1.sr;

    $("p")[1].textContent = p2.sr;
    $("p")[2].textContent = header41.sr;
    $("p")[3].textContent = header42.sr;
    $("p")[4].textContent = header43.sr;

    list[0].textContent = list_0.sr;
    list[1].childNodes[0].textContent = list_1.sr;
    list[1].childNodes[1].children[0].textContent = list_2.sr;
    list[1].childNodes[1].children[1].textContent = list_3.sr;
    list[1].childNodes[1].children[2].textContent = list_4.sr;
    list[1].childNodes[1].children[3].textContent = list_5.sr;

    $("p")[5].textContent = p5.sr;
    list[7].textContent = list7.sr;

    $("h3")[3].textContent = header3.sr;
    $("h4")[1].textContent = header3.sr;
    $("p")[6].textContent = p6.sr;
    list[9].textContent = list9.sr;
    list[10].textContent = list10.sr;
    list[11].textContent = list11.sr;
    list[12].textContent = list12.sr;
    list[13].textContent = list13.sr;
    list[14].textContent = list14.sr;
    list[15].textContent = list15.sr;
    list[16].textContent = list16.sr;
    list[17].textContent = list17.sr;
    list[18].textContent = list18.sr;
    list[19].textContent = list19.sr;
    $("button")[0].textContent = button.sr;
    $("button")[1].textContent = button.sr;
    $("h3")[4].textContent = header3_2.sr;
    $("h4")[2].textContent = header3_2.sr;

    $("p")[7].textContent = p7.sr;
    $("a")[15].textContent = link11.sr;
    $("p")[8].innerHTML = p8.sr;

    $("h3")[5].textContent = h3_3.sr;
    $("p")[9].textContent = p9.sr;
    $("h4")[3].textContent = h4_2.sr;
    $("h4")[4].textContent = h4_3.sr;
    $("h3")[6].textContent = h3_4.sr;
    $("h4")[5].textContent = h4_4.sr;
    $("h4")[7].textContent = h4_6.sr;
}


