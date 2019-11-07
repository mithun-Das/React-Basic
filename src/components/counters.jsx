import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {

    state = {
        index: 0,
        counters : [
            { id:  1, value: 0 },
            { id:  2, value: 0 },
            { id:  3, value: 0 },
            { id:  4, value: 0 }
        ]
    }

    // handleIncrement = (id) => {
    //     var updatedCounters = this.state.counters;
    //     updatedCounters[id - 1].value = this.state.counters[id - 1].value + 1;
    //     this.setState({counters: updatedCounters});
    // }

    handleIncrement = (id) => {console.log(id);
        var updatedCounters = this.state.counters; console.log(this.state.counters[id - 1]); console.log(updatedCounters[id - 1]);
        updatedCounters[id - 1].value = this.state.counters[id - 1].value + 1;
        this.setState({ counters: updatedCounters });
    }


    handleReset = () => {
        var updatedCounters = this.state.counters.map( counter => {
            counter.value = 0;
            return counter;
        });
        console.log(updatedCounters);
        this.setState({counters: updatedCounters});
    }

    handleDelete = (id) => {console.log(id);
        var updatedCounters = this.state.counters.filter(counter => counter.id != id);
        this.setState({counters: updatedCounters});console.log(this.state.counters);
    }

    render() {

        console.log('props', this.props);
        this.handleIncrement.bind(this);

        return (
            <div>
                {/* <Counter />
                <Counter/>
                <Counter/>
                <Counter/> */}

                {/* Passing value to child from parent or vice versa solution */}

                {/* {this.state.counters.map(counter => 
                    <Counter key={counter.id} id={counter.id} value={counter.value} onDelete={ this.handleDelete} >
                        <h4>Counter # {counter.id}</h4>
                    </Counter>
                )} */}

                <button className="btn btn-primary" onClick={this.handleReset}> Reset </button>
                {/* {this.state.counters.map(counter =>
                    <Counter onClick={() => this.handleIncrement()} key={counter.id} id={counter.id} value={counter.value} onDelete={() => this.handleDelete(counter.id)} >
                        <h4>Counter # {counter.id}</h4>
                    </Counter>
                )} */}

                {/* <Counter key="1" value={this.state.index} selected="true"></Counter> */}

                {/* Passing value to child from parent or vice versa solution */}



                {/* {this.state.counters.map(counter =>
                    <div>
                        <button onClick={() => this.handleIncrement(counter.id)} key={counter.id} id={counter.id} value={counter.value} onDelete={() => this.handleDelete(counter.id)} >
                            <p>{counter.value}</p>
                            <h4>Counter # {counter.id}</h4>
                        </button>
                    </div>
                )} */}

                {/**************  Single Source of Truth   ****************/}

                    {/**************  Test   ****************/}
                {/* {this.state.counters.map(counter =>
                    <Counter onClick={() => this.handleIncrement()} key={counter.id} id={counter.id} value={counter.value} onDelete={() => this.handleDelete(counter.id)} >
                        <h4>Counter # {counter.id}</h4>
                    </Counter>
                )} */}

                {this.state.counters.map(counter =>
                    <Counter onClick={this.handleIncrement} handleIncrement={this.handleIncrement} key={counter.id} id={counter.id} value={counter.value} onDelete={(id) => this.handleDelete(id)} >
                        <h4>Counter # {counter.id}</h4>
                    </Counter>
                )}


                
            </div>
        )
    }
}

export default Counters;