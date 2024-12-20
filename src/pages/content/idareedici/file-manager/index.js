import React from 'react';
import dynamic from "next/dynamic";
import {MainLayout} from "@/admin/components/layouts";
const FileManager = dynamic(() => import('@/admin/components/templates/FileManager'), { ssr: false });


export default function Index(){
    return (
        <FileManager />
    );
};


Index.getLayout = function getLayout(page) {
    return (
        <>
            <MainLayout>
                {page}
            </MainLayout>
        </>
    )
}