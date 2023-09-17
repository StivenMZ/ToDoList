
import ResetStyles from './ResetStyles';
import Search from './Components/Header/search';
import Global from './Global';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { useState } from 'react';
import Main from './Components/Main/main';
import TaskList from './Components/TaskBar/taskBar';
import CreateTask from './Components/CreateTask/creaeteTask';
import AditionalFunctions from './Components/AditionalFunctions/aditionalFunctions';


function App() {

  const [esTemaOscuro, setEsTemaOscuro] = useState(false);

  const changeTheme = () =>{
    setEsTemaOscuro(!esTemaOscuro);
  }

  return (
<>
    <ThemeProvider theme={esTemaOscuro ? darkTheme : lightTheme}>
    <ResetStyles />
    <Global />
    <Search onChangeTheme={changeTheme}>
    </Search>
    <Main>
    <TaskList></TaskList>
    <CreateTask></CreateTask>
    <AditionalFunctions></AditionalFunctions>
    </Main>

    </ThemeProvider>
</>
  );
}

export default App;
