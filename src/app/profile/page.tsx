'use client';

import TabMenuButtonProfile from "@/components/Button/TabMenuButtonProfile";
import {Avatar, Link} from "@nextui-org/react";

export default function Profile() {
    return (
        <section className="w-1/2 m-auto grid grid-cols-4 gap-4">
            <div className="mt-10 col-span-3" >
                <h3 className="mb-2 ml-3">Chea Chento</h3>
                <TabMenuButtonProfile/>
            </div>
            <div className="mt-10 col-span-1">
                <div className="flex flex-col justify-start items-center">
                    <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" className="w-20 h-20 text-large"/>
                    <p className="font-bold mt-2 text-start">Chea Chento</p>
                    <p className="mt-1 text-[12px] text-start">Chea Chento</p>
                    <Link className="text-[12px] mt-2 cursor-pointer">
                        Edit profile
                    </Link>
                </div>
            </div>
        </section>
    );
}
