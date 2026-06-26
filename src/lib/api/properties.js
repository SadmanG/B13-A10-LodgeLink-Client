const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

export const getProperties = async () => {
    // Fetches live database records safely over server cycles without caching configurations
    const res = await fetch(`${serverUrl}/properties`, {
        cache: "no-store"
    });
    return res.json();
};
