//Rishitosh Acharya 


'use strict';

const celsius= 37; 
const fehrenheit=98;

const cel=(f)=>{
    dc= (f-32)/1.8;
    console.log(fehrenheit +' degree f is '+ dc +' degree c');
}

const feh=(c)=>{
    df=(c*1.8)+32;
    console.log(celsius +' degree c is '+ df +' degree f')
}

cel(fehrenheit);
feh(celsius);