import Video from "../../assets/video.svg"
import Fone from "../../assets/fone.svg"
import maisOpcoes from "../../assets/tres-pontos.svg"
import { HeaderContainer, Foto } from "./Header.styled"


export default function Header(props) {

    const { sender, currSender, onChangeSender } = props

    return (
        <HeaderContainer>
            <div>
                <Foto src="https://picsum.photos/200/200" alt="Profile Foto" />
            </div>
            <div>

                <div>
                    <select value={currSender} onChange={onChangeSender} >
                        {sender.map((sender) => (
                            <option key={sender} value={sender}>
                                {sender}

                            </option>
                        ))}
                    </select>

                    <p>Online</p>
                </div>
            </div>
            <div>
                <button>
                    <img src={Video} alt="Video" />
                </button>
                <button>
                    <img src={Fone} alt="Fone" />
                </button>
                <button>
                    <img src={maisOpcoes} alt="Mais opções" />
                </button>
            </div>

        </HeaderContainer>
    );
}

