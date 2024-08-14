// Endpoints to fetch data from the backend

const LOCALHOST = "http://localhost";

const PORT = "8080";

const BASE_URL = `${LOCALHOST}:${PORT}/pace-calculator`;

export const ENDPOINTS = {
    DISTANCE: `${BASE_URL}/distance`,
    SPECIFIEDDISTANCE: `${BASE_URL}/specified-distance`,
    PACE: `${BASE_URL}/pace`,
    TIME: `${BASE_URL}/times`
}