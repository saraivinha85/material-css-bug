import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { EventContext, Styled } from 'direflow-component'
import RootRef from '@material-ui/core/RootRef'
import styles from './App.css';

import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'

const App = (props) => {
const domRef = React.createRef();
    const dispatch = useContext(EventContext);

    return (
        <Styled styles={styles}>
            <div className='app'>
                <RootRef rootRef={domRef}>
                <div>
                    <FormControl>
                        <InputLabel>Age</InputLabel>
                        <Select style={{ width: 100 }} MenuProps={{ container: domRef.current }}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </RootRef>
            </div>
        </Styled>
    );
};

App.defaultProps = {
    componentTitle: 'Aa Component',
    sampleList: [
        'Create with React',
        'Build as Web Component',
        'Use it anywhere!',
    ],
}

App.propTypes = {
    componentTitle: PropTypes.string,
    sampleList: PropTypes.array,
};

export default App;
