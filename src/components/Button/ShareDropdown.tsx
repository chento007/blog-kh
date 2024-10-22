'use client'

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Threedot from "../Icon/Threedot";
import ShareIcon from "../Icon/ShareIcon";

export default function ShareDropDown() {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button size="sm" startContent={<ShareIcon />} className="bg-white w-1"></Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Action event example"
                onAction={(key) => alert(key)}
            >
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem key="delete" className="text-danger" color="danger">
                    Delete file
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}