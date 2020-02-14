import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './src/components/Weather';

import fetchWeather from './src/actions/weatherClient';

export default class App extends Component {
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        fetchWeather(position.coords.latitude, position.coords.longitude)
        .then(res => {
          this.setState({
            temperature: res.main.temp,
            weatherCondition: res.weather[0].main,
            isLoading: false
          });
        });
      },
      error => {
        this.setState({ error: 'Error getting weather conditions' });
      }
    );
  }

  render() {
    const { isLoading, temperature, weatherCondition } = this.state;

    return (
      <View style={styles.container}>
        {isLoading
          ? <Text>Fetching the weather</Text>
          : <Weather weather={weatherCondition} temperature={temperature} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff'
  }
});
