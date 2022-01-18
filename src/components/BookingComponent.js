import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap'
import { Control, Form, Errors } from 'react-redux-form'
import { Link } from 'react-router-dom'

class Booking extends Component {
    constructor (props) {
        super (props)

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            comments: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        }

        thist.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (values) {
        this.props.postComments(values)
    }

    render () {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <Breadcrumb>
                        <BreadcrumbItem>
                        <Link to = '/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Bookings</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>Appointment Request</h2>
                        <hr />
                    </div>
                </div>

                <div className= 'row row-content align-items center'>
                    <div className='col-sm-4'>
                        <h5>Where To Find Us</h5>
                        <address>
                            123 Fake Street
                            <br />
                            New Westminster, BC
                            <br />
                            Canada
                        </address>
                    </div>
                    <div className='col'>
                        <a role='button' className='btn btn-link' href = 'tel:+11111111'>
                            <i className='fas fa-phone-square'/> 1-111-1111
                        </a>
                        <br />
                        <a role='button' className='btn btn-link' href='mailto:fakeemail@fakeemail.co'>
                            <i className="far fa-paper-plane" /> bookings@rlx.com
                        </a>
                    </div>
                </div>

                <div className='row row-content'>
                    <div className='col-12'>
                        <h2>Service Requests</h2>
                        <hr />
                    </div>
                    <div className='col-md-10'>
                        <Form></Form>
                    </div>
                </div>
            </div>
        )
    }
}