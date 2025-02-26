"use client";

function TodoItem(props){
    return(
      <li className="flex items-center text-green-500 border-2 w-96 h-24 max-h-24 relative">
        <span className={`m-10 Icon Icon-Check`}>V</span>
        <p className="w-full text-black overflow-wrap break-all overflow-hidden">{props.text}</p>
        <button 
          className="absolute top-[-22px] right-0 transform -translate-x-10 bg-transparent text-black p-2 rounded text-base font-bold hover:text-red-500"
          onClick={
            () => console.log('Hola')
          }
        >x</button>
      </li>
    );
  }

export {TodoItem};