'use client';

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import ShareIcon from "../Icon/ShareIcon";

export default function ShareDropDown() {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    size="sm"
                    startContent={<ShareIcon />}
                    className="bg-white w-auto px-2 sm:px-3 lg:px-4"
                />
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Action event example"
                onAction={(key) => alert(key)}
                className="min-w-[150px] sm:min-w-[180px] lg:min-w-[200px]"
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
