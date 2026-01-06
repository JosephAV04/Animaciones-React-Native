import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Animated from 'react-native-reanimated';
import { useSharedValue , withSpring, useAnimatedStyle} from 'react-native-reanimated';

const Home = () => {
    const translateY = useSharedValue<number>(1);
    const translateX = useSharedValue<number>(1);

    const handlePress = () => {
        translateY.value += 5;
        translateX.value += 5;
    }
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateY: withSpring(translateY.value), translateX: withSpring(translateX.value)}],
    }));

    return(
        <View style = {styles.container}>
            <Animated.View style={[styles.box, animatedStyles]} />
            <Button onPress={handlePress} title="Click me" />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',        
    },
    box: {
        width: 120,
        height: 120,
        backgroundColor: '#277587ff',
        borderRadius: 10,
    },

})

export default Home;