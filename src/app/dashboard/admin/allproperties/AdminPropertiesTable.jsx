"use client";

import React, { useState } from 'react';
import { Table, Button } from "@heroui/react";
import toast from 'react-hot-toast';

const AdminPropertiesTable = ({ propertiesData }) => {
    // Hold properties in local state to update the UI instantly without page reloads
    const [properties, setProperties] = useState(propertiesData);

    const updateStatus = (propertyId, newStatus) => {
        const updatePayload = { status: newStatus };

        fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/properties/${propertyId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatePayload)
        })
        .then((res) => {
            if (!res.ok) {
                toast.error(`Failed to change status to ${newStatus}`);
                console.error("Server synchronization error handling status modification");
            } else {
                toast.success(`Property listing successfully ${newStatus}!`);
                
                // Update local state instantly so the row state morphs cleanly on screen
                setProperties(prev => 
                    prev.map(item => item._id === propertyId ? { ...item, status: newStatus } : item)
                );
            }
        })
        .catch((error) => {
            console.error(error);
            toast.error("Network communication failure.");
        });
    };

    return (
        <Table className="bg-emerald-900/30 border border-emerald-800/40 rounded-2xl p-2 shadow-2xl">
            <Table.ScrollContainer>
                <Table.Content aria-label="LodgeLink System Property Audits" className="min-w-200 text-stone-200">
                    <Table.Header className="bg-emerald-950 border-b border-emerald-800 text-teal-400 font-bold text-xs uppercase tracking-wider">
                        <Table.Column isRowHeader>Property Title</Table.Column>
                        <Table.Column>Location / Region</Table.Column>
                        <Table.Column>Price Metrics</Table.Column>
                        <Table.Column>Current Status</Table.Column>
                        <Table.Column className="text-center">Moderation Controls</Table.Column>
                    </Table.Header>
                    
                    <Table.Body>
                        {properties.map((property) => (
                            <Table.Row key={property._id} className="border-b border-emerald-900/40 hover:bg-emerald-900/20 transition-colors">
                                
                                {/* 1. Property Name */}
                                <Table.Cell className="font-bold max-w-55 truncate">
                                    {property.title}
                                </Table.Cell>
                                
                                {/* 2. Location details */}
                                <Table.Cell className="font-medium text-sm">
                                    {property.location}
                                </Table.Cell>
                                
                                {/* 3. Property Details (Price / Night) */}
                                <Table.Cell className="font-mono font-bold text-sm">
                                    ${property.price} / nt
                                </Table.Cell>
                                
                                {/* 4. Status indicator display layout */}
                                <Table.Cell>
                                    <span className={`badge border-none font-black text-[10px] uppercase tracking-wider px-2.5 py-2 rounded-md ${
                                        property.status === 'approved' ? 'bg-teal-400 text-stone-900' :
                                        property.status === 'rejected' ? 'bg-red-500 text-white' :
                                        'bg-amber-400 text-stone-900 animate-pulse'
                                    }`}>
                                        {property.status || 'pending'}
                                    </span>
                                </Table.Cell>
                                
                                {/* 5. DYNAMIC STATE MODERATION CONTROLS */}
                                <Table.Cell className="flex items-center justify-center gap-3 min-w-50">
                                    {/* STATE A: If Approved -> Show option to Reject again */}
                                    {property.status === 'approved' && (
                                        <Button 
                                            onClick={() => updateStatus(property._id, 'rejected')}
                                            className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs px-4 py-1.5 rounded-xl transition-all shadow active:scale-95 w-28"
                                        >
                                            Reject
                                        </Button>
                                    )}

                                    {/* STATE B: If Rejected -> Show option to Approve again */}
                                    {property.status === 'rejected' && (
                                        <Button 
                                            onClick={() => updateStatus(property._id, 'approved')}
                                            className="bg-teal-500 hover:bg-teal-600 text-stone-900 font-extrabold text-xs px-4 py-1.5 rounded-xl transition-all shadow active:scale-95 w-28"
                                        >
                                            Approve
                                        </Button>
                                    )}

                                    {/* STATE C: If Pending / Default -> Show BOTH options side by side */}
                                    {(property.status === 'pending' || !property.status) && (
                                        <>
                                            <Button 
                                                onClick={() => updateStatus(property._id, 'approved')}
                                                className="bg-teal-500 hover:bg-teal-600 text-stone-900 font-extrabold text-xs px-4 py-1.5 rounded-xl transition-all shadow active:scale-95 flex-1"
                                            >
                                                Approve
                                            </Button>
                                            <Button 
                                                onClick={() => updateStatus(property._id, 'rejected')}
                                                className="bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs px-4 py-1.5 rounded-xl transition-all shadow active:scale-95 flex-1"
                                            >
                                                Reject
                                            </Button>
                                        </>
                                    )}
                                </Table.Cell>

                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
        </Table>
    );
};

export default AdminPropertiesTable;
