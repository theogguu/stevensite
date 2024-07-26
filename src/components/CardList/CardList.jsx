import Card from '../Card/Card';

const CardList = ({ cards, openModalAndSetContent }) => {
  return (
    <>
      {cards.map((card, index) => (
        <Card key={index} dataCyName={`project-card-${index}`} {...card} 
        onClick={() => 
          {if (card.modalContent) 
            {openModalAndSetContent(card.modalContent)}}
          }
        hoverable={card.modalContent ? true : false}
        />
      ))}
    </>
  );
};

export default CardList;
