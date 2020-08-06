/*
KÁVÉFŐZŐ BEKAPCSOLÁSA
IF NINCS ELÉG KÁVÉ THEN
  KÁVÉ HOZZÁADÁSA
ENDIF

IF NINCS ELÉG VÍZ THEN
  VÍZ HOZZÁADÁSA
ENDIF

WHILE NEM MELEGEDETT FEL
  10 MP VÁRAKOZÁS
ENDWHILE
CSÉSZE ODAHELYEZÉSE
GOMB MEGNYOMÁSA
*/

/* 
Összegzés algoritmusa

összeg = 0
CIKLUS AMÍG van még szám, ADDIG
    szám = kövtekező elem
    összeg = összeg + szám
CIKLUS VÉGE
*/

let numericArray = [3, 2, 1, 4, 5, 6, 7, 9];
let sum = 0
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}
console.log("Sum: ", sum);

/*
Számlálás algoritmusa:

    db = 0
CILKUS AMÍG  van még szám, ADDIG
    szám = kövtekező elem
    HA igaz a feltétel számára, AKKOR
        db = db + 1
    FELTÉTEL  VÉGE
CIKLUS VÉGE
*/
let db = 0;
for(let i = 0; i < numericArray.length; i++){
    if (numericArray[i] % 2 == 0){
        db ++; 
    }
}
console.log("Even numbwers: ", db);


/*
Szélsőérték keresés algoritmusa:

legnagyobb = első elem
CIKLUS AMÍG van még szám, ADDIG
    szám = következő szám
    HA szám > legnagyobb, AKKOR
    legnagyobb = szám
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let biggest = numericArray[0];
for(let i = 0; i < numericArray.length; i++){
    if (numericArray[i] > biggest){
        biggest= numericArray[i];
    }

    
}
console.log("The biggest element: ", biggest);

let smallest = numericArray[0];
for(let i = 0; i < numericArray.length; i++){
    if (numericArray[i] < smallest){
        smallest= numericArray[i];
    }

    
}
console.log("The smallest element: ", smallest);
/*
Eldöntés tétel algoritmusa:

találat = HAMIS
CIKLUS AMÍG van elem és HAMIS a találat
    szám = következő elem
    HA IGAZ a feltétel a számra, AKKOR
        találat = IGAZ
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let contains = false;
for(let i = 0; i<numericArray.length && contains == false; i++){
    if (numericArray[i] == 2) {
        contains = true;
    }

}
console.log("This array contains 5: ", contains);