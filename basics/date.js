function dateMethoeds(){
    const Currentdate= new Date();
    console.log(Currentdate);

    console.log(Currentdate.getDate());

    console.log(Currentdate.getMonth()+1); // Months are zero-indexed, so we add 1
    console.log(Currentdate.getFullYear());
    console.log(Currentdate.getHours());
    console.log(Currentdate.getMinutes());
    console.log(Currentdate.getSeconds());
}

dateMethoeds();