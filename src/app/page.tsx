import { CategoryList, SearchBar } from "./components/home";

export default function HomePage() {
  return (
    <div className="baseWrapper">
      <SearchBar />

      <CategoryList />
    </div>
  );
}
