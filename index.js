// add solution here
let musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
let instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
let emptyarray=[]

function theBeatlesPlay(musicians,instruments){
    for (let i=0;i<musicians.length;i+=1){
        emptyarray.push(`${musicians[i]} plays ${instruments[i]}`);
    }
return emptyarray;
}
