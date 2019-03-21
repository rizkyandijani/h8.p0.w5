function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var angkaString = angka.toString()
    var hasilKali = 1
    for( var i = 0 ; i < angkaString.length ; i++){
        hasilKali *= Number(angkaString[i])
    }
    hasilKaliString = hasilKali.toString()
    if(hasilKaliString.length === 1){
        return hasilKaliString
    }
    else{
        return kaliTerusRekursif(hasilKali)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6