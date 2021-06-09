import React from 'react';
import { useRouter } from "next/router";
import PageLink from "../components/PageLink";

const PageLinker = () => {
    const router = useRouter();
    const pageLinks = [
        // TODO: text translation
        { href: "/collections", text: "Collections" },
        { href: "/artists", text: "Artists" },
        { href: "/forge", text: "Forge" },
    ];
    return (
        <div>
            <div className="hidden lg:flex">
                {pageLinks.map(({text, href}) => (<PageLink text={text} href={href} selected={router.pathname === href}/>))}
            </div>
            <div className="block lg:hidden">
                here's mobile menu type
            </div>
        </div>
    );
};

export default PageLinker
