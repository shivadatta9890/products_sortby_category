import React from 'react';
import './style.css'

const MenuCard = ({menuData}) => {
  return (
      <>
    <section className="main_card">
    {
        menuData.map((item)=>{
            const {id,category,thumbnail,title} = item;
            return (
                
                <div className='products' key={id}>
                        <span>{category}</span>
                <div className='products__single'>
                    <img src={thumbnail} alt={title}/>
                    
                        <span>{title}</span>
                    
                </div>
            </div>
               
            )
        })
    }
    </section>
    </>
  )
}

export default MenuCard;