import { useState } from 'react';
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { NovoModal } from './components/Modal'
import Modal from 'react-modal';
import { ListagemTarefas } from './components/ListagemTarefas';
import { TarefaContext, TarefasProvider } from './contexts/tarefaContext';

Modal.setAppElement('#root');
function App() {

    const [visibleModal, setVisibleModal] = useState<boolean>(false);


    function abrirModal() {
        setVisibleModal(true)
    }

    function fecharModal() {
        setVisibleModal(false)
    }

    return (
        <TarefasProvider>
            <div>
                <GlobalStyle />

                <Header abrirModal={abrirModal} />

                <ListagemTarefas abrirModal={abrirModal} />

                <NovoModal
                    visibleNovoModal={visibleModal}
                    fecharModal={fecharModal}
                />

            </div>
        </TarefasProvider>
    );
}

export default App;
