
import ResetStyles from './ResetStyles';
import Search from './Components/Header/search';
import Global from './Global';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import React, { useState , useEffect, createContext, useContext} from 'react';
import Main from './Components/Main/main';
import TaskList from './Components/TaskBar/taskBar';
import CreateTask from './Components/CreateTask/creaeteTask';
import AditionalFunctions from './Components/AditionalFunctions/aditionalFunctions';

const TareasGlobal = createContext();


function App() {

  const [esTemaOscuro, setEsTemaOscuro] = useState(false);

  const changeTheme = () =>{
    setEsTemaOscuro(!esTemaOscuro);
  }

  const [tareas, setTareas] = useState([/* {titulo: 'Gimnasio', descripcion: 'Ir al gimnasio', prioridad: 'Alta', fechaIn: '27/08/2023', id: 1, completada : false},{titulo: 'Restaurante', descripcion: 'Ir al restaurante', prioridad: 'Media', fechaIn: '27/08/2023', id: 2, completada : false}, {titulo: 'Gimnasio', descripcion: 'Ir al gimnasio', prioridad: 'Alta', fechaIn: '27/08/2023', id: 3, completada : false},{titulo: 'Restaurante', descripcion: 'Ir al restaurante', prioridad: 'Media', fechaIn: '27/08/2023', id: 4, completada : false} */]);
  
return (
<>
    <ThemeProvider theme={esTemaOscuro ? darkTheme : lightTheme}>
    <TareasGlobal.Provider value={{tareas, setTareas}}>
    <ResetStyles />
    <Global />
    <Search onChangeTheme={changeTheme} >
    </Search>
    <Main>
    <TaskList></TaskList>
    <CreateTask></CreateTask>
    <AditionalFunctions></AditionalFunctions>
    </Main>

    </TareasGlobal.Provider>
    </ThemeProvider>
</>
  );
}

export {TareasGlobal};
export default App;
