import Card from '../Card/Card';

const CardList = ({ cards, openModalAndSetContent }) => {
  let hoverableIndex = 0;
  return (
    <>
      {cards.map((card, index) => (
        <Card 
        key={index} 
        dataCyName={card.modalContent ? `project-card-hoverable-${hoverableIndex++}` : `project-card-unhoverable-${index}`} 
        {...card} 
        onClick={() => 
          {if (card.modalContent) 
            {openModalAndSetContent(card.modalContent)}}
          }
        hoverable={!!card.modalContent}
        />
      ))}
    </>
  );
};

export default CardList;
