import React, { Component } from 'react';

class MenuBar extends Component {


    render () {
        return (
            <div id = "menu-bar">
                {this.props.children}
            </div>
        )}
}

export default MenuBar;