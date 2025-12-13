import { useState, useMemo } from "react";
import rulesData from "./rules";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import RuleList from "./components/RuleList";
import CompliantCounter from "./components/CompliantCounter";
import ProgressBar from "./components/ProgressBar";
import Footer from "./components/Footer";

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [globalCompliantMap, setGlobalCompliantMap] = useState({});

  const categories = useMemo(() => {
    return [...new Set(rulesData.map(r => r.category))];
  }, []);

  function handleToggle(id, isCompliant) {
    setGlobalCompliantMap(prev => ({
      ...prev,
      [id]: isCompliant
    }));
  }

  const filteredRules = rulesData.filter(rule => {
    const matchesQuery =
      (rule.title + rule.category)
        .toLowerCase()
        .includes(query.toLowerCase());

    const matchesCategory =
      category ? rule.category === category : true;

    return matchesQuery && matchesCategory;
  });

  const total = rulesData.length;
  const compliantCount = Object.values(globalCompliantMap).filter(Boolean).length;

  return (
    <div>
      <Header />

      <SearchBar value={query} onChange={setQuery} />
      <CategoryFilter
        categories={categories}
        value={category}
        onChange={setCategory}
      />

      <CompliantCounter count={compliantCount} total={total} />
      <ProgressBar value={compliantCount} max={total} />

      <RuleList rules={filteredRules} onToggle={handleToggle} />

      <Footer />
    </div>
  );
}
