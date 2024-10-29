import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Main from "./Components/Main";



import { BrowserRouter } from "react-router-dom";
// import { ProjectsProvider } from "./Providers/ProjectsProvider";
// import { UserProvider } from "./Providers/UserProvider";
// import { AuthProvider } from "./Providers/AuthContext";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <BrowserRouter>
      <Main></Main>
        {/* <App /> */}
      {/* <AuthProvider>
    //         <UserProvider>
    //             <ProjectsProvider>
    //                 <React.StrictMode>
    //                 </React.StrictMode>
    //             </ProjectsProvider>
    //         </UserProvider>
    //     </AuthProvider> */}
    </BrowserRouter>
)
