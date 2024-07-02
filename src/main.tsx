import {createRoot} from "react-dom/client";
import {App} from "./App/App.tsx"
import "./Style/Main.css"

createRoot(document.getElementById('root')!).render(
    <App/>
)
