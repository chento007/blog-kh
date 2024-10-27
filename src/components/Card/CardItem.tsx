'use client'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Link,
    Image,
    Button,
    User
} from "@nextui-org/react";
import Favorite from "../Icon/Favorite";
import ReplyIcon from "../Icon/Reply";
import MenuDropDownThreeDot from "../Button/MenuDropDownThreeDot";
import ShareDropDown from "../Button/ShareDropdown";
import moment from "moment";
import {useRouter} from "next/navigation";


export default function CardItem({id, title, description, image, createdBy, createdAt, updatedAt}: CardProps) {

    const router = useRouter()

    return (
            <section onClick={()=>router.push(`/content/${id}`)} color="foreground">
                <Card className="max-w-[1000px] cursor-pointer mt-2">
                    <CardHeader className="gap-3 flex-col justify-items-start items-start">
                        <User
                            name={createdBy.name}
                            description={createdBy.position}
                            avatarProps={{
                                src: `${createdBy.image}`
                            }}
                        />
                        <div className="flex justify-start">
                        <span className="text-sm text-gray-500">
                            Created on:
                        </span>
                        <span className="text-sm font-medium text-gray-800 ml-1">
                            {moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                        </span>
                        </div>
                    </CardHeader>
                    <Divider/>
                    <CardBody>
                        <div className="flex justify-between">
                            <div>
                                <h4>{title}</h4>
                                <span>{description}</span>
                            </div>
                            <div>
                                <Image className="object-contain w-full h-[200px]" src={image}/>
                            </div>
                        </div>
                    </CardBody>
                    <Divider/>
                    <CardFooter className="flex justify-between">
                        <div>
                            <Button size="sm" startContent={<Favorite/>} className="bg-white w-1">100</Button>
                            <Button size="sm" startContent={<ReplyIcon/>} className="bg-white w-1">100</Button>
                        </div>
                        <div>
                            <ShareDropDown/>
                            <MenuDropDownThreeDot/>
                        </div>
                    </CardFooter>
                </Card>
            </section>
    );
}