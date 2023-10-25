// for test cases
var array1 = ["a", "b", "c"];
var array2 = [1, 2, 3];

// adds item to end of array
function push(array, num){
    array[array.length] = num;  // looks at next index in list that does not exist and assign it a value
}

// removes last item of array
function pop(array){
    let newArray = [];
    
    for (let i = 0; i < array.length - 1; i++){
        newArray[i] = array[i]; // adds items from array to new array except last
    }
    
    return newArray;
}

// returns a string of an array separated by commas
function toString(array){
    let arrayStr = "";

    for (let i = 0; i < array.length; i++){
        if (i != array.length - 1){         // add item and comma to list if not last item 
            arrayStr += array[i] + ", ";
        }
        
        else{                               // add item without comma if last item 
            arrayStr += array[i];
        }
    }
    
    return arrayStr;
}

// returns a string of an array separated by input
function join(array, separator){
    let arrayStr = "";

    for (let i = 0; i < array.length; i++){ 
        if (i != array.length - 1){         // add item and separator to list if not last item 
            arrayStr += array[i] + separator;
        }
        
        else{                               // add item without separator if last item 
            arrayStr += array[i];
        }
    }
    
    return arrayStr;
}

// combines two arrays
function concat(arrayOne, arrayTwo){
    let concatedArray = [];
    
    for (let i = 0; i < arrayOne.length; i++){ // add items from first array to concated array
        push(concatedArray, arrayOne[i]);
    }
    
    for (let j = 0; j < arrayTwo.length; j++){ // add items from second array to concated array
        push(concatedArray, arrayTwo[j]);
    }
    
    return concatedArray;
}

// to see if functions work
push(array1, 2);
var popArray = pop(array1);
var toStringArray = toString(array1);
var separatorArray = join(array2, "/");
var concatArray = concat(array1, array2);

console.log(array1);
console.log(popArray);
console.log(toStringArray);
console.log(separatorArray);
console.log(concatArray);