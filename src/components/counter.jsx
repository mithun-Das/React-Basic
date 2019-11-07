

import React, { Component } from 'react';

function test() {
    // console.log(this.props);
    //console.log(this);
}

class Counter extends Component {
    
    state = {
        count: 0,
        imageUrl: "https://picsum.photos/200",
        tags: ["tag1", "tag2", "tag3"],
        products: []
    };

    myProperty = {
        x: 0
    };

    styles = {
      fontSize: 90,
      fontWeight: "bold"  
    };


    constructor(props) {
        super(props); 
        this.setState({ count: props.value + 1 });
        this.handleCount = this.handleCount.bind(this);
    }

    handleCount(product) {
        // console.log("Incremented", this);
        // console.log(product);

        this.state.count++;
        this.setState({ count: this.state.count + 1 });
        //this.myProperty.setState({x: this.myProperty.x});
    }

    getBadgeClasses() {
        console.log(this.props);
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    renderProducts() {

        if(this.state.products.length === 0) return <p>There is no products</p>

        return  <ul>
                    {this.state.products.map(product => <li key={product}>{product}</li>)}
                </ul>
    }

    render() {
        test();
        let classes = this.getBadgeClasses();
        console.log('props', this.props);

        // this.setState({ count: this.props.value });

        return (
                <React.Fragment>
                    {this.props.children}
                    <span style={this.styles} className="badge badge-primary m2">{ this.formatCount() }</span>
                    {/* <img src={this.state.imageUrl} alt="" /> */}
                    <h1 className={classes} style={{fontSize: 80}}> Hello World!!! </h1>
                    <button onClick={() => this.props.handleIncrement(this.props.id)} className="btn btn-secondary  btn-sm"> Increment </button>
                    {/* <button onClick={() => this.handleCount({id: 1})} className="btn btn-secondary  btn-sm"> Increment </button> */}
                    <ul>
                    {this.state.tags.map(tag => <li onClick={() => this.handleCount({ id: 1 })} key={tag}>{tag}</li>)}
                    </ul>
                    <div>
                        { this.renderProducts() }
                    </div>
                    <span style={this.styles} className="badge badge-primary m2">{this.myProperty.x}</span>
                <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.id) }>Delete</button>
                {/* <button className="btn btn-danger btn-sm m-2" onClick={ this.props.onDelete }>Delete</button>  */}
                {/***** Error Will happen because id undefined  ***** */}
                </React.Fragment>            
            );
    }

    // formatCount() {
    //     const { count } = this.state;
    //     return count === 0 ? <h1>Zero</h1> : count;
    //     // return this.state.count === 0 ? 'Zero' : this.state.count ;
    // }

    formatCount() {
        const  count  = this.props.value;
        return count === 0 ? <h1>Zero</h1> : count;
        // return this.state.count === 0 ? 'Zero' : this.state.count ;
    }

}

export default Counter;  