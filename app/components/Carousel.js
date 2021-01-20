import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native';
import {Carousel as SnapCarousel} from 'react-native-snap-carousel-chen';

function Carousel(props) {
    const [activeIndex, setActiveIndex] = useState(0);

    const carouselItems= [
        {
            title:"Item 1",
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

    const _renderItem = (item, index) => {
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 5,
              height: 250,
              padding: 50,}}>
            <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>

        )
    }

    useEffect(() => {
     
    })

    return (
        <SafeAreaView style={{flex: 1, backgroundColor:'rebeccapurple', paddingTop: 200}}>
            <View style={{ flex: 1, flexDirection:'column', justifyContent: 'center', marginTop: 100, alignItems: 'center'}}>
                <SnapCarousel
                layout={"default"}
                data={this.state.carouselItems}
                sliderWidth={300}
                itemWidth={250}
                renderItem={_renderItem}
                onSnapToItem = { index => setActiveIndex(index) } />
            </View>
        </SafeAreaView>
    );
}

export default Carousel;