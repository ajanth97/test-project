# Test React Native Project

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

## About the development of this app

I started this project using the `expo init` command and selected the option with typescript and react navigation. This generated boilerplate code which was the starting point of this project.

I removed the tab naviagtion and used a stack naviagtion since this app doesn't require any tabs. 

I took advantage of the React hooks provided by this boilerplate code to enable auto dark mode in this app.

## Design decisions
### User profile navigation
The user profile screen in the sample image provided for this project was a small modal, however I used a stack based naviagtion for this. The reason for this is because I was asked to take advantage of react naviagtion and if everything took place in the same screen then there wouldnt be any use of using react navigation. Another reason for this is because most apps that we use such as Instagram and Facebook follow this pattern of stack based naviagtion to view a profile. This also enables the slide from the left to go back on iOS. Hence I thought it would be most intituitve to use this approach.
### Offline support
One of the requirements of this project was to ensure offline support. In order to achieve this, during the splash screen load I fetch the data from the API and store it in localStorage and also add the data to a Context. In the case that the fetch fails I use data from the localStorage to update my context. The child components will read from the context. This assumes that the very first fetch of the app will be successful for the initial fetching of data. Also note that during offline the user avatars wouldn't be visible since this wasn't a requirement of the project.

### Responsiveness

In order to ensure responsivness I used components from the [React Native Paper](https://reactnativepaper.com) UI component library. These components are responsive.

## Testing

I tested this app on the following devices :

- iPhone X
- Xiaomi 9T

It ran fine and without any noticable bugs.

## Improvments

- We could add more typescript typings to make the code more maintainable.
- Add end to end tests.
- Add caching of user avatars so that the avatars will be visible offline.
