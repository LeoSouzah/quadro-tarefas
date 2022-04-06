import { useContext, useState } from "react";
import { Container } from "./styles";
import { TarefaContext } from "../../contexts/tarefaContext";
import { FaPen } from 'react-icons/fa'

interface interfaceTarefas {
    descricao: string;
    id: string;
    titulo: string;
}

interface PropsListarTarefas {
    abrirModal: () => void;
}
export function ListagemTarefas({ abrirModal }: PropsListarTarefas) {

    const tarefaCtx = useContext(TarefaContext);

    // const [tarefas, setTarefas] = useState<Array<interfaceTarefas>>([]);


    return (
        <>
            <Container>
                <ul>
                    
                    <h3>Quadro 1</h3>

                    {
                    
                  tarefaCtx.tarefas.filter(tarefas => tarefas.position === "1").map((element, index) => (
                            <li key={element.id} >
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <h4>{element.titulo}</h4>
                                    <p>{element.descricao}</p>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            tarefaCtx.funEditarTarefa({
                                                editar: true,
                                                tarefa: element
                                            })
                                            abrirModal();
                                        }}
                                    >
                                        <FaPen />
                                    </button>
                                </div>
                            </li>
                        ))
                    }
</ul>
<ul>
                    <h3>Quadro 2</h3>
                    {
                        tarefaCtx.tarefas.filter(tarefas => tarefas.position === "2").map((element, index) => (
                            <li key={element.id} >
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <h4>{element.titulo}</h4>
                                    <p>{element.descricao}</p>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            tarefaCtx.funEditarTarefa({
                                                editar: true,
                                                tarefa: element
                                            })
                                            abrirModal();
                                        }}
                                    >
                                        <FaPen />
                                    </button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                    <ul>
                    <h3>Quadro 3</h3>
                    {
                        tarefaCtx.tarefas.filter(tarefas => tarefas.position === "3").map((element, index) => (
                            <li key={element.id} >
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <h4>{element.titulo}</h4>
                                    <p>{element.descricao}</p>
                                </div>
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            tarefaCtx.funEditarTarefa({
                                                editar: true,
                                                tarefa: element
                                            })
                                            abrirModal();
                                        }}
                                    >
                                        <FaPen />
                                    </button>
                                </div>
                            </li>
                        ))
                    }

                </ul>
                {/* 
                <TarefaContext.Consumer>
                        {
                            (data) => {
                                console.log('data ctx');
                                console.log(data);

                                return <div>ok</div>
                            }
                        }
                    </TarefaContext.Consumer>
                     */}
            </Container>
        </>
    )
}
