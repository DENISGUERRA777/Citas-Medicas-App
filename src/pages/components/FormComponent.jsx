import { useEffect, useState } from "react"
import {useForm} from 'react-hook-form';
import { collection, doc, setDoc, addDoc, getDocs } from "firebase/firestore"; 
import { db } from "../../../firebase/config";


export const FormComponent = () => {

    const {register,handleSubmit,reset,setValue, formState: { errors }} = useForm()
    const [submitState, setSubmitState] = useState(false);
    const [disponibles, setDisponibles] = useState([]);
    const [registerEspecialidad, setRegisterEspecialidad] = useState(false);
   
    const addCitaX = async(data) => {
        if (disponibles.some(item => item.id === data.dia + "-" + data.horario)){
                console.log("no esta disponible")
                setRegisterEspecialidad(true)
        }
        else{
            let response = await setDoc(doc(db, data.especialidad, data.dia+"-"+data.horario), 
            {
                name: data.name,
                dui: parseInt(data.dui),
                email: parseInt(data.email)
            });
            console.log(response)   
            console.log(data.email) 
            console.log(data.dia+"-"+data.horario)
            console.log(disponibles)
            alert("Su cita ha sido agendada correctamente")
        }
    }
    
    const getCitas = async (especialidad) => {
        const citasCollecion = await getDocs(collection(db, especialidad))
        const cupos = citasCollecion.docs.map((doc) => ({ id: doc.id }))
        console.log(cupos)
        return cupos;
    }

    const fetchCitas = async (especialidadSeleccionada) => {
        
        const citas = await getCitas(especialidadSeleccionada);
        setDisponibles(citas);
        console.log(disponibles)
        console.log(citas)
        
    }
    
    useEffect(() => {
        {registerEspecialidad === true && alert("Lo sentimos, cupo lleno. Tendrá que escoger otro horario.")}
    }, [registerEspecialidad]);
    
    return(
        <div className="form-container" >
            <form className="row g-3" onSubmit={handleSubmit(addCitaX)}>
                <legend>Clinica Family Care</legend>
                <div className="col-md-6">
                    <label htmlFor="inputNombre4" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="inputNombre" {...register('name', {required: true})}/>
                    {errors?.name?.type === "required" && <p>This field is required</p>}
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputDui4" className="form-label">Dui</label>
                    <input type="number" className="form-control" id="inputDui4" placeholder="sin guion"{...register('dui', {required: true})}/>
                    {errors?.dui?.type === "required" && <p>This field is required</p>}
                </div>
                <div className="col-4">
                    <label htmlFor="inputAddress" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputAddress" placeholder="persona@example.com" {...register('email', {required: true})}/>
                    {errors?.email?.type === "required" && <p>This field is required</p>}
                </div>
                
                <div className="col-md-4">
                    <label htmlFor="inputEspecialidad" className="form-label">Especialidad</label>
                    <select id="inputEspecialidad" className="form-select" {...register('especialidad') } onChange={(e) => fetchCitas(e.target.value)}>
                    <option value="Medicina general">Medicina general</option>
                    <option value="Odontologia">Odontologia</option>
                    <option value="Oftalmologia">Oftalmologia</option>
                    <option value="Psicologia">Psicologia</option>
                    </select>
                </div>
            
                <div className="col-md-2">
                    <label htmlFor="inputHora" className="form-label">Dia</label>
                    <select id="inputHora" className="form-select" {...register('dia')}>
                    <option >Lunes</option>
                    <option>Martes</option>                    
                    <option>Miercoles</option>
                    <option>jueves</option>
                    <option>Viernes</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputHora" className="form-label">Hora</label>
                    <select id="inputHora" className="form-select" {...register('horario')}>
                   
                    <option >7:00-am</option>
                    <option>9:00-am</option>
                    <option>1:00-pm</option>

                    </select>
                </div>
               
                <div className="col-6">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck" required/>
                    <label className="form-check-label" htmlFor="gridCheck">
                        Acepto los terminos y condiciones.
                    </label>
                   
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="sutmit btn btn-primary" onClick={()=>{setSubmitState(true)}} >  Sign in</button>
                    

                </div>
            </form>
        </div>
    )
}





