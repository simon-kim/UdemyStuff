import React from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/loginForm'
import EmployeeList from './components/employeeList'
import EmployeeCreate from './components/employeeCreate'
import EmployeeEdit from './components/employeeEdit'

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene
          key="login"
          component={LoginForm}
          title="Please Login"
          initial
        />
      </Scene>

      <Scene key="main">
        <Scene
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          rightTitle="Add"
          onRight={() => Actions.employeeCreate()}
          initial
        />
        <Scene
          title="Create Employee"
          key="employeeCreate"
          component={EmployeeCreate}
        />
        <Scene
          key="employeeEdit"
          component={EmployeeEdit}
          title="Edit Employee"
        />
      </Scene>
    </Router>
  )
}

export default RouterComponent
