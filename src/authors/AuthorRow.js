import React from "react";

export function AuthorRow(props) {
    return (
        <tr >
            <td>{props.author.firstname}</td>
            <td>{props.author.lastname}</td>
        </tr>
    );
}

