"use client";

import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { Search } from 'lucide-react';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const page = usePage();
    return (
        <SidebarGroup className="px-2 py-0">
            {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
            <div className="flex h-fit items-center justify-between my-4">
                <input type="text" placeholder="Search..." className=' w-10/12 border-1 border-gray-600 p-2 rounded-l-lg' />
                <button className="border-1 border-gray-600 rounded-r-lg p-2">
                    <Search className='text-gray-400'/>
                </button>
            </div>
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem key={item.title} >
                        <SidebarMenuButton asChild isActive={item.href === page.url} >
                            <Link href={item.href} prefetch className='py-6 text-[16px]'>
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
