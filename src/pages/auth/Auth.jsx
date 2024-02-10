import { useRef } from "react";

import "./Auth.css";

const word = import.meta.env.VITE_SECRET_WORD;

const Auth = ({ setIsAuth }) => {
    const inputRef = useRef(null);

    const handlerInput = () => {
        if (inputRef !== null)
            inputRef.current.value = inputRef.current.value.replace(/\s/g, "");
    };
    const redirectAction = () => {
        if (inputRef !== null) {
            if (!inputRef.current.value.length) return;
            if (inputRef.current.value.toLowerCase() === word.toLowerCase()) {
                setIsAuth(true);
            } else {
                alert("Неправильно, попробуй еще)");
            }
        }
    };

    return (
        <div className="auth_cont">
            <div className="title q_cont">
                Для продолжения введи смешное слово, которое превратилось в твое
                милое (как по мне) прозвище, которое не совсем тебе нравится)
            </div>
            <input
                onKeyDown={(ev) => {
                    if (ev.key == "Enter") {
                        if (inputRef !== null && inputRef.current !== null) {
                            redirectAction();
                        }
                    }
                }}
                ref={inputRef}
                type="text"
                className="auth_input"
                onChange={handlerInput}
            />
            <button onClick={redirectAction}>Продолжить</button>
        </div>
    );
};

export default Auth;
