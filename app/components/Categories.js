import React, { useEffect, useState } from 'react';
import { getCategories } from '../services/MovieService'
import DropDownPicker from 'react-native-dropdown-picker'

function Categories (props) {
    const [data, setData] = useState([])
    const [values, setValues] = useState([])
    const [items, setItems] = useState([])

    let controller

    useEffect(() => {
        async function fetchData() {
            const response = await getCategories()
            setData(response);
        };
        fetchData();
        setItems(
            data.map((item) => {
                return {
                    label: item.name,
                    value: item.id
                }
            })
        )
    }, [])

    return(
        <DropDownPicker
            placeholder={"Select categories"}
            multiple={true}
            multipleText="%d items have been selected."
            min={0}
            max={3}
            style={{
                backgroundColor: 'red',
                borderColor: 'red',
                flexDirection: 'row',
            }}           
            containerStyle={{
                height: 60, width: '100%',
            }}
            labelStyle={{
                color: 'black',
                fontSize: 20
            }}
            itemStyle={{
                color: 'black'
            }}
            dropDownStyle={{

            }}
            dropDownMaxHeight={225}
            arrowColor={'white'}
            items={items}
            defaultValue={''}
            controller={instance => controller = instance}
            onChangeItem={item => setValues(item.value)}
        />
    );  
}

export default Categories;