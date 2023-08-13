const API_URL = 'http://127.0.0.1:5007';  // Change to your backend URL

export async function fetchData() {
    const response = await fetch(`${API_URL}/`, {
        mode: 'cors',
        credentials: 'include'
    });
    return response.text();
}
