import {useState} from 'react'
const App = () => {
    const [value, setValue] = useState({normal: '', texto: '', select: '',check:false})
    const handleChange = ({ target }) => {
        // console.log(e.target.value, e.target.checked)
        setValue((state) => ({
            ...state,
            [target.name]: target.type === 'checkbox' ?
             target.checked 
             : target.value
        }))
    }
    console.log(value)
    return (
        <div>
            {value.length < 5 ? <span>Longitud minima de 5</span> : null}
            <input type="text" name="normal" value={value.normal} onChange={handleChange}/>
            <textarea name='texto' onChange={handleChange} value={value.texto} />
            <select value={value.select} name='select' onChange={handleChange}>
                <option value=''>---seleccione </option>
                <option value='chanchofeliz'> Chanch feliz </option>
                <option value='chanchitofeliz'> Chanchito feliz </option>
                <option value='chanchitotriste'> Chancho triste </option>
                <option value='felipe'> Felipe </option>
            </select>
            <input
                type='checkbox'
                name='check'
                onChange={handleChange}
                checked={value.checked}
            />
        </div>
    )
}

export default App