function sorting(arrNumber) {
    // code di sini
    if( arrNumber.length <= 1 || !arrNumber){
        return countHighest = ''
    }
    var i = 0
    while( i < arrNumber.length){
        if( arrNumber[i] > arrNumber[i+1]){
        var temp = arrNumber[i]
        arrNumber[i] = arrNumber[i+1]
        arrNumber[i+1] = temp
        i = 0
            }
            i++
        }
    return arrNumber
  }
  
  function getTotal(arrNumber) {
    // code di sini
    if( arrNumber.length <= 1 || !arrNumber){
        return countHighest = ''
    }
    var listSort = sorting(arrNumber)
    var maxlength = 0
    //var majority = 0
    
    for( var i = 0 ; i < listSort.length ; i++){
        if(listSort[i] === listSort[listSort.length-1]){
            maxlength++
        }
    }
    var result = 'angka paling besar adalah ' + listSort[listSort.length-1] + ' dan jumlah kemunculan sebanyak ' + maxlength + ' kali' 
    //     if( temporary.length > maxlength ){
    //         maxlength = temporary.length
    //         majority = temporary[0]
    //     }
    // }
     return result
  }

  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''