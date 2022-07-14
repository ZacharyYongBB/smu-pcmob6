import axios from "axios";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
  
} from "react-native";
import { useSelector } from "react-redux";
import { API, API_CREATE } from "../constants/API";
import { commonStyles, darkStyles, lightStyles } from "../styles/commonStyles";


export default function CreateScreen({ navigation }) {
  const token = useSelector((state) => state.auth.token);
  const isDark = useSelector((state) => state.accountPrefs.isDark);
  const styles = { ...commonStyles, ...(isDark ? darkStyles : lightStyles) };

  const postPicture = useSelector(
    (state) => state.accountPrefs.postPicture
  );

  const [note, setNote] = useState("");

  
  async function saveNote() {
    const post = {
      note: note,
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
    <ScrollView style={styles.container}  keyboardShouldPersistTaps='handled'>
      <View style={{ margin: 20 }}>
        <Text style={[additionalStyles.label, styles.text]}>Notes:</Text>
        <TextInput
          style={additionalStyles.input}
          value={note}
          onChangeText={(text) => setNote(text)}
        />
        
        <TouchableOpacity
          style={[styles.button, { marginTop: 20 }]}
          onPress={saveNote}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const additionalStyles = StyleSheet.create({
  input: {
    fontSize: 24,
    borderWidth: 2,
    borderColor: "black",
    marginBottom: 15,
    borderRadius: 5,
    height: 250,
  },
  label: {
    fontSize: 28,
    marginBottom: 10,
    marginLeft: 5,
  },
});