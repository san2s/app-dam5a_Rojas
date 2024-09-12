import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
//import Promesa1 from './functions/Promesa1.jsx'
import './index.css'
//import MyPromises from './functions/MyPromises.jsx'
import MyPromisesAll from './functions/MyPromisesAll.jsx'
import MyPromisesRace from './functions/MyPromisesRace.jsx';
import MyFetchsAPIs from './functions/MyFetchs.jsx';
import PromesaBasica from './functions/PromesaBasica.jsx';
import MyFetchBlob from './functions/MyFetchBlob.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Promesa1 /> */}
    {/*<MyPromises/> */}
    {/*<MyPromisesRace/>*/}
    {/* <MyPromisesAll/>*/}
    {/*<MyFetchsAPIs/>*/}
    {/* <PromesaBasica/>*/}
    <MyFetchBlob/>
  </StrictMode>,
);