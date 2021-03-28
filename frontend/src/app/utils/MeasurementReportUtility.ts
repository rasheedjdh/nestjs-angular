import { RootObject, MeasurmentReportEnum } from "../models";

/**
 * A Functions to prepare part of the table data either the types or categories part.
 *
 * @param {number}  index - user index.
 * @param {RootObject}  data - all table data.
 * @param {enum}  measurementReport - either TYPES or CATEGORIES.
 * @return {array} set of rows to be displayed in the table
 */
export function extractMeasurementReportData(index: number, data: RootObject[], measurementReport: MeasurmentReportEnum){
    var array = []
    var traversedArray: any;
    var measurementReportValue = ''
    if(measurementReport == MeasurmentReportEnum.TYPES){
      traversedArray = data[index].measurementReport.types
      measurementReportValue = 'Type'
    }else{
      traversedArray = data[index].measurementReport.categories
      measurementReportValue = 'Categories'
    } 
    var counter = 0
     for (let entry of traversedArray) {
       counter++
      let object = {
        id: Math.random() +  counter,
        measurement_report: measurementReportValue,
        meta_type: entry.meta.type,
        meta_identifier: entry.meta.identifier,
        time_period_start: timestampToDateString(entry.time.timePeriodStart),
        time_period_end: timestampToDateString(entry.time.timePeriodEnd),
        missing_amount: entry.missing.amount,
        missing_max: entry.missing.max,
        missing_avr: entry.missing.avr,
        delay_amount: entry.delay.amount,
        delay_max: entry.delay.max,
        delay_avr: entry.delay.avr
      };
      array.push(object)
    }
   return array;
}

/**
 * A Functions to convert the timestamp to a date.
 *
 * @param {string}  timestamp
 * @return {string} full date string
 */
function timestampToDateString(timestamp: string){
  var dataConstructer = new Date(Number(timestamp) * 1000)
  return dataConstructer.toString()
}