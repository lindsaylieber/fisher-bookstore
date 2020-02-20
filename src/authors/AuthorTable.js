import React from "react";

export function AuthorDisplay(props) {
    return (
        <div className= "display">
            <h3>Authors</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Authors</th>
                    </tr>
                </thead>
                <tbody>
                    authorRows = () =>
                    <tr>
                        <td>{props.authors.author}</td>
                    </tr>   
                </tbody>
            </table>
        </div>
    );
}

