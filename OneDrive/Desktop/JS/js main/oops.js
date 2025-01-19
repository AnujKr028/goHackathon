//this


//Super : 
// keyword is used to call the constructor of  
// its parent class to access the parent's properties and methods.

///this in global scope gives windows
const person = { 
  name: "john",
  age: 20,
  displayInfo() {
    console.log("ur name is ", this.name);
  },
};
// console.log(person.displayInfo());


const user = {
  name: "john",
  age: 20,
  work: "emplyed",
  displayInfo() {
    return this;
  },
};
// const res = user.displayInfo() ;
// console.log(res);


const user2 = {
  name: "jonas",
  age: 24,
  work: "emplyed",
  displayInfo: () => {
    return this; //this with arrow fn return window
  },
};
const res2 = user2.displayInfo();
// console.log(res2);



class Person {
  constructor(name) {
    this.name = name;
  }

  intro() {
    console.log(`hey, name is ${this.name}`);
  }
}
const person1 = new Person("jonas");
// person1.intro();






//factory functions 
///func() { return { return objs} } 
function factoryFunc(name,title,age,location) { 
    return {  
        age : age , 
        location : location,
        name : name , 
        title :  title  , 
        work () { 
            console.log(`${this.name} title is ${this.title} nd he works , age is`,age , 'location is ' , location);
            
        }
    }
} 

const obj1 = factoryFunc('alex' , 'jordan', 44 ,"usa")  ;   
const obj2 = factoryFunc('nikolas' , 'lee', 49 ,"uk")  ;   

// console.log(obj1);
// console.log(obj2);

// obj1.work()
// obj2.work()







//new 
///create and initialise new empty obj 

function empInfo(empName , empAge , empId) { 

    this.empName = empName ; 
    this.empAge = empAge ;  
    this.empId = empId 

} 

const emp1 = new empInfo("emp1" , 78 , "a2301") ; 
// console.log(emp1.empAge);




class Books{ 

    constructor(book_name , author) { 
        this.book_name = book_name ; 
        this.author = author ; 
    }  

    bookInfo(){
         console.log("book name is :",this.book_name, ' and author is ' , this.author);
         
    }

} 

const book1 = new Books("the love for physics" , "john keten") ; 
const book2 = new Books("the thoery of everything" , "st. hawkings") ; 
// book1.bookInfo() ;   
// book2.bookInfo() ; 





//Built-in constructrs  

///number
const num = new Number(10) ; 
const str = num.toString();  
// console.log(num.valueOf()); 


///string
const str2 = new String('LEONADO')  ; 
const upper = str2.toLowerCase(); 
const posn = str2.charAt(0) ; 
const replaced = str2.replace('LEONADO' , 'ronaldo');  
// console.log(str2.length); 

// console.log(str2.includes('LEO')) ;              //true

function replaceSomething() { 
    if(str2.includes('LEO')) {  
       return str2.replace('LEO' , 'KEO') ;
    } 
    else{
       return 'do nothing' ; 
        
    }
} 
const res5 = replaceSomething() ; 
// console.log(res5);



///boolean 
const bool1 = new Boolean(false) ; 
// console.log( bool1.valueOf()); 
// console.log(typeof bool1);



//arrays 
const arr1 = new Array([1,2,3,4], [99,89,667]) ; 
const pushArr = arr1.push(["mango" , 'oti' , 'ornge']) ; 
 


for(let i  = 5 ; i <= 10 ; i++) { 
    arr1[0].push(i) ; 
} 

let arr2 = arr1.join('||') ; 
// console.log(arr2); 
// console.log(arr2.includes('667')) ;   


const arr3 = [2,4,6,8] ;

const arrReplaced = arr2.replace(arr1[0] , arr3) ; 

// console.log(arrReplaced );





//Object.create() 
const animal = {
    sound: "roar",
    speak: function() {
      console.log(this.sound);
    }
  }
  const lion = Object.create(animal);
//   lion.speak() ;
 




//Prototypes 
////all objects liked to the same prototype show same behaviour 


// checking the prototypes
///obj.__proto__ 
const obj = {} ; 
// console.log(obj.__proto__);
// console.log(obj.__proto__.__proto__); 

// console.log(obj.constructor.prototype);

// console.log(Object.getPrototypeOf(obj));



//ex-1
function sparrow(name) { 
    this.name = name ;
} 

