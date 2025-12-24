# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Language: Chinese
你是一名资深的 React Native 架构兼开发工程师，你拥有非常丰富的 React Native 项目架构，开发，维护，迭代升级经验。

## Project Overview
Science Learning App (LinguaMind) - 一个AI驱动的全场景学习平台，基于科学的记忆算法、智能学习规划和个性化辅导，帮助用户高效学习。

这是一个使用React Native 0.83.1 + TypeScript 5.8.3构建的跨平台移动应用，支持iOS和Android。

## 项目结构

项目采用清晰的分层架构：

```
src/
├── config/          # 设计系统配置（colors, typography, spacing, theme）
├── types/           # TypeScript类型定义（models, api, store）
├── utils/           # 工具函数（date, format, validation）
├── components/      # UI组件
│   ├── common/     # 基础组件（Button, Card, ProgressBar, ProgressRing）
│   ├── learning/   # 学习相关组件
│   ├── review/     # 复习相关组件
│   ├── charts/     # 图表组件
│   └── layout/     # 布局组件
├── screens/         # 页面组件
├── navigation/      # 导航配置
├── store/           # Zustand状态管理
├── services/        # 业务服务
├── database/        # SQLite本地数据库
└── api/             # API服务
```

## 设计系统

项目严格遵循UI设计大纲实现了完整的设计系统：

**色彩系统** (src/config/colors.ts):
- 主色调: #4A90E2（沉稳蓝）
- 功能色: 成功#52C41A/警告#FAAD14/错误#F5222D/AI#722ED1
- 支持浅色/深色主题

**字体系统** (src/config/typography.ts):
- 字体: PingFang SC
- 字号: h1(24px)/h2(18px)/body(16px)/caption(14px)/small(12px)

**间距系统** (src/config/spacing.ts):
- 间距: xs(4)/sm(8)/md(12)/lg(16)/xl(20)/xxl(24)
- 圆角: small(6)/medium(8)/large(12)

## 核心技术栈

- **UI框架**: React Native 0.83.1
- **语言**: TypeScript 5.8.3
- **导航**: React Navigation 7.x
- **状态管理**: Zustand
- **本地数据库**: SQLite
- **动画**: React Native Reanimated
- **图表**: Victory Native
- **日期处理**: dayjs

## Tech Stack
- **React Native**: 0.83.1
- **React**: 19.2.0
- **TypeScript**: 5.8.3
- **React Navigation**: Stack and Bottom Tabs navigation (v7.x)
- **Testing**: Jest with react-test-renderer
- **Node**: >=20 (required)

## Common Commands

### Development
```bash
# Start Metro bundler
npm start
# or
yarn start

# Run on iOS
npm run ios
# or
yarn ios

# Run on Android
npm run android
# or
yarn android
```

### iOS-specific Setup
```bash
# Install Ruby dependencies (first time only)
bundle install

# Install CocoaPods dependencies (run after any native dependency changes)
cd ios && bundle exec pod install && cd ..
```

### Testing
```bash
# Run all tests
npm test
# or
yarn test

# Run tests in watch mode
npm test -- --watch
```

### Code Quality
```bash
# Lint code
npm run lint
# or
yarn lint
```

## Project Structure
- `App.tsx` - Main application entry point with SafeAreaProvider wrapper
- `index.js` - React Native entry point that registers the App component
- `__tests__/` - Jest test files
- `ios/` - iOS native project (Xcode project, Podfile, CocoaPods dependencies)
- `android/` - Android native project (Gradle configuration)

## Architecture Notes

### Current Setup
The app currently uses a basic structure with:
- `SafeAreaProvider` wrapping the entire app for safe area handling
- `StatusBar` configuration based on dark/light mode
- `NewAppScreen` template component from `@react-native/new-app-screen`

### Navigation
React Navigation dependencies are installed:
- `@react-navigation/native` (v7.1.26)
- `@react-navigation/stack` (v7.6.13)
- `@react-navigation/bottom-tabs` (v7.9.0)
- `react-native-screens` and `react-native-gesture-handler` as peer dependencies

Navigation is not yet implemented in the app but libraries are ready to use.

### TypeScript Configuration
- Extends `@react-native/typescript-config`
- Jest types included
- Excludes node_modules and Pods directories

### Styling
- Uses StyleSheet API from React Native
- Implements light/dark mode detection via `useColorScheme`

## Development Guidelines

### iOS Development
- Always run `bundle exec pod install` from the `ios/` directory after installing or updating native dependencies
- The project uses workspace (`.xcworkspace`), not the raw Xcode project
- CocoaPods is managed through Ruby bundler for version consistency

### Android Development
- Gradle is the build system
- Build files are in `android/app/build.gradle`

### Testing
- Tests use Jest preset 'react-native'
- Component tests use `react-test-renderer`
- Tests should use `ReactTestRenderer.act()` for proper async handling

### Code Style
- ESLint configuration extends `@react-native`
- Prettier configuration is at `.prettierrc.js`
- Format is enforced with `@format` comment in files
