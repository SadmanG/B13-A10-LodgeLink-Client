'use server'

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
export const serverMutation = async (path, data) => {
    const res = await fetch(`${serverUrl}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    // Handle 401, 403, 404

    return res.json();
}