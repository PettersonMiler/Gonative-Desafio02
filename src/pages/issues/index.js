import React, { Component } from 'react';
import {
  View,
  ActivityIndicator,
  AsyncStorage,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import api from 'services/api';
import styles from './styles';
import ListaIssue from './components/listaIssue';

export default class Issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
  });

  state = {
    filtro: '',
    loading: false,
    issues: [],
    refreshing: false,
  }

  componentDidMount() {
    this.carregaFiltro();
  }

  carregaFiltro = async () => {
    this.setState({
      loading: true,
    });

    const status = await AsyncStorage.getItem('@GitList:filtro');
    if (status !== null) {
      await this.setState({
        filtro: status,
      });
    } else {
      console.tron.log('else');
      await this.setState({
        filtro: '',
      });
    }

    this.buscaIssue();
  }

  buscaIssue = async () => {
    this.setState({
      loading: true,
    });
    const dir = await api.get(`/repos/${this.props.navigation.state.params.full_name}/issues?state=${this.state.filtro}`);

    await this.setState({
      issues: dir.data,
      loading: false,
      refreshing: false,
    });
  }

  filtrar = async (status) => {
    await this.setState({
      filtro: status,
      loading: true,
    });
    await AsyncStorage.setItem('@GitList:filtro', this.state.filtro);

    this.buscaIssue();
  }

  renderList = () => (
    <FlatList
      data={this.state.issues}
      renderItem={({ item }) => (<ListaIssue issue={item} />)}
      keyExtractor={item => String(item.id)}
      onRefresh={this.buscaIssue}
      refreshing={this.state.refreshing}
    />
  );

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.containerFiltro}>
          <TouchableOpacity style={styles.botao} onPress={() => this.filtrar('')}>
            <Text style={[styles.filtroDesativado, this.state.filtro === '' ? styles.filtroAtivado : null]}>Todas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => this.filtrar('open')}>
            <Text style={[styles.filtroDesativado, this.state.filtro === 'open' ? styles.filtroAtivado : null]}>Abertas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} onPress={() => this.filtrar('closed')}>
            <Text style={[styles.filtroDesativado, this.state.filtro === 'closed' ? styles.filtroAtivado : null]}>Fechadas</Text>
          </TouchableOpacity>
        </View>

        { this.state.loading
          ? <ActivityIndicator style={styles.loading} />
          : this.renderList() }
      </View>
    );
  }
}
