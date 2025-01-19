

//nums
let a = 100 ; 

var num1 , num2 , num3 ;  
num2 = 20 ; num3 = 40 ; 
num1 = num2 + num3 ;

const num = 100 ;  

//boolean 
let bool = null ;   
let boolUndefine = undefined ; 
let boolTrue = true ; 
let boolFalse = false ; 

//comparison 
/*
console.log(10 === 10) ;    //(=== ; type  + value) 
console.log(10 == 10) ;     // (== ; value only) 
console.log(10 == "10")  ;    //true 
console.log(10 === "10");     //false
*/

//strings 
let fname = "john " ; 
let lname = "doe" ; 
let fullName = fname.concat(lname) ; 
let upper = fullName.toUpperCase() ;  
let splitt = fullName.split(fname) ; 
let fulName = `${fname} ${lname} is the full name` ;

//typeconversion 

//str to num 
let x = "10" ;          //typeof : str
x = Number() ;           //typeof : number 
let y = parseInt(x) ; 
x = +x ; 

//num to str 
let z = 20 ; 
let c = 30 ;  
c = c + "" ; 
z = z.toString() ; 
z = String(z) ; 


//to float 
let decimal = "10.09" ; 
decimal = parseFloat(decimal) ;  
num4 = parseInt(decimal) ;


//if-else 
let n=10 ;
if(n){
    // console.log(true);
}
else{
    // console.log(false);   
}

//Switch-case 
let n1 = 5  ;  
switch(n1) {
    
    case 0 : 
    // console.log("0"); 
    break ; 

    case 1 : 
    // console.log("1");  
    break ; 

    default: 
    // console.log("default") ; 
    
}

/*
let day = 0 ; 
switch(day) {

    case 1 :  
    console.log("day 1");  
    break ;

    case 2 : 
    console.log("day 2") ; 
    break ;  

    // ...... upto 5
    case 5 : 
    console.log("day 5");  
    break ; 

    default: 
    console.log("weekend");   
}
*/ 



//Loops 
for(let i  = 1 ; i <= 5 ; i++){
    for(let j = 1 ; j <= 5 ; j++){ 
        let prd = i * j ;  
        // console.log(i ,"*", j ,'=' , prd);
    }   
}

//2d matrix 
const rows = 3 ;  
const cols = 3  ; 

const matrix = [] ; 
for (let i = 0; i < rows; i++) { 
    const row = [] ;
    for(let j = 0 ; j < cols ; j++){
        row.push(1) ;
    } 
    matrix.push(row) ; 
}
// console.log(matrix.join()) ;




//while
let count = 0 ; 
let sum = 0;  
const limit = 5 ;
while (count <= limit) {
    sum +=count ;
    count++ ;
} 
// console.log("limit exceeds and sum is: " , sum);



// do-while 
let power = 1 ; 
let baseNum = 2 ;  
do {
    for (let i = 1; i < 5; i++) {
        power =  baseNum **  i ;
    } 
    // console.log(baseNum , ":", power)  ;   
    baseNum++ ;
} while (baseNum < 4);




//Logical oprt 
let bool1 = true;
let bool2 = false;
if (bool1 == false || bool2 == true) {
  console.log(true);
}  
else if (bool1 == true && bool2 == false) {
//   console.log(false); 
    if(bool1 != false) {
        // console.log(true);  
        bool1 = false ;
        // console.log(bool1) ;
    }
} 
else{
    // console.log(NaN); 
}





//Arrays 
let nums = [] ;              //empty arr 

let nums2 = [] ; 
let product = 1 ;  
for (let i = 1; i <= 5; i++) {
     product  = 5 * i ;  
     nums2.push(product) ; 
} 
// console.log(nums2); 
// console.log(nums2.length) ; 


let strings = [] ; 
strings[0] = "hello" ; 
strings[1] = "john" ; 
// console.log(strings) ;

let arr = [ [1,2,3] , 
            [4,5,6] , 
            [7,8,9]
] ;  
arr[2][2] = 10 ; 
// console.log(arr[2][2]) ;   
// console.log(arr.length);     // 3 * 3

