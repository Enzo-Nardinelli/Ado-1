import Texto from "./Texto";

function Descricao(props) {
    return (
      <Texto><p>{props.descricao}</p></Texto>
    );
  }
  
  export default Descricao;