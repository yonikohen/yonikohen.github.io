import React, { Component, useState } from 'react';
import Header from '../layout/Header';
// import Form from '../layout/Form';
// import Table from '../layout/Table';
import DatePicker from 'react-datepicker';
import Moment from 'react-moment';
// import 'moment-timezone';
import 'react-datepicker/dist/react-datepicker.css';

const customers = [
    {
        name: 'Nina',
        date: new Date().toLocaleString()
    },
    {
        name: 'Jon',
        date: new Date().toLocaleString()
    }
];

function Reservations() {
    const [data, setData] = useState(customers);
    const [date, changeDate] = useState(new Date());

    return (
        <React-Fragment>
            <Header />
            <h1>Reservations</h1>
            <div className="row">
                <div className="col">
                    <form
                        onSubmit={body => {
                            // setData([{ name: 'Jon', date: new Date() }]);
                            body.preventDefault();
                            const formData = new FormData(body.target);

                            console.log(formData.get('datey'));

                            // deconstructing props
                            const newCustomerLlist = data;
                            newCustomerLlist.push({
                                name: formData.get('name'),
                                date: formData.get('datey')
                            });
                            setData(newCustomerLlist);

                            console.log(data);
                        }}
                    >
                        <div className="form-group row text-center">
                            <div className="col">
                                <h3>Make a Reservation</h3>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">
                                Name:
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    id="name"
                                    placeholder="Enter full-name"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">
                                Date:
                            </label>
                            <div className="col-sm-10">
                                <DatePicker
                                    name="datey"
                                    className="form-control"
                                    selected={date}
                                    onChange={val => {
                                        changeDate(val);
                                        console.log('date', date);
                                    }}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-sm-10">
                                <button
                                    type="submit"
                                    className="btn"
                                    // onClick={onSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <td>
                                    <h3>Current Reservations</h3>
                                </td>
                            </tr>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(customer => {
                                return (
                                    <React-Fragment>
                                        <tr>
                                            <td>{customer.name}</td>
                                            <td>
                                                {/* https://www.npmjs.com/package/react-moment  */}
                                                <Moment format="MM/DD/YYYY">
                                                    {customer.date}
                                                </Moment>
                                            </td>
                                        </tr>
                                    </React-Fragment>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </React-Fragment>
    );
}

export default Reservations;
