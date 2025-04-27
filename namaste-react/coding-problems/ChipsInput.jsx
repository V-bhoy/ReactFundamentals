import {useState} from "react";

const inputStyles = {
    width: "25rem",
    margin: "auto",
    padding: 10
}

const chipStyles = {
    display:"flex",
    alignItems: "center",
    margin: "auto",
    gap: 5,
    border: "1px solid black",
    padding: "5px 10px",
    borderRadius: 15
}

function Chip({value, setInputValues}) {
    return <div style={chipStyles}>
        <p style={{margin: 0, backgroundColor: "lightyellow", padding: "5px 10px"}}>{value}</p>
        <p onClick={()=>setInputValues((inputs)=>inputs.filter(textValue=>textValue!==value))} style={{fontWeight: "bold", color: "red", margin: 0, cursor: "pointer"}}>x</p>
    </div>
}

export default function ChipsInput() {
    const [inputValues, setInputValues] = useState([]);
    const [value, setValue] = useState("");
    return <>
        <h1 style={{textAlign: "center"}}>My Chip Input</h1>
        <div style={{display: "flex"}}>
            <input
                value={value}
                onChange={(event) => setValue(event.currentTarget.value.trim())}
                onKeyDown={(event) => {
                    const key = event.key;
                    if (value.trim() !== "" && key === "Enter") {
                        setInputValues((inputs) => [...inputs, value]);
                        setValue("");
                    }
                }}
                style={inputStyles}
                type={"text"}
                placeholder={"Enter Text"}/>
        </div>
        <div style={{display: "flex", flexDirection: "column", marginTop: 20, gap: 10}}>
            {inputValues.map((inputText) =>
                <Chip key={inputText} value={inputText} setInputValues={setInputValues}/>)
            }
        </div>
    </>
}