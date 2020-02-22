// buat function yang mereturn string yang tidak memiliki huruf vowel (a, i, u, e, o);

function removeVowels(str) {
  let kalimatHurufKecil =  str.toLowerCase();
  // return kalimatHurufKecil
  var kalimatConsonan = ''
  for (let i = 0; i < kalimatHurufKecil.length; i++) {
    if(kalimatHurufKecil[i] == 'a' || kalimatHurufKecil[i] == 'i'
    || kalimatHurufKecil[i] == 'u'
    || kalimatHurufKecil[i] == 'e'
    || kalimatHurufKecil[i] == 'o' ) {
      
    }else{
      kalimatConsonan = kalimatConsonan+kalimatHurufKecil[i]
    }
  }

  return kalimatConsonan;
}
console.log(removeVowels("I have never seen a thin person drinking Diet Coke."))
console.log(removeVowels("We're gonna build a wall!"))
console.log(removeVowels("Happy weekend guys!"))

//loop sepanjang stringnya



// removeVowels("I have never seen a thin person drinking Diet Coke.") // " hv nvr sn  thn prsn drnkng Dt Ck."
// removeVowels("We're gonna build a wall!") // "W'r gnn bld  wll!"
// removeVowels("Happy weekend guys!") // "Hppy wknd gys!"
