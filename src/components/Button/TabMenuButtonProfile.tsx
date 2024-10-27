'use client';

import React from "react";
import {Tabs, Tab, Card, CardBody, CardHeader, Divider} from "@nextui-org/react";
import CardReadingList from "@/components/Card/CardReadingList";

export default function TabMenuButtonProfile({name,image}: { name: string,image:string }) {

    return (
        <div className="flex max-w-2xl  flex-col">
            <Tabs
                aria-label="Options"
                variant="underlined"
            >
                <Tab key="photos" title="Home">
                    <CardReadingList
                        image={image}
                        name={name}
                    />
                </Tab>
                <Tab key="music" title="About">
                    <CardReadingList
                        image={image}
                        name={name}
                    />
                </Tab>
            </Tabs>
        </div>
    );
}