import axios from 'axios'
import { addison_api_url } from '../config/addison.config'

export const user = {
	signIn: (username, password) => {
		const SIGN_IN_MUTATION = `
				mutation{
					signIn(
						username: "${username}",
						password: "${password}"
					){
						message
						success
						data{
							hash
							logged_in
						}
					}
				}
		`
		
		return axios({
			url: addison_api_url,
			method: `post`,
			data: {
				query: SIGN_IN_MUTATION
			}
		})
	},
	signOut: (username) => {
		let SIGN_OUT_QUERY = `
			mutation{
				signOut(username:"${username}"){
				message
				success
				}
			}
		`
	
		return axios({
			url: addison_api_url,
			method: `post`,
			data: {
				query: SIGN_OUT_QUERY
			}
		})
	}
}