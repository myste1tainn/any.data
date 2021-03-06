import {Component} 		from '@angular/core';
import {RouteParams}	from '@angular/router-deprecated';
import {Parties} 		from '../../collections/parties';

@Component({
	selector: 'party-details',
	templateUrl: '/imports/party-details/party-details.html'
})
export class PartyDetails {
	party: Object;

	constructor(params: RouteParams) {
		var partyId = params.get('partyId');
		this.party = Parties.findOne(partyId);
	}
}