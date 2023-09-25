import { useState } from "react";

const TicketPage = () => {
  const [formData, setFormData] = useState({
    status: "not started",
    progress: 0,
    timestamp: new Date().toISOString(),
  });
  const editMode = false;

  const handleSubmit = () => {
    console.log("submitted");
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(formData);

  return (
    <div className="ticket">
      <h1>{editMode ? "Update your Ticket" : "Create a Ticket"}</h1>
      <div className="ticket-container">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.title}
            />
            <label htmlFor="description">description</label>
            <input
              id="description"
              name="description"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.title}
            />
          </section>
        </form>
      </div>
    </div>
  );
};
export default TicketPage;
