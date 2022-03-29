import { FormEvent, useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import { FaWindowClose } from 'react-icons/fa';
import { FormContainer } from './styles';
import { TarefaContext } from '../../contexts/tarefaContext';

interface NovoModalProps {
    visibleNovoModal: boolean;
    fecharModal: () => void;
}

export function NovoModal(props: NovoModalProps) {

    const {
        criarTarefas,
        editarTarefa,
        valoresPadraoEditarTarefa,
        atualizarTarefa,
        deleteTarefas
    } = useContext(TarefaContext);

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        if (editarTarefa.editar) {
            setTitulo(editarTarefa.tarefa?.titulo ?
                editarTarefa.tarefa.titulo : '');

            setDescricao(editarTarefa.tarefa?.descricao ?
                editarTarefa.tarefa.descricao : '')
        }
    }, [editarTarefa.editar])

    function limparCamposAoFecharModal() {
        setTitulo('')
        setDescricao('')
        valoresPadraoEditarTarefa();
        props.fecharModal();
    }


    //####### BUTTON DELETE FUNCTION #####################   
    function buttonExcluir() {
        if (editarTarefa.editar) {

            let obj: any = {
                ...editarTarefa.tarefa,
                titulo,
                descricao
            }
            console.log("caiu submit excluir");
            deleteTarefas(obj);
            limparCamposAoFecharModal();


        }
    }


    function onSubmitModal(event: FormEvent) {
        //não deixa com que o formulario de reload na pagina
        event.preventDefault();



        if (editarTarefa.editar) {

            let obj: any = {
                ...editarTarefa.tarefa,
                titulo,
                descricao
            }
            console.log("editar");


            // atualizarTarefa({
            //     id: editarTarefa.tarefa?.id ? editarTarefa.tarefa.id : '',
            //     titulo: titulo,
            //     descricao: descricao 
            // })
            atualizarTarefa(obj)
        } else {
            criarTarefas({
                titulo,
                descricao
            })
        }



        limparCamposAoFecharModal();
    }

    <button className='delete'
        type="button"
        onClick={() => {
            buttonExcluir();
        }}
    >
        Excluir
    </button>



        ;

    return (
        <Modal
            isOpen={props.visibleNovoModal}
            onRequestClose={() => limparCamposAoFecharModal()}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type='button'
                onClick={() => limparCamposAoFecharModal()}
                className="react-modal-close"
            >
                <FaWindowClose />
            </button>

            <FormContainer onSubmit={onSubmitModal} >
                <h2>Cadastrar Tarefa</h2>

                <input
                    placeholder='Titulo'
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}
                />

                <textarea
                    placeholder='Descrição'
                    value={descricao}
                    onChange={(event) => setDescricao(event.target.value)}
                />

                <button
                    type='submit'
                >
                    {editarTarefa.editar ? 'Editar' : 'Cadastrar'}
                </button>
                {editarTarefa.editar ?
                    <button className='delete'
                        type="button"
                        onClick={() => {
                            buttonExcluir();
                        }}
                    >
                        excluir
                    </button>

                    : null
                }




            </FormContainer>

        </Modal>
    )
}
