import './App.css';
import { CVUI } from '../CVUI';
import { CVProvider } from "../CVContext/CVContext"

function App() {
  return (
    // <EditorUI/>
    <CVProvider>
      <CVUI/>
    </CVProvider>
  );
}

export default App;

