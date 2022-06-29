import { Text as RNText, StyleSheet } from 'react-native'
import React from 'react'
import { typography } from '../theme/typography'
import { colors } from '../theme/colors'

const BASE = {
    fontFamily: typography.primary,
    fontSize: 16,
    color: colors.white,
}
const BASE_PRIMARY = {
    fontFamily: typography.primaryBold,
    fontSize: 16,
    color: colors.white,
}
const BOLD = {
    fontFamily: typography.bold,
    color: colors.white,
}

export const presets = {
    default: BASE,
    bold: BOLD,
    h1: {
        ...BOLD,
        fontSize: 32
    },
    h2: {
        ...BOLD,
        fontSize: 28
    },
    h3: {
        ...BASE_PRIMARY,
        fontSize: 24
    },
    h4: {
        ...BASE_PRIMARY,
        fontSize: 16
    },
    small: {
        ...BASE,
        fontSize: 12
    }
}

export default function Text({ children, preset = "default", style }) {
    const textStyles = StyleSheet.compose(presets[preset], style)
    return <RNText style={textStyles}>
        {children}
    </RNText>
}