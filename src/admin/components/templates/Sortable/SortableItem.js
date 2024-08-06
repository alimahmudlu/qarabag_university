import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import SgWidgetItem from "@/admin/components/ui/WidgetItem";

const SortableItem = (props) => {
    const {
        indexz,
        widget,
        statusOptions,
        dataTypesOptions,
        handleChange,
        data,
        setData,
        valueErrors,
        setValueErrors,
        handleRemove
    } = props

    return (
        <SgWidgetItem
            key={indexz}
            index={indexz}
            data={widget?.widget}
            values={widget}
            statusOptions={statusOptions}
            dataTypesOptions={dataTypesOptions}
            handleChange={handleChange}
            handleRemove={handleRemove}

            Fdata={data}
            FsetData={setData}
            FvalueErrors={valueErrors}
            FsetValueErrors={setValueErrors}
        />
    )
}

export default SortableElement(SortableItem);