import { Text, View, FlatList, ScrollView } from "react-native";
import HorizontalCard from "./components/HorizontalCard";
import VerticalCard from "./components/VerticalCard";
import { Estilo } from "./css/styles";

export default function App() {
  const horizontalData = [
    {
      id: "1",
      title: "Harry Potter e a Pedra Filosofal",
      image: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPFV0hk7h0YspgiTTFPfuGMIYKpvJcWVaNBA&s",
      },
    },
    {
      id: "2",
      title: "Harry Potter e a Câmara Secreta",
      image: {
        uri: "https://static.wikia.nocookie.net/harrypotter/images/9/96/Capa_Harry_Potter_e_a_C%C3%A2mara_Secreta_%28filme%29.jpg/revision/latest/thumbnail/width/360/height/360?cb=20130101153346&path-prefix=pt-br",
      },
    },
    {
      id: "3",
      title: "Harry Potter e o Prisioneiro de Azkaban",
      image: {
        uri: "https://static.wikia.nocookie.net/harrypotter/images/8/81/Capa_Harry_Potter_e_o_Prisioneiro_de_Azkaban_%28filme%29.jpg/revision/latest/thumbnail/width/360/height/360?cb=20130101153549&path-prefix=pt-br",
      },
    },
    {
      id: "4",
      title: "Harry Potter e o Cálice de Fogo",
      image: {
        uri: "https://images.justwatch.com/poster/120808343/s718/harry-potter-e-o-calice-de-fogo.jpg",
      },
    },
    {
      id: "5",
      title: "Harry Potter e a Ordem da Fênix",
      image: {
        uri: "https://images.justwatch.com/poster/120830237/s718/harry-potter-e-a-ordem-da-fenix.jpg",
      },
    },
    {
      id: "6",
      title: "Harry Potter e o Enigma do Príncipe",
      image: {
        uri: "https://media.filmelier.com/images/tit/9553/poster/harry-potter-and-the-half-blood-prince48956.webp",
      },
    },
    {
      id: "7",
      title: "Harry Potter e as Relíquias da Morte: Parte 1",
      image: {
        uri: "https://static.wikia.nocookie.net/harrypotter/images/b/ba/Capa_Harry_Potter_e_as_Rel%C3%ADquias_da_Morte_Parte_1.jpg/revision/latest?cb=20130101155334&path-prefix=pt-br",
      },
    },
    {
      id: "8",
      title: "Harry Potter e as Relíquias da Morte: Parte 2",
      image: {
        uri: "https://images.justwatch.com/poster/143811025/s718/harry-potter-7-e-as-reliquias-da-morte-parte-2.jpg",
      },
    },
  ];

  const verticalData = [
    {
      id: "1",
      title: "Harry Potter",
      image: {
        uri: "https://sm.ign.com/ign_br/cover/h/harry-pott/harry-potter-the-series_s6p5.jpg",
      },
    },
    {
      id: "2",
      title: "Hermione Granger",
      image: {
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVy_yitZHMcDJFoWP-3ds3FF0EOWP-pqI8jBWOW3clLQy42DTOklebxEeLQpg42EC_Jo&usqp=CAU",
      },
    },
    {
      id: "3",
      title: "Ron Weasley",
      image: {
        uri: "https://static.wikia.nocookie.net/harrypotter/images/4/46/33564a9f7bf0d1d358ddb43da7b8fd1b.jpg/revision/latest/scale-to-width-down/1588?cb=20210316210412&path-prefix=pt-br",
      },
    },
  ];

  return (
    <View style={Estilo.container}>
      <View style={Estilo.banner}>
        <Text style={Estilo.bannerText}>App Expo Potterpedia</Text>
      </View>

      <ScrollView contentContainerStyle={Estilo.scrollContainer}>
        <Text style={Estilo.sectionTitle}>Filmes</Text>
        <FlatList
          data={horizontalData}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <HorizontalCard title={item.title} image={item.image} />
          )}
          showsHorizontalScrollIndicator={false}
          style={{ marginBottom: 20 }}
        />

        <Text style={Estilo.sectionTitle}>Personagens</Text>
        {verticalData.map((item) => (
          <VerticalCard key={item.id} title={item.title} image={item.image} />
        ))}
      </ScrollView>
    </View>
  );
}
