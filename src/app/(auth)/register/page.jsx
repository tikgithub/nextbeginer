'use client'
import { register } from "@/actions/auth";
import Link from "next/link";
import { useActionState } from "react";

export default function Register() {
  
  const [state, action, isPrending] = useActionState(register,undefined);

  return (
    <div className="container w-1/2">
      <h1 className="title">ລົງທະບຽນ</h1>
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
          {state?.errors?.password && (
            <p className="text-red-500 text-sm">{state.errors.password}</p>
          )}  
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="text" name="confirmPassword" id="confirmPassword" />
          {state?.errors?.confirmPassword && (
            <p className="text-red-500 text-sm">{state.errors.confirmPassword}</p>
          )}
        </div>

        <div className="flex items-end gap-4">
          <button disabled={isPrending} className="btn-primary">
            {isPrending ? "Registering..." : "Register"}
          </button>
          <Link className="text-link" href="/">
            Or Login Here
          </Link>
        </div>
      </form>
    </div>
  );
}
