//1
// function sum(arr){
// let sum=0;
// for (let elem of arr){
//     sum+=elem;
// }
//     return sum;
// }
// console.log(sum([1,6,9]))
//2
// function del(num){
//     let arr=[];
//     for (let i=1; i<=num; i++){
//         if(num%i===0){
//             arr.push(i)
//         }
//     }
//     return arr
// }
// console.log(del(36))

//3
// function simvol(str){
//     let arr=[];
//     for(let elem of str){
//         arr.push(elem);
//     }
//     return arr;
// }
// console.log(simvol('simvol'))

//4
// function reverse(str){
//     let res=str.split('').reverse().join('')
//     return res
// }
// console.log(reverse('home'))

//5
// function firstletter(str){
//     let res = str.slice(0,1).toUpperCase() + str.slice(1);
//     return res;
// }
// console.log(firstletter('stroka'))

//6
// function func(str){ 
//     let stroka=""; 
//     let arr = str.split(' '); 
//     for(let i =0; i < arr.length; i++){ 
//         stroka += arr[i][0].toUpperCase() + arr[i].slice(1) + ' '; 
//     } 
//     return stroka; 
// } 
//     console.log(func("мама я программист"))

//7
// function chisla(num){
//     let arr=[];
//     for (let i=1; i<=num; i++){
//         arr.push(i)
//     }
//     return arr
// }
// console.log(chisla(13))

//8
// function summa(num){
//     let str=String(num);
//     let arr= str.split('');
//     let sum=0;
//     for(let i=0; i<arr.length; i++){
//         sum+=Number(arr[i])
//     }
// return sum
// }
// console.log(summa(123))

//9
// function year(num){
//     if (num%4===0){
//         return ("високосный")
//     }
//     else{
//         return ('не високосный')
//     }
// }
// console.log(year(1988))

//10
// function sec(num){
//     return Math.floor (num/(24*60*60))
// }
// console.log(sec(758645))

//11
// function element(arr){
//     let index= Math.floor(Math.random() * (arr.length));
//     return arr[index];
// }
// console.log(element([1,2,3,4]))

//12
// function prostoechislo(num){
//     let del=0;
//     for(let i=0;i<=num; i++)
//     {
//         if(num%i===0){
//             del++;
//         }
//     }
//     if(del==2){
//         return 'простое'
//     }
//     else{
//         return 'не простое'
//     }
// }
// console.log(prostoechislo(13))


