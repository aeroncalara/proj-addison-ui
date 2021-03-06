import React, { Component } from 'react'
import DeleteApplicant from '../ApplicantComponents/DeleteApplicant'
import {Button ,Header, Image, Dropdown,Tab, List, Form, Icon, Label, Popup , Modal ,Segment,Grid} from 'semantic-ui-react'
import './ApplicantDetails.css'
import axios from 'axios'        
import { addison_api_url } from '../Utilities/config';

export default class ApplicantDetails extends Component {

state = { open: false }

closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
	this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
}
close = () => this.setState({ open: false })

constructor(props) {
super(props)
this.state = {
	item: this.props.item,
	visible: true,
	isEdit : false,
	firstName: '',
	middleName: '',
	lastName: '',
	date_of_birth: '',

	mobile: '',
	telephone: '',
	email: '',

	number:'',
	street: '',
	city: '',
	province:'',
	country: '',

	title:'',
	position:'',
	salary:'',

	tin:'',
	sss:'',
	philhealth:'',
	hdmf: '',

	applicant: {
		success: '',
		message: '',
		data: {
			id: "",
			person:{
				first:'',
				middle:'',
				last:'',
				date_of_birth:'',
			
				contact:{
					type:'',
					telephone:'',
					number:'',
				},

				address:{
					number:'',
					street:'',
					city:'',
					province:'',
					country:'',
				}		
			},

			requested_position:{
				title:'',
				description:'',
				salary:'',
			},

			tin:'',
			sss:'',
			philhealth:'',
			hdmf: '',
			},
		}
	}
}


handleEdit = () => { 
	this.setState({ isEdit: !this.state.isEdit })
}

handleCancel = () => {
	this.setState({ 
		firstName: '',
		middleName: '',
		lastName: '',
		birthDate: '',

		type:'',
		mobile: '',
		telephone: '',
		email: '',

		number:'',
		street:'',
		city:'',
		province:'',
		country:'',

		title:'',
		description:'',
		salary:'',

		tin:'',
		sss:'',
		philhealth:'',
		hdmf: '',

		isEdit: !this.state.isEdit,
		open: !this.state.open
	})
}

handleChange = (e, type) => {
	this.setState({[type]: e.target.value})
}

componentDidMount(){
this.getApplicant()
}

getApplicant = async () => {

	let my_query = 
	`
		query
		{
			getApplicant(_id: "${this.props.match.params.id}")
			{
				message
				success
			  	data{
					_id
					person
					{
						first
						middle
						last
						date_of_birth
						address{
						  number
						  street
						  city
						  province
						  country
						}
						contact{
							type
							number
						  }
					}
					sss
					tin
					philhealth
					hdmf
					requested_position{
						title
					  	description
					  	salary
					}
				}
			}
		}
	`
	let applicant_variable = await axios({
		url: addison_api_url,
		method: 'post',
		data: {
		  query: my_query
		}
	  })
	this.setState({ applicant: applicant_variable.data.data.getApplicant })
	
}

render() {

const { open, closeOnEscape, closeOnDimmerClick, applicant } = this.state

// console.log(applicant.data.requested_position.title);

const panes = [

	
{menuItem: 'Personal', render: () =>
	<Tab.Pane> 
		<div className='EmpDetails'>
			<div className ='desc'>
				<i className="user icon"/>
					Personal Information
			</div>
		</div>

		<div>
			<hr className="hrName" />
		</div>

	<Form key={applicant} liquid>
		<Grid>
			<Grid.Column width={11}>
				<Segment raised>
							
				<Label as='a' color='teal' ribbon>
					Basic Information
				</Label>

					<Form.Group>
						<Form.Input label='First name' placeholder='First Name' width={3} readOnly={this.state.isEdit?false:true} 
						 onChange={(e) => this.handleChange(e, 'firstName')} value={applicant.data.person.first} />
						

						<Form.Input label='Middle Name' placeholder='Middle Name' width={2} readOnly={this.state.isEdit?false:true} 
						onChange={(e) => this.handleChange(e, 'middleName')} value={applicant.data.person.middle} />


						<Form.Input label='Last Name' placeholder='Last Name' width={3} readOnly={this.state.isEdit?false:true}
						 onChange={(e) => this.handleChange(e, 'lastName')} value={applicant.data.person.last}/>
					</Form.Group>

					<Form.Group>
							<Form.Input label='Birthdate' placeholder='Birthdate' width={2}  readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'birthDate')} value={applicant.data.person.date_of_birth}/>
					</Form.Group>
				
				<Label as='a' color='teal' ribbon>
					Addtional Information
				</Label>

					<Form.Group>
			
				<Form.Input label='TIN #' placeholder='TIN #' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'tin')} value={applicant.data.tin}/>
			
				<Form.Input label='SSS #' placeholder='SSS#' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'sss')} value={applicant.data.sss}/>
		
				<Form.Input label='PHILHEALTH #' placeholder='PHILHEALTH #' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'philhealth')} value={applicant.data.philhealth}/>
				
				<Form.Input label='HDMF #' placeholder='HDMF #' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'hdmf')} value={applicant.data.hdmf}/>

			</Form.Group>
				</Segment>
			</Grid.Column>
		</Grid>
	</Form>
