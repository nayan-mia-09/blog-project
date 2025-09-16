import { BrowserRouter, Route, Routes } from "react-router-dom"
import DetailsPage from "./pages/DetailsPage"
import HomePage from "./pages/HomePage"
import ByCategoryPage from "./pages/ByCategoryPage"
const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/byCategory/:categoryID" element={<ByCategoryPage/>}/>
      <Route path="/details/:postID" element={<DetailsPage/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
