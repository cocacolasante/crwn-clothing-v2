import { Outlet } from "react-router-dom";

import CategoriesCard from "../../component/categoriesss/CategoriesCard";



const Home = () => {

  return (
    <div>

      <CategoriesCard />
      <Outlet />

    </div>
  );
};

export default Home;
