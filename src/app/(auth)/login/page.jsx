'use client'
import { login } from "@/actions/auth";
import Link from "next/link";
import { useActionState } from "react";

export default function Login() {
  
  const [state, action, isPrending] = useActionState(login,undefined);

  return (
    <div className="container w-1/2">
      <h1 className="title">ເຂົ້າສູ່ລະບົບ</h1>
      <form action={action} className="space-y-4">
        <div>
          <label htmlFor="email">ອີເມວ</label>
          <input type="text" name="email" id="email" />
         {state?.errors?.email && (
           <p className="text-red-500 text-sm">{state.errors.email}</p>
         )}
        </div>
        <div>
          <label htmlFor="password">ລະຫັດຜ່ານ</label>
          <input type="password" name="password" id="password" />
        
        </div>

        <div className="flex items-end gap-4">
          <button disabled={isPrending} className="btn-primary">
            {isPrending ? "Loading..." : "Login"}
          </button>
          <Link className="text-link" href="/register">
            Or Register Here
          </Link>
        </div>
      </form>
    </div>
  );
}
