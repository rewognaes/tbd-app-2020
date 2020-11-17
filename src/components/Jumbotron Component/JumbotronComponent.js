import React from 'react';
export const JumbotronComponent = ({ className, jumbotronText, ...props }) => {
    return (
        <div className="jumbotron">
            <br></br>
            <div className="jumbotron" data-testid="jumbotroncomponent">
                <p>{jumbotronText}</p>
            </div>
        </div>
    )
}

export default JumbotronComponent;

/* Example

<JumbotronComponent className="jumbotron"/> */
