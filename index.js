import { Select } from './select/select'
import './select/styles.scss'

const select = new Select('#select', {
    placeholder: 'Chose',
    //selectedId: '4',
    data: [
        { id: '1', value: 'Python' },
        { id: '2', value: 'HTML' },
        { id: '3', value: 'CSS' },
        { id: '4', value: 'JavaScript' },
        { id: '5', value: 'PHP' },
        { id: '6', value: 'C#' }
    ],
    onSelect(item) {
        console.log('Selected item', item)
    }
})

window.s = select