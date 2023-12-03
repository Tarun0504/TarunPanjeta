/*function parameter(){
    let r=parseInt(prompt("Enter radius: "))
    let parameter = 2*3.14*r
    document.getElementById('demo').innerHTML="Parameter is "+parameter
}
parameter()

function calculate(){
    let a = parseFloat(prompt("Enter 1st number"))
    let b = parseFloat(prompt("Enter 2nd number"))
    let c = parseFloat(prompt("Enter 3rd number"))
    let d = parseFloat(prompt("Enter 4th number"))
    let e = parseFloat(prompt("Enter 5th number"))
    let grade = (a+b+c+d+e)/5 
    document.getElementById('demo').innerHTML="Grade is "+grade+"%"

if (grade>60){
    document.getElementById('demo').innerHTML="You passed with 1st divison"
}
else{
        document.getElementById('demo').innerHTML=""
    }
    
}

calculate()

let a=["HTML","CSS","JS","Python"]
let len_a=a.length
let s=" "
for (let i=0;i<len_a;i++){
    s+=a[i]+" "
}
document.getElementById("demo").innerHTML=s
console.log("Table of 2:"); 

for (let i = 1; i <= 10; i++) {
    let result = 2 * i;
    console.log(`2 * ${i} = ${result}`);
}

let a =["A","B","C","D"]
let len_a=a.length
let s=" "
let j=0
while(j<len_a){
    s=s+a[j]+" "
    j++
}

document.getElementById("demo").innerHTML=s

const car={type:"Fraudi",model:"XX69",weight:"47 killo"}
document.getElementById("demo").innerHTML="Car type is "+car.type+", Car model is "+car.model+"& weight is "+car.weight*/

documnet.addEventListner('keydown',function(event)
{
    document.getElementById("demo").textContent="Which key you pressed = "+event.key
});

document.addEventListener('click',function(event)
{
    document.getElementById("demo").textContent="You have clicked mouse"
});

