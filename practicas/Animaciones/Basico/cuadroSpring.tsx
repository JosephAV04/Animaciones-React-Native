import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Animated from 'react-native-reanimated';
import { useSharedValue , withSpring} from 'react-native-reanimated';

const Home = () => {
    const height = useSharedValue(100);
    const handlePress = () => {
        height.value = withSpring(height.value + 50);
    }

    return(
        <View style = {styles.container}>
            <Animated.View style={
                {width: 100,
                height: height,
                backgroundColor: '#277587ff',}} />
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
})

export default Home;