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
import {SearchIcon} from "../Icon/SearchIcon";
import {WriteIcon} from "../Icon/Write";
import {FaGithub} from "react-icons/fa";
import {useSession, signIn, signOut} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function Header() {

    const router = useRouter()

    const loginWithGitHub = async () => {
        await signIn("github")
    }

    const {data: session, status} = useSession();

    const isSignIn = (): boolean => {
        return status === 'authenticated';
    }

    const logout = async () => {
        await signOut({callbackUrl: "/"})
    }

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
                    startContent={<SearchIcon strokeWidth={3} size={18} height={30} width={20}/>}
                    type="search"
                />
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                {
                    isSignIn() ?
                        <>
                            <Button size="sm"   onClick={() => router.push("/write-content")} className="bg-white" endContent={<WriteIcon/>}>
                                <span>Write</span>
                            </Button>
                            <Dropdown placement="bottom-end">
                                <DropdownTrigger>
                                    <Avatar
                                        isBordered
                                        as="button"
                                        className="transition-transform"
                                        color="secondary"
                                        name="Jason Hughes"
                                        size="sm"
                                        src={session?.user?.image}
                                    />
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Profile Actions" variant="flat">
                                    <DropdownItem key="settings" onClick={() => router.push("/profile")}>
                                        <span>My Profile</span>
                                    </DropdownItem>
                                    <DropdownItem key="logout" color="danger" onClick={logout}>
                                        Log Out
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </>
                        : <><Button onClick={loginWithGitHub} className="bg-white border-1" size="sm"
                                    endContent={<FaGithub className="cursor-pointer" size={30}/>}>
                            Login with Github
                        </Button></>
                }


            </NavbarContent>
        </Navbar>
    );
}
