import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay'


class App extends React.Component {
    constructor(props) {
        super(props);
        //this is only time we do direct assignment
        this.state = {
            lat : null,
            errorMessage : ''
        };
    }
    state = {
        lat : null,
        errorMessage : ''
    };
    componentDidMount(){
        console.log("My component is mounted")
        window.navigator.geolocation.getCurrentPosition(
            ({coords}) =>{
                this.setState({
                    lat : coords.latitude
                });
            },
            err =>{
                this.setState({
                    errorMessage : err.message
                });
                console.log(err);
            }
        );
    }

    //React says we have to define render!
    render() {

        if(this.state.lat && !this.state.errorMessage){
            return <div>Latitude: {this.state.lat}</div>
        }
        if(!this.state.lat && this.state.errorMessage){
            return <div>Error : {this.state.errorMessage}</div>
        }
        if(!this.state.lat && !this.state.errorMessage){
            return <div>Loading...</div>
        }
    }
}

ReactDOM.render(<App />,document.querySelector('#root'));