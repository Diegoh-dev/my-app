import styled from "styled-components";

export const Container = styled.div`
  /* background-size: cover; */
  background: #0A0A10;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  min-height: 100vh;
`;

export const Logo = styled.img`
margin: 25px 0;
height: 190px;
`

export const H1 = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  text-align: center;
  color: #ffffff;
`;

export const LabelPedido = styled.p`
font-weight: 700;
font-size: 18px;
line-height: 22px;
letter-spacing: -0.408px;
color: #EEEEEE;

`
export const InputPedido = styled.input`
margin-top: 5px;
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
border-radius: 14px;
border: none;
outline: none;
padding: 10px;

font-weight: 300;
font-size: 18px;
line-height: 21px;
color: #FFFFFF;

`

export const ContainerItens = styled.div`
display: flex;
flex-direction: column;
gap:42px ;
`