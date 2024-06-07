const API_BASE_URL = "https://southamerica-east1-codai-development.cloudfunctions.net/codai";

type User = {
    uid: string;
    accessToken: string;
};

function getAuthToken(user: User | null): string | null {
    if (user) {
        const idToken: string = user.accessToken;
        return idToken;
    }
    return null;
}

export async function getChatsByUserId(user: User): Promise<any | null> {
    const authToken = getAuthToken(user);

    if (!authToken) {
        return null;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/chats/user/${user.uid}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
            },
        });
        return response.json();
    } catch (error) {
        console.error('Error fetching chats:', error);
        return null;
    }
}

export async function patchChatTitle(idChat: string, title: string, user: User): Promise<any | null> {
    const authToken = getAuthToken(user);
    const userId = user.uid;

    if (!authToken) {
        return null;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/chats/title/${idChat}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`,
            },
            body: JSON.stringify({
                title,
                userId,
            }),
        });
        return response.json();
    } catch (error) {
        console.error('Error patching chat title:', error);
        return null;
    }
}

export async function deleteChat(chatId: string, user: User): Promise<Response | null> {
    const authToken = getAuthToken(user);

    if (!authToken) {
        return null;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/chats/${chatId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${authToken}`,
            },
        });
        return response;
    } catch (error) {
        console.error('Error deleting chat:', error);
        return null;
    }
}
