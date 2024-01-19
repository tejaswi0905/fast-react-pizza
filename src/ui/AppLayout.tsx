import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading: boolean = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader></Loader>}

      <Header></Header>

      <main>
        <h1>Static Content</h1>
        <Outlet></Outlet>
      </main>

      <CartOverview></CartOverview>
    </div>
  );
}

export default AppLayout;
