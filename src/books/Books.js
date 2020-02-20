import React, { Component } from "react";
import "./Books.css";
//import { CardTitle } from "react-bootstrap/Card";
import { BookDisplay } from "./BookDisplay.js";

export default class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: "Domain Driven Design",
                    author: "Eric Evans",
                    isbn: "978-0321125217"
                },
                {
                    id: 2,
                    title: "Accelerate",
                    author: "Nicole Forsgren",
                    isbn: "978-1942788331"
                },
                {
                    id: 3,
                    title: "Twilight",
                    author: "Stephanie Meyer",
                    isbn: "978-194278544"
                },
                {
                    id: 4,
                    title: "Twilight: New Moon",
                    author: "Stephanie Meyer",
                    isbn: "978-1942788231"
                },
                {
                    id: 5,
                    title: "Twilight: Eclipse",
                    author: "Stephanie Meyer",
                    isbn: "978-1942788221"
                },
                {
                    id: 6,
                    title: "Twilight: Breaking Dawn",
                    author: "Stephanie Meyer",
                    isbn: "978-1942788456"
                },
                {
                    id: 7,
                    title: "Hunger Games",
                    author: "Suzanne Collins",
                    isbn: "978-1942788567"
                },
                {
                    id: 8,
                    title: "Hunger Games: Catching Fire",
                    author: "Suzanne Collins",
                    isbn: "978-1942788328"
                }
            ]
        };
    }

    render() { 
        return (
            <div className="Book">
                <div className="lander">
                    <BookDisplay books={this.state.books} />
                </div>
            </div>
        );
    }
}

