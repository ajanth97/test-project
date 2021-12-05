import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const updateStorage = async (usersData: []) => {
  try {
    await AsyncStorage.setItem('users', JSON.stringify(usersData))
  }
  catch(e){
    console.log("Error updating async storage")
    console.log("App will load with previously loaded data")
  }
}

const fetchUsers = async () => {
  try {
    const response = await fetch(userEndpoint)
    const {data} = await response.json()
    await updateStorage(data)
  }
  catch (e){
    console.log("Error fetching users ! ")
    console.log(e)
  }
}

const userEndpoint = "https://reqres.in/api/users?page=1"
export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });
        //Load data from API
        await fetchUsers()
       /*
        await new Promise(resolve =>{
          console.log("waiting")
          setTimeout(resolve, 2000)})
       */
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
