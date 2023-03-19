// Code your solutions in this file
// writeCards(["Charlie", "Samip", "Ali"], "birthday");

function writeCards(name){
    let message=[]
    for ( let j=0; j<name.length; j++ ){
        message.push(`Thank you, ${name[j]}, for the wonderful surprise gift!`);
    }
    return message;
}
// invokes console.log once for each number, counting down from the number provided to zero
function countDown(name){
    
    while ( name> 0){
        console.log(name)
        name--;
    }
    // logs each number when counting down, starting from the number provided
    console.log(name)
}