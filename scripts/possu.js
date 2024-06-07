let pelaajaLista = [];
const pelaajasyotetty = document.getElementById('pelaajanaytto');
const pelaajatInput = document.getElementById('pelaajat');
const pelaajainfo = document.getElementById('pelaajainfo');




// ääniä

function klik(){
    let klik = document.getElementById('klik');
    klik.play();
}

function nopanheitto(){
    let audio = document.getElementById('nopat');
    audio.play();
}

function ykkonen(){
    let ykkonen = document.getElementById('ykkonen');
    ykkonen.play();
}

function voitto(){
    let voitto = document.getElementById('voitto');
    voitto.play();
}

function tuplanopat(){
    let tuplis = document.getElementById('tuplanopat');
    tuplis.play();
}

function keraaPisteet(){
    let aani = document.getElementById('collect');
    aani.play();
}







//////////////////////////////////////////////////////////////////////////////////////

function pelaajalisatty(toiminto) {
    const pelaajanNimi = pelaajatInput.value.trim(); 

    if (toiminto === 'lisaa') {
        // maksimipelaajamäärä 4
        if (pelaajaLista.length < 4) {
            if (pelaajanNimi !== '') {
                // luodaan pelaajista objekti
                const uusiPelaaja = { nimi: pelaajanNimi, pisteet: 0 };
                pelaajaLista.push(uusiPelaaja);
                naytaPelaajat();
            }
        } else {
            // ilmoitus jo pelaajat täynnä
            pelaajainfo.innerHTML = 'Pelaajat täynnä';
        }
    }

    naytaButtoni();

    pelaajatInput.value = ''; // Tyhjennä input-kenttä
}
//////////////////////////////////////////////////////////////////////////////////////

// Tällä funktiolla hallinnoidaan miten pelaajalista näytetään ruudulla

function naytaPelaajat() {
    // Tyhjennä pelaajasyöte
    pelaajasyotetty.innerHTML = '';
    
    // lisää pelaajan nimi näytölle
    pelaajaLista.forEach(function(pelaaja) {
        pelaajasyotetty.innerHTML += `<p>${pelaaja.nimi}</p>`;
    });
}

//////////////////////////////////////////////////////////////////////////////////////




// Aloita peli-painike tulee näkyviin vasta kun vähintään kaksi pelaajaa on syötetty 
function naytaButtoni() {
    const aloitaButton = document.getElementById('aloitapeli-button');
    if (pelaajaLista.length >= 2) {
        aloitaButton.style.display = 'block';
    } else {
        aloitaButton.style.display = 'none'; 
    }
}

//////////////////////////////////////////////////////////////////////////////////////

// siirtymä valikosta toiseen
function naytaToinenValikko() {

    klik();

    // Piilota kotivalikko
   
    document.getElementById('aloitusnaytto').style.display = 'none';
    document.getElementById('noppanaytto').style.display = 'none';
    // Näytä toinen valikko
    document.getElementById('pelivalikko2').style.display = 'block';
}
//////////////////////////////////////////////////////////////////////////////////////

function naytaPeliohjeet() {

    klik();
    // Piilota kotivalikko
 
    document.getElementById('aloitusnaytto').style.display = 'none';
    document.getElementById('noppanaytto').style.display = 'none';
    document.getElementById('pelivalikko2').style.display = 'none';

    document.getElementById('peliohjeet2').style.display = 'none';
    // Näytä peliohje-valikko
    document.getElementById('peliohjeet').style.display = 'block';
    
}

//////////////////////////////////////////////////////////////////////////////////////

function naytaPeliohjeet2() {

    klik();
    // Piilota kotivalikko
  
    document.getElementById('aloitusnaytto').style.display = 'none';
    document.getElementById('noppanaytto').style.display = 'none';
    document.getElementById('pelivalikko2').style.display = 'none';
    document.getElementById('peliohjeet').style.display = 'none';

    
    // Näytä peliohje2-valikko

    document.getElementById('peliohjeet2').style.display = 'block';
    
    
}
// tähän pelaajien listaus ja päivitys kuka johtaa pisteissä
let nykyinenPelaajaIndeksi = 0;

