// ...existing code...
import { useState } from "react";
import { shortenUrl } from "../services/shortenerService";
import { ShortenedUrl } from "../types";

export function useShortener() {
  const [items, setItems] = useState<ShortenedUrl[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleShorten(url: string) {
    if (!url.trim()) return;

    setLoading(true);
    try {
      const result = await shortenUrl(url);

      setItems((prev) => [
        {
          alias: result.alias,
          original: result._links.self,
          short: result._links.short,
        },
        ...prev,
      ]);
    } finally {
      setLoading(false);
    }
  }

  return {
    items,
    loading,
    handleShorten,
  };
}
