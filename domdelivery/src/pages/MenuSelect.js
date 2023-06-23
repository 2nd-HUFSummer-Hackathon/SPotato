import Menupage_chicken1 from "../Menupage/Menupage_chicken1";
import Menupage_chicken2 from "../Menupage/Menupage_chicken2";
import Menupage_chicken3 from "../Menupage/Menupage_chicken3";
import Menupage_pizza1 from "../Menupage/Menupage_pizza1";
import Menupage_pizza2 from "../Menupage/Menupage_pizza2";
import Menupage_pizza3 from "../Menupage/Menupage_pizza3";
import Menupage_ham1 from "../Menupage/Menupage_ham1";
import Menupage_ham2 from "../Menupage/Menupage_ham2";
import Menupage_ham3 from "../Menupage/Menupage_ham3";

function MenuSelect({ selectedMenuId }) {
  let id = selectedMenuId();

  // id 값에 따라서 조건부 렌더링을 수행합니다.
  if (id === "0" || id === "1") {
    return <Menupage_pizza1 />;
  } else if (id === "2") {
    return <Menupage_pizza2 />;
  }
  else if (id === "3") {
    return <Menupage_pizza3 />;
  }
  else if (id === "4" || id === "5") {
    return <Menupage_chicken1 />;
  }
  else if (id === "6") {
    return <Menupage_chicken2 />;
  }
  else if (id === "7") {
    return <Menupage_chicken3 />;
  } else {
    else if (id === "8" || id === "9") {
      return <Menupage_ham1 />;
    }
    else if (id === "10") {
      return <Menupage_ham2 />;
    }
    else if (id === "11") {
      return <Menupage_ham3 />;
    }

    return <Menupage_pizza1 />;
  }
}

export default MenuSelect;
