import React from "react"
import CalendarComponent from "react-calendar"
import "./Calendar.scss"

type CalendarProps = {}

export const Calendar: React.FC<CalendarProps> = (props) => {
	return (
		<div className={"calendar-input-style"}>
			<CalendarComponent />
		</div>
	)
}
