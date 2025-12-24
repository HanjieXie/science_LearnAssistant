// src/components/common/Card/index.tsx
import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  variant = 'default',
  padding,
}) => {
  const { theme } = useTheme();

  const getCardStyle = (): ViewStyle => {
    const baseStyle: ViewStyle = {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.borderRadius.lg,
      padding: padding ?? theme.spacing.lg,
    };

    if (variant === 'elevated') {
      return {
        ...baseStyle,
        ...theme.shadows.medium,
      };
    }

    if (variant === 'outlined') {
      return {
        ...baseStyle,
        borderWidth: 1,
        borderColor: theme.colors.border,
      };
    }

    return {
      ...baseStyle,
      ...theme.shadows.small,
    };
  };

  return <View style={[getCardStyle(), style]}>{children}</View>;
};