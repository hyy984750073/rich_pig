// import { Text } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'

const config = {
  screens: {
    Details: 'details/:id',
    CreatePost: 'user',
    Settings: 'settings',
  },
}

const linking = {
  prefixes: [
    /* your linking prefixes */
    'richpig://',
    'https://richpig.com',
    'https://*.richpig.com',
  ],
  config,
}

// const state = {
//   routes: [
//     {
//       name: 'rooms',
//       state: {
//         routes: [
//           {
//             name: 'chat',
//             params: { user: 'jane' },
//           },
//         ],
//       },
//     },
//   ],
// }

// function App() {
//   return (
//     <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
//       {/* content */}
//     </NavigationContainer>
//   )
// }

export default linking
