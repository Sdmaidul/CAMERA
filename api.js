import axios from 'axios';

export async function getDroneLiveFeedUrl() {
 try {
    const response = await axios.get('https://api.droneservice.com/live-feed');
    return response.data.url;
 } catch (error) {
    console.error('Error fetching live feed URL:', error);
    return null;
 }
}
