import React ,{useState,useEffect}from 'react';
import './Directory_02.scss';
import axios from "axios"
// import items from './menu-item-data'
import MenuItem_02 from './MenuItem_02';

const Directory2_02 = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(()=>{
    const fetchMenuItems= async()=>{
      const HEROKU_URL="https://heroku-crown02.herokuapp.com/api_02/category_02"
      const {data} = await axios.get(HEROKU_URL)
      console.log("/api/category_02",data)
      setMenuItems(data)
    }
    fetchMenuItems()
  },[])

  console.log('menuitem', menuItems);
  return (
    <div>
      <div className="directory-menu">
          {menuItems.map((item)=>{
              const {id,name,remote_url,size}=item;
              return (
                  <MenuItem_02
                    id={id}
                    name={name}
                    remote_url={remote_url}
                    size = {size}
                  />
              );
          })
            
          }
      </div>
    </div>
  );
};

export default Directory2_02;
