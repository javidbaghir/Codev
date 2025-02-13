import "../css/ChooseusCard.css"

interface Card {
    icon: React.ReactNode;
    cardTitle: string;
    cardDescription: string;
}
const ChooseusCard = ({icon, cardTitle, cardDescription}: Card) => {
  return (
    <div className="chooseus-card-container">
     <div className="icon"> {icon}</div>
        <p className="title">{cardTitle}</p>
        <p className="text">{cardDescription}</p>
    </div>
  )
}

export default ChooseusCard