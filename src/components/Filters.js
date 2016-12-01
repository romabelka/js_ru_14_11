import React, { Component, PropTypes } from 'react'
import DateRange from './DateRange'
import SelectFilter from './SelectFilter'

class Filter extends Component {
    static propTypes = {
    };

    render() {
        return (
            <div>
                <DateRange />
                <SelectFilter />
            </div>
        )
    }
}

export default Filter