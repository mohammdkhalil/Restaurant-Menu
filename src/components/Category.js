import React from 'react'
import { Col, Row } from 'react-bootstrap'
const Category = ({filterbyCategory,allCategory}) => {

  //to filter by category
  const onFilter=(cat)=>{
    filterbyCategory(cat)
  }
  return (
    <Row className="my-2 mb-5">
        <Col sm="12" className="d-flex justify-content-center">
           {
             allCategory.length >=1 ? (allCategory.map((cat)=>{
              return (
                <div>
                <button onClick={()=>filterbyCategory(cat)} className='btnn mx-2'>{cat}</button>
               </div>)
              })) : <h4></h4>
           }
           
        </Col>
    </Row>
  )
}

export default Category
