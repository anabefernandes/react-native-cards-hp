import { View, Text, Image, StyleSheet } from "react-native";

export default function VerticalCard({ title, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#1A472A",
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#AAAAAA",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
