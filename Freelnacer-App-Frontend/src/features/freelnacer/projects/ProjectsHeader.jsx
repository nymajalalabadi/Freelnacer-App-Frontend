import useCategories from "../../../hooks/useCategories";
import Filter from "../../../ui/Filter";
import FilterDropDown from "../../../ui/FilterDropDown";

const sortOptions = [
  { value: "latest", label: "Newest" },
  { value: "earliest", label: "Oldest" }
];

const statusOptions = [
  { value: "ALL", label: "All" },
  { value: "OPEN", label: "Open" },
  { value: "CLOSED", label: "Closed" }
];

function ProjectsHeader() {

  const { transformedCategories } = useCategories();

  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="text-lg font-bold ">List Of Projects</h1>
      <div>
      <Filter filterField="status" options={statusOptions}/>
      <FilterDropDown filterField="sort" options={sortOptions}/>

        <FilterDropDown filterField="category" options={[ 
          {
            value: "All", 
            label: "All Categories" 
          },
          ...transformedCategories, 
        ]}/>

      </div>
    </div>
  )
}

export default ProjectsHeader