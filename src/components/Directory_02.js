import React ,{useState}from 'react';
import './Directory_02.scss';
import items from './menu-item-data'
import MenuItem_02 from './MenuItem_02';

const Directory_02 = () => {
  const [menuItems, setMenuItems] = useState(items);
  console.log('menuitem', menuItems);
  return (
    <div>
      <div className="directory-menu">
          {menuItems.map((item)=>{
              const {id,name,remoteUrl,size}=item;
              return (
                  <MenuItem_02
                    id={id}
                    name={name}
                    remoteUrl={remoteUrl}
                    size = {size}
                  />
              );
          })
            
          }
      </div>
    </div>
  );
};

export default Directory_02;
