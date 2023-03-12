// const gebetan = {
//     name: "Joko",
//     isOnline: false,
// }

// if (gebetan.isOnline) {
//     console.log(`Halo, ${gebetan.name}!`);
//     console.log("Lagi ngapain nih! Sleepcall yuk!");
// } else {
//     console.log(`${gebetan.name} kemana?`)
// }

// const initialFloorLevel = 1;

// for (let floorLevel = initialFloorLevel; floorLevel <= 5; floorLevel++) {
//     console.log("Aku lagi di lantai", floorLevel);
//     console.log("Negepel!");
//     console.log("Meres pel!");
//     console.log("Ngepel lagi!");
// }

// const maxFloorLevel = 5;
// let floorLevel = 1;

// function getRandomInt(min, max) {
//     min = Math.floor(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// while (floorLevel <= maxFloorLevel) {
//     let isSpotless = false;
//     console.log("Ngepel lantai", floorLevel);

//     // simulasi peluang lantai, spotless atau ngga setelah dipel
//     let godsWill = getRandomInt(0, 1);

//     // 0 berarti lantainya ga spotless setelah dipel
//     if (godsWill === 0) isSpotless = true;

//     // kalau lantainya udah gada noda, bisa lanjut ke lantai berikutnya
//     if (isSpotless) floorLevel++;
// }

// const maxFloorLevel = 5;
// let floorLevel = 1;

// function getRandomInt(min, max) {
    // min = Math.floor(min);
    // max = Math.floor(max);
    // return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// do {
//     let isSpotless = false;
//     console.log("Ngepel lantai", floorLevel);

//     // simulasi peluang lantai, spotless atau ngga setelah dipel
//     let godsWill = getRandomInt(0, 1);

//     // 0 berarti lantainya ga spotless setelah dipel
//     if (godsWill === 0) isSpotless = true;

//     // kalau lantainya udah gada noda, bisa lanjut ke lantai berikutnya
//     if (isSpotless) floorLevel++;
// } while(floorLevel <= maxFloorLevel);

const x = 1;
const y = 2;
const z = 3;

function sayIfOdd(number) {
    if (number % 2 !==0) {
        console.log(number, "itu ganjil");
    } else {
        console.log(number, "itu genap");
    }
}

sayIfOdd(x);
sayIfOdd(y);
sayIfOdd(z);