import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from 'services/api';
import styles from './styles';

export default class HeaderInput extends Component {
  state = {
    diretorio: '',
    dados: [],
    loading: false,
    input: true,
  };

  buscaDiretorio = async (diretorio) => {
    const dir = await api.get(`/repos/${diretorio}`);
    const repo = await AsyncStorage.getItem('@GitList:diretorio');

    if (repo !== null) {
      this.setState({ dados: JSON.parse(repo) });
    }

    await this.setState({
      dados: [
        ...this.state.dados,
        {
          id: dir.data.id,
          name: dir.data.name,
          login: dir.data.owner.login,
          full_name: dir.data.full_name,
          avatar_url: dir.data.owner.avatar_url,
        }],
      diretorio: '',
    });
    console.tron.log(this.state.dados);
  }

  saveDiretorio = async () => {
    console.tron.log(JSON.stringify(this.state.dados));
    await AsyncStorage.setItem('@GitList:diretorio', JSON.stringify(this.state.dados));
    this.setState({
      loading: false,
      input: true,
    });
  }

  salvar = async () => {
    const { diretorio } = this.state;
    if (diretorio.length === 0) return;
    this.setState({
      loading: true,
      input: false,
    });

    try {
      await this.buscaDiretorio(diretorio);

      await this.saveDiretorio();
    } catch (err) {
      this.setState({
        loading: false,
        input: true,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar repositório"
            underlineColorAndroid="rgba(0, 0, 0, 0)"
            editable={this.state.input}
            value={this.state.diretorio}
            onChangeText={diretorio => this.setState({ diretorio })}
          />

          <TouchableOpacity style={styles.adicionar} onPress={this.salvar}>
            { this.state.loading
              ? <ActivityIndicator size="small" color="#999" />
              : <Icon name="plus" size={20} style={styles.icone} /> }
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}
