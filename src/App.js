import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import {Container} from 'react-bootstrap';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Category from './components/Category';
import ItemList from './components/ItemList';
import { items } from './data';
function App() {
  const [itemsData,setItemsData] = useState(items)

  //get all category uniqe
  const allCategory = ['الكل',...new Set(items.map((i)=>i.category))]
  //filter by Category
  const filterbyCategory=(cat)=>{
    if(cat==="الكل"){
      setItemsData(items)
    }else{
      const newArr=items.filter((item)=>item.category===cat)
      setItemsData(newArr)
    }
  }

  //filter by search
  const filterbySearch=(word)=>{
    if(word !=""){
      const newArr=items.filter((item)=>item.title===word)
      setItemsData(newArr)
    }
  }

  return (
    <div className="color-body font">
      <NavBar filterbySearch={filterbySearch}/>
      <Container>
        <Header/>
        <Category filterbyCategory={filterbyCategory} allCategory={allCategory}/>
        <ItemList itemsData={itemsData}/>
      </Container>
    </div>
  );
}

export default App;
