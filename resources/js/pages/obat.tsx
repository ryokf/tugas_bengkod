import React from 'react'
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { Label, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TextInput } from "flowbite-react";

const obat = () => {
    return (
        <AppLayout>
            <Head title="Obat" />
            <div className="h-full">
                <div className="overflow-x-auto w-11/12 mx-auto">
                    <h1 className="text-2xl font-bold mb-2">Obat</h1>
                    <form className="flex max-w-md flex-col gap-4 b bg-blue-900 p-4 rounded-lg">
                        <h2 className='text-lg'>Form tambah obat</h2>
                        <div>
                            <div className="block">
                                <Label htmlFor="nama_obat">Nama Obat</Label>
                            </div>
                            <TextInput id="nama_obat" type="text" placeholder="name@flowbite.com" required className='**:py-2 **:px-1'/>
                        </div>
                        <div>
                            <div className="block">
                                <Label htmlFor="kemasan">Kemasan</Label>
                            </div>
                            <TextInput id="kemasan" type="text" required className='**:py-2 **:px-1'/>
                        </div>
                        <div className="flex justify-end">
                            <button className="w-1/5 bg-blue-500 text-white px-2 py-1 rounded text-sm" onClick={() => { console.log('test') }}>Tambah</button>
                        </div>
                    </form>
                    <Table className='!static'>
                        <TableHead>
                            <TableRow>
                                <TableHeadCell>No.</TableHeadCell>
                                <TableHeadCell>Nama</TableHeadCell>
                                <TableHeadCell>Aksi</TableHeadCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="divide-y">
                            <TableRow className="bg-black dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Apple MacBook Pro 17"
                                </TableCell>
                                <TableCell>Sliver</TableCell>
                                <TableCell>Laptop</TableCell>

                            </TableRow>
                            <TableRow className="bg-black dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    Microsoft Surface Pro
                                </TableCell>
                                <TableCell>White</TableCell>
                                <TableCell>Laptop PC</TableCell>

                            </TableRow>
                            <TableRow className="bg-black dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</TableCell>
                                <TableCell>Black</TableCell>
                                <TableCell>Accessories</TableCell>

                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
        </AppLayout>
    )
}

export default obat
