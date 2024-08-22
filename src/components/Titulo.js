import Texto from "./Texto";

function Titulo(props) {
  return (
    <Texto tamanhoDaFonte="20px"><p>{props.titulo}</p></Texto>
  );
}

export default Titulo;
