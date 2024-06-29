function processArray(numbers){
    const resultArray = [];
    for(let number of numbers){
        if(number % 2 == 0){
            resultArray.push(number ** 2)
        }
        else{
            resultArray.push(number * 3)
        }
    }
    return resultArray
}