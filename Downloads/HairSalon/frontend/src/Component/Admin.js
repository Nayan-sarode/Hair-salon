import { useEffect, useState } from "react";
import WebServices, { urls } from "../Services/WebServices";

export default function Admin() {
  const [bookings, setBookings] = useState([]);
  const [msg, setMsg] = useState("");

  const token = JSON.parse(localStorage.getItem("userData"))?.token;

  const getBookings = async () => {
    try {
      const res = await WebServices.getAPICall(urls.ADMIN_ALL_BOOKINGS, token);
      setBookings(res.data);
      setMsg("");
    } catch {
      setMsg("Failed to load bookings");
    }
  };

  const updateStatus = async (id) => {
    try {
      const res = await WebServices.updateAPICall(
        urls.ADMIN_UPDATE_BOOKING(id),
        { status: "confirmed" },
        token
      );
      if (res.status === 200) {
        alert("Status Updated Successfully!");
        getBookings(); // refresh
      }
    } catch {
      alert("Failed to update status");
    }
  };

  useEffect(() => {
    getBookings();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" style={{ fontWeight: "bold", color: "#27ae60" }}>
        Salon Bookings
      </h2>

      {msg && <h5 className="text-danger text-center">{msg}</h5>}

      <div className="table-responsive shadow-lg rounded" style={{ background: "#fff" }}>
        <table className="table table-hover table-bordered">
          <thead style={{ background: "#27ae60", color: "white" }}>
            <tr className="text-center">
              <th>#</th>
              <th>Client ID</th>
              <th>Services</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b, index) => (
              <tr key={b._id} className="text-center">
                <td>{index + 1}</td>

                {/* Client Name + Email */}
                <td>
                  {b.clientId?.name}
                  <br />
                  <small className="text-muted">{b.clientId?.email}</small>
                </td>

                {/* Services Array */}
                <td>{b.services.join(", ")}</td>

                <td>{b.date}</td>
                <td>{b.time}</td>

                <td>
                  <span
                    className={`badge ${b.status === "confirmed"
                        ? "badge-success"
                        : "badge-warning"
                      }`}
                    style={{ fontSize: "14px", padding: "8px" }}
                  >
                    {b.status}
                  </span>
                </td>

                <td>
                  {b.status === "pending" ? (
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => updateStatus(b._id)}
                    >
                      Accept
                    </button>
                  ) : (
                    <span className="text-success fw-bold">✔ Done</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}
