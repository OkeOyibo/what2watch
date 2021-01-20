import React, { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker'
import { getCategories } from '../services/MovieService'
import { addListener, removeListener } from '../services/ShakeService'

function Categories (props) {
    const [data, setData] = useState([])
    const [values, setValues] = useState([])

    let controller

    useEffect(() => {
        async function fetchData() {
            try {
                let response = await getCategories();
                let genres = await response.genres;
                console.log(genres);
                setData(genres);
            }
            catch(error){ console.log(error); }
        };
        if (!data.length > 0) {
            fetchData();
        }
    }, [])

    return(
        <DropDownPicker
            placeholder={"Select categories"}
            multiple={true}
            multipleText="%d items out of 3"
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
            items={
                data.map((item) => {
                return {
                    label: item.name,
                    value: item.id
                }})
            }
            defaultValue={''}
            controller={instance => controller = instance}
            onChangeItem={item => setValues(item.value)}
        />
    );  
}

export default Categories;