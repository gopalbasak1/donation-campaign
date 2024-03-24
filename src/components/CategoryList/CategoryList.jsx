import CardDefault from "../Card/CardDefault";
import CustomSpinner from "../CustomSpinner/CustomSpinner";


const CategoryList = ({loading,filteredData}) => {

   if(loading){
    return <CustomSpinner></CustomSpinner>
   }
    

    return (
        <div className="grid grid-cols-4 gap-8 max-w-7xl mx-auto py-3 mt-12">
            {
                filteredData.map((item) => <CardDefault key={item.id} item={item}></CardDefault>)
            }
        </div>
    );
};

export default CategoryList;