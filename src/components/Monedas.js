function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}


function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}
console.log( fiveHeadsSync() );
console.log( "This is run after the fiveHeadsSync function completes" );


function fiveHeads() {
    return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let headsCount1 = 0;
        let attempts = 0;
        while(headsCount < 5) {
            attempts++;
            let result = tossCoin();
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount1++;
            }
        }    
        if(headsCount === 5){
    resolve(`It took ${attempts}`);
        }else if(headsCount1 < 100){
            const error = new Error('Lo siento, demasiados intentos');
            reject(error);
        };
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );