import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import {ListGroup} from 'react-bootstrap'
import { DataContext } from '../providers/DataProvider'

export const Resultados = () => {
    
    

    const data = useContext(DataContext);

    const [street, setstreets] = useState();

   

    useEffect(() => {
        setstreets(data.data.calles);
    }, [data]);
    
   

    return (
        <div className="container__results">
           {
               street ? 
               (
                <ListGroup>
                 {
                     street.map((calle) => (
                        <ListGroup.Item variant="primary" key={calle.id}>{calle.nombre}</ListGroup.Item>
                     ))
                 }   
              
              </ListGroup>
               )
               : <h1 className="text-center">No hay resultados</h1>
           }
        </div>
    )
}
