
//datos grafico1

function rk4(k,m,ya,n)  {

    h=1;

    var T = [n+1];


    for (let j = 0; j <= n; j++) {
        
        T[j]=j;
        
    }

    
    var Y = [n+1];

    Y[0]=ya; 

for (let index = 0; index <= T.length; index++) {

    k1=h*edo(k,m,T[index],Y[index]); 

   k2=h*edo(k,m,T[index]+h/2,Y[index]+k1/2); 

   k3=h*edo(k,m,T[index]+h/2,Y[index]+k2/2); 

   k4=h*edo(k,m,T[index]+h,Y[index]+k3); 

   Y[index+1]=Y[index]+(k1+2*k2+2*k3+k4)/6; 

   console.log( Y[index]);
  
}

}

function edo(k,m,t,y) {

valor= k*(m-y)*y;

return valor;

}


//datos grafico2

function rk42(k,q,x,m,ya,n)  {

    h=1;

    var X = [n+1];

   for (let j = 0; j <= n; j++) {  X[j]=j; }
  
    var W = [n+1];
    var F = [n+1];

    W[0]=ya; 

    

for (let index = 0; index <= X.length; index++) {

    k1=h*edo2(k,q,x,m,X[index],W[index]); 

    k2=h*edo2(k,q,x,m,X[index]+h/2,W[index]+k1/2); 

    k3=h*edo2(k,q,x,m,X[index]+h/2,W[index]+k2/2); 

    k4=h*edo2(k,q,x,m,X[index]+h,W[index]+k3); 

    W[index+1]=W[index]+(k1+2*k2+2*k3+k4)/6; 

    //console.log( W[index]);
  }


  for (let a = 0; a < X.length; a++) {

    xt2=(x)*(Math.exp((-k*q*W[a])));
      
    F[a]=m-xt2-W[a];

    
    console.log(F[a]);
      
  }
}

function edo2(k,q,x,m,t,y) {

    xt=(x)*(Math.exp((-k*q*y)));

valor= q*(m-y-xt);

return valor;

}

//rk4(1/500000,100000,1000,30);

rk42(1/500000,1/10000,99000,100000,0,30) 
 


