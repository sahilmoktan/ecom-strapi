import "./App.css";
import { CartProvider} from "react-use-cart";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import NavBar from "./components/NavBar";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";
import "@brainhubeu/react-carousel/lib/style.css";
import Category from "./components/Category";

const client = new ApolloClient({
  uri: `http://localhost:1337/graphql`, //address where our graphql is running
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
