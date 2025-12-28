import axios from "axios";

class WebServices {

    // POST Api Call (Login, Register, Booking etc.)
    postAPICall(url, data, token) {
        return axios.post(url, data, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
                "Content-Type": "application/json"
            }
        });
    }

    // GET Api Call
    getAPICall(url, token) {
        return axios.get(url, {
            headers: {
                Authorization: token ? `Bearer ${token}` : ""
            }
        });
    }

    // DELETE Api Call
    deleteAPICall(url, token) {
        return axios.delete(url, {
            headers: {
                Authorization: token ? `Bearer ${token}` : ""
            }
        });
    }

    // PUT Api Call
    updateAPICall(url, data, token) {
        return axios.put(url, data, {
            headers: {
                Authorization: token ? `Bearer ${token}` : "",
                "Content-Type": "application/json"
            }
        });
    }
}

// 🚀 BASE BACKEND URL
const SERVER = "http://localhost:5000/api";

// 🔗 All ENDPOINT URLs (re-add this!!)
export const urls = {

    // Auth
    LOGIN: `${SERVER}/auth/login`,
    REGISTER: `${SERVER}/auth/register`,

    // Booking
    CREATE_BOOKING: `${SERVER}/bookings`,     // IMPORTANT
    GET_MY_BOOKINGS: `${SERVER}/bookings/my`,

    // Admin
    ADMIN_ALL_BOOKINGS: `${SERVER}/admin/bookings`,
    ADMIN_UPDATE_BOOKING: (id) => `${SERVER}/admin/booking/${id}`,
    ADMIN_DASHBOARD: `${SERVER}/admin/dashboard`,
};

export default new WebServices();
