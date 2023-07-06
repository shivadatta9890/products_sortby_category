import React ,{useState} from 'react';
import Menu from './MenuApi';
import MenuCard from './MenuCard';
import './style.css';
import Navbar from './Navbar';

const uniqueList = [
    ...new Set(Menu.map((currItem)=>{
    return currItem.category;
  })
  ),
  "All",
];

// console.log(uniqueList);

const Restaurant = () => {
  const [menuData,setMenuData] = useState(Menu);
  const [menuList,setMenuList] = useState(uniqueList);

  const filterItem = (category)=>{

    if(category === "All"){
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((currItem)=>{
   return currItem.category === category;
    })
    setMenuData(updatedList);
  }

  return (
    <>
    <Navbar filterItem={filterItem} menuList={menuList}/>
    <MenuCard menuData = {menuData}/>
    
    </>
  )
}

export default Restaurant;