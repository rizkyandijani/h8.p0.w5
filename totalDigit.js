function totalDigitRekursif(angka) {
    // you can only write your code here!
    var angkaString = angka.toString()
    if( angkaString.length === 1){
        return Number(angkaString[0])
    }
    else{
        var result = Number(angkaString[0])
        return result + totalDigitRekursif(angkaString.slice(1))
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5