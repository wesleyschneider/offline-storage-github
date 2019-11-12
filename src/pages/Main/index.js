import React, {useState, useEffect} from 'react';
import {Keyboard, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';
import getRealm from '~/services/realm';

import Repository from '~/components/Repository';

import {Container, Title, Form, Input, Submit, List} from './styles';

export default function Main() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function loadRepositories() {
      const realm = await getRealm();

      const data = realm.objects('Repository').sorted('stars', true);

      setRepositories(data);
    }

    loadRepositories();
  }, []);

  async function saveRepository(repo) {
    const data = {
      id: repo.id,
      name: repo.name,
      fullName: repo.full_name,
      description: repo.description,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Repository', data, 'modified');
    });

    return data;
  }

  async function handleSubmit() {
    try {
      setLoading(true);

      const response = await api.get(`/repos/${input}`);
      await saveRepository(response.data);

      setInput('');
      setError(false);
      setLoading(false);

      Keyboard.dismiss();
    } catch (err) {
      setError(true);
      setLoading(false);
      console.tron.log(err);
    }
  }

  async function handleRefreshRepository(repository) {
    try {
      const response = await api.get(`/repos/${repository.fullName}`);

      const data = await saveRepository(response.data);

      setRepositories(
        repositories.map(repo => (repo.id === data.id ? data : repo)),
      );
    } catch (err) {
      console.tron.log(err);
    }
  }

  return (
    <Container>
      <Title>Repositórios</Title>
      <Form>
        <Input
          onChangeText={setInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Procurar repositório"
          error={error}
          editable={!loading}
        />
        <Submit onPress={handleSubmit}>
          {loading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <Icon name="add" size={22} color="#fff" />
          )}
        </Submit>
      </Form>
      <List
        keyboardShouldPersistTaps="handled"
        data={repositories}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Repository
            data={item}
            onRefresh={() => handleRefreshRepository(item)}
          />
        )}
      />
    </Container>
  );
}
