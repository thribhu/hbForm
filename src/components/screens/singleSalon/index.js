import React, {Component} from 'react';
import {Container, Body, Header, Text, Button, Card, CardItem,} from 'native-base';
import _ from 'lodash';
import {connect} from 'react-redux';
import {salons_google, userLocationUpdate} from '../../../actions/userLocation';

class SingleSalon extends Component {
    async componentDidMount() {
        
        await navigator.geolocation.getCurrentPosition(
            (position) => {
                let lat = position.coords.latitude;
                let long = position.coords.longitude;
                pos = {
                    lat: lat,long: long
                }
                this.props.userLocationUpdate(pos)
                this.props.salons_google(lat, long)
                console.log(this.props.googleSalons)
            },
            (err) => {
                return err
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        )
      
        }

        render() {
            return(
                <Container/> 
            )
        }
        
}

const mapStateToProps = ({location}) => {
    const {googleSalons} = location
    return {googleSalons}
}

export default connect(null, {salons_google, userLocationUpdate})(SingleSalon);