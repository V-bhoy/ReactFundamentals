import {useState} from "react";

function ProgressBar() {
    const [size, setSize] = useState(0);

    function increaseByTenPercent() {
        if (size < 100) {
            setSize((size) => size + 10);
        }
    }

    function decreaseByTenPercent() {
        if (size > 0) {
            setSize((size) => size - 10);
        }
    }

    return (
        <div>
            <h1>Progress Bar</h1>
            {/* Implement the ProgressBar component logic here */}
            <div style={{height: 40, backgroundColor: "#f0f0f0", borderRadius: 10, position: "relative",  width: "100%",
                maxWidth: "500px", }}>
                <div style={{
                    width: `${size}%`,
                    height: "100%",
                    borderRadius: 10,
                    backgroundColor: size > 30 ? "orange" : size > 70 ? "green" : "red",
                }}>
                    <p style={{
                        position: "absolute",
                        textAlign: "center",
                        width: "100%",
                        fontWeight: "bold",
                        margin: 0,
                        top: 10
                    }}>{size}%</p>
                </div>

            </div>
            <div style={{display: "flex", gap: 10, marginTop: 25}}>
                <button onClick={decreaseByTenPercent} disabled={size===0}>-10%</button>
                <button onClick={increaseByTenPercent} disabled={size===100}>+10%</button>
            </div>
        </div>
    );
}

export default ProgressBar;