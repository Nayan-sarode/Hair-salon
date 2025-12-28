import { useEffect, useState } from "react";
import WebServices, { urls } from "../Services/WebServices";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [msg, setMsg] = useState("");

  const token = JSON.parse(localStorage.getItem("userData"))?.token;

  const getMyBookings = async () => {
    try {
      const res = await WebServices.getAPICall(urls.GET_MY_BOOKINGS, token);
      if (res.status === 200) {
        setBookings(res.data);
        console.log(res.data);
        if (res.data.length === 0) setMsg("No bookings found");
      }
    } catch (err) {
      console.log(err);
      setMsg("Failed to load bookings");
    }
  };

  useEffect(() => {
    getMyBookings();
  }, []);

  return (
    <div className="container mt-5">
      <h2
        className="text-center mb-4"
        style={{ fontWeight: "bold", color: "#27ae60" }}
      >
        My Bookings
      </h2>

      {msg && <h5 className="text-danger text-center">{msg}</h5>}

      <div className="table-responsive shadow rounded" style={{ background: "#fff" }}>
        <table className="table table-hover table-bordered">
          <thead style={{ background: "#27ae60", color: "white" }}>
            <tr className="text-center">
              <th>#</th>
              <th>Services</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b, index) => (
              <tr key={b._id} className="text-center">
                <td>{index + 1}</td>
                <td>{b.services.join(", ")}</td>
                <td>{b.date}</td>
                <td>{b.time}</td>
                <td>
                  <span
                    className={`badge ${
                      b.status === "confirmed"
                        ? "badge-success"
                        : b.status === "pending"
                        ? "badge-warning"
                        : "badge-danger"
                    }`}
                    style={{ fontSize: "14px", padding: "8px" }}
                  >
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
