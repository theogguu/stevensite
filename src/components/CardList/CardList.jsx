import Card from '../Card/Card';

const CardList = ({ cards, openModalAndSetContent }) => {
  return (
    <>
      {cards.map((card, index) => (
        <Card key={index} dataCyName={`project-card-${index}`} {...card} onClick={() => openModalAndSetContent(card.modalContent)} />
      ))}
    </>
  );
};

export default CardList;
