import { Link, Link } from "react-router-dom";
import AvatarDisplay from "./AvatarDisplay";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = () => {
  return (
    <div className="ticket-card">
      <div className="ticket-color"></div>
      <Link>
        <h3>title</h3>
        <AvatarDisplay />
        <StatusDisplay />
        <PriorityDisplay />
        <ProgressDisplay />
      </Link>
      <DeleteBlock />
    </div>
  );
};
export default TicketCard;
