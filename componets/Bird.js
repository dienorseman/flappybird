import React from "react";
import { View} from "react-native";

const Bird = ({birdBottom,birdLeft}) => {
    let birdWidth = 50
    const birdHeight = 60
    return(
        <View style={{
        position: 'absolute',
        backgroundColor: 'blue',
        width: birdWidth,
        height: birdHeight,
        bottom: birdBottom - (birdHeight/2),   
        left: birdLeft - (birdHeight/2),
        borderRadius: 25
        }} />
    )
}

export default Bird;