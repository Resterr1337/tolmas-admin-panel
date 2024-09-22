import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { DashboardPage } from "./pages/DashboardPage";
import { OrdersPage } from "./pages/OrdersPage";
import { ProductsPage } from "./pages/ProductsPage";
import { MarketingPage } from "./pages/MarketingPage";
import { ClientsPage } from "./pages/ClientsPage";
import { DeliveryPage } from "./pages/DeliveryPage";
import { SettingsPage } from "./pages/SettingsPage";
import { FilialsPage } from "./pages/FilialsPage";
import { BannerPage } from "./pages/BannerPage";
import { DiscountPage } from "./pages/DiscountPage";
import { PromoPage } from "./pages/PromoPage";
import { ClientPage } from "./pages/ClientPage";

const mainRouter = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <h1>404 eror not found</h1>,
		children: [
			{
				index: true,
				element: <DashboardPage />,
			},
			{
				path: "orders",
				element: <OrdersPage />,
			},
			{
				path: "products",
				element: <ProductsPage />,
			},
			{
				path: "marketing",
				element: <MarketingPage />,
				children:[
					{
						path:"banner",
						element: <BannerPage/>,
					},
					{
						path:"discount",
						element: <DiscountPage/>
					},
					{
						path:"promo",
						element: <PromoPage/>
					}
				]
			},
			{
				path: "clients",
				element: <ClientsPage />,
			},
			{
				path:"clients/:clientID",
				element: <ClientPage/>
			},
			{
				path: "filials",
				element: <FilialsPage />,
			},
			{
				path: "delivery",
				element: <DeliveryPage />,
			},
			{
				path: "settings",
				element: <SettingsPage />,
			},
		],
	},
]);

export { mainRouter };
