import { StyleSheet, Text, View } from "react-native";
import React from "react";

import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { Button } from "react-native-paper";
import MyButton from "../components/buttons";

const Page1 = () => {
    return (
        <View>
            <Card></Card>
            <MyButton></MyButton>
        </View>
    );
};

export default Page1;

const styles = StyleSheet.create({});