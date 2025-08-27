import { View, Text, Image, StyleSheet } from "react-native";

export default function HorizontalCard({ title, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 150,
    marginRight: 10,
    backgroundColor: "#111",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ad880dff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
    marginLeft: 5,
  },
});
