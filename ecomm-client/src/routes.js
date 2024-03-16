import Home from "./pages/Home"
import Login from "./pages/Login"
import Product from "./pages/Product"
import Signup from "./pages/Signup"

const routes =[
    {path:"/",element:<Home />},
    {path:"/login",element:<Login />},
    {path:"/signup",element:<Signup />},
    {path:"/product/:pid",element:<Product />},

]

export default routes