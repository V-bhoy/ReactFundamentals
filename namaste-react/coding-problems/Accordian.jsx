import {useState} from "react";

const items = [{
    title: "Accordian 1",
    content: "Content 1"
}, {
    title: "Accordian 2",
    content: "Content 2"
}, {
    title: "Accordian 3",
    content: "Content 3"
}, {
    title: "Accordian 4",
    content: "Content 4"
}, {
    title: "Accordian 5",
    content: "Content 5"
}]

export default function Accordian() {
    const [activeIndex, setActiveIndex] = useState(null);

    if (!items.length) {
        return <p>No items to display!</p>
    }
    return <>
        <h1 style={{textAlign: "center"}}>Accordians</h1>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 5}}>
            {items.map((item, index) => <div key={item.title}
                                             style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                <button style={{cursor: "pointer"}} onClick={() => setActiveIndex(activeIndex === index ? null : index)}>{item.title}</button>
                {activeIndex === index && <p style={{
                    textAlign: "center",
                    backgroundColor: "lightyellow",
                    padding: "10px 20px"
                }}>{item.content}</p>}
            </div>)}
        </div>
    </>
}