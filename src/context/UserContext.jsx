import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const Myprovider = ({children}) => {

    const [user,setUser] = useState(null);
    const [typeForm, setTypeForm] = useState("login"); 
    const [playState, setPlayState] = useState(false);

    const [buttonState, setButtonState] = useState(null);
    return(
        <UserContext.Provider value = { {
            user, setUser,
            typeForm, setTypeForm,
            playState, setPlayState,
            buttonState, setButtonState
            } }
        >
            {children}
        </UserContext.Provider>
    )
}