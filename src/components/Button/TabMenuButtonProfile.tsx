'use client';

import React from "react";
import {Tabs, Tab, Card, CardBody, CardHeader, Divider} from "@nextui-org/react";
import CardItem from "@/components/Card/CardItem";
import CardReadingList from "@/components/Card/CardReadingList";

export default function TabMenuButtonProfile() {

    const mock ={
        id: 3,
        title: "Infrastructure as Code",
        description: "Explore the concept of Infrastructure as Code (IaC) and how it can improve your infrastructure management.",
        image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-sql-illustration_23-2149242071.jpg?ga=GA1.1.998560928.1727840982&semt=ais_hybrid",
        createdBy: {
            id: 109,
            name: "Sophia Long",
            image: "https://img.freepik.com/free-photo/portrait-young-woman-isolated_53876-40312.jpg",
            position: "Systems Administrator"
        },
        createdAt: "2023-08-20T12:00:00Z",
        updatedAt: "2023-08-25T12:00:00Z"
    }

    return (
        <div className="flex max-w-2xl  flex-col">
            <Tabs
                aria-label="Options"
                variant="underlined"
            >
                <Tab key="photos" title="Home">
                    <CardReadingList id={mock.id} title={mock.title} description={mock.description} image={mock.image} createdBy={mock.createdBy} createdAt={mock.createdAt} updatedAt={mock.updatedAt} />
                </Tab>
                <Tab key="music" title="About">
                    <CardReadingList id={mock.id} title={mock.title} description={mock.description} image={mock.image} createdBy={mock.createdBy} createdAt={mock.createdAt} updatedAt={mock.updatedAt} />
                </Tab>
            </Tabs>
        </div>
    );
}