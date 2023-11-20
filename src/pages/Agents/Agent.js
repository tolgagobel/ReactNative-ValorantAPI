import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import AgentCard from '../../components/AgentCard'
import useFetch from '../../hooks/useFetch'
import Config from 'react-native-config'

function Agent() {
    const { data } = useFetch(`${Config.API_URL}agents`)
    const renderAgent = ({ item }) => <AgentCard agent={item} />

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data.data}
                renderItem={renderAgent}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
    }
});
export default Agent
