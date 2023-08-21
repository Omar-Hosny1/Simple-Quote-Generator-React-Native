import React from "react";
import { Pressable, Text } from "react-native";

interface Props {
  onClick: () => void;
  label: string;
}

function Button(props: Props) {
  return (
    <Pressable
      style={{
        width: "100%",
        flexGrow: 1,
        alignItems: "flex-end",
        flexDirection: "row",
      }}
      onPress={props.onClick}
    >
      <Text
        style={{
          padding: 10,
          width: "100%",
          textAlign: "center",
          borderRadius: 5,
          fontWeight: "bold",
        }}
      >
        {props.label}
      </Text>
    </Pressable>
  );
}

export default Button;
