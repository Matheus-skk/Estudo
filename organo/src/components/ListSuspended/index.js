import './ListSuspended.css'

export default function ListSuspended(props){
    return(
        <div className='list-suspended'>
            <label>
                {props.label}</label>
            <select required={props.required}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>})}
            </select>
        </div>
    )
}