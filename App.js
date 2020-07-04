import { StatusBar } from "expo-status-bar";
import React from "react";
import Loading from "./Loading";
import Weather from "./Weather";
import Error from "./Error";
import CantFindYou from "./CantFindYou";
import * as Location from "expo-location";
import { render } from "react-dom";
import { Alert } from "react-native";
import axios from "axios";

const API_KEY = "159390761ad4d6cb7f3d10600be8d79e";
export default class App extends React.Component {
  state = {
    isLoading: true,
    canGetLocation: true,
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
        name,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
      name,
    });
  };

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("위치설정 켜주세요", "옵션에서 켜줘잉");
      this.setState({
        canGetLocation: false,
      });
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition, canGetLocation, name } = this.state;
    try {
      return isLoading ? (
        canGetLocation ? (
          <Loading />
        ) : (
          <CantFindYou />
        )
      ) : (
        <Weather temp={Math.round(temp)} condition={condition} name={name} />
      );
    } catch (error) {
      Alert.alert("에러!", "뭔가 잘못됐네요.. 앱을 다시 켜주세요. :(");
      return <Error />;
    }
  }
}
