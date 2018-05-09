class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.item.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

var App = () => (
  <div>
  <h1>Grocery List</h1>
  <GroceryList item={['carrots', 'peas', 'pickles']}/>
  </div>
);

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

