// const userFunction = {
//     getNameLength(){
//         return this.name.length;
//     },
//     getInfo(){
//         return `${this.name} and ${this.college}`;
//     },
//     degreeGranted(){
//         return degree === "CSE";
//     }
// }
// function createUser(name , age , college , semester , degree){
//     const user = Object.create(userFunction);
//     user.name = name;
//     user.age = age;
//     user.college = college;
//     user.semester = semester;
//     user.degree = degree;
//     return user;
// }
// const user1 = createUser("Parth" , 24 , "Chitkara" , 8 , "CSE");
// const user2 = createUser("Axit" , 23 , "Chitkara" , 8 , "CSE");



// 12345 = 6

// function resolve(num){
//     let sum = 0;

//     while(num > 0){
//         sum += num%10;
//         num = Math.floor(num/10);
//     }

//     return sum;
// }

// // console.log(resolve(12345));
// let num = 10062000;

// while(num > 9){
//     num = resolve(num);
// }

// console.log(num);

// let name = "parap";

// if(isPelindrome(name)){
//     console.log("String is pelindrome");
// }else{
//     console.log("It is not pelindrome");
// }

// function isPelindrome(name){
//     let i = 0;

//     let j = name.length - 1;

//     while(i < j){
//         if(name[i] !== name[j]) break;
//         i++;
//         j--;
//     }

//     return i===j;
// }
// hello();
// console.log(hello);
// var hello = function(){
//     console.log("Hello word");
// }
// hoisting 

// function declaration

// function expression , arrow function 

// var - undefined
// const let - uninitialised

// function decalaratuon - space compilation time pe hi 

// arrow and expression - nhi milte

// function func(){
//     console.log("hello");
// }
// func();


// concept of closure

// function outerFunc(){
//     let num = 0;

//     function innerFunction(){
//         if(num < 1){
//             console.log("hey , you called me ...");
//             num++;
//         }else{
//             console.log("You have used me , now I am not coming ");
//         }
//     }

//     return innerFunction;
// }

// const bag = outerFunc();

// bag();
// bag();


// const second = outerFunc();
// second(); 
// second();


// concept of closure 
// const acceptPower = power => num => num ** power;
    


// const ans = acceptPower(2);
// console.log(ans(5));


// armstrong 

// let num = 15;
// function isArm(num){
//     let sum = 0;//27 + 125 + 1 = 153
//     //1

//     let store = num;
//     while(num > 0){
//         let digit = num % 10; //5

//         sum += digit * digit * digit;

//         num = Math.floor(num / 10);
//     }



//     return sum === store;
// }

// if(isArm(num)){
//     console.log("Number is armstrong");
// }else{
//     console.log("Fuck offf");
// }







 






