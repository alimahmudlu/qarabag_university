import React, {useEffect, useRef, useState} from 'react';
import dynamic from "next/dynamic";
// const {Jodit} = dynamic(() => import("jodit-pro-react"), { ssr: false });
import {Jodit} from "jodit-pro-react";

const FileBrowserPro = ({ config }) => {
    // const [] = useState()

    function click() {
    }

    return (
        <>
            <div onClick={click}>click</div>
        </>
    );
};

export default FileBrowserPro;
