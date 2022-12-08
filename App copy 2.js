import * as React from 'react'
import { Button, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


function HomeScreen({ navigation, route  }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
    navigation.setOptions({
      headerRight: () => ( // 会覆盖Stack.Screen的headerRight
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      ),
    })
  }, [navigation, route.params?.post]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>Count: {count}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
      <Button
        title="Create post"
        color='red'
        onPress={() => navigation.navigate('CreatePost', {name: '写邮件'})}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'My home Updated!' })}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: { post: postText },
            merge: true,
          });
        }}
      />
    </>
  );
}

const Stack = createNativeStackNavigator()

function LogoTitle() {
  return (
    <Image
      style={{ width: 38, height: 38 }}
      source={require('./assets/images/duban.png')}
    />
  );
}

// TODO: export default function App(){}  和  export default class App extends Component{}  有什么区别
export default function App() {
  return (
    <NavigationContainer>
      {/* Stack.Navigator 作用于整个导航（包含多个屏幕
          headerMode：
            float：iOS头部效果
            screen：Android头部效果
            none：不显示头部
          screenOptions：可以声明一些具体的属性,并作用于整个导航
      */}
      <Stack.Navigator
        initialRouteName="Home"
        headerMode={'none'}
        screenOptions={{
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
        {/* Stack.Screen 仅仅作用于当前屏幕
              Options：一些属性配置
         */}
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{ title: '首页' }} /> */}
        <Stack.Screen name="Home" options={{
          title: '首页',
          headerTitle: (props) => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff', // 标题文字颜色
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight:() => (
            <TouchableOpacity onPress={() => alert('逗你呢，没有什么可收藏的~')}>
              <Text>收藏</Text>
            </TouchableOpacity>
          )
        }}>
          {(props) => <HomeScreen {...props} extraData={'123'} />}
        </Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen} initialParams={{ itemId: 42 }} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} options={({ route }) => ({ title: route.params.name })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}