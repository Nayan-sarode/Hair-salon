import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import WebServices, { urls } from "../Services/WebServices";



export default function Services() {

    const navigate = useNavigate();
    const user = useSelector((state) => {
        console.log(state.user)
        return state.user});

    const [selectedServices, setSelectedServices] = useState([]);  // MULTI SELECT
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [msg, setMsg] = useState("");

    const servicesList = [
        { name: "Haircut", price: 100, img: "img/service/service-1.jpg" },
        { name: "Treaming", price: 120, img: "img/service/service-2.jpg" },
        { name: "Shaving", price: 80, img: "img/service/service-3.jpg" },
        { name: "Coloring", price: 70, img: "img/service/service-4.jpg" }
    ];

    // Toggle service selection
    const toggleService = (service) => {
        if (selectedServices.includes(service.name)) {
            // remove
            setSelectedServices(selectedServices.filter(s => s !== service.name));
        } else {
            // add
            setSelectedServices([...selectedServices, service.name]);
        }
    };

    const submitBooking = async () => {
    if (selectedServices.length === 0) {
        setMsg("Please select at least one service");
        return;
    }

    if (!date || !time) {
        setMsg("Please select date and time");
        return;
    }

    if (!user || !user.token) {
        setMsg("You must login to book an appointment");
        return;
    }

    try {
        const bookingData = {
            services: selectedServices,
            date,
            time,
        };

        const response = await WebServices.postAPICall(
            urls.CREATE_BOOKING,
            bookingData,
            user.token
        );

        console.log("Booking Success:", response);
        setMsg("Booking Successful!");
    } catch (error) {
        console.log(error);
        setMsg("Booking failed! Try again.");
    }
    
};



    return (
        <div>
            <section id="services" className="services">
                <div className="container">

                    {/* Heading */}
                    <div className="row mb-5">
                        <div className="col-md-12 text-center mb-5">
                            <div className="heading">
                                <h1>Services</h1>
                                <div className="bord-bot"></div>
                            </div>
                        </div>
                    </div>

                    {/* SERVICE GRID */}
                    <div className="row text-center">
                        {servicesList.map((service, index) => {
                            const isSelected = selectedServices.includes(service.name);
                            return (
                                <div className="col-md-3 col-sm-6" key={index}>
                                    <div
                                        className="service-cont"
                                        onClick={() => toggleService(service)}
                                        style={{
                                            cursor: "pointer",
                                            border: isSelected ? "3px solid green" : "1px solid #ccc",
                                            padding: "5px",
                                            borderRadius: "8px"
                                        }}
                                    >
                                        <img src={service.img} alt="" className="img-fluid" />
                                        <div className="service-desc">
                                            {service.name}
                                            <p>₹{service.price}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* BOOKING FORM */}
                    {selectedServices.length > 0 && (
                        <div className="row mt-5">
                            <div className="col-md-6 offset-md-3 text-center">

                                <h3>Selected Services:</h3>
                                <p><b>{selectedServices.join(", ")}</b></p>

                                <input
                                    type="date"
                                    className="form-control mt-3"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />

                                <input
                                    type="time"
                                    className="form-control mt-3"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />

                                <button
                                    className="btn btn-primary mt-3"
                                    onClick={submitBooking}
                                >
                                    Confirm Booking
                                </button>

                                <button
                                    className="btn btn-danger mt-3 ms-3"
                                    onClick={() => setSelectedServices([])}
                                >
                                    Clear Selection
                                </button>

                                <p className="text-success mt-3">{msg}</p>
                            </div>
                        </div>
                    )}

                </div>
            </section>
        </div>
    );
}
