import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom"
import Stopka from './stopka';
import Baner from './baner';
import Form from './form'
import { Kursy } from "./kursy"
import { Opis } from "./opis"



function App() {
  return (
    <>

      <Baner />

      <Routes>
        <Route path="/" element={<Opis />} />
        <Route path="/kursy" element={<Kursy />} />
        <Route path="form" element={<Form />} />
      </Routes>

      <Stopka />



    </>
  )
}

export default App;


