import { useState } from "react";
import { FlatList } from "react-native";

import { ShortenedItem } from "./components/ShortenedItem";
import { useShortener } from "./hooks/useShortener";
import {
    Button,
    ButtonText,
    Container,
    Input,
} from "./styles";

export default function ShortenerScreen() {
  const [url, setUrl] = useState("");
  const { items, loading, handleShorten } = useShortener();

  return (
    <Container>
      <Input
        placeholder="Digite a URL"
        value={url}
        onChangeText={setUrl}
        autoCapitalize="none"
      />

      <Button
        onPress={() => {
          handleShorten(url);
          setUrl("");
        }}
        disabled={loading}
      >
        <ButtonText>
          {loading ? "Encurtando..." : "Encurtar"}
        </ButtonText>
      </Button>

      <FlatList
        style={{ marginTop: 20 }}
        data={items}
        keyExtractor={(item) => item.alias}
        renderItem={({ item }) => <ShortenedItem item={item} />}
      />
    </Container>
  );
}
