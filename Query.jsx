import { useState } from "react"
import axios from "axios";
import Detalle from "../Detalle.Componentes";

export default function Query(props){
    let [resources, setResources] = useState('films');
    let [id, setId] = useState('');
    let [aparato, setAparato] = useState(null);
    /* const navigate = useNavigate(); */

    let submitData = () => {
        var reg = /^\d+$/;
        if (id && reg.test(id)){
            axios.get('https://swapi.dev/api/${resources}/${id}')
                .then((response) =>{
                    setAparato(response.data);
                }) 
                .catch((error) => {
                    setAparato(null);
                })
        }
    }

    let {name, title, ...rest} = aparato || {};
    return (
        <div className="Todo"> 
            <form onSubmit={(event) => {
                event.preventDefault();
                submitData();
            }}>
                <label>Search for:</label> 
                <select name='resources' onChange={(event) =>{
                    setResources(event.target.value);
                }} value= {resources} > 
                    <option value='films'>Films</option>
                    <option value='people'>People</option>
                    <option value='planets'>Planets</option>
                    <option value='species'>Species</option>
                    <option value='starships'>Sterships</option>
                    <option value='vehicles'>Vehicles</option>
                </select>
                <label>Id:</label>
                <input type='text'name='id' value= {id} onChange={(event)=>{
                    setId(event.target.value)
                }}/>
                <input type='submit'value='search'/>
            </form>
            <div>
                { aparato &&
                <Detalle 
                    ppalAttr={aparato["title"] ? aparato["title"] : aparato["name"]}
                    attributes={rest}
                /> }
            </div>
        </div>
    )
}