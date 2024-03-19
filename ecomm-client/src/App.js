import "./App.css";
import { CartProvider} from "react-use-cart";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import NavBar from "./components/NavBar";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";
import "@brainhubeu/react-carousel/lib/style.css";
import Category from "./components/Category";
import { BACKEND_URL } from "./helper";

const client = new ApolloClient({
  uri: `${BACKEND_URL}/graphql`, //address where our graphql is running & then change to online hosted url
  cache: new InMemoryCache(),
});

const Routes = () => {
  const element = useRoutes(routes);
  return (
    <>
      <NavBar />
      {element}
      <Category/>
    </>
  );
};

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
