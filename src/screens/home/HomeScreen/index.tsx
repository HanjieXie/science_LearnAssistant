// src/screens/home/HomeScreen/index.tsx
import React, { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Card, Button } from '../../../components/common';
import { loadTodayReviewQueue } from '../../../store/slices/memorySlice';
import { RootState } from '../../../store';
import { useTheme } from '../../../hooks/useTheme';

export const HomeScreen: React.FC = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  const { user } = useSelector((state: RootState) => state.auth);
  const { reviewQueue, todayReviewedCount } = useSelector((state: RootState) => state.memory);
  const { todayTasks } = useSelector((state: RootState) => state.planning);

  useEffect(() => {
    if (user?.id) {
      dispatch(loadTodayReviewQueue(user.id));
    }
  }, [user]);

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return '早上好';
    if (hour < 18) return '下午好';
    return '晚上好';
  };

  return (
    <ScrollView style={styles.container}>
      {/* 问候语 */}
      <View style={styles.header}>
        <Text style={[theme.typography.h2, { color: theme.colors.textPrimary }]}>
          {greeting()}, {user?.username}
        </Text>
        <Text style={[theme.typography.bodySmall, { color: theme.colors.textSecondary }]}>
          今天也要加油学习哦!
        </Text>
      </View>
      {/* 连续学习打卡 */}
      <Card variant="elevated" style={styles.streakCard}>
        <View style={styles.streakContent}>
          <Text style={{ fontSize: 32 }}>🔥</Text>
          <View style={{ flex: 1, marginLeft: theme.spacing.md }}>
            <Text style={[theme.typography.h3, { color: theme.colors.textPrimary }]}>
              连续学习 15 天
            </Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '75%', backgroundColor: theme.colors.primary }]} />
            </View>
            <Text style={[theme.typography.caption, { color: theme.colors.textSecondary }]}>
              今日完成度: 75%
            </Text>
          </View>
        </View>
      </Card>
      {/* 今日任务 */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={[theme.typography.h3, { color: theme.colors.textPrimary }]}>
            📚 今日任务
          </Text>
          <Text style={[theme.typography.bodySmall, { color: theme.colors.textSecondary }]}>
            {todayTasks.filter(t => t.status === 'completed').length}/{todayTasks.length}
          </Text>
        </View>
        {/* 待复习卡片 */}
        {reviewQueue.length > 0 && (
          <Card style={styles.taskCard}>
            <View style={styles.taskHeader}>
              <Text>⏱</Text>
              <View style={{ flex: 1, marginLeft: theme.spacing.sm }}>
                <Text style={[theme.typography.body, { color: theme.colors.textPrimary }]}>
                  复习卡片 {reviewQueue.length}张
                </Text>
                <Text style={[theme.typography.caption, { color: theme.colors.textSecondary }]}>
                  约需 {Math.ceil(reviewQueue.length * 0.5)} 分钟
                </Text>
              </View>
            </View>
            <Button
              title="立即复习"
              onPress={() => navigation.navigate('Review')}
              fullWidth
            />
          </Card>
        )}

        {/* 其他任务 */}
        {todayTasks.map(task => (
          <Card key={task.id} style={styles.taskCard}>
            <View style={styles.taskHeader}>
              <Text>{task.icon}</Text>
              <View style={{ flex: 1, marginLeft: theme.spacing.sm }}>
                <Text style={[theme.typography.body, { color: theme.colors.textPrimary }]}>
                  {task.title}
                </Text>
                <Text style={[theme.typography.caption, { color: theme.colors.textSecondary }]}>
                  {task.status === 'completed' ? '已完成' : '待开始'}
                </Text>
              </View>
            </View>
          </Card>
        ))}
      </View>
      {/* 学习目标 */}
      <View style={styles.section}>
        <Text style={[theme.typography.h3, { color: theme.colors.textPrimary }]}>
          🎯 学习目标
        </Text>
        <Card variant="elevated" style={styles.goalCard}>
          <Text style={[theme.typography.h3, { color: theme.colors.textPrimary }]}>
            雅思7.5分 备考
          </Text>
          <Text style={[theme.typography.bodySmall, { color: theme.colors.textSecondary, marginTop: 4 }]}>
            距离目标还有 165 天
          </Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '25%', backgroundColor: theme.colors.primary }]} />
          </View>
          <Text style={[theme.typography.caption, { color: theme.colors.textSecondary, marginTop: 4 }]}>
            25% 完成
          </Text>
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  header: {
    padding: 16,
  },
  streakCard: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  streakContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E8E8E8',
    borderRadius: 3,
    marginTop: 8,
    marginBottom: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  section: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  taskCard: {
    marginBottom: 12,
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  goalCard: {
    marginTop: 12,
  },
});