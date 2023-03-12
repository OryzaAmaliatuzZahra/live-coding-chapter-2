// while loops = salah satu cara untuk kita melakukan iteration
// atau perulangan
// while (condition)
// kondisinya print angka 1-100

let number = 1

while (number <= 100) {
    // code yang di dalam sini, akan terus jalan selama itu kondisi yang diatas tidak terpenuhi/tidak true
    // console.log(number)
    number += 1
}

// kondisinya print 1 - 100 tapi angka perkalian 5
number = 1
while (number <= 100) {
    // code yang di dalam sini, akan terus jalan selama itu kondisi yang diatas tidak terpenuhi/tidak true
    if (number % 5 === 0) {
        // console.log(number)
    }
    number += 1
}

// for loops
// for(variable;condition;update)
// i++ === i + 1, i-- === i - 1
let angka = 1
for(let i = 0;i < 100; i++) {
    // console.log(i)
    // print tiap angka kelipatan 3, ini kelipatan 3
    if(i % 3 === 0){
        console.log("Ini kelipatan 3")
    } else {
        console.log(i)
    }
}