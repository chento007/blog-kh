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
import Favorite from "../Icon/Favorite";
import ReplyIcon from "../Icon/Reply";
import MenuDropDownThreeDot from "../Button/MenuDropDownThreeDot";
import ShareDropDown from "../Button/ShareDropdown";
import moment from "moment";
import {IoLockClosedOutline} from "react-icons/io5";


export default function CardReadingList({id, title, description, image, createdBy, createdAt, updatedAt}: CardProps) {

    return (
        <div className="bg-gray-100">
            <div className="px-5 pt-2 flex justify-between">
                <div className="flex flex-col justify-between w-full">
                    <div className="w-full">
                        <div className="flex items-center">
                            <Avatar src={createdBy.image} size="sm"/>
                            <span className="mx-2 font-bold text-[16px]">Chea Chento</span>
                        </div>
                        <h6 className="mt-8">Reading list</h6>
                    </div>
                    <div className="flex justify-between w-full ">
                        <p className="text-sm flex justify-center items-center">1 story <span className="mx-2">·</span> <IoLockClosedOutline /></p>
                        <MenuDropDownThreeDot bg="bg-gray-100"/>
                    </div>
                </div>
                <div >
                    <Image className="object-fill w-full" height={180} src={image}/>
                </div>
            </div>
        </div>
    );
}