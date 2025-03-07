"use client";
import React from "react";
function TodoSearch({
  searchValue,
  setSearchValue
}){
  
    return(
        <input className="border border-2 border-black w-64 mx-auto 
                          focus:border-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none" 
               placeholder="Cortar cebolla"
               value = {searchValue}
               onChange={
                (event) => {
                  setSearchValue(event.target.value)
                }
               }
        />
    );
  }

export {TodoSearch};