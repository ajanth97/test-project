# Test React Native Project

## Screenshots

The following screenshots were captured on an iPhone X
                                                                                                                          
<img src=https://user-images.githubusercontent.com/50458502/144909440-98edf53e-6cfa-4f59-8d28-4f1e941579c9.PNG width="250"> | <img src=https://user-images.githubusercontent.com/50458502/144910857-d95f4b41-3a84-4f37-9fd2-770bdabe5a2e.PNG width="250"> | <img src=https://user-images.githubusercontent.com/50458502/144911055-a179f7f7-0256-4a3d-91b9-2c87cfc5832c.PNG width="250"> 


## Installing the app on an android device via an APK file
Use the following link to download the APK file for your android device :
https://expo.dev/accounts/ajanth97/projects/test-project/builds/8f0d1c3c-8f7e-4a78-af1d-de4f700e1449

## Setting up the Development Enviroment 

1. Make sure you have the expo cli installed in your development enviroment. If not follow the instructions [here](https://docs.expo.dev/get-started/installation/)
2. If you are using a package manager such as yarn. run the following to install dependencies :
```
yarn install
```
3. Run the following to start your development server :
```
yarn start
```
4. Follow the instuctions on the browser to run the app on your device using the [expo go app](https://expo.dev/client) or an emulator.

## About the start of development of this app

- I started this project using the `expo init` command and selected the option with typescript and react navigation. This generated boilerplate code which was the starting point of this project.

- I adopted the file, folder stucture and naming conventions.
 
- I removed the tab naviagtion and used a stack naviagtion since this app doesn't require any tabs. 

- I took advantage of the React hooks provided by this boilerplate code to enable auto dark mode in this app.


## Design decisions
### User profile navigation
The user profile screen in the sample image provided for this project was a small modal, however I used a stack based naviagtion for this. The reason for this is because I was asked to take advantage of react naviagtion and if everything took place in the same screen then there wouldnt be any use of using react navigation. Another reason for this is because most apps that we use such as Instagram and Facebook follow this pattern of stack based naviagtion to view a profile. This also enables the slide from the left to go back on iOS. Hence I thought it would be most intituitve to use this approach.
### Offline support
One of the requirements of this project was to ensure offline support. In order to achieve this, during the splash screen load I fetch the data from the API and store it in localStorage and also add the data to a Context. In the case that the fetch fails I use data from the localStorage to update my context. The child components will read from the context. This assumes that the very first fetch of the app will be successful for the initial fetching of data. Also note that during offline the user avatars wouldn't be visible since this wasn't a requirement of the project.

### Using FlatList for the scrolling of user cards

Although this list is small and a scroll view would have worked just fine, inorder to prepare the app for a growing longer list I used FlatList for performance reasons.

### Responsiveness

In order to ensure responsivness I used components from the [React Native Paper](https://reactnativepaper.com) UI component library. These components are responsive.

### Color selection

I wasn't given the hex code for the color, however it looked like teal so I used the following hex code : #00AEAE for the primary color. 

## Testing

I tested this app on the following devices :

- iPhone X (iOS 15.1)
- Xiaomi 9T (Android 10)

It ran fine and without any noticable bugs.

## Improvments

- We could add more typescript typings to make the code more maintainable. Typescript typings were not a requiement of this project so I didn't add all of the typings but it'll be nice to have the project grows.
- Add end to end testing.
- Add caching of user avatars so that the avatars will be visible offline.
- Run performance analysis on the app, looking at metrics such as FPS, RAM usage and CPU usage. Further looking at the behaviour of the UI thread and the JS thread. 
