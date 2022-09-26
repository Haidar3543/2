var p = prompt("pilih : gajah,orang,semut");
var comp = Math.random();

if (comp < 0.34) {
  comp = "gajah";
} else if (comp >= 0.34 && comp < 0.67) {
  comp = "orang";
} else {
  comp = "semut";
}
var t = "";
if (p == comp) {
  t = "seri";
} else if (p == "gajah") {
  if (comp == "orang") {
    t = "menang";
  } else {
    t = "kalah";
  }
} else if (p == "orang") {
  if (comp == "gajah") {
    t = "kalah";
  } else {
    t = "menang";
  }
} else if (p == "semut") {
  if (comp == "gajah") {
    t = "menang";
  } else {
    t = "kalah";
  }
} else {
  t = "anda salah";
}
alert("kamu memilih apa : " + p + " dan komputer memilih : " + comp + "\nmaka hasilnya : kamu " + t);
