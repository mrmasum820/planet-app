import { View, StyleSheet, ScrollView, Pressable, Linking } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import Constants from 'expo-constants'
import PlanetHeader from '../components/planet-header'
import { spacing } from '../theme/spacing'
import { EarthSvg, JupiterSvg, MarsSvg, MercurySvg, NeptuneSvg, SaturnSvg, UranusSvg, VenusSvg } from '../svg'
import Text from '../components/text'

const PlanetSection = ({ title, value }) => {
    return (
        <View style={styles.planetSection}>
            <Text preset='small' style={{ textTransform: 'uppercase' }}>{title}</Text>
            <Text preset='h4'>{value}</Text>
        </View>
    )
}



export default function Details({ route }) {

    const planet = route.params.planet;
    const { name, description, rotationTime, revolutionTime, radius, avgTemp, wikiLink } = planet;

    const onPressLink = () => {
        Linking.openURL(wikiLink);
    }

    const renderImage = () => {
        switch (name) {
            case 'mercury':
                return <MercurySvg />;
            case 'venus':
                return <VenusSvg />;
            case 'earth':
                return <EarthSvg />;
            case 'mars':
                return <MarsSvg />;
            case 'jupiter':
                return <JupiterSvg />;
            case 'saturn':
                return <SaturnSvg />;
            case 'uranus':
                return <UranusSvg />;
            case 'neptune':
                return <NeptuneSvg />;
        }
    }

    return (
        <View style={styles.container}>

            <PlanetHeader backBtn={true} />

            <ScrollView>
                <View style={styles.imageView}>
                    {renderImage()}
                </View>
                <View style={styles.descriptionView}>
                    <Text preset='h3' style={styles.name}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>

                <Pressable onPress={onPressLink} style={styles.source}>
                    <Text>Source: </Text>
                    <Text preset='h4' style={styles.wiki}>Wikipedia</Text>
                </Pressable>

                <View style={{ height: 40 }}></View>

                <PlanetSection title="rotation time" value={rotationTime} />
                <PlanetSection title="revolution time" value={revolutionTime} />
                <PlanetSection title="radius" value={radius} />
                <PlanetSection title="avg temp" value={avgTemp} />

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    },
    imageView: {
        marginTop: spacing[8],
        alignItems: 'center',
        justifyContent: 'center',
    },
    descriptionView: {
        paddingHorizontal: spacing[5],
        marginTop: spacing[8],
        alignItems: 'center',
    },
    name: {
        textTransform: 'uppercase',
        marginBottom: spacing[4],
    },
    description: {
        lineHeight: 23,
    },
    source: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: spacing[4],
    },
    wiki: {
        textDecorationLine: 'underline',
    },
    planetSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: spacing[4],
        paddingVertical: spacing[5],
        marginHorizontal: spacing[4],
        marginBottom: spacing[5],
        borderWidth: 1,
        borderColor: colors.grey,
    }
})