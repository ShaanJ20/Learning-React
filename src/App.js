import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";

import BlogDetails from './components/blogparameters/BlogDetails';
import Cr from './components/conditional_rendering/Cr';
import UsingustomHooks from './components/Custom-hook/UsingustomHooks';
import Home from './components/List_outputting/Home';
import List_output from './components/List_outputting/Listoutput';
import Parent from './components/methods_as_props/Parent';
import Useeffect from './components/useeffect/Useeffect';
import Jsonserver from './components/using_json_server/Jsonserver';



function App() {
  return (

    <>
    <Router>

      {/* <Parent/> */}
      {/* <Cr/> */}

      <Home/>
      {/* <Useeffect/> */}

      {/* <Jsonserver/> */}

      {/* <UsingustomHooks/> */}

      <Routes>
        <Route exact path='/blogs/:id' element = {<BlogDetails/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
