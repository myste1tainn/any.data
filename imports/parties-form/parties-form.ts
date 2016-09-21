import 'reflect-metadata';
import {Component} from '@angular/core';
import {FormBuilder, ControlGroup, Validators, Control} from '@angular/common';
import {Parties} from '../../collections/parties.ts';

@Component({
	selector: 'parties-form',
	templateUrl: '/imports/parties-form/parties-form.html'
})
export class PartiesForm {
	partiesForm: ControlGroup;

	constructor() {
		let fb = new FormBuilder();

		this.partiesForm = fb.group({
			name: ['', Validators.required],
			description: [''],
			location: ['', Validators.required]
		})
	}

	addParty(party) {
		if (this.partiesForm.valid) {
			Parties.insert(party);
		}

		(this.partiesForm.controls['name']).updateValue('');
		(this.partiesForm.controls['description']).updateValue('');
		(this.partiesForm.controls['location']).updateValue('');

	}
}