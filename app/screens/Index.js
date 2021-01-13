import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, ImageBackground, View, Animated, Easing, StatusBar, TouchableOpacity, Image } from 'react-native';
import { Icon, Text } from 'react-native-elements';

function Index(props) {

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
    outputRange: [0, 110]
  })

  const sizeBtm = opacityBottom.interpolate({
    inputRange: [0, 1],
    outputRange: [250, 90]
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
            <Text h1 style={[styles.title]}>Don't know</Text>
        </Animated.View>
        <Text h4 style={[styles.header, {color: 'lightgrey', top: 100}]}>what to</Text>
        <Animated.View style={animatedHeaderBtm}>
            <Text h1 style={[{color: 'white'}]}>WATCH</Text>
        </Animated.View>
      </View>
      <View style={styles.swipeUp}>
        <Icon
                    reverse
                    name='arrow-upward'
                    color='black' />
        <Text style={styles.text}>Swipe Up</Text>
      </View>
        <View style={[styles.bottomBar]}>
            <TouchableOpacity>
                <Icon
                  reverse
                  name='list'
                  color='black' />
              </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                reverse
                name='favorite-border'
                color='red' />  
            </TouchableOpacity>
        </View>     
    </ImageBackground>     
  );    
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  bottomBar: {
    height: 70,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  swipeUp: {
    position: "absolute",
    bottom: 120
  },
  text: {
    color: 'white',

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
  title: {
    color: 'white'
  },
});
export default Index;