/*var arr = [1,2,3,4,5]
var result = arr[0]
function itung(arr){
    if( arr.length === 0){
        return 1
    }
    else{
        //console.log(arr[0])
        var result = arr[0]
        //arr.slice(1)
        return result * itung(arr.slice(1))
        
    }
}

console.log(itung(arr))*/
/*
var str = 'labina'

function reverse(str){
    if( str.length === 0){
        return ''
    }
    else{
        var result = str[str.length-1]
        console.log(result)
        return result + reverse(str.slice(0,str.length-1))
    }
}

console.log(reverse(str))*/

/*var str = 'labina'

function reverse(str){
    if( str.length === 0){
        return result = ''
    }
    else{
        var result = str[0]
        console.log(result)
        console.log(str)
        
        return result = reverse(str.slice(1)) + result
    }
}

console.log(reverse(str))*/

var arr = [1,2,3,4,5,6,7,8,9,0]
function removeOdd(arr){
    if( arr.length === 0){
        return []
    }
    else{
        if( arr[0]%2 === 0){
            return [arr[0]].concat(removeOdd(arr.slice(1)))
        }
        //console.log(arr)
        return removeOdd(arr.slice(1))
    }
}

console.log(removeOdd(arr))