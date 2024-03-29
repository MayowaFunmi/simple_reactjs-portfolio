import React from 'react';
import Card from './Card';
import './CardContainer.css';
import pokeImage from '../images/pokemon.png';
import calc from '../images/calculator.png';
import cbt from '../images/cbt.png';
import django_portfolio from '../images/django-portfolio.png';
import portfolio from '../images/portfolio.png';
import ruby_basecamp from '../images/ruby_basecamp.png';
import yelp from '../images/yelp.png';
import weConnect from '../images/we_connect_api.png';
import school_app from '../images/school-project.png';

const CardContainer = () => {
  return (
    <div>
      <center>
        <h2>My Projects</h2>
      </center>
      <div className="card-container">
      <Card
          title={'School Management App'}
          url=""
          github={'https://github.com/MayowaFunmi/school-management-project'}
          image={school_app}
          text="A web app for management of staffs, students and academic records and information in schools
            Tech stack: C#, .NET Entity Framework, Reactjs, Typescript, Postgresl
          "
        />
      <Card
          title={'WeConnectAPI APP'}
          url=""
          github={'https://github.com/MayowaFunmi/WeConnectAPI'}
          image={weConnect}
          text="A marketplace app being built specifically to connect certain subject teachers/tutors to potential students. Also sellers/service providers can connect with potential buyers/customers of their products on the app.
            Tech stack: .NET API (using MediatR CQRS architecture) for backend and Reactjs frontend
          "
        />
        <Card
          title={'React Portfolio App'}
          url={'https://elegant-bubblegum-fed2f1.netlify.app/'}
          github={'https://github.com/MayowaFunmi/simple_reactjs-portfolio'}
          image={portfolio}
          text="My Portfolio App created using Reactjs. It is simply meant to display my personal projects and links to each projects"
        />
        <Card
          title={'Pokemon App'}
          url={'https://pokemon-app-site.netlify.app/'}
          github={'https://github.com/MayowaFunmi/pokemon-app-reactjs'}
          image={pokeImage}
          text="A reactjs project that comsumes pokemon API urls to display all available pokemons and the data stats for each. Technologies used: Reactjs, Redux, React Material UI"
        />
        <Card
          title={'Calculator App'}
          url={'https://rainbow-gumption-002f24.netlify.app/'}
          github={'https://github.com/MayowaFunmi/reactjs-calculator-project'}
          image={calc}
          text="A basic calculator app created using reactjs. Technology used: Reactjs, css"
        />
        <Card
          title={'Django Portfolio App'}
          url=""
          github={'https://github.com/MayowaFunmi/django-portfolio-app-v2'}
          image={django_portfolio}
          text="Features include display of skills and services i render as a fullstack web developer, showcasing all my web projects with links to each, and other features such fully functional social media blog site and available for use by all users, a weather app, news app (web scraper) ... Technologies used: Python, django, beautifulSoup, HTML, CSS, Javascript, jQuery/Ajax"
        />
        <Card
          title={'Django CBT Exam Online'}
          url=""
          github={'https://github.com/MayowaFunmi/online-exam-hall'}
          image={cbt}
          text="This web app is a fullstack app created using django. It's a platform where examinations can be set and students can write exams (suited for secondary schools). Technologies used: Python, django, HTML, CSS, Javascript, jQuery/Ajax"
        />
        <Card
          title={'Basecamp Project'}
          url=""
          github={'https://github.com/MayowaFunmi/Rails-Basecamp-Project'}
          image={ruby_basecamp}
          text="This project is the first part of qwasar training exercise in fullstack development. It's to mirror the original basecamp website. Technology: Ruby, Ruby on Rails, css"
        />
        <Card
          title={'My Yelp App'}
          url={'https://thriving-medovik-67a05c.netlify.app/login'}
          github={'https://github.com/MayowaFunmi/my_yelp_app'}
          image={yelp}
          text="This project incorporates AWS Amplify into Reactjs application. It's to simply mirror the original yelp app where restaurants can be registered and displayed with location for potential customers. Technology: Reactjs and css for the frontend, AWS Amplify for backend and authentication"
        />
      </div>
    </div>
  );
};

export default CardContainer;
