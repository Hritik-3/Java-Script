//DOM
console.log("DOM (DOCUMENT OBJECT MODEL)");

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>DOM with Chai </title>
// </head>
// <body style="background-color: #212121; color:#fff;">
//     <div class = "parent">
//         <div class="day">Monday</div>
//         <div class="day">Tuesday</div>
//         <div class="day">Wednesday</div>
//         <div class="day">Thursday</div>
//     </div>
// </body>
// <script>
//     const parent = document.querySelector('.parent')
//     console.log(parent);
//     console.log(parent.children);
//     console.log(parent.children[1]);
//     // console.log(parent.children[1].innerHTML); 

//     // for(let i = 0 ; i < parent.children.length ; i++){
//     //     console.log(parent.children[i].innerHTML);
//     // }

//     parent.children[1].style.color = "orange"
//     // console.log(parent.firstElementChild);
//     // console.log(parent.lastElementChild);
//     // console.log()

//     const dayOne = document.querySelector('.day')
//     console.log(dayOne); //it will show the first day as querySelector is used not All
//     console.log(dayOne.parentElement); 

//     console.log("NODES: ", parent.childNodes); //this will give 9 as test then space then text then space



// </script>
// </html>


//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>DOM Chai</title>
//   </head>
//   <body style="background-color: #212121; color:#fff;">

//   </body>
//   <script>
//       const div = document.createElement('div')
//       console.log(div); //this will create a div Element
//       div.className = "main"
//       div.id = Math.round(Math.random() * 10 + 1) ;   
//       div.setAttribute("title","generated title")
//       div.style.backgroundColor = "blue"
//       div.style.padding = "12px"      
//       // div.innerHTML = "Nameste js"
//       const addText = document.createTextNode("CODE  WITH HARRY")   
//       div.appendChild(addText)

//       document.body.appendChild(div)


//   </script>
//   </html>



//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>DOM Chai</title>
//     </head>
//     <body style="background-color: #212121; color:#fff;">
//         <ul class = "language">
//             <li>JavaScript</li>
//         </ul>
//     </body>
//     <script>

//     //innerHTML (PRACTICE)
//         // function addLanguage(langName){
//         //     const li = document.createElement('li');
//         //     li.innerHTML = `${langName}`
//         //     document.querySelector('.language').appendChild(li)
//         // }


//     // createElement + createTextNode (MOSTLY USED)
//     function addLanguage(langName) {         
//         // function declaration: addLanguage takes one parameter (langName)

//         const newLi = document.createElement('li'); 
//         // Creates a new <li> element IN MEMORY.
//         // It's NOT visible on the webpage yet because it is not attached to the DOM tree.

//         newLi.appendChild(document.createTextNode(langName));
//         // 1. document.createTextNode(langName) creates a TEXT NODE.
//         //    - This is NOT HTML.
//         //    - It is pure text stored inside a TextNode object.
//         //    - Example: langName = "Python" => TextNode("Python")

//         // 2. newLi.appendChild(...) inserts that TEXT NODE inside the <li>.
//         //    After this line, newLi becomes: <li>Python</li>

//         document.querySelector('.language').appendChild(newLi);
//         // document.querySelector('.language') finds the FIRST element with class="language".
//         // In your HTML, this is: <ul class="language">...</ul>

//         // appendChild(newLi) inserts the prepared <li> as the LAST CHILD of the <ul>.
//         // Now the <li> becomes visible on the webpage.
//     }

//     addLanguage("Python"); // adds <li>Python</li> to the <ul>
//     addLanguage("C++");    // adds <li>C++</li> to the <ul>
//     addLanguage("VLSI")

//     //Edit
//     const secondLang = document.querySelector("li:nth-child(2)");

//     const newLi = document.createElement('li');
//     newLi.textContent = "Mojo";

//     secondLang.replaceWith(newLi)

//     //edit
//     const firstLang = document.querySelector("li:nth-child(1)");
//     firstLang.outerHTML = '<li>Typescript</li>'

//     //remove
//     const lastLang = document.querySelector('li:last-child')
//     lastLang.remove();

//     </script>


//     <!-- <script>
//         const div = document.createElement('div')
//         console.log(div); //this will create a div Element
//         div.className = "main"
//         div.id = Math.round(Math.random() * 10 + 1) ;   
//         div.setAttribute("title","generated title")
//         div.style.backgroundColor = "blue"
//         div.style.padding = "12px"      
//         // div.innerHTML = "Nameste js"
//         const addText = document.createTextNode("CODE  WITH HARRY")   
//         div.appendChild(addText)

//         document.body.appendChild(div)


//     </script> -->

//     </html>


