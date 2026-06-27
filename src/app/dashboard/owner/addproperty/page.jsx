'use client';

import { FieldError, Input, Label, TextField, Select, ListBox, TextArea, Button, Card } from '@heroui/react';
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";
import React from 'react';
import { createProperty } from '@/lib/actions/properties';
import { authClient } from "@/lib/auth-client";

const AddPropertyPage = () => {
    const router = useRouter();

    const { data: session } = authClient.useSession();
    const currentUserId = session?.user?._id || session?.user?.id;

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const baseData = Object.fromEntries(formData.entries());
        const amenities = formData.getAll('amenities[]').filter(item => item.trim() !== '');

        // Map form metrics safely to backend LodgeLink schema
        const propertyData = {
            ...baseData,
            price: Number(baseData.price),
            rating: Number(baseData.rating),
            bathrooms: Number(baseData.bathrooms),
            propertySize: Number(baseData.propertySize),
            amenities: amenities,
            status: "approved", // Keeps listing instantly available for testing public routes
            ownerId: currentUserId
        };

        delete propertyData['amenities[]'];

        // try {
        //     // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/properties`, {
        //     //     method: 'POST',
        //     //     headers: {
        //     //         'content-type': 'application/json',
        //     //     },
        //     //     body: JSON.stringify(propertyData)
        //     // });

        //     const res = await createProperty(propertyData);

        //     if (!res.ok) throw new Error("Failed to post property listing configuration");

        //     toast.success('You have created a Property listing successfully!');

        //     // Safe Client-side route changes
        //     e.target.reset();
        //     router.push('/properties');
        //     //router.refresh();
        // } catch (error) {
        //     console.error(error);
        //     toast.error("An error occurred during submission.");
        // }

        const res = await createProperty(propertyData);

        if (res.insertedId) {
            toast.success('You have created a Property listing successfully!');
            e.target.reset();
            router.push('/properties');
        }
        else {
            console.error("Failed to post property listing configuration");
            toast.error("An error occurred during submission.");
        }
    };

    return (
        <div className="min-h-screen bg-emerald-950 p-4 sm:p-8 flex items-center justify-center font-sans">
            <Card className="w-full max-w-3xl bg-emerald-900/40 border border-emerald-800/60 shadow-2xl p-6 sm:p-10 rounded-3xl backdrop-blur-md">

                {/* Clean Header Area */}
                <div className="mb-8 border-b border-emerald-800/60 pb-5">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        Add A New Property
                    </h1>
                    <p className="text-stone-300 text-sm mt-1 font-medium">
                        Fill out the specifications below to register a new vacation or rental property configuration.
                    </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-6">
                    {/* SECTION 1: Core Identification */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="sm:col-span-2">
                            <TextField name="title" isRequired>
                                <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">Property Name / Title</Label>
                                <Input placeholder="A-Frame Redwoods Sanctuary" className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                                <FieldError className="text-rose-500 text-xs mt-1" />
                            </TextField>
                        </div>

                        <TextField name="location" isRequired>
                            <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">Location / Region</Label>
                            <Input placeholder="California, USA" className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                            <FieldError className="text-rose-500 text-xs mt-1" />
                        </TextField>

                        <div>
                            <Select name="type" isRequired className="w-full pt-2.5" placeholder="Select type">
                                <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">Property Type</Label>
                                <Select.Trigger className="rounded-xl bg-emerald-950 border-emerald-800 text-white">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover>
                                    <ListBox className="bg-emerald-900 text-white rounded-xl border border-emerald-800">
                                        <ListBox.Item id="cabin" textValue="Cabin & Cottage">Cabin & Cottage</ListBox.Item>
                                        <ListBox.Item id="lodge" textValue="Mountain Lodge">Mountain Lodge</ListBox.Item>
                                        <ListBox.Item id="villa" textValue="Luxury Villa">Luxury Villa</ListBox.Item>
                                        <ListBox.Item id="room" textValue="Private Room">Private Room</ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>
                    </div>

                    {/* SECTION 2: Numeric Specifications (Updated with Bathrooms & Property Size) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 bg-emerald-950/40 p-4 rounded-2xl border border-emerald-800/60">
                        <TextField name="price" type="number" isRequired>
                            <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">Nightly Price (USD)</Label>
                            <Input type="number" placeholder="189" className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                            <FieldError className="text-rose-500 text-xs mt-1" />
                        </TextField>

                        <TextField name="beds" type="number" isRequired>
                            <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">Beds Count</Label>
                            <Input type="number" placeholder="3" className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                            <FieldError className="text-rose-500 text-xs mt-1" />
                        </TextField>

                        {/* NEW FIELD 1: Bathrooms */}
                        <TextField name="bathrooms" type="number" isRequired>
                            <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">Bathrooms Count</Label>
                            <Input type="number" step="0.5" placeholder="2" className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                            <FieldError className="text-rose-500 text-xs mt-1" />
                        </TextField>

                        {/* NEW FIELD 2: Property Size */}
                        <TextField name="propertySize" type="number" isRequired>
                            <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">Property Size (sq ft)</Label>
                            <Input type="number" placeholder="1200" className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                            <FieldError className="text-rose-500 text-xs mt-1" />
                        </TextField>

                        <TextField name="rating" type="number" isRequired>
                            <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">
                                Initial Rating (1-5)
                            </Label>
                            <Input
                                type="number"
                                step="0.1"
                                min="1"
                                max="5"
                                placeholder="4.5"
                                className="rounded-xl bg-gray-950 text-white border-emerald-800"
                            />
                            <FieldError className="text-rose-500 text-xs mt-1" />
                        </TextField>
                    </div>

                    {/* SECTION 3: Amenities Utilities Array Grid */}
                    <div className="border-t border-emerald-800/60 pt-5">
                        <Label className="text-teal-400 text-xs font-bold uppercase tracking-wider mb-3 block">
                            Included Utilities & Amenities
                        </Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <TextField name="amenities[]" isRequired>
                                <Input placeholder="Hot Tub" className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                            </TextField>
                            <TextField name="amenities[]" isRequired>
                                <Input placeholder="Indoor Fireplace" className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                            </TextField>
                            <TextField name="amenities[]" isRequired>
                                <Input placeholder="High-Speed Wi-Fi" className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                            </TextField>
                            <TextField name="amenities[]" isRequired>
                                <Input placeholder="Solar Power Hub" className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                            </TextField>
                        </div>
                    </div>

                    {/* SECTION 4: Media & Markdown Descriptions */}
                    <div className="space-y-5 border-t border-emerald-800/60 pt-5">
                        <TextField name="image" isRequired>
                            <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">Display Image URL</Label>
                            <Input type="url" placeholder="https://unsplash.com..." className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                            <FieldError className="text-rose-500 text-xs mt-1" />
                        </TextField>

                        <TextField name="description" isRequired>
                            <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">Overview Description</Label>
                            <TextArea placeholder="Describe the atmosphere, scenery views, proximity to local natural spots..." className="rounded-xl bg-emerald-950 min-h-30 text-white border-emerald-800 p-3 w-full block" />
                            <FieldError className="text-rose-500 text-xs mt-1" />
                        </TextField>
                    </div>

                    {/* Submit Button Block */}
                    <div className="pt-4 border-t border-emerald-800/60">
                        <Button
                            type="submit"
                            className="w-full bg-teal-500 hover:bg-teal-600 text-stone-900 font-extrabold py-4 text-base rounded-xl shadow-lg transition-transform active:scale-[0.99]"
                        >
                            Publish Property Listing
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default AddPropertyPage;
