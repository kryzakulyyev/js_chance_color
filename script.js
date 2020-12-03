//Choose a random color
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
//1
let button1 = document.getElementById("button1")
//2
button1.onclick =  () =>{   
 let colorIndex = Math.floor(Math.random() * colors.length) //3
 document.querySelector("body").style.backgroundColor= colors[colorIndex]   //4
}
//5 TEST PASSED

//6
let button2 = document.getElementById("button2");
//7
 let arrayColor = ["A", "B", "C", "D", "E", "F", 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
 //8
 function colorHex(){
 return  Math.floor(Math.random() * arrayColor.length)
}
   button2.onclick = ()=> {
    
    let randomHex= "#"+arrayColor[colorHex()]+arrayColor[colorHex()]+arrayColor[colorHex()]+arrayColor[colorHex()]+arrayColor[colorHex()]+arrayColor[colorHex()];
   
     document.getElementsByClassName("textField")[0].innerText = randomHex;
    document.querySelector("body").style.backgroundColor=randomHex;
   
      
    
   }
