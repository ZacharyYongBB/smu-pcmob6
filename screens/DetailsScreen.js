import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { useSelector } from "react-redux";
import { API, API_POSTS } from "../constants/API";
import { commonStyles, lightStyles, darkStyles } from "../styles/commonStyles";

export default function ShowScreen({ navigation, route }) {
  const [post, setPost] = useState({ title: "", body: "" });
  const token = useSelector((state) => state.auth.token);
  const isDark = useSelector((state) => state.accountPrefs.isDark);
  const styles = { ...commonStyles, ...(isDark ? darkStyles : lightStyles) };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={editPost} style={{ marginRight: 10 }}>
          <FontAwesome
            name="pencil-square-o"
            size={30}
            color={styles.headerTint}
          />
        </TouchableOpacity>
      ),
    });
  });

  useEffect(() => {
    getPost();
  }, []);

  async function getPost() {
    const id = route.params.id;
    console.log(id);
    try {
      const response = await axios.get(API + API_POSTS + "/" + id, {
        headers: { Authorization: `JWT ${token}` },
      });
      console.log(response.data);
      setPost(response.data);
    } catch (error) {
      console.log(error.response.data);
      if ((error.response.data.error = "Invalid token")) {
        navigation.navigate("SignInSignUp");
      }
    }
  }

  function editPost() {
    navigation.navigate("Edit");
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.text, { margin: 30, fontFamily:"Academy Engraved LET", fontSize:35 }]}>
        {post.title}
      </Text>
      <Image
        source={{ uri: post.picture}}
        style={{ width: 350, height: 350, marginBottom:10, justifyContent:"center", alignItems:"center", flex:1, flexDirection:"row", alignSelf:"center" }}
      />
      <Text style={[styles.title, styles.text, { margin: 20 }]}>
        Date : {post.date}
      </Text>
      <Text style={[styles.title, styles.text, { margin: 20 }]}>
        Weight (kg) : {post.weight}
      </Text>
      <Text style={[styles.title, styles.text, { margin: 20 }]}>
        Reps : {post.reps}
      </Text>
    </View>
  );
}