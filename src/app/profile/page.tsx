'use client';

import TabMenuButtonProfile from "@/components/Button/TabMenuButtonProfile";
import {Avatar, Divider, Link} from "@nextui-org/react";
import {useSession} from "next-auth/react";
import LoadingSpinner from "@/components/Card/Loading";

export default function Profile() {

    const {data: session, status} = useSession();

    if (status === "loading") {
        return <LoadingSpinner/>
    }

    if(!session?.user){
        return <LoadingSpinner/>
    }else{
        return (
            <section className="w-1/2 m-auto grid grid-cols-4 gap-4">
                <div className="mt-10 col-span-3" >
                    <h3 className="mb-2 ml-3">{session?.user?.name}</h3>
                    <TabMenuButtonProfile image={session?.user?.image} name={session?.user?.name} />
                </div>
                <div className="mt-10 col-span-1 border-l-1">
                    <div className="flex flex-col justify-start items-center">
                        <Avatar src={session?.user?.image} className="w-20 h-20 text-large"/>
                        <p className="font-bold mt-2 text-start">{session?.user?.name}</p>
                        <p className="mt-1 text-[15px] text-start">{session?.user?.email}</p>
                    </div>
                </div>
            </section>
        );
    }



}
