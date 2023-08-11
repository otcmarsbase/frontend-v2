import React, { Component } from 'react';

class Countdown extends Component<any, any> {
    render() {
        const { endDate = 0, now = 1, canUseDays } = this.props;

        let differeceInSeconds = (endDate - now) / 1000;
        let minutes = 0;
        let hours = 0;
        let days = 0;

        if (canUseDays && differeceInSeconds / 60 / 60 / 24 > 1) {
            while (differeceInSeconds / 60 / 60 / 24 > 1) {
                days += 1;
                differeceInSeconds -= 60 * 60 * 24;
            }
        }

        if (differeceInSeconds / 60 / 60 > 3) {
            while (differeceInSeconds / 60 / 60 > 1) {
                hours += 1;
                differeceInSeconds -= 60 * 60;
            }
        }

        while (differeceInSeconds / 60 > 1) {
            minutes += 1;
            differeceInSeconds -= 60;
        }

        return (
            <div className="Countdown" style={{ minWidth: 100, textAlign: 'right' }}>
                {days > 0 && (
                    <>
                        <span className="Countdown-col">{days.toFixed(0)}</span>
                        <span className="Countdown-col">d </span>
                    </>
                )}

                {hours > 0 && (
                    <>
                        <span className="Countdown-col">{hours.toFixed(0)}</span>
                        <span className="Countdown-col">h </span>
                    </>
                )}

                {minutes > 0 && (
                    <>
                        <span className="Countdown-col">{minutes.toFixed(0)}</span>
                        <span className="Countdown-col">m </span>
                    </>
                )}

                {hours > 0 ? null : differeceInSeconds < 0 ? (
                    this.props.withoutTicks ? null : (
                        <span className="Countdown-col">{'.'.repeat((Math.abs(Math.trunc(differeceInSeconds)) % 3) + 1)}</span>
                    )
                ) : (
                    <>
                        <span className="Countdown-col">{Math.trunc(differeceInSeconds)}</span>
                        <span className="Countdown-col">s</span>
                    </>
                )}
            </div>
        );
    }
}

export default Countdown;
