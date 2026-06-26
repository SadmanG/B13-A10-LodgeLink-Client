'use server'

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
export const createProperty = async (newPropertyData) => {
    const res = await fetch(`${serverUrl}/properties`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPropertyData)
    });

    return res.json();
}