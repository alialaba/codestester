
const squareSum = (numbers)=>{
    return numbers.map((num)=> num * num).reduce((a,b)=> a + b, 0)
}

const correct = (str)=>{
    return str.replace(/0/g, "O").replace(/5/g, "S").replace(/1/g, "I");

}

module.exports ={
    squareSum,
    correct
}