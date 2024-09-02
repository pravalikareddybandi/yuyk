import Categories from "./components/Categories";
import PropertyList from "./components/properties/PropertyList";
import FilterComponent from "./components/property-filter/FilterPanel";

export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      <div>
        {" "}
        <Categories />
      </div>
      <div className="flex">
        <div className="w-2/5">
          <FilterComponent />
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-5/5">
          <PropertyList />
        </div>
      </div>
    </main>
  );
}
//om sai ram.