let kukaPelaa = document.getElementById('kukaPelaa-naytto');

function paivitaPelaajanNimi() {

    // tyhjennetään tuplalaskuri kun vuoro vaihtuu
    tuplalaskuri = 0;
    // luodaan uusi taulukko kopioimalla pelaajalista ja järjestetään se 
    let jarjestettyPelaajaLista = [...pelaajaLista].sort(function(a, b) {

        // ennen ekoja pisteitä ei järjestetä tulostaulukkoa
        if (b.pisteet === 0 && a.pisteet === 0) {
            return 0;
        }
        // jos pelaajilla on tasapisteet vertaillaan nimiä
        if (b.pisteet === a.pisteet) {
            return a.nimi.localeCompare(b.nimi);
        }
        // muuten vertaillaan pisteitä
        return b.pisteet - a.pisteet;
    });

    let pelaajienNimetJaPisteet = jarjestettyPelaajaLista.map(pelaaja => `${pelaaja.nimi}: ${pelaaja.pisteet}`).join('<br>');

    // päivitetään tulostaulukko kopiolistalta
    document.getElementById('pelaajan-pisteet').innerHTML = pelaajienNimetJaPisteet;

    // vuorossa olevan pelaajan nimi ruudulle
    
    kukaPelaa.innerHTML = pelaajaLista[nykyinenPelaajaIndeksi].nimi;
}

//////////////////////////////////////////////////////////////////////////////////////

function naytaPelikentta() {
    klik();

    document.getElementById('tulosnaytto').innerHTML = "<img src='sikapeli/sikanoppa-kuvat/possu1.png'>";
    
    

   
    // Näytetään vuorossa oleva pelaaja
    paivitaPelaajanNimi();
    // Piilota muut valikot
  
    document.getElementById('aloitusnaytto').style.display = 'none';
    document.getElementById('pelivalikko2').style.display = 'none';
    

    // Näytä toinen valikko
    document.getElementById('pelikentta').style.display = 'block';
    document.getElementById('noppanaytto').style.display = 'block';
}
//////////////////////////////////////////////////////////////////////////////////////



// yhden nopan pelin valinta
const yksiNoppa = document.getElementById('yhdellanopalla');
const kaksiNoppaa = document.getElementById('kahdellanopalla');
const seuraavaButton = document.getElementById('seuraava');

let onkoYksiNoppaaValittu = false;
let onkoKaksiNoppaaValittu = false;

function yksiNoppaaValittu() {
    if (!onkoKaksiNoppaaValittu) {
        if (!onkoYksiNoppaaValittu) {
            yksiNoppa.style.backgroundColor = 'rgb(13, 1, 85)';
            onkoYksiNoppaaValittu = true;
        } else {
            yksiNoppa.style.backgroundColor = '';
            onkoYksiNoppaaValittu = false;
        }
    }
    paivitaSeuraavaButton();
    
}

yksiNoppa.addEventListener('click', yksiNoppaaValittu);

// kahden nopan pelin valinta
function kaksiNoppaaValittu() {
    if (!onkoYksiNoppaaValittu) {
        if (!onkoKaksiNoppaaValittu) {
            kaksiNoppaa.style.backgroundColor = 'rgb(13, 1, 85)';
            onkoKaksiNoppaaValittu = true;
        } else {
            kaksiNoppaa.style.backgroundColor = '';
            onkoKaksiNoppaaValittu = false;
        }
    }
    paivitaSeuraavaButton();
}

kaksiNoppaa.addEventListener('click', kaksiNoppaaValittu);


//////////////////////////////////////////////////////////////////////////////////////

// seuraava-painikkeen päivitys

function paivitaSeuraavaButton() {
    if (onkoYksiNoppaaValittu || onkoKaksiNoppaaValittu) {
        seuraavaButton.disabled = false;
    } else {
        seuraavaButton.disabled = true;
    }
}

//////////////////////////////////////////////////////////////////////////////////////

