var str = 'Sergei Dragunov'
function changeVocals (str) {

    //code di sini
    var vokal = {
        a: 'b',
        i: 'j',
        u: 'v',
        e: 'f',
        o: 'p',
        A: 'B',
        I: 'J',
        U: 'V',
        E: 'F',
        O: 'P'
    }
    var strRev = ''
    for( var i = 0 ; i < str.length ; i++){
        if( vokal[str[i]] !== undefined){
            strRev += vokal[str[i]]
        }
        else{
        strRev += str[i]
        }
    }
    
    return strRev
  }
  
  function reverseWord (str) {
    //code di sini
    var strRev = ''
    for(var i = 0 ; i < str.length ; i++){
        strRev = str[i] + strRev
        }

    return strRev
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    var strRev = ''
    for(var i = 0 ; i < str.length ; i++){
        if(str[i].toLowerCase() === str[i]){
            strRev +=str[i].toUpperCase()
        }
        else{
            strRev += str[i].toLowerCase()
        }
    }
    return strRev

  }
  
  function removeSpaces (str) {
    //code di sini
    var strRev = ''
    for(var i = 0 ; i < str.length ; i++){
        if(str[i] !== " "){
            strRev += str[i]
        }
    }

    return strRev
  }
  
  function passwordGenerator (name) {
    //code di sini
    if( name.length < 5){
        return "Minimal karakter yang diinputkan adalah 5 karakter"
    }
    var vocalChanged = changeVocals(name)
    var wordReversed = reverseWord(vocalChanged)
    var lowerUpperCaseSetting = setLowerUpperCase(wordReversed)
    var SpacesRemoved = removeSpaces(lowerUpperCaseSetting)
    return SpacesRemoved
  }

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
// console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'