import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Main.style.ts";


function Main() {
    
    const navigate = useNavigate();

    return (
        <>
            <S.Btn onClick={()=>{navigate("/googleOAuth")}}>Enter</S.Btn>
        </>
    );
}

export default Main;
