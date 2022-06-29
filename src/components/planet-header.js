import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from './text'
import { spacing } from '../theme/spacing'
import { colors } from '../theme/colors'
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function PlanetHeader({ backBtn }) {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {backBtn && (
                <Pressable onPress={() => { navigation.goBack() }}>
                    <AntDesign name="left" size={25} color="white" />
                </Pressable>
            )}
            <Text style={{ marginLeft: spacing[3] }} preset='h2'>THE PLANETS</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: spacing[5],
        borderBottomWidth: .2,
        borderBottomColor: colors.white,
    }
})