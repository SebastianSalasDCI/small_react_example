import React from 'react'

export default function ApiForm({ inputQuery, inputQueryHandle, 
  inputImageType, inputImageTypeHandle,
  inputCategory, inputCategoryHandle,
  inputOrder, inputOrderHandle,
  inputPerPage, inputPerPageHandle,
  submitHandle
}) {
  return (
    <div className="formContainer">
      <form onSubmit={submitHandle} >

        <label htmlFor="query">Search:</label>
        <input 
          type="text" 
          id="query"
          name="query"
          placeholder="e.g. yellow flowers"
          value={inputQuery}
          onChange={inputQueryHandle}
        />

        <select name="imageType" id="imageType"
                value={inputImageType}
                onChange={inputImageTypeHandle}
        >
          <option value=""> Select Type </option>
          <option value="all">all</option>
          <option value="photo">photo</option>
          <option value="illustration">illustration</option>
          <option value="vector">vector</option>

        </select>

        <select name="category" id="category"
                value={inputCategory}
                onChange={inputCategoryHandle}
        >
          <option value=""> Select Category </option>
          <option value="backgrounds">backgrounds</option>
          <option value="fashion">fashion</option>
          <option value="nature">nature</option>
          <option value="science">science</option>
          <option value="education">education</option>

        </select>

        <div className="radioGroup">
          <label htmlFor="popular">Popular</label>
          <input type="radio" name="order" id="popular" 
                onChange={inputOrderHandle}
                checked={inputOrder === "popular"}
                value="popular"
          />
          <label htmlFor="latest">Latest</label>
          <input type="radio" name="order" id="latest" 
                onChange={inputOrderHandle}
                checked={inputOrder === "latest"}
                value="latest"
          />
        </div>

        <label htmlFor="perPage">Number of images:</label>
        <input 
          type="number"
          name="perPage"
          id="perPage"
          placeholder="e.g. 10"
          value={inputPerPage}
          onChange={inputPerPageHandle}
        />

        <button type="submit" > Search </button>

      </form>
    </div>
  )
}
