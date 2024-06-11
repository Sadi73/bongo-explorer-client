import { createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root/Root";
import Homepage from "./Layout/Root/Homepage/Homepage";
import AllPackages from "./Layout/Root/TourPackage/AllPackages";
import PackageDetails from "./Layout/Root/TourPackage/PackageDetails";
import Profile from "./Layout/Root/Profile/Profile";
import AllStories from "./Layout/Root/Stories/AllStories";
import StoryDetails from "./Layout/Root/Stories/StoryDetails";
import DashboardRoot from "./Layout/Dashboard/DashboardRoot/DashboardRoot";
import MyProfile from "./Layout/Dashboard/Profile/MyProfile";
import MyBookings from "./Layout/Dashboard/MyBookings/MyBookings";
import MyWishlist from "./Layout/Dashboard/Wishlist/MyWishlist";
import RequestToAdmin from "./Layout/Dashboard/RequestToAdmin/RequestToAdmin";
import MyAssignedTours from "./Layout/Dashboard/MyAssignedTours/MyAssignedTours";
import AddNewPackage from "./Layout/Dashboard/AddNewPackage/AddNewPackage";
import ManageUsers from "./Layout/Dashboard/ManageUsers/ManageUsers";
import Login from "./Layout/Root/LoginOrRegister/Login";
import Register from "./Layout/Root/LoginOrRegister/Register";
import PrivateRoute from "./Layout/PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "/package/all",
                element: <AllPackages />,
            },
            {
                path: "/package/:packageId",
                element: <PrivateRoute><PackageDetails /></PrivateRoute>,
            },
            {
                path: "/profile/guide",
                element: <Profile />,
            },
            {
                path: "/story/all",
                element: <AllStories />,
            },
            {
                path: "/story/:storyId",
                element: <StoryDetails />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute><DashboardRoot /></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <MyProfile />,
            },
            {
                path: "/dashboard/my-profile",
                element: <MyProfile />,
            },
            {
                path: "/dashboard/my-bookings",
                element: <MyBookings />,
            },
            {
                path: "/dashboard/my-wishlist",
                element: <MyWishlist />,
            },
            {
                path: "/dashboard/request-to-admin",
                element: <RequestToAdmin />,
            },
            {
                path: "/dashboard/my-assigned-tours",
                element: <MyAssignedTours />,
            },
            {
                path: "/dashboard/add-package",
                element: <AddNewPackage />,
            },
            {
                path: "/dashboard/manage-user",
                element: <ManageUsers />,
            },
        ]
    }
]);