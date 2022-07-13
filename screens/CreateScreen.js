import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import { API, API_CREATE } from "../constants/API";
import { commonStyles, darkStyles, lightStyles } from "../styles/commonStyles";

export default function CreateScreen({ navigation }) {
  const token = useSelector((state) => state.auth.token);
  const isDark = useSelector((state) => state.accountPrefs.isDark);
  const styles = { ...commonStyles, ...(isDark ? darkStyles : lightStyles) };

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  async function savePost() {
    const post = {
      title: title,
      date: date,
      weight: weight,
      reps: reps,
    };
    try {
      console.log(token);
      const response = await axios.post(API + API_CREATE, post, {
        headers: { Authorization: `JWT ${token}` },
      });
      console.log(response.data);
      navigation.navigate("Index", { post: post });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }}>
        <Text style={[additionalStyles.label, styles.text]}>Type of lift:</Text>
        <TextInput
          style={additionalStyles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
        <Text style={[additionalStyles.label, styles.text]}>
          Enter Date:
        </Text>
        <TextInput
          style={additionalStyles.input}
          value={date}
          onChangeText={(text) => setDate(text)}
        />
        <Text style={[additionalStyles.label, styles.text]}>
          Enter Weight:
        </Text>
        <TextInput
          style={additionalStyles.input}
          value={weight}
          onChangeText={(text) => setWeight(text)}
        />
         <Text style={[additionalStyles.label, styles.text]}>
          Enter Reps:
        </Text>
        <TextInput
          style={additionalStyles.input}
          value={reps}
          onChangeText={(text) => setReps(text)}
        />
        <TouchableOpacity
          style={[styles.button, { marginTop: 20 }]}
          onPress={savePost}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const additionalStyles = StyleSheet.create({
  input: {
    fontSize: 24,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 15,
    borderRadius: 5,
    
  },
  label: {
    fontSize: 28,
    marginBottom: 10,
    marginLeft: 5,
  },
});