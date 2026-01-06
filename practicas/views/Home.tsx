import React, { use } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import Animated from 'react-native-reanimated';
import { useSharedValue , withSpring, useAnimatedStyle, useAnimatedProps, withTiming} from 'react-native-reanimated';
import { Svg, Circle } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Home = () => {
    const r = useSharedValue<number>(20);

    const handlePress = () => {
        r.value += 7;
    }
    const animatedProps = useAnimatedProps(() => ({
        r: withTiming(r.value)
    }));

    return(
        <View style = {styles.container}>
            <Svg style={styles.circle}>
                <AnimatedCircle 
                    cx={'50%'} 
                    cy={'50%'} 
                    r={r.value}
                    animatedProps={animatedProps} 
                    fill="#277587ff" 
                />
            </Svg>
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
    circle: {
        height: '50%',
        width: '100%'
    }

})

export default Home;