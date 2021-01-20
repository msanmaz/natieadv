import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase'
import '@firebase/firestore';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from './header'
import Categories from './categories';
import { ScrollView } from 'react-native';



var firebaseConfig = {
  apiKey: "AIzaSyDgvkc_51ubFbUbZoOsGqjXZlFrzDuIgmw",
  authDomain: "native-adv-5542c.firebaseapp.com",
  projectId: "native-adv-5542c",
  storageBucket: "native-adv-5542c.appspot.com",
  messagingSenderId: "692337511309",
  appId: "1:692337511309:web:bc58c4e98d86ff75b18bc4",
  measurementId: "G-V5C97RSC85"
};
if (!firebase.apps.length) {
  firebase.initializeApp({});
} else {
  firebase.app(); // if already initialized, use that one
}

export default function App() {
  const [products, setProducts] = useState(null)
  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    console.log(data)
    setProducts(data)
  }
  const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;
  const Items = [
    { cat: 'Computer' },
    { cat: 'Phone' },
    { cat: 'Clothes' },
    { cat: 'Shoes' },
    { cat: 'TV' },
    { cat: 'Console' }
  ];

  const Subtitle = styled.Text`
	font-size: 20px;
	color: #3c4560;
	font-weight: 500;
	margin-top: 40px;
	margin-left: 30px;
	text-transform: uppercase;
`;


  return (
    <Container>
      <ScrollView>
      <Header headerTitle='social' />
      <ScrollView horizontal={true} 	style={{
		paddingLeft: 10,
		paddingTop: 10,
		flexDirection: 'row'
	}}
	showsHorizontalScrollIndicator={false}>
      {Items.map((category, index) => (
		<Categories name={category.cat} key={index} />
	))}
      </ScrollView>
      <Subtitle>Items</Subtitle>

      </ScrollView>


    </Container>
  );
}
