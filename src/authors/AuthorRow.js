import React from "react";

export function AuthorRow(props) {
    return (
        <tr >
            <td>{props.author.name}</td>
        </tr>
    );
}

