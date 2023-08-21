import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import TypeWriter from "react-native-typewriter";
import QuoteItem from "../utils/interfaces/quote-item";
import quotes from "../data/quotes-data";
import Button from "../components/Button";

function getQuoteItem(): QuoteItem {
  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuoteIndex];
}

function Home() {
  const [previewedText, setPreviewedText] = useState<string>(
    getQuoteItem().text
  );

  function refreshPrevewedText() {
    setPreviewedText(getQuoteItem().text);
  }
  return (
    <View style={styles.container}>
      <View style={{ flex: 5 }}>
        <TypeWriter style={styles.text} typing={1}>
          {previewedText}
        </TypeWriter>
      </View>

      <View style={{ flex: 1 }}>
        <Button label="Generate New Quote" onClick={refreshPrevewedText} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 50,
  },
  text: {
    fontSize: 50,
    color: "white",
    textAlign: "left",
  },
});

export default Home;
