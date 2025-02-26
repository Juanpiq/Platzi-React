"use client";
function TodoSearch(){
    return(
        <input className="border border-2 border-black w-64 mx-auto 
                          focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none" 
               placeholder="Cortar cebolla"
               onChange={(event) => console.log(event.target.value)}
        />
    );
  }

export {TodoSearch};