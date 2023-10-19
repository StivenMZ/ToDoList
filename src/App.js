import ResetStyles from './ResetStyles';
import Global from './Global';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import React, { useState, createContext, useEffect } from 'react';
import TaskList from './Components/TaskBar/taskBar';
import CreateTask from './Components/CreateTask/creaeteTask';
import AditionalFunctions from './Components/AditionalFunctions/aditionalFunctions';
import Notification from './Components/Notification';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Components/Main/main';
import DefaultPage from './Components/DefaultPage';
import Home from './Components/Home';
import SearchResults from './Components/Search';
import NavigationBar from './Components/DefaultPage/NavigationBar';

//


const DivNotificacion = styled.div`
  position: fixed;
  right: 0.7%;
  display: flex;
  flex-direction: column;
  width: 23%;
  height: auto;
  z-index: 9;
`;

const TareasGlobal = createContext();

function App() {
  const [esTemaOscuro, setEsTemaOscuro] = useState(false);
  const [busqueda, setBusqueda] = useState('');
  const [resultadoBusqueda, setResultadoBusqueda] = useState([]);
  const [notificaciones, setNotificaciones] = useState([]);
  const [tareas, setTareas] = useState([
    { titulo: 'Gimnasio', descripcion: 'Ir al gimnasio', prioridad: 'Alta', fechaIn: '27/08/2023', id: 0, completada: false, fechaFin: '' }
  ]);

  

  return (
    <Router>
      <>
        <ThemeProvider theme={esTemaOscuro ? darkTheme : lightTheme}>
          <TareasGlobal.Provider value={{ tareas, setTareas, busqueda, setBusqueda, resultadoBusqueda, setResultadoBusqueda, notificaciones, setNotificaciones}}>
            <ResetStyles />
            <Global />
            <DefaultPage>
              <DivNotificacion>
                {notificaciones.length > 0 && notificaciones.map((noti, pos) => {
                  return <Notification key={pos} mensaje={noti.mensaje} />;
                })}
              </DivNotificacion>
              <Main>
          <NavigationBar></NavigationBar>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/lista-de-tareas" element={<TaskList />} />
                    <Route path="/crear-tarea" element={<CreateTask />} />
                    <Route path="/funciones-adicionales" element={<AditionalFunctions />} />
                    <Route path="/resultado-de-busqueda" element={<SearchResults />} />
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
