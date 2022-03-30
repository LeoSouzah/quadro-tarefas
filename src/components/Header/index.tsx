import axios from "axios";
import { useContext, useEffect } from "react";
import { TarefaContext } from "../../contexts/tarefaContext";
import { Container, Content } from "./styles"

interface HeaderProps {
    abrirModal: () => void;
}

export const Header = (props: HeaderProps) => {

    const tarefaCtx = useContext(TarefaContext);

    return (
        <Container>
            <Content>
                <h1>Quadro de Tarefas </h1>
                <div>
                    <button
                        onClick={() => props.abrirModal()}
                    >
                        Nova tarefa
                    </button>
                    <h3>Total: {tarefaCtx.tarefas.length}</h3>
                </div>

                
            </Content>
        </Container>
    )
}
