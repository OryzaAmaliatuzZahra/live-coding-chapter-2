// nomor 1
// const x = 100000;
// const y = 500000;

function solution(x,y){
    if (y - (x*5) + 0.5 >= 500000) {
        console.log("Transaksi Gagal")
    }
}

console.log(solution(30, 20))
console.log(solution(42, 100))