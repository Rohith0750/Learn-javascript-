let a =1;
console.log(a);
//Wfrite a progarm to greet the user by ther 1st namee and last name 
let frist_name="Rohith S D";
let last_name="Devaraju";


console.log("Hello" +" "+ frist_name + " "+ last_name +"Werlcome Back!");


let gender="male";
if(gender == "male"){
    console.log("Welcome Sir");
}
else{
    console.log("Welcome Madam");
}


// for(let i=0;i<=1000;i++){
//     console.log(i);
// }

let personArray=[20, 22 ,25 , 30, 35, 40, 45, 50, 55, 60];
for(let i=0;i<=personArray.length-1;i++){
    if(personArray[i]%2==0){
        console.log("Even Number:" + personArray[i]);
    }
    
}

let max=personArray[0];
for(let i=0;i<personArray.length;i++){
    if(personArray[i]>max){
        max =personArray[i];
       
    }
    
}
console.log("Max Number is:" + max); 