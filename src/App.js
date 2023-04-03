import './App.css';
import UserPage from './Components/UserPage';
import { Switch, Route } from 'react-router-dom';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import AddTeacher from './Components/AddTeacher';
import TeacherDetails from './Components/TeacherDetails';
import EditTeacher from './Components/EditTeacher';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <UserPage
          />
        </Route>

        <Route path='/add/user'>
          <AddUser
           />
        </Route>
        <Route path='/edit/:id'>
          <EditUser  
          />
        </Route>
        <Route path='/add/teacher'>
          <AddTeacher 
           />
        </Route>
        <Route path='/teacher/details'>
         <TeacherDetails 
        />
        </Route>
        <Route path='/ed/:id'>
         <EditTeacher
     
       />
        </Route>



      </Switch>

    </div>
  );
}

export default App;
