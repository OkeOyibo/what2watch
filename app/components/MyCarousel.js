import * as React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel-chen';
import { discoverMovies } from '../services/MovieService';

const { width: screenWidth } = Dimensions.get('window')

export default class MyCarousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          data: [],
          carouselItems: [
          {
              title:"Goku: Midnight Eye",
              text: "Text 1",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          },
          {
              title:"Item 5",
              text: "Text 5",
          },
        ]
      }
    }
    
    componentDidMount() {
        const genres = this.props.genres;
        let response = [];
        let results = [];

        const instance = this;

        function setData(values) {
            instance.setState({data: values})
        };

        async function fetchdata() {
            try {
                response = await discoverMovies(genres);
                results = await response.results;

                setData(results);
            } catch (error) {
                console.log(error)
            }
        };
        if (!this.state.data.length > 0) {
            fetchdata();
        }
    }

    _renderItem({item, index}, parallaxProps){
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.thumbnail }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <Text h4 style={styles.title} numberOfLines={2}>
                    { item.title }
                </Text>
            </View>

        )
    }

    render() {
        return(
            <View style={styles.container}>
                <Carousel
                    sliderWidth={250}
                    sliderHeight={400}
                    itemWidth={200}
                    data={
                        this.state.data.map((item) => {
                            return {
                                title: item.title,
                                thumbnail: item.poster_path
                            }})
                    }
                    renderItem={this._renderItem}
                    hasParallaxImages={true}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: screenWidth / 4
    },
    item: {
        width: 200,
        height: 400,
    },
    imageContainer: {
      flex: 1,
      marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
      backgroundColor: 'black',
      borderRadius: 8,
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      resizeMode: 'contain',
    },
    title: {
        color: 'white',
    }
  })