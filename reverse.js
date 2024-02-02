let sentence = 'I am a learning web dev.';


// for of loop reverse way ==============================================
let reversed = '';
for(const letter of sentence){
    reversed = letter + reversed;
}
// console.log(reversed);


// for loop reverse way========================================

let rev = '';
for(let i = 0; i < sentence.length ; i++){
    // console.log(sentence[i])
    const letter2 = sentence[i];
    rev = letter2 + rev;
    // console.log(rev)
};



// while loop revere way ===================================

let recvd = '';
let i = 0;
 while( i < sentence.length){
    // console.log(sentence[i])
    recvd = sentence[i] + recvd;
    i++;
 }
//  console.log(recvd);


//  split reverse ways==========================

const revd = sentence.split(' ').reverse().join(' ');
console.log(revd);