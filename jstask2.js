let data = [
    {
        principal: 2500,
        time: 1.8,
    },
    {
        principal: 1000,
        time: 5,
    },
    {
        principal: 3000,
        time: 1,
    },
    {
        principal: 2000,
        time: 3,
    }
]

let interestData = []; 

//simple interest function
let interestCalculator = (dodo) => {
    for ( let dataItem of dodo ) {
        if ( dataItem.principal >= 2500 && dataItem.time > 1 < 3) {
            dataItem.rate = 3;
        } else if ( dataItem.principal >= 2500 && dataItem.time >= 3) {
            dataItem.rate = 4;
        } else if ( dataItem.principal < 2500 || dataItem.time <= 1) {
            dataItem.rate = 2;
        } else {
            dataItem.rate = 1;
        }
        dataItem.interest = (dataItem.principal * dataItem.rate * dataItem.time)/100;
        interestData.push(dataItem);
    }
    
}

interestCalculator(data); 
interestData; 
