import axios from 'axios'
import { Car } from './types'

axios.defaults.url = "http://localhost:8000"


export async function getCars(){
	const {data} = await axios.get("/cars")
	return [{
		"id":1,
		"marque":"Renault",
		"modele": "Clio",
		"annee": "2007",
		"couleur":"bleu",
		"prix":30000
	}]

}

export async function addCar(body:Car){
	const {data} = await axios.post("/cars",body)
	return data
}

export async function editCar({id,car}:{id:number,car:Car}){
	const {data} = await axios.patch(`/cars/${id}`,car)
	return data
}

export async function deleteCar(id:number){
	const {data} = await axios.delete(`/cars/${id}`)
	return data
}
