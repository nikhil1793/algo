function spiral(n){
    var result = [];

    for(let i=0 ;i<n;i++){
        result.push([]);
    }

    var counter = 1;
    var startCol = 0;
    var endCol = n-1;
    var startRow = 0;
    var endRow = n-1;

    while(startCol <= endCol && startRow <= endRow){
        //top row
        for(let col=startCol;col<=endCol;col++){
           result[startRow][col] = counter;
           counter++; 
        }
        startRow++;
        //Right Column
        for(let row=startRow;row<=endRow;row++){
            result[row][endCol] = counter;
            counter++; 
        }
        endCol--;
        //bottom row
        for(let col=endCol;col>=startCol;col--){
            result[endRow][col] = counter;
            counter++; 
        }
        endRow--;
        //left
        for(let row=endRow;row>=startRow;row--){
            result[row][startCol] = counter;
            counter++; 
         }
         startCol++;
    }
   return result;
}

var result = spiral(5);
console.log(result);

