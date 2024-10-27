'use client';

import { Tabs, Tab } from "@nextui-org/react";
import CardItem from "../Card/CardItem";
import { tabs } from "@/mock/content";

export default function TabMenuButton() {
    return (
        <div className="flex w-full flex-col mt-6 sm:mt-10 bg-white px-4 sm:px-6 lg:px-8">
            <Tabs
                aria-label="Dynamic tabs"
                variant="underlined"
                items={tabs}
                className="overflow-x-auto"
            >
                {(item) => (
                    <Tab key={item.id} title={item.label} className="py-2">
                        <div className="flex flex-col space-y-4 sm:space-y-6 mt-4">
                            {item.content.map((card, index) => (
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
