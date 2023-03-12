const levelCharacter = 10

// kalau level lebih dari 10, maka boleh lanjut babak selanjutnya
if (levelCharacter > 15) {
    // code yang dibawah/di dalam sini akan jalan/run saat kondisinya TRUE
    // console.log("lanjut babak selanjutnya")
} else {
    // code yang dibawah/di dalam sini akan jalan/run saat kondisinya FALSE
    // console.log("latihan lagi di babak ini")
}

let student = {
    name: "Wira",
    gender: "female"
}

// else if statement
// apakah student itu male?
if (student.gender == "male") {
    // console.log("yah dia male")
} else if (student.gender === "female") {
    // console.log("dia female")
} else {
    // console.log("tidak diketahui")
}