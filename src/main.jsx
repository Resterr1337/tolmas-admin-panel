import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { mainTheme } from "./mainTheme.jsx";
import { ThemeProvider } from "@mui/material";

import { mainRouter } from "./mainRouter.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider theme={mainTheme}>
			<RouterProvider router={mainRouter}></RouterProvider>
		</ThemeProvider>
	</StrictMode>
);
