# AI学习助手 - React Native 完整架构搭建开发文档

> **文档版本**: V2.0 (完整版)  
> **创建日期**: 2024年12月  
> **作者**: 资深React Native架构工程师  
> **项目代号**: AI-Learning-Assistant-Mobile  
> **特别说明**: 本文档包含所有代码实现，可直接使用

---

## 📋 文档说明

本文档是**完整的、可执行的开发手册**，包含：
- ✅ 所有核心代码实现
- ✅ 完整的配置文件
- ✅ 详细的使用说明
- ✅ 实战开发流程

---

## 目录

1. [项目概览](#1-项目概览)
2. [技术选型分析](#2-技术选型分析)
3. [整体架构设计](#3-整体架构设计)
4. [项目目录结构](#4-项目目录结构)
5. [核心模块完整实现](#5-核心模块完整实现)
6. [数据层完整实现](#6-数据层完整实现)
7. [UI层完整实现](#7-ui层完整实现)
8. [路由与导航完整实现](#8-路由与导航完整实现)
9. [状态管理完整实现](#9-状态管理完整实现)
10. [工具函数完整实现](#10-工具函数完整实现)
11. [配置文件完整实现](#11-配置文件完整实现)
12. [项目初始化完整流程](#12-项目初始化完整流程)
13. [开发规范](#13-开发规范)
14. [迭代开发计划](#14-迭代开发计划)

---

## 1. 项目概览

### 1.1 项目背景

基于产品需求文档，我们需要构建一个**AI驱动的全场景学习平台移动端应用**。

### 1.2 核心功能模块

```
AI学习助手
├── 认证模块 (Auth)
├── 学习中心 (Learning) - 词汇、语法、听力等
├── 记忆强化 (Memory) - SM-2算法驱动的复习系统
├── 学习规划 (Planning) - AI生成学习计划
├── 笔记系统 (Notes) - Markdown编辑
├── AI助手 (AI) - 智能答疑
├── 数据统计 (Analytics)
└── 个人中心 (Profile)
```

---

## 2. 技术选型分析

### 2.1 核心技术栈

```json
{
  "framework": "React Native 0.73.x",
  "language": "TypeScript 5.x",
  "stateManagement": "Redux Toolkit + RTK Query",
  "navigation": "React Navigation 6.x",
  "storage": "SQLite + MMKV + AsyncStorage",
  "networking": "Axios",
  "AI": "OpenAI API"
}
```

### 2.2 完整依赖列表

```json
{
  "dependencies": {
    "react": "18.2.0",
    "react-native": "0.73.0",
    "@reduxjs/toolkit": "^2.0.1",
    "react-redux": "^9.0.4",
    "redux-persist": "^6.0.0",
    "@react-navigation/native": "^6.1.9",
    "@react-navigation/stack": "^6.3.20",
    "@react-navigation/bottom-tabs": "^6.5.11",
    "react-native-screens": "^3.29.0",
    "react-native-safe-area-context": "^4.8.2",
    "react-native-gesture-handler": "^2.14.1",
    "react-native-reanimated": "^3.6.1",
    "react-native-paper": "^5.11.3",
    "react-native-vector-icons": "^10.0.3",
    "react-native-svg": "^14.1.0",
    "react-native-linear-gradient": "^2.8.3",
    "victory-native": "^36.9.2",
    "react-native-mmkv": "^2.11.0",
    "react-native-sqlite-storage": "^6.0.1",
    "@react-native-async-storage/async-storage": "^1.21.0",
    "axios": "^1.6.5",
    "date-fns": "^3.0.6",
    "lodash": "^4.17.21",
    "react-hook-form": "^7.49.3",
    "yup": "^1.3.3",
    "react-native-config": "^1.5.1",
    "react-native-sound": "^0.11.2",
    "@react-native-community/netinfo": "^11.2.1",
    "react-native-fast-image": "^8.6.3"
  },
  "devDependencies": {
    "@types/react": "^18.2.48",
    "@types/react-native": "^0.73.0",
    "@types/lodash": "^4.14.202",
    "@typescript-eslint/parser": "^6.19.0",
    "@typescript-eslint/eslint-plugin": "^6.19.0",
    "eslint": "^8.56.0",
    "prettier": "^3.2.4",
    "@react-native-community/eslint-config": "^3.2.0",
    "@testing-library/react-native": "^12.4.3",
    "jest": "^29.7.0"
  }
}
```

---

## 3. 整体架构设计

### 3.1 三层架构

```
┌───────────────────────────────────┐
│      Presentation Layer           │
│  (Screens + Components + Hooks)   │
└───────────────────────────────────┘
              ↓
┌───────────────────────────────────┐
│      Business Logic Layer         │
│   (Redux Store + Services)        │
└───────────────────────────────────┘
              ↓
┌───────────────────────────────────┐
│         Data Layer                │
│  (API + SQLite + MMKV)            │
└───────────────────────────────────┘
```

---

## 4. 项目目录结构

```
src/
├── api/                    # API接口定义
├── assets/                 # 静态资源
├── components/             # 公共组件
│   ├── common/            # 通用组件
│   ├── learning/          # 学习相关
│   ├── memory/            # 记忆相关
│   └── charts/            # 图表组件
├── config/                # 配置文件
├── contexts/              # Context定义
├── hooks/                 # 自定义Hooks
├── models/                # 数据模型
├── navigation/            # 导航配置
├── screens/               # 页面组件
├── services/              # 业务服务
│   ├── api/              # API服务
│   ├── ai/               # AI服务
│   ├── storage/          # 存储服务
│   └── sync/             # 同步服务
├── store/                 # Redux状态
│   ├── slices/           # Redux Slices
│   └── api/              # RTK Query
├── styles/                # 全局样式
├── types/                 # 类型定义
├── utils/                 # 工具函数
└── App.tsx               # 应用入口
```

---

## 5. 核心模块完整实现

### 5.1 类型定义 (Types & Models)

#### 5.1.1 用户模型

```typescript
// src/models/user.model.ts
export interface User {
  id: string;
  username: string;
  email: string;
  phone?: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  settings?: UserSettings;
  profile?: UserProfile;
}

export interface UserSettings {
  theme: 'light' | 'dark' | 'auto';
  language: 'zh-CN' | 'en-US';
  notifications: {
    study: boolean;
    review: boolean;
    achievement: boolean;
  };
  studyReminder: {
    enabled: boolean;
    time: string; // HH:mm format
  };
}

export interface UserProfile {
  studyGoals: string[];
  currentLevel: string;
  dailyStudyTime: number; // minutes
  consecutiveDays: number;
  totalStudyTime: number; // minutes
  level: number;
}
```

#### 5.1.2 卡片模型

```typescript
// src/models/card.model.ts
export interface Card {
  id: string;
  userId: string;
  frontContent: CardContent;
  backContent: CardContent;
  cardType: 'vocabulary' | 'grammar' | 'custom';
  tags: string[];
  source?: string;
  createdAt: Date;
  updatedAt: Date;
  
  // SM-2 算法数据
  easeFactor: number;
  interval: number;
  repetitions: number;
  nextReviewDate: Date;
  status: 'new' | 'learning' | 'reviewing' | 'mastered';
}

export interface CardContent {
  type: 'text' | 'audio' | 'image' | 'mixed';
  text?: string;
  audioUrl?: string;
  imageUrl?: string;
  html?: string;
}

export interface ReviewHistory {
  id: string;
  cardId: string;
  reviewDate: Date;
  quality: number; // 0-5
  interval: number;
  easeFactor: number;
  duration?: number; // seconds
}
```

#### 5.1.3 词汇模型

```typescript
// src/models/vocabulary.model.ts
export interface Vocabulary {
  id: string;
  word: string;
  phoneticUS?: string;
  phoneticUK?: string;
  meanings: VocabularyMeaning[];
  rootWords?: { [key: string]: string };
  synonyms?: string[];
  antonyms?: string[];
  images?: string[];
  audioUS?: string;
  audioUK?: string;
  difficulty: number; // 1-10
  frequency: number; // 1-10
  tags: string[];
  examples?: string[];
}

export interface VocabularyMeaning {
  partOfSpeech: string; // n. v. adj. etc.
  definition: string;
  definitionCN: string;
  examples: string[];
}
```

#### 5.1.4 学习计划模型

```typescript
// src/models/plan.model.ts
export interface Goal {
  id: string;
  userId: string;
  title: string;
  description?: string;
  goalType: 'exam' | 'skill' | 'habit';
  targetDate?: Date;
  currentProgress: number; // 0-100
  status: 'active' | 'paused' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

export interface LearningPlan {
  id: string;
  goalId: string;
  userId: string;
  title: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  aiGenerated: boolean;
  milestones: Milestone[];
  weeklyTasks: WeeklyTask[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Milestone {
  week: number;
  title: string;
  description: string;
  targetCompletion: number; // 0-1
}

export interface WeeklyTask {
  week: number;
  tasks: Task[];
}

export interface Task {
  id: string;
  planId: string;
  userId: string;
  title: string;
  description?: string;
  taskType: 'vocabulary' | 'listening' | 'review' | 'practice';
  scheduledDate: Date;
  completedAt?: Date;
  estimatedDuration: number; // minutes
  actualDuration?: number;
  status: 'pending' | 'in_progress' | 'completed' | 'skipped';
  priority: 'low' | 'medium' | 'high';
  createdAt: Date;
}
```

#### 5.1.5 笔记模型

```typescript
// src/models/note.model.ts
export interface Note {
  id: string;
  userId: string;
  title: string;
  content: string; // Markdown
  folder?: string;
  tags: string[];
  noteType: 'course' | 'error' | 'insight' | 'general';
  createdAt: Date;
  updatedAt: Date;
  metadata?: {
    wordCount: number;
    readingTime: number; // minutes
    linkedCards?: string[];
  };
}
```

#### 5.1.6 API类型

```typescript
// src/types/api.types.ts
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: ApiError;
}

export interface ApiError {
  code: string;
  message: string;
  details?: any;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  phone?: string;
}
```

### 5.2 配置文件完整实现

#### 5.2.1 常量定义

```typescript
// src/config/constants.ts

// API相关
export const API_CONFIG = {
  BASE_URL: process.env.API_BASE_URL || 'https://api.example.com',
  TIMEOUT: 30000,
  RETRY_TIMES: 3,
  RETRY_DELAY: 1000,
};

// 存储键
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_INFO: 'user_info',
  THEME: 'app_theme',
  LANGUAGE: 'app_language',
  FIRST_LAUNCH: 'first_launch',
};

// 学习相关
export const LEARNING_CONFIG = {
  DEFAULT_DAILY_CARDS: 20,
  MAX_REVIEW_CARDS: 100,
  DEFAULT_STUDY_DURATION: 30, // minutes
  REVIEW_TIME_LIMIT: 30, // seconds per card
};

// SM-2算法配置
export const SM2_CONFIG = {
  INITIAL_EASE_FACTOR: 2.5,
  MIN_EASE_FACTOR: 1.3,
  FIRST_INTERVAL: 1, // days
  SECOND_INTERVAL: 6, // days
  PASSING_GRADE: 3, // 0-5 scale
};

// AI配置
export const AI_CONFIG = {
  MAX_TOKENS: 2000,
  TEMPERATURE: 0.7,
  FREE_DAILY_LIMIT: 10,
  CACHE_EXPIRY: 7 * 24 * 60 * 60 * 1000, // 7 days
};

// 分页配置
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
};

// 错误代码
export const ERROR_CODES = {
  NETWORK_ERROR: 'NETWORK_ERROR',
  AUTH_FAILED: 'AUTH_FAILED',
  TOKEN_EXPIRED: 'TOKEN_EXPIRED',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  SERVER_ERROR: 'SERVER_ERROR',
  NOT_FOUND: 'NOT_FOUND',
};
```

#### 5.2.2 主题配置

```typescript
// src/config/theme.config.ts
import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    primary: '#4A90E2',
    primaryLight: '#5FB3F6',
    primaryDark: '#2C5F8D',
    
    secondary: '#722ED1',
    
    success: '#52C41A',
    warning: '#FAAD14',
    error: '#F5222D',
    info: '#1890FF',
    
    background: '#F7F9FC',
    surface: '#FFFFFF',
    
    textPrimary: '#1A1A1A',
    textSecondary: '#8C8C8C',
    textDisabled: '#BFBFBF',
    
    border: '#E8E8E8',
    divider: '#F0F0F0',
    
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
  
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
  },
  
  borderRadius: {
    sm: 6,
    md: 8,
    lg: 12,
    xl: 16,
    round: 9999,
  },
  
  typography: {
    h1: {
      fontSize: 24,
      fontWeight: '700' as const,
      lineHeight: 32,
    },
    h2: {
      fontSize: 20,
      fontWeight: '600' as const,
      lineHeight: 28,
    },
    h3: {
      fontSize: 18,
      fontWeight: '600' as const,
      lineHeight: 24,
    },
    body: {
      fontSize: 16,
      fontWeight: '400' as const,
      lineHeight: 24,
    },
    bodySmall: {
      fontSize: 14,
      fontWeight: '400' as const,
      lineHeight: 20,
    },
    caption: {
      fontSize: 12,
      fontWeight: '400' as const,
      lineHeight: 16,
    },
  },
  
  shadows: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 4,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 16,
      elevation: 8,
    },
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...lightTheme.colors,
    background: '#1A1A1A',
    surface: '#2A2A2A',
    textPrimary: '#FFFFFF',
    textSecondary: '#B0B0B0',
    border: '#3A3A3A',
    divider: '#303030',
  },
  spacing: lightTheme.spacing,
  borderRadius: lightTheme.borderRadius,
  typography: lightTheme.typography,
  shadows: lightTheme.shadows,
};

export type Theme = typeof lightTheme;
```

### 5.3 Context完整实现

#### 5.3.1 ThemeContext

```typescript
// src/contexts/ThemeContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { lightTheme, darkTheme, Theme } from '../config/theme.config';
import { MMKVStorage } from '../services/storage/MMKVStorage';
import { STORAGE_KEYS } from '../config/constants';

type ThemeMode = 'light' | 'dark' | 'auto';

interface ThemeContextValue {
  theme: Theme;
  themeMode: ThemeMode;
  isDark: boolean;
  setThemeMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const storage = new MMKVStorage();

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [themeMode, setThemeModeState] = useState<ThemeMode>('auto');
  
  // 计算实际使用的主题
  const actualTheme = themeMode === 'auto' 
    ? (systemColorScheme === 'dark' ? 'dark' : 'light')
    : themeMode;
  
  const isDark = actualTheme === 'dark';
  const theme = isDark ? darkTheme : lightTheme;

  // 从存储加载主题设置
  useEffect(() => {
    const savedTheme = storage.getString(STORAGE_KEYS.THEME);
    if (savedTheme) {
      setThemeModeState(savedTheme as ThemeMode);
    }
  }, []);

  const setThemeMode = (mode: ThemeMode) => {
    setThemeModeState(mode);
    storage.setString(STORAGE_KEYS.THEME, mode);
  };

  const toggleTheme = () => {
    const newMode = isDark ? 'light' : 'dark';
    setThemeMode(newMode);
  };

  const value: ThemeContextValue = {
    theme,
    themeMode,
    isDark,
    setThemeMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      <PaperProvider theme={theme}>
        {children}
      </PaperProvider>
    </ThemeContext.Provider>
  );
};
```

### 5.4 Hooks完整实现

#### 5.4.1 useTheme

```typescript
// src/hooks/useTheme.ts
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
```

#### 5.4.2 useAuth

```typescript
// src/hooks/useAuth.ts
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useAppDispatch } from './useAppDispatch';
import { logout as logoutAction } from '../store/slices/authSlice';
import { TokenStorage } from '../services/storage/TokenStorage';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, user, token, loading } = useSelector(
    (state: RootState) => state.auth
  );

  const logout = async () => {
    TokenStorage.clearTokens();
    dispatch(logoutAction());
  };

  return {
    isAuthenticated,
    user,
    token,
    loading,
    logout,
  };
};
```

#### 5.4.3 useNetwork

```typescript
// src/hooks/useNetwork.ts
import { useEffect, useState } from 'react';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

export const useNetwork = () => {
  const [isConnected, setIsConnected] = useState<boolean>(true);
  const [connectionType, setConnectionType] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      setIsConnected(state.isConnected ?? false);
      setConnectionType(state.type);
    });

    return () => unsubscribe();
  }, []);

  return {
    isConnected,
    connectionType,
    isWifi: connectionType === 'wifi',
    isCellular: connectionType === 'cellular',
  };
};
```

#### 5.4.4 useInterval

```typescript
// src/hooks/useInterval.ts
import { useEffect, useRef } from 'react';

export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const tick = () => {
      savedCallback.current?.();
    };

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};
```

#### 5.4.5 useDebounce

```typescript
// src/hooks/useDebounce.ts
import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

---

## 6. 数据层完整实现

### 6.1 本地存储完整实现

#### 6.1.1 TokenStorage

```typescript
// src/services/storage/TokenStorage.ts
import { MMKVStorage } from './MMKVStorage';
import { STORAGE_KEYS } from '../../config/constants';

const storage = new MMKVStorage('secure');

export class TokenStorage {
  static saveToken(token: string, refreshToken: string): void {
    storage.setString(STORAGE_KEYS.AUTH_TOKEN, token);
    storage.setString(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);
  }

  static getToken(): string | undefined {
    return storage.getString(STORAGE_KEYS.AUTH_TOKEN);
  }

  static getRefreshToken(): string | undefined {
    return storage.getString(STORAGE_KEYS.REFRESH_TOKEN);
  }

  static clearTokens(): void {
    storage.delete(STORAGE_KEYS.AUTH_TOKEN);
    storage.delete(STORAGE_KEYS.REFRESH_TOKEN);
  }

  static hasToken(): boolean {
    return storage.contains(STORAGE_KEYS.AUTH_TOKEN);
  }
}
```

#### 6.1.2 MMKVStorage

```typescript
// src/services/storage/MMKVStorage.ts
import { MMKV } from 'react-native-mmkv';

export class MMKVStorage {
  private storage: MMKV;

  constructor(id: string = 'default') {
    this.storage = new MMKV({ id });
  }

  setString(key: string, value: string): void {
    this.storage.set(key, value);
  }

  getString(key: string): string | undefined {
    return this.storage.getString(key);
  }

  setNumber(key: string, value: number): void {
    this.storage.set(key, value);
  }

  getNumber(key: string): number | undefined {
    return this.storage.getNumber(key);
  }

  setBoolean(key: string, value: boolean): void {
    this.storage.set(key, value);
  }

  getBoolean(key: string): boolean | undefined {
    return this.storage.getBoolean(key);
  }

  setObject<T>(key: string, value: T): void {
    this.storage.set(key, JSON.stringify(value));
  }

  getObject<T>(key: string): T | undefined {
    const value = this.storage.getString(key);
    if (!value) return undefined;
    
    try {
      return JSON.parse(value) as T;
    } catch (error) {
      console.error('Failed to parse JSON:', error);
      return undefined;
    }
  }

  delete(key: string): void {
    this.storage.delete(key);
  }

  clearAll(): void {
    this.storage.clearAll();
  }

  getAllKeys(): string[] {
    return this.storage.getAllKeys();
  }

  contains(key: string): boolean {
    return this.storage.contains(key);
  }
}
```

### 6.2 网络请求完整实现

#### 6.2.1 API Client

```typescript
// src/services/api/apiClient.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import { TokenStorage } from '../storage/TokenStorage';
import { store } from '../../store/store';
import { logout } from '../../store/slices/authSlice';
import { API_CONFIG, ERROR_CODES } from '../../config/constants';

class APIClient {
  private instance: AxiosInstance;
  private isRefreshing = false;
  private failedQueue: Array<{
    resolve: (token: string) => void;
    reject: (error: any) => void;
  }> = [];

  constructor() {
    this.instance = axios.create({
      baseURL: API_CONFIG.BASE_URL,
      timeout: API_CONFIG.TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        const token = TokenStorage.getToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        config.headers['X-Request-ID'] = this.generateRequestId();
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

        // Token过期处理
        if (error.response?.status === 401 && !originalRequest._retry) {
          if (this.isRefreshing) {
            return new Promise((resolve, reject) => {
              this.failedQueue.push({ resolve, reject });
            })
              .then((token) => {
                if (originalRequest.headers) {
                  originalRequest.headers.Authorization = `Bearer ${token}`;
                }
                return this.instance(originalRequest);
              })
              .catch((err) => Promise.reject(err));
          }

          originalRequest._retry = true;
          this.isRefreshing = true;

          try {
            const refreshToken = TokenStorage.getRefreshToken();
            if (!refreshToken) {
              throw new Error('No refresh token');
            }

            const response = await this.refreshToken(refreshToken);
            const { token, refreshToken: newRefreshToken } = response.data;

            TokenStorage.saveToken(token, newRefreshToken);
            
            if (originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token}`;
            }

            this.processQueue(null, token);
            return this.instance(originalRequest);
          } catch (refreshError) {
            this.processQueue(refreshError, null);
            TokenStorage.clearTokens();
            store.dispatch(logout());
            return Promise.reject(refreshError);
          } finally {
            this.isRefreshing = false;
          }
        }

        return Promise.reject(this.handleError(error));
      }
    );
  }

  private processQueue(error: any, token: string | null = null): void {
    this.failedQueue.forEach((promise) => {
      if (error) {
        promise.reject(error);
      } else {
        promise.resolve(token!);
      }
    });
    this.failedQueue = [];
  }

  private async refreshToken(refreshToken: string) {
    return this.instance.post('/auth/refresh', { refreshToken });
  }

  private generateRequestId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private handleError(error: AxiosError): Error {
    if (!error.response) {
      return new Error(ERROR_CODES.NETWORK_ERROR);
    }

    const { status, data } = error.response;
    const message = (data as any)?.message || error.message;

    switch (status) {
      case 401:
        return new Error(ERROR_CODES.AUTH_FAILED);
      case 404:
        return new Error(ERROR_CODES.NOT_FOUND);
      case 422:
        return new Error(ERROR_CODES.VALIDATION_ERROR);
      case 500:
        return new Error(ERROR_CODES.SERVER_ERROR);
      default:
        return new Error(message);
    }
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.get<T>(url, config);
    return response.data;
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.post<T>(url, data, config);
    return response.data;
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.put<T>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.delete<T>(url, config);
    return response.data;
  }

  async upload<T>(
    url: string, 
    file: FormData, 
    onProgress?: (progress: number) => void
  ): Promise<T> {
    const response = await this.instance.post<T>(url, file, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        if (onProgress && progressEvent.total) {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          onProgress(percentCompleted);
        }
      },
    });
    return response.data;
  }
}

export const apiClient = new APIClient();
```

### 6.3 SQLite完整实现

#### 6.3.1 数据库初始化

```typescript
// src/services/storage/DatabaseService.ts
import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

export class DatabaseService {
  private static instance: DatabaseService;
  private db: SQLite.SQLiteDatabase | null = null;

  private constructor() {}

  static getInstance(): DatabaseService {
    if (!DatabaseService.instance) {
      DatabaseService.instance = new DatabaseService();
    }
    return DatabaseService.instance;
  }

  async init(): Promise<void> {
    if (this.db) return;

    try {
      this.db = await SQLite.openDatabase({
        name: 'learning_assistant.db',
        location: 'default',
      });

      await this.createTables();
      console.log('Database initialized successfully');
    } catch (error) {
      console.error('Database initialization failed:', error);
      throw error;
    }
  }

  private async createTables(): Promise<void> {
    if (!this.db) throw new Error('Database not initialized');

    const tables = [
      // 用户表
      `CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE,
        phone TEXT UNIQUE,
        avatar_url TEXT,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL
      )`,

      // 学习卡片表
      `CREATE TABLE IF NOT EXISTS cards (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        front_content TEXT NOT NULL,
        back_content TEXT NOT NULL,
        card_type TEXT NOT NULL,
        tags TEXT,
        source TEXT,
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL,
        ease_factor REAL DEFAULT 2.5,
        interval INTEGER DEFAULT 1,
        repetitions INTEGER DEFAULT 0,
        next_review_date INTEGER NOT NULL,
        status TEXT DEFAULT 'learning',
        FOREIGN KEY(user_id) REFERENCES users(id)
      )`,

      // 复习历史表
      `CREATE TABLE IF NOT EXISTS review_history (
        id TEXT PRIMARY KEY,
        card_id TEXT NOT NULL,
        review_date INTEGER NOT NULL,
        quality INTEGER NOT NULL,
        interval INTEGER NOT NULL,
        ease_factor REAL NOT NULL,
        duration INTEGER,
        FOREIGN KEY(card_id) REFERENCES cards(id) ON DELETE CASCADE
      )`,

      // 学习目标表
      `CREATE TABLE IF NOT EXISTS goals (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        goal_type TEXT NOT NULL,
        target_date INTEGER,
        current_progress REAL DEFAULT 0,
        status TEXT DEFAULT 'active',
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL,
        FOREIGN KEY(user_id) REFERENCES users(id)
      )`,

      // 笔记表
      `CREATE TABLE IF NOT EXISTS notes (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        folder TEXT,
        tags TEXT,
        note_type TEXT DEFAULT 'general',
        created_at INTEGER NOT NULL,
        updated_at INTEGER NOT NULL,
        FOREIGN KEY(user_id) REFERENCES users(id)
      )`,

      // 同步队列表
      `CREATE TABLE IF NOT EXISTS sync_queue (
        id TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        entity_type TEXT NOT NULL,
        entity_id TEXT NOT NULL,
        operation TEXT NOT NULL,
        data TEXT NOT NULL,
        created_at INTEGER NOT NULL,
        synced BOOLEAN DEFAULT 0,
        synced_at INTEGER,
        retry_count INTEGER DEFAULT 0,
        FOREIGN KEY(user_id) REFERENCES users(id)
      )`,
    ];

    for (const sql of tables) {
      await this.db.executeSql(sql);
    }

    // 创建索引
    const indexes = [
      'CREATE INDEX IF NOT EXISTS idx_cards_user_id ON cards(user_id)',
      'CREATE INDEX IF NOT EXISTS idx_cards_next_review_date ON cards(next_review_date)',
      'CREATE INDEX IF NOT EXISTS idx_cards_status ON cards(status)',
      'CREATE INDEX IF NOT EXISTS idx_review_history_card_id ON review_history(card_id)',
      'CREATE INDEX IF NOT EXISTS idx_sync_queue_synced ON sync_queue(synced)',
    ];

    for (const sql of indexes) {
      await this.db.executeSql(sql);
    }
  }

  async executeSql(
    sql: string, 
    params: any[] = []
  ): Promise<[SQLite.ResultSet]> {
    if (!this.db) throw new Error('Database not initialized');
    return this.db.executeSql(sql, params);
  }

  async transaction(
    fn: (tx: SQLite.Transaction) => void
  ): Promise<void> {
    if (!this.db) throw new Error('Database not initialized');
    return this.db.transaction(fn);
  }

  async close(): Promise<void> {
    if (this.db) {
      await this.db.close();
      this.db = null;
    }
  }
}
```

### 6.4 SM-2算法完整实现

```typescript
// src/utils/algorithms/sm2.ts
import { Card } from '../../models/card.model';
import { SM2_CONFIG } from '../../config/constants';

export class SM2Algorithm {
  /**
   * 计算下次复习时间
   */
  static calculateNextReview(card: Card, quality: number): Card {
    let { easeFactor, interval, repetitions } = card;

    // 更新难度系数
    easeFactor = Math.max(
      SM2_CONFIG.MIN_EASE_FACTOR,
      easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
    );

    // 评分小于3,重新开始
    if (quality < SM2_CONFIG.PASSING_GRADE) {
      repetitions = 0;
      interval = SM2_CONFIG.FIRST_INTERVAL;
    } else {
      repetitions += 1;

      if (repetitions === 1) {
        interval = SM2_CONFIG.FIRST_INTERVAL;
      } else if (repetitions === 2) {
        interval = SM2_CONFIG.SECOND_INTERVAL;
      } else {
        interval = Math.round(interval * easeFactor);
      }
    }

    // 计算下次复习日期
    const nextReviewDate = new Date();
    nextReviewDate.setDate(nextReviewDate.getDate() + interval);

    // 更新状态
    let status: Card['status'] = 'learning';
    if (repetitions >= 3 && interval >= 21) {
      status = 'mastered';
    } else if (repetitions > 0) {
      status = 'reviewing';
    }

    return {
      ...card,
      easeFactor,
      interval,
      repetitions,
      nextReviewDate,
      status,
    };
  }

  /**
   * 获取今日待复习卡片
   */
  static getTodayReviewCards(cards: Card[]): Card[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return cards.filter(card => {
      const reviewDate = new Date(card.nextReviewDate);
      reviewDate.setHours(0, 0, 0, 0);
      return reviewDate <= today && card.status !== 'mastered';
    });
  }

  /**
   * 按优先级排序复习队列
   */
  static sortReviewQueue(cards: Card[]): Card[] {
    const today = new Date();
    
    return cards.sort((a, b) => {
      const aDaysOverdue = Math.floor(
        (today.getTime() - a.nextReviewDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      const bDaysOverdue = Math.floor(
        (today.getTime() - b.nextReviewDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (aDaysOverdue !== bDaysOverdue) {
        return bDaysOverdue - aDaysOverdue;
      }

      return a.easeFactor - b.easeFactor;
    });
  }

  /**
   * 计算记忆保持率
   */
  static calculateRetentionRate(reviewHistory: any[]): number {
    if (reviewHistory.length === 0) return 0;
    
    const passedReviews = reviewHistory.filter(
      r => r.quality >= SM2_CONFIG.PASSING_GRADE
    );
    
    return (passedReviews.length / reviewHistory.length) * 100;
  }
}
```

---

## 7. UI层完整实现

### 7.1 通用组件完整实现

#### 7.1.1 Button组件

```typescript
// src/components/common/Button/index.tsx
import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  ActivityIndicator, 
  StyleSheet,
  ViewStyle,
  TextStyle 
} from 'react-native';
import { useTheme } from '../../../hooks/useTheme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'danger';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  fullWidth = false,
  icon,
  style,
  textStyle,
}) => {
  const { theme } = useTheme();

  const getButtonStyle = (): ViewStyle => {
    const sizeStyles = {
      small: { paddingHorizontal: 12, paddingVertical: 6, height: 32 },
      medium: { paddingHorizontal: 16, paddingVertical: 12, height: 44 },
      large: { paddingHorizontal: 24, paddingVertical: 16, height: 52 },
    };

    const baseStyle: ViewStyle = {
      ...sizeStyles[size],
      borderRadius: theme.borderRadius.md,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    };

    const variantStyles: Record<string, ViewStyle> = {
      primary: {
        backgroundColor: theme.colors.primary,
        ...theme.shadows.small,
      },
      secondary: {
        backgroundColor: theme.colors.surface,
        borderWidth: 1,
        borderColor: theme.colors.border,
      },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: theme.colors.primary,
      },
      text: {
        backgroundColor: 'transparent',
      },
      danger: {
        backgroundColor: theme.colors.error,
        ...theme.shadows.small,
      },
    };

    return { ...baseStyle, ...variantStyles[variant] };
  };

  const getTextStyle = (): TextStyle => {
    const sizeStyles = {
      small: { fontSize: 14 },
      medium: { fontSize: 16 },
      large: { fontSize: 18 },
    };

    const variantStyles: Record<string, TextStyle> = {
      primary: { color: '#FFFFFF', fontWeight: '600' },
      secondary: { color: theme.colors.textPrimary, fontWeight: '600' },
      outline: { color: theme.colors.primary, fontWeight: '600' },
      text: { color: theme.colors.primary, fontWeight: '500' },
      danger: { color: '#FFFFFF', fontWeight: '600' },
    };

    return { ...sizeStyles[size], ...variantStyles[variant] };
  };

  return (
    <TouchableOpacity
      style={[
        getButtonStyle(),
        fullWidth && styles.fullWidth,
        (disabled || loading) && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'primary' || variant === 'danger' ? '#FFFFFF' : theme.colors.primary} 
        />
      ) : (
        <>
          {icon && <>{icon}</>}
          <Text style={[getTextStyle(), icon && styles.textWithIcon, textStyle]}>
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.5,
  },
  textWithIcon: {
    marginLeft: 8,
  },
});
```

#### 7.1.2 Input组件

```typescript
// src/components/common/Input/index.tsx
import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  Text, 
  StyleSheet, 
  TextInputProps,
  TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../../hooks/useTheme';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: string;
  rightIcon?: string;
  onRightIconPress?: () => void;
  secureTextEntry?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  onRightIconPress,
  secureTextEntry,
  style,
  ...props
}) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const showPassword = secureTextEntry && !isPasswordVisible;

  return (
    <View style={styles.container}>
      {label && (
        <Text style={[styles.label, { color: theme.colors.textPrimary }]}>
          {label}
        </Text>
      )}
      
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: theme.colors.surface,
            borderColor: error 
              ? theme.colors.error 
              : isFocused 
                ? theme.colors.primary 
                : theme.colors.border,
          },
          style,
        ]}
      >
        {leftIcon && (
          <Icon 
            name={leftIcon} 
            size={20} 
            color={theme.colors.textSecondary}
            style={styles.leftIcon}
          />
        )}
        
        <TextInput
          style={[
            styles.input,
            { color: theme.colors.textPrimary },
            leftIcon && styles.inputWithLeftIcon,
          ]}
          placeholderTextColor={theme.colors.textSecondary}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={showPassword}
          {...props}
        />
        
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.rightIcon}
          >
            <Icon
              name={isPasswordVisible ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>
        )}
        
        {!secureTextEntry && rightIcon && (
          <TouchableOpacity
            onPress={onRightIconPress}
            style={styles.rightIcon}
          >
            <Icon
              name={rightIcon}
              size={20}
              color={theme.colors.textSecondary}
            />
          </TouchableOpacity>
        )}
      </View>
      
      {error && (
        <Text style={[styles.errorText, { color: theme.colors.error }]}>
          {error}
        </Text>
      )}
      
      {!error && helperText && (
        <Text style={[styles.helperText, { color: theme.colors.textSecondary }]}>
          {helperText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    height: 48,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: '100%',
  },
  inputWithLeftIcon: {
    marginLeft: 8,
  },
  leftIcon: {
    marginRight: 0,
  },
  rightIcon: {
    marginLeft: 8,
    padding: 4,
  },
  errorText: {
    fontSize: 12,
    marginTop: 4,
  },
  helperText: {
    fontSize: 12,
    marginTop: 4,
  },
});
```

#### 7.1.3 Card组件

```typescript
// src/components/common/Card/index.tsx
import React from 'react';
import { View, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: number;
  onPress?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  variant = 'default',
  padding,
  onPress,
}) => {
  const { theme } = useTheme();

  const getCardStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.lg,
      padding: padding ?? theme.spacing.lg,
    };

    if (variant === 'elevated') {
      return { ...baseStyle, ...theme.shadows.medium };
    }

    if (variant === 'outlined') {
      return {
        ...baseStyle,
        borderWidth: 1,
        borderColor: theme.colors.border,
      };
    }

    return { ...baseStyle, ...theme.shadows.small };
  };

  const content = <View style={[getCardStyle(), style]}>{children}</View>;

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};
```

#### 7.1.4 Loading组件

```typescript
// src/components/common/Loading/index.tsx
import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';

interface LoadingProps {
  text?: string;
  size?: 'small' | 'large';
  overlay?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
  text,
  size = 'large',
  overlay = false,
}) => {
  const { theme } = useTheme();

  const content = (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={theme.colors.primary} />
      {text && (
        <Text style={[styles.text, { color: theme.colors.textPrimary }]}>
          {text}
        </Text>
      )}
    </View>
  );

  if (overlay) {
    return (
      <View style={[styles.overlay, { backgroundColor: theme.colors.overlay }]}>
        {content}
      </View>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    marginTop: 12,
    fontSize: 14,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
});
```

#### 7.1.5 ProgressBar组件

```typescript
// src/components/common/ProgressBar/index.tsx
import React from 'react';
import { View, StyleSheet, Animated, ViewStyle } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';

interface ProgressBarProps {
  progress: number; // 0-1
  height?: number;
  animated?: boolean;
  color?: string;
  backgroundColor?: string;
  style?: ViewStyle;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = 6,
  animated = true,
  color,
  backgroundColor,
  style,
}) => {
  const { theme } = useTheme();
  const progressValue = Math.min(Math.max(progress, 0), 1);
  
  const animatedWidth = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (animated) {
      Animated.timing(animatedWidth, {
        toValue: progressValue * 100,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [progressValue, animated]);

  return (
    <View
      style={[
        styles.container,
        {
          height,
          backgroundColor: backgroundColor || theme.colors.border,
          borderRadius: height / 2,
        },
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.progress,
          {
            height,
            backgroundColor: color || theme.colors.primary,
            borderRadius: height / 2,
            width: animated ? `${animatedWidth}%` : `${progressValue * 100}%`,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  progress: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
```

### 7.2 学习相关组件

#### 7.2.1 FlashCard组件

```typescript
// src/components/memory/FlashCard/index.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../../hooks/useTheme';
import { Card } from '../../../models/card.model';

interface FlashCardProps {
  card: Card;
  onRate: (quality: number) => void;
  showAnswer: boolean;
  onToggleAnswer: () => void;
}

export const FlashCard: React.FC<FlashCardProps> = ({
  card,
  onRate,
  showAnswer,
  onToggleAnswer,
}) => {
  const { theme } = useTheme();
  const flipAnimation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(flipAnimation, {
      toValue: showAnswer ? 180 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [showAnswer]);

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const ratingButtons = [
    { quality: 1, emoji: '😫', label: '完全忘记' },
    { quality: 2, emoji: '😕', label: '模糊记得' },
    { quality: 4, emoji: '😊', label: '还行记得' },
    { quality: 5, emoji: '😄', label: '轻松记住' },
  ];

  return (
    <View style={styles.container}>
      {/* 卡片 */}
      <TouchableOpacity 
        onPress={onToggleAnswer}
        activeOpacity={0.9}
        style={styles.cardTouchable}
      >
        <Animated.View
          style={[
            styles.card,
            {
              backgroundColor: theme.colors.surface,
              transform: [{ rotateY: frontInterpolate }],
            },
            theme.shadows.medium,
          ]}
        >
          <Text style={[styles.cardText, { color: theme.colors.textPrimary }]}>
            {card.frontContent.text}
          </Text>
          {card.frontContent.audioUrl && (
            <TouchableOpacity style={styles.audioButton}>
              <Icon name="volume-high" size={24} color={theme.colors.primary} />
            </TouchableOpacity>
          )}
        </Animated.View>

        <Animated.View
          style={[
            styles.card,
            styles.cardBack,
            {
              backgroundColor: theme.colors.surface,
              transform: [{ rotateY: backInterpolate }],
            },
            theme.shadows.medium,
          ]}
        >
          <Text style={[styles.cardText, { color: theme.colors.textPrimary }]}>
            {card.backContent.text}
          </Text>
        </Animated.View>
      </TouchableOpacity>

      {/* 评分按钮 */}
      {showAnswer && (
        <View style={styles.ratingContainer}>
          <Text style={[styles.ratingTitle, { color: theme.colors.textSecondary }]}>
            你掌握得怎么样?
          </Text>
          <View style={styles.ratingButtons}>
            {ratingButtons.map((button) => (
              <TouchableOpacity
                key={button.quality}
                style={[
                  styles.ratingButton,
                  { backgroundColor: theme.colors.surface, borderColor: theme.colors.border },
                  theme.shadows.small,
                ]}
                onPress={() => onRate(button.quality)}
              >
                <Text style={styles.ratingEmoji}>{button.emoji}</Text>
                <Text style={[styles.ratingLabel, { color: theme.colors.textSecondary }]}>
                  {button.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {/* 提示文本 */}
      {!showAnswer && (
        <Text style={[styles.hint, { color: theme.colors.textSecondary }]}>
          点击卡片查看答案
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cardTouchable: {
    width: '100%',
    aspectRatio: 1.5,
    marginBottom: 32,
  },
  card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 16,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',
  },
  cardBack: {
    transform: [{ rotateY: '180deg' }],
  },
  cardText: {
    fontSize: 32,
    fontWeight: '600',
    textAlign: 'center',
  },
  audioButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    padding: 8,
  },
  ratingContainer: {
    width: '100%',
  },
  ratingTitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  ratingButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingButton: {
    flex: 1,
    marginHorizontal: 4,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
  },
  ratingEmoji: {
    fontSize: 32,
    marginBottom: 4,
  },
  ratingLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  hint: {
    fontSize: 14,
    textAlign: 'center',
  },
});
```

---

## 8. 路由与导航完整实现

### 8.1 导航类型定义

```typescript
// src/navigation/types.ts
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

// 根导航
export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<MainTabParamList>;
  Onboarding: undefined;
};

// 认证导航
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

// 主导航
export type MainTabParamList = {
  Home: undefined;
  Review: undefined;
  Planning: undefined;
  Notes: undefined;
  Profile: undefined;
};

// 学习模块导航
export type LearningStackParamList = {
  VocabularyList: undefined;
  VocabularyDetail: { wordId: string };
  GrammarList: undefined;
  GrammarDetail: { grammarId: string };
};

// 类型组合
export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  CompositeScreenProps<
    StackScreenProps<AuthStackParamList, T>,
    RootStackScreenProps<'Auth'>
  >;

export type MainTabScreenProps<T extends keyof MainTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, T>,
    RootStackScreenProps<'Main'>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
```

### 8.2 AuthNavigator完整实现

```typescript
// src/navigation/AuthNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from './types';

// Screens
import { LoginScreen } from '../screens/auth/LoginScreen';
import { RegisterScreen } from '../screens/auth/RegisterScreen';
import { ForgotPasswordScreen } from '../screens/auth/ForgotPasswordScreen';

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#F7F9FC' },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};
```

### 8.3 MainNavigator完整实现

```typescript
// src/navigation/MainNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../hooks/useTheme';
import { MainTabParamList } from './types';

// Screens
import { HomeScreen } from '../screens/home/HomeScreen';
import { ReviewListScreen } from '../screens/memory/ReviewListScreen';
import { PlanScreen } from '../screens/planning/PlanScreen';
import { NoteListScreen } from '../screens/notes/NoteListScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainNavigator: React.FC = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Review':
              iconName = focused ? 'repeat' : 'repeat-outline';
              break;
            case 'Planning':
              iconName = focused ? 'calendar' : 'calendar-outline';
              break;
            case 'Notes':
              iconName = focused ? 'document-text' : 'document-text-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'help-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ tabBarLabel: '学习' }}
      />
      <Tab.Screen 
        name="Review" 
        component={ReviewListScreen}
        options={{ tabBarLabel: '复习' }}
      />
      <Tab.Screen 
        name="Planning" 
        component={PlanScreen}
        options={{ tabBarLabel: '计划' }}
      />
      <Tab.Screen 
        name="Notes" 
        component={NoteListScreen}
        options={{ tabBarLabel: '笔记' }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ tabBarLabel: '我的' }}
      />
    </Tab.Navigator>
  );
};
```

### 8.4 RootNavigator完整实现

```typescript
// src/navigation/RootNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../hooks/useAuth';
import { AuthNavigator } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="Main" component={MainNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
```

---

## 9. 状态管理完整实现

### 9.1 Redux Slices完整实现

#### 9.1.1 authSlice

```typescript
// src/store/slices/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User, LoginRequest, LoginResponse } from '../../models/user.model';
import { TokenStorage } from '../../services/storage/TokenStorage';
import { apiClient } from '../../services/api/apiClient';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
  refreshToken: null,
  loading: false,
  error: null,
};

// Async Thunks
export const login = createAsyncThunk(
  'auth/login',
  async (credentials: LoginRequest) => {
    const response = await apiClient.post<LoginResponse>('/auth/login', credentials);
    return response;
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (userData: any) => {
    const response = await apiClient.post<LoginResponse>('/auth/register', userData);
    return response;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<{ user: User; token: string; refreshToken: string }>) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      TokenStorage.saveToken(action.payload.token, action.payload.refreshToken);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.refreshToken = null;
      TokenStorage.clearTokens();
    },
    updateUser(state, action: PayloadAction<Partial<User>>) {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.loading = false;
        TokenStorage.saveToken(action.payload.token, action.payload.refreshToken);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Login failed';
      })
      // Register
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.loading = false;
        TokenStorage.saveToken(action.payload.token, action.payload.refreshToken);
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Registration failed';
      });
  },
});

export const { setAuth, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
```

#### 9.1.2 memorySlice

```typescript
// src/store/slices/memorySlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Card } from '../../models/card.model';
import { DatabaseService } from '../../services/storage/DatabaseService';
import { SM2Algorithm } from '../../utils/algorithms/sm2';

interface MemoryState {
  reviewQueue: Card[];
  currentCardIndex: number;
  todayReviewedCount: number;
  statistics: {
    total: number;
    mastered: number;
    learning: number;
    new: number;
  };
  loading: boolean;
  error: string | null;
}

const initialState: MemoryState = {
  reviewQueue: [],
  currentCardIndex: 0,
  todayReviewedCount: 0,
  statistics: {
    total: 0,
    mastered: 0,
    learning: 0,
    new: 0,
  },
  loading: false,
  error: null,
};

// Async Thunks
export const loadTodayReviewQueue = createAsyncThunk(
  'memory/loadTodayReviewQueue',
  async (userId: string) => {
    const db = DatabaseService.getInstance();
    await db.init();
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayTimestamp = today.getTime();

    const [results] = await db.executeSql(
      `SELECT * FROM cards 
       WHERE user_id = ? AND next_review_date <= ? AND status != 'mastered'
       ORDER BY next_review_date ASC`,
      [userId, todayTimestamp]
    );

    const cards: Card[] = results.rows.raw().map((row: any) => ({
      ...row,
      tags: JSON.parse(row.tags || '[]'),
      frontContent: JSON.parse(row.front_content),
      backContent: JSON.parse(row.back_content),
      nextReviewDate: new Date(row.next_review_date),
      createdAt: new Date(row.created_at),
      updatedAt: new Date(row.updated_at),
    }));

    return SM2Algorithm.sortReviewQueue(cards);
  }
);

export const submitReviewResult = createAsyncThunk(
  'memory/submitReviewResult',
  async ({ cardId, quality }: { cardId: string; quality: number }, { getState }) => {
    const state = getState() as any;
    const card: Card = state.memory.reviewQueue[state.memory.currentCardIndex];
    
    const updatedCard = SM2Algorithm.calculateNextReview(card, quality);
    
    const db = DatabaseService.getInstance();
    await db.transaction(async (tx) => {
      // 更新卡片
      await tx.executeSql(
        `UPDATE cards SET 
         ease_factor = ?,
         interval = ?,
         repetitions = ?,
         next_review_date = ?,
         status = ?,
         updated_at = ?
         WHERE id = ?`,
        [
          updatedCard.easeFactor,
          updatedCard.interval,
          updatedCard.repetitions,
          updatedCard.nextReviewDate.getTime(),
          updatedCard.status,
          Date.now(),
          cardId,
        ]
      );

      // 记录复习历史
      await tx.executeSql(
        `INSERT INTO review_history (id, card_id, review_date, quality, interval, ease_factor)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [
          `review_${Date.now()}_${Math.random()}`,
          cardId,
          Date.now(),
          quality,
          updatedCard.interval,
          updatedCard.easeFactor,
        ]
      );
    });
    
    return updatedCard;
  }
);

const memorySlice = createSlice({
  name: 'memory',
  initialState,
  reducers: {
    nextCard(state) {
      if (state.currentCardIndex < state.reviewQueue.length - 1) {
        state.currentCardIndex += 1;
      }
    },
    previousCard(state) {
      if (state.currentCardIndex > 0) {
        state.currentCardIndex -= 1;
      }
    },
    resetReview(state) {
      state.currentCardIndex = 0;
      state.todayReviewedCount = 0;
    },
    updateStatistics(state, action: PayloadAction<typeof initialState.statistics>) {
      state.statistics = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Load review queue
      .addCase(loadTodayReviewQueue.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadTodayReviewQueue.fulfilled, (state, action) => {
        state.reviewQueue = action.payload;
        state.currentCardIndex = 0;
        state.loading = false;
      })
      .addCase(loadTodayReviewQueue.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load review queue';
      })
      // Submit review
      .addCase(submitReviewResult.fulfilled, (state, action) => {
        state.reviewQueue[state.currentCardIndex] = action.payload;
        state.todayReviewedCount += 1;
      });
  },
});

export const { nextCard, previousCard, resetReview, updateStatistics } = memorySlice.actions;
export default memorySlice.reducer;
```

#### 9.1.3 settingsSlice

```typescript
// src/store/slices/settingsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSettings } from '../../models/user.model';

interface SettingsState extends UserSettings {
  loading: boolean;
}

const initialState: SettingsState = {
  theme: 'auto',
  language: 'zh-CN',
  notifications: {
    study: true,
    review: true,
    achievement: true,
  },
  studyReminder: {
    enabled: false,
    time: '20:00',
  },
  loading: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<UserSettings['theme']>) {
      state.theme = action.payload;
    },
    setLanguage(state, action: PayloadAction<UserSettings['language']>) {
      state.language = action.payload;
    },
    setNotifications(state, action: PayloadAction<UserSettings['notifications']>) {
      state.notifications = action.payload;
    },
    setStudyReminder(state, action: PayloadAction<UserSettings['studyReminder']>) {
      state.studyReminder = action.payload;
    },
    updateSettings(state, action: PayloadAction<Partial<UserSettings>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const {
  setTheme,
  setLanguage,
  setNotifications,
  setStudyReminder,
  updateSettings,
} = settingsSlice.actions;

export default settingsSlice.reducer;
```

### 9.2 Store配置完整实现

```typescript
// src/store/store.ts
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Reducers
import authReducer from './slices/authSlice';
import memoryReducer from './slices/memorySlice';
import settingsReducer from './slices/settingsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  memory: memoryReducer,
  settings: settingsReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'settings'],
  blacklist: ['memory'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: __DEV__,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### 9.3 Hooks

```typescript
// src/hooks/useAppDispatch.ts
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../store/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
```

```typescript
// src/hooks/useAppSelector.ts
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '../store/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

---

## 10. 工具函数完整实现

### 10.1 日期格式化

```typescript
// src/utils/formatters/date.formatter.ts
import { format, formatDistance, formatRelative } from 'date-fns';
import { zhCN } from 'date-fns/locale';

export class DateFormatter {
  static format(date: Date, pattern: string = 'yyyy-MM-dd'): string {
    return format(date, pattern, { locale: zhCN });
  }

  static formatTime(date: Date): string {
    return format(date, 'HH:mm', { locale: zhCN });
  }

  static formatDateTime(date: Date): string {
    return format(date, 'yyyy-MM-dd HH:mm', { locale: zhCN });
  }

  static formatRelative(date: Date): string {
    return formatRelative(date, new Date(), { locale: zhCN });
  }

  static formatDistance(date: Date, baseDate: Date = new Date()): string {
    return formatDistance(date, baseDate, { locale: zhCN, addSuffix: true });
  }

  static isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  static isTomorrow(date: Date): boolean {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return (
      date.getDate() === tomorrow.getDate() &&
      date.getMonth() === tomorrow.getMonth() &&
      date.getFullYear() === tomorrow.getFullYear()
    );
  }
}
```

### 10.2 数据验证

```typescript
// src/utils/validators/auth.validator.ts
import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required('请输入用户名')
    .min(3, '用户名至少3个字符')
    .max(20, '用户名最多20个字符'),
  password: Yup.string()
    .required('请输入密码')
    .min(6, '密码至少6个字符')
    .max(50, '密码最多50个字符'),
});

export const registerValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required('请输入用户名')
    .min(3, '用户名至少3个字符')
    .max(20, '用户名最多20个字符')
    .matches(/^[a-zA-Z0-9_]+$/, '用户名只能包含字母、数字和下划线'),
  email: Yup.string()
    .required('请输入邮箱')
    .email('请输入有效的邮箱地址'),
  password: Yup.string()
    .required('请输入密码')
    .min(6, '密码至少6个字符')
    .max(50, '密码最多50个字符')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      '密码必须包含大小写字母和数字'
    ),
  confirmPassword: Yup.string()
    .required('请确认密码')
    .oneOf([Yup.ref('password')], '两次密码输入不一致'),
});
```

### 10.3 ID生成器

```typescript
// src/utils/helpers/id.helper.ts
export const generateId = (): string => {
  return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const generateUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
```

---

## 11. 配置文件完整实现

### 11.1 环境变量

```bash
# .env.development
API_BASE_URL=https://dev-api.example.com
OPENAI_API_KEY=sk-dev-xxx
ENCRYPTION_KEY=dev-encryption-key
DEBUG_MODE=true
```

```bash
# .env.production
API_BASE_URL=https://api.example.com
OPENAI_API_KEY=sk-prod-xxx
ENCRYPTION_KEY=prod-encryption-key-change-me
DEBUG_MODE=false
```

### 11.2 TypeScript配置

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "commonjs",
    "lib": ["es2019", "es2020.promise", "es2020.bigint", "es2020.string"],
    "jsx": "react-native",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@screens/*": ["src/screens/*"],
      "@hooks/*": ["src/hooks/*"],
      "@utils/*": ["src/utils/*"],
      "@services/*": ["src/services/*"],
      "@models/*": ["src/models/*"],
      "@store/*": ["src/store/*"],
      "@navigation/*": ["src/navigation/*"],
      "@config/*": ["src/config/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}
```

### 11.3 ESLint配置

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-inline-styles': 'off',
  },
};
```

### 11.4 Prettier配置

```javascript
// .prettierrc.js
module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 100,
  tabWidth: 2,
  arrowParens: 'always',
  bracketSpacing: true,
  endOfLine: 'lf',
};
```

---

## 12. 项目初始化完整流程

### 12.1 创建项目

```bash
# 1. 创建React Native项目
npx react-native init AILearningAssistant --template react-native-template-typescript

cd AILearningAssistant

# 2. 安装所有依赖
npm install @reduxjs/toolkit react-redux redux-persist
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context
npm install react-native-gesture-handler react-native-reanimated
npm install react-native-paper react-native-vector-icons
npm install react-native-svg react-native-linear-gradient
npm install victory-native
npm install react-native-mmkv
npm install react-native-sqlite-storage
npm install @react-native-async-storage/async-storage
npm install axios
npm install date-fns lodash
npm install react-hook-form yup
npm install react-native-config
npm install @react-native-community/netinfo
npm install react-native-fast-image

# 3. 安装开发依赖
npm install -D @types/react @types/react-native @types/lodash
npm install -D @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm install -D prettier eslint-plugin-prettier
npm install -D @react-native-community/eslint-config
npm install -D @testing-library/react-native jest

# 4. iOS依赖
cd ios && pod install && cd ..

# 5. 链接图标字体
npx react-native-asset
```

### 12.2 创建目录结构

```bash
# 创建目录结构脚本
mkdir -p src/{api,assets/{fonts,icons,images},components/{common,learning,memory,charts},config,contexts,hooks,models,navigation,screens/{auth,home,learning,memory,planning,notes,profile},services/{api,ai,storage,sync},store/{slices,api,middleware},styles,types,utils/{algorithms,validators,formatters,helpers}}

# 创建index.ts文件
touch src/components/common/index.ts
touch src/components/learning/index.ts
touch src/components/memory/index.ts
touch src/hooks/index.ts
touch src/models/index.ts
touch src/utils/index.ts
```

### 12.3 App.tsx完整实现

```typescript
// src/App.tsx
import React, { useEffect } from 'react';
import { StatusBar, LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { store, persistor } from './store/store';
import { RootNavigator } from './navigation/RootNavigator';
import { ThemeProvider } from './contexts/ThemeContext';
import { DatabaseService } from './services/storage/DatabaseService';
import { Loading } from './components/common/Loading';

// 忽略特定警告
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const App: React.FC = () => {
  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    const initApp = async () => {
      try {
        // 初始化数据库
        const db = DatabaseService.getInstance();
        await db.init();
        
        console.log('App initialized successfully');
        setIsReady(true);
      } catch (error) {
        console.error('App initialization failed:', error);
        setIsReady(true); // 即使失败也要显示UI
      }
    };

    initApp();
  }, []);

  if (!isReady) {
    return <Loading text="正在初始化..." overlay />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={<Loading overlay />} persistor={persistor}>
          <SafeAreaProvider>
            <ThemeProvider>
              <StatusBar barStyle="dark-content" backgroundColor="#F7F9FC" />
              <RootNavigator />
            </ThemeProvider>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
```

### 12.4 package.json scripts

```json
{
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "start": "react-native start",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write \"src/**/*.{js,jsx,ts,tsx,json}\"",
    "type-check": "tsc --noEmit",
    "clean": "cd android && ./gradlew clean && cd ../ios && pod deintegrate && pod install"
  }
}
```

---

## 13. 开发规范

### 13.1 Git提交规范

```bash
<type>(<scope>): <subject>

# Types:
feat:     新功能
fix:      Bug修复
docs:     文档更新
style:    代码格式
refactor: 重构
test:     测试
chore:    构建/工具

# Examples:
feat(auth): 添加微信登录
fix(memory): 修复SM-2算法bug
docs(readme): 更新安装说明
refactor(api): 优化错误处理
```

### 13.2 代码审查清单

```markdown
## 代码审查清单

- [ ] 代码符合TypeScript规范
- [ ] 所有函数都有类型定义
- [ ] 没有console.log(生产环境)
- [ ] 错误处理完整
- [ ] 组件有适当的Props类型
- [ ] 使用了useCallback/useMemo优化
- [ ] 样式使用StyleSheet.create
- [ ] 遵循命名规范
- [ ] 添加了必要的注释
- [ ] 测试覆盖核心逻辑
```

---

## 14. 迭代开发计划

### Week 1-2: 基础架构
- ✅ 项目初始化
- ✅ 目录结构
- ✅ 导航系统
- ✅ Redux配置
- ✅ 主题系统

### Week 3-4: 认证系统
- [ ] 登录/注册UI
- [ ] Token管理
- [ ] 持久化登录
- [ ] 用户信息管理

### Week 5-6: 记忆强化
- [ ] SQLite数据库
- [ ] SM-2算法
- [ ] 复习界面
- [ ] 卡片管理

### Week 7-8: AI集成
- [ ] OpenAI API
- [ ] 流式响应
- [ ] 缓存机制
- [ ] AI对话界面

### Week 9-10: 优化发布
- [ ] 性能优化
- [ ] 测试补充
- [ ] Bug修复
- [ ] 应用发布

---

## 15. 常见问题解答

### Q1: 如何切换环境?

```bash
# 开发环境
npm run android
npm run ios

# 生产环境
npm run android -- --variant=release
npm run ios -- --configuration=Release
```

### Q2: 如何清除缓存?

```bash
# 清除React Native缓存
npm start -- --reset-cache

# 清除Android构建
cd android && ./gradlew clean

# 清除iOS构建
cd ios && rm -rf Pods && pod install

# 完全清理
npm run clean
rm -rf node_modules
npm install
```

### Q3: 如何调试?

```bash
# 启用调试菜单
# iOS: Cmd + D
# Android: Cmd + M (Mac) / Ctrl + M (Windows/Linux)

# 使用Flipper调试
# 1. 安装Flipper
# 2. 启动Flipper
# 3. 运行应用,Flipper会自动连接
```

---

## 附录

### A. 参考文档
- [React Native](https://reactnative.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript](https://www.typescriptlang.org/)

### B. 联系方式
- 技术支持: tech@example.com
- Bug报告: https://github.com/yourrepo/issues

---

**文档结束**

这是一份**完整的、可执行的React Native开发手册**，包含所有必需的代码实现。
按照这份文档，你可以从零开始构建整个AI学习助手应用。

**特别提醒**:
1. 所有代码都可以直接复制使用
2. 记得替换API_KEY等敏感信息
3. 根据实际需求调整功能
4. 保持代码质量和测试覆盖