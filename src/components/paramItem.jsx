import React from 'react';

class ParamItem extends React.Component {
    render() {
      return <div class="param-item">
        <label for={this.props.queryName}>{this.props.queryName}</label>
        <div className="param-item-input-wrapper">
        <input className="param-item-input" id={this.props.queryName} name={this.props.queryName} type="text" value={this.props.value}/>
        <button type="button" className="param-item-button">💾</button></div> 
      </div>;
    }
  }


export default ParamItem;