import React, { Component } from "react";
import "./Authors.css";
import { AuthorDisplay } from "./AuthorDisplay";

export default class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [
                {
                    id: 1,
                    firstname: "Eric",
                    lastname: "Evans",
                },
                {
                    id: 2,
                    firstname: "Nicole",
                    lastname: "Forsgren",
                },
                {
                    id: 3,
                    firstname: "Stephanie",
                    lastname: "Meyer",
                },
                {
                    id: 4,
                    firstname: "Suzanne",
                    lastname: "Collins",
                },
                {
                    id: 5,
                    firstname: "JK",
                    lastname: "Rowling",
                },
                {
                    id: 6,
                    firstname: "Ernest",
                    lastname: "Hemingway",
                }
            ]
        };
    }

    render() { 
        return (
            <div className="Author">
                <div className="lander">
                    <AuthorDisplay authors={this.state.authors} />
                </div>
            </div>
        );
    }
}