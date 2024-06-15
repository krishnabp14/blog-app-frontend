import BlogPage from "./components/BlogPage"
import Blogs from "./components/Blogs"
import CreateBlogForm from "./components/CreateBlog"
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Blogs />}></Route>
          <Route path="/create-blog" element={<CreateBlogForm />}></Route>
          <Route path="/blog/:id" element={<BlogPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
