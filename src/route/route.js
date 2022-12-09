import { StackRouter } from '@react-navigation/native-stack'

import HomeScreen from '@views/HomeScreen.js'
import DetailsScreen from '@views/DetailsScreen.js'
import SettingsScreen from '@views/SettingsScreen.js'

const MyApp = StackRouter(
  {
    // This is the RouteConfig:
    Home: {
      screen: HomeScreen,
      path: '',
    },
    Details: {
      screen: DetailsScreen,
      path: 'details/:id',
    },
    Settings: {
      screen: SettingsScreen,
      path: 'settings',
    },
    // Settings: {
    //   // This can be handy to lazily require a screen:
    //   getScreen: () => require('Settings').default,
    //   // Note: Child navigators cannot be configured using getScreen because
    //   // the router will not be accessible. Navigators must be configured
    //   // using `screen: MyNavigator`
    //   path: 'settings',
    // },
  },
  {
    initialRouteName: 'Home',
  },
)

export default MyApp
