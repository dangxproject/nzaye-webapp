import React from 'react';
import FeedItem from './feed-item';

class FeedList extends React.Component {
    render() {
        return (
            <div className="mdl-layout__content">
                <div className="App-news-list">
                    <div className="mdl-grid">
                        <FeedItem />
                    </div>
                </div>
            </div>
        );
    }
}

export default FeedList;
