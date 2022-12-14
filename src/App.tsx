import './Form.css'
import { FirstExampleForm } from './components/FirstExampleForm'
import { RegisterFieldsForm } from './components/RegisterFieldsForm'
import { ValidationForm } from './components/ValidationForm'
import { ComponentsForm } from './components/ComponentsForm'
import { WithUILibForm } from './components/WithUILibForm'
import { HandleErrorForm } from './components/HandleErrorForm'
import { ClearErrorForm } from './components/ClearErrorForm'
import { UseWatchHook } from './components/UseWatchHook'

function App() {
  return (
    <>
      <h2>Basic Example</h2>
      <FirstExampleForm />

      <h2>Registering Fields</h2>
      <RegisterFieldsForm />

      <h2>Validation Forms</h2>
      <ValidationForm />

      <h2>Using With Components</h2>
      <ComponentsForm />

      <h2>With UI Component Library</h2>
      <WithUILibForm />

      <h2>Handling Errors</h2>
      <HandleErrorForm />

      <h2>Clear Errors...</h2>
      <ClearErrorForm />

      <h2>useWatch Hook</h2>
      <UseWatchHook />
    </>
  )
}

export default App
