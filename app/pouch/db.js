import PouchDB from 'pouchdb';

export const name = 'stuff';
const local = new PouchDB(name);

const options = {
		ajax: {
			headers: {
				//Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkb2MiOiJkb24iLCJpYXQiOjE0MzU2NjEyNDl9.mNV6Cv1FI7n0SGF70P_wRsVRymdG20nUuwfChWcB1qM',
			}
		}
	};
const remote = new PouchDB('http://localhost:5984/redux', {});
local.replicate.from(remote,{since:0, live:true, retry:true});
local.replicate.to(remote,{since:0, live:true, retry:true});
export default local;
