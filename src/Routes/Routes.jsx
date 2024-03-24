import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/donation',
          element: <Donation></Donation>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/donation-details/:id',
          element: <DonationDetails></DonationDetails> 
        }
      ]
    },
  ]);

export default router;