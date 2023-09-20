
import ResetStyles from './ResetStyles';
import Search from './Components/Header/search';
import Global from './Global';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { useState , useEffect} from 'react';
import Main from './Components/Main/main';
import TaskList from './Components/TaskBar/taskBar';
import CreateTask from './Components/CreateTask/creaeteTask';
import AditionalFunctions from './Components/AditionalFunctions/aditionalFunctions';


function App() {

  const [esTemaOscuro, setEsTemaOscuro] = useState(false);

  const changeTheme = () =>{
    setEsTemaOscuro(!esTemaOscuro);
  }

  const [tareaPend, setTareaPend] = useState({})

  const recibirTarea = (obj) =>{
    setTareaPend(obj)

    setNewId(newId +1)
  }

  const [newId, setNewId] = useState(2);

  useEffect(()=>{
    console.log(newId)

  },[newId])






  return (
<>
    <ThemeProvider theme={esTemaOscuro ? darkTheme : lightTheme}>
    <ResetStyles />
    <Global />
    <Search onChangeTheme={changeTheme}>
    </Search>
    <Main>
    <TaskList newTarea={tareaPend}></TaskList>
    <CreateTask recibirTarea={recibirTarea} newId={newId}></CreateTask>
    <AditionalFunctions></AditionalFunctions>
    </Main>

    </ThemeProvider>
</>
  );
}

export default App;
