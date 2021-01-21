import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Icon, Text } from 'react-native-elements';
import MyCarouel from '../components/MyCarousel';

function Selection({ navigation }) {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.header}>
                <Button
                    title={'go back'}
                    titleStyle={{ color: 'white' }}
                    buttonStyle={{ backgroundColor: 'black' }}
                    icon={<Icon name={'navigate-before'} color={'white'} />}
                    onPress={() => {navigation.goBack()}}
                />
            </View>
            <MyCarouel />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'black',
    },
    header: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "flex-start"
    }
})

export default Selection;