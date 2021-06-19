import React, { Component } from 'react';
import axios from 'axios';
import { ApiUrls } from '../../api/apis';
import * as Mustache from 'mustache';

import './dynamicObjective.scss'
import { TextField, MenuItem } from '@material-ui/core';
import { DynamicJSONoutput } from '../../modals/dataFormate';

class DynamicObjective extends Component {
    constructor(props) {
        super(props);
        this.state = {
            objectivesJson: {},
            result: new DynamicJSONoutput(),
            finalResult: "{}"
        }
    };

    componentDidMount() {
        axios.get(ApiUrls.Objectives)
            .then(res => {
                this.setState({
                    objectivesJson: res.data
                })
            })
            .catch((error) => {
                console.log('error---->', error);
            });
    }

    handleChangeObj = (data, objData) => {
        this.setState({ 
            result: data,
            finalResult: objData
        });
    }

    handleSelectChange = (event, index, jsonData, handleObj) => {
        let selectedIndex = event.target.value;
        let value = jsonData.values[selectedIndex];
        let values = this.state.result.values;
        let indexes = this.state.result.indexes;
        let input = {};
        values[index] = value;
        indexes[index] = selectedIndex;
        let newObj = {
          input,
          output: value.output ? value.output : this.state.result.output,
          values: values.slice(0, index + 1),
          indexes: indexes.slice(0, index + 1)
        }
        handleObj(newObj, value.output ? value.output.indexOf('{{') >= 0 ? Mustache.render(value.output, {}) : value.output : null)
    }

    handleInputChange = (event, handleObj) => {
        let value = event.target.value;
        let name = event.target.name;
        let input = this.state.result.input;
        input = {
            ...input,
            [name]: value
        }
        let newObj = {
            ...this.state.result,
            input
        }
        handleObj(newObj, Mustache.render(this.state.result.output, input));
    }

    renderObjList = (jsonData, index, handleObj, output) => {
        const list = [];
        jsonData.values.forEach((elValue, i) => list.push({ value: i, displayName: elValue.value }));
        return (
            <TextField 
                id="select" 
                key={index}
                label={jsonData.name} 
                value={this.state.result.indexes[index] >= 0 ? this.state.result.indexes[index] : ''}
                onChange={(event) => this.handleSelectChange(event, index, jsonData, handleObj)}
                required={!output}
                select
            >
                {
                    list.map((elValue, index) => {
                        return <MenuItem key={index} value={elValue.value}>{elValue.displayName}</MenuItem>
                    })
                }
            </TextField>
        )
    }

    render() {
        const { objectivesJson, result: {input, values} } = this.state;
        return (
            <div>
                {objectivesJson.values ? this.renderObjList(objectivesJson, 0, this.handleChangeObj, false) : null}
                {
                    values.map((elValue, index) => {
                        if (elValue.next) {
                            return this.renderObjList(elValue.next, index + 1, this.handleChangeObj, elValue.output)
                        }
                        if (elValue.inputs && input) {
                            return elValue.inputs.map((elem, index) => {
                                let len = input ? Object.keys(input).length : 0;
                                return <TextField
                                    key={elem.name + index}
                                    label={elem.name}
                                    name={elem.id}
                                    required={!!elem.regex}
                                    pattern={new RegExp(elem.regex, 'g')}
                                    className="text-input"
                                    value={input && len ? input[elValue.id] : ''}
                                    onChange={(event) => this.handleInputChange(event, this.handleChangeObj)}
                                    helperText={elem.helper}
                                />
                            })
                        }
                        return null;
                    })
                }
            </div>
        );
    }
};

export default DynamicObjective;