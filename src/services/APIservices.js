
const baseURL = "https://pixabay.com/api/"; 
// The best practice is to keep it in config file
const apiKEY  = "20211955-230a657148b3b464f8cbe0bc8";

const requestImages = (query,imageType,category,order,perPage,setImages) => {

  if(query===""){
    return {error: "Query is missing"}
  }else {

    // constructing the url for the request
    let url = `${baseURL}?key=${apiKEY}&q=${query}`;
    url += imageType!=="" ? `&image_type=${imageType}`: "";
    url += category!=="" ? `&category=${category}`: "";
    url += order!=="" ? `&order=${order}`: "";
    url += `&per_page=${perPage}`;
    
    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setImages(data.hits)
    })
    .catch(err =>{
      return {error: err}
    })

  }

}

const APIservices = {
  requestImages
}

export default APIservices



