import { useContext } from 'react'
import { TarefaContext } from '../../contexts/tarefaContext'
import {Loading} from './styleLoading'

export function LoadingEffect(){
    const {loading} = useContext(TarefaContext);

    return(
        <>
        {loading.show &&
        <Loading/>} 
        </>
        
    )
    
}
