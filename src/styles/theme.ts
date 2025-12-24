// src/styles/theme.ts
export const lightTheme = {
    colors: {
        primary: '#4A90E2',
        primaryLight: '#5FB3F6',
        primaryDark: '#2C5F8D',

        secondary: '#722ED1', // AI助手紫色

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
            fontWeight: '700',
            lineHeight: 32,
        },
        h2: {
            fontSize: 20,
            fontWeight: '600',
            lineHeight: 28,
        },
        h3: {
            fontSize: 18,
            fontWeight: '600',
            lineHeight: 24,
        },
        body: {
            fontSize: 16,
            fontWeight: '400',
            lineHeight: 24,
        },
        bodySmall: {
            fontSize: 14,
            fontWeight: '400',
            lineHeight: 20,
        },
        caption: {
            fontSize: 12,
            fontWeight: '400',
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

export const darkTheme: Theme = {
    ...lightTheme,
    colors: {
        ...lightTheme.colors,
        background: '#1A1A1A',
        surface: '#2A2A2A',
        textPrimary: '#FFFFFF',
        textSecondary: '#B0B0B0',
        border: '#3A3A3A',
        divider: '#303030',
    },
};

export type Theme = typeof lightTheme;