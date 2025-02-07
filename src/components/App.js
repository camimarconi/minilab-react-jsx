import "bootstrap/dist/css/bootstrap.min.css";
import Greeting from "./Greeting";
import ProfileCard from "./Profile";
import Lista from "./ToDoList";
import Emotions from "./EmotionMeter";

// Não se esqueça de importar os componentes!

function App() {
  return (
    <div className="container mt-5 mb-5 col-6">
      {/* Não se esqueça de invocar seus componentes aqui! */}
      <small>Interpolação de variáveis</small>
      <Greeting />

      <small>Imagens</small>
      <ProfileCard />
      <hr />

      <small>Renderização de listas</small>
      <Lista />
      <hr />

      <small>Renderização condicional</small>
      <hr />
      <Emotions />
    </div>
  );
}

export default App;
