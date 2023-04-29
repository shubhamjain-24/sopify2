import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import React from "react";
import Signup from "./pages/Signup";
import NewChat from "./pages/NewChat";
import RegisterListener from "./pages/RegisterListener";
import ListenerChat from "./pages/ListenerChat";
import ListenerLogin from "./pages/ListenerLogin";
import Landing_page from "./Landing_page/Landing_page";
// import AboutUs from "./AboutUs/About_Us";
import AboutUs from "./pages/AboutUs/About_Us";
import PandC from "./PandC/PandC";
// import Blogs from "./pages/Blogs/Blogs";
// import Blogs from "./Pages/Blogs/Blogs";
import ContactUs from "./pages/ContactUs/ContactUs";
import VideoCall from "./components/VideoCall";
import RegisterUser from "./config/RegisterUser";
import Clientdetails from "./pages/Clientdetails";
import ParticularClient from "./pages/ParticularClient";
import InternDashoard from "./pages/InternDashoard";
import AdminDashboard from "./pages/AdminDashboard";
import { blogList } from "../src/config/data";
import Blogs from "./pages/Blogs/Blogs";
import BlogPage from "./pages/Blogs/Blogpage/BlogPage";
import SOP from "./pages/SOP/SOP";
import LOR from "./pages/LOR/LOR";
import Services from "./pages/Services/Services";
import Assignment from "./pages/Assignments/Assignment";
import AdminLogin from "./AdminLogin";
import AdminSignup from "./pages/AdminSignup";
import CheckerDashboard from "./CheckerDashboard";
import CheckerLogin from "./CheckerLogin";
import CheckerSignup from "./CheckerSignup";
import ApprovalStatus from "./ApprovalStatus";
import CheckerMainboard from "./CheckerMainboard";
import InternList from "./pages/InternList";
import AllPaidClientList from "./pages/AllPaidClientList";
import Payment from "./pages/Payment";
import Infopage1 from "./InfoPages/infopage4";

// import Register from "./config/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<Infopage1 />} />
        {/* css done */}
        <Route path="/login" element={<Login />} />
        {/* css done */}
        <Route path="/chat" element={<Chat />} />
        {/* css done */}
        <Route path="/signup" element={<Signup />} />
        {/* page not useful */}
        <Route path="/listenerregister" element={<RegisterListener />} />
        {/* css done */}
        <Route path="/ListenerChat" element={<ListenerChat />} />
        {/* css done */}
        <Route path="/listenerlogin" element={<ListenerLogin />} />
        {/* done */}
        <Route path="/" element={<Landing_page />} />
        {/* done */}
        <Route path="/aboutUs" element={<AboutUs />} />
        {/* done */}
        <Route path="/PandC" element={<PandC />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        {/* done */}
        <Route path="/blog" element={<Blogs blogs={blogList} />} />
        {/* done */}
        <Route path="/blog/blog/:id" element={<BlogPage />} />
        {/* done iske andder ka navigation info dekhna h */}
        <Route path="/clientdetails" element={<Clientdetails />} />
        {/* iska ek chiz phas rha h */}
        <Route path="/particularClient" element={<ParticularClient />} />

        <Route path="/internDashboard" element={<InternDashoard />} />
        {/* done */}
        <Route path="/contactUs" element={<ContactUs />} />
        {/* not useful */}
        <Route path="/videocall" element={<VideoCall />} />
        {/* done */}
        <Route path="/RegisterUser" element={<RegisterUser />} />
        {/* isko pc m hi chalana better h for now */}
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route exact path="/sop" element={<SOP />} />
        <Route exact path="/lor" element={<LOR />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/assignment" element={<Assignment />} />
        {/* done */}
        <Route exact path="/adminlogin" element={<AdminLogin />} />
        {/* done */}
        <Route path="/SignUpAdmin" element={<AdminSignup />} />
        {/* page does not found */}
        <Route path="/SignUpChecker" element={<CheckerSignup />} />
        {/* done */}
        <Route path="/SignInChecker" element={<CheckerLogin />} />
        {/* done */}
        <Route path="/approvalstatus" element={<ApprovalStatus />} />
        <Route path="/Checkertable" element={<CheckerDashboard />} />
        <Route path="/CheckerDashboard" element={<CheckerMainboard />} />
        <Route path="/internList" element={<InternList />} />
        {/* done */}
        <Route path="/payment" element={<Payment />} />

        <Route path="/AllPaidClientList" element={<AllPaidClientList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