arr.push([11,12,13]) ;  
// console.log(arr.length);     //  4 * 3 
 



//pop
arr.pop() ;              // removes last element 
arr[2].pop() ; 
// console.log(arr);  



let namesArr = ["boyd" , "kenny" , "jim" , "ethan" , "kenny"] ;  
// console.log(namesArr.indexOf("kenny"));

//join 
// console.log(namesArr.join('-')); 

//reverse 
// console.log(namesArr.reverse());


let arrNums = [10,1,0,92,6,90,12,45] ;   

// comparison function .sort(a,b) => a-b or b-a
arrNums.sort((a,b) => a- b)  ;     //for ascnd 
// console.log(arrNums)  ;
arrNums.sort((a,b) => b- a) ;      //for dscnd 
// console.log(arrNums)  ;




//unicode and lexicographic order 
// console.log("a" > "b") ;         // a = 97 , b = 98 
// console.log("a" < "b") ;  
 
let chars = ['o' , 'g' , 'd' , 'a'  , 'b' , 'z']  ; 
chars.sort() ; 
// console.log(chars);


//conact will add more than 2 arrays




//Objects 
/*
    const object = { 
    key : value  
    }

*/ 

//object literal 
const Person = { 
    name : "john"  ,
    work : "developer" , 
    location : ["san francisco" , "west-coast"]  , 
    age : 32 
} 
Person.name = "johnCHanged !" ; 

Person.Id = "0091" ; 
 

// console.log(Person);

//access items
// console.log(Person["location"]); 
// console.log(Person["Id"]);




//obj constr 
const Person2 = new Object() ; 
Person2.employeeID = "A2901a" ; 
Person2.birthYr = 1993 ; 
Person2.profsn = "swe"  ;  

// console.log(Person2.birthYr);




//using Classes for multiple objs 
class Employe {

    constructor(name , age) {
        this.name = name ; 
        this.age = age ; 
    } 

   greet() {
        // console.log(`hey , i am ${this.name}`);
    } 

}

const emp1 = new Employe("sherrif", 45) ; 
const emp2 = new Employe("tebitah" , 31) ; 

emp1.greet() ; 
emp2.greet() ;  



const emp3 = new Employe() ; 
emp3.age = 67 ; 
emp3.name = "shinchan" ; 

//method changed for obj3
emp3.greet = function() {
    // console.log("this is new employee saying hi here");
};
emp3.greet();







//Functions 

function add(a,b,c) {
let sum = a + b + c; 
console.log(sum); 
}
   
///fn overrites not overload
function add(x,y) {
let sum = x + y  ;
console.log(sum);
}

/*
add(3,4,5) ;          // 5 is ignored
add(5,0) ;           /// last fn arguments exit

*/


function Return(name) {
    if(name == "john") { 
        name = "john is changed" ;  
        return name ; 
    } 
    else{
        return -1  ;
    }
}
 
// console.log(Return("john"));







//fn callback 
function carName() {
    const manf_yr = 1993 ;
    return manf_yr ;
} 

function carModel(carName) {
    let model = "98cXz"  ; 
    // console.log(`model is ${model} and car name is ${carName()}`);
}

carModel(carName) ;







//obj methods 
const car = {
    name : "toyota" , 
    year : 1990 ,
    model : "corolla" , 
    carInfo : function() {
        return `car given name is ${this.name} and model is ${this.model}` ;     
    } , 
} ; 

// console.log(car.carInfo()) ; 

const student = {
    name : "kenny" ,
    age : 20 ,
    cllg : "MIT" , 
    studInfo : function(){ 
        return `student name is ${this.name} and age is ${this.age}` ;
    },
}
// console.log(student.studInfo());







//date 
let today_date = new Date() ; 
// console.log(today_date);

let specific_date = new Date(2025, 11, 25) ; 
// console.log(specific_date); 

