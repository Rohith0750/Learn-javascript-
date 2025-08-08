let a =1;
console.log(a);

fs.readFile('a.txt','utf8', (err, data) => {
    console.log("Data from file:", data);
})

let ans = 0;
for(let i = 1; i <= 100; i++) {
    ans += i;
}
console.log("Sum of numbers from 1 to 100 is:", ans);