import NavLink from "@/components/ui/navLink";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { House } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { List } from "lucide-react";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex flex-row items-center p-4">
          <img
            src="/src/assets/icons8-dofus.svg"
            alt="Logo"
            className="w-16 h-16"
          />
          <h1>Dofus</h1>
        </div>
        <div id="menu" className="m-10 w-32 flex flex-col gap-3 flex">
          <NavLink to="/" icon={House}>
            Home
          </NavLink>
          <NavLink to="/addItem" icon={CirclePlus}>
            Ajout item
          </NavLink>
          <NavLink to="/listItem" icon={List}>
            Items
          </NavLink>
        </div>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
