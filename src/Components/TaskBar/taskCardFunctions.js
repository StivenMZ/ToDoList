const finishTask = (id, tareas, setTareas, history, setHistory, titulo) => {
    const fecha = new Date();
    let time = "";
    time += fecha.getDate() + "/";
    time += fecha.getUTCMonth() + 1 + "/";
    time += fecha.getFullYear();

    const tareasActual = [...tareas];

    const tareaActualizar = tareasActual.find((task) => task.id === id);

    if (tareaActualizar) {
      tareaActualizar.completada = true;
      tareaActualizar.fechaFin = time;
    }

    setTareas(tareasActual);

    setHistory([
      {
        date: `${time}    ${fecha.getHours()}:${
          fecha.getMinutes().length === 1 ? `0+1` : fecha.getMinutes()
        }`,
        title: titulo,
        type: "completed",
      },
      ...history,
    ]);
  };


  const deleteTask = (id, tareas, setTareas, history, setHistory, titulo) => {
    const fecha = new Date();
    let time = "";
    time += fecha.getDate() + "/";
    time += fecha.getUTCMonth() + 1 + "/";
    time += fecha.getFullYear();

    const newArray = tareas.filter((task) => task.id !== id);

    setTareas(newArray);

    setHistory([
      {
        date: `${time}    ${fecha.getHours()}:${
          fecha.getMinutes().length === 1 ? `0+1` : fecha.getMinutes()
        }`,
        title: titulo,
        type: "delete",
      },
      ...history,
    ]);
  };

const taskCardFunctions = {finishTask, deleteTask};

export default taskCardFunctions;