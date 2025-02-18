import useCategories from "../../../hooks/useCategories"
import FilterDropDown from "../../../ui/FilterDropDown"

function ProjectsHeader() {
  const { transformedCategories } = useCategories()
  return (
    <div className="flex items-center justify-between text-secondary-700 mb-8">
      <h1 className="text-lg font-bold ">List Of Projects</h1>
      <div>

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