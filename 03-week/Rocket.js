/**
 * ============
 * Diagon Alley
 * ============
 * 
 * Instruction
 * -----------
 * Buatlah sebuah function yang dapat menampilkan input secara diagonal seperti berikut:
 * 
 * Example
 * -------
 * @input = 'Hacktiv8'
 * @output =
 * H
 *  a
 *   c
 *    k
 *     t
 *      i
 *       v
 *        8
 */
/*
function diagonAlley(str) {
  // Write your code here
  for (let i = 0; i <= str.length - 1; i++) {
    let temp = ''
    for (let j = 0; j <= str.length - 1; j++) {
      if (i == j) {
        temp += str[i];
      } else {
        temp += ' '
      }
    }
    console.log(temp);
  }
  return ''
}
*/


function diagonAlley(str) {
  var hasil = ""
  for (var i = 0; i < str.length; i++) {
    var temp = str[i]
    console.log(hasil + temp)
    hasil = hasil + " "
  }
  return hasil
}

console.log(diagonAlley('yusuf'))
/*
y
 u
  s
   u
    f
*/
console.log(diagonAlley('adiel'))
/*
a
 d
  i
   e
    l
*/
console.log(diagonAlley('tony'))
/*
t
 o
  n
   y
*/