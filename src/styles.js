import styled from "styled-components"
import {buttonstyleNormal} from "./components/mixins";
const x = {
    biologia: "green",
    quimica: "blue",
    fisica: "gray",
}

export const Container = styled.div``;

export const Header = styled.header`
    background-color: ${props => x[props.area]};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;d
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    `;

export const Button = styled.button`
  ${props=>props.sucesso &&
    buttonstyleNormal (props.theme.colors.green, props.theme.colors.green, props.theme.colors.white)}
  
  ${props=>props.erro &&
    buttonstyleNormal (props.theme.colors.red, props.theme.colors.red, props.theme.colors.black)}
 `;