// siirtymä kotivalikkoon
function naytaKotivalikko() {
    // ääni
    klik();

    // päivitetään sivu
    // tähän ehkä vielä jokin muu tapa tyhjentää pelitiedot?
    location.reload();
  


    // piilota nykyinen valikko
    document.getElementById('pelivalikko2').style.display = 'none';
   
    // piilota nykyinen valikko
    document.getElementById('pelikentta').style.display = 'none';
    // piilota ohjeet
    document.getElementById('peliohjeet').style.display = 'none';

    // Näytä kotivalikko
    document.getElementById('aloitusnaytto').style.display = 'block';

    document.getElementById('seuraava').disabled = true;
    yksiNoppa.style.backgroundColor = '';
    onkoYksiNoppaaValittu = false;

    kaksiNoppaa.style.backgroundColor = '';
    onkoKaksiNoppaaValittu = false;
    
}

//////////////////////////////////////////////////////////////////////////////////////

// muuttujia
const nopat = [1,2,3,4,5,6];
let noppienSummanaytto = document.getElementById('noppien-summa');
let noppienSumma = 0;

let pelajaanPisteNaytto = document.getElementById('pelaajan-pisteet');

let pistelista = [];



// yhden nopan heitto


let yhteispisteet = 0;


function heitaNoppaa() {
    ilmoitus.innerHTML ='';
    // ääni
    nopanheitto();
    // animaatio
    noppaPyorii();
    paivitaPelaajanNimi();

    let indeksi = Math.floor(Math.random() * nopat.length);
    const tulos = nopat[indeksi];

    if (tulos === 1) {
        document.getElementById('tulosnaytto').innerHTML = "<img src='sikapeli/sikanoppa-kuvat/yksi2.png'>";
    } else if (tulos === 2) {
        document.getElementById('tulosnaytto').innerHTML = "<img src='sikapeli/sikanoppa-kuvat/kaksi2.png'>";
    } else if (tulos === 3) {
        document.getElementById('tulosnaytto').innerHTML = "<img src='sikapeli/sikanoppa-kuvat/kolme2.png'>";
    } else if (tulos === 4) {
        document.getElementById('tulosnaytto').innerHTML = "<img src='sikapeli/sikanoppa-kuvat/nelja2.png'>";
    } else if (tulos === 5) {
        document.getElementById('tulosnaytto').innerHTML = "<img src='sikapeli/sikanoppa-kuvat/viisi2.png'>";
    } else {
        document.getElementById('tulosnaytto').innerHTML = "<img src='sikapeli/sikanoppa-kuvat/kuusi2.png'>";
    }

    noppienSumma += tulos;


    // Näytä noppien summa

    setTimeout(naytaSumma,900);

    if (tulos === 1) {

       

        //ääni
        ykkonen();

        noppienSumma = 0;
        
        ilmoitus.innerHTML = (`${pelaajaLista[nykyinenPelaajaIndeksi].nimi} sai ykkösen!`);
        

        // päivitä pelaajan vuoro
        nykyinenPelaajaIndeksi = (nykyinenPelaajaIndeksi + 1) % pelaajaLista.length;
        paivitaPelaajanNimi();

       
    }

    
}



let keraa = document.getElementById('eiheita');
keraa.addEventListener('click', function() {
    alaHeita();

});


//////////////////////////////////////////////////////////////////////////////////////

// kahden nopan heitto

 // tuplaheitoille laskuri
 let tuplalaskuri = 0;
 
