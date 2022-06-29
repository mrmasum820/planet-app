import { StyleSheet, View, Platform, FlatList, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import Text from '../components/text'
import Constants from 'expo-constants'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'
import { PLANET_LIST } from '../data/planet-list'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const PlanetItem = ({ item }) => {

    const { name, color } = item;
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate('Details', { planet: item })} style={styles.item}>
            <View style={{ flexDirection: 'row' }}>
                <View style={[styles.circle, { backgroundColor: color }]}></View>
                <Text style={styles.itemName} preset='h4'>{name}</Text>
            </View>
            <AntDesign name="right" size={16} color="white" />
        </Pressable>
    )
}



export default function Home({ navigation }) {
    const [list, setList] = useState(PLANET_LIST);

    const searchFilter = (text) => {
        const filteredList = PLANET_LIST.filter((item) => {
            const itemName = item.name.toLowerCase();
            const userTypedText = text.toLowerCase();

            return itemName.indexOf(userTypedText) > -1;
        })

        setList(filteredList);
        // console.log('fiter list =>', filteredList);
    }

    const renderItem = ({ item }) => {
        const { name, color } = item;
        return (
            <PlanetItem item={item} />
        )
    }

    return (
        <View style={styles.container}>

            <PlanetHeader />

            <TextInput
                placeholder='Type the planet name'
                placeholderTextColor={colors.white}
                style={styles.textInput}
                onChangeText={(text) => {
                    searchFilter(text);
                }}
            />

            <FlatList
                contentContainerStyle={styles.list}
                data={list}
                keyExtractor={(item) => item.name}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator}></View>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    },
    item: {
        marginVertical: spacing[5],
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    list: {
        padding: spacing[5],
    },
    circle: {
        width: 25,
        height: 25,
        borderRadius: 12.50,
    },
    itemName: {
        textTransform: 'uppercase',
        marginLeft: spacing[3],
    },
    separator: {
        borderBottomWidth: 0.2,
        borderBottomColor: colors.white,
    },
    textInput: {
        color: colors.white,
        paddingBottom: spacing[3],
        margin: spacing[5],
        borderBottomWidth: 1,
        borderBottomColor: colors.white,
    }
})
