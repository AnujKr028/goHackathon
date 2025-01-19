// dom  

const byid = document.getElementById('new_section') ; 
// console.log(byid);


const byclass = document.getElementsByClassName('same_class') ; 
// console.log(byclass);


const tag = document.getElementsByTagName('ul')
// console.log(tag);


const query_selector = document.querySelector(".myclass")
// console.log(query_selector);
 

const h1 = document.querySelectorAll("h1") ; 
// console.log(h1);


// create new element 
const newElement = document.createElement('div') ; 

newElement.setAttribute('id' , 'new_id') ; 
newElement.classList.add('new_class') ; 
// newElement.textContent = "this is a new element created using dom" ;


const parentElementt  = document.body ;
parentElementt.appendChild(newElement) ; 

// console.log(newElement);





//Text 
const p = document.querySelector('p') ;
// console.log(p.innerText); 
// console.log(p.textContent);  
// console.log(p.innerHTML = "this is changed by inner html ");

// console.log(p.innerText);




//classes 
const addClass = document.querySelector('h2') ; 
// addClass.classList.add("classTobeAdd")
 

// addClass.classList.remove("classTobeAdd")  ;

        //if class is not present , toggle will add it
        //if class is  present , toggle will remove it

// addClass.classList.toggle("classTobeAdd") ;  


const forToggle = document.querySelector('h3') 
// forToggle.classList.toggle("h3-class") ;  


const forReplace = document.querySelector("span") ; 
// forReplace.classList.replace("h3-class" , "new-h3-class")                     //element.replace(old class, new class) 





//Attributes 
/*
const a = document.querySelector('a') ; 

a.href="www.google.com" ;  
a.innerText = "google"; 
console.log(input.value);
console.log(input.value = "value is changed !"); 
console.log(input.type);
*/ 



//get attribute   
/*
const input = document.querySelector('input') ; 
console.log(input.getAttribute('type')); 
console.log(input.getAttribute('placeholder'));
*/ 


//set attr 
const setOl = document.querySelector('ol') ;
// console.log(setOl.setAttribute('type','A'));                     //.setAttr('attrName' , 'value')


const ChangeLink = document.querySelector('a')
// console.log(ChangeLink.setAttribute('href','www.bookischanged.com'));






const ul = document.querySelector('ul') 


// console.log(ul.parentElement);             
// console.log(ul.parentElement.parentElement);
// console.log(ul.parentElement.parentElement.parentElement);
// console.log(ul.parentElement.parentElement.parentElement.parentElement);      //null 
  

// console.log(ul.childElementCount);

const firstLi = document.querySelector('li') ; 
// console.log(firstLi.nextElementSibling.innerText);



/*
console.log(ul.children[0].innerText);
console.log(ul.children[1].innerText);
console.log(ul.children[2].innerText);
console.log(ul.children[3].innerText = 'loopean is changed');
*/ 





//Style
/* 
const h1_class = document.querySelector('.h1-class') ;
h1_class.style.color = "teal" ; 
h1_class.style.fontSize = "4em" ;  
h1_class.style.fontStyle="italic" 

const div = document.querySelector('div')  ; 
div.style.border = '1px solid black' ;  
div.style.backgroundColor = "yellow"
*/





//creating elements
const Element = document.createElement('h1')  ;   
const body = document.body ;
Element.innerText= "this is a new text created here using dom!"  ; 
Element.classList.add("p-class") ;  
// console.log(Element);
 
body.appendChild(Element) 



//insertBefore {left}
//insertAdjacentelement{left}



//Events 
const onClick = document.querySelector('.button') 
onClick.addEventListener('click' , function() { 
        console.log("button is touched !");
        
}) 

//event obj
const eventss = document.querySelector('.btn-2')  ; 
eventss.addEventListener('click' , function(event) {
        console.log(event);
        
}) 


const dbclick = document.querySelector('.p_class2') ;
dbclick.addEventListener('dblclick', function(){
        dbclick.style.color="red" ; 
        // console.log("event is happening ");
        
})
dbclick.addEventListener('copy', function(){
//        console.log('copied');
       
}) 


const input2 = document.querySelector(".input1")  ; 
input2.addEventListener('keypress',function(){
        //  console.log("key is prrssed");
         
})


//useful 
input2.addEventListener('keypress',(e)=>{
        //  console.log(e.charCode);
        //  console.log(e.code);
        //  console.log(e.ctrlKey);
        //  console.log(e.key);
        //  console.log(e.ctrlKey);
        // console.log(e.shiftKey);
        
         
         
})

