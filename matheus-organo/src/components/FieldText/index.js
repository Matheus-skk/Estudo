import './FieldText.css'
export default function FieldText(props){

    //let valor =''
 
    const aoDigitar = (event) =>{
        props.aoAlterado(event.target.value)
       
    }
    return(
        <div className="field-text">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}/>
            
        </div>
    )
}