//Rishitosh Acharya

'use strict';


function pluralize( animal , num )
{
    if(num > 1)
    {
        console.log(animal + "s");
    }

    else{
        console.log(animal);
        
    }
}

pluralize("cat",2);