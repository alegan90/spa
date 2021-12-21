import React, { Component } from 'react';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [
                {
                    id: 0,
                    name: 'Sauna',
                    image: 'assets/images/sauna.jfif',
                    description: "Allow all of your stress to melt away in the warmth of our classic sauna."
                },
                {
                    id: 1,
                    name: 'Baths',
                    image: 'assets/images/manintub.jfif',
                    description: "Enjoy a nice long soak in a bathtub that is far too large for one person and too small for ten."
                },
                {
                    id: 2,
                    name: 'Tea',
                    image: 'assets/images/tea.jfif',
                    description: "Enjoy a mug, or several, of our homegrown, handpicked tea."
                }
            ],
        };
    }
    render() {
        const serviceList = this.state.services.map(service => {
            return (
                <div className="col">
                    <img src={service.image} alt={service.name} />
                    <h2>{service.name}</h2>
                    <p>{service.description}</p>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {serviceList}
                </div>
            </div>
        );
    }
}

export default Services;