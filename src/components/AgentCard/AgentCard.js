import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './AgentCard.style'

function AgentCard({agent}) {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.title}>{agent.displayName}</Text>
            </View>
            <Image style={styles.image} source={{uri : agent.fullPortrait}} />
            <View style={styles.descbody}>
            <Text style={styles.description}>{agent.description}</Text>
            </View>
        </View>
    )
}

export default AgentCard
