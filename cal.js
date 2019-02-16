function clear(){
    var valueA = document.getElementById('A')
    var valueB = document.getElementById('B')
    valueA.value = "";
    valueB.value = "";
    document.getElementById('result').value = '';
}

function add(){
    var valueA = document.getElementById('A').value
    var valueB = document.getElementById('B').value
    var A = parseFloat(valueA)
    var B = parseFloat(valueB)
    console.log(valueA,valueB)
    document.getElementById('result').value = (A+B)
}

function divide(){
    var valueA = document.getElementById('A').value
    var valueB = document.getElementById('B').value
    var A = parseFloat(valueA)
    var B = parseFloat(valueB)
    console.log(valueA,valueB)
    document.getElementById('result').value = (A/B)
}

function sub(){
    var valueA = document.getElementById('A').value
    var valueB = document.getElementById('B').value
    var A = parseFloat(valueA)
    var B = parseFloat(valueB)
    console.log(valueA,valueB)
    document.getElementById('result').value= (A-B)
}

function mul(){
    var valueA = document.getElementById('A').value
    var valueB = document.getElementById('B').value
    var A = parseFloat(valueA)
    var B = parseFloat(valueB)
    console.log(valueA,valueB)
    document.getElementById('result').value = (A*B)
}