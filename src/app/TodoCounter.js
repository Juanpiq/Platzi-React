  function TodoCounter({total, completed}){ //pude haber puesto props y ya
      return(
        <h1 className = "text-center text-3xl font-times">
          Has completado {completed} de {total} TODOS
        </h1>
      );
    }

  export {TodoCounter};