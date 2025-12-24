// src/components/common/Button/index.tsx
import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useTheme } from '../../../hooks/useTheme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
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
}) => {
  const { theme } = useTheme();

  const getButtonStyle = () => {
    const baseStyle = {
      backgroundColor: theme.colors.primary,
      borderRadius: theme.borderRadius.md,
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.md,
      flexDirection: 'row' as const,
      alignItems: 'center' as const,
      justifyContent: 'center' as const,
      ...theme.shadows.small,
    };

    if (variant === 'outline') {
      return {
        ...baseStyle,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: theme.colors.primary,
        shadowOpacity: 0,
        elevation: 0,
      };
    }

    if (variant === 'text') {
      return {
        ...baseStyle,
        backgroundColor: 'transparent',
        shadowOpacity: 0,
        elevation: 0,
      };
    }

    if (variant === 'secondary') {
      return {
        ...baseStyle,
        backgroundColor: theme.colors.surface,
        borderWidth: 1,
        borderColor: theme.colors.border,
      };
    }

    return baseStyle;
  };

  const getTextStyle = () => {
    const baseTextStyle = {
      fontSize: 16,
      fontWeight: '600' as const,
      color: '#FFFFFF',
    };

    if (variant === 'outline' || variant === 'text') {
      return {
        ...baseTextStyle,
        color: theme.colors.primary,
      };
    }

    if (variant === 'secondary') {
      return {
        ...baseTextStyle,
        color: theme.colors.textPrimary,
      };
    }

    return baseTextStyle;
  };

  return (
    <TouchableOpacity
      style={[
        getButtonStyle(),
        fullWidth && { width: '100%' },
        disabled && { opacity: 0.5 },
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? '#FFFFFF' : theme.colors.primary} />
      ) : (
        <>
          {icon && <View style={{ marginRight: 8 }}>{icon}</View>}
          <Text style={getTextStyle()}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};