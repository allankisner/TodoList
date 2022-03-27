import * as C from './styles'
import { useState, KeyboardEvent } from 'react'

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
    const [inputTask, setInputTask] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if (e.code === 'Enter' && inputTask !== '') {
            onEnter(inputTask); 
            setInputTask('');  
        }
    }

    return (
        <C.Container>
            <div className='box'>➕</div>
            <input
                type='text'
                placeholder='Adicionar nova tarefa'
                value={inputTask}
                onChange={e => setInputTask(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    )
}