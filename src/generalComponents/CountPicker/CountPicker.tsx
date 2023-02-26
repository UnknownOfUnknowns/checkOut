import "./CountPickerStyle.css"
interface CountPickerProps {
    count : number
    onChange: (newCount: number) => void
}
function CountPicker({count, onChange}:CountPickerProps) {

    return(
        <div className={"counter"}>
            <p className={"clickable"} onClick={() => onChange(count-1)}>-</p>
            <p>{count}</p>
            <p className={"clickable"} onClick={() => onChange(count+1)}>+</p>
        </div>
    )
}

export default CountPicker
