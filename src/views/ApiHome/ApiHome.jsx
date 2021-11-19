import React, { useState,useEffect } from 'react'
import APIservices from '../../services/APIservices';
import ApiForm from './components/ApiForm'

export default function ApiHome() {

  const [query,setQuery] = useState("");
  const [imageType, setImageType] = useState("");
  const [category, setCategory] = useState("");
  const [order, setOrder] = useState("");
  const [perPage, setPerPage] = useState(5); 
  const [loading, setLoading] = useState(false);
  const [images, setImages]  = useState([])
 
  const handleQueryOnChange = (e) => {
    //"here is some logic to change the query"
    setQuery(e.target.value)
  }

  const handleImageType = (e) => {
    setImageType(e.target.value)
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
  }

  const handleOrder = (e) => {
    setOrder(e.target.value)
  }

  const handlePerPage = (e) => {
    setPerPage(e.target.value)
  }

  const submitHandle = (e) => {
    //here is the code to make the request
    e.preventDefault()
    setLoading(true)
  }

  useEffect(() => {
    if(loading){
      APIservices.requestImages(query,imageType,category,order,perPage,setImages);
      setLoading(false)
    }
  }, [loading])


  return (
    <div className="apihomeContainer">
      <h1>ApiHome</h1>
      <ApiForm inputQuery={query} inputQueryHandle={handleQueryOnChange}
        inputImageType={imageType} inputImageTypeHandle={handleImageType}
        inputCategory={category} inputCategoryHandle={handleCategory}
        inputOrder={order} inputOrderHandle={handleOrder}
        inputPerPage={perPage} inputPerPageHandle={handlePerPage}
        submitHandle={submitHandle}
      />
    </div>
  )
}
