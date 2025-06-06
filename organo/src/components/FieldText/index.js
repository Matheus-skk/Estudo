import './FieldText.css'
export default function FieldText(props){
    return(
        <div className="field-text">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={props.placeholder}/>
            
        </div>
    )
}