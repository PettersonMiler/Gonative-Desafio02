import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import styles from './styles';

const ListaRepo = ({ lista, navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.containerBotao}
      onPress={() =>
        navigation.navigate('Issues', lista)
      }
    >
      <Image
        style={styles.containerImag}
        source={{ uri: lista.avatar_url }}
      />
      <View style={styles.containerName}>
        <Text style={styles.textoTitulo}>{lista.name}</Text>
        <Text style={styles.textoDesc}>{lista.full_name}</Text>
      </View>
      <View style={styles.containerIcon}>
        <Icon name="chevron-right" size={20} style={styles.icone} />
      </View>
    </TouchableOpacity>
  </View>
);

ListaRepo.propTypes = {
  lista: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    full_name: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(ListaRepo);
