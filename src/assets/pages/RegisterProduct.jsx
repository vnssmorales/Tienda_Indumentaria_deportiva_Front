import { useRef } from "react";
import axios from "axios";

let URL = `http://localhost:3100/api/productos`
function RegisterProduct() {
    let title = useRef();
    let price = useRef();
    let description = useRef();
    let category = useRef();
    let image = useRef();

    const register = () => {
        console.log("Register")
        /* axios.defaults.withCredentials = true; */
        axios.post(URL, {
            title : title.current.value, 
            price : price.current.value, 
            description : description.current.value, 
            category : category.current.value, 
            image : image.current.value
        })
            .then(response => {
                //window.location.href = "/"
                alert("Producto creado")
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <section className="mt-5 pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="title">Name of the product</label>
                                    <input ref={title} type="text" className="form-control" id="title" placeholder="Name of the product" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="price">Price</label>
                                    <input ref={price} type="text" className="form-control" id="price" placeholder="Price" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="description">Description</label>
                                    <input ref={description} type="text" className="form-control" id="description" placeholder="Description" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="category">Category</label>
                                    <input ref={category} type="text" className="form-control" id="category" placeholder="Category" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="image">Image</label>
                                    <input ref={image} type="text" className="form-control" id="image" placeholder="Image of the product" />
                                </div>
                            </div>
                            <button onClick={() => register()} className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default RegisterProduct