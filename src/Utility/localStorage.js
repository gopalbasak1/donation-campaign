import { toast } from "react-toastify";

export const saveToLocalStorage = (data) => {
    const saveData = JSON.parse(localStorage.getItem("donation") || "[]");

    const existsData = saveData.find(item => item.id === data.id);
    if (!existsData) {
        saveData.push(data);
        localStorage.setItem("donation", JSON.stringify(saveData));
        toast.success("Added successfully to local storage.");
    } else {
        toast.warning("Data already exists in local storage.");
    }
};


export const getFormLocalStorage = () =>{
    const data = JSON.parse(localStorage.getItem("donation")) || [] ;
    return data;
}