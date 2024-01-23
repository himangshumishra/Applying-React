import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Layout } from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import './index.css'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github,{ githubInfoLoader } from './components/Github/Github'



// const router=createBrowserRouter([
//     {
//         path:'/', 
//         element:<Layout/>,
//         children:[
//             {
//                 path:"",
//                 element:<Home/> 

//             },
//             {
//                 path:'about',
//                 element:<About/>
//             },
//             {
//                 path:'github',
//                 element:<Github/>
//             },
//             {
//                 path:'contact',
//                 element:<Contact/>
                
//             }
//         ]
//     }

// ])


const router =createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home />}/>
            <Route path='about' element={<About />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='user/:userid' element={<User />}/>
            <Route loader={githubInfoLoader} path='github' element={<Github />}/>



        </Route>
    )
)



ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
   