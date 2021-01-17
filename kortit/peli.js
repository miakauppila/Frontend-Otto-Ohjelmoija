//Pelaajan kasi, nostaa voi monta kertaa
function nostakortti() {
	arvo = kortit[kortti][1];
	maakoodi = kortit[kortti][0];
	summa = summa + kortit[kortti][1];
	kortti++;
	if (kortti == 3) {
		document.getElementById("p3").style.backgroundImage ="none";
		if (maakoodi == "&clubs;" || maakoodi == "&spades;") {
			document.getElementById("p3").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit spades'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
		} else {
			document.getElementById("p3").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit hearts'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";	
		}
	}
	if (summa > 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Hävisit" + "<p>" + "<button onclick='pelaaUudestaan()'>Uusi peli</button>" + "</p>" + "</div>" + "</div>";
		
	} else if (summa == 21) {
			document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Voitit" + "<p>" + "<button onclick='pelaaUudestaan()'>Uusi peli</button>" + "</p>" + "</div>" + "</div>";		
		}
		
	if (kortti == 4) {
		document.getElementById("p4").style.backgroundImage ="none";
		if (maakoodi == "&clubs;" || maakoodi == "&spades;") {
			document.getElementById("p4").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit spades'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
		} else {
			document.getElementById("p4").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit hearts'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";	
		}
	}
	if (summa > 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Hävisit" + "<p>" + "<button onclick='pelaaUudestaan()'>Uusi peli</button>" + "</p>" + "</div>" + "</div>";	
	} else if (summa == 21) {
			document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Voitit" + "<p>" + "<button onclick='pelaaUudestaan()'>Uusi peli</button>" + "</p>" + "</div>" + "</div>";		
		}
	if (kortti == 5) {
		document.getElementById("p5").style.backgroundImage ="none";
	if (maakoodi == "&clubs;" || maakoodi == "&spades;") {
		document.getElementById("p5").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit spades'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
		} else {
		document.getElementById("p5").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit hearts'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";	
		}
	}
	if (summa > 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Hävisit" + "<p>" + "<button onclick='pelaaUudestaan()'>Uusi peli</button>" + "</p>" + "</div>" + "</div>";	
	} else if (summa == 21 || kortti == 5) {
			document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Voitit" + "<p>" + "<button onclick='pelaaUudestaan()'>Uusi peli</button>" + "</p>" + "</div>" + "</div>";		
		}
}
//Jakajan käsi (tulee esiin Jää napista, jota painetaan vain kerran)
function jaa() {
	//jakajan summan lasku
	var summa1 = 0;
	arvo = kortit[kortti][1];
	maakoodi = kortit[kortti][0];
	//Jakajan kortti1
	var jkortti = 1;
	document.getElementById("j1").style.backgroundImage ="none";
	if (maakoodi == "&clubs;" || maakoodi == "&spades;") {
		document.getElementById("j1").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit spades'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
		} else {
			document.getElementById("j1").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit hearts'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";	
	}
	summa1 = summa1 + kortit[kortti][1];
	if (summa1 >= summa) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Jakaja voitti" + "<p>" + "<button onclick='pelaaUudestaan()'>Uusi peli</button>" + "</p>" + "</div>" + "</div>";	
	return;}
	kortti++;
	jkortti++;
	
	//JKortti2
	arvo = kortit[kortti][1];
	maakoodi = kortit[kortti][0];
	document.getElementById("j2").style.backgroundImage ="none";
	if (maakoodi == "&clubs;" || maakoodi == "&spades;") {
		document.getElementById("j2").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit spades'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
		} else {
			document.getElementById("j2").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit hearts'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";	
	}
	
	//If summa1>21 Jakaja hävisi
	//else if summa1==21 tai summa1>=summa Jakaja voitti
	summa1 = summa1 + kortit[kortti][1];
	if (summa1 > 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Jakaja hävisi" + "<p>" + "<button onclick='pelaaUudestaan()'>Uusi peli</button>" + "</p>" + "</div>" + "</div>";	
		return;} else if (summa1 == 21 || summa1 >= summa) {
			document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Jakaja voitti" + "<p>" + "<button onclick='pelaaUudestaan()'>Uusi peli</button>" + "</p>" + "</div>" + "</div>";		
			return;}
	kortti++;
	jkortti++;
	
	//JKortti3
	arvo = kortit[kortti][1];
	maakoodi = kortit[kortti][0];
	document.getElementById("j3").style.backgroundImage ="none";
	if (maakoodi == "&clubs;" || maakoodi == "&spades;") {
		document.getElementById("j3").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit spades'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
		} else {
			document.getElementById("j3").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit hearts'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";	
	}
	summa1 = summa1 + kortit[kortti][1];
	if (summa1 > 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Jakaja hävisi" + "<p>" + "<button onclick='pelaaUudestaan()'>Uusi peli</button>" + "</p>" + "</div>" + "</div>";	
		return;} else if (summa1 == 21 || summa1 >= summa) {
			document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Jakaja voitti" + "<p>" + "<button onclick='pelaaUudestaan()'>Uusi peli</button>" + "</p>" + "</div>" + "</div>";		
			return;}
	kortti++;
	jkortti++;
	
	//JKortti4
	arvo = kortit[kortti][1];
	maakoodi = kortit[kortti][0];
	document.getElementById("j4").style.backgroundImage ="none";
	if (maakoodi == "&clubs;" || maakoodi == "&spades;") {
		document.getElementById("j4").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit spades'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
		} else {
			document.getElementById("j4").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit hearts'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";	
	}
	summa1 = summa1 + kortit[kortti][1];
	if (summa1 > 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Jakaja hävisi" + "<p>" + "<button onclick='pelaaUudestaan()'>Uusi peli</button>" + "</p>" + "</div>" + "</div>";	
		return;} else if (summa1 == 21 || summa1 >= summa) {
			document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Jakaja voitti" + "<p>" + "<button onclick='pelaaUudestaan()'>Uusi peli</button>" + "</p>" + "</div>" + "</div>";		
			return;}
	kortti++;
	jkortti++;
	
	//JKortti5
	arvo = kortit[kortti][1];
	maakoodi = kortit[kortti][0];
	document.getElementById("j5").style.backgroundImage ="none";
	if (maakoodi == "&clubs;" || maakoodi == "&spades;") {
		document.getElementById("j5").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit spades'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
		} else {
			document.getElementById("j5").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit hearts'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";	
	}
	summa1 = summa1 + kortit[kortti][1];
	if (summa1 > 21) {
		document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Jakaja hävisi" + "</div>" + "</div>";	
		return;} else if (summa1 == 21 || summa1 >= summa || jkortti == 5) {
			document.getElementById("loppu").innerHTML = "<div id='overlay'>" + "<div id='gameover'>" + "Jakaja voitti" + "</div>" + "</div>";		
		return;}
}
//Korttipakan luonti ja sekoitus
//Kaksiulotteinen taulukko jossa ensimmäinen sarake on maa ja toinen sarake arvo. Taulukko luodaan "yksiulotteisena", JS muokkaa kun arvoja pushataan.
var maa = '';
var kortit = [];
for (var y = 0; y < 4; y++) {
	if (y == 0) {
		maa = "&clubs;";
	}
	if (y == 1) {
		maa = "&hearts;";
	}
	if (y == 2) {
		maa = "&diams;";
	}
	if (y == 3) {
		maa = "&spades;";
	}
	for (var x = 0; x < 13; x++){
		kortit.push([
		maa,
		x+1
		])
	}
};
kortit.sort(function(a, b){return 0.5 - Math.random()});
//kortti on laskuri, kuinka monta korttia otettu. 0 ensimmäinen.
// Ensimmäiset kaksi korttia pelaajalle
var kortti = 0;
//arvo otetaan kortit taulukosta indeksistä 0,1 (rivi 0, sarake 1)
var arvo = kortit[kortti][1];
//maakoodi otetaan kortit taulukosta indeksistä 0,0 (rivi 0, sarake 0)
var maakoodi = kortit[kortti][0];
var summa = kortit[kortti][1];
// kasvatetaan laskuria
kortti++;
document.getElementById("p1").style.backgroundImage ="none";
if (maakoodi == "&clubs;" || maakoodi == "&spades;") {
	document.getElementById("p1").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit spades'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
	} else {
	document.getElementById("p1").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit hearts'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";	
}
arvo = kortit[kortti][1];
maakoodi = kortit[kortti][0];
summa = summa + kortit[kortti][1];
kortti++;
document.getElementById("p2").style.backgroundImage ="none";
if (maakoodi == "&clubs;" || maakoodi == "&spades;") {
	document.getElementById("p2").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit spades'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";
	} else {
	document.getElementById("p2").innerHTML = "<div class='value-top'>" + arvo + "</div><div class='suit hearts'>" + maakoodi + "</div><div class='value-bottom'>" + arvo + "</div>";	
}
if (summa > 21) {
	document.getElementById("loppu").innerHTML = "<div id='overlay'  >" + "<div id='gameover'>" + "Hävisit" + "<p>" + "<button onclick='pelaaUudestaan()'>Uusi peli</button>" + "</p>" + "</div>" + "</div>";	
	} else if (summa == 21) {
	document.getElementById("loppu").innerHTML = "<div id='overlay'  >" + "<div id='gameover'>" + "Voitit" + "<p>" + "<button onclick='pelaaUudestaan()'>Uusi peli</button>" + "</p>" + "</div>" + "</div>";	
}

function pelaaUudestaan() {
	location.reload();
}

