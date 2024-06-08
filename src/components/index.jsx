import '../App.css';
import Header from './header';
import Home from './pages/home'
import Footer from './footer';
import Contact from './pages/contact';
import AboutUs from './pages/about';
import Cart from './pages/cart';
import CheckOut from './pages/checkout';
import ProductDetail from './pages/prodcut_details';
import WishList from './pages/wishlist';
import ProductCate from './pages/products_categories/products_category';
import Profile from './pages/profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';
import MyOrder from './pages/myoder';
import Admin from './pages/admin/admin';
import AllProducts from './pages/admin/all_products';
import OrdersList from './pages/admin/orders_list';
import Message from './pages/admin/message';
import AddProduct from './pages/admin/add_product';
import EditProduct from './pages/admin/edit_product';
// import Test from './test';
import Mobile from './pages/products_categories/mobiles';
import Laptops from './pages/products_categories/latops';
import TV from './pages/products_categories/tv';
import Audios from './pages/products_categories/audious';
import Cameras from './pages/products_categories/cameras';
import Consoles from './pages/products_categories/consoles';
import Printers from './pages/products_categories/printers';
import Smart from './pages/products_categories/smart';
import TodaySalePage from './pages/products_categories/today_sale';
import MonthSalePage from './pages/products_categories/month_sale';

export default function Index() {
    return <>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
        <Router>
            <Header />
            {/* <Admin/> */}
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/about" element={<AboutUs />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/checkout" element={<CheckOut />}></Route>
                <Route path="/detail/:id" element={<ProductDetail />}></Route>
                <Route path="/wishlist" element={<WishList />}></Route>
                <Route path="/products" element={<ProductCate />}></Route>
                <Route path="/profile/:id" element={<Profile />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/order" element={<MyOrder />}></Route>
                <Route path="/admin" element={<Admin />}></Route>
                <Route path="/all_products" element={<AllProducts />}></Route>
                <Route path="/oders_list" element={<OrdersList />}></Route>
                <Route path="/message" element={<Message />}></Route>
                <Route path="/add_product" element={<AddProduct />}></Route>
                <Route path="/edit_product/:id" element={<EditProduct />}></Route>
                <Route path="/mobiles" element={<Mobile />}></Route>
                <Route path="/laptops" element={<Laptops />}></Route>
                <Route path="/tv" element={<TV />}></Route>
                <Route path="/audios" element={<Audios />}></Route>
                <Route path="/cameras" element={<Cameras />}></Route>
                <Route path="/consoles" element={<Consoles />}></Route>
                <Route path="/printers" element={<Printers />}></Route>
                <Route path="/smart" element={<Smart />}></Route>
                <Route path="/day_sale" element={<TodaySalePage />}></Route>
                <Route path="/month_sale" element={<MonthSalePage />}></Route>              
            </Routes>
            <Footer />
        </Router>
    </>
}