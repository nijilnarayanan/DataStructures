const array = [1,2,3,4,5,6,7,8,9,10]

function validate() {
    let inputValue = parseInt(document.getElementById('input').value);
    console.log(inputValue)
    console.log(array.indexOf(inputValue))

    if(array.indexOf(inputValue) != -1) {
        alert('Already, this number is taken. Try other number')
    }    else {
        alert(`You have entered number ${inputValue}`)
    }
}