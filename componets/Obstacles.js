import React from "react";
import { View } from "react-native";

const Obstacles = () => {
    const obstacleWidth = 60;
    const obstacleHeight = 300;
    return(
        <View style={{
            position: 'absolute',
            backgroundColor: 'green',
            height: obstacleHeight,
            width: obstacleWidth
        }} />
    )
}

export default Obstacles