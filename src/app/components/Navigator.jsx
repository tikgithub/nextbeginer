import getAuthUser from "@/lib/getAuthUser";
import NavLink from "./NavLink";
import { logout } from "@/actions/auth";

export default async function Navigator() {
  const authUser = await getAuthUser();

  return (
    <nav>
      <NavLink label="ໜ້າຫຼັກ" href="/" />
      <div>
        {authUser ? (
          <div className="flex items-center">
            <NavLink label="Dashboard" href="/dashboard" />
            <form action={logout}>
                <button type="submit" className="nav-link">
                    ອອກ
                </button>
            </form>
          </div>
        ) : (
          <div>
            <NavLink label="ລົງທະບຽນ" href="/register" />
            <NavLink label="ເຂົ້າສູ່ລະບົບ" href="/login" />
          </div>
        )}
      </div>
    </nav>
  );
}
