import { Time } from "@angular/common";
import { AppointmentStatus } from "./AppointmentStatus";
export class Appointement{
    id! : Number;
    appointmentDate!: Date;
    appointmentStartTime!:Time;
    appointmentEndTime!:Time;
    AppointmentStatus ?:AppointmentStatus;
}