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
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Main from './Components/Main/main';
import DefaultPage from './Components/DefaultPage';
import Home from './Components/Home';
import SearchResults from './Components/SearchResults';
import NavigationBar from './Components/DefaultPage/NavigationBar';
import History from './Components/History';
import NotFound from './Components/NotFound';

//


const DivNotificacion = styled.div`
  position: fixed;
  right: 0.7%;
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
  const [tareas, setTareas] = useState([{ titulo: 'Botones de esta web', descripcion: 'Organizar los borders de los botones al hacer activate', prioridad: 'Baja', fechaIn: '27/08/2023', id: 7, completada: false, fechaFin: '' },
    { titulo: 'Gimnasio', descripcion: '12345678901234567890123456789012345678901234567890123456789012345678901234567890', prioridad: 'Alta', fechaIn: '27/08/2023', id: 0, completada: false, fechaFin: '' },
    { titulo: 'Dieta', descripcion: 'Hacer dieta', prioridad: 'Media', fechaIn: '27/08/2023', id: 1, completada: true, fechaFin: '19/10/2023' },
    { titulo: 'Dulce', descripcion: 'Comer dulce', prioridad: 'Baja', fechaIn: '27/08/2023', id: 2, completada: true, fechaFin: '19/10/2023' },
    { titulo: 'Correr', descripcion: 'Ir a correr', prioridad: 'Alta', fechaIn: '27/08/2023', id: 3, completada: false, fechaFin: '' },
    { titulo: 'Leer', descripcion: 'Leer un libro', prioridad: 'Media', fechaIn: '27/08/2023', id: 4, completada: true, fechaFin: '19/10/2023' },
    { titulo: 'Estudiar', descripcion: 'Estudio para el examen', prioridad: 'Media', fechaIn: '27/08/2023', id: 5, completada: false, fechaFin: '' },
    { titulo: 'Cocinar', descripcion: 'Preparar la cena', prioridad: 'Baja', fechaIn: '27/08/2023', id: 6, completada: true, fechaFin: '19/10/2023' },
    { titulo: 'Lavar', descripcion: 'Lavar los platos', prioridad: 'Baja', fechaIn: '27/08/2023', id: 7, completada: false, fechaFin: '' },
    
  ]);


  const [showCompleted, setShowCompleted] = useState(false);

  const [priority, setPriority] = useState('sin prioridad');

  const [history, setHistory] = useState([{date: '2023-01-01 2:34', type: 'create', title :"ejemplo"},
  {date: '2023-01-01 2:34', type: 'delete', title :"ejemplo"},
  {date: '2023-01-01 2:34', type: 'completed', title :"ejemplo1"},
  {date: '2023-01-01 2:34', type: 'completed', title :"ejemplo2"},
  {date: '2023-01-01 2:34', type: 'create', title :"ejemplo"},
  {date: '2023-01-01 2:34', type: 'delete', title :"ejemplo"},
  {date: '2023-01-01 2:34', type: 'completed', title :"ejemplo3"},
  {date: '2023-01-01 2:34', type: 'create', title :"ejemplo3"},
  {date: '2023-01-01 2:34', type: 'delete', title :"ejemplo3"}]);



  useEffect(() => {
    console.log(notificaciones, ' notificaciones desde APP')
  }, [notificaciones])


  useEffect(() => {
    console.log(tareas, ' tareas desde APP')
  }, [tareas])
  return (
    <Router>
      <>
        <ThemeProvider theme={esTemaOscuro ? darkTheme : lightTheme}>
          <TareasGlobal.Provider value={{
            tareas, setTareas, busqueda, setBusqueda, resultadoBusqueda, setResultadoBusqueda, notificaciones, setNotificaciones, showCompleted, setShowCompleted, priority,
            setPriority, history, setHistory
          }}>
            <ResetStyles />
            <Global />
            {notificaciones.length > 0 && notificaciones.map((noti, pos) => {
                  return <Notification key={pos} mensaje={noti.mensaje} type={noti.type} />;
                })}

             

            <DefaultPage>
            
            
              <Main>
                <NavigationBar></NavigationBar>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path="/lista-de-tareas" element={<TaskList />} />
                  <Route path="/crear-tarea" element={<CreateTask />} />
                  <Route path="/historial" element={<History />} />
                  <Route path="/funciones-adicionales" element={<AditionalFunctions />} />
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
