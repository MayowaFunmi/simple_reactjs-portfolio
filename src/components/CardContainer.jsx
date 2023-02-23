import React from 'react';
import Card from './Card';
import './CardContainer.css';
import pokeImage from '../images/pokemon.png';
import calc from '../images/calculator.png';

const CardContainer = () => {
  return (
    <div className="card-container">
      <Card
        title={'Pokemon App'}
        url={'https://pokemon-app-site.netlify.app/'}
        github={'https://github.com/MayowaFunmi/pokemon-app-reactjs'}
        image={pokeImage}
      />
      <Card
        title={'Calculator App'}
        url={'https://rainbow-gumption-002f24.netlify.app/'}
        github={'https://github.com/MayowaFunmi/reactjs-calculator-project'}
        image={calc}
      />
    </div>
  );
};

export default CardContainer;
