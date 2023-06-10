import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  componentDidMount() {
    this.textInput.focus();
  }

  handleTextChange(e) {
    this.props.handleTextChange(e.target.value);
  }

  handleCheckboxChange(e) {
    this.props.handleCheckboxChange(e.target.checked);
  }

  render() {
    return (
      <div>
        <div>
        <input
          type="checkbox"
          value=""
          checked={this.props.filterField}
          onChange={this.handleTextChange}
          ref={elem => {
            this.value = elem;
          }}
        />{' '}
        Uncheck All
        </div>
        <div>
        <input
          type="checkbox"
          value="Спортивные товары"
          checked={this.props.filterField}
          onChange={this.handleTextChange}
          ref={elem => {
            this.value = elem;
          }}
        />{' '}
        Спортивные товары
        </div>
        <div>
        <input
          type="checkbox"
          value="Игрушки"
          checked={this.props.filterField}
          onChange={this.handleTextChange}
          ref={elem => {
            this.value = elem;
          }}
        />{' '}
        Игрушки
        </div>
         <div>
        <input
          type="checkbox"
          value="Электроника"
          checked={this.props.filterField}
          onChange={this.handleTextChange}
          ref={elem => {
            this.textInput = elem;
          }}
        />{' '}
        Электроника
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={this.props.showInStockOnly}
              onChange={this.handleCheckboxChange}
            />{' '}
            Only Show In Stock
          </label>
        </div>
        </div>
    );
  }
}

export default Filter;