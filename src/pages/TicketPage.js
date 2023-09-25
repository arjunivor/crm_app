const TicketPage = () => {
  const editMode = false;

  const handleSubmit = () => {
    console.log("submitted");
  };

  return (
    <div className="ticket">
      <h1>{editMode ? "Update your Ticket" : "Create a Ticket"}</h1>
      <div className="ticket-container">
        <form onSubmit={handleSubmit}>
          <section>
            <label></label>
          </section>
        </form>
      </div>
    </div>
  );
};
export default TicketPage;
