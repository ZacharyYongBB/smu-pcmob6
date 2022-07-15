import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { commonStyles, darkStyles, lightStyles } from "../styles/commonStyles";
import CalendarPicker from 'react-native-calendar-picker';

export default function FunScreen({ navigation }) {
  const isDark = useSelector((state) => state.accountPrefs.isDark);
  const styles = { ...commonStyles, ...(isDark ? darkStyles : lightStyles) };

  
  const [selectedStartDate, setselectedStartDate] = useState('')
  

    function onDateChange(date) {
        setselectedStartDate(date)
    }

  return (
    <View style={styles.container}>
         
         <CalendarPicker
          onDateChange={onDateChange}
        />

    </View>
  );
}

const styles = StyleSheet.create({});