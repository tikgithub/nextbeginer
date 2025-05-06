import { cookies } from "next/headers";
import { decrypt } from "./session";

export default async function getAuthUser() {
    const cookiesStore = await cookies();
    const session = cookiesStore.get("session")?.value;
    if(session){
        const user = await decrypt(session);
        return user;
    }
}