import Menupage_pizza1 from "../Menupage/Menupage_pizza1";
import Menupage_pizza2 from "../Menupage/Menupage_pizza2";
import Menupage_pizza3 from "../Menupage/Menupage_pizza3";
import Menupage_chicken1 from "../Menupage/Menupage_chicken1";
import Menupage_chicken2 from "../Menupage/Menupage_chicken2";
import Menupage_chicken3 from "../Menupage/Menupage_chicken3";
import Menupage_ham1 from "../Menupage/Menupage_ham1";
import Menupage_ham2 from "../Menupage/Menupage_ham2";
import Menupage_ham3 from "../Menupage/Menupage_ham3";
function MenuSelect(props) {
  console.log(props);
  const MenuId = props.selectedMenuId;

  if (MenuId == 0 || MenuId == 1) {
    return (
      <div>
        <Menupage_pizza1 setCost={props.setCost} />
      </div>
    );
  } else if (MenuId == 2) {
    return (
      <div>
        <Menupage_pizza2 />
      </div>
    );
  } else if (MenuId == 3) {
    return (
      <div>
        <Menupage_pizza3 />
      </div>
    );
  } else if (MenuId == 4 || MenuId == 5) {
    return (
      <div>
        <Menupage_chicken1 />
      </div>
    );
  } else if (MenuId == 6) {
    return (
      <div>
        <Menupage_chicken2 />
      </div>
    );
  } else if (MenuId == 7) {
    return (
      <div>
        <Menupage_chicken3 />
      </div>
    );
  } else if (MenuId == 8 || MenuId == 9) {
    return (
      <div>
        <Menupage_ham1 />
      </div>
    );
  } else if (MenuId == 10) {
    return (
      <div>
        <Menupage_ham2 />
      </div>
    );
  } else if (MenuId == 11) {
    return (
      <div>
        <Menupage_ham3 />
      </div>
    );
  }
}

export default MenuSelect;
