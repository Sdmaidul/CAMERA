import React from 'react';
import { View } from 'react-native';
import Video from 'react-native-video';

const DroneLiveFeed = ({ liveFeedUrl }) => {
 return (
    <View style={{  width: 300, height: 300 }}>
      <Video
        source={{ uri: liveFeedUrl }}
        style={{  width: 300, height: 300  }}
        resizeMode="cover"
        onError={(error) => console.error('Video error:', error)}
      />
    </View>
 );
};

export default DroneLiveFeed;
