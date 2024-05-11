import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import NavigationContext from "./contexts/NavigationContext.tsx";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export const reactQuery = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={reactQuery}>
            <BrowserRouter>
                <NavigationContext>
                    <App/>
                </NavigationContext>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>,
)
