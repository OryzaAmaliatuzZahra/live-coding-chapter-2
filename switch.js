// object
let student = {
    name: "Wira",
    gender: "",
    rank: 5
}

// array of object
let students = [
    {
        name: "Wira",
        gender: "male"
    },
    {
        name: "Helmy",
        gender: "male"
    },
    {
        name: "Oryza",
        gender: "female"
    },
    {
        name: "Riza",
        gender: "female"
    }
]



// switch statement
switch (student.rank) {
    case 1:
        console.log("Dia mendapatkan medali emas")
        break;
    case 2:
        console.log("Dia mendapatkan medali silver")
        break;
    case 3:
        console.log("Dia mendapatkan medali perak")
        break;
    default:
        console.log("Dia tidak dapat medali apa apa")
}

// switch (student.gender) {
//     case "female":
//         console.log("Dia perempuan")
//         break;
//     case "male":
//         console.log("Dia laki laki")
//         break;
//     case "":
//         console.log("Dia belum memasukkan gender")
// }