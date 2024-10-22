'use client'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Input,
  Button, Link,
} from "@nextui-org/react";
import { SearchIcon } from "../Icon/SearchIcon";
import { WriteIcon } from "../Icon/Write";
import NotificationButton from "../Button/NotificationButton";
import Image from 'next/image';

export default function Header() {
  return (
    <Navbar>
      <NavbarContent as="div" justify="start">
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">BLOG-KH</Link>
        </NavbarBrand>
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[30rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon strokeWidth={3} size={18} height={30} width={20} />}
          type="search"
        />
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Link href="/write-content">
          <Button className="bg-white" endContent={<WriteIcon />}>
            <span>Write</span>
          </Button>
        </Link>
        <NotificationButton />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat" >
            <DropdownItem key="settings">
              <Link  color="foreground" href="/profile">My Profile</Link>
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
