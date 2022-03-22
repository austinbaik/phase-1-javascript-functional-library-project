
function isArray(fxnArrayObj) {
    return fxnArrayObj instanceof Array ? fxnArrayObj.slice() : Object.values(fxnArrayObj)
}

// function myEach using Array method 
// function myEach(collection, callback) {
//     if (Array.isArray(collection) === true) {
//         collection.forEach(e => callback(e))
//     }
//     else {
//         // Object.values(collection).map((e) => callback(e))
//         for (const element in collection) {
//             callback(collection[element])
//         }
//     }
//     return collection
// }

function myEach(collection, callback) {
    let newArray = isArray(collection)

    for (let i = 0; i < newArray.length; i++) {
        callback(newArray[i])
    }

    return collection
}

// function myMap using Array method

// function myMap(collection, callback) {
//     if (Array.isArray(collection) === true) {
//         const newCollection = collection.map(e => callback(e))
//         return newCollection
//     }
//     else {
//         const newCollection = Object.values(collection).map((e) => callback(e))
//         return newCollection
//     }
// }

function myMap(collection, callback) {
    let newArray = isArray(collection)
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = callback(newArray[i])
        console.log('newArray', newArray)
    }
    return newArray

}


// function myReduce(collection, callback, acc) {
//     if (Array.isArray(collection) === true) {
//         return collection.reduce(callback, acc)
//     }
//     else {
//          let newCollection = Object.values(collection)
//          return newCollection.reduce(callback, acc)
//     }
// }




// function myReduce(collection, callback, acc) {
//     if (Array.isArray(collection) === true && Number.isInteger(acc) === true) {
//         return collection.reduce(callback, acc)
//     }
//     else {
//         if (Array.isArray(collection) === true) {
//             return collection.reduce(callback)
//         }
//         else {
//             if (Number.isInteger(acc) === true) {
//                 return Object.values(collection).reduce(callback, acc)
//             }
//             else {
//                 return Object.values(collection).reduce(callback);
//             }
//         }
//     }
// }
// !acc
//if nothing passed, it is undefined - undefined is falsey 



function myReduce(collection, callback, acc) {
    //create copy of the collection 
    let newArray = isArray(collection)

    if (!acc) { //nothing was passed for acc
        //assign first element of the array to the acc 
        acc = newArray[0]
        newArray = newArray.slice(1)
    }
    for (let i = 0; i < newArray.length; i++) {
        acc = callback(acc, newArray[i], newArray)
    }
    return acc

}

function myFind(collection, predicate) {
    let newArray = isArray(collection)
    for (let i = 0; i < newArray.length; i++) {
        // predicate(newArray[i])
        if (predicate(newArray[i]) === true) return newArray[i] //why does this work with and without '=== true'
    
    }
        return undefined 
}

// function myFilter(collection, predicate) {
//     let newArray = isArray(collection)
//     let returnArray = []
//     for (let i = 0; i < newArray.length; i++) {
//         if (predicate(newArray[i])) returnArray.push(newArray[i])
        
//     }
//     return returnArray
// }


function myFilter(collection, predicate) {
    let newArray = isArray(collection)
    let returnArray = []
    for (let i = 0; i < newArray.length; i++) {
        if (predicate(newArray[i])) {
           returnArray.push(newArray[i]) 
        } 
        
    }
    return returnArray
}


function mySize(collection) {
    let newArray = isArray(collection)
    return newArray.length 
}

function myFirst(array, n) {
    if (!n) {
        return array[0]
    }
    return array.slice(0, n)
}




function myLast(array, n) {
    console.log('n', n)
    if (!n) {
        return (array[array.length-1])
    }
    return array.slice(array.length-n, array.length)
}



function myKeys(object) {
    let newArray = []
    for (let keys in object){
    newArray.push(keys)
    }
    return newArray
}


function myValues(object) {
    let newArray = []
    for (let keys in object){
        console.log('object.keys', object.keys)
    newArray.push(object[keys])
    }
    return newArray
}

