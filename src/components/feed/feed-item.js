import React from 'react';

class FeedItem extends React.Component {
    render() {
        return (
            <div className="mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                <h5><a target="_blank" href="/">title</a></h5>
                desc
            </div>
        );
    }
}

export default FeedItem;
