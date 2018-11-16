const array = [...Array(11).keys()]

function validate(){
    
    let inputValue = document.getElementById('input').value
 
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
                alert(`${availableValues} is available.`)               
                } else {
                alert('Already, this number range is taken. Try other number')
                }
   } 
    else if(array.indexOf(Number(inputValue)) != -1) {  
        alert('Already, this number is taken. Try other number')
    }
     else {
         alert(`${inputValue} is available.`)   
        }
}
