import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import DroneLiveFeed from './DroneLiveFeed'; // Adjust the import path as necessary
import { getDroneLiveFeedUrl } from './api'; // If you decide to separate the API call logic

const App = () => {
 const [liveFeedUrl, setLiveFeedUrl] = useState(null);

 useEffect(() => {
    const fetchLiveFeedUrl = async () => {
      const url = await getDroneLiveFeedUrl();
      setLiveFeedUrl(url);
    };

    fetchLiveFeedUrl();
 }, []);

 return (
    <View style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
      {liveFeedUrl && <DroneLiveFeed liveFeedUrl={liveFeedUrl} />}
    </View>
 );
};

export default App;
