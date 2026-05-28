import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  LoginAsSeller,
  Register,
  Login,
  UserProfile,
  DashboardLayout,
  SellerDashboard,
  Layout,
  CreateCategory,
  MyFavorite,
  UpdateCategory,
  Catgeorylist,
  UpdateProductByAdmin,
  AdminProductList,
  Income,
  Dashboard,
  Payment,
  ProductList,
  ProductEdit,
  AddProduct,
  Account,
  ProductsDetailsPage,
  Home,
  Contact,
  Blog,
  Services,
  About,
  UserList,
  WinningBidList,
  NotFound,
  ScrollToTop,
  PrivateRoute,
} from "./router/index.js";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout> <Home /> </Layout>} />
          <Route path="/contact" element={<Layout> <Contact /> </Layout>} />
          <Route path="/blog" element={<Layout> <Blog /> </Layout>} />
          <Route path="/services" element={<Layout> <Services /> </Layout>} />
          <Route path="/payment" element={<Layout> <Payment /> </Layout>} />
          <Route path="/about" element={<Layout> <About /> </Layout>} />
          <Route path="/login" element={<Layout> <Login /> </Layout>} />
          <Route path="/seller/login" element={<PrivateRoute> <Layout> <LoginAsSeller /> </Layout> </PrivateRoute>} />
          <Route path="/register" element={<Layout> <Register /> </Layout>} />
          <Route path="/create-product" element={<PrivateRoute> <Layout> <DashboardLayout> <AddProduct /> </DashboardLayout> </Layout> </PrivateRoute>} />
          <Route path="/myfavorite" element={<Layout> <MyFavorite /> </Layout>} />
          <Route path="/account" element={<Layout> <Account /> </Layout>} />
          <Route path="/add" element={<PrivateRoute> <Layout> <DashboardLayout> <AddProduct /> </DashboardLayout> </Layout> </PrivateRoute>} />
          <Route path="/admin/income" element={<PrivateRoute> <Layout> <DashboardLayout> <Income /> </DashboardLayout> </Layout> </PrivateRoute>} />
          <Route path="/product/update/:id" element={<PrivateRoute> <Layout> <DashboardLayout> <ProductEdit /> </DashboardLayout> </Layout> </PrivateRoute>} />
          <Route path="/details/:id" element={<Layout> <ProductsDetailsPage /> </Layout>} />
          <Route path="/sellerDashboard" element={<Layout> <SellerDashboard /> </Layout>} />
          <Route path="/dashboard" element={<PrivateRoute> <Layout> <DashboardLayout> <Dashboard /> </DashboardLayout> </Layout> </PrivateRoute>} />
          <Route path="/product" element={<PrivateRoute> <Layout> <DashboardLayout> <ProductList /> </DashboardLayout> </Layout> </PrivateRoute>} />
          <Route path="/product/admin" element={<PrivateRoute> <Layout> <DashboardLayout> <AdminProductList /> </DashboardLayout> </Layout> </PrivateRoute>} />
          <Route path="/product/admin/update/:id" element={<PrivateRoute> <Layout> <DashboardLayout> <UpdateProductByAdmin /> </DashboardLayout> </Layout> </PrivateRoute>} />
          <Route path="/userlist" element={<PrivateRoute> <Layout> <DashboardLayout> <UserList /> </DashboardLayout> </Layout> </PrivateRoute>} />
          <Route path="/winning-products" element={<PrivateRoute> <Layout> <DashboardLayout> <WinningBidList /> </DashboardLayout> </Layout> </PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute> <Layout> <DashboardLayout> <UserProfile /> </DashboardLayout> </Layout> </PrivateRoute>} />
          <Route path="/category" element={<PrivateRoute> <Layout> <DashboardLayout> <Catgeorylist /> </DashboardLayout> </Layout> </PrivateRoute>} />
          <Route path="/category/create" element={<PrivateRoute> <Layout> <DashboardLayout> <CreateCategory /> </DashboardLayout> </Layout> </PrivateRoute>} />
          <Route path="/category/update/:id" element={<PrivateRoute> <Layout> <DashboardLayout> <UpdateCategory /> </DashboardLayout> </Layout> </PrivateRoute>} />
          <Route path="/*" element={<Layout> <NotFound /> </Layout>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
