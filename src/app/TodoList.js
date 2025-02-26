function TodoList(props){
    return(
      <ul className="flex flex-col items-center gap-5">
        {props.children}
      </ul>
    );
  }

export {TodoList};