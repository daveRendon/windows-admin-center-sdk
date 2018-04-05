import { OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeographicLocation, SimpleFormData } from './data/simple-form-data';
import { SimpleFormModel } from './model/simple-form-model';
export declare class SimpleFormComponent implements OnInit {
    private router;
    private activatedRoute;
    private formbuilder;
    disableFormCheckBoxLabel: string;
    nameLabel: string;
    nameValidationErrorMessage: string;
    private nameRequiredMessage;
    requiredLabel: string;
    locationLabel: string;
    valueLabel: string;
    fileNameLabel: string;
    saveButtonLabel: string;
    saveAndCloseButtonLabel: string;
    discardButtonLabel: string;
    disableForm: boolean;
    locations: {
        displayName: string;
        value: GeographicLocation;
    }[];
    simpleForm: FormGroup;
    childFormGroup: FormGroup;
    nameFormControl: FormControl;
    originalData: SimpleFormData;
    formModel: SimpleFormModel;
    saving: boolean;
    constructor(router: Router, activatedRoute: ActivatedRoute, formbuilder: FormBuilder);
    ngOnInit(): void;
    getNameControlError(): string;
    onSaveClick(closeOnSuccess?: boolean): void;
    onSaveAndClose(): void;
    onDiscardClick(): void;
    private processValidations();
    private processNameValidation();
    private saveFormValueToModel();
    private callActionIfDirtyAndEnabled(control, action);
}