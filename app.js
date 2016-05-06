// var Strawberries = () => (
//   <li>strawberries</li>
// );

// var Kale = () => (
//   <li>kale</li>
// );


// var list = ['kale', 'strawberries'];

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      bold: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onMouseEnter() {
   this.setState({
     bold: true
   });
  } 

  onMouseLeave() {
   this.setState({
     bold: !this.state.bold
   });
  } 


  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.bold ? 'bold' : 'none'
    }

    return (
      <li style={style} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    );
  }
}

var GroceryList = (props) => {
  return (
    <ul>
      {props.list.map((item, index) =>
        <GroceryListItem key={index} item={item} />
      )}
    </ul>
  );
};


ReactDOM.render(<GroceryList list={['kale', 'strawberries', 'coconut milk']}/>, document.getElementById('app'));
// var GroceryListItem = (props) => {

//   var onListItemClick = (event) => {
//     console.log('got clicked!!!!!');
//   };


//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.list[0]}</li>
//       <li>{props.list[1]}</li>       
//     </ul>
//   );
// }

// var App = () => (
//   <div>
//     <h2>Grocery List</h2>
//     <GroceryListItem list={['Strawberries', 'Kale']}/>
//   </div>
// );








// // TODO
// var groceryItems = ['kale', 'cucumber', 'cookies', 'dried mango', 'falafel'];

// var GroceryList = () => (
//   <div>
//     <h2>Grocery List</h2>
//     <List items={makeList(groceryItems)}/> 
//   </div>   
// );



// var List = (props) => (
//   <ul>
//     {props.items} 
//   </ul>
// );

// var Cucumber = () => (
//   <li>Cucumber</li>
// );

// var Cookie = () => (
//   <li>Cookie</li>
// );

// var GroceryListItem = (props) => {
//   var onListItemClick = (event) => {
//     console.log('clicked yo');
//   }
//   return (
//     <li onClick={onListItemClick}>{props.item}</li>
//   );
// };


// var makeList = (items) => {
//   return items.map(function(item) {
//     return(<GroceryListItem item={item} />);
//   });
// };

//   ReactDOM.render(<GroceryList />, document.getElementById("app"));
//   // ReactDOM.render(<List />, document.getElementById("list"));