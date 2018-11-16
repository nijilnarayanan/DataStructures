const array = [...Array(11).keys()]

const regex = /(-?[0-9]+)\s*-{1}\s*(-?[0-9]+)|(-?[0-9]+)/gm;

function validate(){
    
    let inputValue = document.getElementById('input').value.trim()
 
    console.log(inputValue)

    if(inputValue.search('-') != -1) {
        let ranger = inputValue.split('-')
        ranger = ranger.map(range => Number(range))
        console.log(ranger)

        let availableValues = [];
        for(i=ranger[0]; i<=ranger[1]; i++){
            if(array.indexOf(i)== -1) {
                availableValues.push(i)
            }   
        }

            if(availableValues.length > 0){
                availableValues.toString()  
                console.log(availableValues)
                document.getElementById('output').innerHTML=  `${availableValues} is available.`
                } else {
                document.getElementById('output').innerHTML= 'Already, this number range is taken. Try other number'
                }
   } 
    else if(array.indexOf(Number(inputValue)) != -1) {  
        document.getElementById('output').innerHTML= 'Already, this number is taken. Try other number'
    }
     else {
        document.getElementById('output').innerHTML= `${inputValue} is available.`
        }
}
