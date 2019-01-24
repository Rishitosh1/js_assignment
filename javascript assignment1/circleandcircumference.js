//Rishitosh Acharya

'use strict';

console.log('To find area and circumference of a circle where radius is 5');

const radius = 5;


const circumference=(r)=>{
    console.log('the circumference is:'+ 2*Math.PI*r);
}

const area=(r)=>{
    console.log('the area is:'+ Math.PI*r**2);
}

circumference(radius);
area(radius);
