'use client';

import TabMenuButton from "@/components/Button/TabMenuButton";
import PaginationComponent from "@/components/Button/Pagination";
import {useSession} from "next-auth/react";
import LoadingSpinner from "@/components/Card/Loading";

export default function Home() {

    const {data: session, status} = useSession();
    console.log("session", status);
    if (status === "loading") {
        return <LoadingSpinner/>
    }
    return (
        <section className="w-full sm:w-3/4 lg:w-1/2 mx-auto px-4">
            <TabMenuButton/>
        </section>

    );
}
