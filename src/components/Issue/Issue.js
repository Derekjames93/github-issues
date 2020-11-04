import React from 'react'
import { Link } from 'react-router-dom'
import './Issue.css'

export default function Issue(props) {
    return (
        <div>

            <div className="Issue">
                
                <div>
                
                    <i className="fas fa-exclamation-circle"></i> {props.issueData.title} {props.issueData.labels.map((label) => {
                        return <Link to={`/issues/label/${label.name}`} key={label.id} style={{ backgroundColor: '#' + label.color }} className="span">{label.name}</Link>
                    })}

            <div className="Issue2">
            <p  className="p-text">#{props.issueData.number}</p>

            </div>
                </div>
                <a href={props.issueData.comments_url} className="comments"><i className="fas fa-comments"></i>{props.issueData.comments}</a>
                
            </div>
        
        </div>


    )
}