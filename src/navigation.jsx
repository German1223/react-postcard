// import React from 'react'
import { useState } from "react";

import Main from "./pages/main/Main";
import Auth from "./pages/auth/Auth";

const Navigation = () => {
    const [isAuth, setIsAuth] = useState(false);

    return <>{isAuth ? <Main /> : <Auth setIsAuth={setIsAuth}/>}</>;
};

export default Navigation;
