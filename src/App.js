import ResetStyles from './ResetStyles';
import Global from './Global';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import React, { useState, createContext, useEffect } from 'react';
import TaskList from './Components/TaskBar/taskBar';
import CreateTask from './Components/CreateTask/creaeteTask';
import AditionalFunctions from './Components/AditionalFunctions/aditionalFunctions';
import Notification from './Components/Notification';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Components/Main/main';
import DefaultPage from './Components/DefaultPage';
import Home from './Components/Home';
import SearchResults from './Components/SearchResults';
import NavigationBarHandler from './Components/DefaultPage/NavigationBarHandler';
import History from './Components/History';
import NotFound from './Components/NotFound'

/* Contexto de tareas, para manejar globalmente los datos de toda la APP */
const TareasGlobal = createContext();

function App() {

/* Estados 
primer render = validar si es la primera vez que la página se renderiza para validar las cookies y obtener los datos de tareas y historial
esTemaOscuro = cambiar colores de la página entre claro y oscuro
Busqueda = manejo global de busqueda para enviarla al search
Resultados de busqueda = variable global para mostrarla en resultadossearch 
Notificaciones = notificaicones globales para enviarla al componente de notificaciones cada que ocurre algo y notificar al usuario
tareas = variable global de tareas, para manejar la lógica de toda la aplicación
history = historial, para mostrar la actividad del usuario
showCompletedes = manejo global de las tareas completadas para el Taskbar
Priority = manejo global de prioridad, para que el usuario entre a la lista de tareas y vea la prioridad con la que salió
*/
const [primerRender , setPrimerRender] = useState(true);
const [esTemaOscuro, setEsTemaOscuro] = useState(null);
const [busqueda, setBusqueda] = useState('');
const [resultadoBusqueda, setResultadoBusqueda] = useState([]);
const [notificaciones, setNotificaciones] = useState([]);
const [tareas, setTareas] = useState([]);
const [history, setHistory] = useState([]);
const [showCompleted, setShowCompleted] = useState(false);
const [priority, setPriority] = useState('sin prioridad');


/* Actualización  de tareas en cookies] */
  useEffect(() => {

    /* Si no es el primer render,guardar cada cambio en las tareas en el localstorage */
    if(!primerRender){

      localStorage.setItem("tareas", JSON.stringify(tareas));

    }
  }, [tareas]);
  

  /* Actualización  de tareas en cookies] */

  useEffect(() => {
     /* Si no es el primer render,guardar cada cambio en el historial en el localstorage */
    if(!primerRender){
    localStorage.setItem("history", JSON.stringify(history));
      }
  }, [history]);

  /* Cambiar el theme en el localstorage cada que el usuario lo cambie, para recuperarlo al volver a recargar la página */
  useEffect(() => {
    const tema =  localStorage.getItem("theme");

    if(primerRender){
  if (tema !== null){
    setEsTemaOscuro(JSON.parse(tema));
  } else{
    setEsTemaOscuro(false);
  }
  }
  if(!primerRender){
    localStorage.setItem("theme", JSON.stringify(esTemaOscuro));

  }
  }, [esTemaOscuro])
  
  
  /*Validación del localStorage para recuperar las tareas y el historial en caso de que exista y tenga valores */
  useEffect(() => {
    /* Si el item "tareas"  es nulo actualizar un array vacío */
    if(localStorage.getItem("tareas") === null){
      setTareas([]);
    }else{
      /* Si el item tareas no es nulo, actualizar el estado tareas con el valor del item covetido con JSON.parse */
      setTareas(JSON.parse(localStorage.getItem("tareas")))
    }
    /* Lo mismo que con tareas, pero para el historial */
    if(localStorage.getItem("history") === null){
      setHistory([]);
    }else{
          /* Lo mismo que con tareas, pero para el historial */

      setHistory(JSON.parse(localStorage.getItem("history")))
    }
    /* Establecer primer render a false, para que en las próximas renderizaciones se use el useEffect de arriba */
    setPrimerRender(false);
      }, [])



  return (
    /* Router para usar rutas */
    <Router>
      <>
      {/* Tema para cambiar entre oscuro y claro */}
        <ThemeProvider theme={esTemaOscuro ? darkTheme : lightTheme}>
          {/* Valores exportados para el contexto */}
          <TareasGlobal.Provider value={{
            tareas, setTareas, busqueda, setBusqueda, resultadoBusqueda, setResultadoBusqueda, notificaciones, setNotificaciones, showCompleted, setShowCompleted, priority,
            setPriority, history, setHistory, esTemaOscuro, setEsTemaOscuro
          }}>
            {/* Reset styles para quitar los estilos por defecto de los navegadores */}
            <ResetStyles />
            {/* Global para tamaños de rems, barra de navegación y estilos */}
            <Global />
            {/* iterar las notificaciones cada que ocurra algo(crear, eliminar, completar, enviar sugerencia) para mostrar en pantalla */}
            {notificaciones.length > 0 && notificaciones.map((noti, pos) => {
                  return <Notification key={pos} mensaje={noti.mensaje} type={noti.type} />;
                })}

             {/* Importaciones de componentes */}
            <DefaultPage>
                <NavigationBarHandler></NavigationBarHandler>
              <Main>
                {/* Rutas y sus componentes */}
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path="/lista-de-tareas" element={<TaskList />} />
                  <Route path="/crear-tarea" element={<CreateTask />} />
                  <Route path="/historial" element={<History />} />
                  <Route path="/mas-funciones" element={<AditionalFunctions />} />
                  <Route path="/resultado-de-busqueda" element={<SearchResults />} />
                  <Route path ="*" element={<NotFound />} />
                </Routes>
              </Main>
            </DefaultPage>
          </TareasGlobal.Provider>
        </ThemeProvider>
      </>
    </Router>
  );
}

/* Exportar tareas global para usarla en el resto de la APP con useContext */
export { TareasGlobal };
export default App;
