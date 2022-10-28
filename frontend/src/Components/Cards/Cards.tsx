import { ICardType } from '../../models';
import Card from '../Card/Card'

import './Cards.scss'

interface CardProps {
  cards : ICardType[]
}

const Cards = ({ cards }: CardProps) => {

  return (
    <>
      <div className='cards__container'>
        {cards && cards.map((card) => <Card key={card.id} card={card}/>)}
      </div>
    </>
  );
}

export default Cards;
