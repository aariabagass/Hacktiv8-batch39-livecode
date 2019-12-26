/**
 * ====================
 * Balance those words!
 * ====================
 * 
 * Instruction
 * -----------
 * Buatlah sebuah function yang mengecek apakah jumlah kata yang diterima function muncul
 * dengan jumlah frekuensi yang sama.
 * 
 * Function menerima 1 parameter @str yang merupakan sebuah kalimat dan me-return:
 * true -> jika seluruh kata yang muncul memiliki frekuensi yang sama
 * false -> jika jumlah kata yang muncul berbeda
 * 
 * Example
 * -------
 * 1. var @str = 'kita hanya teman'
 * karena kata kita, hanya, dan teman semuanya muncul sekali, maka @output = true
 * 
 * 2. var @str = 'buat apa susah susah itu tak ada gunanya'
 * kata susah muncul 2x dan sisanya muncul sekali, maka @output = false
 * 
 * Rules
 * -----
 * 1. Dilarang menggunakan built-in function:
 *    split, slice, splice, substring, substr, reduce, filter, map, includes, indexOf, lastIndexOf, some, every
 */

function word(str) {
  // your code here
  temp = ''
  data = []
  //split
  for (i = 0; i <= str.length; i++) {
    if (str[i] !== ' ' && i !== str.length) {
      temp += str[i]
    } else {
      data.push(temp)
      temp = ''
    }
  }
  //end split
  var tamp = []
  for (var i = 0; i < data.length; i++) {
    cek = false
    for (var j = 0; j < tamp.length; j++) {
      if (data[i] === tamp[j][0]) {
        tamp[j][1] = tamp[j][1] + 1
        cek = true
      }
    }
    if (cek == false) {
      tamp.push([data[i], 1])
    }
  }
  //condition
  for (k = 0; k < tamp.length; k++) {
    if (tamp[0][1] !== tamp[k][1]) {
      return false
    }
  }
  return true
}
console.log(word('saya'))
// true
console.log(word('saya kamu'))
// true
console.log(word('saya makan saya'))
// false
console.log(word('aku tahu kamu tahu aku tapi kamu tahu kamu tapi aku tahu tapi aku kamu tapi'))
// true
console.log(word('kuku kaki kuku kaki kaka kaka kaku kaku'))
// true
console.log(word('botak tabok batak botak tabok batak botak tabok batak botak tabok batak botak batok batak botak tabok batak botak tabok batak botak tabok batuk botak tabok batak botak tabok batak botak tabok batak'))
// false
console.log(word('cangkir cangkir kencur cengkeh kencur cangkir cangkir kencur cengkeh kencur cangkir kencur cengkeh cengkeh cengkeh cangkir cangkir kencur cengkeh kencur cangkir cangkir kencur cengkeh cangkir kencur cengkeh kencur cengkeh cengkeh cangkir cangkir kencur cengkeh kencur cengkeh'))
// true