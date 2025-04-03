import AppLayout from '@/layouts/app-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const periksa = () => {
    return (
        <AppLayout>
            <Head title="Periksa" />
            <div className="h-full">
                <div className="overflow-x-auto w-11/12 mx-auto">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold">Daftar Periksa</h1>
                        <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm" onClick={() => { console.log('test') }}>Tambah</button>
                    </div>
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

export default periksa