function heitaKahtaNoppaa() {
    nopanheitto();
    

   // tyhjennetään mahdollisen aiemman pelin voittaja
    document.getElementById('voittajan-nimi').innerHTML='';
    ilmoitus.innerHTML ='';

    // tyhjennetään yhden nopan pelinäyttö
    document.getElementById('tulosnaytto').style.display = 'none';

    // kahdelle nopalle indeksit ja arvot
    let indeksi1 = Math.floor(Math.random() * nopat.length);
    let indeksi2 = Math.floor(Math.random() * nopat.length);
    let tulos1 = nopat[indeksi1];
    let tulos2 = nopat[indeksi2];
    let summa = tulos1 + tulos2;


    // noppa1 kuvat
    let img1 = document.createElement('img');
    if (tulos1 === 1) {
        img1.src = 'sikapeli/sikanoppa-kuvat/yksi2.png';
    } else if (tulos1 === 2) {
        img1.src = 'sikapeli/sikanoppa-kuvat/kaksi2.png';
    } else if (tulos1 === 3) {
        img1.src = 'sikapeli/sikanoppa-kuvat/kolme2.png';
    } else if (tulos1 === 4) {
        img1.src = 'sikapeli/sikanoppa-kuvat/nelja2.png';
    } else if (tulos1 === 5) {
        img1.src = 'sikapeli/sikanoppa-kuvat/viisi2.png';
    } else {
        img1.src = 'sikapeli/sikanoppa-kuvat/kuusi2.png';
    }
    // noppa2 ja kuvat
    let img2 = document.createElement('img');
    if (tulos2 === 1) {
        img2.src = 'sikapeli/sikanoppa-kuvat/yksi2.png';
    } else if (tulos2 === 2) {
        img2.src = 'sikapeli/sikanoppa-kuvat/kaksi2.png';
    } else if (tulos2 === 3) {
        img2.src = 'sikapeli/sikanoppa-kuvat/kolme2.png';
    } else if (tulos2 === 4) {
        img2.src = 'sikapeli/sikanoppa-kuvat/nelja2.png';
    } else if (tulos2 === 5) {
        img2.src = 'sikapeli/sikanoppa-kuvat/viisi2.png';
    } else {
        img2.src = 'sikapeli/sikanoppa-kuvat/kuusi2.png';
    }

    document.getElementById('tulosnaytto2').innerHTML = '';
    document.getElementById('tulosnaytto2').appendChild(img1);
    document.getElementById('tulosnaytto2').appendChild(img2);


    
    
    // tuplaykköset
    if(tulos1 === 1 && tulos2 === 1){
        //ääni
        tuplanopat();
        document.getElementById('voittajan-nimi').style.fontWeight = 'bold';
        document.getElementById('voittajan-nimi').style.color = 'green';
        document.getElementById('voittajan-nimi').innerHTML='Tuplat!';
        summa +=25 - 2;
        tuplalaskuri += 1;
    }
    // tuplat
    else if(tulos1 === tulos2){
        //ääni
        tuplanopat();
        summa *=2;
        document.getElementById('voittajan-nimi').style.fontWeight = 'bold';
        document.getElementById('voittajan-nimi').style.color = 'green';
        document.getElementById('voittajan-nimi').innerHTML='Tuplat!';
        tuplalaskuri += 1;
    }

    

    noppienSumma += summa;

    // jos tuplaheittoja on kolme perättäistä

    if(tuplalaskuri === 3){
        // ääni
        ykkonen();
        
        document.getElementById('voittajan-nimi').innerHTML='';
        ilmoitus.innerHTML = (`${pelaajaLista[nykyinenPelaajaIndeksi].nimi} 3 tuplaa peräkkäin!`);
        nykyinenPelaajaIndeksi = (nykyinenPelaajaIndeksi + 1) % pelaajaLista.length;
        
        
        paivitaPelaajanNimi();
        noppienSumma = 0;
        naytaSumma();
    }

    // nollataan tuplaskuri jos tulee muu kuin tupla
    if(tulos1 != tulos2 || tulos2 != tulos1){
        tuplalaskuri = 0;
    }


    // jos jompikumpi nopista on yksi
    if(tulos1 === 1 && tulos2 !=1 || tulos2 === 1 && tulos1 !=1){
        ykkonen();
        ilmoitus.innerHTML = (`${pelaajaLista[nykyinenPelaajaIndeksi].nimi} sai ykkösen!`);
        nykyinenPelaajaIndeksi = (nykyinenPelaajaIndeksi + 1) % pelaajaLista.length;
        
        
        paivitaPelaajanNimi();
        noppienSumma = 0;
        tuplalaskuri = 0;
        naytaSumma();
    }
    

    // ei näytetä pisteitä ennenkuin noppa on pysähtynyt
    setTimeout(naytaSumma,900);


}


//////////////////////////////////////////////////////////////////////////////////////

// funktio valitulle pelimuodolle

