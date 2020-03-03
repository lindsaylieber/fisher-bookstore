import React from "react";
import { AuthorRow } from "./AuthorRow";

export function AuthorDisplay(props) {
    return (
        <div className="display">
            <h3>Authors</h3>
            <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>            
                {props.authors.map(a => (
               <AuthorRow author={a} key={a.id}/>
            ))}
            </tbody>
          </table>
        </div>
    );
}