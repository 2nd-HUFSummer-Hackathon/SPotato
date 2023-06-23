import Menupage_pizza1 from "../Menupage/Menupage_pizza1";
import Menupage_pizza2 from "../Menupage/Menupage_pizza2";
import Menupage_pizza3 from "../Menupage/Menupage_pizza3";
import Menupage_chicken1 from "../Menupage/Menupage_chicken1";
import Menupage_chicken2 from "../Menupage/Menupage_chicken2";
import Menupage_chicken3 from "../Menupage/Menupage_chicken3";

function MenuSelect(props) {
  console.log(props.selectedMenuId);
  
  if(props.selectedMenuId == 0 || props.selectedMenuId == 1) {
    return ( 
      <div>
        <Menupage_pizza1 />
      </div>    
    );
  }
  else if(props.selectedMenuId == 2) {
    return ( 
      <div>
        <Menupage_pizza2 />
      </div>    
    );
  }
  else if(props.selectedMenuId == 3) {
    return ( 
      <div>
        <Menupage_pizza3 />
      </div>    
    );
  }
  
}

export default MenuSelect;