</Tab.Pane> 
},

{menuItem: 'Contact', render: () => 
	<Tab.Pane>
		<Form key={applicant} liquid>
			<div className='EmpDetails'>
				<div className ='desc'>
					<i className="phone square icon"/>
						Contact Information
				</div>
			</div>

		<div>
			<hr className="hrName" />
		</div>  

			<Grid>
				<Grid.Column width={11}>
					<Segment raised>
			
						<Form.Group>	
							<Form.Input label='Mobile Number' placeholder='Mobile Number' readOnly={this.state.isEdit?false:true} 
							onChange={(e) => this.handleChange(e, 'mobile')} value={applicant.data.person.contact[0].number}/>

							<Form.Input label='Telephone Number' placeholder='Telephone Number'readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'telephone')} value={applicant.data.person.contact[0].number}/>
							
							<Form.Input label='Email' placeholder='Email' readOnly={this.state.isEdit?false:true} 
							onChange={(e) => this.handleChange(e, 'email')} value={applicant.data.person.contact[0].number}/>
						</Form.Group>
					</Segment>
				</Grid.Column>
			</Grid>
		</Form>
	</Tab.Pane>
},

{menuItem: 'Address', render: () => 
	<Tab.Pane>
		<Form key={applicant} liquid>
			<div className='EmpDetails'>  
				<div className ='desc'>
					<i className="map marker alternate icon"/>
						Address
				</div>
			</div>

				<div>
					<hr className="hrName" />
				</div>  
	
			<Grid>
				<Grid.Column width={11}>
					<Segment raised>
						
						<Form.Group>
							<Form.Input label='House No.' placeholder='House No.' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'street')} value={applicant.data.person.address[0].number}/>
					
							<Form.Input label='Street' placeholder='Street' readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'street')} value={applicant.data.person.address[0].street}/>
						
							<Form.Input label='City' placeholder='City'readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'city')} value={applicant.data.person.address[0].city}/>

							<Form.Input label='Province' placeholder='Province'readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'Province')} value={applicant.data.person.address[0].province}/>
						
							<Form.Input label='Country' placeholder='Country'readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'country')} value={applicant.data.person.address[0].country}/>
						</Form.Group>
					</Segment>
				</Grid.Column>
			</Grid>		
		
		</Form>
	</Tab.Pane> 
},

{menuItem: 'Position', render: () => 
	<Tab.Pane>
		<Form>
			<div className='EmpDetails'>    
				<div className ='desc'>
					<i className="users icon"/>
					Position
				</div>
			</div>

				<div>
					<hr className="hrName" />
				</div>  
			<Grid>
				<Grid.Column width={11}>
					<Segment raised>
					
						<Form.Group>
							<Form.Input label='Position' placeholder='Possition' readOnly={this.state.isEdit?false:true} 
							onChange={(e) => this.handleChange(e, 'title')} value={applicant.data.requested_position.title}/>
					
							<Form.Input label='Title Description' placeholder='Title Description'readOnly={this.state.isEdit?false:true} onChange={(e) => this.handleChange(e, 'title')} value={applicant.data.requested_position.description}/>
					
							<Form.Input label='Salary' placeholder='Salary' readOnly={this.state.isEdit?false:true} 
							onChange={(e) => this.handleChange(e, 'salary')} value={applicant.data.requested_position.salary}/>
						</Form.Group>
					</Segment>
				</Grid.Column>
			</Grid>		
		</Form>
	</Tab.Pane>
}	
]

