import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ListGroup, Table } from "react-bootstrap";
import { DataContext } from "../providers/DataProvider";

export const Resultados = () => {
  const { data } = useContext(DataContext);

  const [street, setstreets] = useState([]);

  useEffect(() => {
    setstreets(data.calles);
  }, [data]);

  return (
    <div className="container__results">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Calle</th>
          </tr>
        </thead>
        <tbody>
          {street && street.length > 0 ? (
            street.map((calle) => (
              <tr key={calle.id}>
                <td >{calle.id}</td>
                <td>{calle.nombre}</td>
              </tr>
            ))
          ) : (
            /*  <ListGroup>
              {street.map((calle) => (
                <ListGroup.Item variant="primary" key={calle.id}>
                  {calle.nombre}
                </ListGroup.Item>
              ))}
            </ListGroup> */

            <tr>
            <td colSpan="2" className="text-center">No hay resultados</td>   
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};
