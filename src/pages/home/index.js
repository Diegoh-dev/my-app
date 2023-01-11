import {
  Container,
  ContainerItens,
  H1,
  InputPedido,
  LabelPedido,
  Logo,
} from "./styles";
import logoEmpresa from "../../assets/Logo.png";

function Home() {
  return (
    <Container>
      <div>
        <Logo src={logoEmpresa} />
        <H1>Faça seu pedido!</H1>
      </div>

      <ContainerItens>
        <div>
          <LabelPedido>Pedido</LabelPedido>

          <InputPedido />
        </div>

        <div>
          <LabelPedido>Nome do Cliente</LabelPedido>
          <InputPedido />
        </div>
      </ContainerItens>
    </Container>
  );
}

export default Home;
