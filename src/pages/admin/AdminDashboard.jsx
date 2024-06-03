import React, { useState, useEffect } from 'react'
import { createProductApi, getAllProducts } from '../../apis/Api'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {


    //logic for get products
    const [products, setProducts] = useState([])
    // Hit API (Get All Product) Auto -> useEffect (list of products)
    useEffect(() => {
        getAllProducts().then((res) => {
            // success, message , list of products(product)
            console.log(res.data.products)
            setProducts(res.data.products)


        }).catch((error) =>{
            console.log(error)
        })
    }, [])

    //Make a state to save (Array format)
    // Table row (pn, pp, pd)



    //Make a state for product
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productDescription, setProductDescription] = useState('')

    //Image state
    const [productImage, setProductImage] = useState(null)
    const [previewImage, setPreviewImage] = useState(null)

    //function to upload and preview image
    const handleImageUpload = (event) => {

        //0-file,1-name,2-Size
        const file = event.target.files[0]
        setProductImage(file)
        setPreviewImage(URL.createObjectURL(file))
    } 

    //handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(productName,productPrice,productCategory,productDescription,productImage)

        // make a logical form data
        const formData = new FormData()
        formData.append('productName', productName)
        formData.append('productPrice', productPrice)
        formData.append('productCategory', productCategory)
        formData.append('productDescription', productDescription)
        formData.append('productImage', productImage)


        //make api call/request
        createProductApi(formData).then((res)=>{
            if(res.status === 201){
                toast.success(res.data.message)
            } else{
                toast.error("something went wrong in frontend")
            }


        }).catch((error) => {

            if(error.response){
                if(error.response.status === 400){
                    toast.error(error.response.data.message)
                }

                // space for 401 error

            } else if (error.response.status === 500){
                toast.error("Internal Server Error")

            } else {
                toast.error("No response!!")
            }
            

        })


    }






    return (
        <>
            <div className='container'>
                <div className='d-flex justify-content-between mt-2'>
                    <h2>Admin Dashboard</h2>

                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add Product
                    </button>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form action="">
                                        <label> Product Name</label>
                                        <input onChange={(e) => setProductName(e.target.value)} type='text' className='form-control' placeholder='Enter product Name'></input>

                                        <label className='mt-2'>Product Price</label>
                                        <input onChange={(e) => setProductPrice(e.target.value)} type='text' className='form-control' placeholder='Enter product Price'></input>

                                        <div className='mt-2'>
                                            <label>Select Category</label>
                                            <select 
                                             onChange= {(e)=> setProductCategory(e.target.value)}
                                             className='form-control'>
                                                <option value="plants">Plants</option>
                                                <option value="gadgets">Gadgets</option>
                                                <option value="mobile">Mobile</option>
                                                <option value="electronics">Electronics</option>



                                            </select>
                                        </div>

                                        <label className='mt-2'>Type product description</label>
                                        <textarea 
                                        onChange={(e)=>setProductDescription(e.target.value)}
                                        className='form-control'></textarea>

                                        <label className='mt-2'>Product Image</label>
                                        <input onChange={handleImageUpload} type='file' className='form-control'/>

                                        {/* preview Image */}
                                        {
                                            previewImage && (
                                                <div className=''>
                                                    <img src={previewImage} alt="preview image" className='img-fluid rounded object-fit-cover mt-3'/>
                                                </div>
                                            )
                                        }




                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button onClick={handleSubmit} type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <table className='table'>
                    <thead className='table-dart'>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name </th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>


                    </thead>
                    <tbody>
                        {
                        products.map((singleProduct) => (
                            <tr>
                            <td>
                                <img height={'40px'} width={'40px'} src={`http://localhost:8000/products/${singleProduct.productImage}`} alt='' />
                            </td>
                            <td>{singleProduct.productName}</td>
                            <td>NPR.{singleProduct.productPrice}</td>
                            <td>{singleProduct.productCategory}</td>
                            <td>{singleProduct.productDescription}</td>
                            <td>
                                <div className='btn-group' role='group'>
                                    <Link to={`/admin/update/${singleProduct._id}`} className='btn btn-success'>Edit</Link>
                                    <button className='btn btn-danger'>Delete</button>

                                </div>
                            </td>
                        </tr>
                        ))
                        }




                    </tbody>


                </table>

            </div>
        </>
    )
}

export default AdminDashboard

//products (Array) [{pp1,pn1}, {pp2,pn2}]
// Array mapping (Table)
// products (product)
//pp1()


// New Page (Update Product)
// Form (required filed) n,p,d,c, old image, new image 
// useState 7 -
// Fill the previous values
// Call the api(Single product)
// //Backend
// //Based on _id (Admin Dashboard)
//Transport '_id' to update product
//receive in update product page