return (
<div>
	{/* ApplicantHeader */}
	<div className = "EmployeeTop">
		{/* ViewEmployeeimage */}
		<div className='Img'>
			<Image src='https://react.semantic-ui.com/images/avatar/large/patrick.png' size='massive' circular />
		</div>

		{/* eMPLoYEEname */}
		<div className='EmpName'>
			<Header as='h2'>
				<Header.Content>
					{applicant.data.person.first} {applicant.data.person.middle} {applicant.data.person.last}
				</Header.Content>
			</Header> 
		</div>

		{/* EmployeeOptions */}
		<div className="Edit">
			<List horizontal>
				<List.Item>
					{!this.state.isEdit &&(
						<div className="Options">
							<List divided horizontal>
								<List.Item>
									<Popup
										trigger={<Dropdown text="Request a Change" />}
										content={<Button color='green'icon="edit" content='Edit'onClick={this.handleEdit} />}
										on='click'
										position='bottom center'
									/>
								</List.Item>

								<List.Item>
									<Popup
										trigger={<Dropdown icon="cogs" />}
										// <Button color='red'icon="close" content='Terminate'/ >
										content={ <DeleteApplicant/>}
										on='click'
										position='bottom right'
									/>
								</List.Item>
							</List>
						</div>
					)}
				</List.Item>
					
					<List.Item>
						{this.state.isEdit &&
							<div className='deSave'>

								<Button.Group>
									<Button animated negative fluid onClick={this.closeConfigShow(true, false)}>
											<Button.Content visible>
												<Icon name='close' />
											</Button.Content>

											<Button.Content hidden>
												Cancel
											</Button.Content>
									</Button>      
								<Button.Or />
									<Button animated positive fluid onClick={this.handleEdit}>
										<Button.Content visible>
											<Icon name='save' />
										</Button.Content>

										<Button.Content hidden>
											Save
										</Button.Content>     
									</Button>
								</Button.Group>    
							</div>
						}

						<Modal
							open={open}
							closeOnEscape={closeOnEscape}
							closeOnDimmerClick={closeOnDimmerClick}
							onClose={this.close}
						>

							<Modal.Header>Cancel Update</Modal.Header>
								<Modal.Content>
									<p>Are you sure you want to Cancel updating Employee Information?</p>
								</Modal.Content>

								<Modal.Actions>
									<Button onClick={this.close} negative>
										No
									</Button>

									<Button
										onClick={this.handleCancel}
										positive
										labelPosition="right"
										icon="checkmark"
										content="Yes"
									/>
								</Modal.Actions>
							</Modal>

					</List.Item>
			</List>

		</div>
	</div>
	
		{/* EMployee contents */}
		<div className='EmployeeContent'>
			
			{/* Details in the left */}
			<div className ='DetailsBg'>

				{/*contact Details in the left */}
				<div className ='Details'>
		
					{/* Contact Details */}
					<List animated verticalAlign='middle' selection>
						<List.Item>
							<i className="mobile icon"/>
							+639167105579
						</List.Item>

						<List.Item>
							<i className="text telephone icon"/>
								+639167105579
						</List.Item>

						<List.Item
							icon='mail' 
							content={<a href='mailto:jack@semantic-ui.com'>
								Dave@semantic-ui.com
							</a>}
						/>
					{/* </List> */}

					<hr />

					{/* Address in the left */}
					{/* <List animated verticalAlign='middle' selection verticalAlign='middle'> */}
						<List.Item>
							Applying for
						</List.Item>

						<List.Item>
							<i className="group icon"/> 
								{applicant.data.requested_position.title}
						</List.Item>

						<List.Item>
							<i className="map marker alternate icon"/>
							Sydney Australia
						</List.Item>
						
					</List>
				</div>
			</div>
s
		{/* Tabs */}
		<div className='Tabs'>
			<Tab style={{width:1500 ,height:10000 }}menu={{ secondary: true, pointing: true }} panes={panes}/>
		</div>
	</div>
</div>
)
}


}


