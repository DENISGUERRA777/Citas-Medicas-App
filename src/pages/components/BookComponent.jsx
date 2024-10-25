import { useState } from "react"
import { collection, doc,  getDocs } from "firebase/firestore"; 
import { db } from "../../../firebase/config";
import { Link } from "react-router-dom";
export const Book = () => {
    const [dataCitas,setDataCitas] = useState([]);
    const [especialidadState,setEspecialidadState] = useState();
    
    const getCitas = async (especialidad) => {
        const citasCollecion = await getDocs(collection(db, especialidad))
        const data = citasCollecion.docs.map((doc) => ({...doc.data(),id: doc.id }))
        setDataCitas(data); 
    }

    const setEspecialidad = async(e) => {
        
        setEspecialidadState(e.target.innerText); 
        getCitas(especialidadState);
        console.log("hola")
        console.log(dataCitas)
    };

    return(
        <div className="contenedor">
            <header >
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/" >CLinia Family Care</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <button className="nav-link  bg-light"  onClick={setEspecialidad}>Medicina general</button>
                            <button className="nav-link bg-light" onClick={setEspecialidad}>Oftalmologia</button>
                            <button className="nav-link bg-light" onClick={setEspecialidad}>Odontologia</button>
                            <button className="nav-link bg-light"   onClick={setEspecialidad}>Psicologia</button>
                        </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="d-grid gap-3">
                
                
                    {dataCitas.map((dato, index) => (
                <div key={index} className="card-continer">
                    
                    <div className="row-sm-4 " >
                        <div className="card ">
                            <div className="card-body">
                                <h5 className="card-title">{dato.name}</h5>
                                <p className="card-text">{dato.email}</p>
                                <p className="card-text">{dato.id}</p>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
                            
                        
                
                
            </main>
        </div>
    )
}