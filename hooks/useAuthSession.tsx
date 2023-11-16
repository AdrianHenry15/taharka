import SignInModal from "@/components/ui/modals/SignInModal";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const useAuthSession = (link: string) => {
    const { data: session } = useSession();
    // If user is NOT signed in, render Sign In Modal
    if (!session) {
        return (
            <>
                <SignInModal />
            </>
        );
    }

    // if user IS signed in, redirect them to the selected page
    if (session) {
        redirect(link);
    }
};
