import React, { Component } from 'react';
import { render } from 'react-dom';

import ProductRow from './ProductRow';
import Filter from './Filter';

import data from './data';
import "./App.css"

const List = props => {
  let rows = [];

  let { filterField, showInStockOnly } = props;

  props.data.forEach(item => {
    //Search Filter
    if (item.category.toLowerCase().indexOf(filterField.toLowerCase()) === -1) {
      return;
    }

    //InStock Only
    if (showInStockOnly && !item.stocked) {
      return;
    }

    rows.push(<ProductRow product={item} key={item.name} />);

  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <h3 className='header'>Products</h3>
          </tr>
        </thead>
        <tbody className='wrapper'>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

class ProductListApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterField: '',
      showInStockOnly: false,
    };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleTextChange(value) {
    this.setState({
      filterField: value
    });
  }

  handleCheckboxChange(checked) {
    this.setState({
      showInStockOnly: checked,
    });
  }

  render() {
    return (
      <div>
        <div>Select filters:</div>
        <Filter
          filterField={this.state.filterField}
          showInStockOnly={this.state.showInStockOnly}
          handleTextChange={this.handleTextChange}
          handleCheckboxChange={this.handleCheckboxChange}
        />
        <List
          data={this.props.data}
          filterField={this.state.filterField}
          showInStockOnly={this.state.showInStockOnly}
        />
      </div>
    );
  }
}

const App = props => <ProductListApp data={props.data} />;

render(<App data={data} />, document.getElementById('root'));
