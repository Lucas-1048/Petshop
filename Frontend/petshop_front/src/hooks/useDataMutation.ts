import { useMutation } from "@tanstack/react-query";
import { Data } from "../interfaces/requestData";
import axios from "axios";

const postData = (data: Data) => {
    return axios.post("http://localhost:8080/send-data", data);
}

export function useDataMutation(){
    const { mutate, isSuccess, isError } = useMutation({
        mutationFn: (data: Data) => postData(data)
    })

    return {
        mutate,
        isSuccess,
        isError
    }
}