import { useState } from "react";

import "./Main.css";

const Main = () => {
    const [position, setPosition] = useState({ top: `86%`, left: `50%` });
    const [size, setSize] = useState({ width: 100, height: 50, fontSize: 20 });
    const [imagePath, setImagePath] = useState("/img/first.gif");
    const [isAgree, setIsAgree] = useState(false);

    const hoverAction = () => {
        setImagePath("/img/second.gif");
        const newTop = Math.floor(Math.random() * (window.innerHeight - 100));
        const newLeft = Math.floor(Math.random() * (window.innerWidth - 100));
        setSize({
            width: size.width + 20,
            height: size.height + 20,
            fontSize: size.fontSize + 4,
        });
        setPosition({ top: `${newTop}px`, left: `${newLeft}px` });
    };

    return (
        <div className="main_page">
            <div className="img_container">
                <img className="main_img" src={imagePath} />

                {!isAgree ? (
                    <div className="title">Ты будешь моей Валентинкой?)</div>
                ) : (
                    <div className="title true">
                        <div style={{ textAlign: "center" }}>
                            АОАООАОААОАОАО УРА!!!!!))))))
                        </div>
                        <div>Я люблю тебя &#10084;</div>{" "}
                    </div>
                )}
            </div>
            {!isAgree && (
                <>
                    <div className="true_butt_cont">
                        <button
                            className="dynamic_button true"
                            style={{
                                width: `${size.width}px`,
                                height: `${size.height}px`,
                                fontSize: `${size.fontSize}px`,
                            }}
                            onClick={() => {
                                setImagePath("/img/third.gif");
                                setIsAgree(true);
                            }}
                        >
                            ДА
                        </button>
                    </div>
                    <div
                        className="container_dynamic_button"
                        style={{
                            top: position.top,
                            left: position.left,
                        }}
                    >
                        <button
                            className="dynamic_button false"
                            onClick={() => {
                                hoverAction();
                            }}
                            onMouseEnter={hoverAction}
                        >
                            нет
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Main;
