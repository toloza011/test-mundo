import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Form,Button } from 'react-bootstrap';
import { DataContext } from '../providers/DataProvider';

export const Filtros = () => {

  

    const [regiones, setregiones] = useState([]);
    const [provincias, setprovincias] = useState([]);
    const [ciudades, setciudades] = useState([]);
    const [ciudadSelected,setCiudad] = useState(0);

    //context
    const {setdata} = useContext(DataContext)

    
    
    useEffect(() => {
       cargarRegiones();
    }, []);

  
    

    const cargarRegiones = () => {
      const data = fetch('http://apimundo.localhost/api/regiones')
       .then((res) => 
        //convertir respuesta a tipo json
        res.json()
       )
       .then((data) => {
           console.log(data);
          setregiones(data.regiones);
       })
       .catch((err) => {
         console.log(err);
       });        
    }


    const cargarProvincias = (e) => {
        const id_provincia = e.target.value;
        if(id_provincia > 0){
            const data = fetch(`http://apimundo.localhost/api/provincias/${id_provincia}`)
            .then((res) => 
             //convertir respuesta a tipo json
             res.json()
            )
            .then((data) => {
                console.log(data);
               setprovincias(data.provincias);
            })
            .catch((err) => {
              console.log(err);
            });    
        }else{
            setprovincias([]);
        }

       
    }

    const cargarCiudades = (e) => {
        const id_ciudad = e.target.value;
        
       if(id_ciudad > 0){
        const data = fetch(`http://apimundo.localhost/api/ciudades/${id_ciudad}`)
        .then((res) => 
         //convertir respuesta a tipo json
         res.json()
        )
        .then((data) => {
            console.log(data);
           setciudades(data.ciudades);
        })
        .catch((err) => {
          console.log(err);
        });    
       }else{
          setciudades([]);
       }
    }

    const cargarCalles = (e) => {
        const id_ciudad = e.target.value;
        console.log(id_ciudad);
        setCiudad(id_ciudad);
         
    }

    const buscarCalles = (e) => {
        e.preventDefault();
        const data = fetch(`http://apimundo.localhost/api/calles/${ciudadSelected}`)
        .then((res) => 
         //convertir respuesta a tipo json
         res.json()
        )
        .then((data) => {
            console.log(data);
            setdata({calles: data.calles});
        })
        .catch((err) => {
          console.log(err);
        });  
    }


    


    return (
        <div className="container__filtros">
            <div className="main_filtros">
                <div className="title_filtros text-center text-primary ">
                    <h1>Busca las calles de tu ciudad</h1>
                </div>
                <Form>
                    <Form.Group >
                        <Form.Label>Region</Form.Label>
                        <Form.Control as="select" onChange={(e) => cargarProvincias(e)}>
                        <option value="0" >Selecciona una Region</option>
                        {
                            regiones.length > 0 &&
                            regiones.map((region) => (
                                <option key={region.id} value={region.id}>{region.reg_sigla} {region.reg_nombre}</option>
                            ))
                         
                        }
                      
                        </Form.Control>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Provincia</Form.Label>
                        <Form.Control as="select"  onChange={(e) => cargarCiudades(e)}>
                            <option value="0" >Selecciona una Provincia</option>
                        {
                            provincias.length > 0 &&
                            provincias.map((provincia) => (
                                <option key={provincia.id} value={provincia.id}> {provincia.prov_nombre}</option>
                            ))
                         
                        }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control as="select" onChange={(e) => cargarCalles(e)}>
                        <option value="0" >Selecciona una Ciudad</option>
                        {
                            ciudades.length > 0 &&
                            ciudades.map((ciudad) => (
                                <option key={ciudad.id} value={ciudad.id}> {ciudad.ciu_nombre}</option>
                            ))
                         
                        }
                        </Form.Control>
                    </Form.Group>
                    <Form.Group onClick={buscarCalles}>
                       <div className="text-center col-4 offset-4">
                           <Button variant="primary" size="lg" className="btn-block"  type="submit">Filtrar</Button>
                       </div>
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}
