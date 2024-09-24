import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { mainTheme } from "./mainTheme.jsx";
import { ThemeProvider } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { mainRouter } from "./mainRouter.jsx";
import { RouterProvider } from "react-router-dom";



createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider theme={mainTheme}>
			<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"en-gb"}>
				<RouterProvider router={mainRouter}></RouterProvider>
			</LocalizationProvider>
		</ThemeProvider>
	</StrictMode>
);