let datewidtime = new Date(2025,1,12,12,35,32) ;             // 12:35:32    
// console.log(datewidtime);     


//date get methods
/*

console.log(today_date.getMonth()); 
console.log(today_date.getDate());
console.log(today_date.getDay());
console.log(today_date.getFullYear());
console.log(today_date.getHours());
console.log(today_date.getMinutes());
console.log(today_date.getSeconds());

*/ 


//date set methods 
/* 

console.log(today_date.toString()) ;
console.log(today_date.toDateString()) ; 
console.log(today_date.toTimeString()) ;  

*/ 




//set timeout  --> for delay   

/*
function greet2() {
    console.log("given mssg print after 2 sec") ;
}
setTimeout(greet2 , 2000) ; 

*/ 



//set interval --> for interval 

// let counter = 0 ;  
// const intervalId  = setInterval(greet3 , 1000) ; 

// function greet3() {
//     counter++ ;  
//     if(counter === 5) { 
//         clearInterval(intervalId) ;
//         // console.log("Interval cleared.");
//     } 
//     // console.log(`Counter: ${counter} and it is going on !`);
// } 



//stop the interval after 10 seconds 
let sec = 0 ; 
const anotherInterval = setInterval(stopInterval , 1000) ; 

function stopInterval() { 
    sec++ ; 
    if(sec===10) {
        clearInterval(anotherInterval) ;
    }  
    // console.log(`sec ${sec} , time over after 10 seconds`) ;
}







//arrow fnc 
const addAgain = (a,b) => a + b ; 
// console.log(addAgain(2,5)) ;






//enhanced objt literals 
function info(name , age , work , location) {
    return { 
        name : name , 
        age : age , 
        work : work ,
        location : "san francisco" , 

        //salary : function(){
            //below is enhanced  
            // }

        salary: () => {
            return "salary is $1000" ; 
        }
    }  

}

 ; 

const alex = info("alex" , 30 , "professor",info.location) ; 
const kenny = info("kenny" , 34 , "deputy",info.location) ;

// console.log(alex , `${alex.name} salary is ${alex.salary()}` ); 
// console.log(kenny);



const obj = (a, b, c) => {
    return { a, b, c };
};
one = obj(1,2,3,) ; 
// console.log(one) ;


const lib =  
{
   sum :  (a,b) =>  a + b , 
   prod : (a,b) => a * b ,

} 
// console.log(lib.sum(2,5));
// console.log(lib.prod(2,5));


 






//fn with default params 
function greet4(name = "default")
 {
    // console.log(`hello ${name}`);
} 

greet4() ;      // if name = nothing --> undefined 
//if fn greet4(name = "any name")  ---> name = anyname 


greet4("john");       //passing argument will replace default value 



function calculatePrice(price, limit_tax=0.1) {
    return price + price * limit_tax ;
}
// console.log(calculatePrice(100)) ;        // 100 + 100 * 0.1
// console.log(calculatePrice(100, 0.2));    //  default paramtr changed 








//Spread Operator  
///  ...   -> to expand/spread elements of arr,obj,strings
function spreadColors(a,b,c,d) { 

    // console.log(a);
    // console.log(b);
    // console.log(c);
    // console.log(d);

} 
let colorsArr = ['red' , 'blue' , 'green' , 'yellow'] ;
spreadColors(colorsArr) ;            // a = colorsArr , b ,c,d = undefined 

spreadColors(...colorsArr) ;  



const arr1 = [1,2,3,4] ; 
const arr2 = [5,6,7,8] ; 
const concat_arr = [...arr1, ...arr2] ;  
// console.log(concat_arr) ; 
// console.log(concat_arr.length) ;
// console.log(concat_arr[5]) ;

let new_arr = [100 , ...concat_arr , 99 ] ;  

// console.log(new_arr);



//for objs 
const obj1  = { 

    name : "john" , 
    age : 90  , 
    work : "unemployed" , 
   
}   

const obj2 = { 

    dob : 1990 , 
    location : "USa" , 
    theme : "light"  ,
} 

