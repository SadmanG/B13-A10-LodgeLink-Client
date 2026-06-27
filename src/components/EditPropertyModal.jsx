"use client";

import { Button, Input, Label, Modal, Surface, TextField, FieldError, Select, ListBox, TextArea } from "@heroui/react";
import { redirect, useRouter } from "next/navigation";
import { BiEdit } from "react-icons/bi";
import toast from "react-hot-toast";
import React from "react";

export function EditPropertyModal({ property }) {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const baseData = Object.fromEntries(formData.entries());
        const amenities = formData.getAll('amenities[]').filter(item => item.trim() !== '');

        // Safely construct numeric properties and structured collections
        const updatedProperty = {
            ...baseData,
            price: Number(baseData.price),
            rating: Number(baseData.rating),
            beds: Number(baseData.beds),
            bathrooms: Number(baseData.bathrooms),
            propertySize: Number(baseData.propertySize),
            amenities: amenities
        };

        delete updatedProperty['amenities[]'];

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/properties/${property._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedProperty)
        });
        router.push('/dashboard/owner/myproperties');
    };

    return (
        <Modal>
            {/* Modal Trigger Action Button Button */}
            <Button
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow-lg active:scale-95 transition-all"
            >
                <BiEdit className="text-lg" />
                Edit
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-2xl bg-emerald-900 text-stone-100 border border-emerald-800 rounded-3xl">
                        <Modal.CloseTrigger className="text-stone-400 hover:text-white" />
                        <Modal.Header>
                            <Modal.Heading className="text-white font-black text-2xl tracking-tight">
                                Edit Current Property Listing
                            </Modal.Heading>
                        </Modal.Header>

                        <Modal.Body className="p-6 overflow-y-auto max-h-[80vh]">
                            <Surface className="bg-transparent">
                                <form onSubmit={onSubmit} className="space-y-6">

                                    {/* SECTION 1: Textual Core Credentials */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="sm:col-span-2">
                                            <TextField defaultValue={property.title} name="title" isRequired>
                                                <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">Property Title</Label>
                                                <Input placeholder="A-Frame Redwoods Sanctuary" className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                                                <FieldError className="text-rose-500 text-xs mt-1" />
                                            </TextField>
                                        </div>

                                        <TextField defaultValue={property.location} name="location" isRequired>
                                            <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">Location / Region</Label>
                                            <Input placeholder="California, USA" className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                                            <FieldError className="text-rose-500 text-xs mt-1" />
                                        </TextField>

                                        <div>
                                            <Select defaultValue={property.type} name="type" isRequired className="w-full" placeholder="Select type">
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

                                    {/* SECTION 2: Financial Configuration Blocks */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 bg-emerald-950/40 p-4 rounded-2xl border border-emerald-800/60">
                                        <TextField defaultValue={property.price} name="price" type="number" isRequired>
                                            <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">Rent Price (USD)</Label>
                                            <Input type="number" placeholder="189" className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                                            <FieldError className="text-rose-500 text-xs mt-1" />
                                        </TextField>

                                        <div>
                                            <Select defaultValue={property.rentType || "Daily"} name="rentType" isRequired className="w-full" placeholder="Select cycle">
                                                <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">Rent Cycle Type</Label>
                                                <Select.Trigger className="rounded-xl bg-emerald-950 border-emerald-800 text-white">
                                                    <Select.Value />
                                                    <Select.Indicator />
                                                </Select.Trigger>
                                                <Select.Popover>
                                                    <ListBox className="bg-emerald-900 text-white rounded-xl border border-emerald-800">
                                                        <ListBox.Item id="Daily" textValue="Daily">Daily</ListBox.Item>
                                                        <ListBox.Item id="Weekly" textValue="Weekly">Weekly</ListBox.Item>
                                                        <ListBox.Item id="Monthly" textValue="Monthly">Monthly</ListBox.Item>
                                                    </ListBox>
                                                </Select.Popover>
                                            </Select>
                                        </div>
                                    </div>

                                    {/* SECTION 3: Numeric Layout Specifications */}
                                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 bg-emerald-950/40 p-4 rounded-2xl border border-emerald-800/60">
                                        <TextField defaultValue={property.beds} name="beds" type="number" isRequired>
                                            <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1 block">Bedrooms</Label>
                                            <Input type="number" placeholder="3" className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                                        </TextField>

                                        <TextField defaultValue={property.bathrooms} name="bathrooms" type="number" isRequired>
                                            <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1 block">Bathrooms</Label>
                                            <Input type="number" step="0.5" placeholder="2" className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                                        </TextField>

                                        <TextField defaultValue={property.propertySize} name="propertySize" type="number" isRequired>
                                            <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1 block">Size (sqft)</Label>
                                            <Input type="number" placeholder="1200" className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                                        </TextField>

                                        <TextField defaultValue={property.rating} name="rating" type="number" isRequired>
                                            <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1 block">Rating</Label>
                                            <Input type="number" step="0.1" placeholder="4.5" className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                                        </TextField>
                                    </div>

                                    {/* SECTION 4: Amenities Array Controls */}
                                    <div className="border-t border-emerald-800/60 pt-5">
                                        <Label className="text-teal-400 text-xs font-bold uppercase tracking-wider mb-3 block">
                                            Included Utilities & Amenities
                                        </Label>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <TextField defaultValue={property.amenities?.[0] || ""} name="amenities[]" isRequired>
                                                <Input placeholder="Hot Tub" className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                                            </TextField>
                                            <TextField defaultValue={property.amenities?.[1] || ""} name="amenities[]" isRequired>
                                                <Input placeholder="Indoor Fireplace" className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                                            </TextField>
                                            <TextField defaultValue={property.amenities?.[2] || ""} name="amenities[]" isRequired>
                                                <Input placeholder="High-Speed Wi-Fi" className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                                            </TextField>
                                            <TextField defaultValue={property.amenities?.[3] || ""} name="amenities[]" isRequired>
                                                <Input placeholder="Solar Power Hub" className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                                            </TextField>
                                        </div>
                                    </div>

                                    {/* SECTION 5: Media & Longform Text Area */}
                                    <div className="space-y-5 border-t border-emerald-800/60 pt-5">
                                        <TextField defaultValue={property.image} name="image" isRequired>
                                            <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">Display Image URL</Label>
                                            <Input type="url" placeholder="https://unsplash.com..." className="rounded-xl bg-emerald-950 text-white border-emerald-800" />
                                            <FieldError className="text-rose-500 text-xs mt-1" />
                                        </TextField>

                                        <TextField defaultValue={property.description} name="description" isRequired>
                                            <Label className="text-stone-300 text-xs font-bold uppercase tracking-wider mb-1.5 block">Overview Description</Label>
                                            <TextArea placeholder="Describe the atmosphere, panoramic views, layout configurations..." className="rounded-xl bg-emerald-950 text-white border-emerald-800 p-3 min-h-25 w-full block" />
                                            <FieldError className="text-rose-500 text-xs mt-1" />
                                        </TextField>
                                    </div>

                                    {/* SECTION 6: Form Operational Update Action */}
                                    <div className="pt-4 border-t border-emerald-800/60">
                                        <Button
                                            type="submit"
                                            className="w-full bg-teal-500 hover:bg-teal-600 text-stone-900 font-extrabold py-3.5 text-base rounded-xl shadow-lg transition-transform active:scale-[0.99]"
                                        >
                                            Save Structural Changes
                                        </Button>
                                    </div>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}
