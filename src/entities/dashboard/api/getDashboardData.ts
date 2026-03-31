export async function getDashboardData() {
    const response = await fetch('http://localhost:8000/api/dashboard');

    if(!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
    }

    return response.json();
}