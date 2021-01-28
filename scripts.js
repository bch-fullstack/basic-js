let roundPlayed = 0;
const costOfOneRound = 0.5;
const timePerRound = 30;
const winsToBePlayed = 1000;

let winCounter = 0;

while(true) {
    while(true) {
        roundPlayed = roundPlayed + 1;
    
        let chosenArray = [
            Math.floor(Math.random() * 5),
            Math.floor(Math.random() * 5),
            Math.floor(Math.random() * 5),
            Math.floor(Math.random() * 5),
            Math.floor(Math.random() * 5)
        ];
        
        let counter = 0;
        let occurenceCounter = [0,0,0,0,0];
        
        while(true) {  
            switch(chosenArray[counter]){
                case 0:
                    occurenceCounter[0]++;
                    break;
                case 1:
                    occurenceCounter[1]++;
                    break;
                case 2:
                    occurenceCounter[2]++;
                    break;
                case 3:
                    occurenceCounter[3]++;
                    break;
                case 4:
                    occurenceCounter[4]++;
                    break;
                default: 
                    console.log('???');
                    break;
            }
        
            counter = counter + 1;
        
            if (counter === 5) {
                break;
            }
        }
        
        // console.log('There are ' + occurenceCounter[0] + ' zeroes');
        // console.log('There are ' + occurenceCounter[1] + ' ones');
        // console.log('There are ' + occurenceCounter[2] + ' twos');
        // console.log('There are ' + occurenceCounter[3] + ' threes');
        // console.log('There are ' + occurenceCounter[4] + ' fours');
        
        if (occurenceCounter[1] === 5) {
            console.log('Jackpot! You have won 1000!');
            console.log('Played: ' + roundPlayed + ' rounds');
            console.log('Spent: ' + (roundPlayed*costOfOneRound) + ' euros');
            console.log('Spent: ' + (roundPlayed*30)/3600 + ' hours');
            break;
        } 
    }    

    winCounter = winCounter + 1;
    if (winCounter === winsToBePlayed) {
        break;
    }
}

console.log('Spent average: ' + (roundPlayed*costOfOneRound)/winsToBePlayed + ' euros');
console.log('Won: ' + winsToBePlayed*1300 + ' euros');

