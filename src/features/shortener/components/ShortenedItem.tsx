import { ItemContainer, Original, Short } from "../styles";
import { ShortenedUrl } from "../types";

interface Props {
  item: ShortenedUrl;
}

export function ShortenedItem({ item }: Props) {
  return (
    <ItemContainer>
      <Original>{item.original}</Original>
      <Short>{item.short}</Short>
    </ItemContainer>
  );
}
