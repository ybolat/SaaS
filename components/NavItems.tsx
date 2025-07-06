'use client';

import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const navItems = [
    {label: 'Home', href: '/'},
    {label: 'Companions', href: '/companions'},
    {label: 'My Journey', href: '/my-journey'},
]

const NavItems = () => {
    const pathName = usePathname();

    return (
        <nav className='flex items-center gap-4'>
            {navItems.map(v => (
                <Link key={v.label}
                      href={v.href}
                      className={cn(pathName === v.href && 'text-primary font-semibold')}
                >
                    {v.label}
                </Link>
            ))}
        </nav>
    );
}

export default NavItems;
