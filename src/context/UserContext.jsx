import { createContext, useState } from "react";
import PropTypes from "prop-types";

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

Myprovider.propTypes = {
    children: PropTypes.node.isRequired,
};