import React, { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, View, Animated, Easing, StatusBar, TouchableOpacity, Image, Switch } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import Categories from '../components/Categories';

function Index(props) {

  const [isSeries, setIsSeries] = useState(true)
  const toggleSwitch = () => setIsSeries(previousState => !previousState);

  let opacityTop = new Animated.Value(0);
  let opacityBottom = new Animated.Value(0);

  const animateTopText = () => {
    opacityTop.setValue(0);
    Animated.timing(opacityTop, {
      toValue: 1,
      duration: 1000,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();
  }

  const animateBottomText = () => {
    opacityBottom.setValue(0);
    Animated.timing(opacityBottom, {
      toValue: 1,
      duration: 1000,
      delay: 400,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start()
  }

  const size = opacityTop.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 50]
  })

  const sizeBtm = opacityBottom.interpolate({
    inputRange: [0, 1],
    outputRange: [250, 40]
  })

  const animatedHeader = [
    styles.header,
    {
      opacityTop,
      top: size
    }
  ]

  const animatedHeaderBtm = [
    styles.header,
    {
      opacityBottom,
      top: sizeBtm,
      opacity: opacityBottom
    }
  ]

useEffect(() => {
  animateTopText();
  animateBottomText();
})

  return (    
    <ImageBackground
      source={require('../assets/bgQuestion.jpg')}
      style={styles.background}
    >
      <StatusBar hidden={false} />
      <View style={styles.headerWrapper}>
        <Animated.View style={animatedHeader}>
            <Text h1 style={[styles.text]}>Don't know</Text>
        </Animated.View>
        <Text h4 style={[styles.header, {color: 'lightgrey', top: 45}]}>what to</Text>
        <Animated.View style={animatedHeaderBtm}>
            <Text h1 style={styles.text}>WATCH</Text>
        </Animated.View>
      </View >
        <View style={styles.toggle}>
          <Text style={styles.text}>Movies</Text>
          <Switch
            trackColor={{ false: "white", true: "white" }}
            thumbColor={"red"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isSeries}
          />
          <Text style={styles.text}>Series</Text>
        </View>
        <Categories />
    </ImageBackground>     
  );    
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: 'flex-start',
    alignItems: "flex-start",
    paddingTop: 250,
    paddingLeft: 40,
    paddingRight: 40
  },
  headerWrapper: {
    position: "absolute",
    top: 0,
    height: 100,
    width: '100%',
    paddingLeft: 40,
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  header: {
    color: 'white',
    top: 0,
  },
  toggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
    width: '100%'
  },
  text: {
    color: 'white',
  },
});
export default Index;