'use client'

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {EyeOutlined} from "@ant-design/icons";
import CardItem from "@/components/Card/CardItem";

export default function PreviewCardModal() {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const mock ={
        id: 3,
        title: "Infrastructure as Code",
        description: "Explore the concept of Infrastructure as Code (IaC) and how it can improve your infrastructure management.",
        image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-sql-illustration_23-2149242071.jpg?ga=GA1.1.998560928.1727840982&semt=ais_hybrid",
        createdBy: {
            id: 109,
            name: "Sophia Long",
            image: "https://img.freepik.com/free-photo/portrait-young-woman-isolated_53876-40312.jpg",
            position: "Systems Administrator"
        },
        createdAt: "2023-08-20T12:00:00Z",
        updatedAt: "2023-08-25T12:00:00Z"
    }

    return (
        <>
            <Button size="sm"  className="mr-2 bg-white border-2" endContent={<EyeOutlined />}  onPress={onOpen}>Preview Card</Button>
            <Modal size="5xl" isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Preview Card</ModalHeader>
                            <ModalBody>
                                <CardItem id={mock.id} title={mock.title} description={mock.description} image={mock.image} createdBy={mock.createdBy} createdAt={mock.createdAt} updatedAt={mock.updatedAt} />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}