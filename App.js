import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Bird from './componets/Bird';
import Obstacles from './componets/Obstacles';

export default function App() {

  const screen = Dimensions.get("screen")
  const width = screen.width;
  const height = screen.height;
  const birdLeft = width / 2;
  const [birdBottom, setBirdBottom] = useState(height/2);
  const [obstaclesLeft, setObstaclesLeft] = useState(width);  
  const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(width + width/2 + 30);  
  const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0)
  const [obstaclesNegHeightTwo, setObstacleNegHeightTwo] = useState(0)
  const gravity = 6;
  let gameTimerId;
  let obstaclesLeftTimerId;
  let obstaclesLeftTimerIdTwo;
  const obstacleHeight = 450;
  const gap = 120;
  const obstacleWidth = 60;

  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom(birdBottom => birdBottom - gravity)
      }, 10)

      return () => {
        clearInterval(gameTimerId)
      }

    }
  }, [birdBottom])

  useEffect(() => {
    if (obstaclesLeft > -obstacleWidth) {
      obstaclesLeftTimerId = setInterval(() => {
        setObstaclesLeft(obstaclesLeft => obstaclesLeft - 6)
      }, 10)

      return () => {
        clearInterval(obstaclesLeftTimerId)
      }

    } else {
      setObstaclesLeft(width)
      setObstaclesNegHeight( - Math.random() * 80)
    }
  }, [obstaclesLeft])


  useEffect(() => {
    if (obstaclesLeftTwo > -obstacleWidth) {
      obstaclesLeftTimerIdTwo = setInterval(() => {
        setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 6)
      }, 10)

      return () => {
        clearInterval(obstaclesLeftTimerIdTwo)
      }

    } else {
      setObstaclesLeftTwo(width)
      setObstacleNegHeightTwo( - Math.random() * 80)
    }
  }, [obstaclesLeftTwo])

  useEffect(() => {
    if(birdLeft + 51 > (obstaclesLeft + 31) && birdBottom + 204 < obstacleHeight + obstaclesNegHeight + gap && birdLeft < obstaclesLeft + obstacleWidth) {
      console.log("collission")
      console.log(obstacleHeight + obstaclesNegHeight + gap, birdBottom + 286)
      gameOver()
    }
  },)

  const gameOver = () => {
    clearInterval(gameTimerId)
    clearInterval(obstaclesLeftTimerId)
    clearInterval(obstaclesLeftTimerIdTwo)
  }

  const jump = () => {
    if (birdBottom + 60 <= height){
      setBirdBottom(birdBottom + 100)
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={jump}
    >
        <View style={styles.container}>
        <Bird 
          birdBottom={birdBottom}
          birdLeft={birdLeft}
        />
        <Obstacles 
          color={'yellow'}
          obstacleHeight={obstacleHeight}
          obstacleWidth={obstacleWidth}
          obstaclesLeft={obstaclesLeft}
          randomBottom={obstaclesNegHeight}
          gap={gap}
        />

        <Obstacles 
          color={'green'}
          obstacleHeight={obstacleHeight}
          obstacleWidth={obstacleWidth}
          obstaclesLeft={obstaclesLeftTwo} 
          randomBottom={obstaclesNegHeightTwo}
          gap={gap}
        />      

      </View>

    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
