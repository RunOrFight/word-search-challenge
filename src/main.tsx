import {createRoot} from "react-dom/client";
import {App} from "./App/App.tsx"
import "./Style/Main.css"
import {StrictMode} from "react";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
