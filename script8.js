


// let num = 10;
// console.log(num);



//     let num1 = 122;
//     var num2 = 1244;
//     const num3 = 1234;


// //console.log(num1);
// console.log(num2);
// console.log(num3);


//  num1 = 555;
// // = 666;

// console.log(num1);
// console.log(num2);
let array = [10,20,30,40,50,60,70,80,90,100];




function addnumber(){
    
    let loc = parseInt(document.getElementById("txtloc").value);
    let num1 =parseInt(document.getElementById("txtnum").value);

    // let location = array.indexOf(loc);
    

    let location = array.indexOf(loc);

    array [location] = num1;

    console.log(array);
}