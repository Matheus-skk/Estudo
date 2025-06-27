import Banner from "components/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao(){
    return(
        <main>
            <Banner/>
            <Outlet />
        </main>
    )
}