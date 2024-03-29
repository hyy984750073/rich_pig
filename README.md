## 使用android模拟器（网易mumu模拟器）
1、启动模拟器
2、adb connect 127.0.0.1:7555
酌情使用：adb kill-server   和   adb start-server

## 使用android真机
[1、](https://reactnative.cn/docs/running-on-device)


## 运行项目（以安卓为例）
1、命令：npm run android = npm react-native run-android  或者使用  npm run start  =  npm react-native start
*注意：若是运行项目遇到以下提示
warn No apps connected. Sending "reload" to all React Native apps failed. Make sure your app is running in the simulator or on a phone connected via USB.
1、检查设备是否正常连接（能查到并且显示‘xxxxx  device’）：adb devices
2、运行（好像没用）：./gradlew clean
3、运行：adb reverse tcp:8081 tcp:8081
4、运行：npm run android 或 npm run start

## 使用icon图标：react-native-vector-icons
https://oblador.github.io/react-native-vector-icons/
1、安装：npm i react-native-vector-icons -D
2、项目中引入：import Ionicons from 'react-native-vector-icons/Ionicons'
3、使用：<Ionicons name="ios-logo-snapchat" size={80} color={'#ff0000'} />

有可能还需要做以下配置：
1、打开：rich_pig\android\app\build.gradle
2、添加：
:::demo
```html
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf', 'Ionicons.ttf', 'AntDesign.ttf', 'MaterialCommunityIcons.tff' ]
]
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```
:::

## 打包发布，生成APK包
1、切换到android目录下：cd android
2、在终端输入命令行：./gradlew assembleRelease
注意：rich_pig\android\gradle.properties   的MYAPP_RELEASE_STORE_PASSWORD和MYAPP_RELEASE_KEY_PASSWORD的密码在打包APK的时候才改，平时不发布到github上