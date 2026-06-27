"use client";

import React from 'react';
import { Button, Modal, TextField, Label, Input, TextArea, FieldError } from '@heroui/react';
import { authClient } from "@/lib/auth-client";
import { FaCalendarAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';

export function BookNowModal({ property }) {
    // Pull the active client session payload to autofill tenant definitions safely
    const { data: session } = authClient.useSession();
    const currentUser = session?.user;

    const handleBookingSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const bookingPayload = Object.fromEntries(formData.entries());

        // Construct booking record schema mapping
        const finalBooking = {
            propertyId: property._id,
            propertyTitle: property.title,
            price: property.price,
            tenantId: currentUser?.id || currentUser?._id,
            tenantEmail: currentUser?.email,
            moveInDate: bookingPayload.moveInDate,
            contactNumber: bookingPayload.contactNumber,
            userInfo: bookingPayload.userInfo,
            notes: bookingPayload.notes,
            status: "pending" // Sent to host dashboard requests review pipeline
        };

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(finalBooking)
            });

            if (!res.ok) throw new Error("Failed to post booking request");

            toast.success("Booking Request Sent to Host successfully!");
            // Smoothly click or close state triggers if programmatic controls exist
        } catch (error) {
            console.error(error);
            toast.error("An error occurred trying to place this request.");
        }
    };

    return (
        <Modal>
            {/* The trigger button forcefully stylized using the important modifier to override HeroUI defaults */}
            <Button
                className="bg-teal-500 hover:bg-teal-600 text-stone-900 font-extrabold text-base px-8 py-3 rounded-xl shadow-lg transition-transform active:scale-[0.98] flex items-center gap-2"
            >
                <FaCalendarAlt className="text-sm" /> Book Now
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-xl bg-emerald-900 text-stone-100 border border-emerald-800 rounded-3xl shadow-2xl">
                        <Modal.CloseTrigger className="text-stone-400 hover:text-white" />
                        
                        <Modal.Header>
                            <Modal.Heading className="text-white font-black text-2xl tracking-tight">
                                Reserve {property.title}
                            </Modal.Heading>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <form onSubmit={handleBookingSubmit} className="space-y-5">
                                
                                {/* 1. Move-in Date picker */}
                                <TextField name="moveInDate" type="date" isRequired>
                                    <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">Target Move-in Date</Label>
                                    <Input type="date" className="rounded-xl bg-emerald-950 text-white border-emerald-800 w-full" />
                                    <FieldError className="text-rose-400 text-xs mt-1" />
                                </TextField>

                                {/* 2. Contact Number input field */}
                                <TextField name="contactNumber" type="tel" isRequired>
                                    <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">Contact Phone Number</Label>
                                    <Input placeholder="+1 (555) 000-0000" className="rounded-xl bg-emerald-950 text-white border-emerald-800 w-full" />
                                    <FieldError className="text-rose-400 text-xs mt-1" />
                                </TextField>

                                {/* 3. User Info input field (Autofilled with full name safely if user session mounts) */}
                                <TextField defaultValue={currentUser?.name || ""} name="userInfo" isRequired>
                                    <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">Tenant Full Name / Info</Label>
                                    <Input placeholder="Enter your full name" className="rounded-xl bg-emerald-950 text-white border-emerald-800 w-full" />
                                    <FieldError className="text-rose-400 text-xs mt-1" />
                                </TextField>

                                {/* 4. Additional Notes input block */}
                                <TextField name="notes">
                                    <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">Additional Notes / Special Requests</Label>
                                    <TextArea placeholder="Specify if you require late check-in options, dietary adjustments, pet permissions..." className="rounded-xl bg-emerald-950 text-white border-emerald-800 p-3 min-h-22.5 w-full block" />
                                </TextField>

                                {/* Submission CTA block wrapper */}
                                <div className="pt-3 border-t border-emerald-800/60">
                                    <Button
                                        type="submit"
                                        slot="close"
                                        className="w-full bg-teal-500 hover:bg-teal-600 text-stone-900 font-extrabold py-3.5 text-base rounded-xl shadow-md tracking-wide transition-all active:scale-[0.99]"
                                    >
                                        Confirm Reservation Request
                                    </Button>
                                </div>

                            </form>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
