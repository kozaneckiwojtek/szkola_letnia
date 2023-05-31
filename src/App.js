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
      const express = require('express');
      const path = require('path');
      const app = express();

      // Dodaj poniższe linie przed zdefiniowaniem innych tras
      app.use(express.static(path.join(__dirname, 'build')));

      app.get('/*', function (req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
      });

      <Baner />

      <Routes>
        <Route path="/" element={<Opis />} />
        <Route path="/kursy" element={<Kursy />} />
        <Route path="form" element={<Form />} />
      </Routes>

      <Stopka />


      app.listen(3000, function () {
  console.log('Serwer został uruchomiony na porcie 3000!')
});
    </>
  )
}

export default App;


