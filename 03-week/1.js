/**
 * =======================
 * Will you pass the test?
 * =======================
 *
 * Description
 * -----------
 * Seorang murid di Sekolah Hacktiv8 ingin mengetahui nilai akhir dari
 * ujian livecode yang dia lakukan 3 kali. Nilai akhir didapat dari rata-rata ketiga nilai
 * livecode dan ditampilkan dalam skala huruf A-E dengan detail sebagai berikut:
 * A -> 80 - 100
 * B -> 70 - 79
 * C -> 60 - 69
 * D -> 50 - 59
 * E -> 0 - 49
 *
 * Instruction
 * -----------
 * Diketahui nilai murid tersebut adalah 70, 80, dan 90
 * Buatlah pseudocode untuk mencari nilai akhir murid tersebut.
 */

// Write pseudocode here
/*
STORE nilaiSatu WITH value 70
STORE nilaiDua WITH value 80
STORE nilaiTiga WITH value 90
STORE rataRata

CALCULATE nilaiSatu PLUS nilaiDua PLUS nilaiTiga
ASSIGN rataRata WITH calculated Result DIVIDE by 3

IF rataRata EQUAL to MORE than 80 AND rataRata EQUAL to LESS or EQUAL to 100
    DISPLAY 'A'
ELSE IF rataRata EQUAL to MORE than 70 AND rataRata EQUAL to LESS than 80
    DISPLAY 'B'
ELSE IF rataRata EQUAL to MORE than 60 AND rataRata EQUAL to LESS than 70
    DISPLAY 'C'
ELSE IF rataRata EQUAL to MORE than 50 AND rataRata EQUAL to LESS than 60
    DISPLAY 'D'
ELSE IF rataRata EQUAL to MORE than 0 AND rataRata EQUAL to LESS than 50
    DISPLAY 'E'
*/