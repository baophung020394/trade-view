import React from 'react';
import Category from '../CategoryView/CategoryView';
import TabsView from '../TabsView/TabsView';
HomeView.propTypes = {
    
};

function HomeView(props) {
    return (
        <div className="home">
            <Category />
            <TabsView />
        </div>
    );
}

export default HomeView;