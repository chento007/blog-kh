import {Button, Card, CardBody, CardHeader, Divider, User} from "@nextui-org/react";
import Favorite from "@/components/Icon/Favorite";
import ReplyIcon from "@/components/Icon/Reply";
import ShareDropDown from "@/components/Button/ShareDropdown";
import MenuDropDownThreeDot from "@/components/Button/MenuDropDownThreeDot";
import { FiEye } from "react-icons/fi";

export default async function ContentDatail({params}: { params: { id: string } }) {
    return (
        <section className="w-1/2 m-auto mt-10">
            <div>
                <h1 className="mb-2">What would Hubi say?</h1>
                <span>How I extracted knowledge from Andrew Huberman's podcast using Google’s NotebookLM</span>
            </div>
            <User
                className="my-5"
                name="Marina Tosic"
                description="Published in AI Advances · 8 min read · 1 day ago"
            />
            <Divider/>
            <div className="flex justify-between py-2 items-center">
                <div className="flex">
                    <Button size="sm" startContent={<Favorite/>}    className="bg-white">100</Button>
                    <Button size="sm" startContent={<FiEye  size={28} />} className="bg-white
                    ">100</Button>
                </div>
                <div>
                    <ShareDropDown/>
                    <MenuDropDownThreeDot/>
                </div>
            </div>
            <Divider/>
            {/* fetch from CK-EDITOR */}
        </section>
    );
}