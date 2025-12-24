// src/navigation/types.ts
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

// 根导航参数
export type RootStackParamList = {
    Auth: undefined;
    Main: undefined;
}

// 认证导航参数
export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
    ForgotPassword: undefined;
}

// 主导航Tab参数
export type MainTabParamList = {
    Home: undefined;
    Review: undefined;
    Planning: undefined;
    Notes: undefined;
    Profile: undefined;
}

// 学习模块导航参数
export type LearningStackParamList = {
    VocabularyList: undefined;
    VocabularyDetail: { wordId: string };
    GrammarList: undefined;
    GrammarDetail: { grammarId: string };
    ListeningList: undefined;
    ListeningDetail: { audioId: string };
};

// 复习模块导航参数
export type ReviewStackParamList = {
    ReviewList: undefined;
    ReviewSession: { deckId?: string };
    ReviewComplete: { statistics: ReviewStatistics };
    CardManage: undefined;
    CardCreate: undefined;
    CardEdit: { cardId: string };
};

// 类型组合
export type HomeScreenProps = CompositeScreenProps<BottomTabScreenProps<MainTabParamList, 'Home'>, StackScreenProps<RootStackParamList>>;

export type ReviewScreenProps = CompositeScreenProps<StackScreenProps<ReviewStackParamList, 'ReviewSession'>, CompositeScreenProps<BottomTabScreenProps<MainTabParamList>, StackScreenProps<RootStackParamList>>>