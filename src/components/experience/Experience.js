/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Deck from './deck/Deck';
import Tag from './tag/Tag';
import './Experience.css';

function Experience() {
    return (
        <div className="Experience" id="Experience">
            <h2 className="Experience-header">
                Here's who I've worked with... ✌️
            </h2>
            <div className="Row">
                <Tag 
                    isDesign={true}
                    tagName="Design"
                />
                <Tag 
                    isEducation={true}
                    tagName="Education"
                />
                <Tag 
                    isService={true}
                    tagName="Service"
                />
                <Tag 
                    isTech={true}
                    tagName="Tech"
                />
            </div>
            <div className="Row">
                <Deck 
                    isEducation={true}
                    jobTitle="Undergraduate Teaching Assistant"
                    date="January, 2020 - Apr, 2020"
                    employer="University of British Columbia"
                    team="Department of Computer Science, CPSC 310"
                    link="https://www.cs.ubc.ca/"
                />
            </div>
            <div className="Row">
                <Deck 
                    isTech={true}
                    jobTitle="Associate Developer"
                    date="May, 2019 - August, 2019"
                    employer="Best Buy Canada Ltd."
                    team="E-Commerce, Accounts Team"
                    link="https://bestbuy.ca/"
                />
                <Deck 
                    isService={true}
                    jobTitle="Barista"
                    date="September, 2018 - Apr, 2019"
                    employer="49th Parallel Coffee Roasters"
                    team="Kitsilano location, Front of House"
                    link="https://49thcoffee.com/"
                />
            </div>
            <div className="Row">
                <Deck 
                    isTech={true}
                    jobTitle="Technology Intern"
                    date="May, 2018 - July, 2018"
                    employer="Asia Pacific Digital Ltd."
                    team="Technology Team"
                    link="https://www.bloomberg.com/profile/company/DIG:AU"
                />
            </div>
            <div className="Row">
                <Deck 
                    isService={true}
                    date="March, 2017 - July, 2017"
                    jobTitle="Barista, Cook"
                    employer="Kopenhagen Coffee"
                    team="Front of House"
                    link="https://www.kopenhagencoffee.com/"
                />
            </div>
            <h2 className="Experience-header">
                & volunteered... 🌈
            </h2>
            <div className="Row">
                <Deck 
                    isTech={true}
                    date="January, 2020 - current"
                    jobTitle="Developer & Designer"
                    employer="Canadian Undergraduate Computer Science Conference"
                    team="Dev & Design Team"
                    link="https://www.cucsc.ca/"
                />
            </div>
            <div className="Row">
                <Deck 
                    isDesign={true}
                    date="June, 2016 - December, 2016"
                    jobTitle="Graphic Designer"
                    employer="24 Hour Race, Kuala Lumpur"
                    team="Design Team"
                    link="https://24hourrace.org/races/kuala-lumpur"
                />
            </div>
        </div>
    );
}

export default Experience;