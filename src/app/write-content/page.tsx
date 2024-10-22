'use client'

import {Button, Divider, Input} from "@nextui-org/react";
import EditorWriting from "@/components/Editor/Custom-editor";
import {SendOutlined} from "@ant-design/icons";
import PreviewCardModal from "@/components/Modal/PreviewCard";
import PreviewEditorContentModal from "@/components/Modal/PreviewEditorContent";
import {Textarea} from "@nextui-org/input";
import UploadFile from "@/components/Card/UploadFile";

export default function WriteContent() {

    return (
        <section className="w-1/2 m-auto mt-10">
            <div className="flex justify-end">
                <PreviewCardModal/>
                <PreviewEditorContentModal/>
                <Button size="sm" className="mr-2 bg-white border-2" endContent={<SendOutlined />} >Public</Button>
            </div>

            <Input type="text" variant="bordered" label="Title" className="my-2" />

            <Textarea
                label="Description"
                variant="bordered"
                placeholder="Enter your description"
                disableAnimation
                disableAutosize
                classNames={{
                    base: "max-w-full",
                    input: "resize-y min-h-[100px]",
                }}
                className="w-full"
            />

            <UploadFile/>

            <EditorWriting/>
        </section>
    );
}
