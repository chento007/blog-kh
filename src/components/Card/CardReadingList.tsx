import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Divider,
    Link,
    Image,
    Button,
    User, Avatar
} from "@nextui-org/react";
import MenuDropDownThreeDot from "../Button/MenuDropDownThreeDot";

import {IoLockClosedOutline} from "react-icons/io5";


export default function CardReadingList({image, name}: { image: string, name: string }) {

    return (
        <div className="bg-gray-100">
            <div className="px-5 pt-2 flex justify-between">
                <div className="flex flex-col justify-between w-full">
                    <div className="w-full">
                        <div className="flex items-center">
                            <Avatar src={image} size="sm"/>
                            <span className="mx-2 font-bold text-[16px]">{name}</span>
                        </div>
                        <h6 className="mt-8">Reading list</h6>
                    </div>
                    <div className="flex justify-between w-full ">
                        <p className="text-sm flex justify-center items-center">1 story <span className="mx-2">·</span>
                            <IoLockClosedOutline/></p>
                        <MenuDropDownThreeDot bg="bg-gray-100"/>
                    </div>
                </div>
                <div>
                    <Image  className="object-fill w-full border-0"  height={180} src="https://img.freepik.com/free-psd/3d-illustration-reading-with-book-esssential_23-2151295080.jpg?semt=ais_hybrid"/>
                </div>
            </div>
        </div>
    );
}