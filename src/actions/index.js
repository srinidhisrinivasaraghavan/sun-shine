import axios from 'axios';

export const CREATE_COMPANY ='CREATE_COMPANY';
export const CREATE_ROLE ='CREATE_COMPANY';
export const CREATE_ENTITY='CREATE_ENTITY';
export const FETCH_COMPANIES='CREATE_COMPANY';
export const FETCH_ENTITIES='FETCH_ENTITIES';
export const FETCH_ROLES='FETCH_ROLES';
export const SEND_EMAIL='SEND_EMAIL';
export const CONTRACT_SIGNED='CONTRACT_SIGNED';
export const FETCH_ENTITY='FETCH_ENTITY';
export const EDIT_ENTITY='EDIT_ENTITY';
export const EMAIL_EXISTS='EMAIL_EXISTS';

const ROOT_URL = 'http://localhost:3000';

export function fetchCompanies(){
	const request = axios.get(`${ROOT_URL}/companies`);
	return{
		type:FETCH_COMPANIES,
		payload:request
	}
}

 export function createCompany(props){
	const request = axios.post(`${ROOT_URL}/company`, props);
	return{
		type:CREATE_COMPANY,
		payload:axios.get(`${ROOT_URL}/companies`)
	}
}

export function companyNameExists(companyName){
	var res;
    var request=axios.get(`${ROOT_URL}/company/${companyName}/exists`);
	return{
		type:'COMPANY_EXISTS',
		payload:request
	}
}

 export function createRole(props){
	const request = axios.post(`${ROOT_URL}/role`, props);
	return{
		type:CREATE_ROLE,
		payload:axios.get(`${ROOT_URL}/roles`)
	}
}

export function fetchRoles(){
	const request = axios.get(`${ROOT_URL}/roles`);
	return{
		type:FETCH_ROLES,
		payload:request
	}
}

export function roleNameExists(roleName){
	var res;
    var request=axios.get(`${ROOT_URL}/role/${roleName}/exists`);
	return{
		type:'ROLE_EXISTS',
		payload:request
	}
}

export function fetchEntites(){
	const request = axios.get(`${ROOT_URL}/entities`);
	return{
		type:FETCH_ENTITIES,
		payload:request
	}
}

 export function createEntity(props){
 	console.log(props);
 	if(!props.skipContract)
 		props.skipContract=false;
	const request = axios.post(`${ROOT_URL}/entities`, props);
	return{
		type:CREATE_ENTITY,
		payload:axios.get(`${ROOT_URL}/entities`)
	}
}

export function sendEmail(entityId){
	const request = axios.patch(`${ROOT_URL}/entity/${entityId}/sendemail`);
	return{
		type:SEND_EMAIL,
		payload:request
	}
}

export function contractSigned(entityId){
	const request = axios.patch(`${ROOT_URL}/entity/${entityId}/contractsigned`);
	return{
		type:CONTRACT_SIGNED,
		payload:request
	}
}

export function fetchEntity(entityId){
	const request = axios.get(`${ROOT_URL}/entity/${entityId}`);
	return{
		type:FETCH_ENTITY,
		payload:request
	}
}

export function editEntity(props, entityId){
	const request = axios.put(`${ROOT_URL}/entity/edit/${entityId}`, props);
	return{
		type:EDIT_ENTITY,
		payload:request
	}
}

export function emailExists(email){
	var res;
    var request=axios.get(`${ROOT_URL}/entity/${email}/exists`);
	return{
		type:EMAIL_EXISTS,
		payload:request
	}
}


