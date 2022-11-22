import React from "react";
import { View } from "react-native";

const Obstacles = ({
    obstaclesLeft, 
    obstacleWidth, 
    obstacleHeight, 
    gap, 
    randomBottom,
    color,
}) => {

    return(
        <>
            <View style={{
                position: 'absolute',
                backgroundColor: color,
                height: obstacleHeight,
                width: obstacleWidth,
                left: obstaclesLeft,
                bottom: randomBottom + obstacleHeight + gap 
            }}/>
            
            <View style={{
                position: 'absolute',
                backgroundColor: color,
                height: obstacleHeight,
                width: obstacleWidth,
                left: obstaclesLeft,
                bottom: randomBottom - gap,
            }}/>
        </>

    )
}

export default Obstacles