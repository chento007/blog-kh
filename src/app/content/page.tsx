import TabMenuButton from "@/components/Button/TabMenuButton";
import PaginationComponent from "@/components/Button/Pagination";

export default async function Contents() {
    return (
        <section className="w-1/2 m-auto">
            <TabMenuButton/>
            <PaginationComponent total={100} initialPage={1}/>
        </section>
    );
}