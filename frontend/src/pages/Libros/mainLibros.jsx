import { Outlet } from "react-router-dom";

export const LibrosScreen = () => {
    return (
        <div className="container-fluid vh-100 d-flex align-items-stretch">
            <div className="row flex-grow-1">
                <div className="col-md-3 order-md-1 order-1 bg-dark"></div>
                <div className="col-md-9  text-white order-md-2">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