sparrow.prototype.sings = function(){ 
    console.log(this.name , " sings well");
    
} 

sparrow.prototype.fly = function() { 
    console.log(this.name ," can fly !");
    
}

const sparrow1 = new sparrow('chi') ; 
const sparrow2 = new sparrow('lihi') ;  


// sparrow1.sings(); 
// sparrow1.fly() ;

// sparrow2.sings();
// sparrow2.fly();




//ex-2 
function Car(car_name , engine_name){ 
    this.car_name = car_name  ;
    this.engine_name = engine_name  ;
} 

Car.prototype.engine = function(){ 
    console.log('the engine of' ,this.car_name , 'is :' ,this.engine_name);
    
} 
const first_car = new Car('ferrari' ,'thermo') ;  
// first_car.engine() ; 

const second_car = new Car('bmw' ,'electro') ;  
// second_car.engine() ;



String.prototype.greet= function (){ 
    // console.log(this);
    // console.log(this.toUpperCase());
    
    }  ; 
 // console.log("hello".greet());
 
    





//prototype -  inheritance from parent 
function Animal(name,animal_speed){ 

    this.animal_speed = animal_speed;
    this.name = name ; 

} 

Animal.prototype.speak = function() { 
    console.log(`${this.name} makes a sound`);  
};

Animal.prototype.run = function(){ 
    console.log(`${this.name}  also runs with speed of ` , this.animal_speed);
    
}




function Dog(name,breed,speed){
    Animal.call(this,name,speed) ;               // Call the parent constructor with `this`
    this.breed = breed ;  
    this.speed = speed ;
}

//inherit from animal
Dog.prototype = Object.create(Animal.prototype) ; 
Dog.prototype.constructor = Dog ;

Dog.prototype.bark = function(){ 
    console.log(`${this.name} says Woof!`);
    
} ; 

const buddy = new Dog('Buddy' , 'Golden Retriever',150) ; 
// buddy.speak() ; 
// buddy.bark() ; 

// buddy.run(150) ;





////class inherit
class Book{ 

    constructor(author , title) { 
        this.author  = author ; 
        this.title = title ; 
    } 

} 

class histroy extends Book { 
   
    constructor(author,title , pageCount,year) { 
        super(author,title) ; 
        this.pageCount = pageCount ; 
        this.year = year ;  

    } 

} 
const his_book1 = new histroy('random_author','historical' , 890,1997) ; 
// console.log(his_book1);

// console.log(his_book1.__proto__);        // Book







//modifier
class Example{ 
    #privateField = 10 ;         ///acces within this class only
    publicField  = 40 ;  

    getPrivateFiled(){ 
        return this.#privateField ;   
    }
} 
const ex1 = new Example() ;  
// console.log(ex1.publicField);

// console.log(ex1.#privateField);         //give error






//encapsulation 
function Example2 (name){ 
    let age = 45  ;     //private

    this.getName = function(){ 
    return name;  
    } ; 

    this.getAge = function(){ 
        return age ; 

    } ; 

    this.setAge = function(newAge){ 
        if (newAge > 0) age = newAge; 
    };   
} ; 



const john = new Example2('john') ;  
// console.log(john.getName());
// console.log(john.getAge()); 

john.setAge(56) ; 
// console.log(john.getAge());  




function checkAge(age) { 
    let ageLimit = 18 ; 

    this.getAge = function(){ 
        if (age >= 18) { 
            return age ;
        } 
        else{ 
            return `lower than 18 , age is ${age}` ;
        }
    } 

    this.setAge = function(age){ 
        return age; 
    
    }
} 

const age1 = new checkAge(34) ; 
// console.log(age1.getAge()); 
// console.log(age1.setAge(22)) ;





//abstraction 
class Vehicle {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    move() {
        console.log(`${this.name} is moving at a speed of ${this.speed} km/h.`);
    }
}

class Cars extends Vehicle {
    constructor(name, speed, fuelType) {
        super(name, speed); // Call the parent constructor
        this.fuelType = fuelType;
    }

    refuel() {
        // console.log(`${this.name} is refueled with ${this.fuelType}.`); 
    //    this.move() ;     // Call move() without needing to know how it works
    }
}

const myCar = new Cars('Sedan', 120, 'Petrol');
// myCar.move(); // Exposes the abstracted "move" method
myCar.refuel(); // Specific to Car






//Polymorphism  