function valitseHeitto(){{
        if (onkoYksiNoppaaValittu) {
            heitaNoppaa();
        } else {
            heitaKahtaNoppaa();
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////
function naytaSumma(){
    noppienSummanaytto.innerHTML = (`Pisteet: ${noppienSumma}`);  
}

//////////////////////////////////////////////////////////////////////////////////////

// kerää-toiminto

function alaHeita(){
    // ääni
    keraaPisteet();

    // Lisätään noppien summa pelaajan pisteisiin, jos noppien summa on yli 1
    if (noppienSumma >1 ) {
        pelaajaLista[nykyinenPelaajaIndeksi].pisteet += noppienSumma;
        yhteispisteet += noppienSumma;

        if (pelaajaLista[nykyinenPelaajaIndeksi].pisteet >= 100) {
            gameOver();
          
        }

    }

    // Päivitä nykyisen pelaajan indeksi seuraavaan pelaajaan
    nykyinenPelaajaIndeksi = (nykyinenPelaajaIndeksi + 1) % pelaajaLista.length;

     
     paivitaPelaajanNimi();

      noppienSumma = 0;
      noppienSummanaytto.innerHTML = (`Pisteet: ${noppienSumma}`);


}


//////////////////////////////////////////////////////////////////////////////////////

let voittokuvaElementti = document.getElementById('voittokuva');
const kuvaHTML = '<img src="sikapeli/sikanoppa-kuvat/kruunu.png" alt="Kruunu" class="voittokuva">';

// peli päättyy toiminto
function gameOver(){
    voitto();

    voittokuvaElementti.innerHTML = kuvaHTML;
    
    document.getElementById('tulosnaytto2').style.display = 'none';
    document.getElementById('tulosnaytto').style.display = 'flex';
    document.getElementById('tulosnaytto').style.fontWeight = 'bold';
    document.getElementById('tulosnaytto').style.color = 'gold';
    document.getElementById('tulosnaytto').innerHTML ='Voittaja on';
    

    
   
    noppienSummanaytto.innerHTML = '';
    
    document.getElementById('kukaPelaa-naytto').style.display = 'none';
    document.getElementById('noppanayton-valikko').style.display = 'none';

    

    document.getElementById('voittajan-nimi').innerHTML =`<span class='voittaja'> <br> ${pelaajaLista[nykyinenPelaajaIndeksi].nimi}! </span>`;
    document.getElementById('eiheita').disabled = true;
    document.getElementById('heita').disabled = true;
    
    kukaPelaa.textContent ='';
    

   
}

//////////////////////////////////////////////////////////////////////////////////////

// uuden  pelin aloitus
function uusiPeli(){

    voittokuvaElementti.innerHTML = '';
    
    document.getElementById('noppanayton-valikko').style.display = 'block';
    document.getElementById('kukaPelaa-naytto').style.display = 'inline-block';
    document.getElementById('tulosnaytto2').style.display = 'flex';
    
    noppienSummanaytto.innerHTML = 'Pisteet: 0';
    yhteispisteet = 0;
  
    noppienSumma = 0;

    // tyhjennetään pelaajien pisteet
    pelaajaLista.forEach(function(pelaaja) {
        pelaaja.pisteet = 0;
    });

    nykyinenPelaajaIndeksi = 0;

    document.getElementById('pelaajan-pisteet').innerHTML = '';
    document.getElementById('tulosnaytto').innerHTML ='';
    document.getElementById('voittajan-nimi').innerHTML ='';

    document.getElementById('eiheita').disabled = false;
    document.getElementById('heita').disabled = false;

    paivitaPelaajanNimi();

 
}

//////////////////////////////////////////////////////////////////////////////////////
// animaatio nopille

function noppaPyorii() {
    let noppa = document.getElementById('tulosnaytto');
    noppa.style.animation = 'pyorahdys 1s ease';
    setTimeout(function() {
      noppa.style.animation = '';
    }, 1000);
  }

//////////////////////////////////////////////////////////////////////////////////////

  function noppaPyorii2() {
    let kuvat = document.querySelectorAll('#tulosnaytto2 img');
    kuvat.forEach(function(kuva) {
        kuva.style.animation = 'pyorahdys 1s ease'; 
    });
    setTimeout(function() {
        kuvat.forEach(function(kuva) {
            kuva.style.animation = ''; 
        });
    }, 1000);
  }