import TicketCard from "../components/TicketCard";

const Dashboard = () => {
  const tickets = [
    {
      category: "Q1 2022",
      color: "red",
      title: "NFT Safety 101 video",
      owner: "Arjun Ivor",
      avatar: "https://thenounproject.com/browse/icons/term/default-avatar/",
      status: "done",
      priority: 5,
      progress: 40,
      description: "this is a description",
      timestamp: "2023-09-22T05:27:17+0000",
    },
  ];
  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        <TicketCard />
      </div>
    </div>
  );
};
export default Dashboard;
