import Header from "./components/Header/Header"
import { createGlobalStyle } from "styled-components";
import { useState }  from "react";


export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {

  const [currSender, setCurrSender] = useState("Me")

  const [sender, setSenders] = useState([
      "Me",
      "Fulano",
      "Beltrano",
      "Sicrano",
      "Astro"
  ])

  const onChangeSender = (e) => {
    setCurrSender(e.target.value)
  }

  return (
    <div>
      <GlobalStyled />
      <Header
      sender={sender}
      currSender={currSender}
      onChangeSender={onChangeSender}>
      </Header>
    </div>
  );
}

export default App;
