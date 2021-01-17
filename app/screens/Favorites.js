import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

function Favorites(props) {
    return (
        <SafeAreaView style={styles.background}>
                    <ScrollView
                        style={styles.detailScroll}
                        contentContainerStyle={{alignItems: "center", paddingTop: 20}}
                    >
                        <View style={styles.detailScrollHeader}>
                            <Text h1 style={styles.detailScrollHeaderText}>
                                FAVORITES
                            </Text>
                            <Icon name={"favorite-border"} color={"white"} style={styles.detailScrollHeaderIcon}/>
                        </View>
                        <View style={styles.detailScrollBox}>
                            <Text>Test</Text>
                        </View>
                        <View style={styles.detailScrollBox}>
                            <Text>Test</Text>
                        </View>
                        <View style={styles.detailScrollBox}>
                            <Text>Test</Text>
                        </View>
                        <View style={styles.detailScrollBox}>
                            <Text>Test</Text>
                        </View>
                        <View style={styles.detailScrollBox}>
                            <Text>Test</Text>
                        </View>
                        <View style={styles.detailScrollBox}>
                            <Text>Test</Text>
                        </View>
                        <View style={styles.detailScrollBox}>
                            <Text>Test</Text>
                        </View>
                        <View style={styles.detailScrollBox}>
                            <Text>Test</Text>
                        </View>
                    </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        height: "100%",
        width: "100%",
        backgroundColor: "red",
    },
    detailScroll: {
        backgroundColor: "red",
    },
    detailScrollHeader: {
        width: "100%",
        height: 80,
        flexDirection: "row",
        justifyContent: "center"
    },    
    detailScrollHeaderText: {
        color: "white",
        fontWeight: "normal",
        fontSize: 40,
    },
    detailScrollHeaderIcon: {
        transform: [{rotate: '20deg'}],
    },
    detailScrollBox: {
        backgroundColor: "whitesmoke",
        width: 260,
        height: 370,
        marginBottom: 40
    }
})

export default Favorites;