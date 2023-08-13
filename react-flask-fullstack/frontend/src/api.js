const API_URL = 'http://localhost:5000';  // Change to your backend URL

export async function fetchData() {
    const response = await fetch(`${API_URL}/`, {
        mode: 'cors',
        credentials: 'include'
    });
    return response.text();
}
