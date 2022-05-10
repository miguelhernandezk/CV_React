import './App.css';
import { CVUI } from '../CVUI';
import { CVProvider } from "../CVContext/CVContext"

function App() {
  return (
    <CVProvider>
      <CVUI/>
    </CVProvider>
  );
}

export default App;

