import { useContext, useState } from "react"
import { FormComponent } from "./components/FormComponent";

import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export const Home = () =>  {

    const navigate = useNavigate();
    return(
        <>
            <div className="d-grid gap-2 col-9 mx-auto">
                <h1>Clinica Family Care</h1>
                <button className="btn btn-primary" type="button" onClick={() =>{navigate("/appointment")}}>Agendar cita</button>
                <button className="btn btn-primary" type="button" onClick={() =>{navigate("/book")}}>Libro de citas</button>
            </div>
        </>
    )
}