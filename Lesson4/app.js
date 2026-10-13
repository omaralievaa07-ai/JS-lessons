//  циклдар

//  for-цикл
// while-цикл


// for ( i=0; i<10; i++){
//     console.log('Hello word' + i);
// }


// let i= true;
// while (i){
//     console.log ('Hello word' +i)
//     i++;
// }



// for(i=0; i<10; i++){
//     if ( i == 5){
//         // break
//         continue;
//     }
//     console.log(i)
// }


// ---------------------------------------


let tableCount = Number(prompt("Канча таблица чыгарыш керек?"));
let limit = Number(prompt("Ар бир таблица канчага чейин эсептелсин?"));

for (let i = 1; i <= tableCount; i++) {
    console.log("----- " + i + " таблица -----");

    for (let j = 1; j <= limit; j++) {
        console.log(i + " × " + j + " = " + (i * j));
    }

    console.log("i * j");
}