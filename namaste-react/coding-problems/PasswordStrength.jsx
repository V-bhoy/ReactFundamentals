import React, { useState } from 'react';

// ✅ Export this so it can be tested
export const checkPasswordStrength = (pass) => {
    let count = 0;
    let hasUppercase = false;
    let hasLowercase = false;

    const digitRegex = /[0-9]/;
    const specialCharRegex = /[@#$%^&*!-_]/;

    if(pass.length>=8){
        count++;
    }
    for(let i=0; i< pass.length; i++){
        if(!hasLowercase && pass[i] >= 'a' && pass[i]<='z'){
            hasLowercase = true;
            count++;
        }
        if(!hasUppercase && pass[i] >= 'A' && pass[i]<='Z'){
            hasUppercase = true;
            count++;
        }
        if(hasLowercase && hasUppercase){
            break;
        }
    }
    if(digitRegex.test(pass)){
        count++;
    }
    if(specialCharRegex.test(pass)){
        count++;
    }
    if(count===0){
        return "Weak Password";
    }
    else if(count===1 || count===2){
        return "Level 1";
    }
    else if(count===3 || count===4){
        return "Level 2";
    }
    else{
        return "Level 3";
    }
};

const PasswordStrength = () => {
    const [pass, setPass] = useState("");
    const [result, setResult] = useState("");

    function handleCheck(){
        const res = checkPasswordStrength(pass.trim());
        setResult(res);

    }

    return (
        <div>
            <h2>Password Strength Checker</h2>
            <input type="password"
                   value={pass}
                   onChange={(e)=>setPass(e.target.value)}
            />
            <button onClick={handleCheck}>Check Strength</button>
            <div>
                Strength: {result}
            </div>
        </div>
    );
};

export default PasswordStrength;