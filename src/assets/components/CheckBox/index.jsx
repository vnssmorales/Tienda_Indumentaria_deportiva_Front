import React, { useRef } from 'react';
import './Checkbox_Group.css';

function Checkbox_Group(props) {
    let inputRef = useRef()
    let inputZapatillas = useRef()
    let inputShorts = useRef()
    let inputCalzas = useRef()
    let inputPoleras = useRef()
    let inputChaquetas = useRef();
    let inputMochilas = useRef();
    let inputOtros = useRef();

    return (
        <div className="container mt-4 mb-4">
            <div className="d-flex align-items-center">
                <div className="checkbox-container d-flex align-items-center mr-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input type="checkbox" value="zapatillas" ref={inputZapatillas} onChange={() => props.filterProducts()} />
                        </div>
                    </div>
                    <p className="mb-0 px-1 pt-1">Zapatillas</p>
                </div>
                <div className="checkbox-container d-flex align-items-center mr-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input type="checkbox" value="shorts" ref={inputShorts} onChange={() => props.filterProducts()} />
                        </div>
                    </div>
                    <p className="mb-0 px-1 pt-1">Shorts</p>
                </div>
                <div className="checkbox-container d-flex align-items-center mr-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input type="checkbox" value="calzas" ref={inputCalzas} onChange={() => props.filterProducts()} />
                        </div>
                    </div>
                    <p className="mb-0 px-1 pt-1">Calzas</p>
                </div>
                <div className="checkbox-container d-flex align-items-center mr-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input type="checkbox" value="poleras" ref={inputPoleras} onChange={() => props.filterProducts()} />
                        </div>
                    </div>
                    <p className="mb-0 px-1 pt-1">Poleras</p>
                </div>
                <div className="checkbox-container d-flex align-items-center mr-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input type="checkbox" value="chaquetas" ref={inputChaquetas} onChange={() => props.filterProducts()} />
                        </div>
                    </div>
                    <p className="mb-0 px-1 pt-1">Chaquetas</p>
                </div>
                <div className="checkbox-container d-flex align-items-center mr-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input type="checkbox" value="mochilas" ref={inputMochilas} onChange={() => props.filterProducts()} />
                        </div>
                    </div>
                    <p className="mb-0 px-1 pt-1">Mochilas</p>
                </div>
                <div className="checkbox-container d-flex align-items-center mr-2">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input type="checkbox" value="otros" ref={inputOtros} onChange={() => props.filterProducts()} />
                        </div>
                    </div>
                    <p className="mb-0 px-1 pt-1">Otros</p>
                </div>
                <div className="input-group">
                    <input type="text" className="form-control small-input" id="textsearch" ref={inputRef} />
                    <div className="input-group-append">
                        <button onClick={() => props.filterProducts()} className="btn btn-outline-secondary" type="button">Buscar</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Checkbox_Group;
