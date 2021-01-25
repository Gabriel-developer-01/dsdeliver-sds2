import axios from "axios";
import { Order } from "./types";

const API_URL = 'https://gabriel-dev-sds2.herokuapp.com'; //ou url do expo http://192.168.0.103:8080

export function fetchOrders(){
    return axios(`${API_URL}/orders`)
}

export function confirmDeliver(orderId: number){
    return axios.put(`${API_URL}/orders/${orderId}/delivered`)
}