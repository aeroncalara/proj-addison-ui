import axios from 'axios'
import { addison_api_url } from '../config/addison.config'

export const employee = {
  getAll: () => {
    let GET_ALL_EMPLOYEE = `
    query
      {
        getAllEmployees
        {
          _id
          person
          {
            first
            middle
            last
            date_of_birth
            contact
            {
                mobile_number
                telephone_number
                email_address
              }
            address
            {
              number
              street
              city
              province
              country
              
            }
          }
          position
          {
            title
          }
        }
      }
    `

    return axios({
      url: addison_api_url,
      method: `post`,
      data: {
        query: GET_ALL_EMPLOYEE
      }
    })
  }
}