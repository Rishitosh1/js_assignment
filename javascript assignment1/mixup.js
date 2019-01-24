//Rishitosh Acharya

function mixUp (Stra, Strb) {
    let result1 = Strb.slice(0,2) + Stra.slice(-1);
    let result2 = Stra.slice(0, 2) + Strb.slice(2);
    
    console.log(result1 + ' ' + result2);
  }
  
  mixUp('mix', 'pod');
  mixUp('dog', 'dinner');