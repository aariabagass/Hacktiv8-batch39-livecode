/*
================
Format Uang (KBBI)
================
[INSTRUCTIONS]
  formatUang adalah sebuah function yang menerima satu parameter berupa number.
  function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
  Rp1.500,00
[RULE]
  - Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
  - Dilarang menggunakan regex .match dan lainnya!
[EXAMPLE]
  formatUang(2000)
  output: Rp2.000,00
*/
function formatUang(number) {
  var str = String(number)
  var temp = ''
  var temp2 = ''
  var hasil = ''
  for (i = str.length - 1; i >= 0; i--) {
    temp += str[i]
  }
  for (j = 0; j < temp.length; j++) {//0009
    if (j % 3 == 0 && j !== 0) {
      temp2 = temp2 + '.' + temp[j]
    }
    else {
      temp2 = temp2 + temp[j]
    }
  }
  for (k = temp2.length - 1; k >= 0; k--) {
    hasil += temp2[k]
  }
  return `Rp${hasil},00`
}
console.log(formatUang(9000)); // Rp9.000,00
console.log(formatUang(250)); // Rp250,00
console.log(formatUang(250000)); // 250.000,00
console.log(formatUang(1000000)); // Rp1.000.000,00
console.log(formatUang(5867938)); // Rp5.867.938,00
