import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <div>
                <Link to="/">Меню</Link>
                <Link to="/cart">Корзина</Link>
                <Link to="*">Error</Link>
            </div> Компонент меню Layouts
            <div>
                    <Outlet />
            </div>
        </>
    );
}

export default Layout;
