import { useRef } from "react";

function Checkbox_Group(props) {
    
    let inputRef = useRef()
    let inputMenClothing = useRef()
    let inputJewelery = useRef()
    let inputElectronics = useRef()
    let inputWomenClothing = useRef()
   
    return (
        <>
            <div className="container">
                <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" value="men's clothing" ref={inputMenClothing} onChange={() => props.filterProducts()} />
                            </div>
                        </div>
                        <p className="mb-0 px-1 pt-1 pt-1">MenClothing</p>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" value="jewelery" ref={inputJewelery} onChange={() => props.filterProducts()} />
                            </div>
                        </div>
                        <p className="mb-0 px-1 pt-1 pt-1">Jewelery</p>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" value="electronics" ref={inputElectronics} onChange={() => props.filterProducts()} />
                            </div>
                        </div>
                        <p className="mb-0 px-1 pt-1 pt-1">Electronics</p>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input type="checkbox" value="women's clothing" ref={inputWomenClothing} onChange={() => props.filterProducts()} />
                            </div>
                        </div>
                        <p className="mb-0 px-1 pt-1 pt-1">WomenClothing</p>
                    </div>
                    <div className="input-group">
                        <input type="text" className="form-control" id="textsearch" ref={inputRef} />
                        <div className="input-group-append">
                            <button onClick={() => props.filterProducts()} className="btn btn-outline-secondary" type="button">Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkbox_Group;