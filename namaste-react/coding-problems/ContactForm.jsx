import {useState} from "react";

const formStyles = {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    border: "1px solid gray",
    padding: "30px 20px",
    borderRadius: 10
};

const divStyles = {
    display: "flex",
    flexDirection: "column",
    gap: 5
};

const buttonStyles = {
    padding: 5,
    backgroundColor: "skyblue",
    cursor: "pointer",
    color: "white",
    border: "none",
    borderRadius: 5
};

const errorStyles = {
    color: "red",
    padding: "5px 10px",
    margin: 0,
    backgroundColor: "pink",
    borderRadius: 5
}

// One of the most common use cases of preventDefault() is in forms.
// When a form is submitted, the default behavior is that the page reloads
// or navigates to a new URL (based on the form’s action attribute).
// If you don’t want that to happen (for example, to send the form data via JavaScript asynchronously),
// you use preventDefault().
// pressing the Enter key won’t trigger form submission or any other default action associated with it.
// use it when You want to stop the browser’s default action for a particular event.

export default function ContactForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState({ name: "", email: "", message: "" });
    const [success, setSuccess] = useState(false);

    function validateEmail(email){
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    function handleSubmit(e){
        e.preventDefault();
        let formIsValid = true;
        const newErrorObject = { name: "", email: "", message: "" };
        const formName = name.trim();
        const formEmail = email.trim();
        const formMessage = message.trim();

        if(!formName){
            newErrorObject.name = "Name is required!";
            formIsValid = false;
        }
        if(!formEmail){
            newErrorObject.email = "Email is required";
            formIsValid = false;
        }
        if(formEmail && !validateEmail(formEmail)){
            newErrorObject.email = "Invalid email format"
            formIsValid = false;
        }
        if(!formMessage){
            newErrorObject.message = "Message is required"
            formIsValid = false;
        }
        setError(newErrorObject);
        if(formIsValid){
            setSuccess(true);
            setName("");
            setEmail("");
            setMessage("");
        }
    }

    if(success){
        return <>
            <div style={{padding: 10, backgroundColor: "lightyellow"}}>
                <h1 style={{textAlign: "center"}}>Thank You!</h1>
            </div>
            <button style={{marginTop: 10}} onClick={()=> setSuccess(false)}>Back</button>
        </>
    }

    return <div>
        <form style={formStyles} onSubmit={handleSubmit}>
            <div style={divStyles}>
                <label>Name: </label>
                <input value={name} onChange={(e)=>setName(e.currentTarget.value)}/>
                {error.name && <p style={errorStyles}>{error.name}</p>}
            </div>
            <div style={divStyles}>
                <label>Email: </label>
                <input value={email} onChange={(e)=>setEmail(e.currentTarget.value)}/>
                {error.email && <p style={errorStyles}>{error.email}</p>}
            </div>
            <div style={divStyles}>
                <label>Message: </label>
                <textarea value={message} onChange={(e)=>setMessage(e.currentTarget.value)}></textarea>
                {error.message && <p style={errorStyles}>{error.message}</p>}
            </div>
            <button style={buttonStyles}>Submit</button>
        </form>
    </div>
}