import { useSelector } from "react-redux";
import AsyncComponent from "./components/AsyncComponent";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <AsyncComponent />
      <Header />
      {isAuth ? <UserProfile /> : <Auth />}
      <Counter bingo="bingoda" amount={5} />
    </>
  );
}

export default App;
