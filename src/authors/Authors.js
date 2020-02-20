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
                    author: "Eric Evans",
                },
                {
                    id: 2,
                    author: "Nicole Forsgren",
                },
                {
                    id: 3,
                    author: "Stephanie Meyer",
                },
                {
                    id: 4,
                    author: "Suzanne Collins",
                },
                {
                    id: 5,
                    author: "JK Rowling",
                },
                {
                    id: 6,
                    author: "F. Scott Fitzgerald",
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