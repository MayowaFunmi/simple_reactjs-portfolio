import React from 'react';
import Card from './Card';
import './CardContainer.css';
import pokeImage from '../images/pokemon.png';
import calc from '../images/calculator.png';
import cbt from '../images/cbt.png';
import django_portfolio from '../images/django-portfolio.png';
import ruby_basecamp from '../images/ruby_basecamp.png';

const CardContainer = () => {
  return (
    <div>
      <center>
        <h2>My Projects</h2>
      </center>
      <div className="card-container">
        <Card
          title={'Pokemon App'}
          url={'https://pokemon-app-site.netlify.app/'}
          github={'https://github.com/MayowaFunmi/pokemon-app-reactjs'}
          image={pokeImage}
          text=""
        />
        <Card
          title={'Calculator App'}
          url={'https://rainbow-gumption-002f24.netlify.app/'}
          github={'https://github.com/MayowaFunmi/reactjs-calculator-project'}
          image={calc}
          text=""
        />
        <Card
          title={'Django Portfolio App'}
          url=""
          github={'https://github.com/MayowaFunmi/django-portfolio-app-v2'}
          image={django_portfolio}
          text=""
        />
        <Card
          title={'Django CBT Exam Online'}
          url=""
          github={'https://github.com/MayowaFunmi/online-exam-hall'}
          image={cbt}
          text=""
        />
        <Card
          title={'Basecamp Project'}
          url=""
          github={'https://github.com/MayowaFunmi/Rails-Basecamp-Project'}
          image={ruby_basecamp}
          text=""
        />
      </div>
    </div>
  );
};

export default CardContainer;