///method overriding
class Animals {  
    jump() {  

        // console.log("animals can jump !");
        
    }
} 

class Monkey extends Animals { 
    jump() 
    { 
        // console.log("monkey jumps high");
        
    }
} 
 
class penguin extends Animals { 
    jump() { 
        // console.log("penguin cann't jump");
        
    } 
} 
///using jump() method in differnet instances many times
const arrOfAnimals = [new Animals() , new Monkey() , new penguin()] ;
arrOfAnimals.forEach((animal)=> { animal.jump()}) 





///method overloading 
class Sum{ 
     
    add(a,b) { 
        let s =  a + b ; 
        console.log(s);
        
    }
} 

class Sum2 extends Sum { 

    add(a , b ,c)  { 
        let s =  a + b  + c ; 
        console.log(s);
        
    }
 
} 

const sum1 = new Sum() ; 
// sum1.add(5,6) ;

const sum2 = new Sum2() ; 
// sum2.add(5,6,9) ; 






//synchronous 
///compile every code line by lin 

//asynchronous 
///complie the multiple program indpenedently   

/* 

console.log('start'); 
setTimeout(() => {
    console.log("Async Task Done");
  }, 2000);

console.log('end'); 

*/ 


// console.log('enter two nums');  
let a , b ; 
a = 10 ; b = 20 ; 
setTimeout(()=>{ (a + b) ;  
// console.log(a + b);

} , 3000) ;

// console.log("your calcuation is going on , result will be in 3 sec : ");








//Promises
///make handling asynchronous operations like API calls,
// file loading, or time delays easier 
/* 
Promise-->resolved -- > .then() , .finally() 
     --->rejected -->  .then() , .catch(), .finally() 

    
     new Promise( (resolve , reject) => {} )
*/


//ex1
let checkEven = new Promise((resolve,reject) => { 

    let number = 4 ; 
    if(number % 2 === 0) { 
        // resolve("the number is even") ;
    } 
    else{ 
        // reject ('the number is odd') ;
    }
}) ; 

checkEven 
    .then((message)=>console.log(message)) 
    .catch((error)=>console.log(error)
    )



//ex2 
// function checkAge(age){  

//     return new Promise((resolve , reject)=>{ 
//         if(age >= 18) { 
//             // resolve ('u r above 18') ;
//         } 
//         else{ 
//             // reject ('go back ! u r under 18 !') ;
//         }
//     })
// } 
// const age2 = 2 ; 
// checkAge(age2).then((message)=>{ 
//     console.log(message);
    
// }).catch((error)=>{
//     console.log(error);
    
// })






//Async, await
//async- declares a function 
//that will always return a Promise. 

//await- pauses the execution of the function until the 
// Promise is resolved or rejected.


function checkAge(age){  

    return new Promise((resolve , reject)=>{ 
        if(age >= 18) { 
            resolve ('u r above 18') ;
        } 
        else{ 
            reject ('go back ! u r under 18 !') ;
        }
    })
}

const age2 = 2 ; 

async function validateAge(age) {
    try {
      const message = await checkAge(age); // Await the result of the promise
    //   console.log(message); // Log the resolved message
    } 
     catch (error) {
    //   console.log(error); // Handle the rejection
    }
  }
  
  validateAge(age2);
 

 



  //ex

function checkEven2(number) {  
    return new Promise((resolve,reject) => { 

  
    if(number % 2 === 0) { 
        // resolve("the number is even") ;
    } 
    else{ 
        // reject ('the number is odd') ;
    }
})  
  } 

  const num3 = 9 ;

  async function checkEvenOdd(number){ 
    try{ 
        const message  = await checkEven2(number) ; 
        console.log(message);
        
    } 
    catch(error) { 
        console.log(error);
        
    }
  } 
  checkEvenOdd(num3) ;





 
 
  //fetch  
  /// JavaScript function 
  //  used to make HTTP requests to servers. 
/*  

  fetch(url, options)
  .then(response => {
    // Handle response
  })
  .catch(error => {
    // Handle error
  });

  fetch(url, options)
  .then(response => {
    // Handle response
  })
  .catch(error => {
    // Handle error
  });

*/ 




  fetch('text.txt') 
    .then((res)=> 
    { 
        if(!res.ok) throw Error(res.statusText) ; 
        return res.text() ;
    })  
  .then((data) => console.log(data)) 
  .catch((error) => console.log(error))