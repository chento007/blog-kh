'use client';

import { Tabs, Tab } from "@nextui-org/react";
import CardItem from "../Card/CardItem";
import {tabs} from "@/mock/content";

export default function TabMenuButton() {


    return (
        <div className="flex w-full flex-col mt-10 bg-white">
            <Tabs aria-label="Dynamic tabs" variant="underlined" items={tabs} className="">
                {(item) => (
                    <Tab key={item.id} title={item.label}>
                        <div className="flex flex-col">
                            {item.content.map((card, index:number) => (
                                <CardItem
                                    key={index}
                                    id={card.id}
                                    title={card.title}
                                    description={card.description}
                                    image={card.image}
                                    createdBy={card.createdBy}
                                    createdAt={card.createdAt}
                                    updatedAt={card.updatedAt}
                                />
                            ))}
                        </div>
                    </Tab>
                )}
            </Tabs>
        </div>
    );
}
