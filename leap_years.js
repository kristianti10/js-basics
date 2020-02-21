// Buat function untuk me-return tahun kabisat dari range tahun yang diberikan
// misalanya 2015-2020 ada 2 tahun kabisat yaitu 2016 dan 2019

function leapyear(year) {
  let leapyear   
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016));
console.log(leapyear(2000));
console.log(leapyear(1700));
console.log(leapyear(1800));
console.log(leapyear(100));

  // kalian bisa lihat defenisi tahun kabisat di wikipedia.
  // serta algoritma untuk menentukan tahun kabisatya.