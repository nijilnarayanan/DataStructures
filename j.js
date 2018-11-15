const array = [1,2,3,4,5,6,7,8,9,10]

const regex = /(-?[0-9]+)\s*-{1}\s*(-?[0-9]+)|(-?[0-9]+)/gm



function validate() {
    
    let inputValue = document.getElementById('input').value
 
    console.log(inputValue)

    if(inputValue.search('-')) {
        let ranger = inputValue.split('-')
        ranger = ranger.map(range => Number(range))
        console.log(ranger)

        let availableValues = [];
        for(i=ranger[0]; i<=ranger[1]; i++){
            if(array.indexOf(i)== -1) {
                availableValues.push(i)
            }

            if(availableValues.length > 0){
                availableValues.toString()                 
            }
        }
        console.log(availableValues)
        alert(`${availableValues} is available.`)
    } else if(array.indexOf(inputValue) != -1) {
        alert('Already, this number is taken. Try other number')
    }  else {
        alert(`You have entered number ${inputValue}`)
    }
}
