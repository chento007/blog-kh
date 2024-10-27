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
        <section onClick={() => router.push(`/content/${id}`)} color="foreground">
            <Card className="max-w-[1000px] cursor-pointer mt-2">
                <CardHeader className="gap-3 flex-col justify-items-start items-start">
                    <User
                        name={createdBy.name}
                        description={createdBy.position}
                        avatarProps={{
                            src: `${createdBy.image}`
                        }}
                        className="flex flex-col sm:flex-row items-center sm:space-x-3"
                    />
                    <div className="flex flex-col sm:flex-row sm:items-center mt-2 space-y-1 sm:space-y-0">
                        <span className="text-xs sm:text-sm font-medium text-gray-800 sm:ml-1">
                            {moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                        </span>
                    </div>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <div
                        className="flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-4 lg:space-y-0">
                        <div className="flex-1">
                            <h4 className="text-lg font-semibold">{title}</h4>
                            <span className="text-sm">{description}</span>
                        </div>
                        <div className="w-full lg:w-[150px]">
                            <Image
                                className="object-contain w-full h-[150px]"
                                src={image}
                                alt="Card image"
                            />
                        </div>
                    </div>
                </CardBody>

                <Divider/>
                <CardFooter className="flex justify-between">
                    <div className="flex space-x-2">
                        <Button size="sm" startContent={<Favorite/>}
                                className="bg-white w-full sm:w-20 lg:w-24 px-2">
                            100
                        </Button>
                        <Button size="sm" startContent={<ReplyIcon/>}
                                className="bg-white w-full sm:w-20 lg:w-24 px-2">
                            100
                        </Button>
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