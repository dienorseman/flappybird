import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Bird from './componets/Bird';
import Obstacles from './componets/Obstacles';

export default function App() {

  const screen = Dimensions.get("screen")
  const width = screen.width;
  const height = screen.height;
  const birdLeft = width / 2;
  const [birdBottom, setNirdBottom] = useState(height/2);
  const [obstaclesLeft, setObstaclesLeft] = useState(width);  
  const gravity = 6;
  let gameTimerId;
  let obstaclesLeftTimerId;

  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setNirdBottom(birdBottom => birdBottom - gravity)
      }, 10)

      return () => {
        clearInterval(gameTimerId)
      }

    }
  }, [birdBottom])

  useEffect(() => {
    if (obstaclesLeft > 0) {
      obstaclesLeftTimerId = setInterval(() => {
        setObstaclesLeft(obstaclesLeft => obstaclesLeft - 6)
      }, 10)

      return () => {
        clearInterval(obstaclesLeftTimerId)
      }

    }
  }, [obstaclesLeft])

  return (
    <View style={styles.container}>
      <Bird 
        birdBottom={birdBottom}
        birdLeft={birdLeft}
      />
      <Obstacles />
    </View>
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
