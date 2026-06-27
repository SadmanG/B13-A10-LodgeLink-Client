"use client";

import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { redirect, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import React from 'react';

export function DeletePropertyAlert({ property }) {
    const router = useRouter();

    const handleDelete = async (e) => {
        e.preventDefault();
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/properties/${property._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        });
        router.push('/dashboard/owner/myproperties');
    };

    return (
        <AlertDialog>
            {/* Modal Delete Trigger Button */}
            <Button
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow-lg active:scale-95 transition-all"
            >
                <TrashBin className="text-lg" />
                Delete
            </Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-md bg-emerald-900 text-stone-100 border border-emerald-800 rounded-3xl">
                        <AlertDialog.CloseTrigger className="text-stone-400 hover:text-white" />

                        <AlertDialog.Header className="flex items-center gap-3">
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading className="text-white font-black text-xl tracking-tight">
                                Delete Property Permanently?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Body className="py-2">
                            <p className="text-stone-300 text-sm leading-relaxed font-medium">
                                This will permanently remove <strong className="text-red-400 font-bold">{property.title}</strong> from the LodgeLink public marketplace registry. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>

                        <AlertDialog.Footer className="mt-4 flex gap-3">
                            <Button
                                slot="close"
                                className="btn btn-sm bg-transparent border border-emerald-700 text-stone-200 hover:bg-emerald-800 font-bold rounded-xl flex-1"
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={handleDelete}
                                slot="close"
                                className="btn btn-sm bg-red-600 hover:bg-red-700 text-white font-bold border-none rounded-xl flex-1"
                            >
                                Delete Now
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}
