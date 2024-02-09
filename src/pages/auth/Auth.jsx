import { useRef } from "react";

import "./Auth.css";

const word = import.meta.env.VITE_SECRET_WORD;

const Auth = ({ setIsAuth }) => {
    const inputRef = useRef(null);

    const redirectAction = () => {
        if (inputRef !== null) {
            if (!inputRef.current.value.length) return;
            if (inputRef.current.value === word) {
                setIsAuth(true);
            } else {
                alert("Неправильно, попробуй еще)");
            }
        }
    };

    return (
        <div className="auth_cont">
            <div className="title">Text</div>
            <input ref={inputRef} type="text" className="auth_input" />
            <button onClick={redirectAction}>Login</button>
        </div>
    );
};

export default Auth;
