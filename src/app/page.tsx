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
        <section className="w-1/2 m-auto">
            <TabMenuButton/>
            <PaginationComponent total={100} initialPage={1}/>
        </section>
    );
}
