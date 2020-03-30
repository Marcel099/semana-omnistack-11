import React, { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons'            // o Feather Icons já vem dentro do expo
import { useNavigation } from '@react-navigation/native'
// useNavigation é semelhante ao useHistory do React
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'      // Existe o Button tbm, mas ele já vem com algumas estilizações do Android e do iOS não desejadas.
// FlatList é usado para fazer listas scrollaveis no React Native

import api from '../../services/api'

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Incidents() {
    const navigation = useNavigation()
    const [ incidents, setIncidents] = useState([])
    const [ total, setTotal] = useState(0)
    const [ page, setPage] = useState(1)                // Indica a página maisrecentemente buscada
    const [ loading, setLoading] = useState(false)      // Indica quando está buscando dados novos

    function navigateToDetail(incident) {
        navigation.navigate('Detail', { incident })       // Pode se passar parâmetros também
    }

    async function loadIncidents(){
        if (loading === true)          // Evita que o usuário fique buscando novamente as informações ao puxar pra cima e pra baixo
            return

        if (total > 0 && incidents.length === total)        // Se já tiver buscado tudo que pode ser buscado não há porquê buscar novamente
            return
        
        setLoading(true)

        const response = await api.get('incidents', {
            params: { page }
        })

        setIncidents( [... incidents, ...response.data])
        setTotal(response.headers['x-total-count'])
        setPage(page + 1)
        setLoading(false)
    }

    useEffect( () => {
        loadIncidents()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/>
                <Text style={styles.text}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>
            <FlatList
                data={incidents}  
                style={styles.incidentList}      
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={ ({ item: incident }) => (
                    <View style={styles.incident}>        
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>
                            {Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(incident.value)}
                        </Text>
                        
                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(incident)}>             
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#e02041"/>
                        </TouchableOpacity>
                    </View>
                )}/> 
        </View>    
    )

    {/* onPress é uma propriedade obrigatória deste componente*/}
    // renderItem é uma função responsável por renderizar os itens da FlatList
    // Retorna um código JSX, tendo que colocar parênteses ali dentro e não chaves

    // keyExtractor faz o mesmo que é preciso fazer com map e key no React, que deve ter seu valor passado como uma string\

    // onEndReached={loadIncidents}     executa uma função ao chegar no fim da página
    // onEndReachedThreshold={0.2}      dita quando a quantos % do fim da página a função anterior deve ser executada
}