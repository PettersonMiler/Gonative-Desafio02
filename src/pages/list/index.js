import React, { Component } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';

import HeaderInput from './components/headerInput';
import ListaRepo from './components/listaRepo';

import styles from './styles';

export default class List extends Component {
  static navigationOptions = {
    headerTitle: <HeaderInput />,
  };

  state = {
    loading: false,
    data: [],
    refreshing: false,
  };

  componentDidMount() {
    this.carregaDados();
  }

  carregaDados = async () => {
    this.setState({
      loading: true,
    });
    const repo = await AsyncStorage.getItem('@GitList:diretorio');

    if (repo !== null) {
      this.setState({
        data: JSON.parse(repo),
        loading: false,
        refreshing: false,
      });
    }
    this.setState({ loading: false });
  }

  renderList = () => (
    <FlatList
      data={this.state.data}
      renderItem={({ item }) => <ListaRepo lista={item} />}
      keyExtractor={item => String(item.id)}
      onRefresh={this.carregaDados}
      refreshing={this.state.refreshing}
    />
  );

  render() {
    console.tron.log(this.state.data);
    return (
      <View style={styles.container}>
        { this.state.loading
          ? <ActivityIndicator style={styles.loading} />
          : this.renderList() }
      </View>
    );
  }
}
