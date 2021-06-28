import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { DataContext } from "../providers/DataProvider";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Filtros = () => {
  const SwalAlert = withReactContent(Swal);

  const [regiones, setregiones] = useState([]);
  const [provincias, setprovincias] = useState([]);
  const [ciudades, setciudades] = useState([]);
  const [ciudadSelected, setCiudad] = useState(0);
  const [regionselected, setRegion] = useState(0);
  const [provinciaSelected, setProvincia] = useState(0);
  const [isloading, setIsLoading] = useState(false);

  //context
  const { setdata } = useContext(DataContext);

  useEffect(() => {
    cargarRegiones();
  }, []);

  const cargarRegiones = () => {
    const data = fetch("http://apimundo.localhost/api/regiones")
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
  };

  const cargarProvincias = (e) => {
    //resetear selects
    setprovincias([]);
    setciudades([]);
    setCiudad(0);
    const id_region = e.target.value;
    setRegion(id_region);
    if (id_region > 0) {
      const data = fetch(
        `http://apimundo.localhost/api/provincias/${id_region}`
      )
        .then((res) =>
          //convertir respuesta a tipo json
          res.json()
        )
        .then((data) => {
          if (data.status == 200) {
            console.log(data.provincias);
            setprovincias(data.provincias);
          } else if (data.status == 404) {
            console.log(data);
          } else {
            console.log(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setprovincias([]);
    }
  };

  const cargarCiudades = (e) => {
    const id_provincia = e.target.value;

    setProvincia(id_provincia);
    setciudades([]);
    setCiudad(0);
    setdata([]);

    if (id_provincia > 0) {
      const data = fetch(
        `http://apimundo.localhost/api/ciudades/${id_provincia}`
      )
        .then((res) =>
          //convertir respuesta a tipo json
          res.json()
        )
        .then((data) => {
          if (data.status == 200) {
            console.log(data.ciudades);
            setciudades(data.ciudades);
          } else if (data.status == 404) {
            console.log(data);
          } else {
            console.log(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setciudades([]);
    }
  };

  const buscarCalles = (e) => {
    e.preventDefault();

    if (provinciaSelected != 0 && ciudadSelected != 0 && regionselected != 0) {
      const data = fetch(
        `http://apimundo.localhost/api/calles/${ciudadSelected}`
      )
        .then((res) =>
          //convertir respuesta a tipo json
          res.json()
        )

        .then((data) => {
          console.log(data);
          if (data.calles && data.calles.length > 0) {
            console.log(data);
            setdata({ calles: data.calles });
          } else if (data.status == 404) {
            SwalAlert.fire({
              icon: "error",
              title: "Oops...",
              text: data.message,
            });
            setdata([]);
          } else {
            SwalAlert.fire({
              icon: "error",
              title: "Oops...",
              text: data.message,
            });
          }
        })
        .catch((err) => {
          SwalAlert.fire({
            icon: "error",
            title: "Oops...",
            text: err.message,
          });
        });
    } else {
      SwalAlert.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son requeridos",
      });
    }
  };

  return (
    <div className="container__filtros">
      <div className="main_filtros">
        <div className="title_filtros text-center text-primary ">
          <h1>Busca las calles de tu ciudad</h1>
        </div>
        <Form>
          <Form.Group>
            <Form.Label>Region: </Form.Label>
            <Form.Control as="select" onChange={(e) => cargarProvincias(e)}>
              <option value="0">Selecciona una Region</option>
              {regiones.length > 0 &&
                regiones.map((region) => (
                  <option key={region.id} value={region.id}>
                    {region.reg_sigla} {region.reg_nombre}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Provincia: </Form.Label>
            <Form.Control as="select" onChange={(e) => cargarCiudades(e)}>
              <option value="0">Selecciona una Provincia</option>
              {provincias.length > 0 &&
                provincias.map((provincia) => (
                  <option key={provincia.id} value={provincia.id}>
                    {" "}
                    {provincia.prov_nombre}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Ciudad: </Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setCiudad(e.target.value)}
            >
              <option value="0">Selecciona una Ciudad</option>
              {ciudades.length > 0 &&
                ciudades.map((ciudad) => (
                  <option key={ciudad.id} value={ciudad.id}>
                    {" "}
                    {ciudad.ciu_nombre}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <div className="text-center col-4 offset-4">
              {isloading ? (
                <Button
                  onClick={buscarCalles}
                  variant="primary"
                  size="lg"
                  className="btn-block"
                  type="submit"
                  disabled
                >
                  Cargando...
                </Button>
              ) : (
                <Button
                  onClick={buscarCalles}
                  variant="primary"
                  size="lg"
                  className="btn-block"
                  type="submit"
                >
                  Filtrar
                </Button>
              )}
            </div>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