const obj3 = {...obj1 , ...obj2} ;   
const themeChanged = {theme : "dark" , location : "USA to UK shifted !"} ;
 
const obj4 = {...obj3 , ...themeChanged} ; 
// console.log(obj4);





//Rest operator 
// ... --> group the elements 
function groupNames(...names) { 
    // console.log(names);
} 
groupNames("hennibal" , 30 , true , "rogan" , "evan");





//Destructuring  
///  -> to unpack values from arrays, objs
///aand assign variable to their values ; 



//for arr destr: 

const numbers = [99 , 93 , 100 , 78 , 98]  ;  
const [maths , english , hindi , science , aplitude] = numbers ;  
// console.log(maths);          // maths = 98 ....so on 


const arr6 = ["car" , "bike" , "scooter"] ; 
const[vech1 , vech2 , vech3 , vech4 = "truck" , vech5 = "tractor"] = arr6 ;
// console.log(vech1);






//for obj destr : 
const CarInfo = {name2 : "audi" , model : "A3" , year : 2020} ;
const{name2 ,model ,year} = CarInfo ;                        //const{hv to use same name}
// console.log(model); 
 

function CarInfo3(name2) { 
    // console.log("using" , name2 , " variable here after desctrng created insdie the object") ;
     
} 
CarInfo3(name2 ) ;


 
    //can rename the variables of objs 
    const CarInfo5 = {name2: "bmw", model: "08Fg3", year: 2024};
    const { name2: carName2, model: carModel2, year: carYear } = CarInfo5;
    // console.log(carModel2);
    



//Nested destruct 

const person5 = { 
    name5 : "alex" , 
    location5 : {zip : 12345 , city : "west-Coast"} ,
} 
const{name5:name5, location5 : {zip,city}}  = person5;  
// console.log(city);




const numbs = [1, 2, 3, 4];
const [first, ...rest] = numbs;
// console.log(first); 
// console.log(rest); 


const per4 = { name: "Alice", age: 25, country: "Wonderland" };
const { name, ...others } = per4;
// console.log(name);    
// console.log(others);



//function destructring  

     ///obj destructing in fn : obj passed as argument
const fruit = { 
    color : "yellow" , 
    shape : "circle", 
    weight : 100 ,
} 

const fruit2 = { 
    color : "red" , 
    shape : "oval",
    weight : 200 ,
 } 
 
const unknownFruit = {  

} 

function randomFunc({color = "unknown",shape = 'N/A',weight = "N/A"}) { 
    // console.log("fruit color is " , color , " and shape is", shape , " and weight is ", weight) ;

}  

randomFunc(fruit) ; 
randomFunc(fruit2) ;
randomFunc(unknownFruit) ;

 
    ///arr destructing in fn : ///obj destructing in fn : arr passed as argument


function marksFunc([math = 0,science= 0,english= 0,cse= 0]) {
  
    let total = math + science + english + cse ; 
   
    if (math == 0||science== 0||english== 0||cse ==0) { 
        // console.log("information not available !"); 
    } 
    else{
        // console.log("total marks  = " ,total);
    }

} 
 
const scoresStd1 = [78,89,45,67] ;  

const scoresStd2 = [90,99,85,77] ; 

const scoresStd3 = [  /*an empty arr*/  ] ;  


