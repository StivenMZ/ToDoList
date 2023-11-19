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
import NotFound from './Components/NotFound';
import { MediaQueryContextProvider } from "react-responsive";

//

const TareasGlobal = createContext();

function App() {

const [primerRender , setPrimerRender] = useState(true);

  

 

  const [esTemaOscuro, setEsTemaOscuro] = useState(null);
  const [busqueda, setBusqueda] = useState('');
  const [resultadoBusqueda, setResultadoBusqueda] = useState([]);
  const [notificaciones, setNotificaciones] = useState([]);
  const [tareas, setTareas] = useState([]);
  const [history, setHistory] = useState([]);

  const [showCompleted, setShowCompleted] = useState(false);
  const [priority, setPriority] = useState('sin prioridad');


  useEffect(() => {
    if(!primerRender){

      localStorage.setItem("tareas", JSON.stringify(tareas));
      console.log(tareas, " tareas")
    }
  }, [tareas]);
  
  useEffect(() => {
    if(!primerRender){
    localStorage.setItem("history", JSON.stringify(history));
    console.log(history , " historial")
      }
  }, [history]);


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


  console.log(esTemaOscuro, "esTemaOscuro");

  }, [esTemaOscuro])
  
  
  useEffect(() => {

    if(localStorage.getItem("tareas") === null){
      console.log("tareas nulo")
      setTareas([]);
    }else{
      console.log("tareas no nulo")
      setTareas(JSON.parse(localStorage.getItem("tareas")))
    }
    
    if(localStorage.getItem("history") === null){
      console.log("History nulo")
      setHistory([]);
    }else{
      console.log("History no nulo")
    
      setHistory(JSON.parse(localStorage.getItem("history")))
    }
    
    setPrimerRender(false);
    
    
      }, [])



  return (
    <Router>
      <>
        <ThemeProvider theme={esTemaOscuro ? darkTheme : lightTheme}>
          <TareasGlobal.Provider value={{
            tareas, setTareas, busqueda, setBusqueda, resultadoBusqueda, setResultadoBusqueda, notificaciones, setNotificaciones, showCompleted, setShowCompleted, priority,
            setPriority, history, setHistory, esTemaOscuro, setEsTemaOscuro
          }}>
            <ResetStyles />
            <Global />
            {notificaciones.length > 0 && notificaciones.map((noti, pos) => {
                  return <Notification key={pos} mensaje={noti.mensaje} type={noti.type} />;
                })}

             
            <DefaultPage>
            
            
                <NavigationBarHandler></NavigationBarHandler>
              <Main>
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

export { TareasGlobal };
export default App;
