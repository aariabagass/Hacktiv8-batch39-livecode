/**
 * ===================
 * SECRET PHONE NUMBER
 * ===================
 * 
 * 
 * Function ini akan mengubah 5 digit di belakang nomor handphone, menjadi '*', 
 * 
 * contoh : 
 *  1. input: "081267465370" -> 5 angka dibelakangnya adalah 65370
 *     output: "0812674*****"
 *  2. input: "08537582711" -> 5 angka dibelakangnya adalah 82711
 *     output: "085375*****"
 * 
 *  - Jika nomor handphone kurang dari 10 digit, maka function akan mereturn:
 *      "Invalid phone number"
 * 
 * RULES: 
 *  1. Wajib menggunakan pseudocode
 *  
 */

function secretPhoneNumber(numbers) {
  // your code here
  if (numbers.length < 10) {
    return 'Invalid phone number'
  }                                         // 1 2 3 4 5 6 7 8 9 10 11 12
  tampung = '';                            // 0 8 1 2 6 7 4 6 5 3 7 0 
  for (i = 0; i < numbers.length; i++) { // 0
    if (i >= numbers.length - 5) { //=7
      tampung = tampung + '*'
    } else {
      tampung = tampung + numbers[i]
    }
  }
  return tampung
}

console.log(secretPhoneNumber("081267465370"))
// 0812674*****
console.log(secretPhoneNumber("08537582711"))
// 085375*****
console.log(secretPhoneNumber("085758271523"))
// 0857582*****
console.log(secretPhoneNumber("0811739915"))
// 08117*****
console.log(secretPhoneNumber("08238797"))
// "Invalid phone number"