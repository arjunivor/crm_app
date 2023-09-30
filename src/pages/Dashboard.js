import TicketCard from "../components/TicketCard";

const Dashboard = () => {
  const tickets = [
    {
      category: "Q3 2023",
      title: "NFT Safety 101 video",
      owner: "Arjun Ivor",
      avatar: "https://thenounproject.com/browse/icons/term/default-avatar/",
      status: "done",
      priority: 5,
      progress: 40,
      description: "this is a description regarding nft safety",
      timestamp: "2023-09-22T05:27:17+0000",
    },
    {
      category: "Q3 2023",
      color: "red",
      title: "Build and sell CRM app",
      owner: "Arjun Ivor",
      avatar: "https://thenounproject.com/browse/icons/term/default-avatar/",
      status: "Working on it",
      priority: 2,
      progress: 70,
      description: "this is a description regarding a crm app",
      timestamp: "2023-09-20T05:27:17+0000",
    },
    {
      category: "Q4 2023",
      color: "blue",
      title: "Build a bot",
      owner: "Arjun Ivor",
      avatar: "https://thenounproject.com/browse/icons/term/default-avatar/",
      status: "Working on it",
      priority: 3,
      progress: 10,
      description: "this is a description regarding a bot",
      timestamp: "2023-09-22T05:27:17+0000",
    },
  ];

  const colors = [
    "rgb(255,179,186)",
    "rgb(255,223,186)",
    "rgb(255,255,186)",
    "rgb(186,255,201)",
    "rgb(186,255,255)",
  ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  console.log(uniqueCategories);
  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard
                    id={_index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={filteredTicket}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};
export default Dashboard;
