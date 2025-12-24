# 常用指令：
## 清理构建缓存
```
# 清理 JS 缓存
npx react-native clean-project  # 如果没安装：yarn add -D react-native-clean-project

# 或手动清理
rm -rf node_modules/.cache
watchman watch-del-all
rm -rf /tmp/metro-*

# 清理 iOS
cd ios
rm -rf Pods/ Podfile.lock build ~/Library/Developer/Xcode/DerivedData/app-*
pod cache clean --all
pod install --repo-update
cd ..
```


## IOS 常用命令
```
    cd ios
    pod deintegrate
    rm -rf Pods Podfile.lock build
    pod cache clean --all
    pod install --repo-update
```

## Andorid 常用命令
安装指令：adb install -r app/build/outputs/apk/release/app-release.apk

- npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

<!-- 清除项目所有缓存 -->
- npx react-native clean-project-auto

<!-- 生成与 GraphQL 模式相关的代码 -->
- ./gradlew generateCodegenArtifactsFromSchema
<!-- 重新构建 -->
- npx react-native run-android
- npx react-native start -- --reset-cache

<!-- Clear watchman watches: -->
- watchman watch-del-all

<!-- Remove the cache: -->
- rm -rf /tmp/metro-\*

<!-- Delete node_modules: -->
- rm -rf node_modules

<!-- Install project libraries: -->
- yarn install

<!-- Clean & install project pods: -->
- cd ios && rm -rf Pods Podfile.lock && pod install

<!-- Reset Metro’s cache: -->
- yarn start --reset-cache

<!-- When applying new changes on Android gradle files, it deletes the build folder: -->
- cd android && ./gradlew clean


// 重新安装 Android 依赖
- ./gradlew build --refresh-dependencies
// 清除 JavaScript 构建缓存
- npx react-native start --reset-cache



## Mac 环境配置
| 步骤 | 命令 |
|------|------|
| 1. 编辑 `~/.bash_profile` | `nano ~/.bash_profile` |
| 2. 添加 Flutter PATH | `export PATH="$HOME/development/flutter/bin:$PATH"` |
| 3. 应用更改 | `source ~/.bash_profile` |