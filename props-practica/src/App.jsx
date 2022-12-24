import { Greet } from "./componentes/Greeting";
import { Departure } from "./componentes/Departure";
import { Detalles } from "./componentes/Detalles";
import { Boton } from "./componentes/Botones";
import { Entrada } from "./componentes/Evaluacion";
function App(){
  const prueba=false;
  return (
    <>
      <Greet/>
      <Departure/>
      <Detalles fellow={prueba?'amigos':'enemigos'} material={prueba?'fanta':'coca cola'}/>
      <Boton/>
      <Entrada/>
    </>
  )
}
export default App
