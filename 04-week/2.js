/**
 * ================
 * Pair Programming
 * ================
 * 
 * Instruction
 * -----------
 * Buatlah funtion pair untuk mengembalikan sebuah array of names, dimana names tersebut
 * adalah pasangan dari 2 nama yang digabung ke dalam 1 string, jika ada yang tidak mendapatkan
 * pasangan maka orang tersebut dianggap sendirian.
 * 
 * Example
 * -------
 * @input = 'vindo,marcel,isni,ajeng,kevin'
 * proses:
 * vindo dipasangkan dengan marcel -> 'vindo dan marcel'
 * isni dipasangkan dengan ajeng -> 'isni dan ajeng'
 * kevin tidak punya pasangan -> 'kevin sendirian'
 * 
 * maka @output = [
 *  'vindo dan marcel',
 *  'isni dan ajeng',
 *  'kevin sendirian'
 * ]
 * 
 * Rules
 * -----
 * 1. Tidak boleh menggunakan built-in function: split, slice, splice, join
 */

function pair(str) {
  pisah = ''
  hasil = []
  for (i = 0; i <= str.length; i++) {
    if (str[i] !== ',' && i !== str.length) {
      pisah += str[i]
    } else {
      hasil.push(pisah)
      pisah = ''
    }
  }//genap pasangin ganji
  if (hasil == 0) {
    return 'No pair'
  }
  akhir = []
  if (hasil.length % 2 == 0) { //jika test case genap 
    for (i = 0; i < hasil.length; i += 2) {
      akhir.push(hasil[i] + " dan " + hasil[i + 1]);
    }
  } else if (hasil.length % 2 == 1) { //jika test case ganjil
    for (i = 0; i < hasil.length; i += 2) {
      if (i != hasil.length - 1) { //jika dia tidak genap
        akhir.push(hasil[i] + " dan " + hasil[i + 1]);
      } else {
        akhir.push(hasil[i] + " sendirian ");
      }
    }
  }
  return akhir;
}

console.log(pair('yusuf,tony,adiel'))
// [ 'yusuf dan tony', 'adiel sendirian' ]

console.log(pair('fajrin,sahata,onesinus,jetly'))
// [ 'fajrin dan sahata', 'onesinus dan jetly' ]

console.log(pair('refqi,fahmi,sinung,arif,gusti'))
// [ 'refqi dan fahmi', 'sinung dan arif', 'gusti sendirian' ]

console.log(pair(''))
// No pair