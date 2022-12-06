## 使用android模拟器（网易mumu模拟器）
1、启动模拟器
2、adb connect 127.0.0.1:7555
酌情使用：adb kill-server   和   adb start-server

## 使用android真机
[1、](https://reactnative.cn/docs/running-on-device)


## 运行项目（以安卓为例）
1、命令：npm run android = npm react-native run-android  或者使用  npm run start  =  npm react-native start
*注意：若是运行npm run start遇到以下提示，则使用npm run android
warn No apps connected. Sending "reload" to all React Native apps failed. Make sure your app is running in the simulator or
on a phone connected via USB.