marksFunc(scoresStd1) ;
marksFunc(scoresStd2) ;
marksFunc(scoresStd3) ;




    //nested destruct  
       ///fn( obj1 : {} ,obj2 : {}  )
    function Vechile({type : {car , bike } , engine_type : {Thermal , Rotary}, fuel_type : {petrol, diesel}}) { 
        // console.log( 
        //     `car type is ${car} , engine type is  ${Thermal} , fuel type price is   ${petrol}  
        //     `
        // );
        // console.log( 
        //     `bike type is ${bike} , engine type is  ${Rotary} , fuel type price is   ${petrol}  
        //     `
        // );
        
        
    }

    const vehicle1 = { 
        type :  { 
            car : "BMW" ,  
            bike : "hayabusa" , 
        } ,  

        engine_type : { 
            Thermal : "1000cc" , 
            Rotary : "1500cc"
        } ,  

        fuel_type : { 
            petrol : 150, 
            diesel : 130 , 
        }  ,
     } 

     Vechile(vehicle1) ;

 


      ///fn(arr[ [] ])
     function animalsInfo([[pet_dog ,wild_dog] , cat , elephants]) { 
            // console.log(`animals are  : ${pet_dog} , ${wild_dog} ,${cat} , ${elephants} `);
            
     } ;  

     const animals = [["Great Dane" , "Boxer"], "kitty" , "Big mamba"] ; 

     animalsInfo(animals) ;



     ///fn(obj{arr[]}) 
     function Dogtype({dogName , dog_type : [type1 ,type2,type3]}) { 
 
        // console.log(`Dog name is ${dogName} and dog types are : ${type1}`); 
        // console.log(`Dog name is ${dogName} and dog types are : ${type2}`); 
        // console.log(`Dog name is ${dogName} and dog types are : ${type3}`);
        
     } 
 
     const dog1 = { 
        dogName : "rockJad"  ,
        dog_type : ["bulldog" , "pug" , "labrador"] ,
     } 

     Dogtype(dog1) ;
 


     ///fn({objs , arr[]})  
     function UserDetail({ 
        user : {user1 , lname}    
                           ,  
       info : [age , marks , location] }) { 

        // console.log(`user name is ${user1} and last name is ${lname} , age is ${age} , 
        //     marks is ${marks} and location is ${location}`);
        
        } ; 
    
    const user1 = { 
        user  : { 
            user1 : "alex" , 
            lname : "sherrif"
        }  ,

        info : [30 , 89 , "san francisco"] ,
    } ;  

    UserDetail(user1) ; 







//for...in loop 
///iterate in objs
const obj5 = {  
    animal : "dog" , 
    animal_name : "krishtopher"  ,
    age : 5  ,  
    type : "pet"
} 
for(let keys in obj5) {
    //  console.log(keys , ":",obj5[keys]);
     
} 



//for...of loop  
///itr. in arr
const colors = ["red", "green", "blue"];

for (const color of colors) {
    // console.log(color);
} 

const words = "character" ;  
for (const char of words) {
    // console.log(char);
    
}





//for each  
 // arr.foreach(callback fn) 
const arr7 = [1,3,45,6,7] ;  
arr7.forEach( 
    function (num) { 
    //  console.log(num);
     
    }
)   // or 

// arr7.forEach((num) => console.log(num)) ;   //prefer  
 

const fruits2 = ["banana" , "apple" , "manmgo", "litchi"] ; 
// fruits2.forEach((fruit,index) => console.log(`${index} : ${fruit}`));s



//prblm
fruits2.forEach((fruit,index,arr) => 
arr[index] = fruit[0].toUpperCase() + fruit.substring(1)
);
// console.log(fruits2) ;



//prblm 
const nums5 = [10, 9 , 8 ,7] ;  
let sum3 = 0; 
nums5.forEach((num) => sum3 +=num ) ; 
// console.log(sum3);









//Map method 

///return new arr after operations
const nums6 = [10, 9 , 8 ,7] ;  
const nums7 = nums6.map((num)=> num * 2) ;  
// console.log(nums7);



const users = [ 
    {name: "alice" ,age : 90 } , 
    {name : "leona" ,age : 89 } ,  
    {name : "kendy" , age : 78}
] ;  

const userCopy = users.map((user)=>user.name) ;              //return  users name
// console.log(userCopy);



const numb = [1, 2, 3, 4];

const result = numb
    .map(num => num * 2)       
    .map(num => `Value: ${num}`) 
    .map(str => str + "!" );   

// console.log(result); 


const find = numb.find((n) => n > 1) ;
// console.log(find) ; 

