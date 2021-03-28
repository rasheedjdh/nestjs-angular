//#region The mapped models for the server side apis
export interface Participant {
    username: string;
}

export interface Time {
    timePeriodStart: string;
    timePeriodEnd: string;
    day: string;
}

export interface Meta {
    participant: Participant;
    time: Time;
}

export interface Meta2 {
    type: string;
    identifier: string;
}

export interface Missing {
    amount: number;
    max: number;
    avr: number;
}

export interface Delay {
    amount: number;
    max: number;
    avr: number;
}

export interface Type {
    meta: Meta2;
    time: Time;
    missing: Missing;
    delay: Delay;
}

export interface Category {
    meta: Meta2;
    time: Time;
    missing: Missing;
    delay: Delay;
}

export interface MeasurementReport {
    types: Type[];
    categories: Category[];
}

export interface RootObject {
    meta: Meta;
    measurementReport: MeasurementReport;
}
//#endregion


//#region analytics table models 
export interface tableRowModel {
    measurement_report: string;
    meta_type: string;
    meta_identifier: string;
    time_period_start: string;
    time_period_end: string;
    missing_amount: number;
    missing_max: number;
    missing_avr: number;
    delay_amount: number;
    delay_max: number;
    delay_avr: number;
}

export enum MeasurmentReportEnum{
    TYPES,
    CATEGORIES
}

export var ColumnDefs = [
    { headerName: 'Measurement Report', field: 'measurement_report'},
    { headerName: 'Meta Type', field: 'meta_type', autoHeight: true, wrapText: true},
    { headerName: 'Meta Identifier', field: 'meta_identifier', autoHeight: true, wrapText: true},
    { headerName: 'Time Period Start', field: 'time_period_start', autoHeight: true, wrapText: true},
    { headerName: 'Time Period End', field: 'time_period_end', autoHeight: true, wrapText: true},
    { headerName: 'Missing Amount', field: 'missing_amount'},
    { headerName: 'Missing Max', field: 'missing_max'},
    { headerName: 'Missing AVR', field: 'missing_avr'},
    { headerName: 'Delay Amount', field: 'delay_amount'},
    { headerName: 'Delay Max', field: 'delay_max'},
    { headerName: 'Delay AVR', field: 'delay_avr'}
  ];

//#endregion 