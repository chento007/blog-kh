'use client'

import {Pagination} from "@nextui-org/react";

export default function PaginationComponent({total, initialPage}: PaginationProps) {
    return (
        <Pagination isCompact showControls total={total} initialPage={initialPage}/>
    );
}