const p =  [ 
    {p1 : "guest1" , income : 100} , 
    {p2: "guest2" , income  : 200} , 
    {p3 : "guest3", income : 300} , 
]
const q = p.find((salary) => salary.income ===100 ) ;   
const k = p.find((salary) => salary.income > 100 ) ; 

// console.log(q); 
// console.log(k);







//Map  
    /*
    const map = new Map( 
        ['key1' , 'value1'] ,
    ) ; 
    */ 

const m= new Map( [ 
   ['name','john'] , 
   ['age',40] , 
   ['location','san francisco'] ,
])  ;  
m.set('work','developer') ;

m.set('age' , 45) ;                     //overrides

// console.log(m);




const mMap = new Map() ; 
mMap.set('newkey' , 'neValue') ;   
mMap.set('map2' , 'usa to east-coast') ;  
mMap.set('map3' , 'uk to west') ; 
mMap.set('map4' , 'ussr to east') ;   
mMap.set('map5' , 'korea to south-coast') ;    


// console.log(mMap.get('map3'));  


// console.log( mMap.has('map2') );      


mMap.delete('newkey'); 
// console.log(mMap); 
// console.log(mMap.size); 

mMap.forEach((value ,key) => { 
    // console.log(key , value) ; 
} );
 


//prblm 
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 },
    { name: "Eve", age: 35 },
  ];


  function groupByAge(people) {
    const ageMap = new Map();
  
    people.forEach(person => {
      const { name, age } = person;
  
      // Check if the age is already a key in the Map
      if (ageMap.has(age)) {
        ageMap.get(age).push(name) ; 
      } else {
        ageMap.set(age , [name]) ; 
      }
    });
  
    return ageMap;
  }
  
  const result4 = groupByAge(people);
//   console.log(result4);
  
  




//Set 
///no dulicates 
const setObj = new Set([1,2,3,4,5]) ; 
// console.log(setObj); 

const setObj2 = new Set() ; 
setObj2.add(1) ;    
setObj2.add(2) ;   
setObj2.add(4) ;   
setObj2.add(5) ; 
setObj2.add(9) ;  
setObj2.add(12) ;   
setObj2.add(2) ;                        //ignored 


 
setObj2.delete(5) ;  

if(setObj2.has(2)) { 
    setObj2.delete(2) ; 
    setObj2.add(2**2) ; 
    // console.log(setObj2);
    
} 
else{
    console.log('do nothing');
}


//iterate using for of , for each
const arr8 = new Set(["carl" , "segan" , "keo" , "laspar"]) ; 
for (const element of arr8) {
    // console.log(element);
    
}  

let arr9 = new Set( [ 
    {'name' :' john' , age : 90 }, 
    {'name' :' kin' , age : 109}, 
    {'name' :' loep' , age : 76},  
]) ; 

for(let names of arr9) { 
    // console.log(names);
    
}


// arr9.forEach((names) => console.log(names)) ;


let arr10 = new Set([
    {'johh' : 'webdev'} , 
    {'kin' : 'athelete'} , 
    {'leop' : 'coach'}
]) 

// arr10.forEach((roles) => console.log(roles))



const arrOfNums = ['a' , 'b' , 'a' , 1, 2, 2, 3, 4 ,4 ,4,3 ] ; 
const uniqueItm = [...new Set(arrOfNums)];
console.log(uniqueItm);


function hasUniqueElements(array) { 
return array.length === new Set(array).size  ;
}
 
// console.log(hasUniqueElements(arrOfNums)) ;  
// console.log(hasUniqueElements(hasUniqueElements)) ; 














// console.log(typeof decimal) ; 
// console.log(decimal) ; 
// console.log(num4) ;
// console.log(typeof z) ;  
// console.log(typeof c);
// console.log(typeof x);
// console.log(typeof x); 
// console.log(fulName);
// console.log(fullName);
// console.log(upper); 
// console.log(splitt);
// console.log(a); 
// console.log(num1); 
// console.log(num , "const not changable") ;
// console.log(bool) ;
// console.log(boolTrue) ;
// console.log(boolFalse) ; 
// console.log(boolUndefine);


