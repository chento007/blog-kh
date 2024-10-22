import { Badge, Button } from '@nextui-org/react'
import React from 'react'
import { NotificationIcon } from '../Icon/NotificationIcon'

export default function NotificationButton() {
    return (
        <Badge content="99+" shape="circle" color="danger">
            <Button
                radius="full"
                isIconOnly
                aria-label="more than 99 notifications"
                variant="light"
            >
                <NotificationIcon height={20} width={20} size={24} />
            </Button>
        </Badge>
    )
}
