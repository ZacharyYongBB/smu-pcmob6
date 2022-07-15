import React, { useState } from "react";
import { StyleSheet, Text, View} from "react-native";
import { useSelector } from "react-redux";
import { commonStyles, darkStyles, lightStyles } from "../styles/commonStyles";
import CalendarPicker from 'react-native-calendar-picker';


export default function FunScreen({ navigation }) {
  const isDark = useSelector((state) => state.accountPrefs.isDark);
  const styles = { ...commonStyles, ...(isDark ? darkStyles : lightStyles) };

  
  const [selectedStartDate, setselectedStartDate] = useState('')
  const minDate = new Date(); // Today
  
  


    function onDateChange(date) {
        setselectedStartDate(date)
    }

  return (
    <View style={styles.container}>
         
         <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={false}
          todayBackgroundColor="#f2e6ff"
          selectedDayColor="#7300e6"
          selectedDayTextColor="#FFFFFF"
          
        />

        <Text>what is today's day: {selectedStartDate}</Text>
        <Text>You're training Chest today</Text>
        

    </View>
  );
}

const styles = StyleSheet.create({});