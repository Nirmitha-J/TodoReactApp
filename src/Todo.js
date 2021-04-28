import react, { Component } from 'react';
import { Col, Button, DropdownButton, Dropdown, Row, Alert, Badge } from 'react-bootstrap';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            name: '',
            show: false,
            itemDeleted: '',
        }
        this.addItem = this.addItem.bind(this)
        this.changeItem = this.changeItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setShow = this.setShow.bind(this)

    }

    deleteItem(item) {
        let array = this.state.items.filter(elem => {
            return elem !== item;
        })
        let deletedItem = this.state.items.filter(elem => {
            return elem === item;
        })
        this.setState({
            items: array,
            show: true,
            itemDeleted: deletedItem
        })
    }

    changeItem(e) {
        this.setState({ name: e.target.value })
    }

    addItem() {
        this.setState({
            items: this.state.items.concat(this.state.name),
        })
        this.setState({ name: '' })
    }
    setShow() {
        this.setState({ show: false })
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-dark bg-dark justify-content-center" style={{color: "white", marginBottom: "100px"}}>
                   <h1>TODO APP</h1> 
                </nav>
                <div className="container">
                

                    <input placeholder="Please enter todo item"  style={{marginLeft: "400px"}} onChange={this.changeItem} value={this.state.name}></input>
                    <Button onClick={this.addItem}>Submit</Button>
                    
                    {this.state.items.length > 0 ? <table style={{ width: "100%", borderCollapse: 'collapse' }}>
                        <tr >
                            <th style={{ border: "1px solid black", textAlign: "center" }}>Items</th>
                            <th style={{ border: "1px solid black", textAlign: "center" }}>Delete if completed</th>
                        </tr>
                        {this.state.items.map((item, index) => (
                            <tr>
                                <td style={{ border: "1px solid black", textAlign: "center" }}>{item} </td>
                                <td style={{ border: "1px solid black", textAlign: "center" }}>
                                    <Button variant="primary" onClick={() => this.deleteItem(item)}>
                                        Delete <Badge variant="light">#{index + 1}</Badge>
                                        <span className="sr-only">unread messages</span>
                                    </Button>
                                </td>
                            </tr>

                        ))}
                    </table> : <h4 style={{textAlign:"center", color: "grey", marginTop: "10px"}}>No Todo items</h4>}



                </div>
           </>

        );
    }
}