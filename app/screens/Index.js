import React, { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, View, Animated, Easing, StatusBar } from 'react-native';
import { Button, Icon, Text } from 'react-native-elements';
import SwitchSelector from 'react-native-switch-selector';
import Categories from '../components/Categories';

function Index() {

  
  let opacityTop = new Animated.Value(0);
  let opacityBottom = new Animated.Value(0);
  let switchValue = "m";

  const [categories, setCategories] = useState(null);
  const [animated, setAnimated] = useState(false);

  const getCategories = (values) => {
    setCategories(values);
    console.log(values);
  }

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
    }).start(() => { setAnimated(true) })
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

  const switchOptions = [
    { label: "Movies", value: "m"},
    { label: "Series", value: "s" }
  ]

useEffect(() => {
  if (!animated) {
    animateTopText();
    animateBottomText();
  }
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
          <SwitchSelector
            onPress={(value) => {switchValue = value}}
            initial={0}
            buttonColor={'red'}
            backgroundColor={'black'}
            borderColor={'white'}
            textColor={'white'}
            selectedColor={'black'}
            options={switchOptions}
            borderWidth={0}
          />
        </View>
          <Categories getValues={getCategories}/>
        <View style={styles.footerWrapper}>
          <Button
            title={"shuffle"}
            type={"outline"}
            buttonStyle={ {borderColor: 'white', width: 130} }
            titleStyle={ {color: 'white'} }
            icon={<Icon name={"shuffle"} color={'white'} />}
            iconRight
          />
        </View>
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
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: 150
  },
  footerWrapper: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 130,
    width: '100%',  
  },
  text: {
    color: 'white',
  },
});
export default Index;